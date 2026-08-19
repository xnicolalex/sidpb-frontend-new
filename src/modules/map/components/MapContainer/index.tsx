"use client";

interface MapContainerProps {
  children: React.ReactNode;
}

export function MapContainer({
  children,
}: MapContainerProps) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      {children}
    </div>
  );
}