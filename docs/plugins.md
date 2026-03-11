# Roteiro Plugin Development

This document describes the public plugin-development contract for Roteiro.

## Scope

- manifest schema and field definitions
- packaging expectations for submitted plugins
- marketplace submission endpoints
- high-level roadmap items for plugin developers

## Plugin Package Contract

Every plugin submitted to the marketplace needs a `roteiro-plugin.json`
manifest:

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

## Packaging Expectations

- The plugin package must include the manifest and the declared `entry_point`.
- The package should be self-contained and must not rely on unpublished private
  host assets.
- Requested permissions must be the minimum necessary for the plugin to work.

## Marketplace Submission

Plugins are submitted through the marketplace API exposed by the host
application:

```bash
# Package your plugin bundle
zip -r my-plugin.zip . -x node_modules/\* .git/\*

# Submit via API
curl -X POST https://your-roteiro.example.com/api/plugins/marketplace \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"manifest": {...}}'
```

Publication, review, artifact storage, and install policy enforcement may vary
by deployment until the public marketplace lifecycle is finalized.

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

Plugins can declare lifecycle hooks. The host decides which hooks are available
for a given deployment.

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

## Public Roadmap

The following plugin-developer deliverables are planned work, not current public
packages:

- a versioned public plugin SDK package
- generated typings and examples for plugin host APIs
- a local development harness for plugin testing
- signed artifact and provenance guidance
- marketplace review and publication guidance

Until those exist, this document should be treated as the public manifest and
submission reference only.
