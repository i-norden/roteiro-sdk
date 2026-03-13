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
    print(ds.name, ds.format)

# Query features with bbox filter
features = client.query_features(
    "buildings",
    bbox="-74.0,40.7,-73.9,40.8",
    limit=50,
)
print(f"Got {len(features.features)} features")

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
| `preflight_process(operation, input_path=None, params=None, ...)` | Validate/normalize a processing request |
| `submit_process_job(operation, input_path=None, params=None, ...)` | Queue an async processing job |
| `list_process_jobs(status=None, search=None, limit=None, offset=None)` | List async processing jobs |
| `get_process_job(job_id)` | Fetch async processing job state |
| `cancel_process_job(job_id)` | Cancel an async processing job |
| `rerun_process_job(job_id)` | Re-submit a previous async job |
| `submit_process_batch(jobs)` | Queue a dependent batch of async jobs |
| `diff(left, right, match_field)` | Diff two datasets |
| `list_operations()` | Fetch live processing operations/formats from `/api/operations` |
| `raster_process(operation, input_path=None, params=None, ...)` | Run generic `/api/raster/process` operations |
| `raster_mosaic(names, ...)` | Render a PNG mosaic from registered rasters |
| `get_raster_mosaic_info(names)` | Fetch combined mosaic metadata |

### Raster Module

Import `roteiro.raster` for per-dataset raster helpers and generic raster workflows:

```python
from roteiro import raster
```

Available helpers include:

- `raster.get_raster_info`, `raster.get_raster_stats`, `raster.get_raster_histogram`
- `raster.get_raster_dimensions`, `raster.get_raster_band_values`
- `raster.hillshade`, `raster.ndvi`, `raster.band_math`
- `raster.zonal_stats`, `raster.export_raster`, `raster.contour`, `raster.viewshed`, `raster.elevation_profile`, `raster.kde`
- `raster.process`, `raster.mosaic`, `raster.get_mosaic_info`

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

The processing catalog now includes rich metadata per operation, including category, UI availability, projected-CRS requirements, and typed parameter definitions.

Current operation names exposed by the server:

- Vector and overlay: `geodesic_buffer`, `buffer`, `buffer_with_options`, `clip`, `simplify`, `sjoin`, `reproject`, `union`, `intersect`, `difference`, `dissolve`, `merge`, `append`
- Geometry generation/conversion: `voronoi`, `delaunay`, `concave_hull`, `minimum_bounding_geometry`, `fishnet`, `tile_extract`, `centroid`, `convex_hull`, `multipart_to_singlepart`, `singlepart_to_multipart`, `feature_to_point`, `feature_to_line`, `points_to_line`, `points_to_polygon`, `vertices_to_points`, `add_xy_coordinates`
- Measurement and schema: `spatial_stats`, `add_field`, `calculate_field`, `delete_field`, `rename_field`
- Statistics and clustering: `morans_i`, `gearys_c`, `hotspot`, `local_morans_i`, `kernel_density`, `dbscan`, `st_dbscan`, `summary_statistics`, `frequency`
- Interpolation: `interpolate_idw`, `ordinary_kriging`, `simple_kriging`, `universal_kriging`, `rbf_interpolation`, `interpolate_tin`
- Topology and optimization: `validate`, `make_valid`, `validate_topology`, `crack_and_cluster`, `solve_vrp`, `p_median`, `mclp`

Raster processing is available through `client.raster_process(...)` and `roteiro.raster.process(...)`.

Current raster operation families on the backend include:

- Terrain: `slope`, `aspect`, `profile_curvature`, `plan_curvature`, `general_curvature`
- Hydrology: `fill`, `flow_direction`, `flow_accumulation`, `watershed`, `stream_order`, `snap_pour_point`, `basin_labels`
- Distance/cost: `euclidean_distance`, `euclidean_allocation`, `euclidean_direction`, `cost_distance`, `cost_path`, `cost_allocation`
- Overlay and neighborhood: `weighted_sum`, `reclassify`, `extract_by_mask`, `focal_statistics`
- Spectral and change: `spectral_index`, `image_difference`, `normalized_difference_change`, `change_vector_analysis`
- Classification and conversion: `kmeans`, `isodata`, `maximum_likelihood`, `random_forest`, `raster_to_polygons`, `rasterize`

Dedicated JSON raster endpoints are also available for `contour`, `viewshed`, `profile`, and `kde`.

Async processing helpers are available on the main client; the generated client is no longer required just to submit or inspect background processing jobs.

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
