import type L from "leaflet";

export type MarkerClusterLike = {
  _map: L.Map;
  getAllChildMarkers: () => L.Marker[];
  getLatLng: () => L.LatLng;
  getBounds: () => L.LatLngBounds;
};

export type ClusterClickEvent = L.LeafletMouseEvent & {
  layer: MarkerClusterLike;
};
