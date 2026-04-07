import { describe, expect, it, vi } from 'vitest';
import { Pipeline } from '../src/pipeline';
import { RoteiroClient } from '../src/client';

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
      return new Response(JSON.stringify({ type: 'FeatureCollection', features: [] }), { status: 200 });
    });

    const client = new RoteiroClient({ baseUrl: 'https://example.com', fetch: fetchMock as typeof globalThis.fetch });
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
  });

  it('uploads datasets with project and body scope', async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      expect(new URL(url).pathname).toBe('/upload');
      expect(init?.method).toBe('POST');
      expect(new Headers(init?.headers).get('X-Project-ID')).toBe('42');
      const form = init?.body as FormData;
      expect(form.get('name')).toBe('roads');
      expect(form.get('project_id')).toBe('42');
      expect(form.get('body_id')).toBe('moon');
      return new Response(JSON.stringify({ name: 'roads', format: 'geojson' }), { status: 200 });
    });

    const client = new RoteiroClient({ baseUrl: 'https://example.com', projectId: 42, fetch: fetchMock as typeof globalThis.fetch });
    const result = await client.upload(new Uint8Array([1, 2, 3]), 'roads.geojson', { name: 'roads', bodyId: 'moon' });

    expect(result.name).toBe('roads');
  });

  it('posts import-source requests to the current intake endpoint', async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      expect(new URL(url).pathname).toBe('/api/v1/datasets/import-source');
      expect(JSON.parse(String(init?.body))).toEqual({
        name: 'mars-dem',
        source: 'https://example.com/dem.tif',
        source_type: 'remote_url',
        body_id: 'mars',
        project_id: 7,
      });
      return new Response(JSON.stringify({ status: 'queued', name: 'mars-dem' }), { status: 202 });
    });

    const client = new RoteiroClient({ baseUrl: 'https://example.com', projectId: 7, fetch: fetchMock as typeof globalThis.fetch });
    const result = await client.importSource({
      name: 'mars-dem',
      source: 'https://example.com/dem.tif',
      source_type: 'remote_url',
      body_id: 'mars',
    });

    expect(result.status).toBe('queued');
  });

  it('targets the current SQL control-plane endpoints', async () => {
    const fetchMock = vi
      .fn()
      .mockImplementationOnce(async (url: string) => {
        const parsed = new URL(url);
        expect(parsed.pathname).toBe('/api/v1/query/sql/info');
        expect(parsed.searchParams.get('engine')).toBe('postgis');
        return new Response(JSON.stringify({ descriptor: { id: 'postgis' } }), { status: 200 });
      })
      .mockImplementationOnce(async (url: string, init?: RequestInit) => {
        const parsed = new URL(url);
        expect(parsed.pathname).toBe('/api/v1/query/sql');
        expect(parsed.searchParams.get('engine')).toBe('postgis');
        expect(JSON.parse(String(init?.body))).toEqual({ sql: 'select 1' });
        return new Response(JSON.stringify({ status: 'ok', rows: [{ '?column?': 1 }] }), { status: 200 });
      });

    const client = new RoteiroClient({ baseUrl: 'https://example.com', fetch: fetchMock as typeof globalThis.fetch });
    const info = await client.getSqlInfo('postgis');
    const result = await client.executeSql('postgis', { sql: 'select 1' });

    expect(info.descriptor).toEqual({ id: 'postgis' });
    expect((result as { status: string }).status).toBe('ok');
  });

  it('uses body metadata endpoints and the ad hoc pipeline endpoint', async () => {
    const fetchMock = vi
      .fn()
      .mockImplementationOnce(async (url: string) => {
        expect(new URL(url).pathname).toBe('/api/v1/bodies/moon%2Fcustom/recipes');
        return new Response(JSON.stringify({ recipes: [] }), { status: 200 });
      })
      .mockImplementationOnce(async (url: string, init?: RequestInit) => {
        expect(new URL(url).pathname).toBe('/api/v1/pipeline');
        expect(JSON.parse(String(init?.body))).toEqual({
          input: 'roads',
          steps: [
            { operation: 'buffer', params: { distance: 100 } },
            { operation: 'simplify', params: { tolerance: 10 } },
          ],
        });
        return new Response(JSON.stringify({ type: 'FeatureCollection', features: [] }), { status: 200 });
      });

    const client = new RoteiroClient({ baseUrl: 'https://example.com', fetch: fetchMock as typeof globalThis.fetch });
    const recipes = await client.getBodyRecipes('moon/custom');
    const result = await new Pipeline(client).buffer(100).simplify(10).execute('roads');

    expect(recipes).toEqual({ recipes: [] });
    expect((result as { type: string }).type).toBe('FeatureCollection');
  });
});
