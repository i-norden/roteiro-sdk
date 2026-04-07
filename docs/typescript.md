# TypeScript SDK Guide

The TypeScript package is intentionally small:

- `RoteiroClient` is the stable handwritten client.
- `Pipeline` is a fluent helper for ad hoc pipeline requests.
- `RoteiroGeneratedApi` is generated from Cairn's bundled OpenAPI spec for everything else.

## Install

```bash
npm install @roteiro/sdk
```

## Create a Client

```ts
import { RoteiroClient } from '@roteiro/sdk';

const client = new RoteiroClient({
  baseUrl: 'http://localhost:8080',
  apiKey: 'sk_example',
  projectId: 42,
});
```

`projectId` is applied as `X-Project-ID` and also fills `project_id` for request bodies that support it.

## Handwritten Surface

`RoteiroClient` covers the current Cairn workflows:

- health and dataset registry: `health`, `listDatasets`, `deleteDataset`
- intake: `upload`, `importSource`, dataset metadata and schema helpers
- collections: `listCollections`, `getItems`, feature CRUD helpers
- celestial metadata: `getSceneManifest`, `listBodies`, `getBody`, `getBodyRecipes`
- SQL control plane: `getSqlInfo`, `listSqlDatasets`, `executeSql`, `saveSqlResult`
- operations: `listOperations`, `preflightOperation`, `runOperation`, job helpers
- pipelines: `runPipeline`, saved pipeline CRUD, run history
- projects and workspace: `listProjects`, `getProjectWorkspace`, `setProjectWorkspace`
- publishing: `publishMap`, `listPublishedMaps`, stats and embed config helpers
- tile URL helpers: `vectorTilesUrl`, `rasterTilesUrl`, `pmtilesUrl`

## Example

```ts
const intake = await client.importSource({
  name: 'mars-dem',
  source: 'https://example.com/mars-dem.tif',
  source_type: 'remote_url',
  body_id: 'mars',
});

const bodies = await client.listBodies();

const catalog = await client.listOperations();

const result = await client.executeSql('duckdb', {
  sql: 'select * from crater_catalog limit 10',
});
```

## Pipeline Helper

`Pipeline` is a small wrapper over `POST /api/v1/pipeline`.

```ts
import { Pipeline } from '@roteiro/sdk';

const result = await new Pipeline(client)
  .buffer(100)
  .simplify(10)
  .execute('roads');
```

Use `.step(name, params)` for operations that do not have a dedicated fluent helper.

## Generated Client

Use `RoteiroGeneratedApi` when the handwritten client does not expose a route yet.

```ts
import { RoteiroGeneratedApi } from '@roteiro/sdk';

const generated = new RoteiroGeneratedApi(client);
const manifest = await generated.autoGetApiV1SceneManifest();
```

The generated client only reflects what exists in Cairn's bundled OpenAPI spec.
