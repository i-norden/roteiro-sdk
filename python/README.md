# roteiro

Python SDK for the Cairn/Roteiro API. It provides a handwritten client for the common workflows, module helpers for specific domains, and a generated client for full OpenAPI coverage.

Full guide: [`../docs/python.md`](../docs/python.md)

## Install

```bash
pip install roteiro
```

## Quick Start

```python
from roteiro import RoteiroClient, raster

client = RoteiroClient("http://localhost:8080", api_key="your-key")

health = client.health()
collections = client.list_collections()

features = client.query_features(
    "buildings",
    bbox="-74.0,40.7,-73.9,40.8",
    limit=50,
)

hillshade = raster.hillshade(client, "dem")
print(health.status, len(collections), len(features.features), len(hillshade))
```

## SDK Shape

| Layer | Export | Notes |
|------|--------|-------|
| Handwritten client | `RoteiroClient` | Health, datasets, collections, processing jobs, raster workflow helpers, uploads, tile URL helpers |
| Domain helpers | `collections`, `attachments`, `layers`, `vcs`, `raster`, `indoor`, `Pipeline` | Standalone modules, not instance methods on `RoteiroClient` |
| Full API coverage | `RoteiroGeneratedApi` | Generated from the server OpenAPI spec |

## Core Client Methods

| Area | Methods |
|------|---------|
| Health and datasets | `health`, `list_datasets`, `register_dataset`, `delete_dataset`, `upload` |
| Collections and features | `list_collections`, `get_collection`, `get_items`, `query_features`, `get_item`, `get_feature`, `create_item`, `create_feature`, `update_item`, `update_feature`, `delete_item`, `delete_feature` |
| Processing | `convert`, `process`, `diff`, `list_operations`, `preflight_process`, `submit_process_job`, `submit_process_batch`, `list_process_jobs`, `get_process_job`, `cancel_process_job`, `rerun_process_job` |
| Raster workflow helpers | `raster_process`, `raster_mosaic`, `get_raster_mosaic_info` |
| Tile URL helpers | `vector_tiles_url`, `raster_tiles_url`, `pmtiles_url` |

## Full API Coverage

```python
from roteiro import RoteiroClient, RoteiroGeneratedApi

client = RoteiroClient("http://localhost:8080")
api = RoteiroGeneratedApi(client)

manifest = api.auto_get_api_docs_public_manifest()
```
