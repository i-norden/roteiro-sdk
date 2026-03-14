"""Indoor GIS operations.

Provides functions for managing indoor buildings, floors, spaces, assets,
navigation, and importing IndoorGML/IFC models.
"""

from __future__ import annotations

from typing import TYPE_CHECKING, Any, Dict, List, Optional

from .client import _encode_path_value, _with_query
from .models import (
    IndoorAsset,
    IndoorBuilding,
    IndoorFloor,
    IndoorModel,
    IndoorSpace,
    NavigationResult,
)

if TYPE_CHECKING:
    from .client import RoteiroClient


# ---------------------------------------------------------------------------
# Building CRUD
# ---------------------------------------------------------------------------


def list_buildings(client: RoteiroClient) -> List[IndoorBuilding]:
    """List all indoor buildings.

    Args:
        client: An initialised RoteiroClient instance.

    Returns:
        A list of IndoorBuilding objects.
    """
    data = client._get("/api/indoor/buildings")
    return [IndoorBuilding.from_dict(b) for b in data]


def get_building(client: RoteiroClient, building_id: str) -> IndoorBuilding:
    """Get a building with its floors and transitions.

    Args:
        client: An initialised RoteiroClient instance.
        building_id: The building identifier.

    Returns:
        An IndoorBuilding object with nested floors and transitions.
    """
    data = client._get(f"/api/indoor/buildings/{_encode_path_value(building_id)}")
    return IndoorBuilding.from_dict(data)


def create_building(client: RoteiroClient, data: Dict[str, Any]) -> IndoorBuilding:
    """Create a new building with optional floors, spaces, and transitions.

    Args:
        client: An initialised RoteiroClient instance.
        data: Building definition dict with ``id``, ``name``, and optionally
            ``address``, ``metadata``, ``floors``, and ``transitions``.

    Returns:
        The created IndoorBuilding.
    """
    resp = client._post("/api/indoor/buildings", data)
    return IndoorBuilding.from_dict(resp)


def update_building(
    client: RoteiroClient,
    building_id: str,
    data: Dict[str, Any],
) -> IndoorBuilding:
    """Update an existing building's metadata.

    Args:
        client: An initialised RoteiroClient instance.
        building_id: The building identifier.
        data: Fields to update (``name``, ``address``, ``metadata``, ``bounds``).

    Returns:
        The updated IndoorBuilding.
    """
    resp = client._put(
        f"/api/indoor/buildings/{_encode_path_value(building_id)}",
        data,
    )
    return IndoorBuilding.from_dict(resp)


def delete_building(client: RoteiroClient, building_id: str) -> None:
    """Delete a building and all its associated data.

    Args:
        client: An initialised RoteiroClient instance.
        building_id: The building identifier.
    """
    client._delete(f"/api/indoor/buildings/{_encode_path_value(building_id)}")


# ---------------------------------------------------------------------------
# Floor operations
# ---------------------------------------------------------------------------


def list_floors(client: RoteiroClient, building_id: str) -> List[IndoorFloor]:
    """List all floors in a building.

    Args:
        client: An initialised RoteiroClient instance.
        building_id: The building identifier.

    Returns:
        A list of IndoorFloor objects.
    """
    data = client._get(
        f"/api/indoor/buildings/{_encode_path_value(building_id)}/floors"
    )
    return [IndoorFloor.from_dict(f) for f in data]


def create_floor(
    client: RoteiroClient,
    building_id: str,
    floor_data: Dict[str, Any],
) -> IndoorFloor:
    """Create a new floor in a building.

    Args:
        client: An initialised RoteiroClient instance.
        building_id: The building identifier.
        floor_data: Floor definition with ``id``, ``name``, ``level``, etc.

    Returns:
        The created IndoorFloor.
    """
    resp = client._post(
        f"/api/indoor/buildings/{_encode_path_value(building_id)}/floors",
        floor_data,
    )
    return IndoorFloor.from_dict(resp)


# ---------------------------------------------------------------------------
# Space operations
# ---------------------------------------------------------------------------


def list_spaces(
    client: RoteiroClient,
    building_id: str,
    level: int,
) -> List[IndoorSpace]:
    """List all spaces on a given floor level.

    Args:
        client: An initialised RoteiroClient instance.
        building_id: The building identifier.
        level: The floor level number.

    Returns:
        A list of IndoorSpace objects.
    """
    data = client._get(
        f"/api/indoor/buildings/{_encode_path_value(building_id)}/floors/{_encode_path_value(level)}/spaces"
    )
    return [IndoorSpace.from_dict(s) for s in data]


def create_space(
    client: RoteiroClient,
    building_id: str,
    space_data: Dict[str, Any],
) -> IndoorSpace:
    """Create a new space in a building.

    Args:
        client: An initialised RoteiroClient instance.
        building_id: The building identifier.
        space_data: Space definition with ``id``, ``floor_id``, ``name``, etc.

    Returns:
        The created IndoorSpace.
    """
    resp = client._post(
        f"/api/indoor/buildings/{_encode_path_value(building_id)}/spaces",
        space_data,
    )
    return IndoorSpace.from_dict(resp)


def get_space(
    client: RoteiroClient,
    building_id: str,
    space_id: str,
) -> IndoorSpace:
    """Get a specific space within a building.

    Args:
        client: An initialised RoteiroClient instance.
        building_id: The building identifier.
        space_id: The space identifier.

    Returns:
        An IndoorSpace object.
    """
    data = client._get(
        f"/api/indoor/buildings/{_encode_path_value(building_id)}/spaces/{_encode_path_value(space_id)}"
    )
    return IndoorSpace.from_dict(data)


# ---------------------------------------------------------------------------
# Asset operations
# ---------------------------------------------------------------------------


def list_assets(
    client: RoteiroClient,
    building_id: str,
    floor_id: Optional[str] = None,
    space_id: Optional[str] = None,
) -> List[IndoorAsset]:
    """List assets in a building, optionally filtered by floor or space.

    Args:
        client: An initialised RoteiroClient instance.
        building_id: The building identifier.
        floor_id: Optional floor ID to filter by.
        space_id: Optional space ID to filter by.

    Returns:
        A list of IndoorAsset objects.
    """
    path = _with_query(
        f"/api/indoor/buildings/{_encode_path_value(building_id)}/assets",
        [("floor", floor_id), ("space", space_id)],
    )
    data = client._get(path)
    return [IndoorAsset.from_dict(a) for a in data]


def create_asset(
    client: RoteiroClient,
    building_id: str,
    asset_data: Dict[str, Any],
) -> IndoorAsset:
    """Create a new asset in a building.

    Args:
        client: An initialised RoteiroClient instance.
        building_id: The building identifier.
        asset_data: Asset definition with ``id``, ``name``, ``floor_id``,
            ``space_id``, etc.

    Returns:
        The created IndoorAsset.
    """
    resp = client._post(
        f"/api/indoor/buildings/{_encode_path_value(building_id)}/assets",
        asset_data,
    )
    return IndoorAsset.from_dict(resp)


# ---------------------------------------------------------------------------
# Navigation
# ---------------------------------------------------------------------------


def find_path(
    client: RoteiroClient,
    building_id: str,
    from_space: str,
    to_space: str,
    accessible_only: bool = False,
) -> NavigationResult:
    """Find an indoor navigation path between two spaces.

    Args:
        client: An initialised RoteiroClient instance.
        building_id: The building identifier.
        from_space: Source space ID.
        to_space: Destination space ID.
        accessible_only: If True, only use accessible transitions.

    Returns:
        A NavigationResult with path steps, total distance, and time estimate.
    """
    data = client._post(
        "/api/indoor/navigate",
        {
            "building_id": building_id,
            "from": from_space,
            "to": to_space,
            "accessible_only": accessible_only,
        },
    )
    return NavigationResult.from_dict(data)


def find_nearest(
    client: RoteiroClient,
    building_id: str,
    from_space: str,
    target_type: str,
    accessible_only: bool = False,
) -> NavigationResult:
    """Find the nearest space of a given type from a starting space.

    Args:
        client: An initialised RoteiroClient instance.
        building_id: The building identifier.
        from_space: Source space ID.
        target_type: Type of space to search for (e.g. ``restroom``, ``exit``).
        accessible_only: If True, only use accessible transitions.

    Returns:
        A NavigationResult with path steps, total distance, and time estimate.
    """
    data = client._post(
        "/api/indoor/navigate/nearest",
        {
            "building_id": building_id,
            "from": from_space,
            "target_type": target_type,
            "accessible_only": accessible_only,
        },
    )
    return NavigationResult.from_dict(data)


# ---------------------------------------------------------------------------
# Import
# ---------------------------------------------------------------------------


def parse_indoor_gml(client: RoteiroClient, file_path: str) -> IndoorModel:
    """Import and parse an IndoorGML file.

    Uploads the file to the server for parsing and creates the building
    model in the indoor GIS system.

    Args:
        client: An initialised RoteiroClient instance.
        file_path: Local path to the IndoorGML (.gml/.xml) file.

    Returns:
        An IndoorModel containing the parsed building.
    """
    data = client._upload_file("/api/indoor/import", file_path)
    return IndoorModel.from_dict(data)


def import_ifc(client: RoteiroClient, file_path: str) -> IndoorModel:
    """Import and parse an IFC (Industry Foundation Classes) file.

    Uploads the file to the server for parsing and creates the building
    model in the indoor GIS system.

    Args:
        client: An initialised RoteiroClient instance.
        file_path: Local path to the IFC file.

    Returns:
        An IndoorModel containing the parsed building.
    """
    data = client._upload_file("/api/indoor/import", file_path)
    return IndoorModel.from_dict(data)


# ---------------------------------------------------------------------------
# Occupancy & Analytics
# ---------------------------------------------------------------------------


def get_occupancy(client: RoteiroClient, building_id: str) -> Dict[str, Any]:
    """Get occupancy analytics for a building.

    Args:
        client: An initialised RoteiroClient instance.
        building_id: The building identifier.

    Returns:
        A dictionary with occupancy data per floor and space.
    """
    return client._get(
        f"/api/indoor/buildings/{_encode_path_value(building_id)}/occupancy"
    )


def get_evacuation_routes(
    client: RoteiroClient,
    building_id: str,
    params: Optional[Dict[str, Any]] = None,
) -> Dict[str, Any]:
    """Compute evacuation routes for a building.

    Args:
        client: An initialised RoteiroClient instance.
        building_id: The building identifier.
        params: Optional parameters for evacuation routing.

    Returns:
        A dictionary with evacuation route data.
    """
    return client._post(
        f"/api/indoor/buildings/{_encode_path_value(building_id)}/evacuation",
        params or {},
    )
