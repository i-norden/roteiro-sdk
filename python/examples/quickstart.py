"""Roteiro Python SDK -- Quickstart Example.

This script demonstrates the major features of the Roteiro Python SDK:
  - Connecting to a Roteiro server
  - Listing datasets and collections
  - Querying features with filters
  - Running spatial processing pipelines
  - Using the VCS (version control) API
  - Performing raster analysis

Prerequisites:
  pip install roteiro
  # Ensure a Roteiro server is running at http://localhost:8080
"""

from roteiro import RoteiroClient, Pipeline

# ---------------------------------------------------------------------------
# 1. Connect to the server
# ---------------------------------------------------------------------------

client = RoteiroClient(
    base_url="http://localhost:8080",
    api_key="your-api-key-here",  # Optional, only if auth is enabled
    timeout=30,
    max_retries=3,
)

# Check server health
health = client.health()
print(f"Server status: {health.status}, version: {health.version}")

# ---------------------------------------------------------------------------
# 2. Datasets
# ---------------------------------------------------------------------------

# List registered datasets
datasets = client.list_datasets()
print(f"Found {len(datasets)} datasets")
for ds in datasets:
    print(f"  - {ds.name} ({ds.format}, {ds.feature_count or '?'} features)")

# Upload a new dataset
# dataset = client.upload("./data/parcels.geojson", name="parcels")
# print(f"Uploaded: {dataset.name}")

# ---------------------------------------------------------------------------
# 3. Collections & Features (OGC API)
# ---------------------------------------------------------------------------

# List OGC collections
collections = client.list_collections()
print(f"\n{len(collections)} collections available")

# Query features with a bounding box filter
if collections:
    coll_id = collections[0].id
    features = client.get_items(
        coll_id,
        bbox="-73.99,40.74,-73.97,40.76",
        limit=10,
    )
    print(f"Query returned {len(features.features)} features from '{coll_id}'")

    # Get a single feature
    if features.features:
        fid = features.features[0].id
        if fid:
            feature = client.get_item(coll_id, str(fid))
            print(f"Feature {fid}: {feature.properties}")

# ---------------------------------------------------------------------------
# 4. Spatial Processing Pipeline
# ---------------------------------------------------------------------------

# Build and execute a multi-step pipeline
# result = (
#     Pipeline(client)
#     .buffer(distance=100)
#     .simplify(tolerance=10)
#     .reproject(from_crs="EPSG:4326", to_crs="EPSG:3857")
#     .execute("buildings")
# )
# print(f"Pipeline result: {type(result)}")

# ---------------------------------------------------------------------------
# 5. Version Control (VCS)
# ---------------------------------------------------------------------------

from roteiro import vcs

# Create a managed repository
# repo = vcs.create_repo(client, "roads-history", dataset_name="roads")
# print(f"Managed repo {repo.id}: {repo.name}")

# Create a commit
# commit_obj = vcs.commit(client, repo.id, "/data/buildings.geojson", "Initial import")
# print(f"Commit {commit_obj.id}: {commit_obj.message}")

# View commit history
# commits = vcs.log(client, repo.id)
# for c in commits:
#     print(f"  [{c.id[:8]}] {c.message}")

# ---------------------------------------------------------------------------
# 6. Raster Analysis
# ---------------------------------------------------------------------------

from roteiro import raster

# Compute hillshade (returns PNG bytes)
# png_bytes = raster.hillshade(client, "elevation", azimuth=315, altitude=45)
# with open("hillshade.png", "wb") as f:
#     f.write(png_bytes)

# Compute NDVI
# ndvi_bytes = raster.ndvi(client, "sentinel2", nir_band=4, red_band=3)

# Band math expression
# result = raster.band_math(client, "sentinel2", "(b4 - b3) / (b4 + b3)")

# ---------------------------------------------------------------------------
# 7. Tile URL helpers (for MapLibre / Leaflet integration)
# ---------------------------------------------------------------------------

print("\nTile URL templates:")
print(f"  Vector: {client.vector_tiles_url('buildings')}")
print(f"  Raster: {client.raster_tiles_url('elevation')}")
print(f"  PMTiles: {client.pmtiles_url('basemap')}")

print("\nQuickstart complete.")
