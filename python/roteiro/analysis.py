"""Geodesic measurement and raster classification operations."""

from __future__ import annotations

from typing import TYPE_CHECKING, Any, Dict, List, Optional

if TYPE_CHECKING:
    from .client import RoteiroClient


def geodesic_area(client: RoteiroClient, geojson: Dict[str, Any]) -> List[Dict[str, Any]]:
    """Compute geodesic polygon area in square meters on the WGS84 ellipsoid.

    Args:
        client: An initialised RoteiroClient instance.
        geojson: A GeoJSON FeatureCollection containing polygon features.

    Returns:
        A list of results with ``index`` and ``area_sq_m`` for each polygon.
    """
    return client._post("/api/geodesic/area", geojson)


def geodesic_length(client: RoteiroClient, geojson: Dict[str, Any]) -> List[Dict[str, Any]]:
    """Compute geodesic linestring length in meters on the WGS84 ellipsoid.

    Args:
        client: An initialised RoteiroClient instance.
        geojson: A GeoJSON FeatureCollection containing linestring features.

    Returns:
        A list of results with ``index`` and ``length_m`` for each linestring.
    """
    return client._post("/api/geodesic/length", geojson)


def classify_kmeans(
    client: RoteiroClient,
    bands: Dict[str, Any],
    config: Dict[str, Any],
) -> Dict[str, Any]:
    """K-means unsupervised pixel classification.

    Args:
        client: An initialised RoteiroClient instance.
        bands: Band data for classification.
        config: Configuration with ``k`` and optional ``max_iterations``.

    Returns:
        A classification result with ``labels``, ``width``, ``height``,
        and optional ``confidence``.
    """
    return client._post("/api/raster/classify/kmeans", {"bands": bands, "config": config})


def classify_isodata(
    client: RoteiroClient,
    bands: Dict[str, Any],
    config: Dict[str, Any],
) -> Dict[str, Any]:
    """ISODATA unsupervised pixel classification.

    Args:
        client: An initialised RoteiroClient instance.
        bands: Band data for classification.
        config: ISODATA configuration parameters.

    Returns:
        A classification result with ``labels``, ``width``, ``height``,
        and optional ``confidence``.
    """
    return client._post("/api/raster/classify/isodata", {"bands": bands, "config": config})


def classify_ml(
    client: RoteiroClient,
    bands: Dict[str, Any],
    training: List[Any],
) -> Dict[str, Any]:
    """Maximum likelihood supervised pixel classification.

    Args:
        client: An initialised RoteiroClient instance.
        bands: Band data for classification.
        training: Training sample data for supervised classification.

    Returns:
        A classification result with ``labels``, ``width``, ``height``,
        and optional ``confidence``.
    """
    return client._post("/api/raster/classify/ml", {"bands": bands, "training": training})


def classify_rf(
    client: RoteiroClient,
    bands: Dict[str, Any],
    training: List[Any],
    config: Optional[Dict[str, Any]] = None,
) -> Dict[str, Any]:
    """Random forest supervised pixel classification.

    Args:
        client: An initialised RoteiroClient instance.
        bands: Band data for classification.
        training: Training sample data for supervised classification.
        config: Optional random forest configuration parameters.

    Returns:
        A classification result with ``labels``, ``width``, ``height``,
        and optional ``confidence``.
    """
    body: Dict[str, Any] = {"bands": bands, "training": training}
    if config:
        body["config"] = config
    return client._post("/api/raster/classify/rf", body)
