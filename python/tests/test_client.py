import unittest
from urllib.parse import parse_qs, urlsplit

from roteiro.client import RoteiroClient


class RoteiroClientTests(unittest.TestCase):
    def test_build_headers_includes_api_key(self) -> None:
        client = RoteiroClient("https://example.com", api_key="secret", project_id=42)
        headers = client._build_headers({"Content-Type": "application/json"})
        self.assertEqual(headers["Accept"], "application/json")
        self.assertEqual(headers["X-API-Key"], "secret")
        self.assertEqual(headers["X-Project-ID"], "42")
        self.assertEqual(headers["Content-Type"], "application/json")

    def test_get_items_builds_expected_query_params(self) -> None:
        client = RoteiroClient("https://example.com")
        captured = {}

        def fake_get(path: str):
            captured["path"] = path
            return {"type": "FeatureCollection", "features": []}

        client._get = fake_get  # type: ignore[method-assign]

        features = client.get_items(
            "roads/primary",
            bbox="1,2,3,4",
            bbox_crs="EPSG:4326",
            crs="EPSG:3857",
            limit=5,
            where="kind='road'",
            datetime="2024-01-01T00:00:00Z",
            offset=10,
            cursor="abc",
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
                "cursor": ["abc"],
            },
        )
        self.assertEqual(features.type, "FeatureCollection")

    def test_import_source_posts_current_intake_endpoint(self) -> None:
        client = RoteiroClient("https://example.com", project_id=7)
        captured = {}

        def fake_post(path: str, body=None):
            captured["path"] = path
            captured["body"] = body
            return {"status": "queued", "name": body["name"]}

        client._post = fake_post  # type: ignore[method-assign]

        result = client.import_source(
            {
                "name": "mars-dem",
                "source": "https://example.com/dem.tif",
                "source_type": "remote_url",
                "body_id": "mars",
            }
        )

        self.assertEqual(captured["path"], "/api/v1/datasets/import-source")
        self.assertEqual(
            captured["body"],
            {
                "name": "mars-dem",
                "source": "https://example.com/dem.tif",
                "source_type": "remote_url",
                "body_id": "mars",
                "project_id": 7,
            },
        )
        self.assertEqual(result["status"], "queued")

    def test_preflight_operation_posts_expected_body(self) -> None:
        client = RoteiroClient("https://example.com", project_id=42)
        captured = {}

        def fake_post(path: str, body=None):
            captured["path"] = path
            captured["body"] = body
            return {"valid": True, "resolved_params": {"mask_path": "/tmp/mask.geojson"}}

        client._post = fake_post  # type: ignore[method-assign]

        result = client.preflight_operation(
            {
                "operation": "clip",
                "input": "buildings",
                "params": {"mask": "study_area"},
            }
        )

        self.assertEqual(captured["path"], "/api/v1/ops/preflight")
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
        self.assertEqual(result.resolved_params, {"mask_path": "/tmp/mask.geojson"})

    def test_upload_applies_project_and_body_scope(self) -> None:
        client = RoteiroClient("https://example.com", project_id=42)
        captured = {}

        def fake_upload(path: str, file_path: str, *, extra_fields=None):
            captured["path"] = path
            captured["file_path"] = file_path
            captured["extra_fields"] = extra_fields
            return {"name": "roads", "format": "geojson"}

        client._upload_file = fake_upload  # type: ignore[method-assign]

        uploaded = client.upload("/tmp/roads.geojson", name="roads", body_id="moon")

        self.assertEqual(captured["path"], "/upload")
        self.assertEqual(captured["file_path"], "/tmp/roads.geojson")
        self.assertEqual(
            captured["extra_fields"],
            {"name": "roads", "project_id": "42", "body_id": "moon"},
        )
        self.assertEqual(uploaded.name, "roads")

    def test_body_recipes_endpoint_encodes_slug(self) -> None:
        client = RoteiroClient("https://example.com")
        captured = {}

        def fake_get(path: str):
            captured["path"] = path
            return {"recipes": []}

        client._get = fake_get  # type: ignore[method-assign]

        result = client.get_body_recipes("moon/custom")

        self.assertEqual(captured["path"], "/api/v1/bodies/moon%2Fcustom/recipes")
        self.assertEqual(result, {"recipes": []})

    def test_execute_sql_arrow_returns_bytes(self) -> None:
        client = RoteiroClient("https://example.com")
        captured = {}

        def fake_request_bytes(method: str, path: str, body=None, extra_headers=None):
            captured["method"] = method
            captured["path"] = path
            captured["body"] = body
            return b"ARROW"

        client._request_bytes = fake_request_bytes  # type: ignore[method-assign]

        result = client.execute_sql("duckdb", {"sql": "select 1", "format": "arrow"})

        self.assertEqual(captured["method"], "POST")
        self.assertEqual(captured["path"], "/api/v1/query/sql?engine=duckdb")
        self.assertEqual(captured["body"], {"sql": "select 1", "format": "arrow"})
        self.assertEqual(result, b"ARROW")

    def test_create_and_execute_pipeline(self) -> None:
        client = RoteiroClient("https://example.com")
        captured = {}

        def fake_post(path: str, body=None):
            if path == "/api/v1/pipelines":
                captured["create_path"] = path
                captured["create_body"] = body
                return {
                    "id": "pipe_123",
                    "name": "Suitability model",
                    "description": "Buffer and clip",
                    "graph": {"nodes": [{"id": "n1"}], "edges": []},
                    "version": 1,
                }
            if path == "/api/v1/pipelines/pipe_123/execute":
                captured["execute_path"] = path
                captured["execute_body"] = body
                return {
                    "pipeline_id": "pipe_123",
                    "status": "submitted",
                    "node_count": 1,
                    "edge_count": 0,
                }
            raise AssertionError(f"unexpected path: {path}")

        client._post = fake_post  # type: ignore[method-assign]

        pipeline = client.create_pipeline(
            {
                "name": "Suitability model",
                "description": "Buffer and clip",
                "graph": {"nodes": [{"id": "n1"}], "edges": []},
            }
        )
        execution = client.execute_pipeline("pipe_123")

        self.assertEqual(captured["create_path"], "/api/v1/pipelines")
        self.assertEqual(
            captured["create_body"],
            {
                "name": "Suitability model",
                "description": "Buffer and clip",
                "graph": {"nodes": [{"id": "n1"}], "edges": []},
            },
        )
        self.assertEqual(captured["execute_path"], "/api/v1/pipelines/pipe_123/execute")
        self.assertEqual(captured["execute_body"], {})
        self.assertEqual(pipeline.id, "pipe_123")
        self.assertEqual(execution.status, "submitted")


if __name__ == "__main__":
    unittest.main()
