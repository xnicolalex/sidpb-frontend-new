"use client";

import { Marker } from "react-leaflet";

import L from "leaflet";

const searchedLocationIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",

  iconRetinaUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],

  iconAnchor: [12, 41],

  shadowSize: [41, 41],
});

interface Props {
  position?: [number, number] | null;
}

export function SearchMarker({
  position,
}: Props) {
  if (!position) {
    return null;
  }

  return (
    <Marker
      position={position}
      icon={searchedLocationIcon}
    />
  );
}