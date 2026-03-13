import { describe, expect, it, vi } from 'vitest';
import { RoteiroClient } from '../src/client';
import { RoteiroGeneratedApi } from '../src/generated';

describe('RoteiroGeneratedApi', () => {
  it('encodes path parameters for generated endpoints', async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      expect(new URL(url).pathname).toBe('/datasets/roads%2F2024%20q1');
      expect(init?.method).toBe('DELETE');
      return new Response(null, { status: 204 });
    });

    const client = new RoteiroClient({
      baseUrl: 'https://example.com',
      fetch: fetchMock as typeof globalThis.fetch,
    });

    const api = new RoteiroGeneratedApi(client);
    await api.deletedataset({ name: 'roads/2024 q1' });

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
