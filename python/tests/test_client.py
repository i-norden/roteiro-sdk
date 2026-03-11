import json
import unittest
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
        client = RoteiroClient("https://example.com", api_key="secret")
        headers = client._build_headers({"Content-Type": "application/json"})
        self.assertEqual(headers["Accept"], "application/json")
        self.assertEqual(headers["X-API-Key"], "secret")
        self.assertEqual(headers["Content-Type"], "application/json")

    def test_get_items_builds_expected_query_params(self):
        client = RoteiroClient("https://example.com")
        captured = {}

        def fake_get(path):
            captured["path"] = path
            return {"type": "FeatureCollection", "features": []}

        client._get = fake_get  # type: ignore[method-assign]

        fc = client.get_items(
            "roads",
            bbox="1,2,3,4",
            limit=5,
            where="kind='road'",
            datetime="2024-01-01T00:00:00Z",
            offset=10,
        )

        self.assertEqual(
            captured["path"],
            "/collections/roads/items?bbox=1,2,3,4&limit=5&filter=kind='road'&datetime=2024-01-01T00:00:00Z&offset=10",
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
            fp=None,
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
            fp=None,
        )
        self.addCleanup(bad_request.close)
        bad_request.read = lambda: b'{"error":"invalid request"}'  # type: ignore[attr-defined]

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


if __name__ == "__main__":
    unittest.main()
