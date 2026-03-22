"""Roteiro Python SDK -- a full-featured client for the Roteiro GIS API.

Quick start::

    from roteiro import RoteiroClient, Pipeline

    client = RoteiroClient("http://localhost:8080", api_key="...")

    # List collections
    collections = client.list_collections()

    # Query features
    features = client.get_items("buildings", bbox="-73.99,40.74,-73.97,40.76", limit=50)

    # Run a processing pipeline
    result = (
        Pipeline(client)
        .buffer(distance=100)
        .simplify(tolerance=10)
        .execute("parcels")
    )
"""

from .client import (
    RoteiroAPIError,
    RoteiroClient,
    RoteiroConnectionError,
    RoteiroError,
    RoteiroTimeoutError,
)
from .models import (
    Attachment,
    Collection,
    Commit,
    ConvertResult,
    Dataset,
    DiffResult,
    DiffSummary,
    ElevationProfileResult,
    ElevationProfileSample,
    Feature,
    FeatureCollection,
    HealthStatus,
    HostedLayer,
    Link,
    PipelineExecutionResult,
    PipelineRecord,
    ProcessBatchSubmitResponse,
    ProcessJobRecord,
    ProcessPreflightResult,
    ProcessResult,
    RasterBandValues,
    RasterBounds,
    RasterDimensions,
    RasterExportResult,
    RasterGridResult,
    RasterHistogram,
    RasterInfo,
    RasterMosaicEntry,
    RasterMosaicInfo,
    RasterStats,
    Repo,
    WarningSuggestion,
    ZonalStatsResult,
)
from .pipeline import Pipeline
from .generated import RoteiroGeneratedApi

__version__ = "0.2.0"

__all__ = [
    # Client
    "RoteiroClient",
    "RoteiroError",
    "RoteiroAPIError",
    "RoteiroConnectionError",
    "RoteiroTimeoutError",
    # Pipeline
    "Pipeline",
    # Full generated API client
    "RoteiroGeneratedApi",
    # Models
    "Attachment",
    "Collection",
    "Commit",
    "ConvertResult",
    "Dataset",
    "DiffResult",
    "DiffSummary",
    "ElevationProfileResult",
    "ElevationProfileSample",
    "Feature",
    "FeatureCollection",
    "HealthStatus",
    "HostedLayer",
    "Link",
    "PipelineExecutionResult",
    "PipelineRecord",
    "ProcessBatchSubmitResponse",
    "ProcessJobRecord",
    "ProcessPreflightResult",
    "ProcessResult",
    "RasterBandValues",
    "RasterBounds",
    "RasterDimensions",
    "RasterExportResult",
    "RasterGridResult",
    "RasterHistogram",
    "RasterInfo",
    "RasterMosaicEntry",
    "RasterMosaicInfo",
    "RasterStats",
    "Repo",
    "WarningSuggestion",
    "ZonalStatsResult",
    # Sub-modules (importable for standalone function usage)
    "analysis",
    "collections",
    "layers",
    "vcs",
    "pipeline",
    "attachments",
    "raster",
]

# Make sub-modules importable as roteiro.collections, roteiro.vcs, etc.
from . import analysis, attachments, collections, layers, raster, vcs
