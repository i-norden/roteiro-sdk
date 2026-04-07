import { describe, expect, it, vi } from 'vitest';
import { RoteiroClient } from '../src/client';
import { RoteiroGeneratedApi } from '../src/generated';

describe('RoteiroGeneratedApi', () => {
  it('encodes path parameters for current generated endpoints', async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      expect(new URL(url).pathname).toBe('/api/v1/bodies/moon%2Fcustom');
      expect(init?.method).toBe('GET');
      return new Response('{}', { status: 200, headers: { 'Content-Type': 'application/json' } });
    });

    const client = new RoteiroClient({ baseUrl: 'https://example.com', fetch: fetchMock as typeof globalThis.fetch });
    const api = new RoteiroGeneratedApi(client);

    await api.autoGetApiBodiesSlug({ slug: 'moon/custom' });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('serializes JSON bodies for generated endpoints', async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      expect(new URL(url).pathname).toBe('/api/v1/bodies');
      expect(init?.method).toBe('POST');
      expect(init?.body).toBe(JSON.stringify({ slug: 'ceres' }));
      return new Response('{}', { status: 200, headers: { 'Content-Type': 'application/json' } });
    });

    const client = new RoteiroClient({ baseUrl: 'https://example.com', fetch: fetchMock as typeof globalThis.fetch });
    const api = new RoteiroGeneratedApi(client);

    await api.autoPostApiBodies({ body: { slug: 'ceres' } });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
