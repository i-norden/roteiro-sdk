"""Typed models for the handwritten Roteiro Python SDK."""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional, Union

JsonDict = Dict[str, Any]
FeatureId = Union[str, int]


def _extra(data: JsonDict, known: set[str]) -> JsonDict:
    return {key: value for key, value in data.items() if key not in known}


@dataclass
class HealthStatus:
    status: str
    version: Optional[str] = None
    uptime: Optional[float] = None
    uptime_seconds: Optional[float] = None
    extra: JsonDict = field(default_factory=dict)

    @classmethod
    def from_dict(cls, data: JsonDict) -> "HealthStatus":
        uptime = data.get("uptime")
        uptime_seconds = data.get("uptime_seconds", uptime)
        return cls(
            status=data.get("status", "unknown"),
            version=data.get("version"),
            uptime=uptime,
            uptime_seconds=uptime_seconds,
            extra=_extra(data, {"status", "version", "uptime", "uptime_seconds"}),
        )


@dataclass
class Link:
    href: str
    rel: str
    type: Optional[str] = None
    title: Optional[str] = None

    @classmethod
    def from_dict(cls, data: JsonDict) -> "Link":
        return cls(
            href=data.get("href", ""),
            rel=data.get("rel", ""),
            type=data.get("type"),
            title=data.get("title"),
        )


@dataclass
class Dataset:
    name: str
    format: Optional[str] = None
    crs: Optional[str] = None
    storage_uri: Optional[str] = None
    status: Optional[str] = None
    error_message: Optional[str] = None
    feature_count: Optional[int] = None
    bounds: Optional[List[float]] = None
    body_id: Optional[str] = None
    render_mode: Optional[str] = None
    geometry_type: Optional[str] = None
    history_supported: Optional[bool] = None
    extra: JsonDict = field(default_factory=dict)

    @classmethod
    def from_dict(cls, data: JsonDict) -> "Dataset":
        return cls(
            name=data.get("name", ""),
            format=data.get("format"),
            crs=data.get("crs"),
            storage_uri=data.get("storage_uri"),
            status=data.get("status"),
            error_message=data.get("error_message"),
            feature_count=data.get("feature_count"),
            bounds=data.get("bounds"),
            body_id=data.get("body_id"),
            render_mode=data.get("render_mode"),
            geometry_type=data.get("geometry_type"),
            history_supported=data.get("history_supported"),
            extra=_extra(
                data,
                {
                    "name",
                    "format",
                    "crs",
                    "storage_uri",
                    "status",
                    "error_message",
                    "feature_count",
                    "bounds",
                    "body_id",
                    "render_mode",
                    "geometry_type",
                    "history_supported",
                },
            ),
        )


@dataclass
class Collection:
    id: str
    title: Optional[str] = None
    description: Optional[str] = None
    links: List[Link] = field(default_factory=list)
    extent: Optional[JsonDict] = None
    crs: List[str] = field(default_factory=list)
    extra: JsonDict = field(default_factory=dict)

    @classmethod
    def from_dict(cls, data: JsonDict) -> "Collection":
        crs = data.get("crs")
        if isinstance(crs, str):
            crs_list = [crs]
        elif isinstance(crs, list):
            crs_list = [str(item) for item in crs]
        else:
            crs_list = []
        return cls(
            id=data.get("id", ""),
            title=data.get("title"),
            description=data.get("description"),
            links=[Link.from_dict(item) for item in data.get("links", []) if isinstance(item, dict)],
            extent=data.get("extent") if isinstance(data.get("extent"), dict) else None,
            crs=crs_list,
            extra=_extra(data, {"id", "title", "description", "links", "extent", "crs"}),
        )


@dataclass
class Feature:
    type: str = "Feature"
    id: Optional[FeatureId] = None
    geometry: Any = None
    properties: JsonDict = field(default_factory=dict)

    @classmethod
    def from_dict(cls, data: JsonDict) -> "Feature":
        return cls(
            type=data.get("type", "Feature"),
            id=data.get("id"),
            geometry=data.get("geometry"),
            properties=data.get("properties") if isinstance(data.get("properties"), dict) else {},
        )


@dataclass
class FeatureCollection:
    type: str = "FeatureCollection"
    features: List[Feature] = field(default_factory=list)
    number_matched: Optional[int] = None
    number_returned: Optional[int] = None
    links: List[Link] = field(default_factory=list)
    page_info: Optional[JsonDict] = None

    @classmethod
    def from_dict(cls, data: JsonDict) -> "FeatureCollection":
        return cls(
            type=data.get("type", "FeatureCollection"),
            features=[Feature.from_dict(item) for item in data.get("features", []) if isinstance(item, dict)],
            number_matched=data.get("numberMatched"),
            number_returned=data.get("numberReturned"),
            links=[Link.from_dict(item) for item in data.get("links", []) if isinstance(item, dict)],
            page_info=data.get("pageInfo") if isinstance(data.get("pageInfo"), dict) else None,
        )


@dataclass
class OperationPreflightResult:
    valid: bool
    errors: List[str] = field(default_factory=list)
    warnings: List[str] = field(default_factory=list)
    input_crs: Optional[str] = None
    resolved_params: Optional[JsonDict] = None
    result_kind: Optional[str] = None
    estimate: Optional[JsonDict] = None
    recommendation: Optional[JsonDict] = None
    recommend_async: Optional[bool] = None

    @classmethod
    def from_dict(cls, data: JsonDict) -> "OperationPreflightResult":
        return cls(
            valid=bool(data.get("valid", False)),
            errors=list(data.get("errors", []) or []),
            warnings=list(data.get("warnings", []) or []),
            input_crs=data.get("input_crs"),
            resolved_params=data.get("resolved_params") if isinstance(data.get("resolved_params"), dict) else None,
            result_kind=data.get("result_kind"),
            estimate=data.get("estimate") if isinstance(data.get("estimate"), dict) else None,
            recommendation=data.get("recommendation") if isinstance(data.get("recommendation"), dict) else None,
            recommend_async=data.get("recommend_async"),
        )


@dataclass
class OperationJobArtifact:
    format: str
    url: Optional[str] = None
    label: Optional[str] = None

    @classmethod
    def from_dict(cls, data: JsonDict) -> "OperationJobArtifact":
        return cls(
            format=data.get("format", ""),
            url=data.get("url"),
            label=data.get("label"),
        )


@dataclass
class OperationJobRecord:
    id: str
    status: Optional[str] = None
    progress: Optional[float] = None
    phase: Optional[str] = None
    operation: Optional[str] = None
    result: Any = None
    error: Optional[str] = None
    artifacts: List[OperationJobArtifact] = field(default_factory=list)
    created_at: Optional[str] = None
    started_at: Optional[str] = None
    done_at: Optional[str] = None
    extra: JsonDict = field(default_factory=dict)

    @classmethod
    def from_dict(cls, data: JsonDict) -> "OperationJobRecord":
        return cls(
            id=data.get("id", ""),
            status=data.get("status"),
            progress=data.get("progress"),
            phase=data.get("phase"),
            operation=data.get("operation"),
            result=data.get("result"),
            error=data.get("error"),
            artifacts=[OperationJobArtifact.from_dict(item) for item in data.get("artifacts", []) if isinstance(item, dict)],
            created_at=data.get("created_at"),
            started_at=data.get("started_at"),
            done_at=data.get("done_at"),
            extra=_extra(
                data,
                {
                    "id",
                    "status",
                    "progress",
                    "phase",
                    "operation",
                    "result",
                    "error",
                    "artifacts",
                    "created_at",
                    "started_at",
                    "done_at",
                },
            ),
        )


@dataclass
class SavedPipeline:
    id: str
    name: str
    description: Optional[str] = None
    graph: Any = None
    canvas: Any = None
    version: Optional[int] = None
    is_template: Optional[bool] = None
    template_category: Optional[str] = None
    tenant_id: Optional[int] = None
    created_at: Optional[str] = None
    updated_at: Optional[str] = None
    extra: JsonDict = field(default_factory=dict)

    @classmethod
    def from_dict(cls, data: JsonDict) -> "SavedPipeline":
        return cls(
            id=data.get("id", ""),
            name=data.get("name", ""),
            description=data.get("description"),
            graph=data.get("graph"),
            canvas=data.get("canvas"),
            version=data.get("version"),
            is_template=data.get("is_template"),
            template_category=data.get("template_category"),
            tenant_id=data.get("tenant_id"),
            created_at=data.get("created_at"),
            updated_at=data.get("updated_at"),
            extra=_extra(
                data,
                {
                    "id",
                    "name",
                    "description",
                    "graph",
                    "canvas",
                    "version",
                    "is_template",
                    "template_category",
                    "tenant_id",
                    "created_at",
                    "updated_at",
                },
            ),
        )


@dataclass
class PipelineExecutionResult:
    pipeline_id: Optional[str] = None
    status: Optional[str] = None
    node_count: Optional[int] = None
    edge_count: Optional[int] = None
    extra: JsonDict = field(default_factory=dict)

    @classmethod
    def from_dict(cls, data: JsonDict) -> "PipelineExecutionResult":
        return cls(
            pipeline_id=data.get("pipeline_id"),
            status=data.get("status"),
            node_count=data.get("node_count"),
            edge_count=data.get("edge_count"),
            extra=_extra(data, {"pipeline_id", "status", "node_count", "edge_count"}),
        )


@dataclass
class PipelineRun:
    id: Optional[str] = None
    pipeline_id: Optional[str] = None
    status: Optional[str] = None
    created_at: Optional[str] = None
    updated_at: Optional[str] = None
    extra: JsonDict = field(default_factory=dict)

    @classmethod
    def from_dict(cls, data: JsonDict) -> "PipelineRun":
        return cls(
            id=data.get("id"),
            pipeline_id=data.get("pipeline_id"),
            status=data.get("status"),
            created_at=data.get("created_at"),
            updated_at=data.get("updated_at"),
            extra=_extra(data, {"id", "pipeline_id", "status", "created_at", "updated_at"}),
        )


@dataclass
class Project:
    id: int
    name: str
    description: Optional[str] = None
    created_at: Optional[str] = None
    updated_at: Optional[str] = None
    extra: JsonDict = field(default_factory=dict)

    @classmethod
    def from_dict(cls, data: JsonDict) -> "Project":
        return cls(
            id=int(data.get("id", 0)),
            name=data.get("name", ""),
            description=data.get("description"),
            created_at=data.get("created_at"),
            updated_at=data.get("updated_at"),
            extra=_extra(data, {"id", "name", "description", "created_at", "updated_at"}),
        )


@dataclass
class ProjectWorkspace:
    project_id: int
    map_state: Any = None
    layer_styles: Any = None

    @classmethod
    def from_dict(cls, data: JsonDict) -> "ProjectWorkspace":
        return cls(
            project_id=int(data.get("project_id", 0)),
            map_state=data.get("map_state"),
            layer_styles=data.get("layer_styles"),
        )


@dataclass
class PublishMapResult:
    token: str
    url: Optional[str] = None
    embed_url: Optional[str] = None
    title: Optional[str] = None
    expires_at: Optional[str] = None
    extra: JsonDict = field(default_factory=dict)

    @classmethod
    def from_dict(cls, data: JsonDict) -> "PublishMapResult":
        return cls(
            token=data.get("token", ""),
            url=data.get("url"),
            embed_url=data.get("embed_url"),
            title=data.get("title"),
            expires_at=data.get("expires_at"),
            extra=_extra(data, {"token", "url", "embed_url", "title", "expires_at"}),
        )


__all__ = [
    "Collection",
    "Dataset",
    "Feature",
    "FeatureCollection",
    "HealthStatus",
    "Link",
    "OperationJobArtifact",
    "OperationJobRecord",
    "OperationPreflightResult",
    "PipelineExecutionResult",
    "PipelineRun",
    "Project",
    "ProjectWorkspace",
    "PublishMapResult",
    "SavedPipeline",
]
