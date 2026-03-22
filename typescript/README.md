# @roteiro/sdk

TypeScript SDK for the Roteiro API. It mirrors the Python SDK in structure: a handwritten client for common workflows, domain namespaces for focused helpers, and a generated client for full OpenAPI coverage.

Full guide: [`../docs/typescript.md`](../docs/typescript.md)

Set `projectId` on `RoteiroClient` when you want requests and tile helpers scoped to a specific Roteiro project.

## Install

```bash
npm install @roteiro/sdk
```

## Naming Convention

The TypeScript SDK uses `camelCase` names such as `listDatasets`, `queryFeatures`, and `autoGetApiDocsPublicManifest`.

## Quick Start

```typescript
import { RoteiroClient, analysis, raster } from '@roteiro/sdk';

const client = new RoteiroClient({
  baseUrl: 'http://localhost:8080',
  apiKey: 'your-key',
  projectId: 42,
});

const health = await client.health();
const collections = await client.listCollections();

const features = await client.queryFeatures('buildings', {
  bbox: '-74.0,40.7,-73.9,40.8',
  bboxCRS: 'EPSG:4326',
  crs: 'EPSG:3857',
  limit: 50,
});

const areas = await analysis.geodesicArea(client, {
  type: 'FeatureCollection',
  features: [],
});

const hillshade = await raster.hillshade(client, 'dem');
console.log(health.status, collections.length, features.features.length, areas.length, hillshade.size);
```

## SDK Shape

| Layer | Export | Notes |
|------|--------|-------|
| Handwritten client | `RoteiroClient` | Health, datasets, collections, processing jobs, uploads, raster workflow helpers, and tile URL helpers |
| Domain helpers | `analysis`, `collections`, `attachments`, `layers`, `vcs`, `raster`, `Pipeline` | Namespace exports, not instance methods on `RoteiroClient` |
| Full API coverage | `RoteiroGeneratedApi` | Generated from the server OpenAPI spec |

## Core Client Surface

| Area | Methods |
|------|---------|
| Health and datasets | `health`, `listDatasets`, `registerDataset`, `deleteDataset`, `upload` |
| Collections and features | `listCollections`, `getCollection`, `getItems`, `queryFeatures`, `getItem`, `getFeature`, `createItem`, `createFeature`, `updateItem`, `updateFeature`, `deleteItem`, `deleteFeature` |
| Processing | `convert`, `process`, `diff`, `listOperations`, `preflightProcess`, `submitProcessJob`, `submitProcessBatch`, `listProcessJobs`, `getProcessJob`, `cancelProcessJob`, `rerunProcessJob` |
| Raster workflow helpers | `rasterProcess`, `rasterMosaic`, `getRasterMosaicInfo` |
| Tile URL helpers | `vectorTilesUrl`, `rasterTilesUrl`, `pmtilesUrl` |

## Domain Helpers

| Namespace | Key helpers |
|-----------|-------------|
| `analysis` | `geodesicArea`, `geodesicLength`, `classifyKMeans`, `classifyIsodata`, `classifyML`, `classifyRF` |
| `collections` | `listCollections`, `getCollection`, `getItems`, `getItem`, `createItem`, `updateItem`, `deleteItem` |
| `attachments` | `uploadAttachment`, `listAttachments`, `downloadAttachment`, `deleteAttachment` |
| `layers` | `uploadLayer`, `listLayers`, `getLayer`, `updateLayer`, `publishLayer`, `archiveLayer`, `uploadLayerData`, `deleteLayer`, `previewLayer` |
| `vcs` | `initRepo`, `commit`, `log`, `diff`, `checkout` |
| `raster` | `getRasterInfo`, `getRasterStats`, `getRasterHistogram`, `getRasterDimensions`, `getRasterBandValues`, `bandMath`, `ndvi`, `hillshade`, `zonalStats`, `exportRaster`, `contour`, `viewshed`, `elevationProfile`, `kde`, `process`, `mosaic`, `getMosaicInfo` |

## Full API Coverage

```typescript
import { RoteiroClient, RoteiroGeneratedApi } from '@roteiro/sdk';

const client = new RoteiroClient({ baseUrl: 'http://localhost:8080' });
const api = new RoteiroGeneratedApi(client);

const manifest = await api.autoGetApiDocsPublicManifest();
```
