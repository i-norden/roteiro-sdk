# Python SDK Guide

The Roteiro Python SDK (`roteiro`) provides a convenient client for interacting with the roteiro API from Python scripts, Jupyter notebooks, and data pipelines.

For full endpoint parity with server OpenAPI, use `RoteiroGeneratedApi` and the generated operation map in [`generated-operations.md`](./generated-operations.md).

## Installation

```bash
pip install roteiro
```

Or install from source:

```bash
cd python
pip install -e .
```

## Authentication

The client supports two authentication methods:

### API key (recommended for scripts)

```python
from roteiro import RoteiroClient

client = RoteiroClient(
    base_url="http://localhost:8080",
    api_key="sk_your_api_key_here"
)
```

### Session cookie (for browser-like flows)

The client does not directly manage session cookies. For session-based auth, use the `requests` library or the API key method above.

### Timeout configuration

```python
client = RoteiroClient(
    base_url="http://localhost:8080",
    api_key="sk_abc123",
    timeout=60  # seconds
)
```

## Health Check

```python
health = client.health()
print(health)
# {'status': 'ok', 'uptime': 3600, 'version': '0.1.0', 'database': 'ok'}
```

## Datasets

### List datasets

```python
datasets = client.list_datasets()
for ds in datasets:
    print(f"{ds['name']}: {ds['format']} ({ds.get('feature_count', 'N/A')} features)")
```

### Register a dataset

```python
ds = client.register_dataset(
    name="parcels",
    path="/data/parcels.geojson",
    fmt="geojson",
    crs="EPSG:4326"
)
print(f"Registered: {ds['name']}")
```

### Delete a dataset

```python
client.delete_dataset("parcels")
```

## Collections and Features

### List OGC collections

```python
collections = client.list_collections()
for col in collections:
    print(f"{col['id']}: {col.get('title', col['id'])}")
```

### Get collection metadata

```python
col = client.get_collection("buildings")
print(f"CRS: {col.get('crs', 'unknown')}")
print(f"Extent: {col.get('extent', {})}")
```

### Query features

```python
# Basic query with limit
result = client.query_features("buildings", limit=100)
print(f"Returned {result['numberReturned']} of {result['numberMatched']} features")

# Bounding box filter
result = client.query_features(
    "buildings",
    bbox="-74.01,40.70,-73.97,40.73",
    limit=50
)

# Attribute filter
result = client.query_features(
    "buildings",
    filter_expr="height > 100",
    limit=20
)

# Combined filters
result = client.query_features(
    "buildings",
    bbox="-74.01,40.70,-73.97,40.73",
    filter_expr="type = 'commercial'",
    limit=50
)
```

### Get a single feature

```python
feature = client.get_feature("buildings", "42")
print(f"Geometry type: {feature['geometry']['type']}")
print(f"Properties: {feature['properties']}")
```

### Create a feature

```python
new_feature = {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-73.985, 40.748]
    },
    "properties": {
        "name": "New Building",
        "height": 50
    }
}

created = client.create_feature("buildings", new_feature)
print(f"Created feature ID: {created.get('id')}")
```

## Geoprocessing

### Run a processing operation

```python
# Buffer
result = client.process(
    operation="buffer",
    input_path="buildings",
    params={"distance": 100}
)
print(f"Operation: {result['operation']}")
print(f"Input features: {result['input_features']}")
print(f"Output features: {result['output_features']}")
print(f"Duration: {result['duration_ms']}ms")
```

### Available operations

```python
catalog = client.list_operations()
print("Formats:", catalog["formats"])
print("Operation count:", len(catalog["operations"]))

for op in catalog["operations"]:
    print(op["name"], op["params"])

# Example param names from current server catalog:
client.process("dissolve", "dataset", params={"group_by": "category"})
client.process("clip", "dataset", params={"mask": "boundary"})
client.process("sjoin", "points", params={"right": "polygons", "predicate": "within"})
client.process("reproject", "dataset", params={"from_crs": "EPSG:4326", "to_crs": "EPSG:3857"})
```

### Convert formats

```python
result = client.convert(
    input_path="buildings",
    output_format="parquet",
    output_name="buildings_parquet",
    register=True
)
print(f"Converted: {result['message']}")
print(f"Duration: {result['duration_ms']}ms")
```

### Compare datasets

```python
diff = client.diff(
    left="buildings",
    right="buildings_v2",
    match_field="id"
)
print(f"Added: {diff['added']}")
print(f"Removed: {diff['removed']}")
print(f"Modified: {diff['modified']}")
print(f"Unchanged: {diff['unchanged']}")
```

## Indoor GIS

### List buildings

```python
buildings = client.list_buildings()
for b in buildings:
    print(f"{b['id']}: {b['name']} ({b.get('address', 'N/A')})")
```

### Get building details

```python
building = client.get_building("bldg-001")
print(f"Building: {building['name']}")
print(f"Floors: {len(building.get('floors', []))}")
print(f"Transitions: {len(building.get('transitions', []))}")
```

### Create a building

```python
building = client.create_building({
    "id": "bldg-001",
    "name": "Main Office",
    "address": "123 Main St",
    "floors": [
        {
            "id": "floor-1",
            "name": "Ground Floor",
            "level": 0,
            "spaces": [
                {
                    "id": "lobby",
                    "name": "Main Lobby",
                    "space_type": "lobby",
                    "navigable": True,
                    "connections": ["hallway-1"]
                },
                {
                    "id": "hallway-1",
                    "name": "Main Hallway",
                    "space_type": "hallway",
                    "navigable": True,
                    "connections": ["lobby", "room-101"]
                }
            ]
        }
    ],
    "transitions": [
        {
            "id": "elevator-1",
            "name": "Main Elevator",
            "transition_type": "elevator",
            "connects_floors": [0, 1, 2],
            "accessible": True,
            "bidirectional": True
        }
    ]
})
```

### Navigate between spaces

```python
route = client.navigate(
    building_id="bldg-001",
    from_space="lobby",
    to_space="room-201",
    accessible_only=True
)
print(f"Total distance: {route['totalDistance']}m")
print(f"Floor changes: {route['floorChanges']}")
print(f"Estimated time: {route['estimatedTimeSeconds']}s")
for step in route['path']:
    print(f"  -> {step['instruction']} ({step['spaceName']}, floor {step['floorLevel']})")
```

### List floors and spaces

```python
floors = client.list_floors("bldg-001")
for floor in floors:
    print(f"Level {floor['level']}: {floor['name']}")

spaces = client.list_spaces("bldg-001", level=0)
for space in spaces:
    print(f"  {space['name']} ({space['space_type']})")
```

### Delete a building

```python
client.delete_building("bldg-001")
```

## Tile URL Helpers

Generate tile URL templates for use with mapping libraries:

```python
# Vector tiles
vt_url = client.vector_tiles_url("buildings")
print(vt_url)
# http://localhost:8080/tiles/buildings/{z}/{x}/{y}

# Raster tiles
rt_url = client.raster_tiles_url("elevation")
print(rt_url)
# http://localhost:8080/raster/elevation/tiles/{z}/{x}/{y}
```

## Complete Example: Analysis Pipeline

```python
from roteiro import RoteiroClient

client = RoteiroClient("http://localhost:8080", api_key="sk_abc123")

# 1. Check server health
health = client.health()
assert health["status"] == "ok"

# 2. List available datasets
datasets = client.list_datasets()
print(f"Found {len(datasets)} datasets")

# 3. Query features within a bounding box
features = client.query_features(
    "buildings",
    bbox="-74.01,40.70,-73.97,40.73",
    filter_expr="height > 50"
)
print(f"Found {features['numberMatched']} tall buildings in downtown")

# 4. Buffer the buildings by 100 meters
result = client.process("buffer", "buildings", params={"distance": 100})
print(f"Buffered {result['input_features']} buildings -> {result['output_features']} polygons")

# 5. Convert the result to GeoPackage
convert = client.convert("buildings_buffer", "gpkg", output_name="buildings_buffered")
print(f"Exported to: {convert['dataset']['path']}")

# 6. Compare original with the new version
diff = client.diff("buildings", "buildings_v2", match_field="id")
print(f"Changes: +{diff['added']} -{diff['removed']} ~{diff['modified']}")
```

## Error Handling

All API errors raise SDK exceptions such as `RoteiroAPIError`:

```python
from roteiro import RoteiroAPIError

try:
    client.get_collection("nonexistent")
except RoteiroAPIError as e:
    print(f"API error: {e}")
    # API error: collection not found
```

HTTP error codes are converted to typed SDK errors with the server's message when available.
