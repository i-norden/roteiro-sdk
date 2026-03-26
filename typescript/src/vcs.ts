/**
 * Spatial version control system (VCS) operations.
 *
 * Provides helpers for managed repository creation, commit history, and diffs.
 * @module vcs
 */

import type { RoteiroClient } from './client';
import type { Commit, DiffResult, Repo } from './types';

export interface CreateRepoOptions {
  projectId?: number;
  datasetName?: string;
}

export interface ListReposOptions {
  projectId?: number;
}

function resolveProjectId(
  client: RoteiroClient,
  projectId?: number,
): number | undefined {
  return projectId ?? client.getProjectId();
}

/**
 * Create a managed VCS repository.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param name - Display name for the repository.
 * @param options - Optional project/dataset linkage.
 * @returns The created managed repository record.
 */
export async function createRepo(
  client: RoteiroClient,
  name: string,
  options: CreateRepoOptions = {},
): Promise<Repo> {
  const body: {
    name: string;
    project_id?: number;
    dataset_name?: string;
  } = { name };
  const projectId = resolveProjectId(client, options.projectId);
  if (projectId !== undefined) {
    body.project_id = projectId;
  }
  if (options.datasetName) {
    body.dataset_name = options.datasetName;
  }
  return client.post<Repo>('/api/vcs/repos', body);
}

/**
 * Backward-compatible alias for {@link createRepo}.
 *
 * Older SDK versions used `initRepo` for a filesystem-path-based flow that is
 * no longer exposed by the server. The current API creates managed
 * repositories by name instead.
 */
export async function initRepo(
  client: RoteiroClient,
  name: string,
  options: CreateRepoOptions = {},
): Promise<Repo> {
  return createRepo(client, name, options);
}

/**
 * List managed VCS repositories visible to the current tenant.
 */
export async function listRepos(
  client: RoteiroClient,
  options: ListReposOptions = {},
): Promise<Repo[]> {
  const projectId = resolveProjectId(client, options.projectId);
  const params = new URLSearchParams();
  if (projectId !== undefined) {
    params.set('project_id', String(projectId));
  }
  const query = params.toString();
  return client.request<Repo[]>(`/api/vcs/repos${query ? `?${query}` : ''}`);
}

/**
 * Fetch a managed VCS repository by ID.
 */
export async function getRepo(
  client: RoteiroClient,
  repoId: string,
): Promise<Repo> {
  return client.request<Repo>(`/api/vcs/repos/${encodeURIComponent(repoId)}`);
}

/**
 * Delete a managed VCS repository by ID.
 */
export async function deleteRepo(
  client: RoteiroClient,
  repoId: string,
): Promise<void> {
  await client.del(`/api/vcs/repos/${encodeURIComponent(repoId)}`);
}

/**
 * Create a new commit in a VCS repository.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param repoId - Managed repository ID.
 * @param inputPath - Path to the geospatial dataset to commit.
 * @param message - Human-readable commit message.
 * @returns The created Commit object.
 */
export async function commit(
  client: RoteiroClient,
  repoId: string,
  inputPath: string,
  message: string,
): Promise<Commit> {
  return client.post<Commit>('/api/vcs/commit', {
    repo_id: repoId,
    input: inputPath,
    message,
  });
}

/**
 * Get the commit history for a repository.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param repoId - Managed repository ID.
 * @returns Commits ordered from most recent to oldest.
 */
export async function log(client: RoteiroClient, repoId: string): Promise<Commit[]> {
  return client.request<Commit[]>(
    `/api/vcs/log?repo_id=${encodeURIComponent(repoId)}`,
  );
}

/**
 * Get the commit history for a dataset's managed repository.
 */
export async function logForDataset(
  client: RoteiroClient,
  datasetName: string,
): Promise<Commit[]> {
  return client.request<Commit[]>(
    `/api/vcs/log/dataset/${encodeURIComponent(datasetName)}`,
  );
}

/**
 * Compute the diff between two commits in a managed repository.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param repoId - Managed repository ID.
 * @param commitA - Commit ID for the base (from) commit.
 * @param commitB - Commit ID for the target (to) commit.
 * @returns A DiffResult with added, removed, and modified features.
 */
export async function diff(
  client: RoteiroClient,
  repoId: string,
  commitA: string,
  commitB: string,
): Promise<DiffResult> {
  const params = new URLSearchParams({
    repo_id: repoId,
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
 * @param repoId - Managed repository ID.
 * @param commitId - The commit ID to check out.
 */
export async function checkout(
  client: RoteiroClient,
  repoId: string,
  commitId: string,
): Promise<void> {
  const commits = await log(client, repoId);
  if (commits.length === 0) {
    throw new Error('No commits in repository');
  }
  const oldest = commits[commits.length - 1];
  if (oldest.id === commitId) {
    return;
  }
  await diff(client, repoId, oldest.id, commitId);
}
