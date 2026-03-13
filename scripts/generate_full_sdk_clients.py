#!/usr/bin/env python3
"""Generate full-surface TS/Python API clients from an OpenAPI spec."""

from __future__ import annotations

import argparse
import re
from collections import Counter
from pathlib import Path
from typing import Any

import yaml

HTTP_METHODS = ("get", "post", "put", "patch", "delete")


def sanitize_identifier(name: str) -> str:
    out = re.sub(r"[^0-9a-zA-Z_]", "_", name)
    out = re.sub(r"_+", "_", out).strip("_")
    if not out:
        out = "op"
    if out[0].isdigit():
        out = f"op_{out}"
    return out


def camel_case(name: str) -> str:
    parts = re.split(r"[^0-9a-zA-Z]+", name)
    parts = [p for p in parts if p]
    if not parts:
        return "op"
    first = parts[0].lower()
    rest = [p[:1].upper() + p[1:] for p in parts[1:]]
    return sanitize_identifier(first + "".join(rest))


def snake_case(name: str) -> str:
    s = re.sub(r"(.)([A-Z][a-z]+)", r"\1_\2", name)
    s = re.sub(r"([a-z0-9])([A-Z])", r"\1_\2", s)
    s = re.sub(r"[^0-9a-zA-Z_]", "_", s)
    s = re.sub(r"_+", "_", s).strip("_").lower()
    if not s:
        s = "op"
    if s[0].isdigit():
        s = f"op_{s}"
    return s


def read_operations(openapi_path: Path) -> list[dict[str, Any]]:
    spec = yaml.safe_load(openapi_path.read_text(encoding="utf-8"))
    paths = spec.get("paths", {})
    operations: list[dict[str, Any]] = []
    for path, methods in sorted(paths.items()):
        if not isinstance(methods, dict):
            continue
        for method in HTTP_METHODS:
            op = methods.get(method)
            if not isinstance(op, dict):
                continue
            operation_id = op.get("operationId") or f"{method}_{path}"
            params = op.get("parameters") or []
            request_body = op.get("requestBody")
            operations.append(
                {
                    "path": path,
                    "method": method.upper(),
                    "operation_id": operation_id,
                    "summary": op.get("summary") or "",
                    "parameters": params,
                    "request_body": request_body,
                }
            )
    return operations


def unique_names(operations: list[dict[str, Any]], name_fn) -> list[str]:
    base = [name_fn(op["operation_id"]) for op in operations]
    counts: Counter[str] = Counter()
    out: list[str] = []
    for b in base:
        counts[b] += 1
        if counts[b] == 1:
            out.append(b)
        else:
            out.append(f"{b}_{counts[b]}")
    return out


def ts_path_expr(path: str) -> str:
    pieces: list[str] = []
    i = 0
    for m in re.finditer(r"\{([^}]+)\}", path):
        if m.start() > i:
            pieces.append(path[i : m.start()])
        name = sanitize_identifier(m.group(1))
        pieces.append(f"${{encodeURIComponent(String(pathParams.{name}))}}")
        i = m.end()
    if i < len(path):
        pieces.append(path[i:])
    joined = "".join(pieces)
    return f"`{joined}`"


def py_path_expr(path: str) -> str:
    pieces: list[str] = []
    i = 0
    for match in re.finditer(r"\{([^}]+)\}", path):
        if match.start() > i:
            pieces.append(path[i : match.start()])
        name = sanitize_identifier(match.group(1))
        pieces.append("{_quote_path_value(" + name + ")}")
        i = match.end()
    if i < len(path):
        pieces.append(path[i:])
    return "".join(pieces)


def path_param_names(op: dict[str, Any]) -> list[str]:
    names: list[str] = []
    for raw in re.findall(r"\{([^}]+)\}", op["path"]):
        name = sanitize_identifier(raw)
        if name not in names:
            names.append(name)

    for param in op.get("parameters", []):
        if not isinstance(param, dict):
            continue
        if param.get("in") != "path" or not param.get("name"):
            continue
        name = sanitize_identifier(param["name"])
        if name not in names:
            names.append(name)
    return names


def write_ts(operations: list[dict[str, Any]], names: list[str], out_path: Path) -> None:
    lines: list[str] = []
    lines.append("/* AUTO-GENERATED FILE. DO NOT EDIT. */")
    lines.append("import type { RoteiroClient } from './client';")
    lines.append("")
    lines.append("export type GeneratedRequestOptions = {")
    lines.append("  query?: Record<string, string | number | boolean | undefined | null>;")
    lines.append("  body?: unknown;")
    lines.append("  headers?: Record<string, string>;")
    lines.append("};")
    lines.append("")
    lines.append("function withQuery(path: string, query?: GeneratedRequestOptions['query']): string {")
    lines.append("  if (!query) return path;")
    lines.append("  const sp = new URLSearchParams();")
    lines.append("  for (const [k, v] of Object.entries(query)) {")
    lines.append("    if (v === undefined || v === null) continue;")
    lines.append("    sp.set(k, String(v));")
    lines.append("  }")
    lines.append("  const q = sp.toString();")
    lines.append("  return q ? `${path}?${q}` : path;")
    lines.append("}")
    lines.append("")
    lines.append("export class RoteiroGeneratedApi {")
    lines.append("  constructor(private readonly client: RoteiroClient) {}")
    lines.append("")

    for op, method_name in zip(operations, names):
        path = op["path"]
        method = op["method"]
        summary = (op.get("summary") or "").replace("*/", "")
        path_params = path_param_names(op)
        if path_params:
            lines.append(f"  /** {summary or method + ' ' + path} */")
            lines.append(
                f"  async {method_name}(pathParams: {{ {', '.join(f'{p}: string' for p in path_params)} }}, options: GeneratedRequestOptions = {{}}): Promise<unknown> {{"
            )
            lines.append(f"    const path = withQuery({ts_path_expr(path)}, options.query);")
        else:
            lines.append(f"  /** {summary or method + ' ' + path} */")
            lines.append(
                f"  async {method_name}(options: GeneratedRequestOptions = {{}}): Promise<unknown> {{"
            )
            lines.append(f"    const path = withQuery('{path}', options.query);")

        lines.append("    const headers: Record<string, string> = { ...(options.headers ?? {}) };")
        lines.append("    let body: BodyInit | undefined;")
        lines.append("    if (options.body !== undefined) {")
        lines.append("      body = JSON.stringify(options.body);")
        lines.append("      if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';")
        lines.append("    }")
        lines.append("    return this.client.request(path, {")
        lines.append(f"      method: '{method}',")
        lines.append("      headers,")
        lines.append("      body,")
        lines.append("    });")
        lines.append("  }")
        lines.append("")

    lines.append("}")
    out_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_py(operations: list[dict[str, Any]], names: list[str], out_path: Path) -> None:
    lines: list[str] = []
    lines.append('"""AUTO-GENERATED FILE. DO NOT EDIT."""')
    lines.append("from __future__ import annotations")
    lines.append("")
    lines.append("from typing import Any, Dict, Optional")
    lines.append("from urllib.parse import quote, urlencode")
    lines.append("")
    lines.append("from .client import RoteiroClient")
    lines.append("")
    lines.append("")
    lines.append("def _quote_path_value(value: Any) -> str:")
    lines.append('    return quote(str(value), safe="")')
    lines.append("")
    lines.append("class RoteiroGeneratedApi:")
    lines.append("    def __init__(self, client: RoteiroClient) -> None:")
    lines.append("        self._client = client")
    lines.append("")

    for op, method_name in zip(operations, names):
        path = op["path"]
        method = op["method"]
        summary = (op.get("summary") or f"{method} {path}").replace('"""', "")
        path_params = path_param_names(op)
        args = []
        for p in path_params:
            args.append(f"{p}: str")
        args.extend(
            [
                "query: Optional[Dict[str, Any]] = None",
                "body: Any = None",
                "headers: Optional[Dict[str, str]] = None",
            ]
        )

        lines.append(f"    def {method_name}(self, {', '.join(args)}) -> Any:")
        lines.append(f'        """{summary}"""')
        if path_params:
            fmt = py_path_expr(path)
            kwargs = ", ".join(f"{p}={p}" for p in path_params)
            lines.append(f'        path = f"{fmt}"')
        else:
            lines.append(f'        path = "{path}"')
        lines.append("        if query:")
        lines.append("            q = urlencode({k: v for k, v in query.items() if v is not None})")
        lines.append("            if q:")
        lines.append("                path = f\"{path}?{q}\"")
        lines.append("        extra_headers = dict(headers or {})")
        lines.append("        payload = body")
        lines.append("        if payload is not None and 'Content-Type' not in extra_headers:")
        lines.append("            extra_headers['Content-Type'] = 'application/json'")
        lines.append(f"        return self._client._request('{method}', path, body=payload, extra_headers=extra_headers)")
        lines.append("")

    out_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_ops_doc(operations: list[dict[str, Any]], ts_names: list[str], py_names: list[str], out_path: Path) -> None:
    lines = [
        "# Generated Operations",
        "",
        "Auto-generated from the server OpenAPI spec. Each operation is available in both generated SDK clients.",
        "",
        "| Method | Path | TS Method | Python Method |",
        "|--------|------|-----------|---------------|",
    ]
    for op, ts, py in zip(operations, ts_names, py_names):
        lines.append(f"| {op['method']} | `{op['path']}` | `{ts}` | `{py}` |")
    lines.append("")
    out_path.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--openapi", required=True)
    parser.add_argument("--repo-root", default=".")
    args = parser.parse_args()

    repo_root = Path(args.repo_root).resolve()
    openapi_path = Path(args.openapi).resolve()

    operations = read_operations(openapi_path)
    ts_names = unique_names(operations, lambda opid: camel_case(opid))
    py_names = unique_names(operations, lambda opid: snake_case(opid))

    write_ts(operations, ts_names, repo_root / "typescript" / "src" / "generated.ts")
    write_py(operations, py_names, repo_root / "python" / "roteiro" / "generated.py")
    write_ops_doc(operations, ts_names, py_names, repo_root / "docs" / "generated-operations.md")

    print(f"Generated {len(operations)} operations")


if __name__ == "__main__":
    main()
