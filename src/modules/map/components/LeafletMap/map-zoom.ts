export const MIN_ZOOM = 4;

export const MAX_ZOOM = 12;

export const CLUSTER_MAX_ZOOM = 11;

export function getClusterRadiusByZoom(zoom: number) {
  if (zoom <= 4) return 70;

  if (zoom <= 6) return 55;

  if (zoom <= 8) return 42;

  if (zoom <= 10) return 30;

  return 0;
}