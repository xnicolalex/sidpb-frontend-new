"use client";

import type { ReactNode } from "react";

import { DashboardSidebar } from "../DashboardSidebar";
import { DashboardInspector } from "../DashboardInspector";
import type { MapController } from "@/modules/map/types/map-controller.types";

interface DashboardContentProps {
  children: React.ReactNode;
  map: MapController;
}
export function DashboardContent({
  children,
  map,
}: DashboardContentProps) {
  return (
    <section className="flex flex-1 overflow-hidden">

      <DashboardSidebar map={map} />

      <div className="relative flex-1">
        {children}
      </div>

      <DashboardInspector />

    </section>
  );
}