/**
 * Roteiro TypeScript SDK -- Quickstart Example.
 *
 * Demonstrates the major features of the Roteiro TypeScript SDK:
 *   - Connecting to a Roteiro server
 *   - Listing datasets and collections
 *   - Querying features with filters
 *   - Running spatial processing pipelines
 *   - Using the VCS (version control) API
 *   - Performing raster analysis
 *
 * Prerequisites:
 *   npm install @roteiro/sdk
 *   # Ensure a Roteiro server is running at http://localhost:8080
 */

import {
  RoteiroClient,
  Pipeline,
  vcs,
  raster,
  layers,
} from '../src/index';

async function main() {
  // -----------------------------------------------------------------------
  // 1. Connect to the server
  // -----------------------------------------------------------------------

  const client = new RoteiroClient({
    baseUrl: 'http://localhost:8080',
    apiKey: 'your-api-key-here', // Optional, only if auth is enabled
    timeout: 30_000,
    maxRetries: 3,
  });

  // Check server health
  const health = await client.health();
  console.log(`Server status: ${health.status}, version: ${health.version}`);

  // -----------------------------------------------------------------------
  // 2. Datasets
  // -----------------------------------------------------------------------

  const datasets = await client.listDatasets();
  console.log(`Found ${datasets.length} datasets`);
  for (const ds of datasets) {
    console.log(`  - ${ds.name} (${ds.format}, ${ds.feature_count ?? '?'} features)`);
  }

  // -----------------------------------------------------------------------
  // 3. Collections & Features (OGC API)
  // -----------------------------------------------------------------------

  const collections = await client.listCollections();
  console.log(`\n${collections.length} collections available`);

  if (collections.length > 0) {
    const collId = collections[0].id;

    // Query features with a bounding box
    const features = await client.getItems(collId, {
      bbox: '-73.99,40.74,-73.97,40.76',
      limit: 10,
    });
    console.log(
      `Query returned ${features.features.length} features from '${collId}'`,
    );

    // Get a single feature
    if (features.features.length > 0) {
      const fid = features.features[0].id;
      if (fid) {
        const feature = await client.getItem(collId, String(fid));
        console.log(`Feature ${fid}:`, feature.properties);
      }
    }
  }

  // -----------------------------------------------------------------------
  // 4. Spatial Processing Pipeline
  // -----------------------------------------------------------------------

  // Uncomment to run a pipeline:
  // const result = await new Pipeline(client)
  //   .buffer(100)
  //   .simplify(10)
  //   .reproject('EPSG:4326', 'EPSG:3857')
  //   .execute('buildings');
  // console.log('Pipeline result:', result);

  // -----------------------------------------------------------------------
  // 5. Version Control (VCS)
  // -----------------------------------------------------------------------

  // Uncomment to use VCS:
  // const repo = await vcs.createRepo(client, 'roads-history', {
  //   datasetName: 'roads',
  // });
  // console.log(`Managed repo ${repo.id}: ${repo.name}`);
  //
  // const commitObj = await vcs.commit(
  //   client, repo.id, '/data/buildings.geojson', 'Initial import'
  // );
  // console.log(`Commit ${commitObj.id}: ${commitObj.message}`);
  //
  // const commits = await vcs.log(client, repo.id);
  // for (const c of commits) {
  //   console.log(`  [${c.id.slice(0, 8)}] ${c.message}`);
  // }

  // -----------------------------------------------------------------------
  // 6. Raster Analysis
  // -----------------------------------------------------------------------

  // Uncomment for raster operations:
  // const info = await raster.getRasterInfo(client, 'elevation');
  // console.log('Raster info:', info);
  //
  // const stats = await raster.getRasterStats(client, 'elevation');
  // console.log('Band stats:', stats);

  // -----------------------------------------------------------------------
  // 7. Tile URL helpers (for MapLibre / Leaflet)
  // -----------------------------------------------------------------------

  console.log('\nTile URL templates:');
  console.log(`  Vector: ${client.vectorTilesUrl('buildings')}`);
  console.log(`  Raster: ${client.rasterTilesUrl('elevation')}`);
  console.log(`  PMTiles: ${client.pmtilesUrl('basemap')}`);

  console.log('\nQuickstart complete.');
}

main().catch(console.error);
