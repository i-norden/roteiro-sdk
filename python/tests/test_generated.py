import unittest

from roteiro.client import RoteiroClient
from roteiro.generated import RoteiroGeneratedApi


class GeneratedClientTests(unittest.TestCase):
    def test_generated_client_encodes_path_parameters(self) -> None:
        client = RoteiroClient("https://example.com")
        captured = {}

        def fake_request(method, path, body=None, extra_headers=None):
            captured["method"] = method
            captured["path"] = path
            return None

        client._request = fake_request  # type: ignore[method-assign]
        api = RoteiroGeneratedApi(client)

        api.auto_get_api_bodies_slug(slug="moon/custom")

        self.assertEqual(captured["method"], "GET")
        self.assertEqual(captured["path"], "/api/v1/bodies/moon%2Fcustom")

    def test_generated_client_serializes_json_bodies(self) -> None:
        client = RoteiroClient("https://example.com")
        captured = {}

        def fake_request(method, path, body=None, extra_headers=None):
            captured["method"] = method
            captured["path"] = path
            captured["body"] = body
            captured["headers"] = extra_headers
            return None

        client._request = fake_request  # type: ignore[method-assign]
        api = RoteiroGeneratedApi(client)

        api.auto_post_api_bodies(body={"slug": "ceres"})

        self.assertEqual(captured["method"], "POST")
        self.assertEqual(captured["path"], "/api/v1/bodies")
        self.assertEqual(captured["body"], {"slug": "ceres"})
        self.assertEqual(captured["headers"], {"Content-Type": "application/json"})


if __name__ == "__main__":
    unittest.main()
