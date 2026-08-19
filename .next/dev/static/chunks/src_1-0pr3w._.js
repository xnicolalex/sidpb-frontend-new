(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/entities/occurrence/occurrence.mappers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "occurrenceCollectionToOccurrences",
    ()=>occurrenceCollectionToOccurrences,
    "occurrenceFeatureToOccurrence",
    ()=>occurrenceFeatureToOccurrence
]);
function occurrenceFeatureToOccurrence(feature) {
    const [lon, lat] = feature.geometry.coordinates;
    return {
        id: feature.properties.id,
        coordinates: [
            lon,
            lat
        ],
        city: feature.properties.city,
        state: feature.properties.state,
        disease: feature.properties.disease,
        vector: feature.properties.vector,
        date: feature.properties.date,
        host: feature.properties.host,
        hostCategory: feature.properties.hostCategory,
        hostSex: feature.properties.hostSex,
        hostAge: feature.properties.hostAge,
        outcome: feature.properties.outcome,
        articles: feature.properties.articles
    };
}
function occurrenceCollectionToOccurrences(collection) {
    return collection?.features.map(occurrenceFeatureToOccurrence) ?? [];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/map/components/LeafletMap/LeafletMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeafletMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2d$cluster$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet-cluster/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$occurrence$2f$occurrence$2e$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/entities/occurrence/occurrence.mappers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$components$2f$LeafletMap$2f$OccurrenceMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/map/components/LeafletMap/OccurrenceMarker.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const defaultIcon = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [
        25,
        41
    ],
    iconAnchor: [
        12,
        41
    ],
    shadowSize: [
        41,
        41
    ]
});
const searchedLocationIcon = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
    iconRetinaUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [
        25,
        41
    ],
    iconAnchor: [
        12,
        41
    ],
    shadowSize: [
        41,
        41
    ]
});
const CLUSTER_MAX_ZOOM = 11;
const SCALE_BAR_WIDTH_PX = 120;
const TILE_SIZE = 256;
const ZOOM_SNAP = 0.25;
function MapMover({ center, zoom, bounds }) {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapMover.useEffect": ()=>{
            if (bounds && bounds.length === 2) {
                map.fitBounds(bounds, {
                    animate: true,
                    duration: 1.5
                });
            } else if (center) {
                map.flyTo(center, zoom, {
                    animate: true,
                    duration: 1.5
                });
            }
        }
    }["MapMover.useEffect"], [
        center,
        zoom,
        bounds,
        map
    ]);
    return null;
}
_s(MapMover, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = MapMover;
function metersPerPixel(latitude, zoom) {
    return 40075016.686 * Math.cos(latitude * Math.PI / 180) / Math.pow(2, zoom + 8);
}
function formatScaleKm(value) {
    if (value >= 100) return Math.round(value / 10) * 10;
    if (value >= 10) return Math.round(value);
    return Number(value.toFixed(1));
}
function hasSameCoordinates(occurrences) {
    const coordinates = new Set(occurrences.map((occurrence)=>occurrence.coordinates.join(",")));
    return coordinates.size === 1;
}
function getClusterRadiusByZoom(zoom) {
    if (zoom <= 4) return 70;
    if (zoom <= 6) return 55;
    if (zoom <= 8) return 42;
    if (zoom <= 10) return 30;
    return 0;
}
function getAdaptiveMinZoom(map) {
    const mapHeight = map.getSize().y;
    if (!mapHeight) return 0;
    const rawMinZoom = Math.log2(mapHeight / TILE_SIZE);
    return Math.max(0, Math.ceil(rawMinZoom / ZOOM_SNAP) * ZOOM_SNAP);
}
function AdaptiveMinZoom() {
    _s1();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdaptiveMinZoom.useEffect": ()=>{
            function updateMinZoom() {
                map.invalidateSize();
                const nextMinZoom = getAdaptiveMinZoom(map);
                map.setMinZoom(nextMinZoom);
                if (map.getZoom() < nextMinZoom) {
                    map.setZoom(nextMinZoom, {
                        animate: false
                    });
                }
            }
            updateMinZoom();
            const timeout = window.setTimeout(updateMinZoom, 100);
            map.on("resize", updateMinZoom);
            window.addEventListener("resize", updateMinZoom);
            return ({
                "AdaptiveMinZoom.useEffect": ()=>{
                    window.clearTimeout(timeout);
                    map.off("resize", updateMinZoom);
                    window.removeEventListener("resize", updateMinZoom);
                }
            })["AdaptiveMinZoom.useEffect"];
        }
    }["AdaptiveMinZoom.useEffect"], [
        map
    ]);
    return null;
}
_s1(AdaptiveMinZoom, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c1 = AdaptiveMinZoom;
function MapTelemetry({ onMouseCoordinateChange, onScaleChange, onInternalScaleChange }) {
    _s2();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapTelemetry.useEffect": ()=>{
            const updateScale = {
                "MapTelemetry.useEffect.updateScale": ()=>{
                    const center = map.getCenter();
                    const scaleKm = metersPerPixel(center.lat, map.getZoom()) * SCALE_BAR_WIDTH_PX / 1000;
                    const formattedScaleKm = formatScaleKm(scaleKm);
                    onInternalScaleChange?.(formattedScaleKm);
                    onScaleChange?.(formattedScaleKm);
                }
            }["MapTelemetry.useEffect.updateScale"];
            const handleMouseMove = {
                "MapTelemetry.useEffect.handleMouseMove": (event)=>{
                    onMouseCoordinateChange?.([
                        event.latlng.lat,
                        event.latlng.lng
                    ]);
                }
            }["MapTelemetry.useEffect.handleMouseMove"];
            const handleMouseOut = {
                "MapTelemetry.useEffect.handleMouseOut": ()=>{
                    onMouseCoordinateChange?.(null);
                }
            }["MapTelemetry.useEffect.handleMouseOut"];
            updateScale();
            map.on("mousemove", handleMouseMove);
            map.on("mouseout", handleMouseOut);
            map.on("zoomend moveend", updateScale);
            return ({
                "MapTelemetry.useEffect": ()=>{
                    map.off("mousemove", handleMouseMove);
                    map.off("mouseout", handleMouseOut);
                    map.off("zoomend moveend", updateScale);
                }
            })["MapTelemetry.useEffect"];
        }
    }["MapTelemetry.useEffect"], [
        map,
        onInternalScaleChange,
        onMouseCoordinateChange,
        onScaleChange
    ]);
    return null;
}
_s2(MapTelemetry, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c2 = MapTelemetry;
function LeafletMap({ zoom = 4, center = [
    -14.235,
    -51.925
], bounds, markerPosition, mapView, occurrences, onOccurrenceClick, onClusterClick, onMouseCoordinateChange, onScaleChange, selectedOccurrence }) {
    _s3();
    const mapContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentScaleKmRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(500);
    const occurrenceByMarkerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new WeakMap());
    const occurrenceMarkers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeafletMap.useMemo[occurrenceMarkers]": ()=>occurrences?.features.map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$occurrence$2f$occurrence$2e$mappers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["occurrenceFeatureToOccurrence"]) ?? []
    }["LeafletMap.useMemo[occurrenceMarkers]"], [
        occurrences
    ]);
    const getClusterOccurrences = (cluster)=>{
        return cluster.getAllChildMarkers().map((marker)=>occurrenceByMarkerRef.current.get(marker)).filter((occurrence)=>Boolean(occurrence));
    };
    const handleClusterClick = (event)=>{
        const cluster = event.layer;
        const clusterOccurrences = getClusterOccurrences(cluster);
        if (clusterOccurrences.length === 0) return;
        const map = cluster._map;
        const currentZoom = map.getZoom();
        const shouldOpenPanel = currentZoom >= CLUSTER_MAX_ZOOM || hasSameCoordinates(clusterOccurrences);
        if (shouldOpenPanel) {
            onClusterClick?.(clusterOccurrences);
            return;
        }
        map.fitBounds(cluster.getBounds(), {
            padding: [
                48,
                48
            ],
            maxZoom: CLUSTER_MAX_ZOOM
        });
    };
    const renderOccurrenceMarker = (occurrence)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$components$2f$LeafletMap$2f$OccurrenceMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OccurrenceMarker"], {
            occurrence: occurrence,
            icon: defaultIcon,
            selectedOccurrence: selectedOccurrence,
            onOccurrenceClick: onOccurrenceClick,
            onMarkerRef: (onMarkerRef)=>{
                if (onMarkerRef) {
                    occurrenceByMarkerRef.current.set(onMarkerRef, occurrence);
                }
            }
        }, occurrence.id, false, {
            fileName: "[project]/src/features/map/components/LeafletMap/LeafletMap.tsx",
            lineNumber: 259,
            columnNumber: 3
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mapContainerRef,
        className: "relative h-full w-full overflow-hidden bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
            center: center,
            zoom: zoom,
            scrollWheelZoom: true,
            zoomControl: false,
            worldCopyJump: true,
            zoomSnap: 0.25,
            zoomDelta: 0.5,
            className: "h-full w-full",
            style: {
                height: "100%",
                width: "100%",
                zIndex: 0
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdaptiveMinZoom, {}, void 0, false, {
                    fileName: "[project]/src/features/map/components/LeafletMap/LeafletMap.tsx",
                    lineNumber: 291,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                    attribution: mapView === "satellite" ? "Tiles &copy; Esri" : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    url: mapView === "satellite" ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    noWrap: false
                }, void 0, false, {
                    fileName: "[project]/src/features/map/components/LeafletMap/LeafletMap.tsx",
                    lineNumber: 299,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapMover, {
                    center: center,
                    zoom: zoom,
                    bounds: bounds
                }, void 0, false, {
                    fileName: "[project]/src/features/map/components/LeafletMap/LeafletMap.tsx",
                    lineNumber: 313,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapTelemetry, {
                    onMouseCoordinateChange: onMouseCoordinateChange,
                    onScaleChange: onScaleChange,
                    onInternalScaleChange: (nextScaleKm)=>{
                        currentScaleKmRef.current = nextScaleKm;
                    }
                }, void 0, false, {
                    fileName: "[project]/src/features/map/components/LeafletMap/LeafletMap.tsx",
                    lineNumber: 314,
                    columnNumber: 9
                }, this),
                markerPosition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                    position: markerPosition,
                    icon: searchedLocationIcon
                }, void 0, false, {
                    fileName: "[project]/src/features/map/components/LeafletMap/LeafletMap.tsx",
                    lineNumber: 323,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2d$cluster$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    chunkedLoading: true,
                    showCoverageOnHover: false,
                    spiderfyOnMaxZoom: true,
                    zoomToBoundsOnClick: false,
                    disableClusteringAtZoom: CLUSTER_MAX_ZOOM,
                    onClick: handleClusterClick,
                    maxClusterRadius: getClusterRadiusByZoom,
                    children: occurrenceMarkers.map(renderOccurrenceMarker)
                }, "clustered", false, {
                    fileName: "[project]/src/features/map/components/LeafletMap/LeafletMap.tsx",
                    lineNumber: 326,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/map/components/LeafletMap/LeafletMap.tsx",
            lineNumber: 279,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/map/components/LeafletMap/LeafletMap.tsx",
        lineNumber: 274,
        columnNumber: 5
    }, this);
}
_s3(LeafletMap, "AmWs/gJnjAgcwscISK1pdesicCk=");
_c3 = LeafletMap;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "MapMover");
__turbopack_context__.k.register(_c1, "AdaptiveMinZoom");
__turbopack_context__.k.register(_c2, "MapTelemetry");
__turbopack_context__.k.register(_c3, "LeafletMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/map/components/LeafletMap/LeafletMap.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/features/map/components/LeafletMap/LeafletMap.tsx [app-client] (ecmascript)"));
}),
"[project]/src/features/map/components/LeafletMap/OccurrenceMarker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OccurrenceMarker",
    ()=>OccurrenceMarker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
"use client";
;
;
function OccurrenceMarker({ occurrence, icon, selectedOccurrence, onMarkerRef, onOccurrenceClick }) {
    const [lon, lat] = occurrence.coordinates;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
        ref: onMarkerRef,
        position: [
            lat,
            lon
        ],
        icon: icon,
        opacity: selectedOccurrence?.id === occurrence.id ? 1 : 0.85,
        eventHandlers: {
            click: ()=>onOccurrenceClick?.(occurrence)
        }
    }, void 0, false, {
        fileName: "[project]/src/features/map/components/LeafletMap/OccurrenceMarker.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = OccurrenceMarker;
var _c;
__turbopack_context__.k.register(_c, "OccurrenceMarker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1-0pr3w._.js.map