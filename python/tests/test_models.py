import unittest

from roteiro.models import Attachment, HealthStatus


class ModelParsingTests(unittest.TestCase):
    def test_attachment_maps_size_bytes_and_urls(self):
        attachment = Attachment.from_dict(
            {
                "id": "att-1",
                "filename": "site-photo.jpg",
                "content_type": "image/jpeg",
                "size_bytes": 128,
                "description": "Site photo",
                "download_url": "/api/attachments/att-1",
                "thumbnail_url": "/api/attachments/att-1/thumbnail",
            }
        )

        self.assertEqual(attachment.size, 128)
        self.assertEqual(attachment.size_bytes, 128)
        self.assertEqual(attachment.download_url, "/api/attachments/att-1")
        self.assertEqual(attachment.thumbnail_url, "/api/attachments/att-1/thumbnail")

    def test_health_status_accepts_uptime_alias(self):
        status = HealthStatus.from_dict({"status": "ok", "version": "1.2.3", "uptime": 42})

        self.assertEqual(status.uptime, 42)
        self.assertEqual(status.uptime_seconds, 42)


if __name__ == "__main__":
    unittest.main()
