// Core client
export { RoteiroClient, RoteiroAPIError } from './client';

// Domain modules (namespace exports)
export * as analysis from './analysis';
export * as collections from './collections';
export * as layers from './layers';
export * as vcs from './vcs';
export * as attachments from './attachments';
export * as raster from './raster';
export * as indoor from './indoor';

// Pipeline builder
export { Pipeline } from './pipeline';
// Full generated API surface
export { RoteiroGeneratedApi } from './generated';

// All types
export type {
  // Client configuration
  ClientOptions,
  // Health
  HealthStatus,
  // Datasets
  Dataset,
  // Collections & Features
  Collection,
  Feature,
  FeatureCollection,
  GeoJSONGeometry,
  QueryParams,
  // Processing
  ConvertResult,
  DatasetBrief,
  ProcessResult,
  WarningSuggestion,
  ProcessParamKind,
  ProcessParamOption,
  ProcessingOperationParam,
  ProcessingOperation,
  ProcessingOperationsResponse,
  ProcessRequest,
  ProcessJobStatus,
  ProcessJobPhase,
  ProcessCancellationState,
  ProcessJobArtifact,
  ProcessJobRecord,
  ProcessPreflightResult,
  ProcessBatchJobRequest,
  ProcessBatchJobResult,
  ProcessBatchSubmitResponse,
  ListProcessJobsParams,
  DiffSummary,
  // VCS
  Repo,
  Commit,
  DiffResult,
  // Indoor GIS
  IndoorBuilding,
  IndoorFloor,
  IndoorSpace,
  IndoorTransition,
  IndoorAsset,
  IndoorModel,
  NavigationStep,
  NavigationResult,
  OccupancyData,
  // Hosted Layers
  HostedLayer,
  // Attachments
  Attachment,
  ElevationProfileResult,
  ElevationProfileSample,
  RasterBandValues,
  RasterBounds,
  RasterDimensions,
  RasterExportResult,
  RasterGridResult,
  RasterHistogram,
  RasterInfo,
  RasterKDERequest,
  RasterMosaicEntry,
  RasterMosaicInfo,
  RasterMosaicRequest,
  RasterProcessArrayResult,
  RasterProcessOutputResult,
  RasterProcessRequest,
  RasterProcessResult,
  RasterStats,
  // Raster
  ZonalStatsResult,
  // Analysis
  GeodesicAreaResult,
  GeodesicLengthResult,
  ClassifyResult,
  // Pipeline
  PipelineStep,
} from './types';
