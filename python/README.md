# roteiro

Python SDK for the Roteiro API. It mirrors the TypeScript SDK in structure: a handwritten client for common workflows, domain modules for focused helpers, and a generated client for full OpenAPI coverage.

Full guide: [`../docs/python.md`](../docs/python.md)

Set `project_id` on `RoteiroClient` when you want requests and tile helpers scoped to a specific Roteiro project.

## Install

```bash
pip install roteiro
```

## Naming Convention

The Python SDK uses `snake_case` names such as `list_datasets`, `query_features`, and `auto_get_api_docs_public_manifest`.

## Quick Start

```python
from roteiro import RoteiroClient, analysis, raster

client = RoteiroClient("http://localhost:8080", api_key="your-key", project_id=42)

health = client.health()
collections = client.list_collections()

features = client.query_features(
    "buildings",
    bbox="-74.0,40.7,-73.9,40.8",
    bbox_crs="EPSG:4326",
    crs="EPSG:3857",
    limit=50,
)

areas = analysis.geodesic_area(
    client,
    {
        "type": "FeatureCollection",
        "features": [],
    },
)

hillshade = raster.hillshade(client, "dem")
print(health.status, len(collections), len(features.features), len(areas), len(hillshade))
```

## SDK Shape

| Layer | Export | Notes |
|------|--------|-------|
| Handwritten client | `RoteiroClient` | Health, datasets, collections, processing jobs, uploads, raster workflow helpers, and tile URL helpers |
| Domain helpers | `analysis`, `collections`, `attachments`, `layers`, `vcs`, `raster`, `Pipeline` | Standalone modules, not instance methods on `RoteiroClient` |
| Full API coverage | `RoteiroGeneratedApi` | Generated from the server OpenAPI spec |

## Core Client Surface

| Area | Methods |
|------|---------|
| Health and datasets | `health`, `list_datasets`, `register_dataset`, `delete_dataset`, `upload` |
| Collections and features | `list_collections`, `get_collection`, `get_items`, `query_features`, `get_item`, `get_feature`, `create_item`, `create_feature`, `update_item`, `update_feature`, `delete_item`, `delete_feature` |
| Processing | `convert`, `process`, `diff`, `list_operations`, `preflight_process`, `submit_process_job`, `submit_process_batch`, `list_process_jobs`, `get_process_job`, `cancel_process_job`, `rerun_process_job` |
| Raster workflow helpers | `raster_process`, `raster_mosaic`, `get_raster_mosaic_info` |
| Tile URL helpers | `vector_tiles_url`, `raster_tiles_url`, `pmtiles_url` |

## Domain Helpers

| Module | Key helpers |
|--------|-------------|
| `analysis` | `geodesic_area`, `geodesic_length`, `classify_kmeans`, `classify_isodata`, `classify_ml`, `classify_rf` |
| `collections` | `list_collections`, `get_collection`, `get_items`, `get_item`, `create_item`, `update_item`, `delete_item` |
| `attachments` | `upload_attachment`, `list_attachments`, `download_attachment`, `delete_attachment` |
| `layers` | `upload_layer`, `list_layers`, `get_layer`, `update_layer`, `publish_layer`, `archive_layer`, `upload_layer_data`, `delete_layer`, `preview_layer` |
| `vcs` | `create_repo`, `list_repos`, `get_repo`, `delete_repo`, `commit`, `log`, `log_for_dataset`, `diff`, `checkout` |
| `raster` | `get_raster_info`, `get_raster_stats`, `get_raster_histogram`, `get_raster_dimensions`, `get_raster_band_values`, `band_math`, `ndvi`, `hillshade`, `zonal_stats`, `export_raster`, `contour`, `viewshed`, `elevation_profile`, `kde`, `process`, `mosaic`, `get_mosaic_info` |

## Full API Coverage

```python
from roteiro import RoteiroClient, RoteiroGeneratedApi

client = RoteiroClient("http://localhost:8080")
api = RoteiroGeneratedApi(client)

manifest = api.auto_get_api_docs_public_manifest()
```
