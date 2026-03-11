"""Hosted layer management.

Provides functions for uploading, publishing, listing, updating, archiving,
and deleting hosted layers through the Roteiro API.
"""

from __future__ import annotations

from typing import TYPE_CHECKING, Any, Dict, List, Optional

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

    The file is sent as a multipart/form-data upload to ``POST /upload``.
    The resulting dataset is returned as a HostedLayer with status ``uploaded``.

    Args:
        client: An initialised RoteiroClient instance.
        file_path: Local path to the geospatial file.
        name: Display name for the layer.
        description: Optional description for the layer.

    Returns:
        A HostedLayer representing the uploaded dataset.
    """
    extra_fields: Dict[str, str] = {"name": name}
    if description:
        extra_fields["description"] = description
    data = client._upload_file("/upload", file_path, extra_fields=extra_fields)
    layer = HostedLayer.from_dict(data)
    layer.status = "uploaded"
    return layer


def publish_layer(client: RoteiroClient, layer_id: str) -> HostedLayer:
    """Publish a hosted layer, making it available via tile endpoints.

    This registers the layer as a dataset (if not already registered) and
    marks it as published.

    Args:
        client: An initialised RoteiroClient instance.
        layer_id: The identifier (name) of the layer to publish.

    Returns:
        The updated HostedLayer with status ``published``.
    """
    data = client._post(
        "/datasets",
        {"name": layer_id, "path": layer_id, "format": "auto"},
    )
    layer = HostedLayer.from_dict(data)
    layer.status = "published"
    return layer


def list_layers(
    client: RoteiroClient,
    status: Optional[str] = None,
) -> List[HostedLayer]:
    """List hosted layers, optionally filtered by status.

    Args:
        client: An initialised RoteiroClient instance.
        status: Optional status filter (``uploaded``, ``published``, ``archived``).

    Returns:
        A list of HostedLayer objects.
    """
    data = client._get("/datasets")
    layers = [HostedLayer.from_dict(d) for d in data]
    if status:
        layers = [l for l in layers if l.status == status]
    return layers


def get_layer(client: RoteiroClient, layer_id: str) -> HostedLayer:
    """Get details of a single hosted layer.

    Args:
        client: An initialised RoteiroClient instance.
        layer_id: The identifier (name) of the layer.

    Returns:
        A HostedLayer object.
    """
    # Layers are backed by the datasets endpoint.
    data = client._get("/datasets")
    for d in data:
        if d.get("name") == layer_id:
            return HostedLayer.from_dict(d)
    from .client import RoteiroAPIError

    raise RoteiroAPIError(f"Layer '{layer_id}' not found", status_code=404)


def update_layer(
    client: RoteiroClient,
    layer_id: str,
    **kwargs: Any,
) -> HostedLayer:
    """Update a hosted layer's metadata.

    Currently supports re-registering the dataset with updated properties.

    Args:
        client: An initialised RoteiroClient instance.
        layer_id: The identifier (name) of the layer to update.
        **kwargs: Fields to update (e.g. ``name``, ``format``, ``crs``).

    Returns:
        The updated HostedLayer.
    """
    body: Dict[str, Any] = {"name": layer_id}
    body.update(kwargs)
    if "path" not in body:
        body["path"] = layer_id
    data = client._post("/datasets", body)
    return HostedLayer.from_dict(data)


def archive_layer(client: RoteiroClient, layer_id: str) -> None:
    """Archive a hosted layer.

    Removes the layer from the active dataset registry.  The underlying
    files are not deleted.

    Args:
        client: An initialised RoteiroClient instance.
        layer_id: The identifier (name) of the layer to archive.
    """
    client._delete(f"/datasets/{layer_id}")


def delete_layer(client: RoteiroClient, layer_id: str) -> None:
    """Delete a hosted layer permanently.

    Removes the layer from the dataset registry.

    Args:
        client: An initialised RoteiroClient instance.
        layer_id: The identifier (name) of the layer to delete.
    """
    client._delete(f"/datasets/{layer_id}")
