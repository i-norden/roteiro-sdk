import { describe, expect, it, vi } from 'vitest';
import { RoteiroClient } from '../src/client';
import * as raster from '../src/raster';

describe('raster module', () => {
  it('requests PNG blobs for band math endpoints', async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      expect(new URL(url).pathname).toBe('/raster/elevation/band-math');
      expect(init?.method).toBe('POST');
      expect(JSON.parse(String(init?.body))).toEqual({
        expression: '(b4-b3)/(b4+b3)',
        colormap: 'viridis',
      });
      return new Response(new Uint8Array([137, 80, 78, 71]), {
        status: 200,
        headers: { 'Content-Type': 'image/png' },
      });
    });

    const client = new RoteiroClient({
      baseUrl: 'https://example.com',
      fetch: fetchMock as typeof globalThis.fetch,
    });

    const blob = await raster.bandMath(client, 'elevation', '(b4-b3)/(b4+b3)');
    expect(blob.type).toBe('image/png');
  });

  it('normalizes zonal stats array responses', async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      expect(new URL(url).pathname).toBe('/raster/elevation/zonal-stats');
      expect(JSON.parse(String(init?.body))).toEqual({
        zones: 'watersheds',
        band: 2,
      });
      return new Response(
        JSON.stringify([{ zone_id: 1, mean: 12.5 }]),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      );
    });

    const client = new RoteiroClient({
      baseUrl: 'https://example.com',
      fetch: fetchMock as typeof globalThis.fetch,
    });

    const result = await raster.zonalStats(client, 'elevation', 'watersheds', 2);
    expect(result.zones).toEqual([{ zone_id: 1, mean: 12.5 }]);
  });

  it('posts generic raster processing requests with default params objects', async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      expect(new URL(url).pathname).toBe('/api/raster/process');
      expect(JSON.parse(String(init?.body))).toEqual({
        operation: 'slope',
        input_path: '/data/dem.tif',
        params: {},
      });
      return new Response(
        JSON.stringify({ width: 2, height: 2, data: [1, 2, 3, 4] }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      );
    });

    const client = new RoteiroClient({
      baseUrl: 'https://example.com',
      fetch: fetchMock as typeof globalThis.fetch,
    });

    const result = await client.rasterProcess({
      operation: 'slope',
      input_path: '/data/dem.tif',
    });

    expect(result).toEqual({ width: 2, height: 2, data: [1, 2, 3, 4] });
  });

  it('calls contour and kde JSON endpoints', async () => {
    const fetchMock = vi
      .fn()
      .mockImplementationOnce(async (url: string, init?: RequestInit) => {
        expect(new URL(url).pathname).toBe('/raster/elevation/contour');
        expect(JSON.parse(String(init?.body))).toEqual({ interval: 5 });
        return new Response(
          JSON.stringify({ type: 'FeatureCollection', features: [] }),
          { status: 200, headers: { 'Content-Type': 'application/json' } },
        );
      })
      .mockImplementationOnce(async (url: string, init?: RequestInit) => {
        expect(new URL(url).pathname).toBe('/api/raster/kde');
        expect(JSON.parse(String(init?.body))).toEqual({
          dataset: 'points',
          bandwidth: 50,
        });
        return new Response(
          JSON.stringify({ width: 2, height: 2, data: [0.1, 0.2, 0.3, 0.4] }),
          { status: 200, headers: { 'Content-Type': 'application/json' } },
        );
      });

    const client = new RoteiroClient({
      baseUrl: 'https://example.com',
      fetch: fetchMock as typeof globalThis.fetch,
    });

    const contours = await raster.contour(client, 'elevation', { interval: 5 });
    const density = await raster.kde(client, { dataset: 'points', bandwidth: 50 });

    expect(contours.type).toBe('FeatureCollection');
    expect(density.width).toBe(2);
  });
});
