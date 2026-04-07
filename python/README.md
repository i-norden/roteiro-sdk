# roteiro

Python SDK for Cairn's current public API.

## Install

```bash
pip install roteiro
```

## Shape

- `RoteiroClient`: stable handwritten client
- `Pipeline`: fluent ad hoc pipeline helper
- `RoteiroGeneratedApi`: generated fallback from Cairn's bundled OpenAPI spec

## Quick Start

```python
from roteiro import Pipeline, RoteiroClient

client = RoteiroClient(
    base_url="http://localhost:8080",
    project_id=42,
)

manifest = client.get_scene_manifest()
bodies = client.list_bodies()

result = (
    Pipeline(client)
    .buffer(100)
    .simplify(10)
    .execute("roads")
)
```

More detail lives in [`../docs/python.md`](../docs/python.md).
