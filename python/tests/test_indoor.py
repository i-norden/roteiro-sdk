import unittest

from roteiro import indoor
from roteiro.client import RoteiroClient


class IndoorModuleTests(unittest.TestCase):
    def test_import_indoor_file_uses_multipart_import_endpoint(self):
        client = RoteiroClient("https://example.com")
        captured = {}

        def fake_upload(path, file_path, field_name="file", extra_fields=None):
            captured["path"] = path
            captured["file_path"] = file_path
            captured["field_name"] = field_name
            captured["extra_fields"] = extra_fields
            return {
                "id": "building-1",
                "name": "HQ",
                "created_at": "2026-03-16T00:00:00Z",
                "updated_at": "2026-03-16T00:00:00Z",
            }

        client._upload_file = fake_upload  # type: ignore[method-assign]

        model = indoor.import_indoor_file(client, "/tmp/campus.imdf.zip")

        self.assertEqual(captured["path"], "/api/indoor/import")
        self.assertEqual(captured["file_path"], "/tmp/campus.imdf.zip")
        self.assertEqual(model.building.id, "building-1")
        self.assertEqual(model.source_format, "imdf")


if __name__ == "__main__":
    unittest.main()
