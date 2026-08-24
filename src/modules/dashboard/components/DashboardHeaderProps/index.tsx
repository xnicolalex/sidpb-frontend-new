"use client";

interface DashboardHeaderProps {
  search?: React.ReactNode;
  actions?: React.ReactNode;
}

export function DashboardHeader({
  search,
  actions,
}: DashboardHeaderProps) {
  return (
    <header className="flex h-16 items-center border-b border-border bg-background">

      {/* Logo */}

      <div className="flex w-44 items-center justify-center border-r border-border px-5">
        <img
          src="/sidpb/logo.svg"
          alt="SIDPB"
          className="h-10 w-auto"
        />
      </div>

      {/* Search */}

      <div className="flex flex-1 items-center px-4">
        {search}
      </div>

      {/* Actions */}

      {actions && (
        <div className="flex items-center gap-2 border-l border-border px-4">
          {actions}
        </div>
      )}
    </header>
  );
}