"""Spatial version control system (VCS) operations.

Provides helpers for managed repository creation, commit history, and diffs.
"""

from __future__ import annotations

from typing import TYPE_CHECKING, List, Optional

from .client import _encode_path_value, _with_query
from .models import Commit, DiffResult, Repo

if TYPE_CHECKING:
    from .client import RoteiroClient


def create_repo(
    client: RoteiroClient,
    name: str,
    project_id: Optional[int] = None,
    dataset_name: Optional[str] = None,
) -> Repo:
    """Create a managed VCS repository.

    Args:
        client: An initialised RoteiroClient instance.
        name: Repository display name.
        project_id: Optional project association. Defaults to the client's
            configured project scope when available.
        dataset_name: Optional dataset linkage for the repository.

    Returns:
        The created repository record.
    """
    body = {"name": name}
    effective_project_id = client._effective_project_id(project_id)
    if effective_project_id is not None:
        body["project_id"] = effective_project_id
    if dataset_name:
        body["dataset_name"] = dataset_name
    data = client._post("/api/vcs/repos", body)
    return Repo.from_dict(data)


def init_repo(
    client: RoteiroClient,
    name: str,
    project_id: Optional[int] = None,
    dataset_name: Optional[str] = None,
) -> Repo:
    """Backward-compatible alias for ``create_repo``."""
    return create_repo(
        client,
        name,
        project_id=project_id,
        dataset_name=dataset_name,
    )


def list_repos(
    client: RoteiroClient,
    project_id: Optional[int] = None,
) -> List[Repo]:
    """List managed repositories visible to the current tenant."""
    effective_project_id = client._effective_project_id(project_id)
    path = "/api/vcs/repos"
    if effective_project_id is not None:
        path = _with_query(path, {"project_id": effective_project_id})
    data = client._get(path)
    return [Repo.from_dict(repo) for repo in data]


def get_repo(client: RoteiroClient, repo_id: str) -> Repo:
    """Fetch a managed repository by ID."""
    data = client._get(f"/api/vcs/repos/{_encode_path_value(repo_id)}")
    return Repo.from_dict(data)


def delete_repo(client: RoteiroClient, repo_id: str) -> None:
    """Delete a managed repository by ID."""
    client._delete(f"/api/vcs/repos/{_encode_path_value(repo_id)}")


def commit(
    client: RoteiroClient,
    repo_id: str,
    input_path: str,
    message: str,
) -> Commit:
    """Create a new commit in a VCS repository.

    Converts the input dataset to GeoJSON (if needed) and stores it as a
    content-addressable blob in the repository.

    Args:
        client: An initialised RoteiroClient instance.
        repo_id: Managed repository ID.
        input_path: Path to the geospatial dataset to commit.
        message: Human-readable commit message.

    Returns:
        The created Commit object.
    """
    data = client._post(
        "/api/vcs/commit",
        {"repo_id": repo_id, "input": input_path, "message": message},
    )
    return Commit.from_dict(data)


def log(client: RoteiroClient, repo_id: str) -> List[Commit]:
    """Get the commit history for a repository.

    Returns commits ordered from most recent to oldest.

    Args:
        client: An initialised RoteiroClient instance.
        repo_id: Managed repository ID.

    Returns:
        A list of Commit objects.
    """
    data = client._get(_with_query("/api/vcs/log", {"repo_id": repo_id}))
    return [Commit.from_dict(c) for c in data]


def log_for_dataset(client: RoteiroClient, dataset_name: str) -> List[Commit]:
    """Get commit history for the managed repository linked to a dataset."""
    data = client._get(
        f"/api/vcs/log/dataset/{_encode_path_value(dataset_name)}"
    )
    return [Commit.from_dict(c) for c in data]


def diff(
    client: RoteiroClient,
    repo_id: str,
    commit_a: str,
    commit_b: str,
) -> DiffResult:
    """Compute the diff between two commits.

    Compares the geospatial snapshots at two commits and returns lists of
    added, removed, and modified features.

    Args:
        client: An initialised RoteiroClient instance.
        repo_id: Managed repository ID.
        commit_a: Commit ID or ref for the base (from) commit.
        commit_b: Commit ID or ref for the target (to) commit.

    Returns:
        A DiffResult with added, removed, modified features and stats.
    """
    data = client._get(
        _with_query(
            "/api/vcs/diff",
            {"repo_id": repo_id, "from": commit_a, "to": commit_b},
        )
    )
    return DiffResult.from_dict(data)


def checkout(
    client: RoteiroClient,
    repo_id: str,
    commit_id: str,
) -> None:
    """Check out a specific commit (restore a historical snapshot).

    This is a convenience method.  The VCS diff endpoint can be used to
    inspect what changed, and the commit's blob can be read directly for
    full restoration.

    Args:
        client: An initialised RoteiroClient instance.
        repo_id: Managed repository ID.
        commit_id: The commit ID to check out.

    Note:
        The current server-side implementation supports log and diff.
        Full checkout (restoring a snapshot) may require reading the
        commit blob directly.  This method retrieves the diff from the
        initial commit to the target as a lightweight proxy.
    """
    commits = log(client, repo_id)
    if not commits:
        from .client import RoteiroAPIError

        raise RoteiroAPIError("No commits in repository", status_code=404)

    # Find the oldest commit as the base reference.
    oldest = commits[-1]
    if oldest.id == commit_id:
        # Target is the initial commit; nothing to diff.
        return

    # Retrieve the diff to validate the commit exists.
    diff(client, repo_id, oldest.id, commit_id)
