"use client";

import { AlertTriangle } from "lucide-react";
import dynamic from "next/dynamic";

import { Spinner } from "@/components/ui/spinner";
import type {OccurrenceFeatureCollection} from "@/entities/occurrence/occurrence.types";
import type { MapController } from "@/modules/map/types/map-controller.types";

const LeafletMap = dynamic(
  () => import("@/modules/map/components/LeafletMap"),
  {
    ssr: false,
  }
);

interface DashboardMapProps {
  map: MapController;
  occurrences?: OccurrenceFeatureCollection | null;
  isLoading?: boolean;
  error?: Error | null;
  emptyMessage?: string;
  invalidCoordinatesCount?: number;
}

export function DashboardMap({
  map,
  occurrences,
  isLoading = false,
  error,
  emptyMessage,
  invalidCoordinatesCount = 0,
}: DashboardMapProps) {
  return (
    <div className="absolute inset-0">
      <LeafletMap
        mapView={map.mapView}
        occurrences={occurrences}
        onMapReady={map.registerMap}
      />

      {(isLoading || error || emptyMessage) && (
        <div className="absolute left-1/2 top-4 z-20 w-[min(92vw,420px)] -translate-x-1/2 border border-border bg-background px-4 py-3 shadow-lg">
          {isLoading ? (
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Spinner className="size-4" />
              Carregando ocorrencias do backend...
            </div>
          ) : error ? (
            <div className="flex items-start gap-3 text-sm text-destructive">
              <AlertTriangle className="mt-0.5 size-4 shrink-0" />
              <span>{error.message}</span>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">{emptyMessage}</p>
          )}
        </div>
      )}

      {!isLoading && !error && !emptyMessage && invalidCoordinatesCount > 0 && (
        <div className="absolute bottom-4 left-4 z-20 border border-border bg-background px-3 py-2 text-xs text-muted-foreground shadow-lg">
          {invalidCoordinatesCount} ocorrencia(s) sem coordenadas validas foram ocultadas.
        </div>
      )}
    </div>
  );
}
