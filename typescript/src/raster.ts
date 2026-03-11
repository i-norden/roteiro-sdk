/**
 * Raster analysis operations.
 *
 * Provides functions for common raster analysis tasks: band math, NDVI,
 * hillshade, zonal statistics, and raster export.
 * @module raster
 */

import type { RoteiroClient } from './client';
import type { ZonalStatsResult } from './types';

/**
 * Apply a band math expression to a raster dataset.
 *
 * The expression can reference bands using `b1`, `b2`, etc.
 * Example: `"(b4 - b3) / (b4 + b3)"` for NDVI.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param inputName - Name of the raster dataset.
 * @param expression - Band math expression.
 * @param colormap - Color ramp to apply (default: "viridis").
 * @returns The server response (image metadata or inline result).
 */
export async function bandMath(
  client: RoteiroClient,
  inputName: string,
  expression: string,
  colormap: string = 'viridis',
): Promise<unknown> {
  return client.post<unknown>(
    `/raster/${encodeURIComponent(inputName)}/band-math`,
    { expression, colormap },
  );
}

/**
 * Compute NDVI (Normalized Difference Vegetation Index) for a raster.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param inputName - Name of the raster dataset.
 * @param nirBand - Band index for the near-infrared band.
 * @param redBand - Band index for the red band.
 * @param colormap - Color ramp to apply (default: "viridis").
 * @returns The server response (image metadata or inline result).
 */
export async function ndvi(
  client: RoteiroClient,
  inputName: string,
  nirBand: number = 0,
  redBand: number = 0,
  colormap: string = 'viridis',
): Promise<unknown> {
  return client.post<unknown>(
    `/raster/${encodeURIComponent(inputName)}/ndvi`,
    { nir_band: nirBand, red_band: redBand, colormap },
  );
}

/**
 * Generate a hillshade visualization for a raster dataset.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param inputName - Name of the raster dataset.
 * @param azimuth - Light source azimuth (0-360, default: 315).
 * @param altitude - Light source altitude (0-90, default: 45).
 * @param colormap - Color ramp to apply (default: "greyscale").
 * @returns The server response (image metadata or inline result).
 */
export async function hillshade(
  client: RoteiroClient,
  inputName: string,
  azimuth: number = 315,
  altitude: number = 45,
  colormap: string = 'greyscale',
): Promise<unknown> {
  return client.post<unknown>(
    `/raster/${encodeURIComponent(inputName)}/hillshade`,
    { azimuth, altitude, colormap },
  );
}

/**
 * Compute zonal statistics for a raster dataset.
 *
 * Calculates statistics (min, max, mean, count, sum) for each zone
 * defined in the zones GeoJSON.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param rasterName - Name of the raster dataset.
 * @param zonesGeoJSON - A GeoJSON FeatureCollection defining analysis zones.
 * @returns Zonal statistics results.
 */
export async function zonalStats(
  client: RoteiroClient,
  rasterName: string,
  zonesGeoJSON: Record<string, unknown>,
): Promise<ZonalStatsResult> {
  return client.post<ZonalStatsResult>(
    `/raster/${encodeURIComponent(rasterName)}/zonal-stats`,
    { zones: zonesGeoJSON },
  );
}

/**
 * Export a raster to a different format.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param rasterName - Name of the raster dataset.
 * @param format - Output format (e.g. "geotiff", "png").
 * @param bbox - Optional bounding box to clip the export.
 * @returns The export result metadata.
 */
export async function exportRaster(
  client: RoteiroClient,
  rasterName: string,
  format: string,
  bbox?: [number, number, number, number],
): Promise<unknown> {
  const body: Record<string, unknown> = { format };
  if (bbox) {
    body.bbox = bbox;
  }
  return client.post<unknown>(
    `/raster/${encodeURIComponent(rasterName)}/export`,
    body,
  );
}

/**
 * Get raster dataset information (bands, dimensions, CRS, bounds).
 *
 * @param client - An initialised RoteiroClient instance.
 * @param rasterName - Name of the raster dataset.
 * @returns Raster metadata.
 */
export async function getRasterInfo(
  client: RoteiroClient,
  rasterName: string,
): Promise<unknown> {
  return client.request<unknown>(
    `/raster/${encodeURIComponent(rasterName)}/info`,
  );
}

/**
 * Get raster band statistics (min, max, mean, stddev per band).
 *
 * @param client - An initialised RoteiroClient instance.
 * @param rasterName - Name of the raster dataset.
 * @returns Band statistics.
 */
export async function getRasterStats(
  client: RoteiroClient,
  rasterName: string,
): Promise<unknown> {
  return client.request<unknown>(
    `/raster/${encodeURIComponent(rasterName)}/stats`,
  );
}
