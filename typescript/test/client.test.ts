import { describe, expect, it, vi } from 'vitest';
import { RoteiroAPIError, RoteiroClient } from '../src/client';

describe('RoteiroClient', () => {
  it('builds collection query params correctly', async () => {
    const fetchMock = vi.fn(async (url: string) => {
      const parsed = new URL(url);
      expect(parsed.pathname).toBe('/collections/roads/items');
      expect(parsed.searchParams.get('bbox')).toBe('1,2,3,4');
      expect(parsed.searchParams.get('limit')).toBe('5');
      expect(parsed.searchParams.get('filter')).toBe("kind='road'");
      expect(parsed.searchParams.get('datetime')).toBe('2024-01-01T00:00:00Z');
      expect(parsed.searchParams.get('offset')).toBe('10');
      return new Response(
        JSON.stringify({
          type: 'FeatureCollection',
          features: [],
        }),
        { status: 200 },
      );
    });

    const client = new RoteiroClient({
      baseUrl: 'https://example.com',
      fetch: fetchMock as typeof globalThis.fetch,
    });

    const result = await client.getItems('roads', {
      bbox: '1,2,3,4',
      limit: 5,
      filter: "kind='road'",
      datetime: '2024-01-01T00:00:00Z',
      offset: 10,
    });

    expect(result.type).toBe('FeatureCollection');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('fetches processing operations catalog', async () => {
    const fetchMock = vi.fn(async (url: string) => {
      expect(new URL(url).pathname).toBe('/api/operations');
      return new Response(
        JSON.stringify({
          operations: [{ name: 'buffer', description: 'Buffer', params: ['distance'] }],
          formats: ['geojson'],
        }),
        { status: 200 },
      );
    });

    const client = new RoteiroClient({
      baseUrl: 'https://example.com',
      fetch: fetchMock as typeof globalThis.fetch,
    });

    const result = await client.listOperations();
    expect(result.operations[0].name).toBe('buffer');
    expect(result.formats).toContain('geojson');
  });

  it('retries retryable responses and then succeeds', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(new Response('temporary', { status: 503 }))
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ status: 'ok' }), { status: 200 }),
      );

    const client = new RoteiroClient({
      baseUrl: 'https://example.com',
      fetch: fetchMock as typeof globalThis.fetch,
      backoffFactor: 0,
      maxRetries: 1,
    });

    const result = await client.health();

    expect(result.status).toBe('ok');
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('raises RoteiroAPIError for non-retryable API errors', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ error: 'bad request' }), { status: 400 }),
    );

    const client = new RoteiroClient({
      baseUrl: 'https://example.com',
      fetch: fetchMock as typeof globalThis.fetch,
      maxRetries: 0,
    });

    try {
      await client.health();
      throw new Error('expected request to throw');
    } catch (err) {
      expect(err).toBeInstanceOf(RoteiroAPIError);
      expect(err).toMatchObject({
        message: 'bad request',
        statusCode: 400,
      });
    }
  });
});
