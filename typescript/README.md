# @roteiro/sdk

TypeScript client for the Roteiro GIS API. Zero dependencies, works in Node.js 18+ and modern browsers.

## Install

```bash
npm install @roteiro/sdk
```

Or from source:

```bash
cd typescript
npm install && npm run build
```

## Quickstart

```typescript
import { RoteiroClient } from '@roteiro/sdk';

const client = new RoteiroClient({
  baseUrl: 'http://localhost:8080',
  apiKey: 'your-key',
});

// Health check
const health = await client.health();
console.log(health.status);

// List collections
const collections = await client.listCollections();

// Query features with bbox
const fc = await client.queryFeatures('buildings', {
  bbox: '-74.0,40.7,-73.9,40.8',
  limit: 50,
});
console.log(`Got ${fc.features.length} features`);

// Create a feature
await client.createFeature('buildings', {
  type: 'Feature',
  geometry: { type: 'Point', coordinates: [-73.985, 40.748] },
  properties: { name: 'Empire State Building' },
});
```

## API Reference

### `new RoteiroClient(options)`

| Option | Type | Description |
|--------|------|-------------|
| `baseUrl` | `string` | Server URL |
| `apiKey` | `string?` | Optional API key |
| `timeout` | `number?` | Timeout in ms (default 30000) |
| `fetch` | `typeof fetch?` | Custom fetch implementation |

### Dataset Management

| Method | Returns | Description |
|--------|---------|-------------|
| `health()` | `HealthStatus` | Server health check |
| `listDatasets()` | `Dataset[]` | List datasets |
| `registerDataset(dataset)` | `Dataset` | Register dataset |
| `deleteDataset(name)` | `void` | Delete dataset |

### OGC Features

| Method | Returns | Description |
|--------|---------|-------------|
| `listCollections()` | `Collection[]` | List feature collections |
| `getCollection(id)` | `Collection` | Get collection metadata |
| `queryFeatures(id, params?)` | `FeatureCollection` | Query with bbox/filter/limit/offset |
| `getFeature(collectionId, fid)` | `Feature` | Get single feature |
| `createFeature(collectionId, feature)` | `Feature` | Create feature |
| `updateFeature(collectionId, fid, feature)` | `Feature` | Update feature |

### Processing

| Method | Returns | Description |
|--------|---------|-------------|
| `convert(params)` | `ConvertResult` | Format conversion |
| `process(params)` | `ProcessResult` | Spatial operations |
| `preflightProcess(params)` | `ProcessPreflightResult` | Validate/normalize a processing request |
| `submitProcessJob(params)` | `ProcessJobRecord` | Queue an async processing job |
| `listProcessJobs(params?)` | `ProcessJobRecord[]` | List async processing jobs |
| `getProcessJob(id)` | `ProcessJobRecord` | Fetch async processing job state |
| `cancelProcessJob(id)` | `void` | Cancel an async processing job |
| `rerunProcessJob(id)` | `ProcessJobRecord` | Re-submit a previous async job |
| `submitProcessBatch({ jobs })` | `ProcessBatchSubmitResponse` | Queue a dependent batch of async jobs |
| `diff(params)` | `DiffSummary` | Dataset diff |
| `listOperations()` | `{ operations, formats }` | Server-supported processing operations |
| `rasterProcess(params)` | `RasterProcessResult` | Generic `/api/raster/process` execution |
| `rasterMosaic(params)` | `Blob` | Render a PNG mosaic from registered rasters |
| `getRasterMosaicInfo(names)` | `RasterMosaicInfo` | Combined metadata for raster mosaics |

### Raster Helpers

Import the `raster` namespace for per-dataset raster endpoints and generic raster workflows:

```typescript
import { raster } from '@roteiro/sdk';
```

Available helpers include:

- `raster.getRasterInfo`, `raster.getRasterStats`, `raster.getRasterHistogram`
- `raster.getRasterDimensions`, `raster.getRasterBandValues`
- `raster.hillshade`, `raster.ndvi`, `raster.bandMath`
- `raster.zonalStats`, `raster.exportRaster`, `raster.contour`, `raster.viewshed`, `raster.elevationProfile`, `raster.kde`
- `raster.process`, `raster.mosaic`, `raster.getMosaicInfo`

### Indoor GIS

| Method | Returns | Description |
|--------|---------|-------------|
| `listBuildings()` | `IndoorBuilding[]` | List buildings |
| `getBuilding(id)` | `IndoorBuilding` | Get building details |
| `createBuilding(data)` | `IndoorBuilding` | Create building |
| `deleteBuilding(id)` | `void` | Delete building |
| `listFloors(buildingId)` | `IndoorFloor[]` | List floors |
| `listSpaces(buildingId, level)` | `IndoorSpace[]` | List spaces |
| `navigate(params)` | `NavigationResult` | A* pathfinding |

## Types

All types are exported from `@roteiro/sdk`:

```typescript
import type {
  Collection,
  Feature,
  FeatureCollection,
  Dataset,
  IndoorBuilding,
  IndoorFloor,
  IndoorSpace,
  NavigationResult,
  QueryParams,
} from '@roteiro/sdk';
```

See `src/types.ts` for the complete type definitions.

## Supported Processing Operations

Use `await client.listOperations()` to fetch the live server catalog from `/api/operations`.

The catalog now includes rich metadata per operation, including category, UI availability, projected-CRS requirements, and typed parameter definitions.

Current operation names exposed by the server:

- Vector and overlay: `geodesic_buffer`, `buffer`, `buffer_with_options`, `clip`, `simplify`, `sjoin`, `reproject`, `union`, `intersect`, `difference`, `dissolve`, `merge`, `append`
- Geometry generation/conversion: `voronoi`, `delaunay`, `concave_hull`, `minimum_bounding_geometry`, `fishnet`, `tile_extract`, `centroid`, `convex_hull`, `multipart_to_singlepart`, `singlepart_to_multipart`, `feature_to_point`, `feature_to_line`, `points_to_line`, `points_to_polygon`, `vertices_to_points`, `add_xy_coordinates`
- Measurement and schema: `spatial_stats`, `add_field`, `calculate_field`, `delete_field`, `rename_field`
- Statistics and clustering: `morans_i`, `gearys_c`, `hotspot`, `local_morans_i`, `kernel_density`, `dbscan`, `st_dbscan`, `summary_statistics`, `frequency`
- Interpolation: `interpolate_idw`, `ordinary_kriging`, `simple_kriging`, `universal_kriging`, `rbf_interpolation`, `interpolate_tin`
- Topology and optimization: `validate`, `make_valid`, `validate_topology`, `crack_and_cluster`, `solve_vrp`, `p_median`, `mclp`

Raster processing is available through `client.rasterProcess(...)` and `raster.process(...)`.

Current raster operation families on the backend include:

- Terrain: `slope`, `aspect`, `profile_curvature`, `plan_curvature`, `general_curvature`
- Hydrology: `fill`, `flow_direction`, `flow_accumulation`, `watershed`, `stream_order`, `snap_pour_point`, `basin_labels`
- Distance/cost: `euclidean_distance`, `euclidean_allocation`, `euclidean_direction`, `cost_distance`, `cost_path`, `cost_allocation`
- Overlay and neighborhood: `weighted_sum`, `reclassify`, `extract_by_mask`, `focal_statistics`
- Spectral and change: `spectral_index`, `image_difference`, `normalized_difference_change`, `change_vector_analysis`
- Classification and conversion: `kmeans`, `isodata`, `maximum_likelihood`, `random_forest`, `raster_to_polygons`, `rasterize`

Dedicated JSON raster endpoints are also available for `contour`, `viewshed`, `profile`, and `kde`.

Async processing endpoints are also available from the main client for preflight validation and background job execution.

## Error Handling

API errors throw with the server's error message:

```typescript
try {
  await client.getCollection('nonexistent');
} catch (error) {
  console.error(error.message);
}
```

## Browser Usage

The client uses `globalThis.fetch` by default. For Node.js < 18, pass a fetch implementation:

```typescript
import fetch from 'node-fetch';

const client = new RoteiroClient({
  baseUrl: 'http://localhost:8080',
  fetch: fetch as any,
});
```

## Full API Coverage

For complete endpoint parity with the server OpenAPI, use `RoteiroGeneratedApi`:

```typescript
import { RoteiroClient, RoteiroGeneratedApi } from '@roteiro/sdk';

const client = new RoteiroClient({ baseUrl: 'http://localhost:8080' });
const api = new RoteiroGeneratedApi(client);

const health = await api.gethealth();
```
