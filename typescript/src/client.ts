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
  SavedPipeline,
  SavedPipelineCreateRequest,
  SavedPipelineExecutionResult,
  SavedPipelineUpdateRequest,
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
  private readonly projectId?: number;
  private readonly timeout: number;
  private readonly maxRetries: number;
  private readonly backoffFactor: number;
  private readonly fetchFn: typeof globalThis.fetch;

  /** Retry-eligible HTTP status codes. */
  private static readonly RETRYABLE_STATUS = new Set([429, 502, 503, 504]);

  constructor(options: ClientOptions) {
    this.baseUrl = options.baseUrl.replace(/\/$/, '');
    this.apiKey = options.apiKey;
    this.projectId = options.projectId;
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
    if (this.projectId !== undefined) {
      headers['X-Project-ID'] = String(this.projectId);
    }
    return headers;
  }

  private withDefaultProjectId<T extends { project_id?: number }>(body: T): T {
    if (body.project_id !== undefined || this.projectId === undefined) {
      return body;
    }
    return {
      ...body,
      project_id: this.projectId,
    };
  }

  private withProjectQuery(path: string): string {
    if (this.projectId === undefined) {
      return path;
    }
    const separator = path.includes('?') ? '&' : '?';
    return `${path}${separator}project_id=${encodeURIComponent(String(this.projectId))}`;
  }

  /** Return the client's configured default project scope, if any. */
  getProjectId(): number | undefined {
    return this.projectId;
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
  async registerDataset(
    dataset: Partial<Dataset> & { project_id?: number },
  ): Promise<Dataset> {
    return this.post<Dataset>('/datasets', this.withDefaultProjectId(dataset));
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
    if (params?.bboxCRS) sp.set('bbox-crs', params.bboxCRS);
    if (params?.crs) sp.set('crs', params.crs);
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
    project_id?: number;
  }): Promise<ConvertResult> {
    return this.post<ConvertResult>(
      '/api/convert',
      this.withDefaultProjectId(params),
    );
  }

  /** Run a spatial processing operation. */
  async process(params: ProcessRequest): Promise<ProcessResult> {
    return this.post<ProcessResult>('/api/process', {
      ...this.withDefaultProjectId(params),
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
      ...this.withDefaultProjectId(params),
      params: params.params ?? {},
    });
  }

  /** Submit an asynchronous processing job. */
  async submitProcessJob(params: ProcessRequest): Promise<ProcessJobRecord> {
    const scoped = this.withDefaultProjectId(params);
    return this.request<ProcessJobRecord>('/api/process/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...scoped,
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
            ...this.withDefaultProjectId(job.request),
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
  // Saved Pipelines
  // -----------------------------------------------------------------------

  /** List persisted pipeline templates. */
  async listPipelineTemplates(): Promise<SavedPipeline[]> {
    return this.request<SavedPipeline[]>('/api/pipelines/templates');
  }

  /** List persisted pipelines for the current tenant. */
  async listPipelines(): Promise<SavedPipeline[]> {
    return this.request<SavedPipeline[]>('/api/pipelines');
  }

  /** Fetch a persisted pipeline by ID. */
  async getPipeline(id: string): Promise<SavedPipeline> {
    return this.request<SavedPipeline>(`/api/pipelines/${encodeURIComponent(id)}`);
  }

  /** Create a persisted pipeline definition. */
  async createPipeline(params: SavedPipelineCreateRequest): Promise<SavedPipeline> {
    return this.post<SavedPipeline>('/api/pipelines', params);
  }

  /** Update a persisted pipeline definition with optimistic concurrency. */
  async updatePipeline(
    id: string,
    params: SavedPipelineUpdateRequest,
  ): Promise<SavedPipeline> {
    return this.put<SavedPipeline>(`/api/pipelines/${encodeURIComponent(id)}`, params);
  }

  /** Delete a persisted pipeline definition. */
  async deletePipeline(id: string): Promise<void> {
    await this.del(`/api/pipelines/${encodeURIComponent(id)}`);
  }

  /** Duplicate a persisted pipeline definition. */
  async duplicatePipeline(id: string): Promise<SavedPipeline> {
    return this.request<SavedPipeline>(`/api/pipelines/${encodeURIComponent(id)}/duplicate`, {
      method: 'POST',
    });
  }

  /** Submit a persisted pipeline for execution. */
  async executePipeline(id: string): Promise<SavedPipelineExecutionResult> {
    return this.request<SavedPipelineExecutionResult>(
      `/api/pipelines/${encodeURIComponent(id)}/execute`,
      {
        method: 'POST',
      },
    );
  }

  // -----------------------------------------------------------------------
  // Upload
  // -----------------------------------------------------------------------

  /** Upload a geospatial file and register it as a dataset. */
  async upload(
    file: Blob | ArrayBuffer | ArrayBufferView,
    filename: string,
    name?: string,
    options: { projectId?: number } = {},
  ): Promise<Dataset> {
    const FormDataCtor = (globalThis as { FormData?: typeof FormData }).FormData;
    const BlobCtor = (globalThis as { Blob?: typeof Blob }).Blob;
    if (!FormDataCtor || !BlobCtor) {
      throw new Error('FormData/Blob not available in this runtime');
    }

    const form = new FormDataCtor();
    const blobPart =
      file instanceof BlobCtor
        ? file
        : ArrayBuffer.isView(file)
          ? new Uint8Array(file.buffer, file.byteOffset, file.byteLength).slice()
          : file;
    const blob = blobPart instanceof BlobCtor ? blobPart : new BlobCtor([blobPart]);
    form.append('file', blob, filename);
    if (name) {
      form.append('name', name);
    }
    const projectId = options.projectId ?? this.projectId;
    if (projectId !== undefined) {
      form.append('project_id', String(projectId));
    }

    return this.request<Dataset>('/upload', {
      method: 'POST',
      body: form,
    });
  }

  // -----------------------------------------------------------------------
  // Tile URL helpers (for MapLibre / Leaflet integration)
  // -----------------------------------------------------------------------

  /** Get the vector tiles URL template for a tileset. */
  vectorTilesUrl(tileset: string): string {
    return `${this.baseUrl}${this.withProjectQuery(
      `/tiles/${encodeURIComponent(tileset)}/{z}/{x}/{y}`,
    )}`;
  }

  /** Get the raster tiles URL template for a dataset. */
  rasterTilesUrl(name: string): string {
    return `${this.baseUrl}${this.withProjectQuery(
      `/raster/${encodeURIComponent(name)}/tiles/{z}/{x}/{y}`,
    )}`;
  }

  /** Get the PMTiles URL template for an archive. */
  pmtilesUrl(archive: string): string {
    return `${this.baseUrl}${this.withProjectQuery(
      `/pmtiles/${encodeURIComponent(archive)}/{z}/{x}/{y}`,
    )}`;
  }
}
