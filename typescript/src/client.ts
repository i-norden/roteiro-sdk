import type {
  AdhocPipelineRequest,
  ClientOptions,
  Collection,
  Dataset,
  Feature,
  FeatureCollection,
  HealthStatus,
  ImportSourceRequest,
  ListOperationJobsParams,
  OperationBatchSubmitResponse,
  OperationCatalog,
  OperationJobRecord,
  OperationPreflightResult,
  OperationRequest,
  OperationResponse,
  PipelineExecutionResult,
  PipelineRun,
  Project,
  ProjectWorkspace,
  PublishMapRequest,
  PublishMapResult,
  QueryDataset,
  QueryEngineInfo,
  QueryExecuteRequest,
  QueryExecuteResponse,
  QueryParams,
  SaveSqlResultRequest,
  SavedPipeline,
  SavedPipelineCreateRequest,
  SavedPipelineUpdateRequest,
} from './types';

export class RoteiroAPIError extends Error {
  public readonly statusCode?: number;

  constructor(message: string, statusCode?: number) {
    super(message);
    this.name = 'RoteiroAPIError';
    this.statusCode = statusCode;
  }
}

export class RoteiroClient {
  private readonly baseUrl: string;
  private readonly apiKey?: string;
  private readonly projectId?: number;
  private readonly timeout: number;
  private readonly maxRetries: number;
  private readonly backoffFactor: number;
  private readonly fetchFn: typeof globalThis.fetch;

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

  getProjectId(): number | undefined {
    return this.projectId;
  }

  private buildHeaders(extra?: HeadersInit): Record<string, string> {
    const headers = new Headers(extra);
    if (!headers.has('Accept')) {
      headers.set('Accept', 'application/json');
    }
    if (this.apiKey && !headers.has('X-API-Key')) {
      headers.set('X-API-Key', this.apiKey);
    }
    if (this.projectId !== undefined && !headers.has('X-Project-ID')) {
      headers.set('X-Project-ID', String(this.projectId));
    }
    return Object.fromEntries(headers.entries());
  }

  private withDefaultProjectId<T extends { project_id?: number }>(body: T): T {
    if (body.project_id !== undefined || this.projectId === undefined) {
      return body;
    }
    return { ...body, project_id: this.projectId };
  }

  private withProjectQuery(path: string, projectId?: number): string {
    const scopedProjectId = projectId ?? this.projectId;
    if (scopedProjectId === undefined) {
      return path;
    }
    const separator = path.includes('?') ? '&' : '?';
    return `${path}${separator}project_id=${encodeURIComponent(String(scopedProjectId))}`;
  }

  private buildQuery(params: object): string {
    const search = new URLSearchParams();
    for (const [key, value] of Object.entries(params as Record<string, unknown>)) {
      if (value === undefined || value === null) continue;
      if (Array.isArray(value)) {
        for (const item of value) {
          if (item === undefined || item === null) continue;
          search.append(key, String(item));
        }
        continue;
      }
      search.set(key, String(value));
    }
    const encoded = search.toString();
    return encoded ? `?${encoded}` : '';
  }

  private async requestResponse(path: string, init?: RequestInit): Promise<Response> {
    let lastError: Error | undefined;

    for (let attempt = 0; attempt <= this.maxRetries; attempt += 1) {
      if (attempt > 0) {
        const delay = this.backoffFactor * 2 ** (attempt - 1);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      try {
        const response = await this.fetchFn(`${this.baseUrl}${path}`, {
          ...init,
          headers: this.buildHeaders(init?.headers),
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (!response.ok) {
          if (RoteiroClient.RETRYABLE_STATUS.has(response.status)) {
            lastError = new RoteiroAPIError(`API error: ${response.status}`, response.status);
            continue;
          }

          const body = await response.text();
          let message = `API error: ${response.status}`;
          try {
            const parsed = JSON.parse(body) as Record<string, unknown>;
            if (typeof parsed.error === 'string') message = parsed.error;
            else if (typeof parsed.message === 'string') message = parsed.message;
          } catch {
            if (body.trim()) message = body.trim();
          }
          throw new RoteiroAPIError(message, response.status);
        }

        return response;
      } catch (error) {
        clearTimeout(timeoutId);
        if (error instanceof RoteiroAPIError) {
          if (RoteiroClient.RETRYABLE_STATUS.has(error.statusCode ?? 0)) {
            lastError = error;
            continue;
          }
          throw error;
        }
        lastError = error as Error;
      }
    }

    throw lastError ?? new RoteiroAPIError('Request failed after retries');
  }

  async request<T>(path: string, init?: RequestInit): Promise<T> {
    const response = await this.requestResponse(path, init);
    if (response.status === 204) {
      return undefined as T;
    }

    const contentType = response.headers.get('content-type') ?? '';
    if (contentType.includes('json')) {
      return (await response.json()) as T;
    }

    const text = await response.text();
    if (!text) {
      return undefined as T;
    }

    try {
      return JSON.parse(text) as T;
    } catch {
      return text as T;
    }
  }

  async requestBlob(path: string, init?: RequestInit): Promise<Blob> {
    const response = await this.requestResponse(path, init);
    return response.blob();
  }

  post<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  }

  put<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>(path, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  }

  patch<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>(path, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  }

  async del(path: string): Promise<void> {
    await this.request<void>(path, { method: 'DELETE' });
  }

  async health(): Promise<HealthStatus> {
    return this.request<HealthStatus>('/health');
  }

  async listDatasets(): Promise<Dataset[]> {
    return this.request<Dataset[]>('/datasets');
  }

  async deleteDataset(name: string): Promise<void> {
    await this.del(`/datasets/${encodeURIComponent(name)}`);
  }

  async getDatasetStatuses(names: string[]): Promise<Dataset[]> {
    return this.request<Dataset[]>(`/api/v1/datasets/status${this.buildQuery({ name: names })}`);
  }

  async getDatasetMetadata(name: string): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>(`/api/v1/datasets/${encodeURIComponent(name)}/metadata`);
  }

  async updateDatasetMetadata(name: string, patch: Record<string, unknown>): Promise<Record<string, unknown>> {
    return this.patch<Record<string, unknown>>(`/api/v1/datasets/${encodeURIComponent(name)}/metadata`, patch);
  }

  async getDatasetSchema(name: string): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>(`/api/v1/datasets/${encodeURIComponent(name)}/schema`);
  }

  async updateDatasetSchema(name: string, schema: Record<string, unknown>): Promise<Record<string, unknown>> {
    return this.put<Record<string, unknown>>(`/api/v1/datasets/${encodeURIComponent(name)}/schema`, schema);
  }

  async getDatasetProfile(name: string): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>(`/api/v1/datasets/${encodeURIComponent(name)}/profile`);
  }

  async validateDataset(name: string, body: Record<string, unknown> = {}): Promise<Record<string, unknown>> {
    return this.post<Record<string, unknown>>(`/api/v1/datasets/${encodeURIComponent(name)}/validate`, body);
  }

  async getValidationRules(name: string): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>(`/api/v1/datasets/${encodeURIComponent(name)}/validation-rules`);
  }

  async updateValidationRules(name: string, body: Record<string, unknown>): Promise<Record<string, unknown>> {
    return this.put<Record<string, unknown>>(`/api/v1/datasets/${encodeURIComponent(name)}/validation-rules`, body);
  }

  async importSource(request: ImportSourceRequest): Promise<Record<string, unknown>> {
    return this.post<Record<string, unknown>>('/api/v1/datasets/import-source', this.withDefaultProjectId(request));
  }

  async listCollections(): Promise<Collection[]> {
    const response = await this.request<{ collections: Collection[] }>('/collections');
    return response.collections ?? [];
  }

  async getCollection(id: string): Promise<Collection> {
    return this.request<Collection>(`/collections/${encodeURIComponent(id)}`);
  }

  async getItems(collectionId: string, params: QueryParams = {}): Promise<FeatureCollection> {
    return this.request<FeatureCollection>(
      `/collections/${encodeURIComponent(collectionId)}/items${this.buildQuery({
        bbox: params.bbox,
        'bbox-crs': params.bboxCRS,
        crs: params.crs,
        limit: params.limit,
        filter: params.filter,
        datetime: params.datetime,
        offset: params.offset,
        cursor: params.cursor,
      })}`,
    );
  }

  async queryFeatures(collectionId: string, params: QueryParams = {}): Promise<FeatureCollection> {
    return this.getItems(collectionId, params);
  }

  async getItem(collectionId: string, featureId: string): Promise<Feature> {
    return this.request<Feature>(`/collections/${encodeURIComponent(collectionId)}/items/${encodeURIComponent(featureId)}`);
  }

  async getFeature(collectionId: string, featureId: string): Promise<Feature> {
    return this.getItem(collectionId, featureId);
  }

  async createItem(collectionId: string, feature: Feature): Promise<Feature> {
    return this.request<Feature>(`/collections/${encodeURIComponent(collectionId)}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/geo+json' },
      body: JSON.stringify(feature),
    });
  }

  async updateItem(collectionId: string, featureId: string, feature: Feature): Promise<Feature> {
    return this.request<Feature>(`/collections/${encodeURIComponent(collectionId)}/items/${encodeURIComponent(featureId)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/geo+json' },
      body: JSON.stringify(feature),
    });
  }

  async deleteItem(collectionId: string, featureId: string): Promise<void> {
    await this.del(`/collections/${encodeURIComponent(collectionId)}/items/${encodeURIComponent(featureId)}`);
  }

  async getSceneManifest(): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>('/api/v1/scene-manifest');
  }

  async listBodies(): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>('/api/v1/bodies');
  }

  async getBody(slug: string): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>(`/api/v1/bodies/${encodeURIComponent(slug)}`);
  }

  async getBodyRecipes(slug: string): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>(`/api/v1/bodies/${encodeURIComponent(slug)}/recipes`);
  }

  async getSqlInfo(engine: string): Promise<QueryEngineInfo> {
    return this.request<QueryEngineInfo>(`/api/v1/query/sql/info${this.buildQuery({ engine })}`);
  }

  async listSqlDatasets(engine: string): Promise<QueryDataset[]> {
    return this.request<QueryDataset[]>(`/api/v1/query/sql/datasets${this.buildQuery({ engine })}`);
  }

  async executeSql(engine: string, request: QueryExecuteRequest): Promise<QueryExecuteResponse | Blob> {
    if (request.format === 'arrow') {
      return this.requestBlob(`/api/v1/query/sql${this.buildQuery({ engine })}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      });
    }
    return this.post<QueryExecuteResponse>(`/api/v1/query/sql${this.buildQuery({ engine })}`, request);
  }

  async saveSqlResult(engine: string, request: SaveSqlResultRequest): Promise<Record<string, unknown>> {
    return this.post<Record<string, unknown>>(`/api/v1/query/sql/save${this.buildQuery({ engine })}`, request);
  }

  async listOperations(domain?: string): Promise<OperationCatalog> {
    return this.request<OperationCatalog>(`/api/v1/ops${this.buildQuery({ domain })}`);
  }

  async preflightOperation(request: OperationRequest): Promise<OperationPreflightResult> {
    return this.post<OperationPreflightResult>('/api/v1/ops/preflight', {
      ...this.withDefaultProjectId(request),
      params: request.params ?? {},
    });
  }

  async runOperation(operation: string, request: Omit<OperationRequest, 'operation'> = {}): Promise<OperationResponse | FeatureCollection | unknown> {
    return this.post<OperationResponse | FeatureCollection | unknown>(`/api/v1/ops/${encodeURIComponent(operation)}`, {
      ...this.withDefaultProjectId(request),
      params: request.params ?? {},
    });
  }

  async submitOperationJob(operation: string, request: Omit<OperationRequest, 'operation'> = {}): Promise<OperationJobRecord> {
    return this.post<OperationJobRecord>(`/api/v1/ops/by-operation/${encodeURIComponent(operation)}/jobs`, {
      ...this.withDefaultProjectId(request),
      params: request.params ?? {},
    });
  }

  async submitOperationBatch(jobs: Array<Record<string, unknown>>): Promise<OperationBatchSubmitResponse> {
    return this.post<OperationBatchSubmitResponse>('/api/v1/ops/jobs/batch', { jobs });
  }

  async listOperationJobs(params: ListOperationJobsParams = {}): Promise<OperationJobRecord[]> {
    return this.request<OperationJobRecord[]>(`/api/v1/ops/jobs${this.buildQuery(params)}`);
  }

  async getOperationJob(id: string): Promise<OperationJobRecord> {
    return this.request<OperationJobRecord>(`/api/v1/ops/jobs/${encodeURIComponent(id)}`);
  }

  async cancelOperationJob(id: string): Promise<void> {
    await this.del(`/api/v1/ops/jobs/${encodeURIComponent(id)}`);
  }

  async rerunOperationJob(id: string): Promise<OperationJobRecord> {
    return this.post<OperationJobRecord>(`/api/v1/ops/jobs/${encodeURIComponent(id)}/rerun`, {});
  }

  operationArtifactUrl(id: string, format: string): string {
    return `${this.baseUrl}/api/v1/ops/jobs/${encodeURIComponent(id)}/artifacts/${encodeURIComponent(format)}`;
  }

  async listPipelineOperations(): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>('/api/v1/pipeline/operations');
  }

  async runPipeline(request: AdhocPipelineRequest): Promise<OperationResponse | FeatureCollection | unknown> {
    return this.post<OperationResponse | FeatureCollection | unknown>('/api/v1/pipeline', request);
  }

  async listPipelines(): Promise<SavedPipeline[]> {
    return this.request<SavedPipeline[]>('/api/v1/pipelines');
  }

  async getPipeline(id: string): Promise<SavedPipeline> {
    return this.request<SavedPipeline>(`/api/v1/pipelines/${encodeURIComponent(id)}`);
  }

  async createPipeline(request: SavedPipelineCreateRequest): Promise<SavedPipeline> {
    return this.post<SavedPipeline>('/api/v1/pipelines', request);
  }

  async updatePipeline(id: string, request: SavedPipelineUpdateRequest): Promise<SavedPipeline> {
    return this.put<SavedPipeline>(`/api/v1/pipelines/${encodeURIComponent(id)}`, request);
  }

  async deletePipeline(id: string): Promise<void> {
    await this.del(`/api/v1/pipelines/${encodeURIComponent(id)}`);
  }

  async duplicatePipeline(id: string): Promise<SavedPipeline> {
    return this.post<SavedPipeline>(`/api/v1/pipelines/${encodeURIComponent(id)}/duplicate`, {});
  }

  async executePipeline(id: string): Promise<PipelineExecutionResult> {
    return this.post<PipelineExecutionResult>(`/api/v1/pipelines/${encodeURIComponent(id)}/execute`, {});
  }

  async listPipelineRuns(id: string): Promise<PipelineRun[]> {
    return this.request<PipelineRun[]>(`/api/v1/pipelines/${encodeURIComponent(id)}/runs`);
  }

  async getPipelineRun(runId: string): Promise<PipelineRun> {
    return this.request<PipelineRun>(`/api/v1/pipeline-runs/${encodeURIComponent(runId)}`);
  }

  async listProjects(): Promise<Project[]> {
    return this.request<Project[]>('/api/v1/projects');
  }

  async getProject(id: number): Promise<Project> {
    return this.request<Project>(`/api/v1/projects/${id}`);
  }

  async createProject(name: string, description?: string): Promise<Project> {
    return this.post<Project>('/api/v1/projects', { name, description });
  }

  async updateProject(id: number, body: { name?: string; description?: string | null }): Promise<Project> {
    return this.put<Project>(`/api/v1/projects/${id}`, body);
  }

  async deleteProject(id: number): Promise<void> {
    await this.del(`/api/v1/projects/${id}`);
  }

  async getProjectWorkspace(id: number): Promise<ProjectWorkspace> {
    return this.request<ProjectWorkspace>(`/api/v1/projects/${id}/workspace`);
  }

  async setProjectWorkspace(id: number, body: { map_state: unknown; layer_styles?: unknown }): Promise<ProjectWorkspace> {
    return this.put<ProjectWorkspace>(`/api/v1/projects/${id}/workspace`, {
      map_state: body.map_state,
      layer_styles: body.layer_styles ?? {},
    });
  }

  async publishMap(request: PublishMapRequest): Promise<PublishMapResult> {
    return this.post<PublishMapResult>('/api/v1/maps/publish', request);
  }

  async listPublishedMaps(): Promise<Array<Record<string, unknown>>> {
    return this.request<Array<Record<string, unknown>>>('/api/v1/maps/published');
  }

  async deletePublishedMap(token: string): Promise<void> {
    await this.del(`/api/v1/maps/published/${encodeURIComponent(token)}`);
  }

  async getPublishedMapStats(token: string): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>(`/api/v1/maps/published/${encodeURIComponent(token)}/stats`);
  }

  async updatePublishedMapEmbedConfig(token: string, embedConfig: Record<string, unknown>): Promise<Record<string, unknown>> {
    return this.put<Record<string, unknown>>(`/api/v1/maps/published/${encodeURIComponent(token)}/embed-config`, embedConfig);
  }

  async upload(
    file: Blob | ArrayBuffer | ArrayBufferView,
    filename: string,
    options: { name?: string; projectId?: number; bodyId?: string } = {},
  ): Promise<Dataset> {
    const FormDataCtor = globalThis.FormData;
    const BlobCtor = globalThis.Blob;
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
    if (options.name) form.append('name', options.name);
    const scopedProjectId = options.projectId ?? this.projectId;
    if (scopedProjectId !== undefined) form.append('project_id', String(scopedProjectId));
    if (options.bodyId) form.append('body_id', options.bodyId);

    return this.request<Dataset>('/upload', {
      method: 'POST',
      body: form,
    });
  }

  vectorTilesUrl(tileset: string, projectId?: number): string {
    return `${this.baseUrl}${this.withProjectQuery(`/tiles/${encodeURIComponent(tileset)}/{z}/{x}/{y}`, projectId)}`;
  }

  rasterTilesUrl(name: string, projectId?: number): string {
    return `${this.baseUrl}${this.withProjectQuery(`/raster/${encodeURIComponent(name)}/tiles/{z}/{x}/{y}`, projectId)}`;
  }

  pmtilesUrl(archive: string, projectId?: number): string {
    return `${this.baseUrl}${this.withProjectQuery(`/pmtiles/${encodeURIComponent(archive)}/{z}/{x}/{y}`, projectId)}`;
  }
}
