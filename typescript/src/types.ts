// ---------------------------------------------------------------------------
// Client configuration
// ---------------------------------------------------------------------------

/** Client configuration options. */
export interface ClientOptions {
  /** Base URL of the Roteiro server (e.g. "http://localhost:8080"). */
  baseUrl: string;
  /** Optional API key for authentication. */
  apiKey?: string;
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
  feature_count?: number;
  bounds?: [number, number, number, number];
}

// ---------------------------------------------------------------------------
// Collections & Features (OGC API)
// ---------------------------------------------------------------------------

export interface Collection {
  id: string;
  name: string;
  path: string;
  format: string;
  crs: string;
  title?: string;
  description?: string;
  extent?: {
    spatial?: { bbox?: number[][] };
  };
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
}

export interface QueryParams {
  bbox?: string;
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

export interface ProcessResult {
  operation: string;
  input_features: number;
  output_features: number;
  duration_ms: number;
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
  path: string;
  status: string;
}

export interface Commit {
  id: string;
  message: string;
  timestamp: string;
  parent?: string;
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
// Indoor GIS
// ---------------------------------------------------------------------------

export interface IndoorBuilding {
  id: string;
  name: string;
  address?: string;
  metadata?: Record<string, string>;
  bounds?: unknown;
  created_at: string;
  updated_at: string;
  floors?: IndoorFloor[];
  transitions?: IndoorTransition[];
}

export interface IndoorFloor {
  id: string;
  building_id: string;
  name: string;
  level: number;
  elevation: number;
  height: number;
  outline?: unknown;
  created_at: string;
}

export interface IndoorSpace {
  id: string;
  floor_id: string;
  building_id: string;
  name: string;
  space_type: string;
  geometry?: unknown;
  navigable: boolean;
  capacity?: number;
  area?: number;
  properties?: Record<string, unknown>;
  connections?: string[];
}

export interface IndoorTransition {
  id: string;
  building_id: string;
  name: string;
  transition_type: string;
  connects_floors: number[];
  accessible: boolean;
  bidirectional: boolean;
  space_ids?: string[];
}

export interface IndoorAsset {
  id: string;
  building_id: string;
  name: string;
  floor_id: string;
  space_id: string;
  asset_type?: string;
  position?: unknown;
  properties?: Record<string, unknown>;
}

export interface NavigationStep {
  spaceId: string;
  spaceName: string;
  floorLevel: number;
  instruction: string;
  distance: number;
  traversalType: string;
}

export interface NavigationResult {
  path: NavigationStep[];
  totalDistance: number;
  floorChanges: number;
  estimatedTimeSeconds: number;
}

export interface IndoorModel {
  /** The parsed building. */
  building: IndoorBuilding;
  /** Source format (ifc, indoorgml). */
  source_format?: string;
}

export interface OccupancyData {
  building_id: string;
  floors: Record<string, unknown>[];
  [key: string]: unknown;
}

// ---------------------------------------------------------------------------
// Hosted Layers
// ---------------------------------------------------------------------------

export interface HostedLayer {
  id: string;
  name: string;
  description?: string;
  format?: string;
  status?: string;
  path?: string;
  feature_count?: number;
  bounds?: [number, number, number, number];
  created_at?: string;
  updated_at?: string;
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
  size: number;
  created_at?: string;
}

// ---------------------------------------------------------------------------
// Raster Analysis
// ---------------------------------------------------------------------------

export interface ZonalStatsResult {
  zones: Record<string, unknown>[];
  [key: string]: unknown;
}

// ---------------------------------------------------------------------------
// Pipeline
// ---------------------------------------------------------------------------

/** A single step in a processing pipeline. */
export interface PipelineStep {
  operation: string;
  params: Record<string, unknown>;
}
