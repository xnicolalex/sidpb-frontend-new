"use client";

import { parseAsString, useQueryState } from "nuqs";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { DashboardContent } from "@/modules/dashboard/components/DashboardContent";
import { DashboardHeader } from "@/modules/dashboard/components/DashboardHeader";
import { DashboardMap } from "@/modules/dashboard/components/DashboardMap";
import { useMapController } from "@/modules/map/hooks/useMapController";
import type { MapController } from "@/modules/map/types/map-controller.types";
import { useOccurrences } from "@/modules/occurrences/hooks/useOccurrences";
import { DashboardFooterSection } from "@/sections/dashboard/DashboardFooterSection";

export default function DashboardPage() {
  const map: MapController = useMapController();
  const [search] = useQueryState("search", parseAsString.withDefault(""));

  const { data: occurrences } = useOccurrences({
    filters: {
      search,
    },
  });

  return (
    <DashboardShell
      header={<DashboardHeader />}
      footer={<DashboardFooterSection />}
    >
      <DashboardContent map={map}>
        <DashboardMap map={map} occurrences={occurrences} />
      </DashboardContent>
    </DashboardShell>
  );
}
