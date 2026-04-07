# Python SDK Guide

The Python package exposes the same two-layer shape as the TypeScript package:

- `RoteiroClient` for the stable handwritten workflows
- `RoteiroGeneratedApi` for the bundled OpenAPI surface

`Pipeline` is the only extra helper. Old namespace modules for raster, VCS, attachments, and legacy analysis wrappers are removed.

## Install

```bash
pip install roteiro
```

## Create a Client

```python
from roteiro import RoteiroClient

client = RoteiroClient(
    base_url="http://localhost:8080",
    api_key="sk_example",
    project_id=42,
)
```

`project_id` is sent as `X-Project-ID` and is also added to request bodies that accept `project_id`.

## Handwritten Surface

`RoteiroClient` covers the current Cairn workflows:

- health and dataset registry
- dataset intake and upload
- collections and feature CRUD
- celestial body metadata and scene manifest
- SQL query endpoints
- unified operations and job management
- ad hoc and saved pipelines
- projects and workspace state
- publishing helpers and tile URL builders

## Example

```python
intake = client.import_source(
    {
        "name": "moon-craters",
        "source": "https://example.com/moon-craters.geojson",
        "source_type": "remote_url",
        "body_id": "moon",
    }
)

bodies = client.list_bodies()

result = client.execute_sql(
    "duckdb",
    {"sql": "select * from crater_catalog limit 10"},
)
```

## Pipeline Helper

```python
from roteiro import Pipeline

result = (
    Pipeline(client)
    .buffer(100)
    .simplify(10)
    .execute("roads")
)
```

Use `.step(name, params)` for operations that do not have a dedicated fluent helper.

## Generated Client

```python
from roteiro import RoteiroGeneratedApi

api = RoteiroGeneratedApi(client)
manifest = api.auto_get_api_v1_scene_manifest()
```

The generated client is regenerated from Cairn's bundled OpenAPI spec and only covers what that spec currently describes.
