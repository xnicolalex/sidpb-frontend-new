"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolButtonProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function ToolButton({
  icon: Icon,
  label,
  active = false,
  onClick,
}: ToolButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        active
          ? "bg-primary text-primary-foreground"
          : "hover:bg-muted"
      )}
    >
      <Icon className="h-5 w-5 shrink-0" />

      <span className="flex-1 text-left">
        {label}
      </span>
    </button>
  );
}