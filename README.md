# Roteiro SDKs

Standalone SDKs for Cairn's public API.

The repo now exposes two layers in both languages:

- a small handwritten client for the stable, high-traffic workflows
- a generated client built from Cairn's bundled OpenAPI spec

The handwritten surface covers datasets and intake, collections, celestial body metadata, SQL queries, operations, pipelines, projects, publishing, uploads, and tile URL helpers. Legacy namespaces for raster, VCS, attachments, and older analysis wrappers are intentionally removed.

## Packages

- TypeScript: [`typescript/`](./typescript)
- Python: [`python/`](./python)

## Docs

- TypeScript guide: [`docs/typescript.md`](./docs/typescript.md)
- Python guide: [`docs/python.md`](./docs/python.md)
- Generated operation map: [`docs/generated-operations.md`](./docs/generated-operations.md)
- Plugin docs: [`docs/plugins.md`](./docs/plugins.md)
