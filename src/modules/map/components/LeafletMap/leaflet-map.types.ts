import type L from "leaflet";
import type {
  Occurrence,
  OccurrenceFeatureCollection,
} from "@/entities/occurrence/occurrence.types";

export interface LeafletMapProps {
  zoom?: number;
  mapView: "street" | "satellite";
  center?: [number, number];
  bounds?: [number, number][];
  markerPosition?: [number, number] | null;
  occurrences?: OccurrenceFeatureCollection | null;
  searchQuery?: string;
  onMapReady?: (map: L.Map) => void;
  onOccurrenceClick?: (occurrence: Occurrence) => void;
  onClusterClick?: (occurrences: Occurrence[]) => void;
  onMouseCoordinateChange?: (coordinate: [number, number] | null) => void;
  onScaleChange?: (scaleKm: number) => void;
  selectedOccurrence?: Occurrence | null;
}
