/**
 * Spatial processing pipeline builder.
 *
 * Provides a fluent {@link Pipeline} class that lets you chain geospatial
 * operations and execute the full pipeline against the server.
 *
 * ```ts
 * const result = await new Pipeline(client)
 *   .buffer(100)
 *   .simplify(10)
 *   .reproject('EPSG:4326', 'EPSG:3857')
 *   .execute('my_dataset');
 * ```
 * @module pipeline
 */

import type { RoteiroClient } from './client';
import type { PipelineStep } from './types';

/**
 * A chainable spatial processing pipeline builder.
 *
 * Build a pipeline by chaining operation methods, then call {@link execute}
 * to run all steps on the server. Intermediate results are piped through
 * as inline GeoJSON.
 */
export class Pipeline {
  private readonly client: RoteiroClient;
  private readonly steps: PipelineStep[] = [];

  /**
   * Create a new Pipeline.
   *
   * @param client - An initialised RoteiroClient instance.
   */
  constructor(client: RoteiroClient) {
    this.client = client;
  }

  // -----------------------------------------------------------------------
  // Geometry operations
  // -----------------------------------------------------------------------

  /**
   * Add a buffer operation.
   *
   * @param distance - Buffer distance in the dataset's CRS units.
   * @returns The pipeline for chaining.
   */
  buffer(distance: number): this {
    this.steps.push({ operation: 'buffer', params: { distance } });
    return this;
  }

  /**
   * Add a clip operation.
   *
   * @param mask - Name of the mask dataset.
   * @returns The pipeline for chaining.
   */
  clip(mask: string): this {
    this.steps.push({ operation: 'clip', params: { mask } });
    return this;
  }

  /**
   * Add a simplify operation.
   *
   * @param tolerance - Simplification tolerance in CRS units.
   * @returns The pipeline for chaining.
   */
  simplify(tolerance: number): this {
    this.steps.push({ operation: 'simplify', params: { tolerance } });
    return this;
  }

  /**
   * Add a union (dissolve) operation.
   *
   * @returns The pipeline for chaining.
   */
  union(): this {
    this.steps.push({ operation: 'union', params: {} });
    return this;
  }

  /**
   * Add an intersection operation.
   *
   * @param mask - Name of the mask dataset.
   * @returns The pipeline for chaining.
   */
  intersect(mask: string): this {
    this.steps.push({ operation: 'clip', params: { mask } });
    return this;
  }

  /**
   * Add a spatial join operation.
   *
   * @param right - Name of the right dataset to join.
   * @param predicate - Spatial predicate (default: "intersects").
   * @returns The pipeline for chaining.
   */
  sjoin(right: string, predicate: string = 'intersects'): this {
    this.steps.push({ operation: 'sjoin', params: { right, predicate } });
    return this;
  }

  /**
   * Add a reprojection operation.
   *
   * @param fromCrs - Source CRS identifier (e.g. "EPSG:4326").
   * @param toCrs - Target CRS identifier (e.g. "EPSG:3857").
   * @returns The pipeline for chaining.
   */
  reproject(fromCrs: string, toCrs: string): this {
    this.steps.push({
      operation: 'reproject',
      params: { from_crs: fromCrs, to_crs: toCrs },
    });
    return this;
  }

  /**
   * Add a centroid operation.
   *
   * @returns The pipeline for chaining.
   */
  centroid(): this {
    this.steps.push({ operation: 'centroid', params: {} });
    return this;
  }

  /**
   * Add a convex hull operation.
   *
   * @returns The pipeline for chaining.
   */
  convexHull(): this {
    this.steps.push({ operation: 'convex_hull', params: {} });
    return this;
  }

  // -----------------------------------------------------------------------
  // Analysis operations
  // -----------------------------------------------------------------------

  /**
   * Add an aggregation (dissolve-by-attribute) operation.
   *
   * @param groupBy - Attribute field name to group by.
   * @returns The pipeline for chaining.
   */
  aggregate(groupBy: string): this {
    this.steps.push({ operation: 'dissolve', params: { group_by: groupBy } });
    return this;
  }

  /**
   * Add a spatial statistics operation.
   *
   * Calculates area, length, and perimeter for each feature.
   *
   * @returns The pipeline for chaining.
   */
  spatialStats(): this {
    this.steps.push({ operation: 'spatial_stats', params: {} });
    return this;
  }

  /**
   * Add an IDW interpolation operation.
   *
   * @param field - Attribute field with numeric values.
   * @param power - Distance weighting power (default: 2).
   * @param cols - Number of grid columns (default: 100).
   * @param rows - Number of grid rows (default: 100).
   * @returns The pipeline for chaining.
   */
  interpolate(
    field: string,
    power: number = 2,
    cols: number = 100,
    rows: number = 100,
  ): this {
    this.steps.push({
      operation: 'interpolate_idw',
      params: { field, power, cols, rows },
    });
    return this;
  }

  // -----------------------------------------------------------------------
  // Execution
  // -----------------------------------------------------------------------

  /**
   * Execute the pipeline against the server.
   *
   * Runs each step sequentially. The first step uses the named dataset
   * as input; subsequent steps pipe inline GeoJSON from the previous step.
   *
   * @param inputData - Name of the input dataset.
   * @returns The final GeoJSON result or ProcessResult from the last step.
   * @throws Error if the pipeline has no steps.
   */
  async execute(inputData: string): Promise<unknown> {
    if (this.steps.length === 0) {
      throw new Error('Pipeline has no steps to execute');
    }

    let result: unknown = null;

    for (let i = 0; i < this.steps.length; i++) {
      const step = this.steps[i];
      const body: Record<string, unknown> = {
        operation: step.operation,
        params: step.params,
        output_format: 'geojson',
      };

      if (i === 0) {
        body.input = inputData;
      } else {
        const prev = result as Record<string, unknown> | null;
        if (prev && (prev.type === 'FeatureCollection' || prev.type === 'Feature')) {
          body.input_geojson = prev;
        } else {
          body.input = inputData;
        }
      }

      result = await this.client.post<unknown>('/api/process', body);
    }

    return result;
  }
}
