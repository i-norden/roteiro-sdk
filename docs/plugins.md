# Roteiro Plugin SDK

Build custom extensions for Roteiro using the Plugin SDK. Plugins can add new analysis tools, visualization layers, data source connectors, export formats, and UI panels.

## Architecture Overview

Roteiro plugins run in sandboxed iframe environments with a typed bidirectional message protocol. Plugins communicate with the host application through `window.postMessage`, with origin validation and permission-based access control.

```
┌─────────────────────────────────────┐
│  Roteiro Host Application             │
│  ┌───────────────────────────────┐  │
│  │  PluginBridge                 │  │
│  │  - Origin validation          │  │
│  │  - Permission enforcement     │  │
│  │  - Request/response routing   │  │
│  └──────────┬────────────────────┘  │
│             │ postMessage            │
│  ┌──────────▼────────────────────┐  │
│  │  Plugin iframe (sandboxed)    │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │  @roteiro/plugin-sdk      │  │  │
│  │  │  - roteiro.map.*          │  │  │
│  │  │  - roteiro.layers.*       │  │  │
│  │  │  - roteiro.data.*         │  │  │
│  │  │  - roteiro.ui.*           │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

## Quick Start

### 1. Create a Plugin Manifest

Every plugin needs a `roteiro-plugin.json` manifest:

```json
{
  "name": "my-census-connector",
  "display_name": "US Census Data Connector",
  "version": "1.0.0",
  "description": "Import US Census Bureau boundary and demographic data",
  "author": "Your Name",
  "category": "data-source",
  "runtime": "javascript",
  "entry_point": "index.html",
  "permissions": ["data:read", "data:write", "network"],
  "hooks": [
    { "event": "on_map_load", "handler": "onMapLoad" }
  ],
  "ui_extensions": [
    {
      "type": "panel",
      "label": "Census Data",
      "icon": "database",
      "handler": "showCensusPanel"
    }
  ]
}
```

### 2. Include the Client SDK

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/@roteiro/plugin-sdk@latest/dist/roteiro-plugin.js"></script>
</head>
<body>
  <div id="app"></div>
  <script src="plugin.js"></script>
</body>
</html>
```

Or install via npm:

```bash
npm install @roteiro/plugin-sdk
```

```typescript
import { RoteiroPlugin } from '@roteiro/plugin-sdk';
```

### 3. Write Your Plugin

```javascript
const plugin = new RoteiroPlugin();

// React to map state changes
plugin.on('mapStateChanged', (state) => {
  console.log('Map moved to:', state.center, 'zoom:', state.zoom);
});

// React to feature selection
plugin.on('featureSelected', (feature) => {
  if (feature) {
    document.getElementById('info').textContent =
      JSON.stringify(feature.properties, null, 2);
  }
});

// Fly to a location
document.getElementById('go-btn').addEventListener('click', async () => {
  await plugin.flyTo({ center: [-77.0369, 38.9072], zoom: 12 });
});

// Query features
const results = await plugin.query({
  collection: 'buildings',
  filter: "height > 50",
  limit: 100
});
```

### 4. Submit to Marketplace

```bash
# Package your plugin
zip -r my-plugin.zip . -x node_modules/\* .git/\*

# Submit via API
curl -X POST https://your-roteiro.example.com/api/plugins/marketplace \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"manifest": {...}}'
```

## Manifest Reference

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Unique identifier (lowercase, hyphens allowed) |
| `display_name` | string | Human-readable name |
| `version` | string | Semantic version (e.g., "1.2.3") |
| `description` | string | Short description (max 200 chars) |
| `author` | string | Author name or organization |
| `category` | string | One of the valid categories (see below) |
| `runtime` | string | `javascript`, `python`, or `wasm` |
| `entry_point` | string | Path to main HTML file or script |

### Categories

| Category | Description |
|----------|-------------|
| `analysis` | Spatial analysis and geoprocessing tools |
| `visualization` | Custom map visualizations and renderers |
| `data-source` | External data connectors and importers |
| `export` | Custom export formats and pipelines |
| `integration` | Third-party service integrations |
| `utility` | General utilities and productivity tools |

### Permissions

| Permission | Description |
|------------|-------------|
| `data:read` | Read collections, features, and metadata |
| `data:write` | Create, update, and delete features |
| `network` | Make HTTP requests to external services |
| `storage` | Use plugin-scoped key-value storage |

### Hooks

Plugins can register handlers for lifecycle events:

| Event | Trigger |
|-------|---------|
| `before_process` | Before a geoprocessing operation runs |
| `after_process` | After a geoprocessing operation completes |
| `after_upload` | After a dataset is uploaded |
| `on_feature_create` | When a new feature is drawn/created |
| `on_feature_update` | When a feature is edited |
| `on_feature_delete` | When a feature is deleted |
| `on_dataset_create` | When a new dataset/collection is created |
| `on_dataset_delete` | When a dataset is deleted |
| `on_map_load` | When the map page loads |
| `on_export` | When a map or data export is triggered |

### UI Extensions

| Type | Description |
|------|-------------|
| `toolbar_button` | Adds a button to the map toolbar |
| `panel` | Adds a side panel accessible from the toolbar |
| `context_menu` | Adds items to the map right-click menu |
| `layer_action` | Adds actions to the layer context menu |

## Client SDK API Reference

### Initialization

```typescript
import { RoteiroPlugin } from '@roteiro/plugin-sdk';

const plugin = new RoteiroPlugin({
  // Optional: override the expected host origin for security
  hostOrigin: 'https://your-roteiro.example.com'
});
```

### Map Operations

```typescript
// Get current map state
const state = await plugin.getMapState();
// Returns: { center: [lng, lat], zoom, bearing, pitch, bounds }

// Set map state
await plugin.setMapState({ center: [-74.006, 40.7128], zoom: 14 });

// Fly to a location with animation
await plugin.flyTo({
  center: [-74.006, 40.7128],
  zoom: 14,
  bearing: 45,
  pitch: 60,
  duration: 2000  // milliseconds
});
```

### Layer Operations

```typescript
// Add a GeoJSON layer
await plugin.addLayer({
  id: 'my-analysis-result',
  name: 'Buffer Analysis',
  type: 'geojson',
  data: featureCollection,
  paint: {
    'fill-color': '#3b82f6',
    'fill-opacity': 0.4
  }
});

// Add a raster layer from URL
await plugin.addLayer({
  id: 'satellite-overlay',
  name: 'Satellite Imagery',
  type: 'raster',
  url: 'https://tiles.example.com/{z}/{x}/{y}.png'
});

// Remove a layer
await plugin.removeLayer('my-analysis-result');
```

### Data Operations

```typescript
// Query features from a collection
const features = await plugin.query({
  collection: 'parcels',
  filter: "zone_type = 'residential'",
  bbox: [-74.01, 40.70, -73.99, 40.72],
  limit: 500
});

// Get all features from a layer
const allFeatures = await plugin.getFeatures('parcels-layer');

// Get features within a bounding box
const bboxFeatures = await plugin.getFeatures('parcels-layer', [-74.01, 40.70, -73.99, 40.72]);

// Select a feature (highlights it on the map)
await plugin.selectFeature('parcels-layer', 'feature-123');
```

### Notifications

```typescript
// Show a notification toast
await plugin.notify({
  level: 'success',  // 'info' | 'warning' | 'error' | 'success'
  message: 'Analysis complete! Found 42 matching parcels.',
  duration: 5000  // milliseconds (optional, default 3000)
});
```

### Events

```typescript
// Map state changes (pan, zoom, rotate)
plugin.on('mapStateChanged', (state) => {
  console.log('Center:', state.center, 'Zoom:', state.zoom);
});

// Layer list changes
plugin.on('layersChanged', (layers) => {
  layers.forEach(l => console.log(l.name, l.visible));
});

// Feature selected on map
plugin.on('featureSelected', (feature) => {
  if (feature) {
    console.log('Selected:', feature.properties);
  }
});

// Theme changes
plugin.on('themeChanged', ({ theme }) => {
  document.body.classList.toggle('dark', theme === 'dark');
});

// Remove a listener
const handler = (state) => { /* ... */ };
plugin.on('mapStateChanged', handler);
plugin.off('mapStateChanged', handler);
```

## Server-Side Plugin Execution

Plugins can also run server-side using JSON action descriptors or simple JavaScript:

### JSON Action Descriptors

```json
[
  { "action": "collections.list" },
  { "action": "collections.getItems", "params": { "id": "parcels", "options": { "limit": 100 } } },
  { "action": "process.buffer", "params": { "input": "...", "distance": 500 } },
  { "action": "storage.set", "params": { "key": "lastRun", "value": "2024-01-15" } },
  { "action": "log", "params": { "message": "Processing complete" } }
]
```

### Server-Side Actions

| Action | Permission | Description |
|--------|------------|-------------|
| `collections.list` | `data:read` | List all collections |
| `collections.get` | `data:read` | Get collection metadata |
| `collections.getItems` | `data:read` | Get features from a collection |
| `process.buffer` | `data:read` | Run buffer geoprocessing |
| `process.clip` | `data:read` | Run clip geoprocessing |
| `storage.get` | `storage` | Get a value from plugin storage |
| `storage.set` | `storage` | Set a value in plugin storage |
| `http.get` | `network` | Make an HTTP GET request |
| `ui.showNotification` | - | Show a notification (logged) |
| `log` | - | Append to plugin logs |

### Execution via API

```bash
curl -X POST https://your-roteiro.example.com/api/plugins/marketplace/{id}/execute \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "analyze",
    "params": { "collection": "parcels", "buffer_distance": 500 }
  }'
```

## Marketplace API

### Browse Plugins

```bash
# List all published plugins
GET /api/plugins/marketplace

# Filter by category
GET /api/plugins/marketplace?category=analysis

# Search
GET /api/plugins/marketplace?q=census
```

### Install / Uninstall

```bash
# Install a plugin
POST /api/plugins/marketplace/{id}/install

# List installed plugins
GET /api/plugins/installed

# Uninstall
DELETE /api/plugins/marketplace/{id}/install
```

### Plugin Configuration

```bash
# Update plugin config
PUT /api/plugins/marketplace/{id}/config
Content-Type: application/json

{
  "config": { "apiKey": "...", "region": "us-east" },
  "enabled": true
}
```

### Reviews

```bash
# Submit a review
POST /api/plugins/marketplace/{id}/reviews
Content-Type: application/json

{ "rating": 5, "body": "Great plugin for census data!" }

# List reviews
GET /api/plugins/marketplace/{id}/reviews
```

## Security Model

- **Iframe Sandboxing**: Plugins run in iframes with `sandbox="allow-scripts allow-forms allow-same-origin"`. Direct DOM access to the host is blocked.
- **Origin Validation**: All postMessage communication validates the source origin against the plugin's registered domain.
- **Permission Enforcement**: Every API call is checked against the plugin's declared permissions. Undeclared capabilities are blocked.
- **Network Allowlist**: Server-side HTTP requests are restricted to configured allowed hosts.
- **Execution Timeout**: Server-side plugin execution has a 30-second default timeout.
- **Memory Limits**: Advisory memory limit of 64MB for server-side execution.
- **Body Size Limits**: Plugin submissions are capped at 10MB; config updates at 1MB.

## Example Plugins

### Census Data Connector

See `examples/plugins/census-connector/` for a complete data source plugin that imports US Census Bureau boundaries and demographic data.

### Heatmap Generator

See `examples/plugins/heatmap/` for a visualization plugin that generates kernel density heatmaps from point data.

### CSV Exporter

See `examples/plugins/csv-exporter/` for an export plugin that converts feature collections to formatted CSV with configurable columns.
