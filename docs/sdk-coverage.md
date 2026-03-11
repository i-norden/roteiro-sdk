# SDK Coverage

This document reflects the API surface currently wrapped by the SDK code in this repository.

For full endpoint parity, use the generated clients:

- TypeScript: `RoteiroGeneratedApi` from `typescript/src/generated.ts`
- Python: `RoteiroGeneratedApi` from `python/roteiro/generated.py`
- Full operation map: [generated-operations.md](./generated-operations.md)

## TypeScript SDK

Covered endpoint groups:

- Core: `/health`, `/datasets`, `/collections`, `/collections/{id}/items`
- Processing: `/api/convert`, `/api/process`, `/api/diff`
- VCS: `/api/vcs/init`, `/api/vcs/commit`, `/api/vcs/log`, `/api/vcs/diff`
- Indoor: `/api/indoor/buildings*`, `/api/indoor/navigate`, `/api/indoor/import`, `/api/indoor/.../evacuation`
- Raster: `/raster/{name}/info|stats|band-math|ndvi|hillshade|zonal-stats|export`
- Layers: `/api/layers`, `/api/layers/{id}`, `/api/layers/{id}/publish|upload|archive|preview`
- Attachments: `/api/collections/{id}/items/{fid}/attachments`, `/api/attachments/{aid}`
- Tile URL helpers: `/tiles/{tileset}/{z}/{x}/{y}`, `/raster/{name}/tiles/{z}/{x}/{y}`, `/pmtiles/{archive}/{z}/{x}/{y}`

## Python SDK

Covered endpoint groups:

- Core: `/health`, `/datasets`, `/collections`, `/collections/{id}/items`
- Processing: `/api/convert`, `/api/process`, `/api/diff`
- VCS: `/api/vcs/init`, `/api/vcs/commit`, `/api/vcs/log`, `/api/vcs/diff`
- Indoor: `/api/indoor/buildings*`, `/api/indoor/navigate`, `/api/indoor/import`, `/api/indoor/.../evacuation`
- Raster: `/raster/{name}/band-math|ndvi|hillshade|zonal-stats`
- Layers: `/api/layers`, `/api/layers/{id}`, `/api/layers/{id}/publish|upload|archive`
- Attachments: `/api/collections/{id}/items/{fid}/attachments`, `/api/attachments/{aid}`
- Tile URL helpers: `/tiles/{tileset}/{z}/{x}/{y}`, `/raster/{name}/tiles/{z}/{x}/{y}`, `/pmtiles/{archive}/{z}/{x}/{y}`

## Notes

- High-level hand-written modules remain available and stable for common workflows.
- Generated clients provide complete operation coverage directly from OpenAPI.
