import type { RoteiroClient } from './client';
import type { AdhocPipelineRequest, PipelineStep } from './types';

export class Pipeline {
  private readonly steps: PipelineStep[] = [];

  constructor(private readonly client: RoteiroClient) {}

  step(operation: string, params: Record<string, unknown> = {}): this {
    this.steps.push({ operation, params });
    return this;
  }

  buffer(distance: number): this {
    return this.step('buffer', { distance });
  }

  clip(mask: string): this {
    return this.step('clip', { mask });
  }

  simplify(tolerance: number): this {
    return this.step('simplify', { tolerance });
  }

  union(): this {
    return this.step('union');
  }

  sjoin(right: string, predicate = 'intersects'): this {
    return this.step('sjoin', { right, predicate });
  }

  reproject(fromCrs: string, toCrs: string): this {
    return this.step('reproject', { from_crs: fromCrs, to_crs: toCrs });
  }

  centroid(): this {
    return this.step('centroid');
  }

  convexHull(): this {
    return this.step('convex_hull');
  }

  aggregate(groupBy: string): this {
    return this.step('dissolve', { group_by: groupBy });
  }

  interpolate(field: string, power = 2, cols = 100, rows = 100): this {
    return this.step('interpolate_idw', { field, power, cols, rows });
  }

  toRequest(options: {
    input?: string;
    inputGeoJSON?: unknown;
    register?: boolean;
    outputName?: string;
  }): AdhocPipelineRequest {
    if (this.steps.length === 0) {
      throw new Error('Pipeline has no steps to execute');
    }

    const request: AdhocPipelineRequest = { steps: [...this.steps] };
    if (options.input !== undefined) request.input = options.input;
    if (options.inputGeoJSON !== undefined) request.input_geojson = options.inputGeoJSON;
    if (options.register !== undefined) request.register = options.register;
    if (options.outputName !== undefined) request.output_name = options.outputName;
    return request;
  }

  async execute(input: string, options: { register?: boolean; outputName?: string } = {}): Promise<unknown> {
    return this.client.runPipeline(this.toRequest({ input, ...options }));
  }

  async executeGeoJSON(inputGeoJSON: unknown, options: { register?: boolean; outputName?: string } = {}): Promise<unknown> {
    return this.client.runPipeline(this.toRequest({ inputGeoJSON, ...options }));
  }
}
