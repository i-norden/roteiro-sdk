"""Data models for the Roteiro SDK.

All response types are defined as dataclasses for easy construction from JSON
dictionaries and convenient attribute access.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional


# ---------------------------------------------------------------------------
# Common / OGC types
# ---------------------------------------------------------------------------


@dataclass
class GeoJSONGeometry:
    """A GeoJSON geometry object."""

    type: str
    coordinates: Any


@dataclass
class Feature:
    """A GeoJSON Feature."""

    type: str = "Feature"
    id: Optional[str] = None
    geometry: Optional[Dict[str, Any]] = None
    properties: Dict[str, Any] = field(default_factory=dict)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Feature":
        """Construct a Feature from a raw dictionary."""
        return cls(
            type=data.get("type", "Feature"),
            id=data.get("id"),
            geometry=data.get("geometry"),
            properties=data.get("properties", {}),
        )


@dataclass
class FeatureCollection:
    """A GeoJSON FeatureCollection."""

    type: str = "FeatureCollection"
    features: List[Feature] = field(default_factory=list)
    number_matched: Optional[int] = None
    number_returned: Optional[int] = None
    links: List[Dict[str, Any]] = field(default_factory=list)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "FeatureCollection":
        """Construct a FeatureCollection from a raw dictionary."""
        features = [Feature.from_dict(f) for f in data.get("features", [])]
        return cls(
            type=data.get("type", "FeatureCollection"),
            features=features,
            number_matched=data.get("numberMatched"),
            number_returned=data.get("numberReturned"),
            links=list(data.get("links", []) or []),
        )


@dataclass
class Link:
    """An OGC-style hypermedia link."""

    href: str
    rel: str
    type: Optional[str] = None
    title: Optional[str] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Link":
        return cls(
            href=data.get("href", ""),
            rel=data.get("rel", ""),
            type=data.get("type"),
            title=data.get("title"),
        )


@dataclass
class Collection:
    """An OGC API collection descriptor."""

    id: str
    name: str = ""
    path: str = ""
    format: str = ""
    crs: str = ""
    storage_type: Optional[str] = None
    feature_count: Optional[int] = None
    geometry_type: Optional[str] = None
    title: Optional[str] = None
    description: Optional[str] = None
    extent: Optional[Dict[str, Any]] = None
    links: List[Link] = field(default_factory=list)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Collection":
        return cls(
            id=data.get("id", ""),
            name=data.get("name", ""),
            path=data.get("path", ""),
            format=data.get("format", ""),
            crs=data.get("crs", ""),
            storage_type=data.get("storage_type"),
            feature_count=data.get("feature_count"),
            geometry_type=data.get("geometryType"),
            title=data.get("title"),
            description=data.get("description"),
            extent=data.get("extent"),
            links=[
                Link.from_dict(item)
                for item in data.get("links", [])
                if isinstance(item, dict)
            ],
        )


# ---------------------------------------------------------------------------
# Dataset types
# ---------------------------------------------------------------------------


@dataclass
class Dataset:
    """A registered dataset."""

    name: str
    path: str
    format: str = ""
    crs: str = ""
    status: Optional[str] = None
    feature_count: Optional[int] = None
    bounds: Optional[List[float]] = None
    description: Optional[str] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Dataset":
        return cls(
            name=data.get("name", ""),
            path=data.get("path", ""),
            format=data.get("format", ""),
            crs=data.get("crs", ""),
            status=data.get("status"),
            feature_count=data.get("feature_count"),
            bounds=data.get("bounds"),
            description=data.get("description"),
        )


# ---------------------------------------------------------------------------
# Processing types
# ---------------------------------------------------------------------------


@dataclass
class ConvertResult:
    """Result of a format conversion operation."""

    message: str = ""
    duration_ms: int = 0
    dataset: Optional[Dataset] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "ConvertResult":
        ds = None
        if data.get("dataset"):
            ds = Dataset.from_dict(data["dataset"])
        return cls(
            message=data.get("message", ""),
            duration_ms=data.get("duration_ms", 0),
            dataset=ds,
        )


@dataclass
class ProcessResult:
    """Result of a spatial processing operation."""

    operation: str = ""
    input_features: int = 0
    output_features: int = 0
    duration_ms: int = 0
    warning: Optional[str] = None
    suggestions: List["WarningSuggestion"] = field(default_factory=list)
    dataset: Optional[Dataset] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "ProcessResult":
        suggestions = [
            WarningSuggestion.from_dict(item)
            for item in data.get("suggestions", [])
            if isinstance(item, dict)
        ]
        dataset = None
        if isinstance(data.get("dataset"), dict):
            dataset = Dataset.from_dict(data["dataset"])
        return cls(
            operation=data.get("operation", ""),
            input_features=data.get("input_features", 0),
            output_features=data.get("output_features", 0),
            duration_ms=data.get("duration_ms", 0),
            warning=data.get("warning"),
            suggestions=suggestions,
            dataset=dataset,
        )


@dataclass
class WarningSuggestion:
    """Suggested follow-up action for a processing warning."""

    label: str = ""
    operation: str = ""
    description: str = ""

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "WarningSuggestion":
        return cls(
            label=data.get("label", ""),
            operation=data.get("operation", ""),
            description=data.get("description", ""),
        )


@dataclass
class ProcessParamOption:
    """Allowed option for an enum processing parameter."""

    value: str = ""
    label: str = ""

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "ProcessParamOption":
        return cls(
            value=data.get("value", ""),
            label=data.get("label", ""),
        )


@dataclass
class ProcessingOperationParam:
    """Parameter metadata for a processing operation."""

    name: str = ""
    label: Optional[str] = None
    description: Optional[str] = None
    kind: str = ""
    required: bool = False
    default: Any = None
    options: List[ProcessParamOption] = field(default_factory=list)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "ProcessingOperationParam":
        options = [
            ProcessParamOption.from_dict(item)
            for item in data.get("options", [])
            if isinstance(item, dict)
        ]
        return cls(
            name=data.get("name", ""),
            label=data.get("label"),
            description=data.get("description"),
            kind=data.get("kind", ""),
            required=data.get("required", False),
            default=data.get("default"),
            options=options,
        )


@dataclass
class ProcessingOperation:
    """Rich processing operation metadata returned by the server catalog."""

    name: str = ""
    description: str = ""
    label: Optional[str] = None
    category: Optional[str] = None
    advanced: bool = False
    ui_available: Optional[bool] = None
    requires_projected_crs: bool = False
    params: List[ProcessingOperationParam] = field(default_factory=list)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "ProcessingOperation":
        raw_params = data.get("params", [])
        params = [
            ProcessingOperationParam.from_dict(item)
            for item in raw_params
            if isinstance(item, dict)
        ]
        return cls(
            name=data.get("name", ""),
            description=data.get("description", ""),
            label=data.get("label"),
            category=data.get("category"),
            advanced=data.get("advanced", False),
            ui_available=data.get("ui_available"),
            requires_projected_crs=data.get("requires_projected_crs", False),
            params=params,
        )


@dataclass
class ProcessPreflightResult:
    """Validation output for a processing request."""

    valid: bool = False
    errors: List[str] = field(default_factory=list)
    warnings: List[str] = field(default_factory=list)
    input_crs: Optional[str] = None
    resolved_params: Dict[str, Any] = field(default_factory=dict)
    recommend_async: bool = False

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "ProcessPreflightResult":
        return cls(
            valid=data.get("valid", False),
            errors=list(data.get("errors", []) or []),
            warnings=list(data.get("warnings", []) or []),
            input_crs=data.get("input_crs"),
            resolved_params=dict(data.get("resolved_params", {}) or {}),
            recommend_async=data.get("recommend_async", False),
        )


@dataclass
class ProcessJobArtifact:
    """Downloadable artifact produced by an async processing job."""

    format: str = ""
    url: str = ""
    label: Optional[str] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "ProcessJobArtifact":
        return cls(
            format=data.get("format", ""),
            url=data.get("url", ""),
            label=data.get("label"),
        )


@dataclass
class ProcessJobRecord:
    """Async processing job state."""

    id: str = ""
    type: str = ""
    status: str = ""
    progress: float = 0.0
    phase: Optional[str] = None
    operation: Optional[str] = None
    tenant_id: Optional[int] = None
    dependencies: List[str] = field(default_factory=list)
    cancellation_requested: bool = False
    cancellation_state: Optional[str] = None
    result: Optional[ProcessResult] = None
    error: Optional[str] = None
    failure_class: Optional[str] = None
    artifacts: List[ProcessJobArtifact] = field(default_factory=list)
    submitted_by: Optional[int] = None
    created_at: str = ""
    started_at: Optional[str] = None
    done_at: Optional[str] = None
    queue_ms: Optional[int] = None
    run_ms: Optional[int] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "ProcessJobRecord":
        result = None
        if isinstance(data.get("result"), dict):
            result = ProcessResult.from_dict(data["result"])
        artifacts = [
            ProcessJobArtifact.from_dict(item)
            for item in data.get("artifacts", [])
            if isinstance(item, dict)
        ]
        return cls(
            id=data.get("id", ""),
            type=data.get("type", ""),
            status=data.get("status", ""),
            progress=data.get("progress", 0.0),
            phase=data.get("phase"),
            operation=data.get("operation"),
            tenant_id=data.get("tenant_id"),
            dependencies=list(data.get("dependencies", []) or []),
            cancellation_requested=data.get("cancellation_requested", False),
            cancellation_state=data.get("cancellation_state"),
            result=result,
            error=data.get("error"),
            failure_class=data.get("failure_class"),
            artifacts=artifacts,
            submitted_by=data.get("submitted_by"),
            created_at=data.get("created_at", ""),
            started_at=data.get("started_at"),
            done_at=data.get("done_at"),
            queue_ms=data.get("queue_ms"),
            run_ms=data.get("run_ms"),
        )


@dataclass
class ProcessBatchSubmittedJob:
    """Submitted async processing job within a batch."""

    client_id: str = ""
    job: ProcessJobRecord = field(default_factory=ProcessJobRecord)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "ProcessBatchSubmittedJob":
        job_data = data.get("job", {})
        return cls(
            client_id=data.get("client_id", ""),
            job=ProcessJobRecord.from_dict(job_data if isinstance(job_data, dict) else {}),
        )


@dataclass
class ProcessBatchSubmitResponse:
    """Batch async processing submission response."""

    batch_id: str = ""
    jobs: List[ProcessBatchSubmittedJob] = field(default_factory=list)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "ProcessBatchSubmitResponse":
        jobs = [
            ProcessBatchSubmittedJob.from_dict(item)
            for item in data.get("jobs", [])
            if isinstance(item, dict)
        ]
        return cls(
            batch_id=data.get("batch_id", ""),
            jobs=jobs,
        )


@dataclass
class DiffSummary:
    """Summary of a dataset diff."""

    added: int = 0
    removed: int = 0
    modified: int = 0
    unchanged: int = 0
    duration_ms: int = 0

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "DiffSummary":
        return cls(
            added=data.get("added", 0),
            removed=data.get("removed", 0),
            modified=data.get("modified", 0),
            unchanged=data.get("unchanged", 0),
            duration_ms=data.get("duration_ms", 0),
        )


# ---------------------------------------------------------------------------
# VCS types
# ---------------------------------------------------------------------------


@dataclass
class Repo:
    """A spatial VCS repository."""

    path: str
    status: str = ""

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Repo":
        return cls(
            path=data.get("path", ""),
            status=data.get("status", ""),
        )


@dataclass
class Commit:
    """A VCS commit."""

    id: str = ""
    message: str = ""
    timestamp: str = ""
    parent: Optional[str] = None
    blob_hash: Optional[str] = None
    feature_count: Optional[int] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Commit":
        return cls(
            id=data.get("id", ""),
            message=data.get("message", ""),
            timestamp=data.get("timestamp", ""),
            parent=data.get("parent"),
            blob_hash=data.get("blob_hash"),
            feature_count=data.get("feature_count"),
        )


@dataclass
class DiffResult:
    """Result of a VCS diff operation, containing added/removed/modified features."""

    added: List[Dict[str, Any]] = field(default_factory=list)
    removed: List[Dict[str, Any]] = field(default_factory=list)
    modified: List[Dict[str, Any]] = field(default_factory=list)
    stats: Optional[Dict[str, int]] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "DiffResult":
        return cls(
            added=data.get("added", []),
            removed=data.get("removed", []),
            modified=data.get("modified", []),
            stats=data.get("stats"),
        )


# ---------------------------------------------------------------------------
# Indoor GIS types
# ---------------------------------------------------------------------------


@dataclass
class IndoorBuilding:
    """An indoor GIS building."""

    id: str
    name: str
    campus_id: Optional[str] = None
    address: str = ""
    metadata: Optional[Dict[str, str]] = None
    bounds: Optional[Any] = None
    created_by: Optional[int] = None
    created_at: str = ""
    updated_at: str = ""
    floors: Optional[List["IndoorFloor"]] = None
    transitions: Optional[List["IndoorTransition"]] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "IndoorBuilding":
        floors = None
        if data.get("floors"):
            floors = [IndoorFloor.from_dict(f) for f in data["floors"]]
        transitions = None
        if data.get("transitions"):
            transitions = [IndoorTransition.from_dict(t) for t in data["transitions"]]
        return cls(
            id=data.get("id", ""),
            campus_id=data.get("campus_id"),
            name=data.get("name", ""),
            address=data.get("address", ""),
            metadata=data.get("metadata"),
            bounds=data.get("bounds"),
            created_by=data.get("created_by"),
            created_at=data.get("created_at", ""),
            updated_at=data.get("updated_at", ""),
            floors=floors,
            transitions=transitions,
        )


@dataclass
class IndoorFloor:
    """A floor within a building."""

    id: str
    building_id: str = ""
    name: str = ""
    level: int = 0
    elevation: float = 0.0
    height: float = 0.0
    outline: Optional[Any] = None
    plan_image: Optional[str] = None
    plan_bounds: Optional[List[float]] = None
    created_at: str = ""

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "IndoorFloor":
        return cls(
            id=data.get("id", ""),
            building_id=data.get("building_id", ""),
            name=data.get("name", ""),
            level=data.get("level", 0),
            elevation=data.get("elevation", 0.0),
            height=data.get("height", 0.0),
            outline=data.get("outline"),
            plan_image=data.get("plan_image"),
            plan_bounds=data.get("plan_bounds"),
            created_at=data.get("created_at", ""),
        )


@dataclass
class IndoorSpace:
    """A space within a floor."""

    id: str
    floor_id: str = ""
    building_id: str = ""
    name: str = ""
    space_type: str = ""
    geometry: Optional[Any] = None
    navigable: bool = True
    capacity: Optional[int] = None
    area: Optional[float] = None
    properties: Optional[Dict[str, Any]] = None
    connections: Optional[List[str]] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "IndoorSpace":
        return cls(
            id=data.get("id", ""),
            floor_id=data.get("floor_id", ""),
            building_id=data.get("building_id", ""),
            name=data.get("name", ""),
            space_type=data.get("space_type", ""),
            geometry=data.get("geometry"),
            navigable=data.get("navigable", True),
            capacity=data.get("capacity"),
            area=data.get("area"),
            properties=data.get("properties"),
            connections=data.get("connections"),
        )


@dataclass
class IndoorTransition:
    """A transition (elevator, stairs, etc.) between floors."""

    id: str
    building_id: str = ""
    name: str = ""
    transition_type: str = ""
    connects_floors: List[int] = field(default_factory=list)
    accessible: bool = True
    bidirectional: bool = True
    space_ids: Optional[List[str]] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "IndoorTransition":
        return cls(
            id=data.get("id", ""),
            building_id=data.get("building_id", ""),
            name=data.get("name", ""),
            transition_type=data.get("transition_type", ""),
            connects_floors=data.get("connects_floors", []),
            accessible=data.get("accessible", True),
            bidirectional=data.get("bidirectional", True),
            space_ids=data.get("space_ids"),
        )


@dataclass
class IndoorAsset:
    """An asset tracked within a building."""

    id: str
    building_id: str = ""
    name: str = ""
    floor_id: str = ""
    space_id: str = ""
    asset_type: str = ""
    asset_category: str = ""
    position: Optional[Any] = None
    properties: Optional[Dict[str, Any]] = None
    status: str = ""
    last_seen: Optional[str] = None
    created_at: str = ""
    updated_at: str = ""

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "IndoorAsset":
        return cls(
            id=data.get("id", ""),
            building_id=data.get("building_id", ""),
            name=data.get("name", ""),
            floor_id=data.get("floor_id", ""),
            space_id=data.get("space_id", ""),
            asset_type=data.get("asset_type", ""),
            asset_category=data.get("asset_category", ""),
            position=data.get("position"),
            properties=data.get("properties"),
            status=data.get("status", ""),
            last_seen=data.get("last_seen"),
            created_at=data.get("created_at", ""),
            updated_at=data.get("updated_at", ""),
        )


@dataclass
class NavigationStep:
    """A single step in an indoor navigation path."""

    space_id: str = ""
    space_name: str = ""
    floor_level: int = 0
    instruction: str = ""
    distance: float = 0.0
    traversal_type: str = ""

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "NavigationStep":
        return cls(
            space_id=data.get("spaceId", data.get("space_id", "")),
            space_name=data.get("spaceName", data.get("space_name", "")),
            floor_level=data.get("floorLevel", data.get("floor_level", 0)),
            instruction=data.get("instruction", ""),
            distance=data.get("distance", 0.0),
            traversal_type=data.get("traversalType", data.get("traversal_type", "")),
        )


@dataclass
class NavigationResult:
    """The result of an indoor navigation request."""

    path: List[NavigationStep] = field(default_factory=list)
    total_distance: float = 0.0
    floor_changes: int = 0
    estimated_time_seconds: float = 0.0

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "NavigationResult":
        steps = [NavigationStep.from_dict(s) for s in data.get("path", [])]
        return cls(
            path=steps,
            total_distance=data.get("totalDistance", data.get("total_distance", 0.0)),
            floor_changes=data.get("floorChanges", data.get("floor_changes", 0)),
            estimated_time_seconds=data.get(
                "estimatedTimeSeconds",
                data.get("estimated_time_seconds", 0.0),
            ),
        )


@dataclass
class IndoorModel:
    """A parsed indoor model (from IndoorGML or IFC import)."""

    building: IndoorBuilding
    source_format: str = ""

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "IndoorModel":
        return cls(
            building=IndoorBuilding.from_dict(data),
            source_format=data.get("source_format", ""),
        )


# ---------------------------------------------------------------------------
# Hosted Layer types
# ---------------------------------------------------------------------------


@dataclass
class HostedLayer:
    """A hosted layer (uploaded, published, or archived)."""

    id: str = ""
    name: str = ""
    description: str = ""
    owner_id: Optional[int] = None
    status: str = ""
    source_format: str = ""
    source_path: str = ""
    published_path: Optional[str] = None
    feature_count: Optional[int] = None
    bbox: Optional[List[float]] = None
    crs: str = ""
    properties: Optional[Dict[str, Any]] = None
    style: Optional[Dict[str, Any]] = None
    tags: List[str] = field(default_factory=list)
    created_at: str = ""
    updated_at: str = ""
    published_at: Optional[str] = None
    error_message: Optional[str] = None
    format: str = ""
    path: str = ""
    bounds: Optional[List[float]] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "HostedLayer":
        return cls(
            id=data.get("id", data.get("name", "")),
            name=data.get("name", ""),
            description=data.get("description", ""),
            owner_id=data.get("owner_id"),
            status=data.get("status", ""),
            source_format=data.get("source_format", ""),
            source_path=data.get("source_path", ""),
            published_path=data.get("published_path"),
            feature_count=data.get("feature_count"),
            bbox=data.get("bbox"),
            crs=data.get("crs", ""),
            properties=data.get("properties"),
            style=data.get("style"),
            tags=list(data.get("tags", []) or []),
            created_at=data.get("created_at", ""),
            updated_at=data.get("updated_at", ""),
            published_at=data.get("published_at"),
            error_message=data.get("error_message"),
            format=data.get("format", data.get("source_format", "")),
            path=data.get("path", data.get("source_path", "")),
            bounds=data.get("bounds", data.get("bbox")),
        )


# ---------------------------------------------------------------------------
# Attachment types
# ---------------------------------------------------------------------------


@dataclass
class Attachment:
    """A file attachment on a feature."""

    id: str = ""
    collection_id: str = ""
    feature_id: str = ""
    filename: str = ""
    content_type: str = ""
    size: int = 0
    size_bytes: int = 0
    description: str = ""
    metadata: Dict[str, Any] = field(default_factory=dict)
    uploaded_by: Optional[int] = None
    created_at: str = ""
    download_url: Optional[str] = None
    thumbnail_url: Optional[str] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Attachment":
        return cls(
            id=data.get("id", ""),
            collection_id=data.get("collection_id", ""),
            feature_id=data.get("feature_id", ""),
            filename=data.get("filename", ""),
            content_type=data.get("content_type", ""),
            size=data.get("size", data.get("size_bytes", 0)),
            size_bytes=data.get("size_bytes", data.get("size", 0)),
            description=data.get("description", ""),
            metadata=dict(data.get("metadata", {}) or {}),
            uploaded_by=data.get("uploaded_by"),
            created_at=data.get("created_at", ""),
            download_url=data.get("download_url"),
            thumbnail_url=data.get("thumbnail_url"),
        )


# ---------------------------------------------------------------------------
# Raster Analysis types
# ---------------------------------------------------------------------------


@dataclass
class ZonalStatsResult:
    """Result of zonal statistics analysis."""

    zones: List[Dict[str, Any]] = field(default_factory=list)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "ZonalStatsResult":
        return cls(zones=data.get("zones", data if isinstance(data, list) else []))


@dataclass
class RasterBounds:
    """Raster bounds in projected or geographic coordinates."""

    min_x: float = 0.0
    min_y: float = 0.0
    max_x: float = 0.0
    max_y: float = 0.0

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "RasterBounds":
        return cls(
            min_x=data.get("min_x", 0.0),
            min_y=data.get("min_y", 0.0),
            max_x=data.get("max_x", 0.0),
            max_y=data.get("max_y", 0.0),
        )


@dataclass
class RasterInfo:
    """Raster dataset metadata."""

    width: int = 0
    height: int = 0
    num_bands: int = 0
    crs: Optional[str] = None
    bounds: Optional[RasterBounds] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "RasterInfo":
        bounds = None
        if isinstance(data.get("bounds"), dict):
            bounds = RasterBounds.from_dict(data["bounds"])
        return cls(
            width=data.get("width", 0),
            height=data.get("height", 0),
            num_bands=data.get("num_bands", 0),
            crs=data.get("crs"),
            bounds=bounds,
        )


@dataclass
class RasterStats:
    """Statistics for a raster band."""

    min: float = 0.0
    max: float = 0.0
    mean: float = 0.0
    stddev: float = 0.0

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "RasterStats":
        return cls(
            min=data.get("min", 0.0),
            max=data.get("max", 0.0),
            mean=data.get("mean", 0.0),
            stddev=data.get("stddev", 0.0),
        )


@dataclass
class RasterHistogram:
    """Histogram and percentile summary for a raster band."""

    band: int = 0
    sample_count: int = 0
    min: float = 0.0
    max: float = 0.0
    mean: float = 0.0
    stddev: float = 0.0
    p1: float = 0.0
    p2: float = 0.0
    p98: float = 0.0
    p99: float = 0.0
    histogram: List[int] = field(default_factory=list)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "RasterHistogram":
        return cls(
            band=data.get("band", 0),
            sample_count=data.get("sample_count", 0),
            min=data.get("min", 0.0),
            max=data.get("max", 0.0),
            mean=data.get("mean", 0.0),
            stddev=data.get("stddev", 0.0),
            p1=data.get("p1", 0.0),
            p2=data.get("p2", 0.0),
            p98=data.get("p98", 0.0),
            p99=data.get("p99", 0.0),
            histogram=list(data.get("histogram", []) or []),
        )


@dataclass
class RasterDimensions:
    """Band and temporal metadata for a raster dataset."""

    temporal: bool = False
    times: List[str] = field(default_factory=list)
    min_band: int = 0
    max_band: int = 0

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "RasterDimensions":
        return cls(
            temporal=data.get("temporal", False),
            times=list(data.get("times", []) or []),
            min_band=data.get("min_band", 0),
            max_band=data.get("max_band", 0),
        )


@dataclass
class RasterBandValues:
    """Downsampled raster band values for inspection."""

    dem: List[List[float]] = field(default_factory=list)
    cell_size: float = 0.0
    width: int = 0
    height: int = 0
    bounds: Optional[List[float]] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "RasterBandValues":
        return cls(
            dem=list(data.get("dem", []) or []),
            cell_size=data.get("cell_size", 0.0),
            width=data.get("width", 0),
            height=data.get("height", 0),
            bounds=data.get("bounds"),
        )


@dataclass
class RasterExportResult:
    """Result of exporting a raster band."""

    message: str = ""

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "RasterExportResult":
        return cls(message=data.get("message", ""))


@dataclass
class RasterMosaicEntry:
    """Single raster entry in a mosaic metadata response."""

    name: str = ""
    width: int = 0
    height: int = 0
    num_bands: int = 0
    crs: Optional[str] = None
    bounds: Optional[RasterBounds] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "RasterMosaicEntry":
        bounds = None
        if isinstance(data.get("bounds"), dict):
            bounds = RasterBounds.from_dict(data["bounds"])
        return cls(
            name=data.get("name", ""),
            width=data.get("width", 0),
            height=data.get("height", 0),
            num_bands=data.get("num_bands", 0),
            crs=data.get("crs"),
            bounds=bounds,
        )


@dataclass
class RasterMosaicInfo:
    """Combined metadata for a raster mosaic request."""

    rasters: List[RasterMosaicEntry] = field(default_factory=list)
    combined_bounds: Optional[RasterBounds] = None
    count: int = 0

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "RasterMosaicInfo":
        combined_bounds = None
        if isinstance(data.get("combined_bounds"), dict):
            combined_bounds = RasterBounds.from_dict(data["combined_bounds"])
        return cls(
            rasters=[
                RasterMosaicEntry.from_dict(item)
                for item in data.get("rasters", [])
                if isinstance(item, dict)
            ],
            combined_bounds=combined_bounds,
            count=data.get("count", 0),
        )


@dataclass
class RasterGridResult:
    """Raster grid result returned as width/height/data arrays."""

    width: int = 0
    height: int = 0
    data: List[float] = field(default_factory=list)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "RasterGridResult":
        return cls(
            width=data.get("width", 0),
            height=data.get("height", 0),
            data=list(data.get("data", []) or []),
        )


@dataclass
class ElevationProfileSample:
    """Single elevation profile sample."""

    distance: float = 0.0
    elevation: float = 0.0
    x: float = 0.0
    y: float = 0.0

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "ElevationProfileSample":
        return cls(
            distance=data.get("distance", 0.0),
            elevation=data.get("elevation", 0.0),
            x=data.get("x", 0.0),
            y=data.get("y", 0.0),
        )


@dataclass
class ElevationProfileResult:
    """Collection of elevation profile samples."""

    samples: List[ElevationProfileSample] = field(default_factory=list)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "ElevationProfileResult":
        return cls(
            samples=[
                ElevationProfileSample.from_dict(item)
                for item in data.get("samples", [])
                if isinstance(item, dict)
            ]
        )


# ---------------------------------------------------------------------------
# Health types
# ---------------------------------------------------------------------------


@dataclass
class HealthStatus:
    """Server health status."""

    status: str = ""
    version: str = ""
    uptime: int = 0
    uptime_seconds: int = 0
    database: Optional[Dict[str, Any]] = None
    storage: Optional[Dict[str, Any]] = None
    engine: Optional[Dict[str, Any]] = None
    metrics: Optional[Dict[str, Any]] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "HealthStatus":
        uptime_seconds = data.get("uptime_seconds", data.get("uptime", 0))
        return cls(
            status=data.get("status", ""),
            version=data.get("version", ""),
            uptime=uptime_seconds,
            uptime_seconds=uptime_seconds,
            database=data.get("database"),
            storage=data.get("storage"),
            engine=data.get("engine"),
            metrics=data.get("metrics"),
        )
