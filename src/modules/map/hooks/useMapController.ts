"use client";

import { useMapStore } from "@/modules/map/store/mapStore";

export function useMapController() {
  const mapView = useMapStore((state) => state.mapView);
  const registerMap = useMapStore((state) => state.registerMap);
  const zoomIn = useMapStore((state) => state.zoomIn);
  const zoomOut = useMapStore((state) => state.zoomOut);
  const toggleMapView = useMapStore((state) => state.toggleMapView);
  const resetMap = useMapStore((state) => state.resetMap);

  return {
    mapView,
    registerMap,
    zoomIn,
    zoomOut,
    toggleMapView,
    resetMap,
  };
}
