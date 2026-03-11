/**
 * Spatial version control system (VCS) operations.
 *
 * Provides functions for initialising repositories, creating commits,
 * viewing commit history, computing diffs, and checking out snapshots.
 * @module vcs
 */

import type { RoteiroClient } from './client';
import type { Commit, DiffResult, Repo } from './types';

/**
 * Initialise a new spatial VCS repository.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param path - Filesystem path where the repository should be created.
 * @returns A Repo object with the initialised path and status.
 */
export async function initRepo(client: RoteiroClient, path: string): Promise<Repo> {
  return client.post<Repo>('/api/vcs/init', { path });
}

/**
 * Create a new commit in a VCS repository.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param repoPath - Filesystem path to the VCS repository.
 * @param inputPath - Path to the geospatial dataset to commit.
 * @param message - Human-readable commit message.
 * @returns The created Commit object.
 */
export async function commit(
  client: RoteiroClient,
  repoPath: string,
  inputPath: string,
  message: string,
): Promise<Commit> {
  return client.post<Commit>('/api/vcs/commit', {
    path: repoPath,
    input: inputPath,
    message,
  });
}

/**
 * Get the commit history for a repository.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param repoPath - Filesystem path to the VCS repository.
 * @returns Commits ordered from most recent to oldest.
 */
export async function log(client: RoteiroClient, repoPath: string): Promise<Commit[]> {
  return client.request<Commit[]>(
    `/api/vcs/log?path=${encodeURIComponent(repoPath)}`,
  );
}

/**
 * Compute the diff between two commits in a repository.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param repoPath - Filesystem path to the VCS repository.
 * @param commitA - Commit ID for the base (from) commit.
 * @param commitB - Commit ID for the target (to) commit.
 * @returns A DiffResult with added, removed, and modified features.
 */
export async function diff(
  client: RoteiroClient,
  repoPath: string,
  commitA: string,
  commitB: string,
): Promise<DiffResult> {
  const params = new URLSearchParams({
    path: repoPath,
    from: commitA,
    to: commitB,
  });
  return client.request<DiffResult>(`/api/vcs/diff?${params.toString()}`);
}

/**
 * Check out a specific commit (retrieve a historical snapshot).
 *
 * This is a convenience function that retrieves the diff from the initial
 * commit to the target commit. Full snapshot restoration may require
 * reading the commit blob directly.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param repoPath - Filesystem path to the VCS repository.
 * @param commitId - The commit ID to check out.
 */
export async function checkout(
  client: RoteiroClient,
  repoPath: string,
  commitId: string,
): Promise<void> {
  const commits = await log(client, repoPath);
  if (commits.length === 0) {
    throw new Error('No commits in repository');
  }
  const oldest = commits[commits.length - 1];
  if (oldest.id === commitId) {
    return;
  }
  await diff(client, repoPath, oldest.id, commitId);
}
