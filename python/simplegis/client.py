"""Simple GIS API client for Python."""

from __future__ import annotations

import json
from typing import Any, Optional
from urllib.error import HTTPError
from urllib.request import Request, urlopen


class RoteiroClient:
    """Python client for the Simple GIS API.

    Usage::

        client = RoteiroClient("http://localhost:8080")
        health = client.health()
        datasets = client.list_datasets()
        features = client.query_features("buildings", limit=100)
    """

    def __init__(
        self,
        base_url: str,
        api_key: Optional[str] = None,
        timeout: int = 30,
    ) -> None:
        self.base_url = base_url.rstrip("/")
        self.api_key = api_key
        self.timeout = timeout

    # ---- Internal helpers ----

    def _request(self, method: str, path: str, body: Any = None) -> Any:
        url = f"{self.base_url}{path}"
        data = json.dumps(body).encode() if body is not None else None
        headers: dict[str, str] = {"Accept": "application/json"}
        if data is not None:
            headers["Content-Type"] = "application/json"
        if self.api_key:
            headers["X-API-Key"] = self.api_key

        req = Request(url, data=data, headers=headers, method=method)
        try:
            with urlopen(req, timeout=self.timeout) as resp:
                return json.loads(resp.read())
        except HTTPError as e:
            body_text = e.read().decode(errors="replace")
            try:
                err = json.loads(body_text)
                msg = err.get("error") or err.get("message") or f"API error: {e.code}"
            except (json.JSONDecodeError, ValueError):
                msg = f"API error: {e.code}"
            raise RuntimeError(msg) from e

    def _get(self, path: str) -> Any:
        return self._request("GET", path)

    def _post(self, path: str, body: Any) -> Any:
        return self._request("POST", path, body)

    def _put(self, path: str, body: Any) -> Any:
        return self._request("PUT", path, body)

    def _delete(self, path: str) -> None:
        url = f"{self.base_url}{path}"
        headers: dict[str, str] = {}
        if self.api_key:
            headers["X-API-Key"] = self.api_key
        req = Request(url, headers=headers, method="DELETE")
        try:
            with urlopen(req, timeout=self.timeout):
                pass
        except HTTPError as e:
            raise RuntimeError(f"Delete failed: {e.code}") from e

    # ---- Health ----

    def health(self) -> dict:
        """Get server health status."""
        return self._get("/health")

    # ---- Datasets ----

    def list_datasets(self) -> list[dict]:
        """List all registered datasets."""
        return self._get("/datasets")

    def register_dataset(self, name: str, path: str, fmt: str = "", crs: str = "") -> dict:
        """Register a new dataset."""
        return self._post("/datasets", {"name": name, "path": path, "format": fmt, "crs": crs})

    def delete_dataset(self, name: str) -> None:
        """Delete a dataset registration."""
        self._delete(f"/datasets/{name}")

    # ---- Collections & Features ----

    def list_collections(self) -> list[dict]:
        """List OGC API collections."""
        resp = self._get("/collections")
        return resp.get("collections", [])

    def get_collection(self, collection_id: str) -> dict:
        """Get a single collection."""
        return self._get(f"/collections/{collection_id}")

    def query_features(
        self,
        collection_id: str,
        *,
        bbox: Optional[str] = None,
        limit: Optional[int] = None,
        filter_expr: Optional[str] = None,
    ) -> dict:
        """Query features from a collection."""
        params: list[str] = []
        if bbox:
            params.append(f"bbox={bbox}")
        if limit is not None:
            params.append(f"limit={limit}")
        if filter_expr:
            params.append(f"filter={filter_expr}")
        q = "&".join(params)
        path = f"/collections/{collection_id}/items"
        if q:
            path += f"?{q}"
        return self._get(path)

    def get_feature(self, collection_id: str, feature_id: str) -> dict:
        """Get a single feature."""
        return self._get(f"/collections/{collection_id}/items/{feature_id}")

    def create_feature(self, collection_id: str, feature: dict) -> dict:
        """Create a new feature."""
        return self._post(f"/collections/{collection_id}/items", feature)

    # ---- Processing ----

    def convert(
        self,
        input_path: str,
        output_format: str,
        output_name: Optional[str] = None,
        register: bool = True,
    ) -> dict:
        """Convert a dataset to another format."""
        body: dict[str, Any] = {"input": input_path, "output_format": output_format, "register": register}
        if output_name:
            body["output_name"] = output_name
        return self._post("/api/convert", body)

    def process(self, operation: str, input_path: str, params: Optional[dict] = None) -> dict:
        """Run a spatial processing operation."""
        return self._post("/api/process", {
            "operation": operation,
            "input": input_path,
            "params": params or {},
        })

    def diff(self, left: str, right: str, match_field: Optional[str] = None) -> dict:
        """Compare two datasets."""
        body: dict[str, Any] = {"left": left, "right": right}
        if match_field:
            body["match_field"] = match_field
        return self._post("/api/diff", body)

    # ---- Indoor GIS ----

    def list_buildings(self) -> list[dict]:
        """List all indoor buildings."""
        return self._get("/api/indoor/buildings")

    def get_building(self, building_id: str) -> dict:
        """Get a building with floors and transitions."""
        return self._get(f"/api/indoor/buildings/{building_id}")

    def create_building(self, data: dict) -> dict:
        """Create a new building (with optional floors/spaces/transitions)."""
        return self._post("/api/indoor/buildings", data)

    def delete_building(self, building_id: str) -> None:
        """Delete a building."""
        self._delete(f"/api/indoor/buildings/{building_id}")

    def list_floors(self, building_id: str) -> list[dict]:
        """List floors in a building."""
        return self._get(f"/api/indoor/buildings/{building_id}/floors")

    def list_spaces(self, building_id: str, level: int) -> list[dict]:
        """List spaces on a floor level."""
        return self._get(f"/api/indoor/buildings/{building_id}/floors/{level}/spaces")

    def navigate(
        self,
        building_id: str,
        from_space: str,
        to_space: str,
        accessible_only: bool = False,
    ) -> dict:
        """Find indoor navigation path between two spaces."""
        return self._post("/api/indoor/navigate", {
            "building_id": building_id,
            "from": from_space,
            "to": to_space,
            "accessible_only": accessible_only,
        })

    # ---- Tile URL helpers ----

    def vector_tiles_url(self, tileset: str) -> str:
        """Get the vector tiles URL template for a tileset."""
        return f"{self.base_url}/tiles/{tileset}/{{z}}/{{x}}/{{y}}"

    def raster_tiles_url(self, name: str) -> str:
        """Get the raster tiles URL template."""
        return f"{self.base_url}/raster/{name}/tiles/{{z}}/{{x}}/{{y}}"
