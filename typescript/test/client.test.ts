import { describe, expect, it, vi } from 'vitest';
import { RoteiroAPIError, RoteiroClient } from '../src/client';

describe('RoteiroClient', () => {
  it('builds collection query params correctly', async () => {
    const fetchMock = vi.fn(async (url: string) => {
      const parsed = new URL(url);
      expect(parsed.pathname).toBe('/collections/roads/items');
      expect(parsed.searchParams.get('bbox')).toBe('1,2,3,4');
      expect(parsed.searchParams.get('bbox-crs')).toBe('EPSG:4326');
      expect(parsed.searchParams.get('crs')).toBe('EPSG:3857');
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
      bboxCRS: 'EPSG:4326',
      crs: 'EPSG:3857',
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
          operations: [
            {
              name: 'buffer',
              label: 'Planar Buffer',
              description: 'Buffer',
              category: 'vector',
              requires_projected_crs: true,
              params: [
                {
                  name: 'distance',
                  kind: 'distance_crs',
                  required: true,
                },
              ],
            },
          ],
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

  it('submits process preflight requests with default params objects', async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      expect(new URL(url).pathname).toBe('/api/process/preflight');
      expect(init?.method).toBe('POST');
      expect(JSON.parse(String(init?.body))).toEqual({
        operation: 'clip',
        input: 'buildings',
        params: {},
      });
      return new Response(JSON.stringify({ valid: true, resolved_params: {} }), {
        status: 200,
      });
    });

    const client = new RoteiroClient({
      baseUrl: 'https://example.com',
      fetch: fetchMock as typeof globalThis.fetch,
    });

    const result = await client.preflightProcess({
      operation: 'clip',
      input: 'buildings',
    });

    expect(result.valid).toBe(true);
  });

  it('builds async process job query params correctly', async () => {
    const fetchMock = vi.fn(async (url: string) => {
      const parsed = new URL(url);
      expect(parsed.pathname).toBe('/api/process/jobs');
      expect(parsed.searchParams.get('status')).toBe('queued');
      expect(parsed.searchParams.get('search')).toBe('buffer');
      expect(parsed.searchParams.get('limit')).toBe('25');
      expect(parsed.searchParams.get('offset')).toBe('10');
      return new Response(JSON.stringify([]), { status: 200 });
    });

    const client = new RoteiroClient({
      baseUrl: 'https://example.com',
      fetch: fetchMock as typeof globalThis.fetch,
    });

    const result = await client.listProcessJobs({
      status: 'queued',
      search: 'buffer',
      limit: 25,
      offset: 10,
    });

    expect(result).toEqual([]);
  });

  it('uploads datasets as multipart form data', async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      expect(new URL(url).pathname).toBe('/upload');
      expect(init?.method).toBe('POST');
      expect(new Headers(init?.headers).get('X-Project-ID')).toBe('42');
      expect(init?.body).toBeInstanceOf(FormData);
      const form = init?.body as FormData;
      expect(form.get('name')).toBe('roads');
      expect(form.get('project_id')).toBe('42');
      expect(form.get('file')).toBeInstanceOf(File);
      return new Response(
        JSON.stringify({
          name: 'roads',
          path: '/tmp/roads.geojson',
          format: 'geojson',
        }),
        { status: 200 },
      );
    });

    const client = new RoteiroClient({
      baseUrl: 'https://example.com',
      projectId: 42,
      fetch: fetchMock as typeof globalThis.fetch,
    });

    const result = await client.upload(
      new Uint8Array([1, 2, 3]),
      'roads.geojson',
      'roads',
    );

    expect(result.name).toBe('roads');
  });

  it('applies the configured project scope to JSON bodies and tile URLs', async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      expect(new URL(url).pathname).toBe('/api/process');
      expect(new Headers(init?.headers).get('X-Project-ID')).toBe('42');
      expect(JSON.parse(String(init?.body))).toEqual({
        operation: 'buffer',
        input: 'roads',
        params: {},
        project_id: 42,
      });
      return new Response(
        JSON.stringify({
          operation: 'buffer',
          input_features: 1,
          output_features: 1,
          duration_ms: 1,
        }),
        { status: 200 },
      );
    });

    const client = new RoteiroClient({
      baseUrl: 'https://example.com',
      projectId: 42,
      fetch: fetchMock as typeof globalThis.fetch,
    });

    const result = await client.process({
      operation: 'buffer',
      input: 'roads',
    });

    expect(result.operation).toBe('buffer');
    expect(client.vectorTilesUrl('city basemap')).toBe(
      'https://example.com/tiles/city%20basemap/{z}/{x}/{y}?project_id=42',
    );
    expect(client.rasterTilesUrl('dem')).toBe(
      'https://example.com/raster/dem/tiles/{z}/{x}/{y}?project_id=42',
    );
    expect(client.pmtilesUrl('archive.pmtiles')).toBe(
      'https://example.com/pmtiles/archive.pmtiles/{z}/{x}/{y}?project_id=42',
    );
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
