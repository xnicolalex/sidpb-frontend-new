import type L from "leaflet";
import type { MapView } from "../store/mapStore";

export interface MapController {
  mapView: MapView;

  registerMap(map: L.Map): void;

  zoomIn(): void;
  zoomOut(): void;

  toggleMapView(): void;
  resetMap(): void;
}
