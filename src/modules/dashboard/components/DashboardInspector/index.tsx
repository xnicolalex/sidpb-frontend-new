"use client";

interface DashboardInspectorProps {
  children?: React.ReactNode;
}

export function DashboardInspector({
  children,
}: DashboardInspectorProps) {
  return (
    <aside className="w-96 shrink-0 border-l border-border bg-background">
      {children}
    </aside>
  );
}