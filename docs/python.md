# Python SDK Guide

The Python SDK exposes the Roteiro API through the same three layers used by the TypeScript SDK:

1. `RoteiroClient` for the handwritten, high-traffic workflows.
2. Domain modules such as `analysis`, `attachments`, `collections`, `layers`, `raster`, and `vcs`.
3. `RoteiroGeneratedApi` for full parity with the server OpenAPI spec and the generated operation map in [`generated-operations.md`](./generated-operations.md).

## SDK Shape

| Layer | Export | Use it for |
|------|--------|------------|
| Handwritten client | `RoteiroClient` | Health, datasets, collections, processing jobs, uploads, raster workflow helpers, and tile URL helpers |
| Domain helpers | `analysis`, `collections`, `attachments`, `layers`, `vcs`, `raster`, `Pipeline` | Focused helpers grouped by domain; these are standalone modules, not instance methods on `RoteiroClient` |
| Full API coverage | `RoteiroGeneratedApi` | Endpoints that are only available in the generated OpenAPI client |

## Installation

```bash
pip install roteiro
```

From source:

```bash
cd python
pip install -e .
```

## Naming Convention

The Python SDK uses `snake_case` for methods and options:

- `list_datasets`
- `query_features`
- `auto_get_api_docs_public_manifest`

## Create a Client

```python
from roteiro import RoteiroClient

client = RoteiroClient(
    base_url="http://localhost:8080",
    api_key="sk_your_api_key_here",
    project_id=42,
    timeout=30,
    max_retries=3,
    backoff_factor=0.5,
)
```

`base_url` should be the server origin, not `/api`.

Set `project_id` when you want the client to scope requests to a workspace project. The handwritten and generated clients will send `X-Project-ID` automatically, and tile URL helpers append `project_id` for you.

### Client options

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `base_url` | `str` | Server origin | required |
| `api_key` | `str | None` | Sent as `X-API-Key` | `None` |
| `project_id` | `int | None` | Sent as `X-Project-ID`; also used in tile URL helpers and default request bodies that accept `project_id` | `None` |
| `timeout` | `int` | Request timeout in seconds | `30` |
| `max_retries` | `int` | Retries for `429`, `502`, `503`, `504`, and transport failures | `3` |
| `backoff_factor` | `float` | Exponential backoff base in seconds | `0.5` |

## Core Client Surface

`RoteiroClient` covers the main handwritten SDK surface:

| Area | Methods |
|------|---------|
| Health and datasets | `health`, `list_datasets`, `register_dataset`, `delete_dataset`, `upload` |
| Collections and features | `list_collections`, `get_collection`, `get_items`, `query_features`, `get_item`, `get_feature`, `create_item`, `create_feature`, `update_item`, `update_feature`, `delete_item`, `delete_feature` |
| Processing | `convert`, `process`, `diff`, `list_operations`, `preflight_process`, `submit_process_job`, `submit_process_batch`, `list_process_jobs`, `get_process_job`, `cancel_process_job`, `rerun_process_job` |
| Raster workflow helpers | `raster_process`, `raster_mosaic`, `get_raster_mosaic_info` |
| Tile URL helpers | `vector_tiles_url`, `raster_tiles_url`, `pmtiles_url` |

### Common workflow

```python
health = client.health()

datasets = client.list_datasets()

parcels = client.register_dataset(
    name="parcels",
    path="/data/parcels.geojson",
    fmt="geojson",
    crs="EPSG:4326",
)

uploaded = client.upload("./data/empty.geojson", name="empty")

buildings = client.query_features(
    "buildings",
    bbox="-74.01,40.70,-73.97,40.73",
    bbox_crs="EPSG:4326",
    crs="EPSG:3857",
    filter_expr="height > 100",
    limit=50,
)

created = client.create_feature(
    "buildings",
    {
        "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [-73.985, 40.748]},
        "properties": {"name": "New Building"},
    },
)

preflight = client.preflight_process(
    "clip",
    input_path="buildings",
    params={"mask": "study_area"},
)

if preflight.valid:
    job = client.submit_process_job(
        "clip",
        input_path="buildings",
        params={"mask": "study_area"},
        output_name="buildings_clipped",
    )
    print(job.id)
```

### Processing request shape

The handwritten client uses positional arguments plus keyword options for processing:

```python
result = client.process(
    "buffer",
    input_path="buildings",
    params={"distance": 100},
    output_format="geojson",
)
```

Fetch the live catalog from the server for currently enabled operations and formats:

```python
catalog = client.list_operations()
print([op["name"] for op in catalog["operations"]])
```

## Domain Helpers

Domain helpers are standalone modules, not `RoteiroClient` instance methods.

```python
from roteiro import analysis, attachments, collections, layers, raster, vcs
```

| Module | Key helpers |
|--------|-------------|
| `analysis` | `geodesic_area`, `geodesic_length`, `classify_kmeans`, `classify_isodata`, `classify_ml`, `classify_rf` |
| `collections` | `list_collections`, `get_collection`, `get_items`, `get_item`, `create_item`, `update_item`, `delete_item` |
| `attachments` | `upload_attachment`, `list_attachments`, `download_attachment`, `delete_attachment` |
| `layers` | `upload_layer`, `list_layers`, `get_layer`, `update_layer`, `publish_layer`, `archive_layer`, `upload_layer_data`, `delete_layer`, `preview_layer` |
| `vcs` | `create_repo`, `list_repos`, `get_repo`, `delete_repo`, `commit`, `log`, `log_for_dataset`, `diff`, `checkout` |
| `raster` | `get_raster_info`, `get_raster_stats`, `get_raster_histogram`, `get_raster_dimensions`, `get_raster_band_values`, `band_math`, `ndvi`, `hillshade`, `zonal_stats`, `export_raster`, `contour`, `viewshed`, `elevation_profile`, `kde`, `process`, `mosaic`, `get_mosaic_info` |

### Example: analysis helpers

```python
from roteiro import analysis

area = analysis.geodesic_area(
    client,
    {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[
                        [-73.99, 40.75],
                        [-73.98, 40.75],
                        [-73.98, 40.76],
                        [-73.99, 40.76],
                        [-73.99, 40.75],
                    ]],
                },
                "properties": {},
            },
        ],
    },
)

classified = analysis.classify_kmeans(
    client,
    bands={"nir": [0.9, 0.7], "red": [0.3, 0.2]},
    config={"k": 2},
)
```

### Example: raster helpers

```python
from roteiro import raster

info = raster.get_raster_info(client, "dem")
stats = raster.get_raster_stats(client, "dem", band=0)
ndvi = raster.ndvi(client, "landsat_scene", nir_band=4, red_band=3)
contours = raster.contour(client, "dem", interval=5)
```

## Pipeline Builder

Use `Pipeline` when you want a compact, fluent wrapper around repeated `/api/process` calls:

```python
from roteiro import Pipeline

result = (
    Pipeline(client)
    .buffer(distance=100)
    .simplify(tolerance=10)
    .reproject(from_crs="EPSG:4326", to_crs="EPSG:3857")
    .execute("buildings")
)
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
- `convex_hull`
- `aggregate`
- `spatial_stats`
- `interpolate`

## Full OpenAPI Coverage

Use `RoteiroGeneratedApi` when you need endpoints that are not wrapped by the handwritten client or domain helpers, such as preferences, saved queries, project workspace endpoints, or newer API surfaces that have not been elevated into handwritten helpers yet.

```python
from roteiro import RoteiroClient, RoteiroGeneratedApi

client = RoteiroClient("http://localhost:8080")
api = RoteiroGeneratedApi(client)

docs_manifest = api.auto_get_api_docs_public_manifest()
public_map = api.get_public_map("share-token")
```

Generated method names are intentionally mechanical. Use [`generated-operations.md`](./generated-operations.md) to map HTTP routes to TypeScript and Python method names.

## Error Handling

The handwritten client raises `RoteiroAPIError` for non-success HTTP responses, plus `RoteiroConnectionError` and `RoteiroTimeoutError` for transport failures:

```python
from roteiro import (
    RoteiroAPIError,
    RoteiroConnectionError,
    RoteiroTimeoutError,
)

try:
    client.get_collection("missing")
except RoteiroAPIError as exc:
    print(exc.status_code, exc)
except (RoteiroConnectionError, RoteiroTimeoutError) as exc:
    print(exc)
```

## Exported Models

The package exports the handwritten client models directly from `roteiro`.

```python
from roteiro import (
    Collection,
    Dataset,
    Feature,
    FeatureCollection,
    ProcessJobRecord,
    ProcessPreflightResult,
    ProcessResult,
    RasterInfo,
)
```

## Where to Look Next

- [`generated-operations.md`](./generated-operations.md) for the Python-to-TypeScript generated method map
- [`../python/examples/quickstart.py`](../python/examples/quickstart.py) for an executable end-to-end example
