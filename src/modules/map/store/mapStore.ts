"use client";

import type L from "leaflet";
import { create } from "zustand";

import type { Occurrence } from "@/entities/occurrence/occurrence.types";

import {
  MIN_ZOOM,
  MAX_ZOOM,
} from "../components/LeafletMap/map-zoom";

export type MapView = "street" | "satellite";

export const DEFAULT_CENTER: [number, number] = [-14.235, -51.925];
export const DEFAULT_ZOOM = 4;


interface MapStore {
  map: L.Map | null;

  mapView: MapView;

  currentZoom: number;

  legendVisible: boolean;

  selectedOccurrence: Occurrence | null;

  registerMap(map: L.Map): void;

  setCurrentZoom(zoom: number): void;

  zoomIn(): void;
  zoomOut(): void;

  resetMap(): void;

  flyTo(
    center: [number, number],
    zoom?: number
  ): void;

  fitBounds(
    bounds: L.LatLngBoundsExpression
  ): void;

  locateUser(): void;

  toggleMapView(): void;

  toggleLegend(): void;

  setSelectedOccurrence(
    occurrence: Occurrence | null
  ): void;

  toggleFullscreen(): Promise<void>;
}

export const useMapStore = create<MapStore>((set, get) => ({
  map: null,

  mapView: "street",

  currentZoom: DEFAULT_ZOOM,

  legendVisible: false,

  selectedOccurrence: null,

  registerMap(map) {
    map.setMinZoom(MIN_ZOOM);
    map.setMaxZoom(MAX_ZOOM);

    set({ map });
  },

  setCurrentZoom(zoom) {
    set({
      currentZoom: zoom,
    });
  },

  zoomIn() {
    get().map?.zoomIn();
  },

  zoomOut() {
    get().map?.zoomOut();
  },

  resetMap() {
    get().map?.flyTo(
      DEFAULT_CENTER,
      DEFAULT_ZOOM,
      {
        animate: true,
        duration: 1.2,
      }
    );
  },

  flyTo(center, zoom) {
    const map = get().map;

    if (!map) return;

    map.flyTo(
      center,
      zoom ?? map.getZoom(),
      {
        animate: true,
      }
    );
  },

  fitBounds(bounds) {
    get().map?.fitBounds(bounds, {
      padding: [32, 32],
      animate: true,
    });
  },

  locateUser() {
    get().map?.locate({
      setView: true,
      maxZoom: 10,
    });
  },

  toggleMapView() {
    set((state) => ({
      mapView:
        state.mapView === "street"
          ? "satellite"
          : "street",
    }));
  },

  toggleLegend() {
    set((state) => ({
      legendVisible: !state.legendVisible,
    }));
  },

  setSelectedOccurrence(
    selectedOccurrence
  ) {
    set({
      selectedOccurrence,
    });
  },
  async toggleFullscreen() {
  const map = get().map;

  if (!map) return;

  const container = map.getContainer();

  if (!document.fullscreenElement) {
    await container.requestFullscreen();

    window.setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return;
  }

  await document.exitFullscreen();

  window.setTimeout(() => {
    map.invalidateSize();
  }, 100);
},

}));