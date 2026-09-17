"use client";

import { parseAsString, useQueryState } from "nuqs";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { DashboardContent } from "@/modules/dashboard/components/DashboardMiddle/DashboardContent";
import { DashboardHeader } from "@/modules/dashboard/components/DashboardMiddle/DashboardHeader";
import { DashboardMap } from "@/modules/dashboard/components/DashboardMiddle/DashboardMap";

import { useMapController } from "@/modules/map/hooks/useMapController";
import type { MapController } from "@/modules/map/types/map-controller.types";

import { useOccurrences } from "@/modules/occurrences/hooks/useOccurrences";

import { DashboardFooterSection } from "@/sections/dashboard/DashboardFooterSection";

export default function DashboardPage() {
  const map: MapController = useMapController();

  const [search] = useQueryState(
    "search",
    parseAsString.withDefault("")
  );

  const {
    data: occurrences,
    isLoading,
    error,
  } = useOccurrences({
    filters: {
      search,
    },
  });

  const isInitialLoading =
    isLoading && !occurrences;
  const invalidCoordinatesCount =
    occurrences?.invalidCoordinatesCount ?? 0;
  const emptyMessage =
    !isInitialLoading &&
    !error &&
    occurrences &&
    occurrences.features.length === 0
      ? invalidCoordinatesCount > 0
        ? "As ocorrencias foram retornadas, mas nenhuma possui coordenadas validas para o mapa."
        : "Nenhuma ocorrencia encontrada para os filtros atuais."
      : undefined;

  return (
    <DashboardShell
      header={<DashboardHeader />}
      footer={<DashboardFooterSection />}
    >
      <DashboardContent
        map={map}
        occurrences={occurrences}
      >
        <DashboardMap
          map={map}
          occurrences={occurrences}
          isLoading={isInitialLoading}
          error={error}
          emptyMessage={emptyMessage}
          invalidCoordinatesCount={invalidCoordinatesCount}
        />
      </DashboardContent>
    </DashboardShell>
  );
}
