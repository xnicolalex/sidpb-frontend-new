"use client";

import { useMemo } from "react";

import type { Occurrence } from "@/entities/occurrence/occurrence.types";

export interface DashboardFilterOption {
  label: string;
  count: number;
}

export interface DashboardFilterOptions {
  diseases: DashboardFilterOption[];
  vectors: DashboardFilterOption[];
  hosts: DashboardFilterOption[];
  states: DashboardFilterOption[];
}

function createOptions(
  values: string[]
): DashboardFilterOption[] {
  const counts = new Map<string, number>();

  values.forEach((value) => {
    if (!value?.trim()) return;

    counts.set(
      value,
      (counts.get(value) ?? 0) + 1
    );
  });

  return Array.from(counts.entries())
    .map(([label, count]) => ({
      label,
      count,
    }))
    .sort((a, b) =>
      a.label.localeCompare(b.label, "pt-BR", {
        sensitivity: "base",
      })
    );
}

export function useDashboardFilterOptions(
  occurrences: Occurrence[] = []
): DashboardFilterOptions {
  return useMemo(
    () => ({
      diseases: createOptions(
        occurrences.map(
          (occurrence) => occurrence.disease
        )
      ),

      vectors: createOptions(
        occurrences.map(
          (occurrence) => occurrence.vector
        )
      ),

      hosts: createOptions(
        occurrences.map(
          (occurrence) => occurrence.host
        )
      ),

      states: createOptions(
        occurrences.map(
          (occurrence) => occurrence.state
        )
      ),
    }),
    [occurrences]
  );
}