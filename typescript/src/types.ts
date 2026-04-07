export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];

export interface JsonObject {
  [key: string]: JsonValue;
}

export interface ClientOptions {
  baseUrl: string;
  apiKey?: string;
  projectId?: number;
  timeout?: number;
  maxRetries?: number;
  backoffFactor?: number;
  fetch?: typeof globalThis.fetch;
}

export interface HealthStatus {
  status: string;
  version?: string;
  uptime?: number;
  uptime_seconds?: number;
  [key: string]: unknown;
}

export interface Link {
  href: string;
  rel: string;
  type?: string;
  title?: string;
}

export interface Dataset {
  name: string;
  format?: string;
  crs?: string;
  storage_uri?: string;
  status?: string;
  error_message?: string;
  feature_count?: number;
  bounds?: number[];
  body_id?: string;
  render_mode?: string;
  geometry_type?: string;
  history_supported?: boolean;
  [key: string]: unknown;
}

export interface Collection {
  id: string;
  title?: string;
  description?: string;
  links?: Link[];
  extent?: Record<string, unknown>;
  crs?: string[];
  [key: string]: unknown;
}

export interface GeoJSONGeometry {
  type: string;
  coordinates?: unknown;
  geometries?: unknown[];
}

export interface Feature {
  type: 'Feature';
  id?: string | number;
  geometry: GeoJSONGeometry | null;
  properties: Record<string, unknown>;
}

export interface FeatureCollection {
  type: 'FeatureCollection';
  features: Feature[];
  numberMatched?: number;
  numberReturned?: number;
  links?: Link[];
  pageInfo?: Record<string, unknown>;
}

export interface QueryParams {
  bbox?: string;
  bboxCRS?: string;
  crs?: string;
  limit?: number;
  filter?: string;
  datetime?: string;
  offset?: number;
  cursor?: string;
}

export interface ImportSourceRequest {
  name: string;
  source: string;
  format?: string;
  crs?: string;
  body_id?: string;
  project_id?: number;
  source_type?: string;
  catalog_url?: string;
  collection?: string;
}

export interface QueryExecuteRequest {
  sql: string;
  limit?: number;
  format?: 'json' | 'arrow';
  query_options?: unknown;
  timeout_sec?: number;
}

export interface QueryExecuteResponse {
  columns?: string[];
  rows?: Array<Record<string, unknown>>;
  row_count?: number;
  duration_ms?: number;
  truncated?: boolean;
  reason?: string;
  status?: string;
  error?: string;
  message?: string;
}

export interface QueryDataset {
  name: string;
  format?: string;
  geometry_column?: string;
  srid?: number;
  geometry_type?: string;
}

export interface QueryEngineInfo {
  descriptor?: Record<string, unknown>;
  capabilities?: Record<string, unknown>;
  functions?: Array<Record<string, unknown>>;
}

export interface SaveSqlResultRequest {
  sql: string;
  output_name: string;
  geometry_column?: string;
  limit?: number;
  timeout_sec?: number;
  query_options?: unknown;
}

export interface OperationRequest {
  operation?: string;
  input?: string;
  input_geojson?: unknown;
  params?: Record<string, unknown>;
  output_format?: string;
  register?: boolean;
  output_name?: string;
  project_id?: number;
}

export interface OperationResponse {
  operation?: string;
  result_kind?: string;
  input_features?: number;
  output_features?: number;
  duration_ms?: number;
  warning?: string;
  suggestions?: Array<Record<string, unknown>>;
  measurement?: Record<string, unknown>;
  dataset?: Record<string, unknown>;
  artifact_uri?: string;
  [key: string]: unknown;
}

export interface OperationCatalog {
  operations: Array<Record<string, unknown>>;
  formats?: string[];
}

export interface OperationPreflightResult {
  valid: boolean;
  errors?: string[];
  warnings?: string[];
  input_crs?: string;
  resolved_params?: Record<string, unknown>;
  result_kind?: string;
  estimate?: Record<string, unknown>;
  recommendation?: Record<string, unknown>;
  recommend_async?: boolean;
}

export interface OperationJobArtifact {
  format: string;
  url?: string;
  label?: string;
}

export interface OperationJobRecord {
  id: string;
  type?: string;
  status?: string;
  progress?: number;
  phase?: string;
  operation?: string;
  result?: OperationResponse;
  error?: string;
  artifacts?: OperationJobArtifact[];
  created_at?: string;
  started_at?: string;
  done_at?: string;
  [key: string]: unknown;
}

export interface OperationBatchSubmitResponse {
  batch_id?: string;
  jobs?: Array<Record<string, unknown>>;
}

export interface ListOperationJobsParams {
  status?: string;
  search?: string;
  limit?: number;
  offset?: number;
}

export interface PipelineStep {
  operation: string;
  params?: Record<string, unknown>;
}

export interface AdhocPipelineRequest {
  input?: string;
  input_geojson?: unknown;
  steps: PipelineStep[];
  register?: boolean;
  output_name?: string;
}

export interface SavedPipeline {
  id: string;
  name: string;
  description?: string;
  graph?: unknown;
  canvas?: unknown;
  version?: number;
  is_template?: boolean;
  template_category?: string;
  tenant_id?: number;
  created_at?: string;
  updated_at?: string;
  [key: string]: unknown;
}

export interface SavedPipelineCreateRequest {
  name: string;
  description?: string;
  graph?: unknown;
  canvas?: unknown;
}

export interface SavedPipelineUpdateRequest extends SavedPipelineCreateRequest {
  version: number;
}

export interface PipelineExecutionResult {
  pipeline_id?: string;
  status?: string;
  node_count?: number;
  edge_count?: number;
  [key: string]: unknown;
}

export interface PipelineRun {
  id?: string;
  pipeline_id?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
  [key: string]: unknown;
}

export interface Project {
  id: number;
  name: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
  [key: string]: unknown;
}

export interface ProjectWorkspace {
  project_id: number;
  map_state: unknown;
  layer_styles: unknown;
}

export interface PublishMapRequest {
  title?: string;
  description?: string;
  map_state: unknown;
  expires_hours?: number;
  embed_config?: Record<string, unknown>;
}

export interface PublishMapResult {
  token: string;
  url?: string;
  embed_url?: string;
  title?: string;
  expires_at?: string | null;
  [key: string]: unknown;
}
