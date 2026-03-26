// ---------------------------------------------------------------------------
// Client configuration
// ---------------------------------------------------------------------------

/** Client configuration options. */
export interface ClientOptions {
  /** Base URL of the Roteiro server (e.g. "http://localhost:8080"). */
  baseUrl: string;
  /** Optional API key for authentication. */
  apiKey?: string;
  /** Optional project scope applied as `X-Project-ID` and tile/query helpers. */
  projectId?: number;
  /** Request timeout in milliseconds (default: 30000). */
  timeout?: number;
  /** Maximum number of retry attempts for transient errors (default: 3). */
  maxRetries?: number;
  /** Back-off multiplier in ms between retries (default: 500). */
  backoffFactor?: number;
  /** Custom fetch implementation (for Node.js < 18). */
  fetch?: typeof globalThis.fetch;
}

// ---------------------------------------------------------------------------
// Health & Info
// ---------------------------------------------------------------------------

export interface HealthStatus {
  status: string;
  version?: string;
  uptime?: number;
  uptime_seconds?: number;
  database?: { status: string; latency_ms?: number };
  storage?: { status: string };
  engine?: { status: string };
  metrics?: {
    active_connections: number;
    datasets_registered: number;
    total_requests: number;
  };
}

// ---------------------------------------------------------------------------
// Datasets
// ---------------------------------------------------------------------------

export interface Dataset {
  name: string;
  path: string;
  format: string;
  crs: string;
  status?: string;
  feature_count?: number;
  bounds?: [number, number, number, number];
  description?: string;
}

// ---------------------------------------------------------------------------
// Collections & Features (OGC API)
// ---------------------------------------------------------------------------

export interface Link {
  href: string;
  rel: string;
  type?: string;
  title?: string;
}

export interface Collection {
  id: string;
  name: string;
  path: string;
  format: string;
  crs: string;
  storage_type?: string;
  feature_count?: number;
  geometryType?: string;
  title?: string;
  description?: string;
  extent?: {
    spatial?: { bbox?: number[][]; crs?: string };
  };
  links?: Link[];
}

export interface GeoJSONGeometry {
  type: string;
  coordinates: unknown;
}

export interface Feature {
  type: 'Feature';
  id?: string | number;
  geometry: GeoJSONGeometry;
  properties: Record<string, unknown>;
}

export interface FeatureCollection {
  type: 'FeatureCollection';
  features: Feature[];
  numberMatched?: number;
  numberReturned?: number;
  links?: Link[];
}

export interface QueryParams {
  bbox?: string;
  bboxCRS?: string;
  crs?: string;
  limit?: number;
  filter?: string;
  datetime?: string;
  offset?: number;
}

// ---------------------------------------------------------------------------
// Processing
// ---------------------------------------------------------------------------

export interface ConvertResult {
  message: string;
  duration_ms: number;
  dataset?: Dataset;
}

export interface DatasetBrief {
  name: string;
  path: string;
  format: string;
}

export interface WarningSuggestion {
  label: string;
  operation: string;
  description: string;
}

export interface ProcessResult {
  operation: string;
  input_features: number;
  output_features: number;
  duration_ms: number;
  warning?: string;
  suggestions?: WarningSuggestion[];
  dataset?: DatasetBrief;
}

export type ProcessParamKind =
  | 'string'
  | 'number'
  | 'integer'
  | 'boolean'
  | 'dataset'
  | 'dataset_list'
  | 'crs'
  | 'enum'
  | 'string_list'
  | 'number_list'
  | 'distance_metric'
  | 'distance_crs'
  | 'json';

export interface ProcessParamOption {
  value: string;
  label: string;
}

export interface ProcessingOperationParam {
  name: string;
  label?: string;
  description?: string;
  kind: ProcessParamKind;
  required?: boolean;
  default?: unknown;
  options?: ProcessParamOption[];
}

export interface ProcessingOperation {
  name: string;
  description: string;
  label?: string;
  category?: string;
  advanced?: boolean;
  ui_available?: boolean;
  requires_projected_crs?: boolean;
  params: Array<string | ProcessingOperationParam>;
}

export interface ProcessingOperationsResponse {
  operations: ProcessingOperation[];
  formats: string[];
}

export interface ProcessRequest {
  operation: string;
  input?: string;
  input_geojson?: unknown;
  params?: Record<string, unknown>;
  output_format?: string;
  register?: boolean;
  output_name?: string;
  project_id?: number;
}

export type ProcessJobStatus =
  | 'queued'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'cancelled';

export type ProcessJobPhase =
  | 'queued'
  | 'validating'
  | 'executing'
  | 'registering'
  | 'done';

export type ProcessCancellationState = 'none' | 'requested' | 'confirmed';

export interface ProcessJobArtifact {
  format: string;
  url: string;
  label?: string;
}

export interface ProcessJobRecord {
  id: string;
  type: string;
  status: ProcessJobStatus;
  progress: number;
  phase?: ProcessJobPhase;
  operation?: string;
  tenant_id?: number;
  dependencies?: string[];
  cancellation_requested?: boolean;
  cancellation_state?: ProcessCancellationState;
  result?: ProcessResult;
  error?: string;
  failure_class?: string;
  artifacts?: ProcessJobArtifact[];
  submitted_by?: number;
  created_at: string;
  started_at?: string;
  done_at?: string;
  queue_ms?: number;
  run_ms?: number;
}

export interface ProcessPreflightResult {
  valid: boolean;
  errors?: string[];
  warnings?: string[];
  input_crs?: string;
  resolved_params?: Record<string, unknown>;
  recommend_async?: boolean;
}

export interface ProcessBatchJobRequest {
  client_id?: string;
  request: ProcessRequest;
  depends_on?: string[];
}

export interface ProcessBatchJobResult {
  client_id: string;
  job: ProcessJobRecord;
}

export interface ProcessBatchSubmitResponse {
  batch_id: string;
  jobs: ProcessBatchJobResult[];
}

export interface ListProcessJobsParams {
  status?: ProcessJobStatus;
  search?: string;
  limit?: number;
  offset?: number;
}

export interface DiffSummary {
  added: number;
  removed: number;
  modified: number;
  unchanged: number;
  duration_ms: number;
}

// ---------------------------------------------------------------------------
// VCS (Version Control)
// ---------------------------------------------------------------------------

export interface Repo {
  id: string;
  name: string;
  tenant_id: number;
  project_id?: number | null;
  dataset_name?: string | null;
  created_by?: number | null;
  created_at: string;
  path?: string;
  status?: string;
}

export interface Commit {
  id: string;
  message: string;
  timestamp: string;
  parent?: string;
  blob_id?: string;
  blob_hash?: string;
  feature_count?: number;
}

export interface DiffResult {
  added: Record<string, unknown>[];
  removed: Record<string, unknown>[];
  modified: Record<string, unknown>[];
  stats?: {
    added: number;
    removed: number;
    modified: number;
    unchanged: number;
  };
}

// ---------------------------------------------------------------------------
// Hosted Layers
// ---------------------------------------------------------------------------

export interface HostedLayer {
  id: string;
  name: string;
  description?: string;
  owner_id?: number;
  status?: string;
  source_format?: string;
  source_path?: string;
  published_path?: string;
  feature_count?: number;
  bbox?: [number, number, number, number];
  crs?: string;
  properties?: Record<string, unknown>;
  style?: Record<string, unknown>;
  tags?: string[];
  created_at?: string;
  updated_at?: string;
  published_at?: string;
  error_message?: string;
  format?: string;
  path?: string;
  bounds?: [number, number, number, number];
}

// ---------------------------------------------------------------------------
// Attachments
// ---------------------------------------------------------------------------

export interface Attachment {
  id: string;
  collection_id?: string;
  feature_id?: string;
  filename: string;
  content_type: string;
  size?: number;
  size_bytes?: number;
  description?: string;
  metadata?: Record<string, unknown>;
  uploaded_by?: number;
  created_at?: string;
  download_url?: string;
  thumbnail_url?: string;
}

// ---------------------------------------------------------------------------
// Raster Analysis
// ---------------------------------------------------------------------------

export interface ZonalStatsResult {
  zones: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface RasterBounds {
  min_x: number;
  min_y: number;
  max_x: number;
  max_y: number;
}

export interface RasterInfo {
  width: number;
  height: number;
  num_bands: number;
  crs?: string;
  bounds?: RasterBounds;
}

export interface RasterStats {
  min: number;
  max: number;
  mean: number;
  stddev: number;
}

export interface RasterHistogram {
  band: number;
  sample_count: number;
  min: number;
  max: number;
  mean: number;
  stddev: number;
  p1: number;
  p2: number;
  p98: number;
  p99: number;
  histogram: number[];
}

export interface RasterDimensions {
  temporal: boolean;
  times?: string[];
  min_band: number;
  max_band: number;
}

export interface RasterBandValues {
  dem: number[][];
  cell_size: number;
  width: number;
  height: number;
  bounds?: [number, number, number, number];
}

export interface RasterExportResult {
  message: string;
}

export interface RasterProcessRequest {
  operation: string;
  input_path?: string;
  output_path?: string;
  band?: number;
  params?: Record<string, unknown>;
}

export interface RasterProcessArrayResult {
  width: number;
  height: number;
  data: number[];
}

export interface RasterProcessOutputResult {
  status: string;
  output_path: string;
}

export type RasterProcessResult =
  | RasterProcessArrayResult
  | RasterProcessOutputResult
  | Record<string, unknown>;

export interface RasterMosaicRequest {
  names: string[];
  band?: number;
  operation?: 'first' | 'last' | 'mean' | 'max' | 'min';
  colormap?: string;
}

export interface RasterMosaicEntry {
  name: string;
  width: number;
  height: number;
  num_bands: number;
  crs?: string;
  bounds?: RasterBounds;
}

export interface RasterMosaicInfo {
  rasters: RasterMosaicEntry[];
  combined_bounds?: RasterBounds;
  count: number;
}

export interface RasterGridResult {
  width: number;
  height: number;
  data: number[];
}

export interface ElevationProfileSample {
  distance: number;
  elevation: number;
  x: number;
  y: number;
}

export interface ElevationProfileResult {
  samples: ElevationProfileSample[];
}

export interface RasterKDERequest {
  dataset: string;
  bandwidth?: number;
  kernel?: string;
  bounds?: [number, number, number, number];
  resolution?: [number, number];
}

// ---------------------------------------------------------------------------
// Analysis (Geodesic & Classification)
// ---------------------------------------------------------------------------

export interface GeodesicAreaResult {
  index: number;
  area_sq_m: number;
}

export interface GeodesicLengthResult {
  index: number;
  length_m: number;
}

export interface ClassifyResult {
  labels: number[];
  width: number;
  height: number;
  confidence?: number[];
}

// ---------------------------------------------------------------------------
// Pipeline
// ---------------------------------------------------------------------------

/** A single step in a processing pipeline. */
export interface PipelineStep {
  operation: string;
  params: Record<string, unknown>;
}

/** A persisted pipeline definition from the visual pipeline builder. */
export interface SavedPipeline {
  id: string;
  name: string;
  description: string;
  graph: unknown;
  canvas: unknown;
  version: number;
  is_template: boolean;
  template_category?: string | null;
  tenant_id: number;
  created_by?: number | null;
  updated_by?: number | null;
  created_at: string;
  updated_at: string;
}

/** Request body for creating a persisted pipeline. */
export interface SavedPipelineCreateRequest {
  name: string;
  description?: string;
  graph?: unknown;
  canvas?: unknown;
}

/** Request body for updating a persisted pipeline. */
export interface SavedPipelineUpdateRequest extends SavedPipelineCreateRequest {
  version: number;
}

/** Result returned when submitting a saved pipeline for execution. */
export interface SavedPipelineExecutionResult {
  pipeline_id: string;
  status: string;
  node_count: number;
  edge_count: number;
}
