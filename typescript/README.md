# @roteiro/sdk

TypeScript SDK for the Cairn/Roteiro API. It provides a handwritten client for the common workflows, namespace helpers for specific domains, and a generated client for full OpenAPI coverage.

Full guide: [`../docs/typescript.md`](../docs/typescript.md)

## Install

```bash
npm install @roteiro/sdk
```

## Quick Start

```typescript
import { RoteiroClient, raster } from '@roteiro/sdk';

const client = new RoteiroClient({
  baseUrl: 'http://localhost:8080',
  apiKey: 'your-key',
});

const health = await client.health();
const collections = await client.listCollections();

const features = await client.queryFeatures('buildings', {
  bbox: '-74.0,40.7,-73.9,40.8',
  limit: 50,
});

const hillshade = await raster.hillshade(client, 'dem');
console.log(health.status, collections.length, features.features.length, hillshade.size);
```

## SDK Shape

| Layer | Export | Notes |
|------|--------|-------|
| Handwritten client | `RoteiroClient` | Health, datasets, collections, processing jobs, raster workflow helpers, uploads, tile URL helpers |
| Domain helpers | `collections`, `attachments`, `layers`, `vcs`, `raster`, `indoor`, `Pipeline` | Standalone namespace exports, not instance methods on `RoteiroClient` |
| Full API coverage | `RoteiroGeneratedApi` | Generated from the server OpenAPI spec |

## Core Client Methods

| Area | Methods |
|------|---------|
| Health and datasets | `health`, `listDatasets`, `registerDataset`, `deleteDataset`, `upload` |
| Collections and features | `listCollections`, `getCollection`, `getItems`, `queryFeatures`, `getItem`, `getFeature`, `createItem`, `createFeature`, `updateItem`, `updateFeature`, `deleteItem`, `deleteFeature` |
| Processing | `convert`, `process`, `diff`, `listOperations`, `preflightProcess`, `submitProcessJob`, `submitProcessBatch`, `listProcessJobs`, `getProcessJob`, `cancelProcessJob`, `rerunProcessJob` |
| Raster workflow helpers | `rasterProcess`, `rasterMosaic`, `getRasterMosaicInfo` |
| Tile URL helpers | `vectorTilesUrl`, `rasterTilesUrl`, `pmtilesUrl` |

## Full API Coverage

```typescript
import { RoteiroClient, RoteiroGeneratedApi } from '@roteiro/sdk';

const client = new RoteiroClient({ baseUrl: 'http://localhost:8080' });
const api = new RoteiroGeneratedApi(client);

const manifest = await api.autoGetApiDocsPublicManifest();
```
