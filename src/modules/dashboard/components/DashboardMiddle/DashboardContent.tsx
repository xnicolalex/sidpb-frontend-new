"use client";

import { useMemo } from "react";

import { occurrenceFeatureToOccurrence } from "@/entities/occurrence/occurrence.mappers";
import type { OccurrenceFeatureCollection } from "@/entities/occurrence/occurrence.types";
import type { MapController } from "@/modules/map/types/map-controller.types";

import { DashboardLeftSidebar } from "../DashboardLeftSidebar";
import { DashboardRightSidebar } from "../DashboardRightSidebar";

interface DashboardContentProps {
  map: MapController;
  occurrences?: OccurrenceFeatureCollection | null;
  children: React.ReactNode;
}

export function DashboardContent({
  map,
  occurrences,
  children,
}: DashboardContentProps) {
  const occurrenceList = useMemo(
    () =>
      occurrences?.features.map(
        occurrenceFeatureToOccurrence
      ) ?? [],
    [occurrences]
  );

  return (
    <section className="flex min-h-0 flex-1 overflow-hidden">
      <DashboardLeftSidebar
        occurrences={occurrenceList}
      />

      <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden">
        {children}
      </div>

      <DashboardRightSidebar
        occurrences={occurrenceList}
      />
    </section>
  );
}
