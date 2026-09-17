"use client"

import { useState } from "react"

export type DashboardToolbarPanel =
  | "articles"
  | "vectors"
  | "hosts"
  | "filters"
  | null

export function useDashboardPanels() {
  const [activePanel, setActivePanel] = useState<DashboardToolbarPanel>(null)
  const [isPanelMaximized, setIsPanelMaximized] = useState(false)

  return {
    activePanel,
    setActivePanel,
    isPanelMaximized,
    setIsPanelMaximized,
  }
}
