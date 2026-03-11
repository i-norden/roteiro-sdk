# Roteiro Python SDK

Python client for the Roteiro GIS API. Zero dependencies, works with Python 3.9+.

## Install

```bash
pip install roteiro
```

Or install from source:

```bash
cd python
pip install -e .
```

## Quickstart

```python
from roteiro import RoteiroClient

client = RoteiroClient("http://localhost:8080", api_key="your-key")

# Health check
print(client.health())

# List datasets
for ds in client.list_datasets():
    print(ds["name"], ds["format"])

# Query features with bbox filter
features = client.query_features(
    "buildings",
    bbox="-74.0,40.7,-73.9,40.8",
    limit=50,
)
print(f"Got {len(features['features'])} features")

# Create a new feature
client.create_feature("buildings", {
    "type": "Feature",
    "geometry": {"type": "Point", "coordinates": [-73.985, 40.748]},
    "properties": {"name": "Empire State Building"}
})
```

## API Reference

### `RoteiroClient(base_url, api_key=None, timeout=30)`

Create a client instance.

| Parameter | Type | Description |
|-----------|------|-------------|
| `base_url` | `str` | Server URL (e.g. `http://localhost:8080`) |
| `api_key` | `str` | Optional API key for authentication |
| `timeout` | `int` | Request timeout in seconds |

### Dataset Management

| Method | Description |
|--------|-------------|
| `health()` | Server health check |
| `list_datasets()` | List all registered datasets |
| `register_dataset(name, path, fmt, crs)` | Register a new dataset |
| `delete_dataset(name)` | Remove a dataset |

### OGC Features

| Method | Description |
|--------|-------------|
| `list_collections()` | List feature collections |
| `get_collection(id)` | Get collection metadata |
| `query_features(id, bbox, filter, limit, offset)` | Query features with filtering |
| `get_feature(collection_id, feature_id)` | Get a single feature |
| `create_feature(collection_id, feature)` | Create a new feature |

### Processing

| Method | Description |
|--------|-------------|
| `convert(input_path, output_format, output_name=None, register=True)` | Convert between formats |
| `process(operation, input_path, params)` | Run spatial operations (buffer, clip, simplify, etc.) |
| `diff(left, right, match_field)` | Diff two datasets |
| `list_operations()` | Fetch live processing operations/formats from `/api/operations` |

### Indoor GIS

| Method | Description |
|--------|-------------|
| `list_buildings()` | List indoor buildings |
| `get_building(id)` | Get building with floors and transitions |
| `create_building(data)` | Create a building |
| `delete_building(id)` | Delete a building |
| `list_floors(building_id)` | List floors |
| `list_spaces(building_id, level)` | List spaces on a floor |
| `navigate(building_id, from_space, to_space, ...)` | A* pathfinding |

### Tile URLs

| Method | Description |
|--------|-------------|
| `vector_tiles_url(tileset)` | Get vector tile URL template |
| `raster_tiles_url(name)` | Get raster tile URL template |

## Supported Operations

Use `client.list_operations()` to fetch the live server catalog from `/api/operations`.

Current operation names exposed by the server:

- `buffer`, `clip`, `simplify`, `sjoin`, `reproject`
- `union`, `intersect`, `difference`, `dissolve`, `merge`
- `voronoi`, `delaunay`, `minimum_bounding_geometry`, `fishnet`, `tile_extract`
- `centroid`, `convex_hull`, `multipart_to_singlepart`, `singlepart_to_multipart`
- `feature_to_point`, `feature_to_line`, `points_to_line`, `points_to_polygon`
- `vertices_to_points`, `add_xy_coordinates`, `spatial_stats`
- `add_field`, `calculate_field`, `delete_field`, `rename_field`
- `morans_i`, `hotspot`, `kernel_density`, `summary_statistics`, `frequency`
- `interpolate_idw`, `ordinary_kriging`, `rbf_interpolation`
- `validate`, `make_valid`, `validate_topology`, `crack_and_cluster`
- `buffer_with_options`, `append`, `simple_kriging`, `universal_kriging`
- `solve_vrp`, `p_median`, `mclp`

## Error Handling

API errors raise SDK exceptions like `RoteiroAPIError`, `RoteiroConnectionError`, and `RoteiroTimeoutError`:

```python
from roteiro import RoteiroAPIError

try:
    client.get_collection("nonexistent")
except RoteiroAPIError as e:
    print(f"Error: {e}")
```

## Full API Coverage

For complete endpoint parity with the server OpenAPI, use `RoteiroGeneratedApi`:

```python
from roteiro import RoteiroClient, RoteiroGeneratedApi

client = RoteiroClient("http://localhost:8080")
api = RoteiroGeneratedApi(client)

health = api.get_health()
print(health)
```
