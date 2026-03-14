"""Hosted layer management.

Provides functions for uploading, publishing, listing, updating, archiving,
and deleting hosted layers through the Roteiro API.
"""

from __future__ import annotations

from typing import TYPE_CHECKING, Any, Dict, List, Optional

from .client import _encode_path_value, _with_query
from .models import HostedLayer

if TYPE_CHECKING:
    from .client import RoteiroClient


def upload_layer(
    client: RoteiroClient,
    file_path: str,
    name: str,
    description: Optional[str] = None,
) -> HostedLayer:
    """Upload a geospatial file and register it as a hosted layer.

    The file is sent as a multipart/form-data upload to ``POST /api/layers``.

    Args:
        client: An initialised RoteiroClient instance.
        file_path: Local path to the geospatial file.
        name: Display name for the layer.
        description: Optional description for the layer.

    Returns:
        A HostedLayer representing the uploaded layer.
    """
    extra_fields: Dict[str, str] = {"name": name}
    if description:
        extra_fields["description"] = description
    data = client._upload_file("/api/layers", file_path, extra_fields=extra_fields)
    return HostedLayer.from_dict(data)


def publish_layer(client: RoteiroClient, layer_id: str) -> HostedLayer:
    """Publish a hosted layer, making it available via tile endpoints.

    Args:
        client: An initialised RoteiroClient instance.
        layer_id: The identifier of the layer to publish.

    Returns:
        The updated HostedLayer.
    """
    data = client._post(f"/api/layers/{_encode_path_value(layer_id)}/publish", {})
    return HostedLayer.from_dict(data)


def list_layers(
    client: RoteiroClient,
    status: Optional[str] = None,
    limit: Optional[int] = None,
    offset: Optional[int] = None,
) -> List[HostedLayer]:
    """List hosted layers, optionally filtered by status.

    Args:
        client: An initialised RoteiroClient instance.
        status: Optional status filter.
        limit: Optional page size.
        offset: Optional page offset.

    Returns:
        A list of HostedLayer objects.
    """
    path = _with_query(
        "/api/layers",
        [("status", status), ("limit", limit), ("offset", offset)],
    )
    data = client._get(path)
    layers = data.get("layers", data if isinstance(data, list) else [])
    return [HostedLayer.from_dict(d) for d in layers]


def get_layer(client: RoteiroClient, layer_id: str) -> HostedLayer:
    """Get details of a single hosted layer.

    Args:
        client: An initialised RoteiroClient instance.
        layer_id: The identifier of the layer.

    Returns:
        A HostedLayer object.
    """
    data = client._get(f"/api/layers/{_encode_path_value(layer_id)}")
    return HostedLayer.from_dict(data)


def update_layer(
    client: RoteiroClient,
    layer_id: str,
    **kwargs: Any,
) -> HostedLayer:
    """Update a hosted layer's metadata.

    Args:
        client: An initialised RoteiroClient instance.
        layer_id: The identifier of the layer to update.
        **kwargs: Metadata fields to update.

    Returns:
        The updated HostedLayer.
    """
    data = client._put(f"/api/layers/{_encode_path_value(layer_id)}", kwargs)
    return HostedLayer.from_dict(data)


def archive_layer(client: RoteiroClient, layer_id: str) -> HostedLayer:
    """Archive a hosted layer.

    Args:
        client: An initialised RoteiroClient instance.
        layer_id: The identifier of the layer to archive.
    """
    data = client._post(f"/api/layers/{_encode_path_value(layer_id)}/archive", {})
    return HostedLayer.from_dict(data)


def upload_layer_data(
    client: RoteiroClient,
    layer_id: str,
    file_path: str,
) -> HostedLayer:
    """Upload replacement data for an existing layer."""
    data = client._upload_file(
        f"/api/layers/{_encode_path_value(layer_id)}/upload", file_path
    )
    return HostedLayer.from_dict(data)


def delete_layer(client: RoteiroClient, layer_id: str) -> None:
    """Delete a hosted layer permanently.

    Args:
        client: An initialised RoteiroClient instance.
        layer_id: The identifier of the layer to delete.
    """
    client._delete(f"/api/layers/{_encode_path_value(layer_id)}")


def preview_layer(client: RoteiroClient, layer_id: str) -> Any:
    """Fetch a lightweight preview payload for a hosted layer.

    Args:
        client: An initialised RoteiroClient instance.
        layer_id: The identifier of the layer.

    Returns:
        The preview payload returned by the server.
    """
    return client._get(f"/api/layers/{_encode_path_value(layer_id)}/preview")
