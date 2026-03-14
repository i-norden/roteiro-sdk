import { describe, expect, it, vi } from 'vitest';
import { downloadAttachment } from '../src/attachments';
import { RoteiroClient } from '../src/client';

describe('attachments', () => {
  it('downloads attachments as blobs', async () => {
    const fetchMock = vi.fn(async (url: string) => {
      expect(new URL(url).pathname).toBe('/api/attachments/att-123');
      return new Response('hello world', {
        status: 200,
        headers: { 'Content-Type': 'application/octet-stream' },
      });
    });

    const client = new RoteiroClient({
      baseUrl: 'https://example.com',
      fetch: fetchMock as typeof globalThis.fetch,
    });

    const blob = await downloadAttachment(client, 'att-123');

    expect(blob).toBeInstanceOf(Blob);
    expect(await blob.text()).toBe('hello world');
  });
});
