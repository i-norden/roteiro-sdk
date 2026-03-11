"""Raster analysis operations.

Provides functions for common raster analysis tasks including band math,
NDVI computation, hillshade generation, and zonal statistics.  These
operations call the server-side raster processing endpoints.
"""

from __future__ import annotations

from typing import TYPE_CHECKING, Any, Dict, Optional

from .models import ZonalStatsResult

if TYPE_CHECKING:
    from .client import RoteiroClient


def band_math(
    client: RoteiroClient,
    input_name: str,
    expression: str,
    colormap: str = "viridis",
) -> bytes:
    """Apply a band math expression to a raster dataset.

    The expression can reference bands using ``b1``, ``b2``, etc.
    For example: ``"(b4 - b3) / (b4 + b3)"`` for NDVI.

    The result is returned as PNG image bytes.

    Args:
        client: An initialised RoteiroClient instance.
        input_name: Name of the raster dataset.
        expression: Band math expression.
        colormap: Color ramp to apply (default: ``viridis``).

    Returns:
        PNG image bytes of the computed raster.
    """
    import json as _json
    from urllib.error import HTTPError
    from urllib.request import Request, urlopen

    url = f"{client.base_url}/raster/{input_name}/band-math"
    body = _json.dumps(
        {"expression": expression, "colormap": colormap}
    ).encode("utf-8")
    headers = client._build_headers({"Content-Type": "application/json"})
    # Override Accept since we expect image/png.
    headers["Accept"] = "image/png"

    req = Request(url, data=body, headers=headers, method="POST")
    try:
        with urlopen(req, timeout=client.timeout) as resp:
            return resp.read()
    except HTTPError as exc:
        from .client import RoteiroAPIError

        raise RoteiroAPIError(
            f"Band math failed: {exc.code}", status_code=exc.code
        ) from exc


def ndvi(
    client: RoteiroClient,
    input_name: str,
    nir_band: int = 0,
    red_band: int = 0,
    colormap: str = "viridis",
) -> bytes:
    """Compute NDVI (Normalized Difference Vegetation Index) for a raster.

    The result is returned as PNG image bytes.

    Args:
        client: An initialised RoteiroClient instance.
        input_name: Name of the raster dataset.
        nir_band: Band index for the near-infrared band.
        red_band: Band index for the red band.
        colormap: Color ramp to apply (default: ``viridis``).

    Returns:
        PNG image bytes of the NDVI result.
    """
    import json as _json
    from urllib.error import HTTPError
    from urllib.request import Request, urlopen

    url = f"{client.base_url}/raster/{input_name}/ndvi"
    body = _json.dumps(
        {"nir_band": nir_band, "red_band": red_band, "colormap": colormap}
    ).encode("utf-8")
    headers = client._build_headers({"Content-Type": "application/json"})
    headers["Accept"] = "image/png"

    req = Request(url, data=body, headers=headers, method="POST")
    try:
        with urlopen(req, timeout=client.timeout) as resp:
            return resp.read()
    except HTTPError as exc:
        from .client import RoteiroAPIError

        raise RoteiroAPIError(
            f"NDVI failed: {exc.code}", status_code=exc.code
        ) from exc


def hillshade(
    client: RoteiroClient,
    input_name: str,
    azimuth: float = 315.0,
    altitude: float = 45.0,
    colormap: str = "greyscale",
) -> bytes:
    """Generate a hillshade visualization for a raster dataset.

    The result is returned as PNG image bytes.

    Args:
        client: An initialised RoteiroClient instance.
        input_name: Name of the raster dataset.
        azimuth: Light source azimuth in degrees (0--360, default: 315).
        altitude: Light source altitude in degrees (0--90, default: 45).
        colormap: Color ramp to apply (default: ``greyscale``).

    Returns:
        PNG image bytes of the hillshade.
    """
    import json as _json
    from urllib.error import HTTPError
    from urllib.request import Request, urlopen

    url = f"{client.base_url}/raster/{input_name}/hillshade"
    body = _json.dumps(
        {"azimuth": azimuth, "altitude": altitude, "colormap": colormap}
    ).encode("utf-8")
    headers = client._build_headers({"Content-Type": "application/json"})
    headers["Accept"] = "image/png"

    req = Request(url, data=body, headers=headers, method="POST")
    try:
        with urlopen(req, timeout=client.timeout) as resp:
            return resp.read()
    except HTTPError as exc:
        from .client import RoteiroAPIError

        raise RoteiroAPIError(
            f"Hillshade failed: {exc.code}", status_code=exc.code
        ) from exc


def zonal_stats(
    client: RoteiroClient,
    raster_name: str,
    zones_geojson: Dict[str, Any],
) -> Dict[str, Any]:
    """Compute zonal statistics for a raster dataset.

    Calculates statistics (min, max, mean, count, sum) for each zone
    defined in the zones GeoJSON.

    Args:
        client: An initialised RoteiroClient instance.
        raster_name: Name of the raster dataset.
        zones_geojson: A GeoJSON FeatureCollection defining the analysis zones.

    Returns:
        A dictionary with zonal statistics results.
    """
    data = client._post(
        f"/raster/{raster_name}/zonal-stats",
        {"zones": zones_geojson},
    )
    return data
