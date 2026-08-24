"use client";

import { useState } from "react";

import type { Occurrence } from "@/entities/occurrence/occurrence.types";

export function useOccurrenceSelection() {
  const [selectedOccurrences, setSelectedOccurrences] =
    useState<Occurrence[]>([]);

  const [isExpanded, setExpanded] =
    useState(false);

  function selectOccurrence(occurrence: Occurrence) {
    setSelectedOccurrences([occurrence]);
    setExpanded(false);
  }

  function selectOccurrences(occurrences: Occurrence[]) {
    setSelectedOccurrences(occurrences);
    setExpanded(false);
  }

  function clearSelection() {
    setSelectedOccurrences([]);
    setExpanded(false);
  }

  function expand() {
    setExpanded(true);
  }

  function collapse() {
    setExpanded(false);
  }

  return {
    selectedOccurrences,
    selectedOccurrence:
      selectedOccurrences[0] ?? null,

    isExpanded,

    selectOccurrence,
    selectOccurrences,
    clearSelection,

    expand,
    collapse,
  };
}