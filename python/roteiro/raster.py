"""Raster analysis operations."""

from __future__ import annotations

from typing import TYPE_CHECKING, Any, Dict, List, Optional

from .client import _encode_path_value, _with_query
from .models import (
    ElevationProfileResult,
    RasterBandValues,
    RasterDimensions,
    RasterExportResult,
    RasterGridResult,
    RasterHistogram,
    RasterInfo,
    RasterMosaicInfo,
    RasterStats,
    ZonalStatsResult,
)

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
    return client._request_bytes(
        "POST",
        f"/raster/{_encode_path_value(input_name)}/band-math",
        {"expression": expression, "colormap": colormap},
        {"Accept": "image/png"},
    )


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
    return client._request_bytes(
        "POST",
        f"/raster/{_encode_path_value(input_name)}/ndvi",
        {"nir_band": nir_band, "red_band": red_band, "colormap": colormap},
        {"Accept": "image/png"},
    )


def hillshade(
    client: RoteiroClient,
    input_name: str,
    band: int = 0,
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
    return client._request_bytes(
        "POST",
        f"/raster/{_encode_path_value(input_name)}/hillshade",
        {
            "band": band,
            "azimuth": azimuth,
            "altitude": altitude,
            "colormap": colormap,
        },
        {"Accept": "image/png"},
    )


def slope(
    client: RoteiroClient,
    input_name: str,
    band: int = 0,
    colormap: str = "greyscale",
) -> bytes:
    """Compute slope from a DEM and return as PNG bytes.

    Args:
        client: An initialised RoteiroClient instance.
        input_name: Name of the raster dataset.
        band: Band index to use for slope computation.
        colormap: Color ramp to apply (default: ``greyscale``).

    Returns:
        PNG image bytes of the slope result.
    """
    return client._request_bytes(
        "POST",
        f"/raster/{_encode_path_value(input_name)}/slope",
        {"band": band, "colormap": colormap},
        {"Accept": "image/png"},
    )


def aspect(
    client: RoteiroClient,
    input_name: str,
    band: int = 0,
    colormap: str = "hsv",
) -> bytes:
    """Compute aspect from a DEM and return as PNG bytes.

    Args:
        client: An initialised RoteiroClient instance.
        input_name: Name of the raster dataset.
        band: Band index to use for aspect computation.
        colormap: Color ramp to apply (default: ``hsv``).

    Returns:
        PNG image bytes of the aspect result.
    """
    return client._request_bytes(
        "POST",
        f"/raster/{_encode_path_value(input_name)}/aspect",
        {"band": band, "colormap": colormap},
        {"Accept": "image/png"},
    )


def zonal_stats(
    client: RoteiroClient,
    raster_name: str,
    zones_dataset: str,
    band: int = 0,
) -> ZonalStatsResult:
    """Compute zonal statistics for a raster dataset.

    Calculates statistics (min, max, mean, count, sum) for each zone
    defined in another registered dataset.

    Args:
        client: An initialised RoteiroClient instance.
        raster_name: Name of the raster dataset.
        zones_dataset: Registered dataset name defining the analysis zones.
        band: Raster band index.

    Returns:
        A zonal statistics result object.
    """
    data = client._post(
        f"/raster/{_encode_path_value(raster_name)}/zonal-stats",
        {"zones": zones_dataset, "band": band},
    )
    return ZonalStatsResult.from_dict(data)


def export_raster(
    client: RoteiroClient,
    raster_name: str,
    output_path: str,
    band: int = 0,
) -> RasterExportResult:
    """Export a raster band as a GeoTIFF file under the server export root."""
    data = client._post(
        f"/raster/{_encode_path_value(raster_name)}/export",
        {"output_path": output_path, "band": band},
    )
    return RasterExportResult.from_dict(data)


def get_raster_info(client: RoteiroClient, raster_name: str) -> RasterInfo:
    """Get raster dataset metadata."""
    data = client._get(f"/raster/{_encode_path_value(raster_name)}/info")
    return RasterInfo.from_dict(data)


def get_raster_stats(
    client: RoteiroClient,
    raster_name: str,
    band: int = 0,
) -> RasterStats:
    """Get per-band statistics for a raster dataset."""
    data = client._get(
        _with_query(
            f"/raster/{_encode_path_value(raster_name)}/stats",
            {"band": band},
        )
    )
    return RasterStats.from_dict(data)


def get_raster_histogram(
    client: RoteiroClient,
    raster_name: str,
    band: int = 0,
) -> RasterHistogram:
    """Get sampled histogram metadata for a raster band."""
    data = client._get(
        _with_query(
            f"/raster/{_encode_path_value(raster_name)}/histogram",
            {"band": band},
        )
    )
    return RasterHistogram.from_dict(data)


def get_raster_dimensions(
    client: RoteiroClient,
    raster_name: str,
) -> RasterDimensions:
    """Get multidimensional raster metadata."""
    data = client._get(f"/raster/{_encode_path_value(raster_name)}/dimensions")
    return RasterDimensions.from_dict(data)


def get_raster_band_values(
    client: RoteiroClient,
    raster_name: str,
    band: int = 0,
    max_size: int = 256,
) -> RasterBandValues:
    """Get downsampled band values for raster inspection."""
    data = client._get(
        _with_query(
            f"/raster/{_encode_path_value(raster_name)}/values",
            {"band": band, "max_size": max_size},
        )
    )
    return RasterBandValues.from_dict(data)


def process(
    client: RoteiroClient,
    operation: str,
    input_path: Optional[str] = None,
    params: Optional[Dict[str, Any]] = None,
    *,
    output_path: Optional[str] = None,
    band: Optional[int] = None,
) -> Dict[str, Any]:
    """Run a generic raster processing operation."""
    return client.raster_process(
        operation,
        input_path=input_path,
        params=params,
        output_path=output_path,
        band=band,
    )


def mosaic(
    client: RoteiroClient,
    names: List[str],
    *,
    band: int = 0,
    operation: str = "first",
    colormap: str = "greyscale",
) -> bytes:
    """Render a PNG mosaic from registered raster datasets."""
    return client.raster_mosaic(
        names,
        band=band,
        operation=operation,
        colormap=colormap,
    )


def get_mosaic_info(client: RoteiroClient, names: List[str]) -> RasterMosaicInfo:
    """Fetch combined metadata for a raster mosaic request."""
    return client.get_raster_mosaic_info(names)


def contour(
    client: RoteiroClient,
    raster_name: str,
    *,
    band: int = 0,
    interval: float = 10.0,
    base: float = 0.0,
    min_value: Optional[float] = None,
    max_value: Optional[float] = None,
) -> Dict[str, Any]:
    """Generate contour lines as a GeoJSON FeatureCollection."""
    body: Dict[str, Any] = {
        "band": band,
        "interval": interval,
        "base": base,
    }
    if min_value is not None:
        body["min_value"] = min_value
    if max_value is not None:
        body["max_value"] = max_value
    return client._post(f"/raster/{_encode_path_value(raster_name)}/contour", body)


def viewshed(
    client: RoteiroClient,
    raster_name: str,
    *,
    observer_x: float,
    observer_y: float,
    band: int = 0,
    observer_height: float = 2.0,
    target_height: float = 0.0,
    max_distance: float = 0.0,
    refraction_coeff: float = 0.13,
) -> RasterGridResult:
    """Compute a viewshed visibility grid."""
    data = client._post(
        f"/raster/{_encode_path_value(raster_name)}/viewshed",
        {
            "band": band,
            "observer_x": observer_x,
            "observer_y": observer_y,
            "observer_height": observer_height,
            "target_height": target_height,
            "max_distance": max_distance,
            "refraction_coeff": refraction_coeff,
        },
    )
    return RasterGridResult.from_dict(data)


def elevation_profile(
    client: RoteiroClient,
    raster_name: str,
    polyline: List[List[float]],
    *,
    band: int = 0,
    sample_interval: float = 0.0,
) -> ElevationProfileResult:
    """Sample elevations along a polyline."""
    data = client._post(
        f"/raster/{_encode_path_value(raster_name)}/profile",
        {
            "band": band,
            "polyline": polyline,
            "sample_interval": sample_interval,
        },
    )
    return ElevationProfileResult.from_dict(data)


def kde(
    client: RoteiroClient,
    dataset: str,
    *,
    bandwidth: float = 1.0,
    kernel: str = "gaussian",
    bounds: Optional[List[float]] = None,
    resolution: Optional[List[int]] = None,
) -> RasterGridResult:
    """Compute kernel density from a vector dataset via ``/api/raster/kde``."""
    body: Dict[str, Any] = {
        "dataset": dataset,
        "bandwidth": bandwidth,
        "kernel": kernel,
    }
    if bounds is not None:
        body["bounds"] = bounds
    if resolution is not None:
        body["resolution"] = resolution
    data = client._post("/api/raster/kde", body)
    return RasterGridResult.from_dict(data)
