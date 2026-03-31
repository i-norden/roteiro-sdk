import io
import json
import unittest
from urllib.parse import parse_qs, urlsplit
from unittest.mock import patch
from urllib.error import HTTPError

from roteiro.client import RoteiroAPIError, RoteiroClient


class _DummyResponse:
    def __init__(self, payload, status=200):
        self._payload = payload
        self.status = status

    def read(self):
        return json.dumps(self._payload).encode("utf-8")

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc, tb):
        return False


class RoteiroClientTests(unittest.TestCase):
    def test_build_headers_includes_api_key(self):
        client = RoteiroClient(
            "https://example.com", api_key="secret", project_id=42
        )
        headers = client._build_headers({"Content-Type": "application/json"})
        self.assertEqual(headers["Accept"], "application/json")
        self.assertEqual(headers["X-API-Key"], "secret")
        self.assertEqual(headers["X-Project-ID"], "42")
        self.assertEqual(headers["Content-Type"], "application/json")

    def test_get_items_builds_expected_query_params(self):
        client = RoteiroClient("https://example.com")
        captured = {}

        def fake_get(path):
            captured["path"] = path
            return {"type": "FeatureCollection", "features": []}

        client._get = fake_get  # type: ignore[method-assign]

        fc = client.get_items(
            "roads/primary",
            bbox="1,2,3,4",
            bbox_crs="EPSG:4326",
            crs="EPSG:3857",
            limit=5,
            where="kind='road'",
            datetime="2024-01-01T00:00:00Z",
            offset=10,
        )

        parsed = urlsplit(captured["path"])
        self.assertEqual(parsed.path, "/collections/roads%2Fprimary/items")
        self.assertEqual(
            parse_qs(parsed.query),
            {
                "bbox": ["1,2,3,4"],
                "bbox-crs": ["EPSG:4326"],
                "crs": ["EPSG:3857"],
                "limit": ["5"],
                "filter": ["kind='road'"],
                "datetime": ["2024-01-01T00:00:00Z"],
                "offset": ["10"],
            },
        )
        self.assertEqual(fc.type, "FeatureCollection")
        self.assertEqual(len(fc.features), 0)

    def test_request_retries_retryable_http_errors(self):
        client = RoteiroClient("https://example.com", max_retries=1, backoff_factor=0)
        retryable = HTTPError(
            url="https://example.com/health",
            code=503,
            msg="Service Unavailable",
            hdrs=None,
            fp=io.BytesIO(b"temporary"),
        )
        self.addCleanup(retryable.close)

        with patch("roteiro.client.urlopen", side_effect=[retryable, _DummyResponse({"status": "ok"})]):
            with patch("roteiro.client.time.sleep", return_value=None):
                data = client._request("GET", "/health")

        self.assertEqual(data["status"], "ok")

    def test_request_raises_api_error_for_non_retryable_http_errors(self):
        client = RoteiroClient("https://example.com", max_retries=0)
        bad_request = HTTPError(
            url="https://example.com/health",
            code=400,
            msg="Bad Request",
            hdrs=None,
            fp=io.BytesIO(b'{"error":"invalid request"}'),
        )
        self.addCleanup(bad_request.close)

        with patch("roteiro.client.urlopen", side_effect=bad_request):
            with self.assertRaises(RoteiroAPIError) as ctx:
                client._request("GET", "/health")

        self.assertEqual(ctx.exception.status_code, 400)
        self.assertIn("invalid request", str(ctx.exception))

    def test_list_operations_calls_catalog_endpoint(self):
        client = RoteiroClient("https://example.com")

        def fake_get(path):
            self.assertEqual(path, "/api/operations")
            return {"operations": [{"name": "buffer", "params": ["distance"]}], "formats": ["geojson"]}

        client._get = fake_get  # type: ignore[method-assign]
        catalog = client.list_operations()
        self.assertEqual(catalog["operations"][0]["name"], "buffer")
        self.assertEqual(catalog["formats"], ["geojson"])

    def test_preflight_process_posts_expected_body(self):
        client = RoteiroClient("https://example.com", project_id=42)
        captured = {}

        def fake_post(path, body=None):
            captured["path"] = path
            captured["body"] = body
            return {"valid": True, "resolved_params": {"mask_path": "/tmp/mask.geojson"}}

        client._post = fake_post  # type: ignore[method-assign]
        result = client.preflight_process(
            "clip",
            input_path="buildings",
            params={"mask": "study_area"},
        )

        self.assertEqual(captured["path"], "/api/process/preflight")
        self.assertEqual(
            captured["body"],
            {
                "operation": "clip",
                "input": "buildings",
                "params": {"mask": "study_area"},
                "project_id": 42,
            },
        )
        self.assertTrue(result.valid)
        self.assertEqual(result.resolved_params["mask_path"], "/tmp/mask.geojson")

    def test_upload_applies_project_scope(self):
        client = RoteiroClient("https://example.com", project_id=42)
        captured = {}

        def fake_upload(path, file_path, field_name="file", extra_fields=None):
            captured["upload_path"] = path
            captured["upload_file_path"] = file_path
            captured["upload_extra_fields"] = extra_fields
            return {"name": "roads", "path": "/tmp/roads.geojson", "format": "geojson"}

        client._upload_file = fake_upload  # type: ignore[method-assign]

        uploaded = client.upload("/tmp/roads.geojson", name="roads")

        self.assertEqual(captured["upload_path"], "/upload")
        self.assertEqual(
            captured["upload_extra_fields"],
            {"name": "roads", "project_id": "42"},
        )
        self.assertEqual(uploaded.name, "roads")

    def test_list_process_jobs_builds_expected_query_params(self):
        client = RoteiroClient("https://example.com")
        captured = {}

        def fake_get(path):
            captured["path"] = path
            return []

        client._get = fake_get  # type: ignore[method-assign]
        jobs = client.list_process_jobs(
            status="queued",
            search="buffer",
            limit=25,
            offset=10,
        )

        self.assertEqual(
            captured["path"],
            "/api/process/jobs?status=queued&search=buffer&limit=25&offset=10",
        )
        self.assertEqual(jobs, [])

    def test_create_and_execute_pipeline(self):
        client = RoteiroClient("https://example.com")
        captured = {}

        def fake_post(path, body=None):
            captured["create_path"] = path
            captured["create_body"] = body
            return {
                "id": "pipe_123",
                "name": "Suitability model",
                "description": "Buffer and clip",
                "graph": {"nodes": [{"id": "n1"}], "edges": []},
                "canvas": None,
                "version": 1,
                "is_template": False,
                "tenant_id": 7,
                "created_at": "2026-03-22T00:00:00Z",
                "updated_at": "2026-03-22T00:00:00Z",
            }

        def fake_request(method, path, body=None, extra_headers=None):
            captured["execute_method"] = method
            captured["execute_path"] = path
            self.assertIsNone(body)
            return {
                "pipeline_id": "pipe_123",
                "status": "submitted",
                "node_count": 1,
                "edge_count": 0,
            }

        client._post = fake_post  # type: ignore[method-assign]
        client._request = fake_request  # type: ignore[method-assign]

        pipeline = client.create_pipeline(
            "Suitability model",
            "Buffer and clip",
            graph={"nodes": [{"id": "n1"}], "edges": []},
        )
        execution = client.execute_pipeline("pipe_123")

        self.assertEqual(captured["create_path"], "/api/pipelines")
        self.assertEqual(
            captured["create_body"],
            {
                "name": "Suitability model",
                "description": "Buffer and clip",
                "graph": {"nodes": [{"id": "n1"}], "edges": []},
            },
        )
        self.assertEqual(captured["execute_method"], "POST")
        self.assertEqual(captured["execute_path"], "/api/pipelines/pipe_123/execute")
        self.assertEqual(pipeline.id, "pipe_123")
        self.assertEqual(execution.status, "submitted")

    def test_raster_process_posts_expected_body(self):
        client = RoteiroClient("https://example.com")
        captured = {}

        def fake_post(path, body=None):
            captured["path"] = path
            captured["body"] = body
            return {"width": 2, "height": 2, "data": [1, 2, 3, 4]}

        client._post = fake_post  # type: ignore[method-assign]
        result = client.raster_process("slope", input_path="/data/dem.tif")

        self.assertEqual(captured["path"], "/api/raster/process")
        self.assertEqual(
            captured["body"],
            {
                "operation": "slope",
                "input_path": "/data/dem.tif",
                "params": {},
            },
        )
        self.assertEqual(result["width"], 2)

    def test_get_raster_mosaic_info_builds_repeated_name_query(self):
        client = RoteiroClient("https://example.com")
        captured = {}

        def fake_get(path):
            captured["path"] = path
            return {"rasters": [], "count": 2}

        client._get = fake_get  # type: ignore[method-assign]
        result = client.get_raster_mosaic_info(["a", "b"])

        self.assertEqual(
            captured["path"],
            "/api/raster/mosaic/info?name=a&name=b",
        )
        self.assertEqual(result.count, 2)

    def test_get_item_and_tile_urls_encode_path_segments(self):
        client = RoteiroClient("https://example.com", project_id=42)
        captured = {}

        def fake_get(path):
            captured["path"] = path
            return {"type": "Feature", "id": "feature/1", "properties": {}}

        client._get = fake_get  # type: ignore[method-assign]
        feature = client.get_item("roads/2024", "feature 1")

        self.assertEqual(
            captured["path"],
            "/collections/roads%2F2024/items/feature%201",
        )
        self.assertEqual(feature.id, "feature/1")
        self.assertEqual(
            client.vector_tiles_url("city basemap/2024"),
            "https://example.com/tiles/city%20basemap%2F2024/{z}/{x}/{y}?project_id=42",
        )


if __name__ == "__main__":
    unittest.main()
