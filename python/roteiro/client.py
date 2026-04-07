"""Core HTTP client for Cairn's handwritten Python SDK surface."""

from __future__ import annotations

import json
import mimetypes
import os
import time
from typing import Any, Dict, List, Mapping, Optional, Tuple, Union
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlencode
from urllib.request import Request, urlopen

from .models import (
    Collection,
    Dataset,
    Feature,
    FeatureCollection,
    HealthStatus,
    OperationJobRecord,
    OperationPreflightResult,
    PipelineExecutionResult,
    PipelineRun,
    Project,
    ProjectWorkspace,
    PublishMapResult,
    SavedPipeline,
)

JsonDict = Dict[str, Any]
QueryParams = Union[Mapping[str, Any], List[Tuple[str, Any]]]


def _encode_path_value(value: Any) -> str:
    return quote(str(value), safe="")


def _with_query(path: str, params: QueryParams) -> str:
    if isinstance(params, Mapping):
        items = [(key, value) for key, value in params.items() if value is not None]
    else:
        items = [(key, value) for key, value in params if value is not None]
    if not items:
        return path
    return f"{path}?{urlencode(items, doseq=True)}"


def _decode_body(raw: bytes, content_type: str) -> Any:
    if not raw:
        return None
    if "json" in content_type.lower():
        return json.loads(raw)
    try:
        return json.loads(raw)
    except (json.JSONDecodeError, UnicodeDecodeError):
        return raw.decode("utf-8", errors="replace")


class RoteiroError(Exception):
    def __init__(self, message: str, status_code: Optional[int] = None) -> None:
        super().__init__(message)
        self.status_code = status_code


class RoteiroAPIError(RoteiroError):
    pass


class RoteiroConnectionError(RoteiroError):
    pass


class RoteiroTimeoutError(RoteiroError):
    pass


class RoteiroClient:
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
        self.base_url = base_url.rstrip("/")
        self.api_key = api_key
        self.project_id = project_id
        self.timeout = timeout
        self.max_retries = max_retries
        self.backoff_factor = backoff_factor

    def get_project_id(self) -> Optional[int]:
        return self.project_id

    def _build_headers(self, extra: Optional[Dict[str, str]] = None) -> Dict[str, str]:
        headers: Dict[str, str] = {"Accept": "application/json"}
        if self.api_key:
            headers["X-API-Key"] = self.api_key
        if self.project_id is not None:
            headers["X-Project-ID"] = str(self.project_id)
        if extra:
            headers.update(extra)
        return headers

    def _effective_project_id(self, project_id: Optional[int] = None) -> Optional[int]:
        return project_id if project_id is not None else self.project_id

    def _with_default_project_id(
        self,
        body: JsonDict,
        project_id: Optional[int] = None,
    ) -> JsonDict:
        effective_project_id = self._effective_project_id(project_id)
        if effective_project_id is None or body.get("project_id") is not None:
            return dict(body)
        scoped = dict(body)
        scoped["project_id"] = effective_project_id
        return scoped

    def _with_project_query(self, path: str, project_id: Optional[int] = None) -> str:
        effective_project_id = self._effective_project_id(project_id)
        if effective_project_id is None:
            return path
        separator = "&" if "?" in path else "?"
        return f"{path}{separator}{urlencode({'project_id': effective_project_id})}"

    def _parse_api_error(self, status: int, payload: bytes) -> str:
        message = f"API error: {status}"
        body_text = payload.decode(errors="replace")
        if not body_text.strip():
            return message
        try:
            parsed = json.loads(body_text)
        except (json.JSONDecodeError, ValueError):
            return body_text.strip()
        if isinstance(parsed, dict):
            if isinstance(parsed.get("error"), str):
                return parsed["error"]
            if isinstance(parsed.get("message"), str):
                return parsed["message"]
        return message

    def _perform(
        self,
        method: str,
        path: str,
        body: Any = None,
        extra_headers: Optional[Dict[str, str]] = None,
    ) -> Tuple[bytes, str]:
        url = f"{self.base_url}{path}"
        data: Optional[bytes] = None
        headers = self._build_headers(extra_headers)

        if body is not None:
            data = json.dumps(body).encode("utf-8")
            headers.setdefault("Content-Type", "application/json")

        last_error: Optional[Exception] = None
        for attempt in range(self.max_retries + 1):
            if attempt > 0:
                time.sleep(self.backoff_factor * (2 ** (attempt - 1)))

            request = Request(url, data=data, headers=headers, method=method)
            try:
                with urlopen(request, timeout=self.timeout) as response:
                    return response.read(), response.headers.get("Content-Type", "")
            except HTTPError as exc:
                payload = exc.read()
                if exc.code in self._RETRYABLE_STATUS_CODES:
                    last_error = RoteiroAPIError(self._parse_api_error(exc.code, payload), status_code=exc.code)
                    continue
                raise RoteiroAPIError(self._parse_api_error(exc.code, payload), status_code=exc.code) from exc
            except URLError as exc:
                last_error = exc
                continue

        if isinstance(last_error, RoteiroAPIError):
            raise last_error
        if last_error is not None and "timed out" in str(last_error).lower():
            raise RoteiroTimeoutError(f"Request timed out after {self.max_retries} retries")
        if last_error is not None:
            raise RoteiroConnectionError(f"Connection failed after {self.max_retries} retries: {last_error}")
        raise RoteiroConnectionError("Request failed with no error information")

    def _request(
        self,
        method: str,
        path: str,
        body: Any = None,
        extra_headers: Optional[Dict[str, str]] = None,
    ) -> Any:
        raw, content_type = self._perform(method, path, body=body, extra_headers=extra_headers)
        return _decode_body(raw, content_type)

    def _request_bytes(
        self,
        method: str,
        path: str,
        body: Any = None,
        extra_headers: Optional[Dict[str, str]] = None,
    ) -> bytes:
        raw, _ = self._perform(method, path, body=body, extra_headers=extra_headers)
        return raw

    def _get(self, path: str) -> Any:
        return self._request("GET", path)

    def _post(self, path: str, body: Any = None) -> Any:
        return self._request("POST", path, body=body)

    def _put(self, path: str, body: Any = None) -> Any:
        return self._request("PUT", path, body=body)

    def _patch(self, path: str, body: Any = None) -> Any:
        return self._request("PATCH", path, body=body)

    def _delete(self, path: str) -> None:
        self._request("DELETE", path)

    def _upload_file(
        self,
        path: str,
        file_path: str,
        *,
        extra_fields: Optional[Dict[str, str]] = None,
    ) -> Any:
        boundary = f"----RoteiroSDK{int(time.time() * 1000)}"
        filename = os.path.basename(file_path)
        content_type = mimetypes.guess_type(filename)[0] or "application/octet-stream"

        body_parts: List[bytes] = []
        if extra_fields:
            for key, value in extra_fields.items():
                body_parts.append(f"--{boundary}\r\n".encode())
                body_parts.append(f'Content-Disposition: form-data; name="{key}"\r\n\r\n'.encode())
                body_parts.append(f"{value}\r\n".encode())

        body_parts.append(f"--{boundary}\r\n".encode())
        body_parts.append(
            f'Content-Disposition: form-data; name="file"; filename="{filename}"\r\n'.encode()
        )
        body_parts.append(f"Content-Type: {content_type}\r\n\r\n".encode())
        with open(file_path, "rb") as handle:
            body_parts.append(handle.read())
        body_parts.append(b"\r\n")
        body_parts.append(f"--{boundary}--\r\n".encode())

        request = Request(
            f"{self.base_url}{path}",
            data=b"".join(body_parts),
            headers=self._build_headers({"Content-Type": f"multipart/form-data; boundary={boundary}"}),
            method="POST",
        )
        try:
            with urlopen(request, timeout=self.timeout) as response:
                return _decode_body(response.read(), response.headers.get("Content-Type", ""))
        except HTTPError as exc:
            raise RoteiroAPIError(
                self._parse_api_error(exc.code, exc.read()),
                status_code=exc.code,
            ) from exc

    def health(self) -> HealthStatus:
        return HealthStatus.from_dict(self._get("/health"))

    def list_datasets(self) -> List[Dataset]:
        return [Dataset.from_dict(item) for item in self._get("/datasets")]

    def delete_dataset(self, name: str) -> None:
        self._delete(f"/datasets/{_encode_path_value(name)}")

    def get_dataset_statuses(self, names: List[str]) -> List[Dataset]:
        path = _with_query("/api/v1/datasets/status", [("name", name) for name in names])
        return [Dataset.from_dict(item) for item in self._get(path)]

    def get_dataset_metadata(self, name: str) -> JsonDict:
        return self._get(f"/api/v1/datasets/{_encode_path_value(name)}/metadata")

    def update_dataset_metadata(self, name: str, patch: JsonDict) -> JsonDict:
        return self._patch(f"/api/v1/datasets/{_encode_path_value(name)}/metadata", patch)

    def get_dataset_schema(self, name: str) -> JsonDict:
        return self._get(f"/api/v1/datasets/{_encode_path_value(name)}/schema")

    def update_dataset_schema(self, name: str, schema: JsonDict) -> JsonDict:
        return self._put(f"/api/v1/datasets/{_encode_path_value(name)}/schema", schema)

    def get_dataset_profile(self, name: str) -> JsonDict:
        return self._get(f"/api/v1/datasets/{_encode_path_value(name)}/profile")

    def validate_dataset(self, name: str, body: Optional[JsonDict] = None) -> JsonDict:
        return self._post(f"/api/v1/datasets/{_encode_path_value(name)}/validate", body or {})

    def get_validation_rules(self, name: str) -> JsonDict:
        return self._get(f"/api/v1/datasets/{_encode_path_value(name)}/validation-rules")

    def update_validation_rules(self, name: str, body: JsonDict) -> JsonDict:
        return self._put(f"/api/v1/datasets/{_encode_path_value(name)}/validation-rules", body)

    def import_source(self, request: JsonDict) -> JsonDict:
        return self._post("/api/v1/datasets/import-source", self._with_default_project_id(request))

    def list_collections(self) -> List[Collection]:
        response = self._get("/collections")
        return [Collection.from_dict(item) for item in response.get("collections", [])]

    def get_collection(self, collection_id: str) -> Collection:
        return Collection.from_dict(self._get(f"/collections/{_encode_path_value(collection_id)}"))

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
        cursor: Optional[str] = None,
    ) -> FeatureCollection:
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
                ("cursor", cursor),
            ],
        )
        return FeatureCollection.from_dict(self._get(path))

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
        cursor: Optional[str] = None,
    ) -> FeatureCollection:
        return self.get_items(
            collection_id,
            bbox=bbox,
            bbox_crs=bbox_crs,
            crs=crs,
            limit=limit,
            where=filter_expr,
            datetime=datetime,
            offset=offset,
            cursor=cursor,
        )

    def get_item(self, collection_id: str, feature_id: str) -> Feature:
        return Feature.from_dict(
            self._get(
                f"/collections/{_encode_path_value(collection_id)}/items/{_encode_path_value(feature_id)}"
            )
        )

    def get_feature(self, collection_id: str, feature_id: str) -> Feature:
        return self.get_item(collection_id, feature_id)

    def create_item(self, collection_id: str, feature: JsonDict) -> Feature:
        return Feature.from_dict(
            self._request(
                "POST",
                f"/collections/{_encode_path_value(collection_id)}/items",
                body=feature,
                extra_headers={"Content-Type": "application/geo+json"},
            )
        )

    def update_item(self, collection_id: str, feature_id: str, feature: JsonDict) -> Feature:
        return Feature.from_dict(
            self._request(
                "PUT",
                f"/collections/{_encode_path_value(collection_id)}/items/{_encode_path_value(feature_id)}",
                body=feature,
                extra_headers={"Content-Type": "application/geo+json"},
            )
        )

    def delete_item(self, collection_id: str, feature_id: str) -> None:
        self._delete(
            f"/collections/{_encode_path_value(collection_id)}/items/{_encode_path_value(feature_id)}"
        )

    def get_scene_manifest(self) -> JsonDict:
        return self._get("/api/v1/scene-manifest")

    def list_bodies(self) -> JsonDict:
        return self._get("/api/v1/bodies")

    def get_body(self, slug: str) -> JsonDict:
        return self._get(f"/api/v1/bodies/{_encode_path_value(slug)}")

    def get_body_recipes(self, slug: str) -> JsonDict:
        return self._get(f"/api/v1/bodies/{_encode_path_value(slug)}/recipes")

    def get_sql_info(self, engine: str) -> JsonDict:
        return self._get(_with_query("/api/v1/query/sql/info", {"engine": engine}))

    def list_sql_datasets(self, engine: str) -> List[JsonDict]:
        return self._get(_with_query("/api/v1/query/sql/datasets", {"engine": engine}))

    def execute_sql(self, engine: str, request: JsonDict) -> Any:
        path = _with_query("/api/v1/query/sql", {"engine": engine})
        if request.get("format") == "arrow":
            return self._request_bytes("POST", path, body=request)
        return self._post(path, request)

    def save_sql_result(self, engine: str, request: JsonDict) -> JsonDict:
        path = _with_query("/api/v1/query/sql/save", {"engine": engine})
        return self._post(path, request)

    def list_operations(self, domain: Optional[str] = None) -> JsonDict:
        return self._get(_with_query("/api/v1/ops", {"domain": domain}))

    def preflight_operation(self, request: JsonDict) -> OperationPreflightResult:
        body = self._with_default_project_id(request)
        body.setdefault("params", {})
        return OperationPreflightResult.from_dict(self._post("/api/v1/ops/preflight", body))

    def run_operation(self, operation: str, request: Optional[JsonDict] = None) -> Any:
        body = self._with_default_project_id(request or {})
        body.setdefault("params", {})
        return self._post(f"/api/v1/ops/{_encode_path_value(operation)}", body)

    def submit_operation_job(self, operation: str, request: Optional[JsonDict] = None) -> OperationJobRecord:
        body = self._with_default_project_id(request or {})
        body.setdefault("params", {})
        return OperationJobRecord.from_dict(
            self._post(f"/api/v1/ops/by-operation/{_encode_path_value(operation)}/jobs", body)
        )

    def submit_operation_batch(self, jobs: List[JsonDict]) -> JsonDict:
        return self._post("/api/v1/ops/jobs/batch", {"jobs": jobs})

    def list_operation_jobs(
        self,
        *,
        status: Optional[str] = None,
        search: Optional[str] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None,
    ) -> List[OperationJobRecord]:
        path = _with_query(
            "/api/v1/ops/jobs",
            {"status": status, "search": search, "limit": limit, "offset": offset},
        )
        return [OperationJobRecord.from_dict(item) for item in self._get(path)]

    def get_operation_job(self, job_id: str) -> OperationJobRecord:
        return OperationJobRecord.from_dict(self._get(f"/api/v1/ops/jobs/{_encode_path_value(job_id)}"))

    def cancel_operation_job(self, job_id: str) -> None:
        self._delete(f"/api/v1/ops/jobs/{_encode_path_value(job_id)}")

    def rerun_operation_job(self, job_id: str) -> OperationJobRecord:
        return OperationJobRecord.from_dict(
            self._post(f"/api/v1/ops/jobs/{_encode_path_value(job_id)}/rerun", {})
        )

    def operation_artifact_url(self, job_id: str, format_name: str) -> str:
        return (
            f"{self.base_url}/api/v1/ops/jobs/{_encode_path_value(job_id)}/artifacts/"
            f"{_encode_path_value(format_name)}"
        )

    def list_pipeline_operations(self) -> JsonDict:
        return self._get("/api/v1/pipeline/operations")

    def run_pipeline(self, request: JsonDict) -> Any:
        return self._post("/api/v1/pipeline", request)

    def list_pipelines(self) -> List[SavedPipeline]:
        return [SavedPipeline.from_dict(item) for item in self._get("/api/v1/pipelines")]

    def get_pipeline(self, pipeline_id: str) -> SavedPipeline:
        return SavedPipeline.from_dict(self._get(f"/api/v1/pipelines/{_encode_path_value(pipeline_id)}"))

    def create_pipeline(self, request: JsonDict) -> SavedPipeline:
        return SavedPipeline.from_dict(self._post("/api/v1/pipelines", request))

    def update_pipeline(self, pipeline_id: str, request: JsonDict) -> SavedPipeline:
        return SavedPipeline.from_dict(
            self._put(f"/api/v1/pipelines/{_encode_path_value(pipeline_id)}", request)
        )

    def delete_pipeline(self, pipeline_id: str) -> None:
        self._delete(f"/api/v1/pipelines/{_encode_path_value(pipeline_id)}")

    def duplicate_pipeline(self, pipeline_id: str) -> SavedPipeline:
        return SavedPipeline.from_dict(
            self._post(f"/api/v1/pipelines/{_encode_path_value(pipeline_id)}/duplicate", {})
        )

    def execute_pipeline(self, pipeline_id: str) -> PipelineExecutionResult:
        return PipelineExecutionResult.from_dict(
            self._post(f"/api/v1/pipelines/{_encode_path_value(pipeline_id)}/execute", {})
        )

    def list_pipeline_runs(self, pipeline_id: str) -> List[PipelineRun]:
        return [
            PipelineRun.from_dict(item)
            for item in self._get(f"/api/v1/pipelines/{_encode_path_value(pipeline_id)}/runs")
        ]

    def get_pipeline_run(self, run_id: str) -> PipelineRun:
        return PipelineRun.from_dict(self._get(f"/api/v1/pipeline-runs/{_encode_path_value(run_id)}"))

    def list_projects(self) -> List[Project]:
        return [Project.from_dict(item) for item in self._get("/api/v1/projects")]

    def get_project(self, project_id: int) -> Project:
        return Project.from_dict(self._get(f"/api/v1/projects/{project_id}"))

    def create_project(self, name: str, description: Optional[str] = None) -> Project:
        return Project.from_dict(self._post("/api/v1/projects", {"name": name, "description": description}))

    def update_project(self, project_id: int, body: JsonDict) -> Project:
        return Project.from_dict(self._put(f"/api/v1/projects/{project_id}", body))

    def delete_project(self, project_id: int) -> None:
        self._delete(f"/api/v1/projects/{project_id}")

    def get_project_workspace(self, project_id: int) -> ProjectWorkspace:
        return ProjectWorkspace.from_dict(self._get(f"/api/v1/projects/{project_id}/workspace"))

    def set_project_workspace(
        self,
        project_id: int,
        map_state: Any,
        layer_styles: Optional[Any] = None,
    ) -> ProjectWorkspace:
        return ProjectWorkspace.from_dict(
            self._put(
                f"/api/v1/projects/{project_id}/workspace",
                {"map_state": map_state, "layer_styles": layer_styles or {}},
            )
        )

    def publish_map(self, request: JsonDict) -> PublishMapResult:
        return PublishMapResult.from_dict(self._post("/api/v1/maps/publish", request))

    def list_published_maps(self) -> List[JsonDict]:
        return self._get("/api/v1/maps/published")

    def delete_published_map(self, token: str) -> None:
        self._delete(f"/api/v1/maps/published/{_encode_path_value(token)}")

    def get_published_map_stats(self, token: str) -> JsonDict:
        return self._get(f"/api/v1/maps/published/{_encode_path_value(token)}/stats")

    def update_published_map_embed_config(self, token: str, embed_config: JsonDict) -> JsonDict:
        return self._put(
            f"/api/v1/maps/published/{_encode_path_value(token)}/embed-config",
            embed_config,
        )

    def upload(
        self,
        file_path: str,
        *,
        name: Optional[str] = None,
        project_id: Optional[int] = None,
        body_id: Optional[str] = None,
    ) -> Dataset:
        fields: Dict[str, str] = {}
        if name:
            fields["name"] = name
        effective_project_id = self._effective_project_id(project_id)
        if effective_project_id is not None:
            fields["project_id"] = str(effective_project_id)
        if body_id is not None:
            fields["body_id"] = body_id
        return Dataset.from_dict(self._upload_file("/upload", file_path, extra_fields=fields))

    def vector_tiles_url(self, tileset: str, project_id: Optional[int] = None) -> str:
        return f"{self.base_url}{self._with_project_query(f'/tiles/{_encode_path_value(tileset)}/{{z}}/{{x}}/{{y}}', project_id)}"

    def raster_tiles_url(self, name: str, project_id: Optional[int] = None) -> str:
        return f"{self.base_url}{self._with_project_query(f'/raster/{_encode_path_value(name)}/tiles/{{z}}/{{x}}/{{y}}', project_id)}"

    def pmtiles_url(self, archive: str, project_id: Optional[int] = None) -> str:
        return f"{self.base_url}{self._with_project_query(f'/pmtiles/{_encode_path_value(archive)}/{{z}}/{{x}}/{{y}}', project_id)}"
