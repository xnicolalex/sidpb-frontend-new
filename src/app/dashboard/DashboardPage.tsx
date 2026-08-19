"use client";

import { useSearchParams } from "next/navigation";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { DashboardFooterSection } from "@/sections/dashboard/DashboardFooterSection";
import { DashboardContent } from "@/modules/dashboard/components/DashboardContent";
import { DashboardHeader } from "@/modules/dashboard/components/DashboardHeader";
import { useOccurrences } from "@/features/occurrences/hooks/useOccurrences";

export default function DashboardPage() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? "";

  const {
    data: occurrences,
    isLoading,
    error,
  } = useOccurrences({
    filters: {
      search,
    },
  });

  return (
    <DashboardShell
        header={<DashboardHeader />}
        footer={<DashboardFooterSection />}
    >

        <DashboardContent>

            {/* Leaflet */}

  
      </DashboardContent>
    </DashboardShell>
  );
}