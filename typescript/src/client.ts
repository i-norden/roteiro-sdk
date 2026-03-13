import type {
  ClientOptions,
  Collection,
  ConvertResult,
  Dataset,
  DiffSummary,
  Feature,
  FeatureCollection,
  HealthStatus,
  ListProcessJobsParams,
  ProcessBatchSubmitResponse,
  ProcessJobRecord,
  ProcessPreflightResult,
  ProcessRequest,
  RasterMosaicInfo,
  RasterMosaicRequest,
  RasterProcessRequest,
  RasterProcessResult,
  ProcessingOperationsResponse,
  ProcessResult,
  QueryParams,
} from './types';

/**
 * Custom error class for Roteiro API errors.
 * Contains the HTTP status code from the server response.
 */
export class RoteiroAPIError extends Error {
  /** HTTP status code returned by the server, if available. */
  public readonly statusCode?: number;

  constructor(message: string, statusCode?: number) {
    super(message);
    this.name = 'RoteiroAPIError';
    this.statusCode = statusCode;
  }
}

/**
 * TypeScript client for the Roteiro GIS API.
 *
 * Supports automatic retry with exponential back-off for transient errors
 * (HTTP 429, 502, 503, 504) and fetch failures.
 *
 * ```ts
 * const client = new RoteiroClient({ baseUrl: 'http://localhost:8080' });
 * const health = await client.health();
 * const collections = await client.listCollections();
 * ```
 */
export class RoteiroClient {
  private readonly baseUrl: string;
  private readonly apiKey?: string;
  private readonly timeout: number;
  private readonly maxRetries: number;
  private readonly backoffFactor: number;
  private readonly fetchFn: typeof globalThis.fetch;

  /** Retry-eligible HTTP status codes. */
  private static readonly RETRYABLE_STATUS = new Set([429, 502, 503, 504]);

  constructor(options: ClientOptions) {
    this.baseUrl = options.baseUrl.replace(/\/$/, '');
    this.apiKey = options.apiKey;
    this.timeout = options.timeout ?? 30_000;
    this.maxRetries = options.maxRetries ?? 3;
    this.backoffFactor = options.backoffFactor ?? 500;
    this.fetchFn = options.fetch ?? globalThis.fetch.bind(globalThis);
  }

  // -----------------------------------------------------------------------
  // Internal helpers
  // -----------------------------------------------------------------------

  /** Build default headers for a request. */
  private buildHeaders(extra?: Record<string, string>): Record<string, string> {
    const headers: Record<string, string> = {
      Accept: 'application/json',
      ...extra,
    };
    if (this.apiKey) {
      headers['X-API-Key'] = this.apiKey;
    }
    return headers;
  }

  /**
   * Execute an HTTP request with automatic retry and exponential back-off.
   *
   * @internal
   */
  private async requestResponse(path: string, init?: RequestInit): Promise<Response> {
    let lastError: Error | undefined;

    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      if (attempt > 0) {
        const delay = this.backoffFactor * 2 ** (attempt - 1);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      const headers = this.buildHeaders(init?.headers as Record<string, string>);

      try {
        const response = await this.fetchFn(`${this.baseUrl}${path}`, {
          ...init,
          headers,
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          if (RoteiroClient.RETRYABLE_STATUS.has(response.status)) {
            lastError = new RoteiroAPIError(
              `API error: ${response.status}`,
              response.status,
            );
            continue;
          }

          const body = await response.text();
          let message = `API error: ${response.status}`;
          try {
            const err = JSON.parse(body);
            message = err.error || err.message || message;
          } catch {
            // ignore parse errors
          }
          throw new RoteiroAPIError(message, response.status);
        }

        return response;
      } catch (err) {
        clearTimeout(timeoutId);
        if (err instanceof RoteiroAPIError) {
          if (RoteiroClient.RETRYABLE_STATUS.has(err.statusCode ?? 0)) {
            lastError = err;
            continue;
          }
          throw err;
        }
        // Network / abort errors are retryable.
        lastError = err as Error;
        continue;
      }
    }

    throw lastError ?? new RoteiroAPIError('Request failed after retries');
  }

  async request<T>(path: string, init?: RequestInit): Promise<T> {
    const response = await this.requestResponse(path, init);
    if (response.status === 204) {
      return undefined as unknown as T;
    }
    return (await response.json()) as T;
  }

  async requestBlob(path: string, init?: RequestInit): Promise<Blob> {
    const response = await this.requestResponse(path, init);
    return response.blob();
  }

  /** Perform a POST request with a JSON body. */
  post<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  }

  /** Perform a PUT request with a JSON body. */
  put<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>(path, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  }

  /** Perform a DELETE request. */
  async del(path: string): Promise<void> {
    await this.request<void>(path, { method: 'DELETE' });
  }

  // -----------------------------------------------------------------------
  // Health & Info
  // -----------------------------------------------------------------------

  /** Get server health status. */
  async health(): Promise<HealthStatus> {
    return this.request<HealthStatus>('/health');
  }

  // -----------------------------------------------------------------------
  // Datasets
  // -----------------------------------------------------------------------

  /** List all registered datasets. */
  async listDatasets(): Promise<Dataset[]> {
    return this.request<Dataset[]>('/datasets');
  }

  /** Register a new dataset. */
  async registerDataset(dataset: Partial<Dataset>): Promise<Dataset> {
    return this.post<Dataset>('/datasets', dataset);
  }

  /** Delete a dataset registration. */
  async deleteDataset(name: string): Promise<void> {
    return this.del(`/datasets/${encodeURIComponent(name)}`);
  }

  // -----------------------------------------------------------------------
  // OGC Collections & Features
  // -----------------------------------------------------------------------

  /** List all OGC API collections. */
  async listCollections(): Promise<Collection[]> {
    const resp = await this.request<{ collections: Collection[] }>('/collections');
    return resp.collections ?? [];
  }

  /** Get a single collection. */
  async getCollection(id: string): Promise<Collection> {
    return this.request<Collection>(`/collections/${encodeURIComponent(id)}`);
  }

  /** Query features from a collection with optional filters. */
  async getItems(
    collectionId: string,
    params?: QueryParams,
  ): Promise<FeatureCollection> {
    const sp = new URLSearchParams();
    if (params?.bbox) sp.set('bbox', params.bbox);
    if (params?.limit) sp.set('limit', String(params.limit));
    if (params?.filter) sp.set('filter', params.filter);
    if (params?.datetime) sp.set('datetime', params.datetime);
    if (params?.offset !== undefined) sp.set('offset', String(params.offset));
    const q = sp.toString();
    return this.request<FeatureCollection>(
      `/collections/${encodeURIComponent(collectionId)}/items${q ? `?${q}` : ''}`,
    );
  }

  /** Alias of {@link getItems} for compatibility with previous SDK method names. */
  async queryFeatures(
    collectionId: string,
    params?: QueryParams,
  ): Promise<FeatureCollection> {
    return this.getItems(collectionId, params);
  }

  /** Get a single feature from a collection. */
  async getItem(collectionId: string, featureId: string): Promise<Feature> {
    return this.request<Feature>(
      `/collections/${encodeURIComponent(collectionId)}/items/${encodeURIComponent(featureId)}`,
    );
  }

  /** Alias of {@link getItem}. */
  async getFeature(collectionId: string, featureId: string): Promise<Feature> {
    return this.getItem(collectionId, featureId);
  }

  /** Create a new feature in a collection. */
  async createItem(collectionId: string, feature: Feature): Promise<Feature> {
    return this.request<Feature>(
      `/collections/${encodeURIComponent(collectionId)}/items`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/geo+json' },
        body: JSON.stringify(feature),
      },
    );
  }

  /** Alias of {@link createItem}. */
  async createFeature(collectionId: string, feature: Feature): Promise<Feature> {
    return this.createItem(collectionId, feature);
  }

  /** Update an existing feature in a collection. */
  async updateItem(
    collectionId: string,
    featureId: string,
    feature: Feature,
  ): Promise<Feature> {
    return this.request<Feature>(
      `/collections/${encodeURIComponent(collectionId)}/items/${encodeURIComponent(featureId)}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/geo+json' },
        body: JSON.stringify(feature),
      },
    );
  }

  /** Alias of {@link updateItem}. */
  async updateFeature(
    collectionId: string,
    featureId: string,
    feature: Feature,
  ): Promise<Feature> {
    return this.updateItem(collectionId, featureId, feature);
  }

  /** Delete a feature from a collection. */
  async deleteItem(collectionId: string, featureId: string): Promise<void> {
    await this.del(
      `/collections/${encodeURIComponent(collectionId)}/items/${encodeURIComponent(featureId)}`,
    );
  }

  /** Alias of {@link deleteItem}. */
  async deleteFeature(collectionId: string, featureId: string): Promise<void> {
    return this.deleteItem(collectionId, featureId);
  }

  // -----------------------------------------------------------------------
  // Processing
  // -----------------------------------------------------------------------

  /** Convert a dataset to another format. */
  async convert(params: {
    input: string;
    output_format: string;
    output_name?: string;
    register?: boolean;
  }): Promise<ConvertResult> {
    return this.post<ConvertResult>('/api/convert', params);
  }

  /** Run a spatial processing operation. */
  async process(params: ProcessRequest): Promise<ProcessResult> {
    return this.post<ProcessResult>('/api/process', {
      ...params,
      params: params.params ?? {},
    });
  }

  /** Compare two datasets. */
  async diff(params: {
    left: string;
    right: string;
    match_field?: string;
  }): Promise<DiffSummary> {
    return this.post<DiffSummary>('/api/diff', params);
  }

  /** List available processing operations and output formats. */
  async listOperations(): Promise<ProcessingOperationsResponse> {
    return this.request<ProcessingOperationsResponse>('/api/operations');
  }

  /** Validate and normalize a processing request without executing it. */
  async preflightProcess(params: ProcessRequest): Promise<ProcessPreflightResult> {
    return this.post<ProcessPreflightResult>('/api/process/preflight', {
      ...params,
      params: params.params ?? {},
    });
  }

  /** Submit an asynchronous processing job. */
  async submitProcessJob(params: ProcessRequest): Promise<ProcessJobRecord> {
    return this.request<ProcessJobRecord>('/api/process/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...params,
        params: params.params ?? {},
      }),
    });
  }

  /** Submit a batch of asynchronous processing jobs. */
  async submitProcessBatch(params: {
    jobs: Array<{
      client_id?: string;
      request: ProcessRequest;
      depends_on?: string[];
    }>;
  }): Promise<ProcessBatchSubmitResponse> {
    return this.request<ProcessBatchSubmitResponse>('/api/process/jobs/batch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jobs: params.jobs.map((job) => ({
          ...job,
          request: {
            ...job.request,
            params: job.request.params ?? {},
          },
        })),
      }),
    });
  }

  /** List asynchronous processing jobs for the current tenant. */
  async listProcessJobs(params: ListProcessJobsParams = {}): Promise<ProcessJobRecord[]> {
    const sp = new URLSearchParams();
    if (params.status) sp.set('status', params.status);
    if (params.search) sp.set('search', params.search);
    if (params.limit !== undefined) sp.set('limit', String(params.limit));
    if (params.offset !== undefined) sp.set('offset', String(params.offset));
    const q = sp.toString();
    return this.request<ProcessJobRecord[]>(`/api/process/jobs${q ? `?${q}` : ''}`);
  }

  /** Get a single asynchronous processing job by ID. */
  async getProcessJob(id: string): Promise<ProcessJobRecord> {
    return this.request<ProcessJobRecord>(
      `/api/process/jobs/${encodeURIComponent(id)}`,
    );
  }

  /** Cancel an asynchronous processing job. */
  async cancelProcessJob(id: string): Promise<void> {
    await this.del(`/api/process/jobs/${encodeURIComponent(id)}`);
  }

  /** Re-run a previously submitted asynchronous processing job. */
  async rerunProcessJob(id: string): Promise<ProcessJobRecord> {
    return this.request<ProcessJobRecord>(
      `/api/process/jobs/${encodeURIComponent(id)}/rerun`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  /** Run a generic raster processing operation. */
  async rasterProcess(params: RasterProcessRequest): Promise<RasterProcessResult> {
    return this.post<RasterProcessResult>('/api/raster/process', {
      ...params,
      params: params.params ?? {},
    });
  }

  /** Render a PNG mosaic from two or more registered raster datasets. */
  async rasterMosaic(params: RasterMosaicRequest): Promise<Blob> {
    return this.requestBlob('/api/raster/mosaic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });
  }

  /** Fetch combined metadata for a raster mosaic request. */
  async getRasterMosaicInfo(names: string[]): Promise<RasterMosaicInfo> {
    const sp = new URLSearchParams();
    for (const name of names) {
      sp.append('name', name);
    }
    const q = sp.toString();
    return this.request<RasterMosaicInfo>(
      `/api/raster/mosaic/info${q ? `?${q}` : ''}`,
    );
  }

  // -----------------------------------------------------------------------
  // Tile URL helpers (for MapLibre / Leaflet integration)
  // -----------------------------------------------------------------------

  /** Get the vector tiles URL template for a tileset. */
  vectorTilesUrl(tileset: string): string {
    return `${this.baseUrl}/tiles/${encodeURIComponent(tileset)}/{z}/{x}/{y}`;
  }

  /** Get the raster tiles URL template for a dataset. */
  rasterTilesUrl(name: string): string {
    return `${this.baseUrl}/raster/${encodeURIComponent(name)}/tiles/{z}/{x}/{y}`;
  }

  /** Get the PMTiles URL template for an archive. */
  pmtilesUrl(archive: string): string {
    return `${this.baseUrl}/pmtiles/${encodeURIComponent(archive)}/{z}/{x}/{y}`;
  }
}
