# TypeScript SDK Guide

The Roteiro TypeScript SDK provides a typed client for interacting with the roteiro API from Node.js, Deno, Bun, or browser environments.

For full endpoint parity with server OpenAPI, use `RoteiroGeneratedApi` and the generated operation map in [`generated-operations.md`](./generated-operations.md).

## Installation

```bash
npm install @roteiro/sdk
```

Or install from source:

```bash
cd typescript
npm ci
npm run build
```

## Client Setup

```typescript
import { RoteiroClient } from '@roteiro/sdk';

const client = new RoteiroClient({
  baseUrl: 'http://localhost:8080',
  apiKey: 'sk_your_api_key_here',
  timeout: 30_000,  // optional, default 30 seconds
});
```

### Constructor options

| Option    | Type                   | Description                              | Default        |
|-----------|------------------------|------------------------------------------|----------------|
| `baseUrl` | `string`               | Base URL of the roteiro server             | required       |
| `apiKey`  | `string` (optional)    | API key for authentication               | `undefined`    |
| `timeout` | `number` (optional)    | Request timeout in milliseconds          | `30000`        |
| `fetch`   | `typeof fetch` (optional) | Custom fetch implementation (Node.js < 18) | `globalThis.fetch` |

### Authentication

The client sends the API key in the `X-API-Key` header with every request.

```typescript
// With API key
const client = new RoteiroClient({
  baseUrl: 'http://localhost:8080',
  apiKey: 'sk_abc123',
});

// Without auth (public endpoints only)
const publicClient = new RoteiroClient({
  baseUrl: 'http://localhost:8080',
});
```

## Health Check

```typescript
const health = await client.health();
console.log(health);
// { status: 'ok', uptime: 3600, version: '0.1.0', database: 'ok' }
```

## Datasets

### List datasets

```typescript
const datasets = await client.listDatasets();
for (const ds of datasets) {
  console.log(`${ds.name}: ${ds.format} (${ds.feature_count ?? 'N/A'} features)`);
}
```

### Register a dataset

```typescript
const ds = await client.registerDataset({
  name: 'parcels',
  path: '/data/parcels.geojson',
  format: 'geojson',
  crs: 'EPSG:4326',
});
```

### Delete a dataset

```typescript
await client.deleteDataset('parcels');
```

## Collections and Features

### List OGC collections

```typescript
const collections = await client.listCollections();
for (const col of collections) {
  console.log(`${col.id}: ${col.title ?? col.id}`);
}
```

### Get collection metadata

```typescript
const col = await client.getCollection('buildings');
console.log(`CRS: ${col.crs}`);
console.log(`Extent: ${JSON.stringify(col.extent)}`);
```

### Query features

```typescript
// Basic query
const result = await client.queryFeatures('buildings', { limit: 100 });
console.log(`Returned ${result.numberReturned} of ${result.numberMatched} features`);

// With bounding box
const bbox = await client.queryFeatures('buildings', {
  bbox: '-74.01,40.70,-73.97,40.73',
  limit: 50,
});

// With attribute filter
const filtered = await client.queryFeatures('buildings', {
  filter: "height > 100",
  limit: 20,
});

// Combined
const combined = await client.queryFeatures('buildings', {
  bbox: '-74.01,40.70,-73.97,40.73',
  filter: "type = 'commercial'",
  limit: 50,
});
```

### Get a single feature

```typescript
const feature = await client.getFeature('buildings', '42');
console.log(`Geometry: ${feature.geometry.type}`);
console.log(`Properties:`, feature.properties);
```

### Create a feature

```typescript
const created = await client.createFeature('buildings', {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-73.985, 40.748],
  },
  properties: {
    name: 'New Building',
    height: 50,
  },
});
```

### Update a feature

```typescript
const updated = await client.updateFeature('buildings', '42', {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-73.985, 40.749],
  },
  properties: {
    name: 'Updated Building',
    height: 55,
  },
});
```

## Processing

### Convert formats

```typescript
const result = await client.convert({
  input: 'buildings',
  output_format: 'parquet',
  output_name: 'buildings_parquet',
  register: true,
});
console.log(`Message: ${result.message}`);
console.log(`Duration: ${result.duration_ms}ms`);
```

### Run a processing operation

```typescript
// Buffer
const buffer = await client.process({
  operation: 'buffer',
  input: 'buildings',
  params: { distance: 100 },
});
console.log(`Input: ${buffer.input_features}, Output: ${buffer.output_features}`);

// Simplify
const simplified = await client.process({
  operation: 'simplify',
  input: 'parcels',
  params: { tolerance: 0.001 },
});

// Clip
const clipped = await client.process({
  operation: 'clip',
  input: 'buildings',
  params: { mask: 'study_area' },
});

// Spatial join
const joined = await client.process({
  operation: 'sjoin',
  input: 'points',
  params: {
    right: 'polygons',
    predicate: 'within',
  },
});

// Reproject
const reprojected = await client.process({
  operation: 'reproject',
  input: 'buildings',
  params: { from_crs: 'EPSG:4326', to_crs: 'EPSG:3857' },
});
```

### Validate before submitting an async job

```typescript
const preflight = await client.preflightProcess({
  operation: 'clip',
  input: 'buildings',
  params: { mask: 'study_area' },
});

if (!preflight.valid) {
  console.error(preflight.errors);
}

const job = await client.submitProcessJob({
  operation: 'clip',
  input: 'buildings',
  params: { mask: 'study_area' },
  output_name: 'buildings_clipped',
});

const queued = await client.getProcessJob(job.id);
console.log(queued.status, queued.phase);
```

### Compare datasets

```typescript
const diff = await client.diff({
  left: 'buildings',
  right: 'buildings_v2',
  match_field: 'id',
});
console.log(`Added: ${diff.added}`);
console.log(`Removed: ${diff.removed}`);
console.log(`Modified: ${diff.modified}`);
console.log(`Unchanged: ${diff.unchanged}`);
```

## Indoor GIS

### List buildings

```typescript
const buildings = await client.listBuildings();
for (const b of buildings) {
  console.log(`${b.id}: ${b.name}`);
}
```

### Get building details

```typescript
const building = await client.getBuilding('bldg-001');
console.log(`Floors: ${building.floors?.length ?? 0}`);
console.log(`Transitions: ${building.transitions?.length ?? 0}`);
```

### Create a building

```typescript
const building = await client.createBuilding({
  id: 'bldg-001',
  name: 'Main Office',
  address: '123 Main St',
  floors: [
    {
      id: 'floor-0',
      name: 'Ground Floor',
      level: 0,
      spaces: [
        {
          id: 'lobby',
          name: 'Main Lobby',
          space_type: 'lobby',
          navigable: true,
          connections: ['hallway-1'],
        },
      ],
    },
  ],
  transitions: [
    {
      id: 'elevator-1',
      name: 'Main Elevator',
      transition_type: 'elevator',
      connects_floors: [0, 1, 2],
      accessible: true,
      bidirectional: true,
    },
  ],
});
```

### Navigate between spaces

```typescript
const route = await client.navigate('bldg-001', 'lobby', 'room-201', true);
console.log(`Distance: ${route.totalDistance}m`);
console.log(`Floor changes: ${route.floorChanges}`);
console.log(`ETA: ${route.estimatedTimeSeconds}s`);
for (const step of route.path) {
  console.log(`  -> ${step.instruction} (${step.spaceName})`);
}
```

### List floors and spaces

```typescript
const floors = await client.listFloors('bldg-001');
const spaces = await client.listSpaces('bldg-001', 0);
```

### Delete a building

```typescript
await client.deleteBuilding('bldg-001');
```

## Tile URL Helpers

Generate tile URL templates for use with MapLibre GL JS, Leaflet, or OpenLayers:

```typescript
// Vector tiles (MVT)
const vtUrl = client.vectorTilesUrl('buildings');
// http://localhost:8080/tiles/buildings/{z}/{x}/{y}

// Raster tiles (PNG)
const rtUrl = client.rasterTilesUrl('elevation');
// http://localhost:8080/raster/elevation/tiles/{z}/{x}/{y}

// PMTiles
const pmUrl = client.pmtilesUrl('archive_name');
// http://localhost:8080/pmtiles/archive_name/{z}/{x}/{y}
```

### MapLibre GL JS integration

```typescript
import maplibregl from 'maplibre-gl';

const map = new maplibregl.Map({
  container: 'map',
  style: { version: 8, sources: {}, layers: [] },
  center: [-73.985, 40.748],
  zoom: 12,
});

map.on('load', () => {
  // Add vector tile source
  map.addSource('buildings', {
    type: 'vector',
    tiles: [client.vectorTilesUrl('buildings')],
  });

  map.addLayer({
    id: 'buildings-fill',
    type: 'fill',
    source: 'buildings',
    'source-layer': 'buildings',
    paint: {
      'fill-color': '#3b82f6',
      'fill-opacity': 0.6,
    },
  });
});
```

## Type Definitions

The SDK exports full TypeScript types for all request and response objects:

```typescript
import type {
  ClientOptions,
  Collection,
  ConvertResult,
  Dataset,
  DiffSummary,
  Feature,
  FeatureCollection,
  HealthStatus,
  IndoorBuilding,
  IndoorFloor,
  IndoorSpace,
  IndoorTransition,
  NavigationResult,
  NavigationStep,
  ProcessResult,
  QueryParams,
} from '@roteiro/sdk';
```

## Error Handling

All API errors throw a standard `Error` with the server's error message:

```typescript
try {
  await client.getCollection('nonexistent');
} catch (err) {
  console.error(`API error: ${(err as Error).message}`);
  // API error: collection not found
}
```

For timeouts, the error message will indicate an abort signal.

## Complete Example

```typescript
import { RoteiroClient } from '@roteiro/sdk';

async function main() {
  const client = new RoteiroClient({
    baseUrl: 'http://localhost:8080',
    apiKey: process.env.ROTEIRO_API_KEY,
  });

  // 1. Verify connection
  const health = await client.health();
  console.log(`Server: ${health.status}, DB: ${health.database}`);

  // 2. List datasets
  const datasets = await client.listDatasets();
  console.log(`Datasets: ${datasets.map(d => d.name).join(', ')}`);

  // 3. Query features
  const features = await client.queryFeatures('buildings', {
    bbox: '-74.01,40.70,-73.97,40.73',
    filter: 'height > 50',
    limit: 10,
  });
  console.log(`Found ${features.numberMatched} tall buildings`);

  // 4. Run geoprocessing
  const buffered = await client.process({
    operation: 'buffer',
    input: 'buildings',
    params: { distance: 100 },
  });
  console.log(`Buffered ${buffered.input_features} -> ${buffered.output_features}`);

  // 5. Compare versions
  const diff = await client.diff({
    left: 'buildings',
    right: 'buildings_v2',
    match_field: 'id',
  });
  console.log(`Changes: +${diff.added} -${diff.removed} ~${diff.modified}`);
}

main().catch(console.error);
```
