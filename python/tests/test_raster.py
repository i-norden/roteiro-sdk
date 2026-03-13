import unittest

from roteiro import raster
from roteiro.client import RoteiroClient


class RasterModuleTests(unittest.TestCase):
    def test_contour_calls_dataset_route(self):
        client = RoteiroClient("https://example.com")
        captured = {}

        def fake_post(path, body=None):
            captured["path"] = path
            captured["body"] = body
            return {"type": "FeatureCollection", "features": []}

        client._post = fake_post  # type: ignore[method-assign]
        result = raster.contour(client, "elevation", interval=5.0)

        self.assertEqual(captured["path"], "/raster/elevation/contour")
        self.assertEqual(captured["body"], {"band": 0, "interval": 5.0, "base": 0.0})
        self.assertEqual(result["type"], "FeatureCollection")

    def test_kde_calls_api_route(self):
        client = RoteiroClient("https://example.com")
        captured = {}

        def fake_post(path, body=None):
            captured["path"] = path
            captured["body"] = body
            return {"width": 2, "height": 2, "data": [0.1, 0.2]}

        client._post = fake_post  # type: ignore[method-assign]
        result = raster.kde(client, "points", bandwidth=25)

        self.assertEqual(captured["path"], "/api/raster/kde")
        self.assertEqual(
            captured["body"],
            {"dataset": "points", "bandwidth": 25, "kernel": "gaussian"},
        )
        self.assertEqual(result.width, 2)


if __name__ == "__main__":
    unittest.main()
