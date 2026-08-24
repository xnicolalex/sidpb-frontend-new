"use client";

import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface ControlButtonProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function ControlButton({
  icon: Icon,
  label,
  active = false,
  onClick,
}: ControlButtonProps) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onClick={onClick}
      className={cn(
        "flex h-10 w-10 items-center justify-center border transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background hover:bg-muted"
      )}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}