# TypeScript SDK Guide

The TypeScript SDK exposes the Cairn/Roteiro API through the same three layers used by the Python SDK:

1. `RoteiroClient` for the handwritten, high-traffic workflows.
2. Domain namespaces such as `analysis`, `attachments`, `collections`, `indoor`, `layers`, `raster`, and `vcs`.
3. `RoteiroGeneratedApi` for full parity with the server OpenAPI spec and the generated operation map in [`generated-operations.md`](./generated-operations.md).

## SDK Shape

| Layer | Export | Use it for |
|------|--------|------------|
| Handwritten client | `RoteiroClient` | Health, datasets, collections, processing jobs, uploads, raster workflow helpers, and tile URL helpers |
| Domain helpers | `analysis`, `collections`, `attachments`, `layers`, `vcs`, `raster`, `indoor`, `Pipeline` | Focused helpers grouped by domain; these are namespace exports, not instance methods on `RoteiroClient` |
| Full API coverage | `RoteiroGeneratedApi` | Endpoints that are only available in the generated OpenAPI client |

## Installation

```bash
npm install @roteiro/sdk
```

From source:

```bash
cd typescript
npm ci
npm run build
```

## Naming Convention

The TypeScript SDK uses `camelCase` for methods and options:

- `listDatasets`
- `queryFeatures`
- `autoGetApiDocsPublicManifest`

## Create a Client

```typescript
import { RoteiroClient } from '@roteiro/sdk';

const client = new RoteiroClient({
  baseUrl: 'http://localhost:8080',
  apiKey: 'sk_your_api_key_here',
  projectId: 42,
  timeout: 30_000,
  maxRetries: 3,
  backoffFactor: 500,
});
```

`baseUrl` should be the server origin, not `/api`.

Set `projectId` when you want the client to scope requests to a workspace project. The handwritten and generated clients will send `X-Project-ID` automatically, and tile URL helpers append `project_id` for you.

### Client options

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `baseUrl` | `string` | Server origin | required |
| `apiKey` | `string` | Sent as `X-API-Key` | `undefined` |
| `projectId` | `number` | Sent as `X-Project-ID`; also used in tile URL helpers and default request bodies that accept `project_id` | `undefined` |
| `timeout` | `number` | Request timeout in milliseconds | `30000` |
| `maxRetries` | `number` | Retries for `429`, `502`, `503`, `504`, and transport failures | `3` |
| `backoffFactor` | `number` | Exponential backoff base in milliseconds | `500` |
| `fetch` | `typeof fetch` | Custom fetch implementation | `globalThis.fetch` |

## Core Client Surface

`RoteiroClient` covers the main handwritten SDK surface:

| Area | Methods |
|------|---------|
| Health and datasets | `health`, `listDatasets`, `registerDataset`, `deleteDataset`, `upload` |
| Collections and features | `listCollections`, `getCollection`, `getItems`, `queryFeatures`, `getItem`, `getFeature`, `createItem`, `createFeature`, `updateItem`, `updateFeature`, `deleteItem`, `deleteFeature` |
| Processing | `convert`, `process`, `diff`, `listOperations`, `preflightProcess`, `submitProcessJob`, `submitProcessBatch`, `listProcessJobs`, `getProcessJob`, `cancelProcessJob`, `rerunProcessJob` |
| Raster workflow helpers | `rasterProcess`, `rasterMosaic`, `getRasterMosaicInfo` |
| Tile URL helpers | `vectorTilesUrl`, `rasterTilesUrl`, `pmtilesUrl` |

### Common workflow

```typescript
const health = await client.health();

const datasets = await client.listDatasets();

const parcels = await client.registerDataset({
  name: 'parcels',
  path: '/data/parcels.geojson',
  format: 'geojson',
  crs: 'EPSG:4326',
});

const uploaded = await client.upload(
  new Blob(['{"type":"FeatureCollection","features":[]}'], {
    type: 'application/geo+json',
  }),
  'empty.geojson',
  'empty',
);

const buildings = await client.queryFeatures('buildings', {
  bbox: '-74.01,40.70,-73.97,40.73',
  bboxCRS: 'EPSG:4326',
  crs: 'EPSG:3857',
  filter: 'height > 100',
  limit: 50,
});

const created = await client.createFeature('buildings', {
  type: 'Feature',
  geometry: { type: 'Point', coordinates: [-73.985, 40.748] },
  properties: { name: 'New Building' },
});

const preflight = await client.preflightProcess({
  operation: 'clip',
  input: 'buildings',
  params: { mask: 'study_area' },
});

if (preflight.valid) {
  const job = await client.submitProcessJob({
    operation: 'clip',
    input: 'buildings',
    params: { mask: 'study_area' },
    output_name: 'buildings_clipped',
  });
  console.log(job.id);
}
```

### Processing request shape

The handwritten client uses object-based processing calls:

```typescript
const result = await client.process({
  operation: 'buffer',
  input: 'buildings',
  params: { distance: 100 },
  output_format: 'geojson',
});
```

Fetch the live catalog from the server for currently enabled operations and formats:

```typescript
const catalog = await client.listOperations();
console.log(catalog.operations.map((op) => op.name));
```

## Domain Helpers

Domain helpers are namespace exports, not `RoteiroClient` instance methods.

```typescript
import {
  analysis,
  attachments,
  collections,
  indoor,
  layers,
  raster,
  vcs,
} from '@roteiro/sdk';
```

| Namespace | Key helpers |
|-----------|-------------|
| `analysis` | `geodesicArea`, `geodesicLength`, `classifyKMeans`, `classifyIsodata`, `classifyML`, `classifyRF` |
| `collections` | `listCollections`, `getCollection`, `getItems`, `getItem`, `createItem`, `updateItem`, `deleteItem` |
| `attachments` | `uploadAttachment`, `listAttachments`, `downloadAttachment`, `deleteAttachment` |
| `layers` | `uploadLayer`, `listLayers`, `getLayer`, `updateLayer`, `publishLayer`, `archiveLayer`, `uploadLayerData`, `deleteLayer`, `previewLayer` |
| `vcs` | `initRepo`, `commit`, `log`, `diff`, `checkout` |
| `raster` | `getRasterInfo`, `getRasterStats`, `getRasterHistogram`, `getRasterDimensions`, `getRasterBandValues`, `bandMath`, `ndvi`, `hillshade`, `zonalStats`, `exportRaster`, `contour`, `viewshed`, `elevationProfile`, `kde`, `process`, `mosaic`, `getMosaicInfo` |
| `indoor` | `listBuildings`, `getBuilding`, `createBuilding`, `updateBuilding`, `deleteBuilding`, `listFloors`, `createFloor`, `listSpaces`, `createSpace`, `getSpace`, `listAssets`, `createAsset`, `findPath`, `parseIndoorGml`, `importIfc`, `importIndoorFile`, `importImdf`, `getOccupancy`, `getEvacuationRoutes` |

### Example: analysis helpers

```typescript
import { analysis } from '@roteiro/sdk';

const area = await analysis.geodesicArea(client, {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-73.99, 40.75],
          [-73.98, 40.75],
          [-73.98, 40.76],
          [-73.99, 40.76],
          [-73.99, 40.75],
        ]],
      },
      properties: {},
    },
  ],
});

const classified = await analysis.classifyKMeans(client, {
  bands: { nir: [0.9, 0.7], red: [0.3, 0.2] },
  config: { k: 2 },
});
```

### Example: raster helpers

```typescript
import { raster } from '@roteiro/sdk';

const info = await raster.getRasterInfo(client, 'dem');
const stats = await raster.getRasterStats(client, 'dem', 0);
const ndvi = await raster.ndvi(client, 'landsat_scene', 4, 3);
const contours = await raster.contour(client, 'dem', { interval: 5 });
```

### Example: indoor helpers

```typescript
import { indoor } from '@roteiro/sdk';

const buildings = await indoor.listBuildings(client);

const route = await indoor.findPath(
  client,
  'hq',
  'lobby',
  'room-201',
  true,
);
```

## Pipeline Builder

Use `Pipeline` when you want a compact, fluent wrapper around repeated `/api/process` calls:

```typescript
import { Pipeline } from '@roteiro/sdk';

const result = await new Pipeline(client)
  .buffer(100)
  .simplify(10)
  .reproject('EPSG:4326', 'EPSG:3857')
  .execute('buildings');
```

Supported fluent helpers are:

- `buffer`
- `clip`
- `simplify`
- `union`
- `intersect`
- `sjoin`
- `reproject`
- `centroid`
- `convexHull`
- `aggregate`
- `spatialStats`
- `interpolate`

## Full OpenAPI Coverage

Use `RoteiroGeneratedApi` when you need endpoints that are not wrapped by the handwritten client or domain helpers, such as preferences, saved queries, project workspace endpoints, or newer API surfaces that have not been elevated into handwritten helpers yet.

```typescript
import { RoteiroClient, RoteiroGeneratedApi } from '@roteiro/sdk';

const client = new RoteiroClient({ baseUrl: 'http://localhost:8080' });
const api = new RoteiroGeneratedApi(client);

const docsManifest = await api.autoGetApiDocsPublicManifest();
const publicMap = await api.getpublicmap({ token: 'share-token' });
```

Generated method names are intentionally mechanical. Use [`generated-operations.md`](./generated-operations.md) to map HTTP routes to TypeScript and Python method names.

## Error Handling

The handwritten client throws `RoteiroAPIError` for non-success HTTP responses:

```typescript
import { RoteiroAPIError } from '@roteiro/sdk';

try {
  await client.getCollection('missing');
} catch (error) {
  if (error instanceof RoteiroAPIError) {
    console.error(error.statusCode, error.message);
  }
}
```

## Exported Types

All handwritten client types are exported from `@roteiro/sdk`.

```typescript
import type {
  ClassifyResult,
  Collection,
  Dataset,
  Feature,
  FeatureCollection,
  GeodesicAreaResult,
  GeodesicLengthResult,
  ProcessJobRecord,
  ProcessPreflightResult,
  ProcessResult,
  QueryParams,
  RasterInfo,
} from '@roteiro/sdk';
```

## Where to Look Next

- [`generated-operations.md`](./generated-operations.md) for the TypeScript-to-Python generated method map
- [`../typescript/examples/quickstart.ts`](../typescript/examples/quickstart.ts) for an executable end-to-end example
