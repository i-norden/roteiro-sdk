# Roteiro SDKs

Standalone SDK repository for the Roteiro API clients and public plugin-development documentation.

## Packages

- TypeScript SDK: [`typescript/`](./typescript)
- Python SDK: [`python/`](./python)

## Documentation

- TypeScript guide: [`docs/typescript.md`](./docs/typescript.md)
- Python guide: [`docs/python.md`](./docs/python.md)
- Plugin development reference: [`docs/plugins.md`](./docs/plugins.md)
- Generated operations map: [`docs/generated-operations.md`](./docs/generated-operations.md)

The TypeScript and Python guides follow the same structure:

- handwritten client surface
- domain namespace or module helpers
- pipeline builder
- generated client for full OpenAPI coverage

Both SDKs support project-scoped requests via client configuration (`projectId` in TypeScript, `project_id` in Python), which applies `X-Project-ID` automatically and carries through to generated clients as well.

## Quick Start

### TypeScript

```bash
cd typescript
npm install
npm run build
```

### Python

```bash
cd python
pip install -e .
```

## Plugin Development Docs

This repo is also the public home for plugin-development documentation. It does not currently publish a standalone plugin runtime package; the plugin docs are limited to the public manifest and marketplace contract until that tooling is versioned and released here.
