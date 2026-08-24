"use client";

import { Minus, Plus } from "lucide-react";

interface ZoomControlProps {
  onZoomIn?: () => void;
  onZoomOut?: () => void;
}

export function ZoomControl({
  onZoomIn,
  onZoomOut,
}: ZoomControlProps) {
  return (
    <div className="mt-2 overflow-hidden rounded-md border border-border">

      <div className="grid grid-cols-[72px_1fr_1fr]">

        <div className="flex items-center justify-center border-r bg-muted/40 px-3 py-2 text-sm font-medium">
          Zoom
        </div>

        <button
          type="button"
          onClick={onZoomIn}
          className="
            flex
            items-center
            justify-center
            gap-2
            border-r
            px-3
            py-2
            text-sm
            transition-colors
            hover:bg-muted
          "
        >
          <Plus className="h-4 w-4" />
          <span>Aumentar</span>
        </button>

        <button
          type="button"
          onClick={onZoomOut}
          className="
            flex
            items-center
            justify-center
            gap-2
            px-3
            py-2
            text-sm
            transition-colors
            hover:bg-muted
          "
        >
          <span>Diminuir</span>
          <Minus className="h-4 w-4" />
        </button>

      </div>

    </div>
  );
}