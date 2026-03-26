import { describe, expect, it, vi } from 'vitest';
import { RoteiroClient } from '../src/client';
import * as vcs from '../src/vcs';

describe('vcs helpers', () => {
  it('creates managed repositories using the current Cairn API', async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      expect(new URL(url).pathname).toBe('/api/vcs/repos');
      expect(init?.method).toBe('POST');
      expect(JSON.parse(String(init?.body))).toEqual({
        name: 'roads-history',
        project_id: 42,
        dataset_name: 'roads',
      });
      return new Response(
        JSON.stringify({
          id: 'repo_123',
          name: 'roads-history',
          tenant_id: 7,
          project_id: 42,
          dataset_name: 'roads',
          created_by: 99,
          created_at: '2026-03-25T00:00:00Z',
        }),
        { status: 201 },
      );
    });

    const client = new RoteiroClient({
      baseUrl: 'https://example.com',
      projectId: 42,
      fetch: fetchMock as typeof globalThis.fetch,
    });

    const repo = await vcs.createRepo(client, 'roads-history', {
      datasetName: 'roads',
    });

    expect(repo.id).toBe('repo_123');
    expect(repo.project_id).toBe(42);
  });

  it('uses repo_id for commit history and diffs', async () => {
    const fetchMock = vi
      .fn()
      .mockImplementationOnce(async (url: string, init?: RequestInit) => {
        expect(new URL(url).pathname).toBe('/api/vcs/commit');
        expect(init?.method).toBe('POST');
        expect(JSON.parse(String(init?.body))).toEqual({
          repo_id: 'repo_123',
          input: '/data/roads.geojson',
          message: 'Initial import',
        });
        return new Response(
          JSON.stringify({
            id: 'commit_1',
            message: 'Initial import',
            timestamp: '2026-03-25T00:00:00Z',
            parent: '',
            blob_id: 'blob_1',
          }),
          { status: 201 },
        );
      })
      .mockImplementationOnce(async (url: string) => {
        const parsed = new URL(url);
        expect(parsed.pathname).toBe('/api/vcs/log');
        expect(parsed.searchParams.get('repo_id')).toBe('repo_123');
        return new Response(
          JSON.stringify([
            {
              id: 'commit_1',
              message: 'Initial import',
              timestamp: '2026-03-25T00:00:00Z',
            },
          ]),
          { status: 200 },
        );
      })
      .mockImplementationOnce(async (url: string) => {
        const parsed = new URL(url);
        expect(parsed.pathname).toBe('/api/vcs/diff');
        expect(parsed.searchParams.get('repo_id')).toBe('repo_123');
        expect(parsed.searchParams.get('from')).toBe('commit_0');
        expect(parsed.searchParams.get('to')).toBe('commit_1');
        return new Response(
          JSON.stringify({
            added: [],
            removed: [],
            modified: [],
            stats: {
              added: 0,
              removed: 0,
              modified: 0,
              unchanged: 1,
            },
          }),
          { status: 200 },
        );
      });

    const client = new RoteiroClient({
      baseUrl: 'https://example.com',
      fetch: fetchMock as typeof globalThis.fetch,
    });

    const commit = await vcs.commit(
      client,
      'repo_123',
      '/data/roads.geojson',
      'Initial import',
    );
    const commits = await vcs.log(client, 'repo_123');
    const diff = await vcs.diff(client, 'repo_123', 'commit_0', 'commit_1');

    expect(commit.blob_id).toBe('blob_1');
    expect(commits).toHaveLength(1);
    expect(diff.stats?.unchanged).toBe(1);
  });
});
