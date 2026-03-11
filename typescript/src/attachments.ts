/**
 * Feature attachment management.
 *
 * Provides functions for uploading, listing, downloading, and deleting
 * file attachments associated with features in a collection.
 * @module attachments
 */

import type { RoteiroClient } from './client';
import type { Attachment } from './types';

/**
 * Upload a file attachment to a feature.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param collectionId - The collection containing the feature.
 * @param featureId - The feature to attach the file to.
 * @param file - The file as a Blob or File object.
 * @param filename - Filename to use for the upload.
 * @returns The created Attachment.
 */
export async function uploadAttachment(
  client: RoteiroClient,
  collectionId: string,
  featureId: string,
  file: Blob,
  filename: string,
): Promise<Attachment> {
  const formData = new FormData();
  formData.append('file', file, filename);

  const enc = (s: string) => encodeURIComponent(s);
  return client.request<Attachment>(
    `/collections/${enc(collectionId)}/items/${enc(featureId)}/attachments`,
    {
      method: 'POST',
      body: formData,
    },
  );
}

/**
 * List all attachments for a feature.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param collectionId - The collection containing the feature.
 * @param featureId - The feature whose attachments to list.
 * @returns A list of Attachment objects.
 */
export async function listAttachments(
  client: RoteiroClient,
  collectionId: string,
  featureId: string,
): Promise<Attachment[]> {
  const enc = (s: string) => encodeURIComponent(s);
  const data = await client.request<Attachment[] | { attachments: Attachment[] }>(
    `/collections/${enc(collectionId)}/items/${enc(featureId)}/attachments`,
  );
  if (Array.isArray(data)) {
    return data;
  }
  return data.attachments ?? [];
}

/**
 * Download an attachment by ID.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param attachmentId - The attachment identifier.
 * @returns The attachment content as a Blob.
 */
export async function downloadAttachment(
  client: RoteiroClient,
  attachmentId: string,
): Promise<Blob> {
  // Use a raw fetch since we need the binary response.
  const resp = await client.request<Blob>(
    `/api/attachments/${encodeURIComponent(attachmentId)}`,
  );
  return resp;
}

/**
 * Delete a feature attachment.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param attachmentId - The attachment identifier.
 */
export async function deleteAttachment(
  client: RoteiroClient,
  attachmentId: string,
): Promise<void> {
  await client.del(`/api/attachments/${encodeURIComponent(attachmentId)}`);
}
