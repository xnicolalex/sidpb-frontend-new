"use client";

import { createContext, useContext, useState } from "react";
import type L from "leaflet";

interface MapContextValue {
  map: L.Map | null;
  setMap: (map: L.Map) => void;
}

const MapContext = createContext<MapContextValue | null>(null);

export function MapProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [map, setMap] = useState<L.Map | null>(null);

  return (
    <MapContext.Provider
      value={{
        map,
        setMap,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export function useLeafletMap() {
  const context = useContext(MapContext);

  if (!context) {
    throw new Error(
      "useLeafletMap must be used inside a MapProvider"
    );
  }

  return context;
}