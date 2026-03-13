import type { RoteiroClient } from './client';
import type {
  ElevationProfileResult,
  FeatureCollection,
  RasterBandValues,
  RasterDimensions,
  RasterExportResult,
  RasterGridResult,
  RasterHistogram,
  RasterInfo,
  RasterKDERequest,
  RasterMosaicInfo,
  RasterMosaicRequest,
  RasterProcessRequest,
  RasterProcessResult,
  RasterStats,
  ZonalStatsResult,
} from './types';

function normalizeZonalStats(result: unknown): ZonalStatsResult {
  if (Array.isArray(result)) {
    return { zones: result as Record<string, unknown>[] };
  }
  if (result && typeof result === 'object' && Array.isArray((result as { zones?: unknown }).zones)) {
    return { zones: (result as { zones: Record<string, unknown>[] }).zones };
  }
  return { zones: [] };
}

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
 * @returns PNG image bytes as a Blob.
 */
export async function bandMath(
  client: RoteiroClient,
  inputName: string,
  expression: string,
  colormap: string = 'viridis',
): Promise<Blob> {
  return client.requestBlob(
    `/raster/${encodeURIComponent(inputName)}/band-math`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ expression, colormap }),
    },
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
 * @returns PNG image bytes as a Blob.
 */
export async function ndvi(
  client: RoteiroClient,
  inputName: string,
  nirBand: number = 0,
  redBand: number = 0,
  colormap: string = 'viridis',
): Promise<Blob> {
  return client.requestBlob(
    `/raster/${encodeURIComponent(inputName)}/ndvi`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nir_band: nirBand, red_band: redBand, colormap }),
    },
  );
}

/**
 * Generate a hillshade visualization for a raster dataset.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param inputName - Name of the raster dataset.
 * @param band - Band index to render.
 * @param azimuth - Light source azimuth (0-360, default: 315).
 * @param altitude - Light source altitude (0-90, default: 45).
 * @param colormap - Color ramp to apply (default: "greyscale").
 * @returns PNG image bytes as a Blob.
 */
export async function hillshade(
  client: RoteiroClient,
  inputName: string,
  band: number = 0,
  azimuth: number = 315,
  altitude: number = 45,
  colormap: string = 'greyscale',
): Promise<Blob> {
  return client.requestBlob(
    `/raster/${encodeURIComponent(inputName)}/hillshade`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ band, azimuth, altitude, colormap }),
    },
  );
}

/**
 * Compute zonal statistics for a raster dataset.
 *
 * Calculates statistics (min, max, mean, count, sum) for each zone
 * defined in another registered dataset.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param rasterName - Name of the raster dataset.
 * @param zonesDataset - Registered dataset name containing the zones.
 * @returns Zonal statistics results.
 */
export async function zonalStats(
  client: RoteiroClient,
  rasterName: string,
  zonesDataset: string,
  band: number = 0,
): Promise<ZonalStatsResult> {
  const result = await client.post<unknown>(
    `/raster/${encodeURIComponent(rasterName)}/zonal-stats`,
    { zones: zonesDataset, band },
  );
  return normalizeZonalStats(result);
}

/**
 * Export a raster band as a GeoTIFF file under the server export root.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param rasterName - Name of the raster dataset.
 * @param outputPath - Relative output path under the server export root.
 * @param band - Raster band index to export.
 * @returns The export result metadata.
 */
export async function exportRaster(
  client: RoteiroClient,
  rasterName: string,
  outputPath: string,
  band: number = 0,
): Promise<RasterExportResult> {
  return client.post<RasterExportResult>(
    `/raster/${encodeURIComponent(rasterName)}/export`,
    { output_path: outputPath, band },
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
): Promise<RasterInfo> {
  return client.request<RasterInfo>(
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
  band: number = 0,
): Promise<RasterStats> {
  return client.request<RasterStats>(
    `/raster/${encodeURIComponent(rasterName)}/stats?band=${band}`,
  );
}

export async function getRasterHistogram(
  client: RoteiroClient,
  rasterName: string,
  band: number = 0,
): Promise<RasterHistogram> {
  return client.request<RasterHistogram>(
    `/raster/${encodeURIComponent(rasterName)}/histogram?band=${band}`,
  );
}

export async function getRasterDimensions(
  client: RoteiroClient,
  rasterName: string,
): Promise<RasterDimensions> {
  return client.request<RasterDimensions>(
    `/raster/${encodeURIComponent(rasterName)}/dimensions`,
  );
}

export async function getRasterBandValues(
  client: RoteiroClient,
  rasterName: string,
  band: number = 0,
  maxSize: number = 256,
): Promise<RasterBandValues> {
  const sp = new URLSearchParams({
    band: String(band),
    max_size: String(maxSize),
  });
  return client.request<RasterBandValues>(
    `/raster/${encodeURIComponent(rasterName)}/values?${sp.toString()}`,
  );
}

export async function process(
  client: RoteiroClient,
  params: RasterProcessRequest,
): Promise<RasterProcessResult> {
  return client.rasterProcess(params);
}

export async function mosaic(
  client: RoteiroClient,
  params: RasterMosaicRequest,
): Promise<Blob> {
  return client.rasterMosaic(params);
}

export async function getMosaicInfo(
  client: RoteiroClient,
  names: string[],
): Promise<RasterMosaicInfo> {
  return client.getRasterMosaicInfo(names);
}

export async function contour(
  client: RoteiroClient,
  rasterName: string,
  params: {
    band?: number;
    interval?: number;
    base?: number;
    min_value?: number;
    max_value?: number;
  },
): Promise<FeatureCollection> {
  return client.post<FeatureCollection>(
    `/raster/${encodeURIComponent(rasterName)}/contour`,
    params,
  );
}

export async function viewshed(
  client: RoteiroClient,
  rasterName: string,
  params: {
    band?: number;
    observer_x: number;
    observer_y: number;
    observer_height?: number;
    target_height?: number;
    max_distance?: number;
    refraction_coeff?: number;
  },
): Promise<RasterGridResult> {
  return client.post<RasterGridResult>(
    `/raster/${encodeURIComponent(rasterName)}/viewshed`,
    params,
  );
}

export async function elevationProfile(
  client: RoteiroClient,
  rasterName: string,
  params: {
    band?: number;
    polyline: [number, number][];
    sample_interval?: number;
  },
): Promise<ElevationProfileResult> {
  return client.post<ElevationProfileResult>(
    `/raster/${encodeURIComponent(rasterName)}/profile`,
    params,
  );
}

export async function kde(
  client: RoteiroClient,
  params: RasterKDERequest,
): Promise<RasterGridResult> {
  return client.post<RasterGridResult>('/api/raster/kde', params);
}
