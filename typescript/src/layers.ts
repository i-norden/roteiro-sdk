/**
 * Hosted layer management.
 *
 * Provides functions for uploading, publishing, listing, updating, archiving,
 * and deleting hosted layers.
 * @module layers
 */

import type { RoteiroClient } from './client';
import type { HostedLayer } from './types';

type LayerListResponse = {
  layers: HostedLayer[];
  total: number;
  limit?: number;
  offset?: number;
};

/**
 * Upload a geospatial file and register it as a hosted layer.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param file - Raw file bytes or blob.
 * @param filename - Original filename.
 * @param metadata - Optional layer metadata.
 * @returns A HostedLayer representing the uploaded layer.
 */
export async function uploadLayer(
  client: RoteiroClient,
  file: ArrayBuffer | Uint8Array | unknown,
  filename: string,
  metadata?: { name?: string; description?: string; tags?: string[]; style?: unknown },
): Promise<HostedLayer> {
  const FormDataCtor = (globalThis as any).FormData;
  const BlobCtor = (globalThis as any).Blob;
  if (!FormDataCtor || !BlobCtor) {
    throw new Error('FormData/Blob not available in this runtime');
  }
  const form = new FormDataCtor();
  const blob = file instanceof BlobCtor ? file : new BlobCtor([file as any]);
  form.append('file', blob, filename);
  if (metadata?.name) form.append('name', metadata.name);
  if (metadata?.description) form.append('description', metadata.description);
  if (metadata) form.append('metadata', JSON.stringify(metadata));
  return client.request<HostedLayer>('/api/layers', {
    method: 'POST',
    body: form,
  });
}

/**
 * Publish a hosted layer, making it available via tile endpoints.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param layerId - The identifier of the layer to publish.
 * @returns The HostedLayer with status "published".
 */
export async function publishLayer(
  client: RoteiroClient,
  layerId: string,
): Promise<HostedLayer> {
  return client.post<HostedLayer>(
    `/api/layers/${encodeURIComponent(layerId)}/publish`,
    {},
  );
}

/**
 * List hosted layers, optionally filtered by status.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param status - Optional status filter.
 * @param limit - Optional page size.
 * @param offset - Optional page offset.
 * @returns A list of HostedLayer objects.
 */
export async function listLayers(
  client: RoteiroClient,
  status?: string,
  limit?: number,
  offset?: number,
): Promise<HostedLayer[]> {
  const params = new URLSearchParams();
  if (status) params.set('status', status);
  if (limit !== undefined) params.set('limit', String(limit));
  if (offset !== undefined) params.set('offset', String(offset));
  const q = params.toString();
  const resp = await client.request<LayerListResponse>(
    `/api/layers${q ? `?${q}` : ''}`,
  );
  return resp.layers ?? [];
}

/**
 * Get details of a single hosted layer.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param layerId - The identifier of the layer.
 * @returns A HostedLayer object.
 */
export async function getLayer(
  client: RoteiroClient,
  layerId: string,
): Promise<HostedLayer> {
  return client.request<HostedLayer>(
    `/api/layers/${encodeURIComponent(layerId)}`,
  );
}

/**
 * Update a hosted layer's metadata.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param layerId - The identifier of the layer.
 * @param updates - Fields to update.
 * @returns The updated HostedLayer.
 */
export async function updateLayer(
  client: RoteiroClient,
  layerId: string,
  updates: Partial<HostedLayer>,
): Promise<HostedLayer> {
  return client.put<HostedLayer>(
    `/api/layers/${encodeURIComponent(layerId)}`,
    updates,
  );
}

/**
 * Archive a hosted layer (remove from active registry).
 *
 * @param client - An initialised RoteiroClient instance.
 * @param layerId - The identifier of the layer to archive.
 */
export async function archiveLayer(
  client: RoteiroClient,
  layerId: string,
): Promise<HostedLayer> {
  return client.post<HostedLayer>(
    `/api/layers/${encodeURIComponent(layerId)}/archive`,
    {},
  );
}

/**
 * Upload replacement data for an existing hosted layer.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param layerId - The identifier of the layer.
 * @param file - Raw file bytes or blob.
 * @param filename - Original filename.
 */
export async function uploadLayerData(
  client: RoteiroClient,
  layerId: string,
  file: ArrayBuffer | Uint8Array | unknown,
  filename: string,
): Promise<HostedLayer> {
  const FormDataCtor = (globalThis as any).FormData;
  const BlobCtor = (globalThis as any).Blob;
  if (!FormDataCtor || !BlobCtor) {
    throw new Error('FormData/Blob not available in this runtime');
  }
  const form = new FormDataCtor();
  const blob = file instanceof BlobCtor ? file : new BlobCtor([file as any]);
  form.append('file', blob, filename);
  return client.request<HostedLayer>(
    `/api/layers/${encodeURIComponent(layerId)}/upload`,
    {
      method: 'POST',
      body: form,
    },
  );
}

/**
 * Delete a hosted layer permanently.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param layerId - The identifier of the layer to delete.
 */
export async function deleteLayer(
  client: RoteiroClient,
  layerId: string,
): Promise<void> {
  await client.del(`/api/layers/${encodeURIComponent(layerId)}`);
}

/**
 * Fetch a lightweight layer preview payload.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param layerId - The identifier of the layer.
 */
export async function previewLayer(
  client: RoteiroClient,
  layerId: string,
): Promise<unknown> {
  return client.request<unknown>(
    `/api/layers/${encodeURIComponent(layerId)}/preview`,
  );
}
