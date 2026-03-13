"""Spatial version control system (VCS) operations.

Provides functions for initialising repositories, creating commits, viewing
commit history, computing diffs, and checking out historical snapshots.
"""

from __future__ import annotations

from typing import TYPE_CHECKING, List, Optional

from .client import _with_query
from .models import Commit, DiffResult, Repo

if TYPE_CHECKING:
    from .client import RoteiroClient


def init_repo(client: RoteiroClient, path: str) -> Repo:
    """Initialise a new spatial VCS repository.

    Creates a ``.roteiro-vcs/`` directory at the given path to track
    content-addressable geospatial snapshots.

    Args:
        client: An initialised RoteiroClient instance.
        path: Filesystem path where the repository should be initialised.

    Returns:
        A Repo object with the initialised path and status.
    """
    data = client._post("/api/vcs/init", {"path": path})
    return Repo.from_dict(data)


def commit(
    client: RoteiroClient,
    repo_path: str,
    input_path: str,
    message: str,
) -> Commit:
    """Create a new commit in a VCS repository.

    Converts the input dataset to GeoJSON (if needed) and stores it as a
    content-addressable blob in the repository.

    Args:
        client: An initialised RoteiroClient instance.
        repo_path: Filesystem path to the VCS repository.
        input_path: Path to the geospatial dataset to commit.
        message: Human-readable commit message.

    Returns:
        The created Commit object.
    """
    data = client._post(
        "/api/vcs/commit",
        {"path": repo_path, "input": input_path, "message": message},
    )
    return Commit.from_dict(data)


def log(client: RoteiroClient, repo_path: str) -> List[Commit]:
    """Get the commit history for a repository.

    Returns commits ordered from most recent to oldest.

    Args:
        client: An initialised RoteiroClient instance.
        repo_path: Filesystem path to the VCS repository.

    Returns:
        A list of Commit objects.
    """
    data = client._get(_with_query("/api/vcs/log", {"path": repo_path}))
    return [Commit.from_dict(c) for c in data]


def diff(
    client: RoteiroClient,
    repo_path: str,
    commit_a: str,
    commit_b: str,
) -> DiffResult:
    """Compute the diff between two commits.

    Compares the geospatial snapshots at two commits and returns lists of
    added, removed, and modified features.

    Args:
        client: An initialised RoteiroClient instance.
        repo_path: Filesystem path to the VCS repository.
        commit_a: Commit ID or ref for the base (from) commit.
        commit_b: Commit ID or ref for the target (to) commit.

    Returns:
        A DiffResult with added, removed, modified features and stats.
    """
    data = client._get(
        _with_query(
            "/api/vcs/diff",
            {"path": repo_path, "from": commit_a, "to": commit_b},
        )
    )
    return DiffResult.from_dict(data)


def checkout(
    client: RoteiroClient,
    repo_path: str,
    commit_id: str,
) -> None:
    """Check out a specific commit (restore a historical snapshot).

    This is a convenience method.  The VCS diff endpoint can be used to
    inspect what changed, and the commit's blob can be read directly for
    full restoration.

    Args:
        client: An initialised RoteiroClient instance.
        repo_path: Filesystem path to the VCS repository.
        commit_id: The commit ID to check out.

    Note:
        The current server-side implementation supports log and diff.
        Full checkout (restoring a snapshot) may require reading the
        commit blob directly.  This method retrieves the diff from the
        initial commit to the target as a lightweight proxy.
    """
    commits = log(client, repo_path)
    if not commits:
        from .client import RoteiroAPIError

        raise RoteiroAPIError("No commits in repository", status_code=404)

    # Find the oldest commit as the base reference.
    oldest = commits[-1]
    if oldest.id == commit_id:
        # Target is the initial commit; nothing to diff.
        return

    # Retrieve the diff to validate the commit exists.
    diff(client, repo_path, oldest.id, commit_id)
