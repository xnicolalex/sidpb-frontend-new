"use client";

import type { Occurrence } from "@/entities/occurrence/occurrence.types";

import { useDashboardFilterOptions } from "../../hooks/useDashboardFilterOptions";

import { LeftSidebarFilters } from "./LeftSidebarFilters";
import { LeftSidebarTools } from "./LeftSidebarTools";

interface DashboardLeftSidebarProps {
  occurrences: Occurrence[];
}

export function DashboardLeftSidebar({
  occurrences,
}: DashboardLeftSidebarProps) {
  const filterOptions =
    useDashboardFilterOptions(occurrences);

  return (
    <aside className="flex h-full w-72 shrink-0 flex-col border-r border-border bg-background">
      <div className="shrink-0">
        <LeftSidebarTools />
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <LeftSidebarFilters
          options={filterOptions}
        />
      </div>
    </aside>
  );
}