"""OGC API Features collections and feature operations.

This module provides standalone functions that operate on a ``RoteiroClient``
instance.  They are also accessible as methods on ``RoteiroClient`` directly
(the client class delegates to these).
"""

from __future__ import annotations

from typing import TYPE_CHECKING, List, Optional

from .client import _encode_path_value, _with_query
from .models import Collection, Feature, FeatureCollection

if TYPE_CHECKING:
    from .client import RoteiroClient


def list_collections(client: RoteiroClient) -> List[Collection]:
    """List all OGC API collections.

    Args:
        client: An initialised RoteiroClient instance.

    Returns:
        A list of Collection descriptors.
    """
    resp = client._get("/collections")
    return [Collection.from_dict(c) for c in resp.get("collections", [])]


def get_collection(client: RoteiroClient, collection_id: str) -> Collection:
    """Get a single collection by ID.

    Args:
        client: An initialised RoteiroClient instance.
        collection_id: The collection identifier.

    Returns:
        A Collection object.
    """
    data = client._get(f"/collections/{_encode_path_value(collection_id)}")
    return Collection.from_dict(data)


def get_items(
    client: RoteiroClient,
    collection_id: str,
    *,
    bbox: Optional[str] = None,
    limit: Optional[int] = None,
    where: Optional[str] = None,
) -> FeatureCollection:
    """Query features from a collection with optional filters.

    Args:
        client: An initialised RoteiroClient instance.
        collection_id: The collection identifier.
        bbox: Bounding box filter as ``"minx,miny,maxx,maxy"``.
        limit: Maximum number of features to return.
        where: CQL2 filter expression.

    Returns:
        A FeatureCollection with matching features.
    """
    path = _with_query(
        f"/collections/{_encode_path_value(collection_id)}/items",
        [("bbox", bbox), ("limit", limit), ("filter", where)],
    )
    data = client._get(path)
    return FeatureCollection.from_dict(data)


def get_item(
    client: RoteiroClient,
    collection_id: str,
    feature_id: str,
) -> Feature:
    """Get a single feature from a collection.

    Args:
        client: An initialised RoteiroClient instance.
        collection_id: The collection identifier.
        feature_id: The feature identifier.

    Returns:
        A Feature object.
    """
    data = client._get(
        f"/collections/{_encode_path_value(collection_id)}/items/{_encode_path_value(feature_id)}"
    )
    return Feature.from_dict(data)


def create_item(
    client: RoteiroClient,
    collection_id: str,
    feature: dict,
) -> Feature:
    """Create a new feature in a collection.

    Args:
        client: An initialised RoteiroClient instance.
        collection_id: The collection identifier.
        feature: A GeoJSON Feature dictionary.

    Returns:
        The created Feature.
    """
    data = client._request(
        "POST",
        f"/collections/{_encode_path_value(collection_id)}/items",
        body=feature,
        extra_headers={"Content-Type": "application/geo+json"},
    )
    return Feature.from_dict(data)


def update_item(
    client: RoteiroClient,
    collection_id: str,
    feature_id: str,
    feature: dict,
) -> Feature:
    """Update an existing feature in a collection.

    Args:
        client: An initialised RoteiroClient instance.
        collection_id: The collection identifier.
        feature_id: The feature identifier.
        feature: A GeoJSON Feature dictionary with updated data.

    Returns:
        The updated Feature.
    """
    data = client._request(
        "PUT",
        f"/collections/{_encode_path_value(collection_id)}/items/{_encode_path_value(feature_id)}",
        body=feature,
        extra_headers={"Content-Type": "application/geo+json"},
    )
    return Feature.from_dict(data)


def delete_item(
    client: RoteiroClient,
    collection_id: str,
    feature_id: str,
) -> None:
    """Delete a feature from a collection.

    Args:
        client: An initialised RoteiroClient instance.
        collection_id: The collection identifier.
        feature_id: The feature identifier.
    """
    client._delete(
        f"/collections/{_encode_path_value(collection_id)}/items/{_encode_path_value(feature_id)}"
    )
