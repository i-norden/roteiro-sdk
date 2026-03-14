/**
 * OGC API Features collections and feature operations.
 *
 * Standalone functions that operate on a {@link RoteiroClient} instance.
 * @module collections
 */

import type { RoteiroClient } from './client';
import type { Collection, Feature, FeatureCollection, QueryParams } from './types';

/**
 * List all OGC API collections.
 *
 * @param client - An initialised RoteiroClient instance.
 * @returns A list of Collection descriptors.
 */
export async function listCollections(client: RoteiroClient): Promise<Collection[]> {
  const resp = await client.request<{ collections: Collection[] }>('/collections');
  return resp.collections ?? [];
}

/**
 * Get a single collection by ID.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param collectionId - The collection identifier.
 * @returns A Collection object.
 */
export async function getCollection(
  client: RoteiroClient,
  collectionId: string,
): Promise<Collection> {
  return client.request<Collection>(
    `/collections/${encodeURIComponent(collectionId)}`,
  );
}

/**
 * Query features from a collection with optional filters.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param collectionId - The collection identifier.
 * @param params - Optional query parameters (bbox, bboxCRS, crs, limit, filter, datetime, offset).
 * @returns A FeatureCollection with matching features.
 */
export async function getItems(
  client: RoteiroClient,
  collectionId: string,
  params?: QueryParams,
): Promise<FeatureCollection> {
  const sp = new URLSearchParams();
  if (params?.bbox) sp.set('bbox', params.bbox);
  if (params?.bboxCRS) sp.set('bbox-crs', params.bboxCRS);
  if (params?.crs) sp.set('crs', params.crs);
  if (params?.limit) sp.set('limit', String(params.limit));
  if (params?.filter) sp.set('filter', params.filter);
  if (params?.datetime) sp.set('datetime', params.datetime);
  if (params?.offset !== undefined) sp.set('offset', String(params.offset));
  const q = sp.toString();
  return client.request<FeatureCollection>(
    `/collections/${encodeURIComponent(collectionId)}/items${q ? `?${q}` : ''}`,
  );
}

/**
 * Get a single feature from a collection.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param collectionId - The collection identifier.
 * @param featureId - The feature identifier.
 * @returns A Feature object.
 */
export async function getItem(
  client: RoteiroClient,
  collectionId: string,
  featureId: string,
): Promise<Feature> {
  return client.request<Feature>(
    `/collections/${encodeURIComponent(collectionId)}/items/${encodeURIComponent(featureId)}`,
  );
}

/**
 * Create a new feature in a collection.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param collectionId - The collection identifier.
 * @param feature - A GeoJSON Feature object.
 * @returns The created Feature.
 */
export async function createItem(
  client: RoteiroClient,
  collectionId: string,
  feature: Feature,
): Promise<Feature> {
  return client.request<Feature>(
    `/collections/${encodeURIComponent(collectionId)}/items`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/geo+json' },
      body: JSON.stringify(feature),
    },
  );
}

/**
 * Update an existing feature in a collection.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param collectionId - The collection identifier.
 * @param featureId - The feature identifier.
 * @param feature - A GeoJSON Feature object with updated data.
 * @returns The updated Feature.
 */
export async function updateItem(
  client: RoteiroClient,
  collectionId: string,
  featureId: string,
  feature: Feature,
): Promise<Feature> {
  return client.request<Feature>(
    `/collections/${encodeURIComponent(collectionId)}/items/${encodeURIComponent(featureId)}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/geo+json' },
      body: JSON.stringify(feature),
    },
  );
}

/**
 * Delete a feature from a collection.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param collectionId - The collection identifier.
 * @param featureId - The feature identifier.
 */
export async function deleteItem(
  client: RoteiroClient,
  collectionId: string,
  featureId: string,
): Promise<void> {
  await client.del(
    `/collections/${encodeURIComponent(collectionId)}/items/${encodeURIComponent(featureId)}`,
  );
}
