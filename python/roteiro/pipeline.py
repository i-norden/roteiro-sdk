"""Spatial processing pipeline builder.

Provides a fluent ``Pipeline`` class that lets you chain geospatial operations
and then execute the full pipeline against the Roteiro server.  Each step is
sent sequentially to ``POST /api/process``, with intermediate results piped
through as inline GeoJSON.

Example::

    from roteiro import RoteiroClient, Pipeline

    client = RoteiroClient("http://localhost:8080")
    result = (
        Pipeline(client)
        .buffer(distance=100)
        .simplify(tolerance=10)
        .reproject(from_crs="EPSG:4326", to_crs="EPSG:3857")
        .execute("my_dataset")
    )
"""

from __future__ import annotations

import json
from dataclasses import dataclass, field
from typing import TYPE_CHECKING, Any, Dict, List, Optional, Union

if TYPE_CHECKING:
    from .client import RoteiroClient


@dataclass
class _PipelineStep:
    """A single operation in the pipeline."""

    operation: str
    params: Dict[str, Any] = field(default_factory=dict)


class Pipeline:
    """A chainable spatial processing pipeline builder.

    Build a pipeline by chaining operation methods, then call ``execute()``
    to run all steps on the server.

    Args:
        client: An initialised RoteiroClient instance.
    """

    def __init__(self, client: RoteiroClient) -> None:
        self._client = client
        self._steps: List[_PipelineStep] = []

    # ------------------------------------------------------------------
    # Geometry operations
    # ------------------------------------------------------------------

    def buffer(self, distance: float) -> "Pipeline":
        """Add a buffer operation.

        Creates a polygon around each feature at the given distance.

        Args:
            distance: Buffer distance in the dataset's CRS units.

        Returns:
            The pipeline instance for chaining.
        """
        self._steps.append(_PipelineStep("buffer", {"distance": distance}))
        return self

    def clip(self, mask: str) -> "Pipeline":
        """Add a clip operation.

        Clips features to the boundary of a mask dataset.

        Args:
            mask: Name of the mask dataset.

        Returns:
            The pipeline instance for chaining.
        """
        self._steps.append(_PipelineStep("clip", {"mask": mask}))
        return self

    def simplify(self, tolerance: float) -> "Pipeline":
        """Add a simplify operation.

        Simplifies geometries using the Douglas-Peucker algorithm.

        Args:
            tolerance: Simplification tolerance in CRS units.

        Returns:
            The pipeline instance for chaining.
        """
        self._steps.append(_PipelineStep("simplify", {"tolerance": tolerance}))
        return self

    def union(self) -> "Pipeline":
        """Add a union (dissolve) operation.

        Merges all features into a single geometry.

        Returns:
            The pipeline instance for chaining.
        """
        self._steps.append(_PipelineStep("union", {}))
        return self

    def intersect(self, mask: str) -> "Pipeline":
        """Add an intersection operation.

        Computes the geometric intersection of features with a mask dataset.

        Args:
            mask: Name of the mask dataset.

        Returns:
            The pipeline instance for chaining.
        """
        self._steps.append(_PipelineStep("clip", {"mask": mask}))
        return self

    def sjoin(self, right: str, predicate: str = "intersects") -> "Pipeline":
        """Add a spatial join operation.

        Joins attributes from a right dataset based on spatial relationships.

        Args:
            right: Name of the right dataset to join.
            predicate: Spatial predicate (``intersects``, ``contains``, ``within``).

        Returns:
            The pipeline instance for chaining.
        """
        self._steps.append(
            _PipelineStep("sjoin", {"right": right, "predicate": predicate})
        )
        return self

    def reproject(self, from_crs: str, to_crs: str) -> "Pipeline":
        """Add a reprojection operation.

        Transforms feature geometries from one CRS to another.

        Args:
            from_crs: Source CRS identifier (e.g. ``EPSG:4326``).
            to_crs: Target CRS identifier (e.g. ``EPSG:3857``).

        Returns:
            The pipeline instance for chaining.
        """
        self._steps.append(
            _PipelineStep("reproject", {"from_crs": from_crs, "to_crs": to_crs})
        )
        return self

    def centroid(self) -> "Pipeline":
        """Add a centroid operation.

        Replaces each feature's geometry with its centroid point.

        Returns:
            The pipeline instance for chaining.
        """
        self._steps.append(_PipelineStep("centroid", {}))
        return self

    def convex_hull(self) -> "Pipeline":
        """Add a convex hull operation.

        Replaces each feature's geometry with its convex hull polygon.

        Returns:
            The pipeline instance for chaining.
        """
        self._steps.append(_PipelineStep("convex_hull", {}))
        return self

    # ------------------------------------------------------------------
    # Analysis operations
    # ------------------------------------------------------------------

    def aggregate(self, group_by: str) -> "Pipeline":
        """Add an aggregation (dissolve-by-attribute) operation.

        Groups features by the specified field and dissolves their geometries.

        Args:
            group_by: Attribute name to group features by.

        Returns:
            The pipeline instance for chaining.
        """
        self._steps.append(_PipelineStep("dissolve", {"group_by": group_by}))
        return self

    def spatial_stats(self) -> "Pipeline":
        """Add a spatial statistics operation.

        Calculates area, length, and perimeter for each feature.

        Returns:
            The pipeline instance for chaining.
        """
        self._steps.append(_PipelineStep("spatial_stats", {}))
        return self

    def interpolate(
        self,
        field_name: str,
        power: float = 2.0,
        cols: int = 100,
        rows: int = 100,
    ) -> "Pipeline":
        """Add an IDW interpolation operation.

        Performs inverse distance weighted interpolation to generate a grid.

        Args:
            field_name: Attribute field with numeric values to interpolate.
            power: Distance weighting power (higher = more local influence).
            cols: Number of output grid columns.
            rows: Number of output grid rows.

        Returns:
            The pipeline instance for chaining.
        """
        self._steps.append(
            _PipelineStep(
                "interpolate_idw",
                {"field": field_name, "power": power, "cols": cols, "rows": rows},
            )
        )
        return self

    # ------------------------------------------------------------------
    # Execution
    # ------------------------------------------------------------------

    def execute(self, input_data: str) -> Any:
        """Execute the pipeline against the server.

        Runs each step sequentially.  The first step uses the named dataset
        as input; subsequent steps use the inline GeoJSON output from the
        previous step.

        Args:
            input_data: Name of the input dataset to start the pipeline with.

        Returns:
            The final GeoJSON result as a dictionary if the pipeline produces
            inline output, otherwise the ProcessResult from the last step.

        Raises:
            ValueError: If the pipeline has no steps.
        """
        if not self._steps:
            raise ValueError("Pipeline has no steps to execute")

        result: Any = None

        for i, step in enumerate(self._steps):
            body: Dict[str, Any] = {
                "operation": step.operation,
                "params": step.params,
            }

            if i == 0:
                # First step: use the named dataset.
                body["input"] = input_data
            else:
                # Subsequent steps: pipe inline GeoJSON from previous result.
                if isinstance(result, dict) and result.get("type") in (
                    "FeatureCollection",
                    "Feature",
                ):
                    body["input_geojson"] = result
                else:
                    # If the previous step didn't return GeoJSON, re-use the
                    # original dataset name (the server wrote output to a file).
                    body["input"] = input_data

            # Request inline GeoJSON for intermediate steps so we can chain.
            is_last = i == len(self._steps) - 1
            body["output_format"] = "geojson"

            result = self._client._post("/api/process", body)

        return result
