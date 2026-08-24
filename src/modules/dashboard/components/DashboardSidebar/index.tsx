"use client";

import type { MapController } from "@/modules/map/types/map-controller.types";

import { SidebarTools } from "./SidebarTools";
import { SidebarFilters } from "./SidebarFilters";

interface DashboardSidebarProps {
  children?: React.ReactNode;
}

export function DashboardSidebar({
  children,
}: DashboardSidebarProps) {
  return (
    <aside className="flex h-full w-72 flex-col border-r bg-background">

      <SidebarTools />

      <SidebarFilters />

      {children}

    </aside>
  );
}