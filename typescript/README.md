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

- `geodesic_buffer`, `buffer`, `clip`, `simplify`, `sjoin`, `reproject`
- `union`, `intersect`, `difference`, `dissolve`, `merge`
- `voronoi`, `delaunay`, `minimum_bounding_geometry`, `fishnet`, `tile_extract`
- `centroid`, `convex_hull`, `multipart_to_singlepart`, `singlepart_to_multipart`
- `feature_to_point`, `feature_to_line`, `points_to_line`, `points_to_polygon`
- `vertices_to_points`, `add_xy_coordinates`, `spatial_stats`
- `add_field`, `calculate_field`, `delete_field`, `rename_field`
- `morans_i`, `hotspot`, `kernel_density`, `summary_statistics`, `frequency`
- `interpolate_idw`, `ordinary_kriging`, `rbf_interpolation`
- `validate`, `make_valid`, `validate_topology`, `crack_and_cluster`
- `buffer_with_options`, `append`, `simple_kriging`, `universal_kriging`
- `solve_vrp`, `p_median`, `mclp`

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
