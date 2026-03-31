import unittest

from roteiro.client import RoteiroClient
from roteiro.generated import RoteiroGeneratedApi


class GeneratedClientTests(unittest.TestCase):
    def test_generated_client_encodes_path_parameters(self):
        client = RoteiroClient("https://example.com")
        captured = {}

        def fake_request(method, path, body=None, extra_headers=None):
            captured["method"] = method
            captured["path"] = path
            return None

        client._request = fake_request  # type: ignore[method-assign]
        api = RoteiroGeneratedApi(client)

        api.delete_dataset("roads/2024 q1")

        self.assertEqual(captured["method"], "DELETE")
        self.assertEqual(captured["path"], "/datasets/roads%2F2024%20q1")

    def test_generated_client_uses_operation_id_sync_helper(self):
        client = RoteiroClient("https://example.com")
        captured = {}

        def fake_request(method, path, body=None, extra_headers=None):
            captured["method"] = method
            captured["path"] = path
            captured["body"] = body
            return None

        client._request = fake_request  # type: ignore[method-assign]
        api = RoteiroGeneratedApi(client)

        api.sync_upload(body={"collection_id": "roads", "changes": []})

        self.assertEqual(captured["method"], "POST")
        self.assertEqual(captured["path"], "/api/sync/upload")
        self.assertEqual(captured["body"], {"collection_id": "roads", "changes": []})


if __name__ == "__main__":
    unittest.main()
