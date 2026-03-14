"""Core HTTP client for the Roteiro GIS API.

Provides a ``RoteiroClient`` class with automatic retry, exponential back-off,
custom error handling, and typed helper methods for the core handwritten SDK
surface. Domain-specific helpers also live in separate modules
(``collections``, ``layers``, ``vcs``, ``pipeline``, ``attachments``,
``raster``, ``indoor``) which accept a ``RoteiroClient`` instance.
"""

from __future__ import annotations

import json
import time
from typing import Any, Dict, List, Optional, Tuple, Union
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlencode
from urllib.request import Request, urlopen

from .models import (
    Attachment,
    Collection,
    Commit,
    ConvertResult,
    Dataset,
    DiffResult,
    DiffSummary,
    Feature,
    FeatureCollection,
    HealthStatus,
    HostedLayer,
    IndoorBuilding,
    IndoorFloor,
    IndoorModel,
    IndoorSpace,
    RasterMosaicInfo,
    ProcessBatchSubmitResponse,
    ProcessJobRecord,
    ProcessPreflightResult,
    NavigationResult,
    ProcessResult,
    RasterExportResult,
    RasterBandValues,
    RasterDimensions,
    RasterHistogram,
    RasterInfo,
    RasterStats,
    Repo,
    ZonalStatsResult,
)


# ---------------------------------------------------------------------------
# Exceptions
# ---------------------------------------------------------------------------


def _encode_path_value(value: Any) -> str:
    """Encode a value for safe use within a single URL path segment."""
    return quote(str(value), safe="")


def _with_query(
    path: str,
    params: Union[Dict[str, Any], List[Tuple[str, Any]]],
) -> str:
    """Append a URL-encoded query string, omitting ``None`` values."""
    if isinstance(params, dict):
        items = [(key, value) for key, value in params.items() if value is not None]
    else:
        items = [(key, value) for key, value in params if value is not None]

    if not items:
        return path
    return f"{path}?{urlencode(items, doseq=True)}"


class RoteiroError(Exception):
    """Base exception for all Roteiro SDK errors."""

    def __init__(self, message: str, status_code: Optional[int] = None) -> None:
        super().__init__(message)
        self.status_code = status_code


class RoteiroAPIError(RoteiroError):
    """Raised when the API returns a non-success HTTP status code."""


class RoteiroConnectionError(RoteiroError):
    """Raised when the client cannot connect to the server."""


class RoteiroTimeoutError(RoteiroError):
    """Raised when a request exceeds the configured timeout."""


# ---------------------------------------------------------------------------
# Client
# ---------------------------------------------------------------------------


class RoteiroClient:
    """Python client for the Roteiro GIS API.

    Supports automatic retry with exponential back-off for transient errors
    (HTTP 429, 502, 503, 504) and connection failures.

    Usage::

        client = RoteiroClient("http://localhost:8080")
        health = client.health()
        collections = client.list_collections()
        features = client.get_items("buildings", limit=100)
    """

    # HTTP status codes that are eligible for automatic retry.
    _RETRYABLE_STATUS_CODES = {429, 502, 503, 504}

    def __init__(
        self,
        base_url: str,
        api_key: Optional[str] = None,
        project_id: Optional[int] = None,
        timeout: int = 30,
        max_retries: int = 3,
        backoff_factor: float = 0.5,
    ) -> None:
        """Initialise the client.

        Args:
            base_url: Root URL of the Roteiro server (e.g. ``http://localhost:8080``).
            api_key: Optional API key sent as ``X-API-Key`` header.
            project_id: Optional project scope sent as ``X-Project-ID``.
            timeout: Request timeout in seconds.
            max_retries: Maximum number of retry attempts for transient errors.
            backoff_factor: Multiplier for exponential back-off between retries.
        """
        self.base_url: str = base_url.rstrip("/")
        self.api_key: Optional[str] = api_key
        self.project_id: Optional[int] = project_id
        self.timeout: int = timeout
        self.max_retries: int = max_retries
        self.backoff_factor: float = backoff_factor

    # ------------------------------------------------------------------
    # Internal HTTP helpers
    # ------------------------------------------------------------------

    def _build_headers(self, extra: Optional[Dict[str, str]] = None) -> Dict[str, str]:
        """Build the default headers for a request."""
        headers: Dict[str, str] = {"Accept": "application/json"}
        if self.api_key:
            headers["X-API-Key"] = self.api_key
        if self.project_id is not None:
            headers["X-Project-ID"] = str(self.project_id)
        if extra:
            headers.update(extra)
        return headers

    def _effective_project_id(self, project_id: Optional[int] = None) -> Optional[int]:
        if project_id is not None:
            return project_id
        return self.project_id

    def _with_project_id(
        self, body: Dict[str, Any], project_id: Optional[int] = None
    ) -> Dict[str, Any]:
        effective_project_id = self._effective_project_id(project_id)
        if effective_project_id is None or body.get("project_id") is not None:
            return body
        scoped = dict(body)
        scoped["project_id"] = effective_project_id
        return scoped

    def _with_project_query(self, path: str) -> str:
        if self.project_id is None:
            return path
        separator = "&" if "?" in path else "?"
        return f"{path}{separator}{urlencode({'project_id': self.project_id})}"

    def _request(
        self,
        method: str,
        path: str,
        body: Any = None,
        extra_headers: Optional[Dict[str, str]] = None,
    ) -> Any:
        """Execute an HTTP request with retry logic.

        Returns the parsed JSON response body, or ``None`` for 204 responses.

        Raises:
            RoteiroAPIError: If the server returns a non-retryable error status.
            RoteiroConnectionError: If the server is unreachable after retries.
            RoteiroTimeoutError: If the request times out after retries.
        """
        url = f"{self.base_url}{path}"
        data: Optional[bytes] = None
        headers = self._build_headers(extra_headers)

        if body is not None:
            data = json.dumps(body).encode("utf-8")
            headers.setdefault("Content-Type", "application/json")

        last_error: Optional[Exception] = None
        for attempt in range(self.max_retries + 1):
            if attempt > 0:
                delay = self.backoff_factor * (2 ** (attempt - 1))
                time.sleep(delay)

            req = Request(url, data=data, headers=headers, method=method)
            try:
                with urlopen(req, timeout=self.timeout) as resp:
                    status = resp.status
                    if status == 204:
                        return None
                    raw = resp.read()
                    if not raw:
                        return None
                    return json.loads(raw)
            except HTTPError as exc:
                status = exc.code
                if status in self._RETRYABLE_STATUS_CODES:
                    last_error = exc
                    continue
                body_text = exc.read().decode(errors="replace")
                msg = f"API error: {status}"
                try:
                    err = json.loads(body_text)
                    msg = err.get("error") or err.get("message") or msg
                except (json.JSONDecodeError, ValueError):
                    pass
                raise RoteiroAPIError(msg, status_code=status) from exc
            except URLError as exc:
                if "timed out" in str(exc.reason):
                    last_error = exc
                    continue
                last_error = exc
                continue

        # All retries exhausted.
        if last_error is not None:
            if isinstance(last_error, HTTPError):
                raise RoteiroAPIError(
                    f"Request failed after {self.max_retries} retries: HTTP {last_error.code}",
                    status_code=last_error.code,
                )
            if "timed out" in str(last_error):
                raise RoteiroTimeoutError(
                    f"Request timed out after {self.max_retries} retries"
                )
            raise RoteiroConnectionError(
                f"Connection failed after {self.max_retries} retries: {last_error}"
            )
        raise RoteiroConnectionError("Request failed with no error information")

    def _get(self, path: str) -> Any:
        """Perform an HTTP GET request."""
        return self._request("GET", path)

    def _post(self, path: str, body: Any = None) -> Any:
        """Perform an HTTP POST request."""
        return self._request("POST", path, body)

    def _put(self, path: str, body: Any = None) -> Any:
        """Perform an HTTP PUT request."""
        return self._request("PUT", path, body)

    def _delete(self, path: str) -> None:
        """Perform an HTTP DELETE request."""
        self._request("DELETE", path)

    def _upload_file(
        self,
        path: str,
        file_path: str,
        field_name: str = "file",
        extra_fields: Optional[Dict[str, str]] = None,
    ) -> Any:
        """Upload a file using multipart/form-data.

        Args:
            path: API path to POST to.
            file_path: Local filesystem path of the file to upload.
            field_name: Name of the form field for the file.
            extra_fields: Additional form fields to include.

        Returns:
            Parsed JSON response body.
        """
        import mimetypes
        import os

        boundary = f"----RoteiroSDK{int(time.time() * 1000)}"
        filename = os.path.basename(file_path)
        content_type = mimetypes.guess_type(filename)[0] or "application/octet-stream"

        body_parts: List[bytes] = []

        # Extra form fields.
        if extra_fields:
            for key, value in extra_fields.items():
                body_parts.append(f"--{boundary}\r\n".encode())
                body_parts.append(
                    f'Content-Disposition: form-data; name="{key}"\r\n\r\n'.encode()
                )
                body_parts.append(f"{value}\r\n".encode())

        # File field.
        body_parts.append(f"--{boundary}\r\n".encode())
        body_parts.append(
            f'Content-Disposition: form-data; name="{field_name}"; filename="{filename}"\r\n'.encode()
        )
        body_parts.append(f"Content-Type: {content_type}\r\n\r\n".encode())
        with open(file_path, "rb") as f:
            body_parts.append(f.read())
        body_parts.append(b"\r\n")
        body_parts.append(f"--{boundary}--\r\n".encode())

        data = b"".join(body_parts)
        url = f"{self.base_url}{path}"
        headers = self._build_headers(
            {"Content-Type": f"multipart/form-data; boundary={boundary}"}
        )

        req = Request(url, data=data, headers=headers, method="POST")
        try:
            with urlopen(req, timeout=self.timeout) as resp:
                raw = resp.read()
                if not raw:
                    return None
                return json.loads(raw)
        except HTTPError as exc:
            body_text = exc.read().decode(errors="replace")
            msg = f"Upload failed: {exc.code}"
            try:
                err = json.loads(body_text)
                msg = err.get("error") or err.get("message") or msg
            except (json.JSONDecodeError, ValueError):
                pass
            raise RoteiroAPIError(msg, status_code=exc.code) from exc

    def _download(self, path: str, output_path: str) -> None:
        """Download a binary response to a local file.

        Args:
            path: API path to GET.
            output_path: Local filesystem path to write the content to.
        """
        url = f"{self.base_url}{path}"
        headers = self._build_headers()
        req = Request(url, headers=headers, method="GET")
        try:
            with urlopen(req, timeout=self.timeout) as resp:
                with open(output_path, "wb") as f:
                    while True:
                        chunk = resp.read(8192)
                        if not chunk:
                            break
                        f.write(chunk)
        except HTTPError as exc:
            raise RoteiroAPIError(
                f"Download failed: {exc.code}", status_code=exc.code
            ) from exc

    def _request_bytes(
        self,
        method: str,
        path: str,
        body: Any = None,
        extra_headers: Optional[Dict[str, str]] = None,
    ) -> bytes:
        """Execute an HTTP request and return the raw response bytes."""
        url = f"{self.base_url}{path}"
        data: Optional[bytes] = None
        headers = self._build_headers(extra_headers)

        if body is not None:
            data = json.dumps(body).encode("utf-8")
            headers.setdefault("Content-Type", "application/json")

        req = Request(url, data=data, headers=headers, method=method)
        try:
            with urlopen(req, timeout=self.timeout) as resp:
                return resp.read()
        except HTTPError as exc:
            body_text = exc.read().decode(errors="replace")
            msg = f"API error: {exc.code}"
            try:
                err = json.loads(body_text)
                msg = err.get("error") or err.get("message") or msg
            except (json.JSONDecodeError, ValueError):
                pass
            raise RoteiroAPIError(msg, status_code=exc.code) from exc

    # ------------------------------------------------------------------
    # Health & Info
    # ------------------------------------------------------------------

    def health(self) -> HealthStatus:
        """Get the server health status.

        Returns:
            A HealthStatus object with status, version, and uptime.
        """
        data = self._get("/health")
        return HealthStatus.from_dict(data)

    # ------------------------------------------------------------------
    # Datasets
    # ------------------------------------------------------------------

    def list_datasets(self) -> List[Dataset]:
        """List all registered datasets.

        Returns:
            A list of Dataset objects.
        """
        data = self._get("/datasets")
        return [Dataset.from_dict(d) for d in data]

    def register_dataset(
        self,
        name: str,
        path: str,
        fmt: str = "",
        crs: str = "",
        project_id: Optional[int] = None,
    ) -> Dataset:
        """Register a new dataset.

        Args:
            name: Dataset name.
            path: Filesystem path to the data file.
            fmt: Data format (e.g. ``geojson``, ``parquet``).
            crs: Coordinate reference system identifier.
            project_id: Optional project to attach the dataset to.

        Returns:
            The registered Dataset.
        """
        data = self._post(
            "/datasets",
            self._with_project_id(
                {"name": name, "path": path, "format": fmt, "crs": crs},
                project_id=project_id,
            ),
        )
        return Dataset.from_dict(data)

    def delete_dataset(self, name: str) -> None:
        """Delete a dataset registration.

        Args:
            name: Dataset name to remove.
        """
        self._delete(f"/datasets/{_encode_path_value(name)}")

    # ------------------------------------------------------------------
    # Collections (OGC API Features)
    # ------------------------------------------------------------------

    def list_collections(self) -> List[Collection]:
        """List OGC API collections.

        Returns:
            A list of Collection objects.
        """
        resp = self._get("/collections")
        return [Collection.from_dict(c) for c in resp.get("collections", [])]

    def get_collection(self, collection_id: str) -> Collection:
        """Get a single collection.

        Args:
            collection_id: The collection identifier.

        Returns:
            A Collection object.
        """
        data = self._get(f"/collections/{_encode_path_value(collection_id)}")
        return Collection.from_dict(data)

    def get_items(
        self,
        collection_id: str,
        *,
        bbox: Optional[str] = None,
        bbox_crs: Optional[str] = None,
        crs: Optional[str] = None,
        limit: Optional[int] = None,
        where: Optional[str] = None,
        datetime: Optional[str] = None,
        offset: Optional[int] = None,
    ) -> FeatureCollection:
        """Query features from a collection.

        Args:
            collection_id: The collection identifier.
            bbox: Bounding box filter (``minx,miny,maxx,maxy``).
            bbox_crs: CRS identifier for the bbox coordinates.
            crs: CRS identifier for the response geometries.
            limit: Maximum number of features to return.
            where: CQL2 filter expression.
            datetime: RFC3339 instant or interval temporal filter.
            offset: Number of matching features to skip.

        Returns:
            A FeatureCollection with matching features.
        """
        path = _with_query(
            f"/collections/{_encode_path_value(collection_id)}/items",
            [
                ("bbox", bbox),
                ("bbox-crs", bbox_crs),
                ("crs", crs),
                ("limit", limit),
                ("filter", where),
                ("datetime", datetime),
                ("offset", offset),
            ],
        )
        data = self._get(path)
        return FeatureCollection.from_dict(data)

    def query_features(
        self,
        collection_id: str,
        *,
        bbox: Optional[str] = None,
        bbox_crs: Optional[str] = None,
        crs: Optional[str] = None,
        limit: Optional[int] = None,
        filter_expr: Optional[str] = None,
        datetime: Optional[str] = None,
        offset: Optional[int] = None,
    ) -> FeatureCollection:
        """Alias of ``get_items`` using ``filter_expr`` naming."""
        return self.get_items(
            collection_id,
            bbox=bbox,
            bbox_crs=bbox_crs,
            crs=crs,
            limit=limit,
            where=filter_expr,
            datetime=datetime,
            offset=offset,
        )

    def get_item(self, collection_id: str, feature_id: str) -> Feature:
        """Get a single feature from a collection.

        Args:
            collection_id: The collection identifier.
            feature_id: The feature identifier.

        Returns:
            A Feature object.
        """
        data = self._get(
            f"/collections/{_encode_path_value(collection_id)}/items/{_encode_path_value(feature_id)}"
        )
        return Feature.from_dict(data)

    def get_feature(self, collection_id: str, feature_id: str) -> Feature:
        """Alias of ``get_item``."""
        return self.get_item(collection_id, feature_id)

    def create_item(self, collection_id: str, feature: dict) -> Feature:
        """Create a new feature in a collection.

        Args:
            collection_id: The collection identifier.
            feature: A GeoJSON Feature dict.

        Returns:
            The created Feature.
        """
        data = self._request(
            "POST",
            f"/collections/{_encode_path_value(collection_id)}/items",
            body=feature,
            extra_headers={"Content-Type": "application/geo+json"},
        )
        return Feature.from_dict(data)

    def create_feature(self, collection_id: str, feature: dict) -> Feature:
        """Alias of ``create_item``."""
        return self.create_item(collection_id, feature)

    def update_item(
        self,
        collection_id: str,
        feature_id: str,
        feature: dict,
    ) -> Feature:
        """Update an existing feature in a collection.

        Args:
            collection_id: The collection identifier.
            feature_id: The feature identifier to update.
            feature: A GeoJSON Feature dict with updated data.

        Returns:
            The updated Feature.
        """
        data = self._request(
            "PUT",
            f"/collections/{_encode_path_value(collection_id)}/items/{_encode_path_value(feature_id)}",
            body=feature,
            extra_headers={"Content-Type": "application/geo+json"},
        )
        return Feature.from_dict(data)

    def update_feature(
        self,
        collection_id: str,
        feature_id: str,
        feature: dict,
    ) -> Feature:
        """Alias of ``update_item``."""
        return self.update_item(collection_id, feature_id, feature)

    def delete_item(self, collection_id: str, feature_id: str) -> None:
        """Delete a feature from a collection.

        Args:
            collection_id: The collection identifier.
            feature_id: The feature identifier to delete.
        """
        self._delete(
            f"/collections/{_encode_path_value(collection_id)}/items/{_encode_path_value(feature_id)}"
        )

    def delete_feature(self, collection_id: str, feature_id: str) -> None:
        """Alias of ``delete_item``."""
        self.delete_item(collection_id, feature_id)

    # ------------------------------------------------------------------
    # Processing
    # ------------------------------------------------------------------

    def convert(
        self,
        input_path: str,
        output_format: str,
        output_name: Optional[str] = None,
        register: bool = True,
        project_id: Optional[int] = None,
    ) -> ConvertResult:
        """Convert a dataset to another format.

        Args:
            input_path: Name of the input dataset.
            output_format: Target format (e.g. ``parquet``, ``gpkg``).
            output_name: Optional name for the output dataset.
            register: Whether to register the output as a new dataset.
            project_id: Optional project to attach the output dataset to.

        Returns:
            A ConvertResult with conversion details.
        """
        body: Dict[str, Any] = {
            "input": input_path,
            "output_format": output_format,
            "register": register,
        }
        if output_name:
            body["output_name"] = output_name
        data = self._post(
            "/api/convert",
            self._with_project_id(body, project_id=project_id),
        )
        return ConvertResult.from_dict(data)

    def process(
        self,
        operation: str,
        input_path: Optional[str] = None,
        params: Optional[Dict[str, Any]] = None,
        output_format: Optional[str] = None,
        *,
        input_geojson: Any = None,
        register: Optional[bool] = None,
        output_name: Optional[str] = None,
        project_id: Optional[int] = None,
    ) -> ProcessResult:
        """Run a spatial processing operation.

        Args:
            operation: Operation name (e.g. ``buffer``, ``clip``, ``simplify``).
            input_path: Optional input dataset name.
            params: Operation-specific parameters.
            input_geojson: Optional inline GeoJSON input instead of a dataset reference.
            output_format: Optional output format (``geojson`` for inline results).
            register: Whether the output should be registered as a dataset.
            output_name: Optional output dataset name.
            project_id: Optional project to scope dataset resolution and outputs.

        Returns:
            A ProcessResult with operation statistics.
        """
        body: Dict[str, Any] = {
            "operation": operation,
            "params": params or {},
        }
        if input_path is not None:
            body["input"] = input_path
        if input_geojson is not None:
            body["input_geojson"] = input_geojson
        if output_format:
            body["output_format"] = output_format
        if register is not None:
            body["register"] = register
        if output_name:
            body["output_name"] = output_name
        data = self._post(
            "/api/process",
            self._with_project_id(body, project_id=project_id),
        )
        return ProcessResult.from_dict(data)

    def diff(
        self,
        left: str,
        right: str,
        match_field: Optional[str] = None,
    ) -> DiffSummary:
        """Compare two datasets.

        Args:
            left: Name of the left (base) dataset.
            right: Name of the right (target) dataset.
            match_field: Field name to match features between datasets.

        Returns:
            A DiffSummary with counts of added, removed, modified, and unchanged features.
        """
        body: Dict[str, Any] = {"left": left, "right": right}
        if match_field:
            body["match_field"] = match_field
        data = self._post("/api/diff", body)
        return DiffSummary.from_dict(data)

    def list_operations(self) -> Dict[str, Any]:
        """List available processing operations and output formats."""
        return self._get("/api/operations")

    def preflight_process(
        self,
        operation: str,
        input_path: Optional[str] = None,
        params: Optional[Dict[str, Any]] = None,
        *,
        input_geojson: Any = None,
        output_format: Optional[str] = None,
        register: Optional[bool] = None,
        output_name: Optional[str] = None,
        project_id: Optional[int] = None,
    ) -> ProcessPreflightResult:
        """Validate and normalize a processing request without executing it."""
        body: Dict[str, Any] = {
            "operation": operation,
            "params": params or {},
        }
        if input_path is not None:
            body["input"] = input_path
        if input_geojson is not None:
            body["input_geojson"] = input_geojson
        if output_format:
            body["output_format"] = output_format
        if register is not None:
            body["register"] = register
        if output_name:
            body["output_name"] = output_name
        data = self._post(
            "/api/process/preflight",
            self._with_project_id(body, project_id=project_id),
        )
        return ProcessPreflightResult.from_dict(data)

    def submit_process_job(
        self,
        operation: str,
        input_path: Optional[str] = None,
        params: Optional[Dict[str, Any]] = None,
        *,
        input_geojson: Any = None,
        output_format: Optional[str] = None,
        register: Optional[bool] = None,
        output_name: Optional[str] = None,
        project_id: Optional[int] = None,
    ) -> ProcessJobRecord:
        """Submit an asynchronous processing job."""
        body: Dict[str, Any] = {
            "operation": operation,
            "params": params or {},
        }
        if input_path is not None:
            body["input"] = input_path
        if input_geojson is not None:
            body["input_geojson"] = input_geojson
        if output_format:
            body["output_format"] = output_format
        if register is not None:
            body["register"] = register
        if output_name:
            body["output_name"] = output_name
        data = self._request(
            "POST",
            "/api/process/jobs",
            self._with_project_id(body, project_id=project_id),
        )
        return ProcessJobRecord.from_dict(data)

    def list_process_jobs(
        self,
        status: Optional[str] = None,
        search: Optional[str] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None,
    ) -> List[ProcessJobRecord]:
        """List asynchronous processing jobs for the current tenant."""
        query: Dict[str, Any] = {}
        if status:
            query["status"] = status
        if search:
            query["search"] = search
        if limit is not None:
            query["limit"] = limit
        if offset is not None:
            query["offset"] = offset
        path = "/api/process/jobs"
        if query:
            path = f"{path}?{urlencode(query)}"
        data = self._get(path)
        return [ProcessJobRecord.from_dict(item) for item in data or []]

    def get_process_job(self, job_id: str) -> ProcessJobRecord:
        """Get an asynchronous processing job by ID."""
        data = self._get(f"/api/process/jobs/{_encode_path_value(job_id)}")
        return ProcessJobRecord.from_dict(data)

    def cancel_process_job(self, job_id: str) -> None:
        """Cancel an asynchronous processing job."""
        self._delete(f"/api/process/jobs/{_encode_path_value(job_id)}")

    def rerun_process_job(self, job_id: str) -> ProcessJobRecord:
        """Re-submit a completed or failed processing job."""
        data = self._request(
            "POST",
            f"/api/process/jobs/{_encode_path_value(job_id)}/rerun",
        )
        return ProcessJobRecord.from_dict(data)

    def raster_process(
        self,
        operation: str,
        input_path: Optional[str] = None,
        params: Optional[Dict[str, Any]] = None,
        *,
        output_path: Optional[str] = None,
        band: Optional[int] = None,
    ) -> Dict[str, Any]:
        """Run a generic raster processing operation via ``/api/raster/process``."""
        body: Dict[str, Any] = {
            "operation": operation,
            "params": params or {},
        }
        if input_path is not None:
            body["input_path"] = input_path
        if output_path is not None:
            body["output_path"] = output_path
        if band is not None:
            body["band"] = band
        return self._post("/api/raster/process", body)

    def raster_mosaic(
        self,
        names: List[str],
        *,
        band: int = 0,
        operation: str = "first",
        colormap: str = "greyscale",
    ) -> bytes:
        """Render a PNG mosaic from registered raster datasets."""
        return self._request_bytes(
            "POST",
            "/api/raster/mosaic",
            {
                "names": names,
                "band": band,
                "operation": operation,
                "colormap": colormap,
            },
        )

    def get_raster_mosaic_info(self, names: List[str]) -> RasterMosaicInfo:
        """Fetch combined metadata for a raster mosaic request."""
        data = self._get(
            _with_query("/api/raster/mosaic/info", [("name", name) for name in names])
        )
        return RasterMosaicInfo.from_dict(data)

    def submit_process_batch(
        self,
        jobs: List[Dict[str, Any]],
    ) -> ProcessBatchSubmitResponse:
        """Submit a batch of asynchronous processing jobs."""
        normalized_jobs: List[Dict[str, Any]] = []
        for job in jobs:
            request = dict(job.get("request", {}))
            request["params"] = request.get("params") or {}
            request = self._with_project_id(request)
            item = dict(job)
            item["request"] = request
            normalized_jobs.append(item)
        data = self._request("POST", "/api/process/jobs/batch", {"jobs": normalized_jobs})
        return ProcessBatchSubmitResponse.from_dict(data)

    # ------------------------------------------------------------------
    # Upload
    # ------------------------------------------------------------------

    def upload(
        self,
        file_path: str,
        name: Optional[str] = None,
        project_id: Optional[int] = None,
    ) -> Dataset:
        """Upload a file and register it as a dataset.

        Args:
            file_path: Local path to the file to upload.
            name: Optional dataset name (defaults to filename without extension).
            project_id: Optional project to attach the uploaded dataset to.

        Returns:
            The registered Dataset.
        """
        extra: Dict[str, str] = {}
        if name:
            extra["name"] = name
        effective_project_id = self._effective_project_id(project_id)
        if effective_project_id is not None:
            extra["project_id"] = str(effective_project_id)
        data = self._upload_file("/upload", file_path, extra_fields=extra)
        return Dataset.from_dict(data)

    # ------------------------------------------------------------------
    # Tile URL helpers
    # ------------------------------------------------------------------

    def vector_tiles_url(self, tileset: str) -> str:
        """Get the vector tiles URL template for a tileset.

        Args:
            tileset: Name of the vector tileset.

        Returns:
            URL template with ``{z}/{x}/{y}`` placeholders.
        """
        return f"{self.base_url}{self._with_project_query(f'/tiles/{_encode_path_value(tileset)}/{{z}}/{{x}}/{{y}}')}"

    def raster_tiles_url(self, name: str) -> str:
        """Get the raster tiles URL template.

        Args:
            name: Name of the raster dataset.

        Returns:
            URL template with ``{z}/{x}/{y}`` placeholders.
        """
        return f"{self.base_url}{self._with_project_query(f'/raster/{_encode_path_value(name)}/tiles/{{z}}/{{x}}/{{y}}')}"

    def pmtiles_url(self, archive: str) -> str:
        """Get the PMTiles URL template for an archive.

        Args:
            archive: Name of the PMTiles archive.

        Returns:
            URL template with ``{z}/{x}/{y}`` placeholders.
        """
        return f"{self.base_url}{self._with_project_query(f'/pmtiles/{_encode_path_value(archive)}/{{z}}/{{x}}/{{y}}')}"
