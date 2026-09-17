"use client";

import { useMapStore } from "../../store/mapStore";
import { MapLegend } from "../MapLegend";
import { useMemo, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import type L from "leaflet";
import type { Occurrence } from "@/entities/occurrence/occurrence.types";
import { occurrenceFeatureToOccurrence } from "@/entities/occurrence/occurrence.mappers";
import type { ClusterClickEvent, MarkerClusterLike } from "./cluster.types";
import type { LeafletMapProps } from "./leaflet-map.types";
import { MapInstance } from "./MapInstance";
import { MapMover } from "./MapMover";
import { MapTelemetry } from "./MapTelemetry";
import { defaultIcon } from "./map-icons";
import { SearchMarker } from "./SearchedMarker";
import {
  MIN_ZOOM,
  MAX_ZOOM,
  SATELLITE_MAX_ZOOM,
  CLUSTER_MAX_ZOOM,
  getClusterRadiusByZoom,
} from "./map-zoom";
import { MapZoomTracker } from "./MapZoomTracker";
import { OccurrenceMarker } from "./OccurrenceMarker";
import { hasSameCoordinates } from "./occurrence-cluster";


const DEFAULT_CENTER: [number, number] = [-14.235, -51.925];
const DEFAULT_ZOOM = 4;

export default function LeafletMap({
  zoom = DEFAULT_ZOOM,
  center = DEFAULT_CENTER,
  bounds,
  markerPosition,
  mapView,
  occurrences,
  onMapReady,
  onOccurrenceClick,
  onClusterClick,
  onMouseCoordinateChange,
  onScaleChange,
  selectedOccurrence,
}: LeafletMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const currentScaleKmRef = useRef(500);
  const occurrenceByMarkerRef = useRef(new WeakMap<L.Marker, Occurrence>());
  const occurrenceMarkers = useMemo(
    () => occurrences?.features.map(occurrenceFeatureToOccurrence) ?? [],
    [occurrences]
  );

  const legendVisible = useMapStore((state) => state.legendVisible);
  const toggleLegend = useMapStore((state) => state.toggleLegend);

  const currentZoom = useMapStore((state) => state.currentZoom);
  const setCurrentZoom = useMapStore((state) => state.setCurrentZoom);

  const getClusterOccurrences = (cluster: MarkerClusterLike) => {
    return cluster
      .getAllChildMarkers()
      .map((marker) => occurrenceByMarkerRef.current.get(marker))
      .filter((occurrence): occurrence is Occurrence => Boolean(occurrence));
  };

  const handleClusterClick = (event: ClusterClickEvent) => {
    const cluster = event.layer;
    const clusterOccurrences = getClusterOccurrences(cluster);

    if (clusterOccurrences.length === 0) return;

    const map = cluster._map;
    const currentZoom = map.getZoom();
    const shouldOpenPanel =
      currentZoom >= CLUSTER_MAX_ZOOM || hasSameCoordinates(clusterOccurrences);

    if (shouldOpenPanel) {
      onClusterClick?.(clusterOccurrences);
      return;
    }

    map.fitBounds(cluster.getBounds(), {
      padding: [48, 48],
      maxZoom: CLUSTER_MAX_ZOOM,
    });
  };

  const renderOccurrenceMarker = (occurrence: Occurrence) => (
    <OccurrenceMarker
      key={occurrence.id}
      occurrence={occurrence}
      icon={defaultIcon}
      selectedOccurrence={selectedOccurrence}
      onOccurrenceClick={onOccurrenceClick}
      onMarkerRef={(marker) => {
        if (marker) {
          occurrenceByMarkerRef.current.set(marker, occurrence);
        }
      }}
    />
  );

  return (
    <div
      ref={mapContainerRef}
      className="relative h-full w-full overflow-hidden bg-white"
    >
      <MapContainer
        center={center}
        zoom={zoom}
        minZoom={MIN_ZOOM}
        maxZoom={MAX_ZOOM}
        scrollWheelZoom={true}
        zoomControl={false}
        worldCopyJump={true}
        zoomSnap={1}
        zoomDelta={1}
        className="h-full w-full"
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <MapInstance onReady={onMapReady} />

        <MapZoomTracker onZoomChange={setCurrentZoom} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxNativeZoom={19}
          maxZoom={MAX_ZOOM}
          noWrap={false}
        />

        {mapView === "satellite" && (
          <TileLayer
            attribution="Tiles &copy; Esri"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            maxNativeZoom={SATELLITE_MAX_ZOOM}
            maxZoom={SATELLITE_MAX_ZOOM}
            noWrap={false}
          />
        )}

        <MapMover center={center} zoom={zoom} bounds={bounds} />

        <MapTelemetry
          onMouseCoordinateChange={onMouseCoordinateChange}
          onScaleChange={onScaleChange}
          onInternalScaleChange={(nextScaleKm) => {
            currentScaleKmRef.current = nextScaleKm;
          }}
        />

        <SearchMarker position={markerPosition} />

        <MarkerClusterGroup
          key="clustered"
          chunkedLoading
          showCoverageOnHover={false}
          spiderfyOnMaxZoom
          zoomToBoundsOnClick={false}
          disableClusteringAtZoom={CLUSTER_MAX_ZOOM}
          onClick={handleClusterClick}
          maxClusterRadius={getClusterRadiusByZoom}
        >
          {occurrenceMarkers.map(renderOccurrenceMarker)}
        </MarkerClusterGroup>
      </MapContainer>

      {legendVisible && (
      <MapLegend onClose={toggleLegend} />
      )}
      
    </div>
  );
}
