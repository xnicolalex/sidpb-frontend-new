"use client";

interface DashboardWorkspaceProps {
  search: React.ReactNode;
  controls: React.ReactNode;
  map: React.ReactNode;
  panel?: React.ReactNode;
}

export function DashboardWorkspace({
  search,
  controls,
  map,
  panel,
}: DashboardWorkspaceProps) {
  return (
    <div className="flex h-full flex-col">

      {search}

      <div className="flex flex-1 overflow-hidden">

        {controls}

        <div className="relative flex-1">
          {map}
        </div>

        {panel}

      </div>

    </div>
  );
}