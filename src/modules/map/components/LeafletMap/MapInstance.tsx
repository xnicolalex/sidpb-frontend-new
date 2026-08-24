"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import type L from "leaflet";

interface MapInstanceProps {
  onReady?: (map: L.Map) => void;
}

export function MapInstance({
  onReady,
}: MapInstanceProps) {
  const map = useMap();

  useEffect(() => {
    onReady?.(map);
  }, [map, onReady]);

  return null;
}
