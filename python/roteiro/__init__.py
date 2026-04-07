"""Python SDK for Cairn's current public API."""

from .client import (
    RoteiroAPIError,
    RoteiroClient,
    RoteiroConnectionError,
    RoteiroError,
    RoteiroTimeoutError,
)
from .generated import RoteiroGeneratedApi
from .models import (
    Collection,
    Dataset,
    Feature,
    FeatureCollection,
    HealthStatus,
    Link,
    OperationJobArtifact,
    OperationJobRecord,
    OperationPreflightResult,
    PipelineExecutionResult,
    PipelineRun,
    Project,
    ProjectWorkspace,
    PublishMapResult,
    SavedPipeline,
)
from .pipeline import Pipeline

__version__ = "0.3.0"

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
    "Pipeline",
    "PipelineExecutionResult",
    "PipelineRun",
    "Project",
    "ProjectWorkspace",
    "PublishMapResult",
    "RoteiroAPIError",
    "RoteiroClient",
    "RoteiroConnectionError",
    "RoteiroError",
    "RoteiroGeneratedApi",
    "RoteiroTimeoutError",
    "SavedPipeline",
]
