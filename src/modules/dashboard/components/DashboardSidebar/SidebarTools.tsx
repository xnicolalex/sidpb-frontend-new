"use client";

import {
  LocateFixed,
  Satellite,
  RotateCcw,
  Map,
  Maximize,
} from "lucide-react";

import { ToolButton } from "./ToolButton";
import { ZoomControl } from "./ZoomControl";

import { useMapStore } from "@/modules/map/store/mapStore";

export function SidebarTools() {
  const zoomIn = useMapStore((state) => state.zoomIn);
  const zoomOut = useMapStore((state) => state.zoomOut);

  const mapView = useMapStore((state) => state.mapView);
  const toggleMapView = useMapStore((state) => state.toggleMapView);

  const resetMap = useMapStore((state) => state.resetMap);

  const legendVisible = useMapStore(
    (state) => state.legendVisible
  );

  const toggleLegend = useMapStore(
    (state) => state.toggleLegend
  );

  const locateUser = useMapStore(
    (state) => state.locateUser
  );

  const toggleFullscreen = useMapStore(
  (state) => state.toggleFullscreen
  );

  return (
    <section className="shrink-0 border-b">

      <div className="border-b bg-muted/40 px-4 py-2">
        <h2 className="text-sm font-semibold">
          Ferramentas
        </h2>
      </div>

      <div className="space-y-1 p-3">

        <ToolButton
          icon={LocateFixed}
          label="Localizar"
          onClick={locateUser}
        />

        <ToolButton
          icon={Satellite}
          label="Modo satélite"
          active={mapView === "satellite"}
          onClick={toggleMapView}
        />

        <ToolButton
          icon={Map}
          label="Legenda"
          active={legendVisible}
          onClick={toggleLegend}
        />

        <ToolButton
          icon={RotateCcw}
          label="Redefinir mapa"
          onClick={resetMap}
        />

        <ToolButton
          icon={Maximize}
          label="Tela cheia"
          onClick={toggleFullscreen}
        />

        <ZoomControl
          onZoomIn={zoomIn}
          onZoomOut={zoomOut}
        />

      </div>

    </section>
  );
}