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

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "FeatureCollection":
        """Construct a FeatureCollection from a raw dictionary."""
        features = [Feature.from_dict(f) for f in data.get("features", [])]
        return cls(
            type=data.get("type", "FeatureCollection"),
            features=features,
            number_matched=data.get("numberMatched"),
            number_returned=data.get("numberReturned"),
        )


@dataclass
class Collection:
    """An OGC API collection descriptor."""

    id: str
    name: str = ""
    path: str = ""
    format: str = ""
    crs: str = ""
    title: Optional[str] = None
    description: Optional[str] = None
    extent: Optional[Dict[str, Any]] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Collection":
        return cls(
            id=data.get("id", ""),
            name=data.get("name", ""),
            path=data.get("path", ""),
            format=data.get("format", ""),
            crs=data.get("crs", ""),
            title=data.get("title"),
            description=data.get("description"),
            extent=data.get("extent"),
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
    feature_count: Optional[int] = None
    bounds: Optional[List[float]] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Dataset":
        return cls(
            name=data.get("name", ""),
            path=data.get("path", ""),
            format=data.get("format", ""),
            crs=data.get("crs", ""),
            feature_count=data.get("feature_count"),
            bounds=data.get("bounds"),
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

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "ProcessResult":
        return cls(
            operation=data.get("operation", ""),
            input_features=data.get("input_features", 0),
            output_features=data.get("output_features", 0),
            duration_ms=data.get("duration_ms", 0),
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
    address: str = ""
    metadata: Optional[Dict[str, str]] = None
    bounds: Optional[Any] = None
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
            name=data.get("name", ""),
            address=data.get("address", ""),
            metadata=data.get("metadata"),
            bounds=data.get("bounds"),
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
    position: Optional[Any] = None
    properties: Optional[Dict[str, Any]] = None

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "IndoorAsset":
        return cls(
            id=data.get("id", ""),
            building_id=data.get("building_id", ""),
            name=data.get("name", ""),
            floor_id=data.get("floor_id", ""),
            space_id=data.get("space_id", ""),
            asset_type=data.get("asset_type", ""),
            position=data.get("position"),
            properties=data.get("properties"),
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
    format: str = ""
    status: str = ""
    path: str = ""
    feature_count: Optional[int] = None
    bounds: Optional[List[float]] = None
    created_at: str = ""
    updated_at: str = ""

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "HostedLayer":
        return cls(
            id=data.get("id", data.get("name", "")),
            name=data.get("name", ""),
            description=data.get("description", ""),
            format=data.get("format", ""),
            status=data.get("status", ""),
            path=data.get("path", ""),
            feature_count=data.get("feature_count"),
            bounds=data.get("bounds"),
            created_at=data.get("created_at", ""),
            updated_at=data.get("updated_at", ""),
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
    created_at: str = ""

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Attachment":
        return cls(
            id=data.get("id", ""),
            collection_id=data.get("collection_id", ""),
            feature_id=data.get("feature_id", ""),
            filename=data.get("filename", ""),
            content_type=data.get("content_type", ""),
            size=data.get("size", 0),
            created_at=data.get("created_at", ""),
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


# ---------------------------------------------------------------------------
# Health types
# ---------------------------------------------------------------------------


@dataclass
class HealthStatus:
    """Server health status."""

    status: str = ""
    version: str = ""
    uptime_seconds: int = 0

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "HealthStatus":
        return cls(
            status=data.get("status", ""),
            version=data.get("version", ""),
            uptime_seconds=data.get("uptime_seconds", 0),
        )
