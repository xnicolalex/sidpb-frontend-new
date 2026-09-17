interface DashboardShellProps {
  header: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function DashboardShell({
  header,
  children,
  footer,
}: DashboardShellProps) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <div className="shrink-0">
        {header}
      </div>

      <main className="relative flex min-h-0 flex-1 overflow-hidden">
        {children}
      </main>

      {footer && (
        <div className="shrink-0">
          {footer}
        </div>
      )}
    </div>
  );
}