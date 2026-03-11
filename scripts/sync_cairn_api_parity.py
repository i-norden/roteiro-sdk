#!/usr/bin/env python3
"""Synchronize Cairn API docs with registered server routes.

Updates two files in a Cairn repo:
1) go/server/openapi.yaml: ensures every registered route exists as a path+method.
2) docs/api-reference.md: regenerates a complete quick-reference table from routes.

Usage:
  python scripts/sync_cairn_api_parity.py --cairn-root ../cairn
"""

from __future__ import annotations

import argparse
import re
from pathlib import Path
from typing import Dict, Iterable, List, Optional, Set, Tuple

import yaml


HTTP_METHODS = {"GET", "POST", "PUT", "PATCH", "DELETE"}


def normalize_path(path: str) -> Optional[str]:
    path = path.strip()
    if not path:
        return None
    if path == "/{$}":
        return "/"
    # Router catch-all handlers, not public API surface.
    if path == "/api/":
        return None
    return path


def extract_routes(server_dir: Path) -> Set[Tuple[str, str]]:
    route_re = re.compile(r'Handle(?:Func)?\("([A-Z]+) ([^"]+)"')
    routes: Set[Tuple[str, str]] = set()
    for go_file in server_dir.rglob("*.go"):
        if go_file.name.endswith("_test.go"):
            continue
        text = go_file.read_text(encoding="utf-8", errors="ignore")
        for match in route_re.finditer(text):
            method, path = match.group(1), match.group(2)
            if method not in HTTP_METHODS:
                continue
            normalized = normalize_path(path)
            if normalized is None:
                continue
            routes.add((method, normalized))
    return routes


def operation_id(method: str, path: str) -> str:
    slug = re.sub(r"[^a-zA-Z0-9]+", "_", path).strip("_")
    return f"auto_{method.lower()}_{slug}"


def path_parameters(path: str) -> List[Dict[str, object]]:
    params: List[Dict[str, object]] = []
    for name in re.findall(r"{([^}]+)}", path):
        params.append(
            {
                "name": name,
                "in": "path",
                "required": True,
                "schema": {"type": "string"},
            }
        )
    return params


def infer_tag(path: str) -> str:
    if path.startswith("/api/"):
        segs = path.split("/")
        if len(segs) > 2 and segs[2]:
            return segs[2].replace("-", " ").title()
        return "API"
    if path.startswith("/collections"):
        return "OGC"
    if path.startswith("/stac"):
        return "STAC"
    if path.startswith("/raster"):
        return "Raster"
    if path.startswith("/tiles") or path.startswith("/pmtiles"):
        return "Tiles"
    if path.startswith("/wms") or path.startswith("/wmts") or path.startswith("/wfs"):
        return "OGC Services"
    if path.startswith("/graphql"):
        return "GraphQL"
    if path.startswith("/saml"):
        return "SAML"
    if path.startswith("/public"):
        return "Public"
    if path.startswith("/ws/"):
        return "WebSocket"
    return "Core"


def auto_operation(method: str, path: str) -> Dict[str, object]:
    op: Dict[str, object] = {
        "tags": [infer_tag(path)],
        "summary": f"[auto] {method} {path}",
        "operationId": operation_id(method, path),
        "responses": {},
    }
    params = path_parameters(path)
    if params:
        op["parameters"] = params

    if method == "DELETE":
        op["responses"] = {"204": {"description": "No Content"}}
    else:
        op["responses"] = {
            "200": {
                "description": "OK",
                "content": {"application/json": {"schema": {"type": "object"}}},
            }
        }
    return op


def sync_openapi(openapi_path: Path, routes: Set[Tuple[str, str]]) -> Tuple[int, int, int]:
    spec = yaml.safe_load(openapi_path.read_text(encoding="utf-8"))
    if not isinstance(spec, dict):
        raise ValueError("openapi.yaml did not parse into a mapping")
    paths = spec.setdefault("paths", {})
    if not isinstance(paths, dict):
        raise ValueError("openapi.yaml paths is not a mapping")

    # Fix plugin path key mismatch to mirror router paths.
    plugin_moves = [
        ("/api/plugins/{name}/manifest", "/api/plugins/local/{name}/manifest"),
        ("/api/plugins/{name}/toggle", "/api/plugins/local/{name}/toggle"),
    ]
    for old, new in plugin_moves:
        if old in paths:
            existing = paths.pop(old)
            target = paths.setdefault(new, {})
            if isinstance(existing, dict) and isinstance(target, dict):
                for k, v in existing.items():
                    target.setdefault(k, v)

    route_set = set(routes)

    removed = 0
    added = 0
    updated = 0

    # Remove operations not present in server route registrations.
    for path in list(paths.keys()):
        methods = paths.get(path)
        if not isinstance(methods, dict):
            continue
        for meth in list(methods.keys()):
            if meth.lower() not in {"get", "post", "put", "patch", "delete"}:
                continue
            route_key = (meth.upper(), path)
            if route_key not in route_set:
                methods.pop(meth, None)
                removed += 1
        if not methods:
            paths.pop(path, None)

    # Add missing operations.
    for method, path in sorted(route_set):
        methods = paths.setdefault(path, {})
        key = method.lower()
        if key not in methods:
            methods[key] = auto_operation(method, path)
            added += 1
        else:
            updated += 1

    # Deterministic path ordering for cleaner diffs.
    sorted_paths = {k: paths[k] for k in sorted(paths.keys())}
    spec["paths"] = sorted_paths

    openapi_path.write_text(
        yaml.safe_dump(spec, sort_keys=False, width=120, allow_unicode=False),
        encoding="utf-8",
    )
    return added, removed, updated


def write_api_reference(doc_path: Path, routes: Set[Tuple[str, str]]) -> None:
    lines: List[str] = []
    lines.append("# API Quick Reference")
    lines.append("")
    lines.append(
        "This file is generated from server route registrations in `go/server/*.go` "
        "(excluding `*_test.go`)."
    )
    lines.append("")
    lines.append("| Method | Path |")
    lines.append("|--------|------|")
    for method, path in sorted(routes, key=lambda x: (x[1], x[0])):
        lines.append(f"| {method} | `{path}` |")
    lines.append("")
    doc_path.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--cairn-root", required=True, help="Path to Cairn repository root")
    args = parser.parse_args()

    cairn_root = Path(args.cairn_root).resolve()
    server_dir = cairn_root / "go" / "server"
    openapi_path = server_dir / "openapi.yaml"
    api_ref_path = cairn_root / "docs" / "api-reference.md"

    routes = extract_routes(server_dir)
    added, removed, updated = sync_openapi(openapi_path, routes)
    write_api_reference(api_ref_path, routes)

    print(f"Routes discovered: {len(routes)}")
    print(f"OpenAPI sync: added={added} removed={removed} existing={updated}")
    print(f"Updated: {openapi_path}")
    print(f"Updated: {api_ref_path}")


if __name__ == "__main__":
    main()

