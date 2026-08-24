"use client";

import { useState } from "react";

import type { Occurrence } from "@/entities/occurrence/occurrence.types";
import type { SideboardToolbarPanel } from "@/modules/dashboard/components/SideboardToolbar";

export function useDashboardController() {
  const [activePanel, setActivePanel] =
    useState<SideboardToolbarPanel>(null);

  const [selectedOccurrences, setSelectedOccurrences] =
    useState<Occurrence[]>([]);

  const [isOccurrencePanelExpanded, setOccurrencePanelExpanded] =
    useState(false);

  const [showLegend, setShowLegend] =
    useState(false);

  function openPanel(panel: SideboardToolbarPanel) {
    setActivePanel(panel);
  }

  function closePanel() {
    setActivePanel(null);
  }

  function togglePanel(panel: SideboardToolbarPanel) {
    setActivePanel((current) =>
      current === panel ? null : panel
    );
  }

  function selectOccurrences(occurrences: Occurrence[]) {
    setSelectedOccurrences(occurrences);
    setOccurrencePanelExpanded(false);
  }

  function clearOccurrences() {
    setSelectedOccurrences([]);
    setOccurrencePanelExpanded(false);
  }

  function expandOccurrencePanel() {
    setOccurrencePanelExpanded(true);
  }

  function collapseOccurrencePanel() {
    setOccurrencePanelExpanded(false);
  }

  function toggleLegend() {
    setShowLegend((current) => !current);
  }

  return {
    // estado

    activePanel,

    selectedOccurrences,

    isOccurrencePanelExpanded,

    showLegend,

    // ações

    openPanel,

    closePanel,

    togglePanel,

    selectOccurrences,

    clearOccurrences,

    expandOccurrencePanel,

    collapseOccurrencePanel,

    toggleLegend,
  };
}