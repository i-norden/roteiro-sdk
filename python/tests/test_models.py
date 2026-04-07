import unittest

from roteiro.models import FeatureCollection, HealthStatus


class ModelParsingTests(unittest.TestCase):
    def test_health_status_accepts_uptime_alias(self) -> None:
        status = HealthStatus.from_dict({"status": "ok", "version": "1.2.3", "uptime": 42})

        self.assertEqual(status.uptime, 42)
        self.assertEqual(status.uptime_seconds, 42)
        self.assertEqual(status.version, "1.2.3")

    def test_feature_collection_parses_counts_and_links(self) -> None:
        collection = FeatureCollection.from_dict(
            {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "id": "f-1",
                        "geometry": {"type": "Point", "coordinates": [1, 2]},
                        "properties": {"name": "alpha"},
                    }
                ],
                "numberMatched": 3,
                "numberReturned": 1,
                "links": [{"href": "/collections/roads/items?cursor=next", "rel": "next"}],
            }
        )

        self.assertEqual(collection.number_matched, 3)
        self.assertEqual(collection.number_returned, 1)
        self.assertEqual(collection.features[0].id, "f-1")
        self.assertEqual(collection.links[0].rel, "next")


if __name__ == "__main__":
    unittest.main()
