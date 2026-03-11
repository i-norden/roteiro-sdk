# @roteiro/sdk

TypeScript client for the Simple GIS API. Zero dependencies, works in Node.js 18+ and modern browsers.

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
| `diff(params)` | `DiffSummary` | Dataset diff |

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

Pass to `process({ operation, ... })`:

- `buffer` - Buffer by distance
- `clip` - Clip to mask
- `simplify` - Simplify geometries
- `sjoin` - Spatial join
- `reproject` - Change CRS
- `centroid` - Compute centroids
- `convex_hull` - Convex hulls
- `spatial_stats` - Per-feature metrics
- `morans_i` - Spatial autocorrelation
- `hotspot` - Getis-Ord Gi* analysis
- `kernel_density` - KDE
- `validate` - Geometry validation

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
