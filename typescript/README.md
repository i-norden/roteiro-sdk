# @roteiro/sdk

TypeScript SDK for Cairn's current public API.

## Install

```bash
npm install @roteiro/sdk
```

## Shape

- `RoteiroClient`: stable handwritten client
- `Pipeline`: fluent ad hoc pipeline helper
- `RoteiroGeneratedApi`: generated fallback from Cairn's bundled OpenAPI spec

## Quick Start

```ts
import { Pipeline, RoteiroClient } from '@roteiro/sdk';

const client = new RoteiroClient({
  baseUrl: 'http://localhost:8080',
  projectId: 42,
});

const manifest = await client.getSceneManifest();
const bodies = await client.listBodies();

const result = await new Pipeline(client)
  .buffer(100)
  .simplify(10)
  .execute('roads');
```

More detail lives in [`../docs/typescript.md`](../docs/typescript.md).
