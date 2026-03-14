/**
 * Geodesic measurement and raster classification operations.
 * @module analysis
 */

import type { RoteiroClient } from './client';
import type {
  ClassifyResult,
  FeatureCollection,
  GeodesicAreaResult,
  GeodesicLengthResult,
} from './types';

/**
 * Compute geodesic polygon area in square meters on the WGS84 ellipsoid.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param geojson - A GeoJSON FeatureCollection containing polygon features.
 * @returns A list of results with index and area_sq_m for each polygon.
 */
export async function geodesicArea(
  client: RoteiroClient,
  geojson: FeatureCollection,
): Promise<GeodesicAreaResult[]> {
  return client.post<GeodesicAreaResult[]>('/api/geodesic/area', geojson);
}

/**
 * Compute geodesic linestring length in meters on the WGS84 ellipsoid.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param geojson - A GeoJSON FeatureCollection containing linestring features.
 * @returns A list of results with index and length_m for each linestring.
 */
export async function geodesicLength(
  client: RoteiroClient,
  geojson: FeatureCollection,
): Promise<GeodesicLengthResult[]> {
  return client.post<GeodesicLengthResult[]>('/api/geodesic/length', geojson);
}

/**
 * K-means unsupervised pixel classification.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param params - Classification parameters with bands and config.
 * @returns A classification result with labels, width, height, and optional confidence.
 */
export async function classifyKMeans(
  client: RoteiroClient,
  params: { bands: Record<string, unknown>; config: { k: number; max_iterations?: number } },
): Promise<ClassifyResult> {
  return client.post<ClassifyResult>('/api/raster/classify/kmeans', params);
}

/**
 * ISODATA unsupervised pixel classification.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param params - Classification parameters with bands and config.
 * @returns A classification result with labels, width, height, and optional confidence.
 */
export async function classifyIsodata(
  client: RoteiroClient,
  params: { bands: Record<string, unknown>; config: Record<string, unknown> },
): Promise<ClassifyResult> {
  return client.post<ClassifyResult>('/api/raster/classify/isodata', params);
}

/**
 * Maximum likelihood supervised pixel classification.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param params - Classification parameters with bands and training data.
 * @returns A classification result with labels, width, height, and optional confidence.
 */
export async function classifyML(
  client: RoteiroClient,
  params: { bands: Record<string, unknown>; training: Record<string, unknown>[] },
): Promise<ClassifyResult> {
  return client.post<ClassifyResult>('/api/raster/classify/ml', params);
}

/**
 * Random forest supervised pixel classification.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param params - Classification parameters with bands, training data, and optional config.
 * @returns A classification result with labels, width, height, and optional confidence.
 */
export async function classifyRF(
  client: RoteiroClient,
  params: { bands: Record<string, unknown>; training: Record<string, unknown>[]; config?: Record<string, unknown> },
): Promise<ClassifyResult> {
  return client.post<ClassifyResult>('/api/raster/classify/rf', params);
}
