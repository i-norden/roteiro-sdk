"""Fluent helper for ad hoc pipeline requests."""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import TYPE_CHECKING, Any, Dict, List, Optional

if TYPE_CHECKING:
    from .client import RoteiroClient


@dataclass
class _PipelineStep:
    operation: str
    params: Dict[str, Any] = field(default_factory=dict)


class Pipeline:
    def __init__(self, client: "RoteiroClient") -> None:
        self._client = client
        self._steps: List[_PipelineStep] = []

    def step(self, operation: str, params: Optional[Dict[str, Any]] = None) -> "Pipeline":
        self._steps.append(_PipelineStep(operation, dict(params or {})))
        return self

    def buffer(self, distance: float) -> "Pipeline":
        return self.step("buffer", {"distance": distance})

    def clip(self, mask: str) -> "Pipeline":
        return self.step("clip", {"mask": mask})

    def simplify(self, tolerance: float) -> "Pipeline":
        return self.step("simplify", {"tolerance": tolerance})

    def union(self) -> "Pipeline":
        return self.step("union")

    def sjoin(self, right: str, predicate: str = "intersects") -> "Pipeline":
        return self.step("sjoin", {"right": right, "predicate": predicate})

    def reproject(self, from_crs: str, to_crs: str) -> "Pipeline":
        return self.step("reproject", {"from_crs": from_crs, "to_crs": to_crs})

    def centroid(self) -> "Pipeline":
        return self.step("centroid")

    def convex_hull(self) -> "Pipeline":
        return self.step("convex_hull")

    def aggregate(self, group_by: str) -> "Pipeline":
        return self.step("dissolve", {"group_by": group_by})

    def interpolate(
        self,
        field_name: str,
        power: float = 2.0,
        cols: int = 100,
        rows: int = 100,
    ) -> "Pipeline":
        return self.step(
            "interpolate_idw",
            {"field": field_name, "power": power, "cols": cols, "rows": rows},
        )

    def to_request(
        self,
        *,
        input: Optional[str] = None,
        input_geojson: Any = None,
        register: Optional[bool] = None,
        output_name: Optional[str] = None,
    ) -> Dict[str, Any]:
        if not self._steps:
            raise ValueError("Pipeline has no steps to execute")

        request: Dict[str, Any] = {
            "steps": [{"operation": step.operation, "params": step.params} for step in self._steps]
        }
        if input is not None:
            request["input"] = input
        if input_geojson is not None:
            request["input_geojson"] = input_geojson
        if register is not None:
            request["register"] = register
        if output_name is not None:
            request["output_name"] = output_name
        return request

    def execute(
        self,
        input_data: str,
        *,
        register: Optional[bool] = None,
        output_name: Optional[str] = None,
    ) -> Any:
        return self._client.run_pipeline(
            self.to_request(input=input_data, register=register, output_name=output_name)
        )

    def execute_geojson(
        self,
        input_geojson: Any,
        *,
        register: Optional[bool] = None,
        output_name: Optional[str] = None,
    ) -> Any:
        return self._client.run_pipeline(
            self.to_request(
                input_geojson=input_geojson,
                register=register,
                output_name=output_name,
            )
        )
