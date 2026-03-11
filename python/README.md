# Roteiro Python SDK

Python client for the Simple GIS API. Zero dependencies, works with Python 3.9+.

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
| `convert(input_path, output_path, output_format)` | Convert between formats |
| `process(operation, input_path, params)` | Run spatial operations (buffer, clip, simplify, etc.) |
| `diff(left, right, match_field)` | Diff two datasets |

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

The `process()` method supports these operations:

- `buffer` - Buffer geometries by distance
- `clip` - Clip to mask geometry
- `simplify` - Simplify with tolerance
- `sjoin` - Spatial join
- `reproject` - Change CRS
- `centroid` - Compute centroids
- `convex_hull` - Compute convex hulls
- `spatial_stats` - Area, length, perimeter per feature
- `morans_i` - Moran's I spatial autocorrelation
- `hotspot` - Getis-Ord Gi* hot/cold spot analysis
- `kernel_density` - Gaussian kernel density estimation
- `validate` - Validate/fix geometries

## Error Handling

All API errors raise `RuntimeError` with the server's error message:

```python
try:
    client.get_collection("nonexistent")
except RuntimeError as e:
    print(f"Error: {e}")
```
