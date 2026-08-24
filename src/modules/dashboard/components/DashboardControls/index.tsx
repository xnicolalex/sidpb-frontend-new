"use client";

import {
  RotateCcw,
  Search,
  Plus,
  Minus,
} from "lucide-react";

import { ControlButton } from "./ControlButton";

export function DashboardControls() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        gap-2
        border-b
        border-border
        p-3
      "
    >
      <ControlButton
        icon={Search}
        label="Pesquisar localização"
      />

      <ControlButton
        icon={Plus}
        label="Aumentar zoom"
      />

      <ControlButton
        icon={Minus}
        label="Diminuir zoom"
      />

      <ControlButton
        icon={RotateCcw}
        label="Redefinir mapa"
      />
    </div>
  );
}