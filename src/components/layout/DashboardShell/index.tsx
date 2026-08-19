interface DashboardShellProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export function DashboardShell({
  header,
  footer,
  children,
}: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">

      {header}

      <main className="relative flex min-h-0 flex-1 overflow-hidden">
        {children}
      </main>

      {footer}

    </div>
  );
}