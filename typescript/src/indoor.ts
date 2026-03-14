/**
 * Indoor GIS operations.
 *
 * Provides functions for managing buildings, floors, spaces, assets,
 * navigation, and importing IndoorGML/IFC models.
 * @module indoor
 */

import type { RoteiroClient } from './client';
import type {
  IndoorAsset,
  IndoorBuilding,
  IndoorFloor,
  IndoorModel,
  IndoorSpace,
  NavigationResult,
  OccupancyData,
} from './types';

// ---------------------------------------------------------------------------
// Buildings
// ---------------------------------------------------------------------------

/**
 * List all indoor buildings.
 *
 * @param client - An initialised RoteiroClient instance.
 * @returns A list of IndoorBuilding objects.
 */
export async function listBuildings(
  client: RoteiroClient,
): Promise<IndoorBuilding[]> {
  return client.request<IndoorBuilding[]>('/api/indoor/buildings');
}

/**
 * Get a building with its floors and transitions.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param buildingId - The building identifier.
 * @returns An IndoorBuilding with nested floors and transitions.
 */
export async function getBuilding(
  client: RoteiroClient,
  buildingId: string,
): Promise<IndoorBuilding> {
  return client.request<IndoorBuilding>(
    `/api/indoor/buildings/${encodeURIComponent(buildingId)}`,
  );
}

/**
 * Create a new building with optional floors, spaces, and transitions.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param data - Building definition with id, name, floors, transitions, etc.
 * @returns The created IndoorBuilding.
 */
export async function createBuilding(
  client: RoteiroClient,
  data: {
    id: string;
    name: string;
    address?: string;
    metadata?: Record<string, string>;
    floors?: Array<{
      id: string;
      name: string;
      level: number;
      elevation?: number;
      height?: number;
      spaces?: Array<{
        id: string;
        name: string;
        space_type?: string;
        geometry?: unknown;
        navigable?: boolean;
        connections?: string[];
      }>;
    }>;
    transitions?: Array<{
      id: string;
      name: string;
      transition_type?: string;
      connects_floors: number[];
      accessible?: boolean;
      bidirectional?: boolean;
      space_ids?: string[];
    }>;
  },
): Promise<IndoorBuilding> {
  return client.post<IndoorBuilding>('/api/indoor/buildings', data);
}

/**
 * Update an existing building's metadata.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param buildingId - The building identifier.
 * @param data - Fields to update (name, address, metadata, bounds).
 * @returns The updated IndoorBuilding.
 */
export async function updateBuilding(
  client: RoteiroClient,
  buildingId: string,
  data: Partial<IndoorBuilding>,
): Promise<IndoorBuilding> {
  return client.put<IndoorBuilding>(
    `/api/indoor/buildings/${encodeURIComponent(buildingId)}`,
    data,
  );
}

/**
 * Delete a building and all its associated data.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param buildingId - The building identifier.
 */
export async function deleteBuilding(
  client: RoteiroClient,
  buildingId: string,
): Promise<void> {
  await client.del(`/api/indoor/buildings/${encodeURIComponent(buildingId)}`);
}

// ---------------------------------------------------------------------------
// Floors
// ---------------------------------------------------------------------------

/**
 * List all floors in a building.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param buildingId - The building identifier.
 * @returns A list of IndoorFloor objects.
 */
export async function listFloors(
  client: RoteiroClient,
  buildingId: string,
): Promise<IndoorFloor[]> {
  return client.request<IndoorFloor[]>(
    `/api/indoor/buildings/${encodeURIComponent(buildingId)}/floors`,
  );
}

/**
 * Create a new floor in a building.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param buildingId - The building identifier.
 * @param floorData - Floor definition with id, name, level, etc.
 * @returns The created IndoorFloor.
 */
export async function createFloor(
  client: RoteiroClient,
  buildingId: string,
  floorData: Partial<IndoorFloor>,
): Promise<IndoorFloor> {
  return client.post<IndoorFloor>(
    `/api/indoor/buildings/${encodeURIComponent(buildingId)}/floors`,
    floorData,
  );
}

// ---------------------------------------------------------------------------
// Spaces
// ---------------------------------------------------------------------------

/**
 * List all spaces on a given floor level.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param buildingId - The building identifier.
 * @param level - The floor level number.
 * @returns A list of IndoorSpace objects.
 */
export async function listSpaces(
  client: RoteiroClient,
  buildingId: string,
  level: number,
): Promise<IndoorSpace[]> {
  return client.request<IndoorSpace[]>(
    `/api/indoor/buildings/${encodeURIComponent(buildingId)}/floors/${level}/spaces`,
  );
}

/**
 * Create a new space in a building.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param buildingId - The building identifier.
 * @param spaceData - Space definition with id, floor_id, name, etc.
 * @returns The created IndoorSpace.
 */
export async function createSpace(
  client: RoteiroClient,
  buildingId: string,
  spaceData: Partial<IndoorSpace>,
): Promise<IndoorSpace> {
  return client.post<IndoorSpace>(
    `/api/indoor/buildings/${encodeURIComponent(buildingId)}/spaces`,
    spaceData,
  );
}

/**
 * Get a specific space within a building.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param buildingId - The building identifier.
 * @param spaceId - The space identifier.
 * @returns An IndoorSpace object.
 */
export async function getSpace(
  client: RoteiroClient,
  buildingId: string,
  spaceId: string,
): Promise<IndoorSpace> {
  return client.request<IndoorSpace>(
    `/api/indoor/buildings/${encodeURIComponent(buildingId)}/spaces/${encodeURIComponent(spaceId)}`,
  );
}

// ---------------------------------------------------------------------------
// Assets
// ---------------------------------------------------------------------------

/**
 * List assets in a building, optionally filtered by floor or space.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param buildingId - The building identifier.
 * @param floorId - Optional floor ID filter.
 * @param spaceId - Optional space ID filter.
 * @returns A list of IndoorAsset objects.
 */
export async function listAssets(
  client: RoteiroClient,
  buildingId: string,
  floorId?: string,
  spaceId?: string,
): Promise<IndoorAsset[]> {
  const params = new URLSearchParams();
  if (floorId) params.set('floor', floorId);
  if (spaceId) params.set('space', spaceId);
  const q = params.toString();
  return client.request<IndoorAsset[]>(
    `/api/indoor/buildings/${encodeURIComponent(buildingId)}/assets${q ? `?${q}` : ''}`,
  );
}

/**
 * Create a new asset in a building.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param buildingId - The building identifier.
 * @param assetData - Asset definition with id, name, floor_id, space_id, etc.
 * @returns The created IndoorAsset.
 */
export async function createAsset(
  client: RoteiroClient,
  buildingId: string,
  assetData: Partial<IndoorAsset>,
): Promise<IndoorAsset> {
  return client.post<IndoorAsset>(
    `/api/indoor/buildings/${encodeURIComponent(buildingId)}/assets`,
    assetData,
  );
}

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

/**
 * Find an indoor navigation path between two spaces.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param buildingId - The building identifier.
 * @param fromSpace - Source space ID.
 * @param toSpace - Destination space ID.
 * @param accessibleOnly - Only use accessible transitions (default: false).
 * @returns A NavigationResult with path steps, distance, and time estimate.
 */
export async function findPath(
  client: RoteiroClient,
  buildingId: string,
  fromSpace: string,
  toSpace: string,
  accessibleOnly: boolean = false,
): Promise<NavigationResult> {
  return client.post<NavigationResult>('/api/indoor/navigate', {
    building_id: buildingId,
    from: fromSpace,
    to: toSpace,
    accessible_only: accessibleOnly,
  });
}

/**
 * Find the nearest space of a given type from a starting space.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param buildingId - The building identifier.
 * @param fromSpace - Source space ID.
 * @param targetType - Type of space to search for (e.g. "restroom", "exit").
 * @param accessibleOnly - Only use accessible transitions (default: false).
 * @returns A NavigationResult with path steps, distance, and time estimate.
 */
export async function findNearest(
  client: RoteiroClient,
  buildingId: string,
  fromSpace: string,
  targetType: string,
  accessibleOnly: boolean = false,
): Promise<NavigationResult> {
  return client.post<NavigationResult>('/api/indoor/navigate/nearest', {
    building_id: buildingId,
    from: fromSpace,
    target_type: targetType,
    accessible_only: accessibleOnly,
  });
}

// ---------------------------------------------------------------------------
// Import
// ---------------------------------------------------------------------------

/**
 * Import an IndoorGML file to create a building model.
 *
 * Note: For file uploads, use a FormData approach or pass the file content
 * as the request body with the appropriate Content-Type header.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param fileContent - The IndoorGML file content as a string.
 * @param filename - Optional filename hint for format detection.
 * @returns The imported IndoorModel.
 */
export async function parseIndoorGml(
  client: RoteiroClient,
  fileContent: string,
  filename: string = 'model.gml',
): Promise<IndoorModel> {
  const resp = await client.request<IndoorBuilding>(
    `/api/indoor/import?filename=${encodeURIComponent(filename)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/xml' },
      body: fileContent,
    },
  );
  return { building: resp, source_format: 'indoorgml' };
}

/**
 * Import an IFC file to create a building model.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param fileContent - The IFC file content as a string.
 * @param filename - Optional filename hint for format detection.
 * @returns The imported IndoorModel.
 */
export async function importIfc(
  client: RoteiroClient,
  fileContent: string,
  filename: string = 'model.ifc',
): Promise<IndoorModel> {
  const resp = await client.request<IndoorBuilding>(
    `/api/indoor/import?filename=${encodeURIComponent(filename)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/octet-stream' },
      body: fileContent,
    },
  );
  return { building: resp, source_format: 'ifc' };
}

// ---------------------------------------------------------------------------
// Occupancy & Evacuation
// ---------------------------------------------------------------------------

/**
 * Get occupancy analytics for a building.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param buildingId - The building identifier.
 * @returns Occupancy data with per-floor and per-space breakdown.
 */
export async function getOccupancy(
  client: RoteiroClient,
  buildingId: string,
): Promise<OccupancyData> {
  return client.request<OccupancyData>(
    `/api/indoor/buildings/${encodeURIComponent(buildingId)}/occupancy`,
  );
}

/**
 * Compute evacuation routes for a building.
 *
 * @param client - An initialised RoteiroClient instance.
 * @param buildingId - The building identifier.
 * @param params - Optional evacuation routing parameters.
 * @returns Evacuation route data.
 */
export async function getEvacuationRoutes(
  client: RoteiroClient,
  buildingId: string,
  params?: Record<string, unknown>,
): Promise<unknown> {
  return client.post<unknown>(
    `/api/indoor/buildings/${encodeURIComponent(buildingId)}/evacuation`,
    params ?? {},
  );
}
