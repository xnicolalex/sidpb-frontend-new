"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import type L from "leaflet";

interface MapMoverProps {
  center?: [number, number];
  zoom: number;
  bounds?: [number, number][];
}

export function MapMover({ center, zoom, bounds }: MapMoverProps) {
  const map = useMap();

  const latitude = center?.[0];
  const longitude = center?.[1];

  const southWestLat = bounds?.[0]?.[0];
  const southWestLng = bounds?.[0]?.[1];
  const northEastLat = bounds?.[1]?.[0];
  const northEastLng = bounds?.[1]?.[1];

  useEffect(() => {
    if (
      southWestLat !== undefined &&
      southWestLng !== undefined &&
      northEastLat !== undefined &&
      northEastLng !== undefined
    ) {
      map.fitBounds(
        [
          [southWestLat, southWestLng],
          [northEastLat, northEastLng],
        ] as L.LatLngBoundsExpression,
        {
          animate: true,
          duration: 1.5,
        }
      );

      return;
    }

    if (latitude !== undefined && longitude !== undefined) {
      map.flyTo([latitude, longitude], map.getZoom(), {
        animate: true,
        duration: 1.5,
      });
    }
  }, [
    latitude,
    longitude,
    southWestLat,
    southWestLng,
    northEastLat,
    northEastLng,
    map,
  ]);

  useEffect(() => {
    if (map.getZoom() !== zoom) {
      map.setZoom(zoom, {
        animate: true,
      });
    }
  }, [zoom, map]);

  return null;
}