"use client";

import { ChevronDown } from "lucide-react";

export function AdvancedSearchToggle() {
  return (
    <button
      className="
        mt-3
        flex
        items-center
        gap-1
        text-sm
        text-muted-foreground
        transition-colors
        hover:text-primary
      "
    >
      Pesquisa Avançada

      <ChevronDown className="h-4 w-4" />
    </button>
  );
}