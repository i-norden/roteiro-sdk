import { describe, expect, it, vi } from 'vitest';
import { importIndoorFile } from '../src/indoor';
import { RoteiroClient } from '../src/client';

describe('indoor module', () => {
  it('uploads indoor model files through the multipart import endpoint', async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      expect(new URL(url).pathname).toBe('/api/indoor/import');
      expect(init?.method).toBe('POST');
      expect(init?.body).toBeInstanceOf(FormData);

      const form = init?.body as FormData;
      const uploaded = form.get('file');
      expect(uploaded).toBeInstanceOf(File);
      expect((uploaded as File).name).toBe('campus.imdf.zip');

      return new Response(
        JSON.stringify({
          id: 'building-1',
          name: 'HQ',
          created_at: '2026-03-16T00:00:00Z',
          updated_at: '2026-03-16T00:00:00Z',
        }),
        { status: 201, headers: { 'Content-Type': 'application/json' } },
      );
    });

    const client = new RoteiroClient({
      baseUrl: 'https://example.com',
      fetch: fetchMock as typeof globalThis.fetch,
    });

    const model = await importIndoorFile(
      client,
      new File(['zip-bytes'], 'campus.imdf.zip', { type: 'application/zip' }),
      'campus.imdf.zip',
    );

    expect(model.building.id).toBe('building-1');
    expect(model.source_format).toBe('imdf');
  });
});
