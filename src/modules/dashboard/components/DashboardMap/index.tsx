"use client";

import dynamic from "next/dynamic";

import type {
  OccurrenceFeatureCollection,
} from "@/entities/occurrence/occurrence.types";

import { useMapStore } from "@/modules/map/store/mapStore";

const LeafletMap = dynamic(
  () => import("@/modules/map/components/LeafletMap"),
  {
    ssr: false,
  }
);

interface DashboardMapProps {
  occurrences: OccurrenceFeatureCollection | null;
}

export function DashboardMap({
  occurrences,
}: DashboardMapProps) {
  const mapView = useMapStore((state) => state.mapView);
  const registerMap = useMapStore((state) => state.registerMap);

  return (
    <div className="absolute inset-0">
      <LeafletMap
        occurrences={occurrences}
        mapView={mapView}
        onMapReady={registerMap}
      />
    </div>
  );
}