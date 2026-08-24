"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import type L from "leaflet";
import { formatScaleKm, metersPerPixel, SCALE_BAR_WIDTH_PX } from "./map-scale";

interface MapTelemetryProps {
  onMouseCoordinateChange?: (coordinate: [number, number] | null) => void;
  onScaleChange?: (scaleKm: number) => void;
  onInternalScaleChange?: (scaleKm: number) => void;
}

export function MapTelemetry({
  onMouseCoordinateChange,
  onScaleChange,
  onInternalScaleChange,
}: MapTelemetryProps) {
  const map = useMap();

  useEffect(() => {
    const updateScale = () => {
      const center = map.getCenter();
      const scaleKm = (metersPerPixel(center.lat, map.getZoom()) * SCALE_BAR_WIDTH_PX) / 1000;
      const formattedScaleKm = formatScaleKm(scaleKm);

      onInternalScaleChange?.(formattedScaleKm);
      onScaleChange?.(formattedScaleKm);
    };

    const handleMouseMove = (event: L.LeafletMouseEvent) => {
      onMouseCoordinateChange?.([event.latlng.lat, event.latlng.lng]);
    };

    const handleMouseOut = () => {
      onMouseCoordinateChange?.(null);
    };

    updateScale();
    map.on("mousemove", handleMouseMove);
    map.on("mouseout", handleMouseOut);
    map.on("zoomend moveend", updateScale);

    return () => {
      map.off("mousemove", handleMouseMove);
      map.off("mouseout", handleMouseOut);
      map.off("zoomend moveend", updateScale);
    };
  }, [map, onInternalScaleChange, onMouseCoordinateChange, onScaleChange]);

  return null;
}
