"""Feature attachment management.

Provides functions for uploading, listing, downloading, and deleting file
attachments associated with features in a collection.
"""

from __future__ import annotations

from typing import TYPE_CHECKING, List

from .models import Attachment

if TYPE_CHECKING:
    from .client import RoteiroClient


def upload_attachment(
    client: RoteiroClient,
    collection_id: str,
    feature_id: str,
    file_path: str,
) -> Attachment:
    """Upload a file attachment to a feature.

    Args:
        client: An initialised RoteiroClient instance.
        collection_id: The collection containing the feature.
        feature_id: The feature to attach the file to.
        file_path: Local path to the file to upload.

    Returns:
        An Attachment object describing the uploaded file.
    """
    path = (
        f"/collections/{collection_id}/items/{feature_id}/attachments"
    )
    data = client._upload_file(path, file_path)
    attachment = Attachment.from_dict(data)
    attachment.collection_id = collection_id
    attachment.feature_id = feature_id
    return attachment


def list_attachments(
    client: RoteiroClient,
    collection_id: str,
    feature_id: str,
) -> List[Attachment]:
    """List all attachments for a feature.

    Args:
        client: An initialised RoteiroClient instance.
        collection_id: The collection containing the feature.
        feature_id: The feature whose attachments to list.

    Returns:
        A list of Attachment objects.
    """
    path = (
        f"/collections/{collection_id}/items/{feature_id}/attachments"
    )
    data = client._get(path)
    if isinstance(data, list):
        return [Attachment.from_dict(a) for a in data]
    return [Attachment.from_dict(a) for a in data.get("attachments", [])]


def download_attachment(
    client: RoteiroClient,
    attachment_id: str,
    output_path: str,
) -> None:
    """Download an attachment to a local file.

    Args:
        client: An initialised RoteiroClient instance.
        attachment_id: The attachment identifier.
        output_path: Local path where the file should be saved.
    """
    client._download(f"/api/attachments/{attachment_id}", output_path)


def delete_attachment(
    client: RoteiroClient,
    attachment_id: str,
) -> None:
    """Delete a feature attachment.

    Args:
        client: An initialised RoteiroClient instance.
        attachment_id: The attachment identifier to delete.
    """
    client._delete(f"/api/attachments/{attachment_id}")
