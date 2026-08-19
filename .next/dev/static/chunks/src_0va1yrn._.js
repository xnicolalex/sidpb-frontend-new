(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$constants$2f$dashboardDefaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/dashboard/constants/dashboardDefaults.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$hooks$2f$useFullscreen$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/dashboard/hooks/useFullscreen.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$occurrences$2f$hooks$2f$useOccurrences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/occurrences/hooks/useOccurrences.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$components$2f$ArticlesPanel$2f$ArticlesPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hosts$2f$components$2f$HostPanel$2f$HostPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/hosts/components/HostPanel/HostPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$locations$2f$components$2f$LocationSearch$2f$LocationSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/locations/components/LocationSearch/LocationSearch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$occurrences$2f$components$2f$OccurrencePanel$2f$OccurrencePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$vectors$2f$components$2f$VectorPanel$2f$VectorPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2f$DashboardShell$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layouts/DashboardShell/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$SideboardToolbar$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/organisms/SideboardToolbar/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$MapLegend$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/organisms/MapLegend/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$MapTelemetryOverlay$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/organisms/MapTelemetryOverlay/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$dashboard$2f$DashboardFooterSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/dashboard/DashboardFooterSection.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
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
;
;
;
;
;
;
const LeafletMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/features/map/components/LeafletMap/LeafletMap.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/features/map/components/LeafletMap/LeafletMap.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = LeafletMap;
function DashboardPage() {
    _s();
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$constants$2f$dashboardDefaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_MAP_ZOOM"]);
    const { isFullscreen, toggleFullscreen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$hooks$2f$useFullscreen$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFullscreen"])();
    const [mapView, setMapView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("street");
    const [showLegend, setShowLegend] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [markerPosition, setMarkerPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mapCenter, setMapCenter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$constants$2f$dashboardDefaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_MAP_CENTER"]);
    const [mapBounds, setMapBounds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [mouseCoordinate, setMouseCoordinate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scaleKm, setScaleKm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(500);
    const [isSearchOpen, setIsSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedOccurrences, setSelectedOccurrences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isOccurrencePanelExpanded, setIsOccurrencePanelExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activePanel, setActivePanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPanelMaximized, setIsPanelMaximized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedArticles, setSelectedArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedVectors, setSelectedVectors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$constants$2f$dashboardDefaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SELECTED_VECTORS"]);
    const [selectedHosts, setSelectedHosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$constants$2f$dashboardDefaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SELECTED_HOSTS"]);
    const [appliedFilters, setAppliedFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        articles: [],
        vectors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$constants$2f$dashboardDefaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SELECTED_VECTORS"],
        hosts: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            const timeout = window.setTimeout({
                "DashboardPage.useEffect.timeout": ()=>{
                    window.dispatchEvent(new Event("resize"));
                }
            }["DashboardPage.useEffect.timeout"], 100);
            return ({
                "DashboardPage.useEffect": ()=>window.clearTimeout(timeout)
            })["DashboardPage.useEffect"];
        }
    }["DashboardPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!isSearchOpen) return;
            requestAnimationFrame({
                "DashboardPage.useEffect": ()=>{
                    searchInputRef.current?.focus();
                }
            }["DashboardPage.useEffect"]);
        }
    }["DashboardPage.useEffect"], [
        isSearchOpen
    ]);
    const { data: occurrenceData, isLoading: isLoadingOccurrences, error: occurrencesError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$occurrences$2f$hooks$2f$useOccurrences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOccurrences"])({
        filters: {
            articles: appliedFilters.articles,
            vectors: appliedFilters.vectors,
            hosts: appliedFilters.hosts
        }
    });
    const resetView = ()=>{
        setZoom(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$constants$2f$dashboardDefaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_MAP_ZOOM"]);
        setMapCenter(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$constants$2f$dashboardDefaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_MAP_CENTER"]);
        setMapBounds(undefined);
        setMarkerPosition(null);
        setSelectedOccurrences([]);
        setIsOccurrencePanelExpanded(false);
        setActivePanel(null);
        setSelectedArticles([]);
        setSelectedVectors(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$constants$2f$dashboardDefaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SELECTED_VECTORS"]);
        setSelectedHosts(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$constants$2f$dashboardDefaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SELECTED_HOSTS"]);
        setAppliedFilters({
            articles: [],
            vectors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$constants$2f$dashboardDefaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SELECTED_VECTORS"],
            hosts: []
        });
    };
    const handlePanelChange = (panel)=>{
        if (panel !== null) {
            setSelectedOccurrences([]);
            setIsOccurrencePanelExpanded(false);
        }
        setActivePanel(activePanel === panel ? null : panel);
        setIsPanelMaximized(false);
    };
    const handleOccurrenceClick = (occurrence)=>{
        setSelectedOccurrences([
            occurrence
        ]);
        setIsOccurrencePanelExpanded(false);
    };
    const handleLocationSelect = (lat, lon, suggestedZoom)=>{
        setMapCenter([
            lat,
            lon
        ]);
        setZoom(suggestedZoom);
        setMarkerPosition([
            lat,
            lon
        ]);
    };
    const handleClusterClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DashboardPage.useCallback[handleClusterClick]": (occurrences)=>{
            setSelectedOccurrences(occurrences);
            setIsOccurrencePanelExpanded(false);
        }
    }["DashboardPage.useCallback[handleClusterClick]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2f$DashboardShell$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardShell"], {
        footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$dashboard$2f$DashboardFooterSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardFooterSection"], {}, void 0, false, {
            fileName: "[project]/src/app/dashboard/page.tsx",
            lineNumber: 142,
            columnNumber: 29
        }, this),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-[1000] flex flex-col gap-2 w-56",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$SideboardToolbar$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SideboardToolbar"], {
                        activePanel: activePanel,
                        isFullscreen: isFullscreen,
                        mapView: mapView,
                        onToggleMapView: ()=>setMapView((current)=>current === "street" ? "satellite" : "street"),
                        isSearchOpen: isSearchOpen,
                        onSearchToggle: ()=>setIsSearchOpen((prev)=>!prev),
                        showLegend: showLegend,
                        onZoomIn: ()=>setZoom((previous)=>Math.min(previous * 1.5, 8)),
                        onZoomOut: ()=>setZoom((previous)=>Math.max(previous / 1.5, 0.5)),
                        onToggleFullscreen: toggleFullscreen,
                        onResetView: resetView,
                        onPanelChange: handlePanelChange,
                        onToggleLegend: ()=>setShowLegend((current)=>!current)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    isSearchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$locations$2f$components$2f$LocationSearch$2f$LocationSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocationSearch"], {
                        ref: searchInputRef,
                        onLocationSelect: (lat, lon, suggestedZoom)=>{
                            setMapCenter([
                                lat,
                                lon
                            ]);
                            setZoom(suggestedZoom);
                            setMarkerPosition([
                                lat,
                                lon
                            ]);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            activePanel === "artigos" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$components$2f$ArticlesPanel$2f$ArticlesPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArticlesPanel"], {
                isExpanded: isPanelMaximized,
                onClose: ()=>setActivePanel(null),
                onToggleExpand: ()=>setIsPanelMaximized((current)=>!current),
                selectedArticles: selectedArticles,
                onArticleSelect: setSelectedArticles,
                onApplyFilter: ()=>{
                    setAppliedFilters((previous)=>({
                            ...previous,
                            articles: selectedArticles
                        }));
                    setActivePanel(null);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 173,
                columnNumber: 9
            }, this),
            activePanel === "vetor" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$vectors$2f$components$2f$VectorPanel$2f$VectorPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VectorPanel"], {
                isExpanded: isPanelMaximized,
                onClose: ()=>setActivePanel(null),
                onToggleExpand: ()=>setIsPanelMaximized((current)=>!current),
                selectedVectors: selectedVectors,
                onVectorSelect: setSelectedVectors,
                onApplyFilter: ()=>{
                    setAppliedFilters((previous)=>({
                            ...previous,
                            vectors: selectedVectors
                        }));
                    setActivePanel(null);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 187,
                columnNumber: 9
            }, this),
            activePanel === "hospedeiro" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hosts$2f$components$2f$HostPanel$2f$HostPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HostPanel"], {
                isExpanded: isPanelMaximized,
                onClose: ()=>setActivePanel(null),
                onToggleExpand: ()=>setIsPanelMaximized((current)=>!current),
                selectedHosts: selectedHosts,
                onHostSelect: setSelectedHosts,
                onApplyFilter: ()=>{
                    setAppliedFilters((previous)=>({
                            ...previous,
                            hosts: selectedHosts
                        }));
                    setActivePanel(null);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 201,
                columnNumber: 9
            }, this),
            showLegend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$MapLegend$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapLegend"], {
                onClose: ()=>setShowLegend(false)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 214,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$MapTelemetryOverlay$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapTelemetryOverlay"], {
                mouseCoordinate: mouseCoordinate,
                scaleKm: scaleKm
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 216,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeafletMap, {
                    zoom: zoom,
                    mapView: mapView,
                    center: mapCenter,
                    bounds: mapBounds,
                    markerPosition: markerPosition,
                    occurrences: occurrenceData,
                    onOccurrenceClick: handleOccurrenceClick,
                    onClusterClick: handleClusterClick,
                    onMouseCoordinateChange: setMouseCoordinate,
                    onScaleChange: setScaleKm,
                    selectedOccurrence: selectedOccurrences[0] ?? null
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 219,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 218,
                columnNumber: 11
            }, this),
            isLoadingOccurrences && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-4 z-[400] bg-card border border-border rounded-none px-3 py-2 text-xs text-muted-foreground shadow",
                children: "Carregando ocorrencias..."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 235,
                columnNumber: 13
            }, this),
            occurrencesError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-4 z-[400] bg-destructive/10 border border-destructive/20 rounded-none px-3 py-2 text-xs text-destructive shadow",
                children: "Exibindo dados locais."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 241,
                columnNumber: 13
            }, this),
            selectedOccurrences.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$occurrences$2f$components$2f$OccurrencePanel$2f$OccurrencePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OccurrencePanel"], {
                occurrences: selectedOccurrences,
                isExpanded: isOccurrencePanelExpanded,
                onClose: ()=>{
                    setSelectedOccurrences([]);
                    setIsOccurrencePanelExpanded(false);
                },
                onExpand: ()=>setIsOccurrencePanelExpanded(true),
                onCollapse: ()=>setIsOccurrencePanelExpanded(false)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 247,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/page.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "I1ZqAWZW7UVr0zF8CN+7DPu2QOo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$hooks$2f$useFullscreen$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFullscreen"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$occurrences$2f$hooks$2f$useOccurrences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOccurrences"]
    ];
});
_c1 = DashboardPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "LeafletMap");
__turbopack_context__.k.register(_c1, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layouts/DashboardShell/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardShell",
    ()=>DashboardShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$dashboard$2f$DashboardHeaderSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/dashboard/DashboardHeaderSection.tsx [app-client] (ecmascript)");
;
;
function DashboardShell({ footer, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$dashboard$2f$DashboardHeaderSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardHeaderSection"], {}, void 0, false, {
                fileName: "[project]/src/components/layouts/DashboardShell/index.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex relative overflow-hidden min-h-0",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/layouts/DashboardShell/index.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            footer
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layouts/DashboardShell/index.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = DashboardShell;
var _c;
__turbopack_context__.k.register(_c, "DashboardShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/molecules/LegendItem/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LegendItem",
    ()=>LegendItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function LegendItem({ marker, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3",
        children: [
            marker,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/molecules/LegendItem/index.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/molecules/LegendItem/index.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = LegendItem;
var _c;
__turbopack_context__.k.register(_c, "LegendItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/organisms/MapLegend/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapLegend",
    ()=>MapLegend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$LegendItem$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/molecules/LegendItem/index.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function MapLegend({ onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-3 right-3 z-[400] bg-card rounded-none border border-border shadow-lg p-4 w-56",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-foreground",
                        children: "Legenda"
                    }, void 0, false, {
                        fileName: "[project]/src/components/organisms/MapLegend/index.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-6 w-6",
                        onClick: onClose,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/organisms/MapLegend/index.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/organisms/MapLegend/index.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/organisms/MapLegend/index.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$LegendItem$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LegendItem"], {
                        marker: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-3.5 h-3.5 rounded-none bg-accent"
                        }, void 0, false, {
                            fileName: "[project]/src/components/organisms/MapLegend/index.tsx",
                            lineNumber: 21,
                            columnNumber: 29
                        }, this),
                        label: "Ocorrência individual"
                    }, void 0, false, {
                        fileName: "[project]/src/components/organisms/MapLegend/index.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$LegendItem$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LegendItem"], {
                        marker: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-3.5 h-3.5 rounded-none bg-primary"
                        }, void 0, false, {
                            fileName: "[project]/src/components/organisms/MapLegend/index.tsx",
                            lineNumber: 22,
                            columnNumber: 29
                        }, this),
                        label: "Múltiplas ocorrências"
                    }, void 0, false, {
                        fileName: "[project]/src/components/organisms/MapLegend/index.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$LegendItem$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LegendItem"], {
                        marker: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[12px] border-b-destructive"
                        }, void 0, false, {
                            fileName: "[project]/src/components/organisms/MapLegend/index.tsx",
                            lineNumber: 23,
                            columnNumber: 29
                        }, this),
                        label: "Cluster de ocorrências"
                    }, void 0, false, {
                        fileName: "[project]/src/components/organisms/MapLegend/index.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/organisms/MapLegend/index.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/organisms/MapLegend/index.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = MapLegend;
var _c;
__turbopack_context__.k.register(_c, "MapLegend");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/organisms/MapTelemetryOverlay/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapTelemetryOverlay",
    ()=>MapTelemetryOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function MapTelemetryOverlay({ mouseCoordinate, scaleKm }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-8 right-3 z-[400] flex flex-col items-end gap-1 pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card/90 backdrop-blur border border-border rounded-none px-2 py-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-mono text-muted-foreground",
                    children: mouseCoordinate ? `${mouseCoordinate[0].toFixed(5)}, ${mouseCoordinate[1].toFixed(5)}` : "--.-----, --.-----"
                }, void 0, false, {
                    fileName: "[project]/src/components/organisms/MapTelemetryOverlay/index.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/MapTelemetryOverlay/index.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card/90 backdrop-blur border border-border rounded-none px-2 py-1 min-w-36",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1.5 w-[120px] border-x border-b border-foreground/70 mb-1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/organisms/MapTelemetryOverlay/index.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                            scaleKm.toLocaleString("pt-BR"),
                            " km"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/organisms/MapTelemetryOverlay/index.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/organisms/MapTelemetryOverlay/index.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/organisms/MapTelemetryOverlay/index.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = MapTelemetryOverlay;
var _c;
__turbopack_context__.k.register(_c, "MapTelemetryOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/organisms/SideboardToolbar/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SideboardToolbar",
    ()=>SideboardToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-out.js [app-client] (ecmascript) <export default as ZoomOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function SideboardToolbar({ activePanel, isFullscreen, showLegend, isSearchOpen, mapView, onSearchToggle, onZoomIn, onZoomOut, onToggleMapView, onToggleFullscreen, onResetView, onPanelChange, onToggleLegend }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                    asChild: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        className: "w-56 rounded-none justify-start gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                lineNumber: 58,
                                columnNumber: 17
                            }, this),
                            "Ferramentas do mapa"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                    lineNumber: 56,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    side: "bottom",
                    align: "start",
                    className: "w-56 bg-card border border-border shadow-md rounded-none p-1 z-[600]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                            onClick: onZoomIn,
                            className: "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-muted outline-none rounded-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this),
                                "Aumentar zoom"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                            lineNumber: 68,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                            onClick: onZoomOut,
                            className: "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-muted outline-none rounded-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__["ZoomOut"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                    lineNumber: 80,
                                    columnNumber: 17
                                }, this),
                                "Diminuir zoom"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                            lineNumber: 76,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                            onClick: onResetView,
                            className: "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-muted outline-none rounded-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, this),
                                "Visualização padrão"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                            lineNumber: 84,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                            onClick: onToggleMapView,
                            className: "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-muted outline-none rounded-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this),
                                mapView === "satellite" ? "Visão de ruas" : "Visão de satélite"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                            lineNumber: 92,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                            onClick: onToggleFullscreen,
                            className: "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-muted outline-none rounded-none",
                            children: [
                                isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                    lineNumber: 104,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                    lineNumber: 104,
                                    columnNumber: 69
                                }, this),
                                isFullscreen ? "Sair da tela cheia" : "Tela cheia"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                            lineNumber: 100,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                            className: "h-px bg-border my-1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                            lineNumber: 108,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                            onClick: ()=>onSearchToggle?.(),
                            className: "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-muted outline-none rounded-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this),
                                isSearchOpen ? "Fechar pesquisa" : "Pesquisar local"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                            lineNumber: 110,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                            onClick: onToggleLegend,
                            className: "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-muted outline-none rounded-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this),
                                showLegend ? "Ocultar legenda" : "Mostrar legenda"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                            lineNumber: 118,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
                                    className: "flex items-center justify-between gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-muted outline-none rounded-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 21
                                                }, this),
                                                "Painéis e filtros"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                            lineNumber: 128,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                            lineNumber: 132,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
                                    className: "min-w-52 bg-card border border-border shadow-md rounded-none p-1 z-[700]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                                            onClick: ()=>onPanelChange("artigos"),
                                            className: "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-muted outline-none rounded-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, this),
                                                "Fontes / Artigos"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                            lineNumber: 136,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                                            onClick: ()=>onPanelChange("vetor"),
                                            className: "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-muted outline-none rounded-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 21
                                                }, this),
                                                "Filtro por vetor"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                            lineNumber: 144,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                                            onClick: ()=>onPanelChange("hospedeiro"),
                                            className: "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-muted outline-none rounded-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 21
                                                }, this),
                                                "Filtro por hospedeiro"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                            lineNumber: 152,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                            lineNumber: 126,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
                    lineNumber: 63,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
            lineNumber: 55,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/organisms/SideboardToolbar/index.tsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
_c = SideboardToolbar;
var _c;
__turbopack_context__.k.register(_c, "SideboardToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-none gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-none px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/checkbox.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/checkbox.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/checkbox.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Checkbox;
;
var _c;
__turbopack_context__.k.register(_c, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticlesPanel",
    ()=>ArticlesPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$hooks$2f$useArticles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/articles/hooks/useArticles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Extended mock articles for demonstration
const allArticles = [
    {
        id: "art-001",
        title: "Miíase cutânea em cães no estado do Rio de Janeiro",
        authors: [
            "Silva, J.A.",
            "Santos, M.B.",
            "Oliveira, C.D."
        ],
        year: 2016,
        type: "caso clínico",
        journal: "Revista Brasileira de Parasitologia Veterinária"
    },
    {
        id: "art-002",
        title: "Miíase humana em área urbana de São Paulo",
        authors: [
            "Ferreira, R.P.",
            "Lima, S.T."
        ],
        year: 2015,
        type: "caso clínico",
        journal: "Revista de Saúde Pública"
    },
    {
        id: "art-003",
        title: "Epidemiologia da miíase em humanos no Brasil",
        authors: [
            "Costa, A.B.",
            "Mendes, L.C.",
            "Ferreira, R.P."
        ],
        year: 2017,
        type: "revisão",
        journal: "Parasitology Research"
    },
    {
        id: "art-004",
        title: "Impacto econômico da miíase em bovinos no Nordeste brasileiro",
        authors: [
            "Souza, F.G.",
            "Almeida, P.R.",
            "Barbosa, T.M."
        ],
        year: 2013,
        type: "outro",
        journal: "Arquivo Brasileiro de Medicina Veterinária"
    },
    {
        id: "art-005",
        title: "Ocorrência de miíase em ovinos no Centro-Oeste brasileiro",
        authors: [
            "Rodrigues, H.S.",
            "Nascimento, E.V."
        ],
        year: 2017,
        type: "caso clínico",
        journal: "Veterinária e Zootecnia"
    },
    {
        id: "art-006",
        title: "Miíase em felinos domésticos no Rio Grande do Sul",
        authors: [
            "Martins, D.L.",
            "Cardoso, R.A.",
            "Vieira, M.S."
        ],
        year: 2014,
        type: "caso clínico",
        journal: "Acta Scientiae Veterinariae"
    },
    {
        id: "art-007",
        title: "Miíase umbilical em recém-nascido na Amazônia",
        authors: [
            "Oliveira, N.F.",
            "Santos, C.R."
        ],
        year: 2012,
        type: "caso clínico",
        journal: "Jornal de Pediatria"
    },
    {
        id: "art-008",
        title: "Miíase em suínos criados em sistema extensivo em Pernambuco",
        authors: [
            "Lima, A.J.",
            "Freitas, B.M.",
            "Nunes, C.P."
        ],
        year: 2011,
        type: "anais de congresso"
    },
    {
        id: "art-009",
        title: "Primeiro relato de miíase em caprinos no Distrito Federal",
        authors: [
            "Pereira, G.S.",
            "Alves, L.T."
        ],
        year: 2018,
        type: "caso clínico",
        journal: "Ciência Rural"
    },
    {
        id: "art-010",
        title: "Miíase em capivara de vida livre no Maranhão",
        authors: [
            "Sousa, M.R.",
            "Bezerra, J.A.",
            "Costa, F.L."
        ],
        year: 2010,
        type: "caso clínico",
        journal: "Brazilian Journal of Veterinary Parasitology"
    },
    {
        id: "art-011",
        title: "Miíase auricular em equino no Espírito Santo",
        authors: [
            "Santos, V.M.",
            "Ribeiro, P.A."
        ],
        year: 2016,
        type: "caso clínico",
        journal: "Revista Brasileira de Medicina Veterinária"
    },
    {
        id: "art-012",
        title: "Miíase oral em paciente com neoplasia na Amazônia Oriental",
        authors: [
            "Carvalho, E.R.",
            "Moura, S.B.",
            "Tavares, L.M."
        ],
        year: 2009,
        type: "caso clínico",
        journal: "Revista de Odontologia da UNESP"
    },
    {
        id: "art-013",
        title: "Miíase fatal em cães no Nordeste brasileiro: série de casos",
        authors: [
            "Andrade, K.L.",
            "Gomes, R.F."
        ],
        year: 2015,
        type: "caso clínico",
        journal: "Semina: Ciências Agrárias"
    },
    {
        id: "art-014",
        title: "Revisão sistemática de miíase em animais domésticos no Brasil",
        authors: [
            "Fernandes, L.M.",
            "Pereira, A.B."
        ],
        year: 2019,
        type: "revisão",
        journal: "Parasitology International"
    },
    {
        id: "art-015",
        title: "Aspectos clínicos da miíase em equídeos",
        authors: [
            "Castro, R.P.",
            "Lima, F.G."
        ],
        year: 2008,
        type: "revisão",
        journal: "Veterinary Parasitology"
    },
    {
        id: "art-016",
        title: "Miíase nasofaríngea em ovino na região Sul",
        authors: [
            "Borges, T.A."
        ],
        year: 2005,
        type: "caso clínico",
        journal: "Ciência Animal Brasileira"
    },
    {
        id: "art-017",
        title: "Estudo retrospectivo de miíase em animais de produção",
        authors: [
            "Moreira, C.S.",
            "Alves, P.R."
        ],
        year: 2001,
        type: "outro",
        journal: "Arquivo Brasileiro de Medicina Veterinária"
    },
    {
        id: "art-018",
        title: "Cochliomyia hominivorax: revisão histórica no Brasil",
        authors: [
            "Guimarães, J.H.",
            "Papavero, N."
        ],
        year: 1999,
        type: "revisão",
        journal: "Memórias do Instituto Oswaldo Cruz"
    },
    {
        id: "art-019",
        title: "Controle biológico da mosca da bicheira",
        authors: [
            "Vargas-Terán, M."
        ],
        year: 1995,
        type: "anais de congresso"
    },
    {
        id: "art-020",
        title: "Primeiros registros de miíase no Maranhão",
        authors: [
            "Pinto, C."
        ],
        year: 1930,
        type: "outro",
        journal: "Boletim Biológico"
    }
];
const regions = [
    {
        id: "norte",
        label: "Norte",
        states: [
            "AC",
            "AM",
            "AP",
            "PA",
            "RO",
            "RR",
            "TO"
        ]
    },
    {
        id: "nordeste",
        label: "Nordeste",
        states: [
            "AL",
            "BA",
            "CE",
            "MA",
            "PB",
            "PE",
            "PI",
            "RN",
            "SE"
        ]
    },
    {
        id: "centro-oeste",
        label: "Centro-Oeste",
        states: [
            "DF",
            "GO",
            "MS",
            "MT"
        ]
    },
    {
        id: "sudeste",
        label: "Sudeste",
        states: [
            "ES",
            "MG",
            "RJ",
            "SP"
        ]
    },
    {
        id: "sul",
        label: "Sul",
        states: [
            "PR",
            "RS",
            "SC"
        ]
    }
];
const articleTypes = [
    {
        id: "revisão",
        label: "Revisão"
    },
    {
        id: "caso clínico",
        label: "Caso Clínico"
    },
    {
        id: "anais de congresso",
        label: "Anais de Congresso"
    },
    {
        id: "outro",
        label: "Outro"
    }
];
function ArticlesPanel({ isExpanded, onClose, onToggleExpand, selectedArticles, onArticleSelect, onApplyFilter }) {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedRegion, setSelectedRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedTypes, setSelectedTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { data: articlesFromApi } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$hooks$2f$useArticles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useArticles"])();
    const articles = articlesFromApi ?? allArticles;
    // Filter articles
    const filteredArticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArticlesPanel.useMemo[filteredArticles]": ()=>{
            let result = articles;
            // Search filter
            if (searchQuery.trim()) {
                const query = searchQuery.toLowerCase();
                result = result.filter({
                    "ArticlesPanel.useMemo[filteredArticles]": (article)=>article.title.toLowerCase().includes(query) || article.authors.some({
                            "ArticlesPanel.useMemo[filteredArticles]": (a)=>a.toLowerCase().includes(query)
                        }["ArticlesPanel.useMemo[filteredArticles]"]) || article.year.toString().includes(query)
                }["ArticlesPanel.useMemo[filteredArticles]"]);
            }
            // Type filter
            if (selectedTypes.length > 0) {
                result = result.filter({
                    "ArticlesPanel.useMemo[filteredArticles]": (article)=>selectedTypes.includes(article.type)
                }["ArticlesPanel.useMemo[filteredArticles]"]);
            }
            return result;
        }
    }["ArticlesPanel.useMemo[filteredArticles]"], [
        articles,
        searchQuery,
        selectedTypes
    ]);
    // Chart data for articles over time
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArticlesPanel.useMemo[chartData]": ()=>{
            const periods = [
                {
                    name: "Antes de 1999",
                    min: 0,
                    max: 1999
                },
                {
                    name: "2000-2008",
                    min: 2000,
                    max: 2008
                },
                {
                    name: "2009-2020",
                    min: 2009,
                    max: 2020
                }
            ];
            return periods.map({
                "ArticlesPanel.useMemo[chartData]": (period)=>({
                        name: period.name,
                        quantidade: articles.filter({
                            "ArticlesPanel.useMemo[chartData]": (a)=>a.year >= period.min && a.year <= period.max
                        }["ArticlesPanel.useMemo[chartData]"]).length
                    })
            }["ArticlesPanel.useMemo[chartData]"]);
        }
    }["ArticlesPanel.useMemo[chartData]"], [
        articles
    ]);
    const handleArticleToggle = (articleId)=>{
        if (selectedArticles.includes(articleId)) {
            onArticleSelect(selectedArticles.filter((id)=>id !== articleId));
        } else {
            onArticleSelect([
                ...selectedArticles,
                articleId
            ]);
        }
    };
    const handleTypeToggle = (type)=>{
        if (selectedTypes.includes(type)) {
            setSelectedTypes(selectedTypes.filter((t)=>t !== type));
        } else {
            setSelectedTypes([
                ...selectedTypes,
                type
            ]);
        }
    };
    const handleSelectAll = ()=>{
        onArticleSelect(filteredArticles.map((a)=>a.id));
    };
    const handleClearSelection = ()=>{
        onArticleSelect([]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute left-4 top-16 bottom-4 z-20 bg-card border-r border-border shadow-xl flex flex-col transition-all duration-300 ${isExpanded ? "w-[600px]" : "w-96"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-foreground",
                        children: "Fontes / Artigos"
                    }, void 0, false, {
                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: onToggleExpand,
                                title: isExpanded ? "Recolher" : "Expandir",
                                children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                    lineNumber: 169,
                                    columnNumber: 27
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                    lineNumber: 169,
                                    columnNumber: 63
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: onClose,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-border space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Buscar por título, autor ou ano...",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                className: "w-full pl-10 pr-4 py-2 rounded-none border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        onClick: ()=>setShowFilters(!showFilters),
                        className: "w-full justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    "Filtros"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            showFilters ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                lineNumber: 201,
                                columnNumber: 26
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                lineNumber: 201,
                                columnNumber: 62
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    showFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-medium text-muted-foreground mb-2 block",
                                        children: "Região do Brasil"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: regions.map((region)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: selectedRegion === region.id ? "default" : "outline",
                                                size: "sm",
                                                onClick: ()=>setSelectedRegion(selectedRegion === region.id ? null : region.id),
                                                children: region.label
                                            }, region.id, false, {
                                                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-medium text-muted-foreground mb-2 block",
                                        children: "Tipo de Artigo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: articleTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: selectedTypes.includes(type.id) ? "default" : "outline",
                                                size: "sm",
                                                onClick: ()=>handleTypeToggle(type.id),
                                                children: type.label
                                            }, type.id, false, {
                                                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                                lineNumber: 235,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-medium text-foreground mb-3",
                        children: "Distribuição de Artigos por Período"
                    }, void 0, false, {
                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: "100%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                data: chartData,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                        strokeDasharray: "3 3",
                                        stroke: "hsl(var(--border))"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                        dataKey: "name",
                                        tick: {
                                            fontSize: 11,
                                            fill: "hsl(var(--muted-foreground))"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                        tick: {
                                            fontSize: 11,
                                            fill: "hsl(var(--muted-foreground))"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                        lineNumber: 264,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        contentStyle: {
                                            backgroundColor: "hsl(var(--card))",
                                            border: "1px solid hsl(var(--border))",
                                            borderRadius: "8px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                        lineNumber: 265,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                        type: "monotone",
                                        dataKey: "quantidade",
                                        stroke: "hsl(var(--primary))",
                                        strokeWidth: 2,
                                        dot: {
                                            fill: "hsl(var(--primary))"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                lineNumber: 258,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                            lineNumber: 257,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                        lineNumber: 256,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                lineNumber: 252,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 border-b border-border flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            selectedArticles.length,
                            " de ",
                            filteredArticles.length,
                            " selecionados"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: handleSelectAll,
                                children: "Selecionar todos"
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: handleClearSelection,
                                children: "Limpar"
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto",
                children: filteredArticles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3 border-b border-border hover:bg-muted/50 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                    checked: selectedArticles.includes(article.id),
                                    onCheckedChange: ()=>handleArticleToggle(article.id),
                                    className: "mt-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-foreground leading-tight",
                                            children: article.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                            lineNumber: 314,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mt-1",
                                            children: [
                                                article.authors.join(", "),
                                                " (",
                                                article.year,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                            lineNumber: 317,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs px-2 py-0.5 rounded-none ${article.type === "revisão" ? "bg-primary/10 text-primary" : article.type === "caso clínico" ? "bg-accent/10 text-accent" : article.type === "anais de congresso" ? "bg-chart-3/10 text-chart-3" : "bg-muted text-muted-foreground"}`,
                                                    children: article.type
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 19
                                                }, this),
                                                article.journal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground truncate",
                                                    children: article.journal
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                                    lineNumber: 313,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                            lineNumber: 307,
                            columnNumber: 13
                        }, this)
                    }, article.id, false, {
                        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                        lineNumber: 303,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: onApplyFilter,
                    className: "w-full",
                    disabled: selectedArticles.length === 0,
                    children: [
                        "Aplicar Filtro (",
                        selectedArticles.length,
                        " artigos)"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                    lineNumber: 348,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/articles/components/ArticlesPanel/ArticlesPanel.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_s(ArticlesPanel, "3+gvfms7uDADILLE/D9RrEzZSFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$hooks$2f$useArticles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useArticles"]
    ];
});
_c = ArticlesPanel;
var _c;
__turbopack_context__.k.register(_c, "ArticlesPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/articles/data/articles.mock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterOccurrencesBySearch",
    ()=>filterOccurrencesBySearch,
    "formatDate",
    ()=>formatDate,
    "getHostCategoryColor",
    ()=>getHostCategoryColor,
    "getOutcomeColor",
    ()=>getOutcomeColor,
    "mockGeoJsonData",
    ()=>mockGeoJsonData,
    "mockOccurrences",
    ()=>mockOccurrences
]);
const mockOccurrences = [
    {
        id: "occ-001",
        coordinates: [
            -46.6333,
            -23.5505
        ],
        city: "São Paulo",
        state: "RJ",
        disease: "Miíase",
        vector: "Cochliomyia hominivorax",
        date: "2026-03-15",
        host: "Canis lupus familiaris",
        hostCategory: "Companhia",
        hostSex: "Macho",
        hostAge: "9 meses",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-105",
                title: "Inquiry of cases of myiasis by Cochliomyia hominivorax in dogs (Canis familiaris) of the Northern and Western zones of Rio de Janeiro city in 2000",
                authors: [
                    "Cramer-Ribeiro BC",
                    "Sanavria A",
                    "Monteiro HHM",
                    "Oliveira MQ",
                    "Souza FS"
                ],
                year: 2003,
                type: "estudo epidemiológico",
                journal: "Braz J Vet Res Anim Sci"
            }
        ]
    },
    {
        id: "occ-002",
        coordinates: [
            -34.9771,
            -8.0235
        ],
        city: "Camaragibe",
        state: "SE",
        disease: "Miíase",
        vector: "Cochliomyia hominivorax",
        date: "2012-07-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "jovem",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-003",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Miíase",
        vector: "Cochliomyia hominivorax",
        date: "2000-01-01",
        host: "Canis lupus familiaris",
        hostCategory: "Companhia",
        hostSex: "Macho",
        hostAge: "adulto",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-106",
                title: "Inquérito sobre os casos de miíase por Cochliomyia hominivorax em cães da zona sul do município do Rio de Janeiro no ano 2000",
                authors: [
                    "Cramer-Ribeiro BC",
                    "Sanavria A",
                    "Oliveira MQ",
                    "Souza FS",
                    "Rocco FS",
                    "Cardoso PG"
                ],
                year: 2002,
                type: "estudo epidemiológico",
                journal: "Braz J Vet Res Anim Sci"
            }
        ]
    },
    {
        id: "occ-004",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Miíase",
        vector: "Cochliomyia hominivorax",
        date: "2000-02-01",
        host: "Canis lupus familiaris",
        hostCategory: "Companhia",
        hostSex: "Macho",
        hostAge: "adulto",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-107",
                title: "Larvicidal efficacy of nitenpyram on the treatment of myiasis caused by Cochliomyia hominivorax (Diptera: Calliphoridae) in dogs",
                authors: [
                    "Correia TR",
                    "Scott FB",
                    "Verocai GG",
                    "Souza CP",
                    "Fernandes JI",
                    "Melo RM"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Cochliomyia hominivorax in Brazil Vet Parasitol"
            }
        ]
    },
    {
        id: "occ-005",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Miíase",
        vector: "Cochliomyia hominivorax",
        date: "2000-03-01",
        host: "Canis lupus familiaris",
        hostCategory: "Companhia",
        hostSex: "Macho",
        hostAge: "adulto",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-108",
                title: "Efficacy of spinosad on the treatment of myiasis caused by Cochliomyia hominivorax (Diptera: Calliphoridae) in dogs",
                authors: [
                    "Oliveira PC",
                    "Moraes PA",
                    "Scott FB",
                    "Verocai GG",
                    "Correia TR",
                    "Fernandes JI"
                ],
                year: 2018,
                type: "caso clínico",
                journal: "Vet Parasitol"
            }
        ]
    },
    {
        id: "occ-006",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Miíase",
        vector: "Cochliomyia hominivorax",
        date: "1989-08-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "2 anos",
        outcome: "Não informado",
        articles: [
            {
                id: "art-005",
                title: "Sobre um tipo interessante de miíase dos bezerros e seu agente causal",
                authors: [
                    "Vaz Z",
                    "Carvalho GT"
                ],
                year: 1938,
                type: "artigo científico",
                journal: "Rev Fac Med Vet S Paulo"
            },
            {
                id: "art-006",
                title: "Miiase e perfuração do rumen de bezerros por larvas de Cochliomyia hominivorax (Coquerel, 1858)",
                authors: [
                    "Rocha UF",
                    "Vaz Z"
                ],
                year: 1950,
                type: "artigo científico",
                journal: "Significação econômica. Rev Fac Med Vet S Paulo"
            }
        ]
    },
    {
        id: "occ-007",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Miíase",
        vector: "Cochliomyia hominivorax",
        date: "1989-08-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "2 anos",
        outcome: "Não informado",
        articles: [
            {
                id: "art-006",
                title: "Miiase e perfuração do rumen de bezerros por larvas de Cochliomyia hominivorax (Coquerel, 1858)",
                authors: [
                    "Rocha UF",
                    "Vaz Z"
                ],
                year: 1950,
                type: "artigo científico",
                journal: "Significação econômica. Rev Fac Med Vet S Paulo"
            }
        ]
    },
    {
        id: "occ-008",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Miíase",
        vector: "Cochliomyia hominivorax",
        date: "1989-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "2 anos",
        outcome: "Não informado",
        articles: [
            {
                id: "art-007",
                title: "Primary myiasis in buffaloes--Bufalos bubais L., 1758--of the state of São Paulo, Brazil, by Cochliomyia hominivorax (Coquerel, 1858), Diptera Calliphoridae",
                authors: [
                    "Abdallah SI",
                    "Rocha UF",
                    "Serra OP",
                    "Oba MS",
                    "Serra RG"
                ],
                year: 1970,
                type: "artigo científico",
                journal: "Rev Farm Bioquim Univ Sao Paulo"
            }
        ]
    },
    {
        id: "occ-009",
        coordinates: [
            -43.0537,
            -22.8268
        ],
        city: "São Gonçalo",
        state: "RJ",
        disease: "Miíase",
        vector: "Cochliomyia hominivorax",
        date: "2008-04-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "36 anos",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-008",
                title: "Nasal foreign bodies: description of types and complications in 420 cases",
                authors: [
                    "Figueiredo RR",
                    "Azevedo AA",
                    "Ávila Kós AO",
                    "Tomita S"
                ],
                year: 2006,
                type: "artigo científico",
                journal: "Rev Bras Otorrinolaringol"
            },
            {
                id: "art-009",
                title: "Vulvar myiasis during pregnancy",
                authors: [
                    "Passos MR",
                    "Varella RQ",
                    "Tavares RR",
                    "Barreto NA",
                    "Santos CC",
                    "Pinheiro VM"
                ],
                year: 2002,
                type: "caso clínico",
                journal: "Infect Dis Obstet Gynecol"
            }
        ]
    },
    {
        id: "occ-010",
        coordinates: [
            -43.0537,
            -22.8268
        ],
        city: "São Gonçalo",
        state: "RJ",
        disease: "Miíase",
        vector: "Cochliomyia hominivorax",
        date: "2008-04-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "36 anos",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-009",
                title: "Vulvar myiasis during pregnancy",
                authors: [
                    "Passos MR",
                    "Varella RQ",
                    "Tavares RR",
                    "Barreto NA",
                    "Santos CC",
                    "Pinheiro VM"
                ],
                year: 2002,
                type: "caso clínico",
                journal: "Infect Dis Obstet Gynecol"
            }
        ]
    },
    {
        id: "occ-011",
        coordinates: [
            -43.0537,
            -22.8268
        ],
        city: "São Gonçalo",
        state: "RJ",
        disease: "Miíase",
        vector: "Cochliomyia hominivorax",
        date: "2008-04-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "76 anos",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-010",
                title: "Oral myiasis: a case report",
                authors: [
                    "Rossi-Schneider T",
                    "Cherubini K",
                    "Yurgel LS",
                    "Salum F",
                    "Figueiredo MA"
                ],
                year: 2007,
                type: "caso clínico",
                journal: "J Oral Sci"
            }
        ]
    },
    {
        id: "occ-012",
        coordinates: [
            -47.9292,
            -15.7801
        ],
        city: "Distrito Federal",
        state: "DF",
        disease: "Miíase",
        vector: "Cochliomyia hominivorax",
        date: "2009-03-15",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "2 anos",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-011",
                title: "Myiasis by Screw Worm Cochliomyia hominivorax (Coquerel) (Diptera: Calliphoridae) in a Wild Maned Wolf Chrysocyon brachyurus (Mammalia: Canidae), in Brasilia, Brazil",
                authors: [
                    "Cansi ER",
                    "Bonorino R",
                    "Ataide HS",
                    "Pujol-Luz JR"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "Neotrop Entomol"
            },
            {
                id: "art-012",
                title: "Miíase por Lucilia eximia (Diptera: Calliphoridae) em Didelphis albiventris (Mammalia: Didelphidae) no Brasil Central",
                authors: [
                    "Cansi ER",
                    "Bonorino R"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "EntomoBrasilis"
            }
        ]
    },
    {
        id: "occ-013",
        coordinates: [
            -47.9292,
            -15.7801
        ],
        city: "Distrito Federal",
        state: "DF",
        disease: "Miíase",
        vector: "Cochliomyia hominivorax",
        date: "2009-04-01",
        host: "Canis lupus familiaris",
        hostCategory: "Companhia",
        hostSex: "Fêmea",
        hostAge: "4 anos",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-111",
                title: "Ocorrência de miíases em animais de companhia no Distrito Federal, Brasil",
                authors: [
                    "Cansi ER",
                    "Demo C"
                ],
                year: 2011,
                type: "estudo epidemiológico",
                journal: "Acta Sci Vet"
            }
        ]
    },
    {
        id: "occ-014",
        coordinates: [
            -42.8019,
            -5.0892
        ],
        city: "Teresina",
        state: "PI",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2005-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-015",
                title: "Human vaginal myiasis caused by Cochliomyia hominivorax",
                authors: [
                    "Silva BB",
                    "Borges US",
                    "Pimentel IC"
                ],
                year: 2005,
                type: "artigo científico",
                journal: "Int J Gynaecol Obstet"
            },
            {
                id: "art-016",
                title: "Genital myiasis in a woman with psychiatric disturbance",
                authors: [
                    "Silva BB",
                    "Vieira SC",
                    "Coelho EG",
                    "Machado V",
                    "Borges US",
                    "Silveira Filho MA"
                ],
                year: 2005,
                type: "caso clínico",
                journal: "BJOG"
            }
        ]
    },
    {
        id: "occ-015",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Chloroprocta idioidea",
        vector: "Chloroprocta idioidea",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-017",
                title: "Uso de ivermectin na prevenção das miíases em bezerros, de corte criados extensivamente",
                authors: [
                    "Bianchin I",
                    "Corrêa ES",
                    "Gomes A",
                    "Honer MR",
                    "Curvo JE"
                ],
                year: 1991,
                type: "artigo científico",
                journal: "Brasília: EMBRAPA"
            },
            {
                id: "art-018",
                title: "Uso de ivermectin aplicado por via subcutânea na prevenção das miíases umbilicais em bezerros de corte criados extensivamente",
                authors: [
                    "Bianchin I",
                    "Côrrea ES",
                    "Honer MR",
                    "Gomes A",
                    "Curvo JE"
                ],
                year: 1992,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-016",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Chrysomya albiceps",
        vector: "Chrysomya albiceps",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-018",
                title: "Uso de ivermectin aplicado por via subcutânea na prevenção das miíases umbilicais em bezerros de corte criados extensivamente",
                authors: [
                    "Bianchin I",
                    "Côrrea ES",
                    "Honer MR",
                    "Gomes A",
                    "Curvo JE"
                ],
                year: 1992,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-017",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Mesembrinella bicolor",
        vector: "Mesembrinella bicolor",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-018",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Chrysomya putoria",
        vector: "Chrysomya putoria",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-019",
                title: "Flutuação populacional da mosca Cochliomyia hominivorax (Coquerel, 1858) (Diptera: Calliphoridae) capturada em armadilhas orientadas pelo vento (W.O.T), no município de Campo Grande, MS",
                authors: [
                    "Gomes A",
                    "Koller WW",
                    "Honer MR",
                    "Silva RL"
                ],
                year: 1998,
                type: "estudo epidemiológico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-019",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Chrysomya megacephala",
        vector: "Chrysomya megacephala",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-020",
                title: "Dípteros Calliphoridae em mata ciliar remanescente no interior de pastagem cultivada, em Campo Grande, MS, Brasil [online]",
                authors: [
                    "Koller WW",
                    "Gomes A",
                    "Gomes PR",
                    "Umaki A",
                    "Santos STP",
                    "Carvalho CJB"
                ],
                year: 2002,
                type: "artigo científico",
                journal: "Não informado"
            }
        ]
    },
    {
        id: "occ-020",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Lucilia eximia",
        vector: "Lucilia eximia",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-021",
                title: "Abundance and seasonality of Cochliomyia macellaria (Diptera: Calliphoridae) in Southern Pantanal, Brazil",
                authors: [
                    "Koller WW",
                    "Barros AT",
                    "Corrêa EC"
                ],
                year: 2011,
                type: "estudo epidemiológico",
                journal: "Rev Bras Parasitol Vet"
            },
            {
                id: "art-022",
                title: "Improving access to the control region and tRNA gene clusters of dipteran mitochondrial DNA",
                authors: [
                    "Oliveira MT",
                    "Rosa AC",
                    "Azeredo-Espin AM",
                    "Lessinger AC"
                ],
                year: 2006,
                type: "caso clínico",
                journal: "J Med Entomol"
            }
        ]
    },
    {
        id: "occ-021",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Cochliomyia macellaria",
        vector: "Cochliomyia macellaria",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-022",
                title: "Improving access to the control region and tRNA gene clusters of dipteran mitochondrial DNA",
                authors: [
                    "Oliveira MT",
                    "Rosa AC",
                    "Azeredo-Espin AM",
                    "Lessinger AC"
                ],
                year: 2006,
                type: "caso clínico",
                journal: "J Med Entomol"
            }
        ]
    },
    {
        id: "occ-022",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Hemilucilia segmentaria",
        vector: "Hemilucilia segmentaria",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-023",
                title: "Miíases umbilicais em bezerros nelore recém-nascidos: predisposição em dois cruzamentos raciais criados no sistema de manejo voisin no Rio de Janeiro e avaliação de medidas profiláticas em criação extensiva no Pantanal Sul-Mato-Grossense [dissertação]",
                authors: [
                    "Pires MS"
                ],
                year: 2008,
                type: "outro",
                journal: "Seropédica: Universidade Federal Rural do Rio de Janeiro"
            }
        ]
    },
    {
        id: "occ-023",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-024",
                title: "Complex patterns of genetic variability in populations of the New World screwworm fly revealed by mitochondrial DNA markers",
                authors: [
                    "Lyra ML",
                    "Klaczko LB",
                    "Azeredo-Espin AM"
                ],
                year: 2009,
                type: "artigo científico",
                journal: "Med Vet Entomol"
            }
        ]
    },
    {
        id: "occ-024",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-20",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            },
            {
                id: "art-025",
                title: "Controle seletivo do Rhipicephalus (Boophilus) microplus (Canestrini, 1887), em bovinos criados em campo nativo, com uso de fipronil e avaliação de sua eficácia em Lages – SC [dissertação]",
                authors: [
                    "Paim F"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Florianópolis: Universidade do Estado de Santa Catarina"
            }
        ]
    },
    {
        id: "occ-025",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-21",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-025",
                title: "Controle seletivo do Rhipicephalus (Boophilus) microplus (Canestrini, 1887), em bovinos criados em campo nativo, com uso de fipronil e avaliação de sua eficácia em Lages – SC [dissertação]",
                authors: [
                    "Paim F"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Florianópolis: Universidade do Estado de Santa Catarina"
            }
        ]
    },
    {
        id: "occ-026",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-22",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-027",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-23",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-025",
                title: "Controle seletivo do Rhipicephalus (Boophilus) microplus (Canestrini, 1887), em bovinos criados em campo nativo, com uso de fipronil e avaliação de sua eficácia em Lages – SC [dissertação]",
                authors: [
                    "Paim F"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Florianópolis: Universidade do Estado de Santa Catarina"
            }
        ]
    },
    {
        id: "occ-028",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-24",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-029",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-25",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-025",
                title: "Controle seletivo do Rhipicephalus (Boophilus) microplus (Canestrini, 1887), em bovinos criados em campo nativo, com uso de fipronil e avaliação de sua eficácia em Lages – SC [dissertação]",
                authors: [
                    "Paim F"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Florianópolis: Universidade do Estado de Santa Catarina"
            },
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-030",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-26",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-031",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-27",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-025",
                title: "Controle seletivo do Rhipicephalus (Boophilus) microplus (Canestrini, 1887), em bovinos criados em campo nativo, com uso de fipronil e avaliação de sua eficácia em Lages – SC [dissertação]",
                authors: [
                    "Paim F"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Florianópolis: Universidade do Estado de Santa Catarina"
            }
        ]
    },
    {
        id: "occ-032",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-28",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-033",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-30",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-025",
                title: "Controle seletivo do Rhipicephalus (Boophilus) microplus (Canestrini, 1887), em bovinos criados em campo nativo, com uso de fipronil e avaliação de sua eficácia em Lages – SC [dissertação]",
                authors: [
                    "Paim F"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Florianópolis: Universidade do Estado de Santa Catarina"
            }
        ]
    },
    {
        id: "occ-034",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2010-06-01",
        host: "Canis familiaris",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "9",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-001",
                title: "Biologia, Flutuação populacional e patologia da Cochliomyia hominivorax (Coquerel, 1858) (Diptera: Calliphoridae) [dissertação]",
                authors: [
                    "Oliveira CMB"
                ],
                year: 1980,
                type: "estudo epidemiológico",
                journal: "Seropédica: Universidade Federal Rural do Rio de Janeiro"
            },
            {
                id: "art-002",
                title: "Efficacy of injectable doramectin in the protection of castrated cattle against field infestations of Cochliomyia hominivorax",
                authors: [
                    "Muniz RA",
                    "Coronado A",
                    "Anziani OS",
                    "Sanavria A",
                    "Moreno J",
                    "Errecalde J"
                ],
                year: 1995,
                type: "caso clínico",
                journal: "Vet Parasitol"
            }
        ]
    },
    {
        id: "occ-035",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2010-06-01",
        host: "Canis familiaris",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "9",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-002",
                title: "Efficacy of injectable doramectin in the protection of castrated cattle against field infestations of Cochliomyia hominivorax",
                authors: [
                    "Muniz RA",
                    "Coronado A",
                    "Anziani OS",
                    "Sanavria A",
                    "Moreno J",
                    "Errecalde J"
                ],
                year: 1995,
                type: "caso clínico",
                journal: "Vet Parasitol"
            }
        ]
    },
    {
        id: "occ-036",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2010-06-01",
        host: "Canis familiaris",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "9",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-004",
                title: "Eficácia profilática do doramectin contra infestações naturais por Cochliomyia hominivorax em ovinos pós-castração",
                authors: [
                    "Sanavria A",
                    "Prata MCA"
                ],
                year: 1996,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-037",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2010-06-01",
        host: "Canis familiaris",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "9",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-038",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2010-06-01",
        host: "Canis familiaris",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "9",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-008",
                title: "Nasal foreign bodies: description of types and complications in 420 cases",
                authors: [
                    "Figueiredo RR",
                    "Azevedo AA",
                    "Ávila Kós AO",
                    "Tomita S"
                ],
                year: 2006,
                type: "artigo científico",
                journal: "Rev Bras Otorrinolaringol"
            }
        ]
    },
    {
        id: "occ-039",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2010-06-01",
        host: "Canis familiaris",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "9",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-026",
                title: "Inquérito sobre os casos de miíase por Cochliomyia hominivorax em cães da zona sul do município do Rio de Janeiro no ano 2000",
                authors: [
                    "Cramer-Ribeiro BC",
                    "Sanavria A",
                    "Oliveira MQ",
                    "Souza FS",
                    "Rocco FS",
                    "Cardoso PG"
                ],
                year: 2002,
                type: "artigo científico",
                journal: "Braz J Vet Res Anim Sci"
            },
            {
                id: "art-027",
                title: "Inquiry of cases of myiasis by Cochliomyia hominivorax in dogs (Canis familiaris) of the Northern and Western zones of Rio de Janeiro city in 2000",
                authors: [
                    "Cramer-Ribeiro BC",
                    "Sanavria A",
                    "Monteiro HHM",
                    "Oliveira MQ",
                    "Souza FS"
                ],
                year: 2003,
                type: "artigo científico",
                journal: "Braz J Vet Res Anim Sci"
            }
        ]
    },
    {
        id: "occ-040",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2010-06-01",
        host: "Canis familiaris",
        hostCategory: "Produção",
        hostSex: "Fêmea",
        hostAge: "9",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-027",
                title: "Inquiry of cases of myiasis by Cochliomyia hominivorax in dogs (Canis familiaris) of the Northern and Western zones of Rio de Janeiro city in 2000",
                authors: [
                    "Cramer-Ribeiro BC",
                    "Sanavria A",
                    "Monteiro HHM",
                    "Oliveira MQ",
                    "Souza FS"
                ],
                year: 2003,
                type: "artigo científico",
                journal: "Braz J Vet Res Anim Sci"
            }
        ]
    },
    {
        id: "occ-041",
        coordinates: [
            -34.9771,
            -8.0235
        ],
        city: "Camaragibe",
        state: "CE",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2012-07-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "60",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-028",
                title: "Oro-nasal myiasis in a lymphoma patient",
                authors: [
                    "Jorge IF",
                    "de Santana LR",
                    "Silveira MA",
                    "Brunetta DM",
                    "Kaufman J",
                    "Barroso- Duarte F"
                ],
                year: 2016,
                type: "caso clínico",
                journal: "Br J Haematol"
            }
        ]
    },
    {
        id: "occ-042",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2006-06-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-029",
                title: "Raro caso de miíases por Cochliomyia hominivorax (Diptera: Calliphoridae) e Dermatobia hominis (Diptera: Oestridae) em paciente humano",
                authors: [
                    "Ferraz AC",
                    "Nunes R",
                    "Gadelha BQ",
                    "Nascimento BP",
                    "Barros PREM",
                    "Coelho VMA"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Arq Ciênc Saúde"
            }
        ]
    },
    {
        id: "occ-043",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2006-07-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-030",
                title: "Epidemiological Study of Myiases in the Hospital do Andaraí, Rio de Janeiro, Including Reference to an exotic etiological Agent",
                authors: [
                    "Ferraz AC",
                    "Almeida VRG",
                    "Jesus DM",
                    "Rotatori GN",
                    "Nunes R",
                    "Proenca B"
                ],
                year: 2011,
                type: "estudo epidemiológico",
                journal: "Neotrop Entomol"
            }
        ]
    },
    {
        id: "occ-044",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2006-08-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-031",
                title: "Miíase humana por Dermatobia hominis (Linneaus Jr.) (Diptera, Cuterebridae) e Cochliomyia hominivorax (Coquerel) (Diptera, Calliphoridae) em Sucessão Parasitaria",
                authors: [
                    "Batista-da-Silva JA",
                    "Abádio HC",
                    "Queiroz MMC"
                ],
                year: 2009,
                type: "artigo científico",
                journal: "EntomoBrasilis"
            },
            {
                id: "art-032",
                title: "Factors of susceptibility of human myiasis caused by the New World screw-worm, Cochliomyia 556   556/562 hominivorax in São Gonçalo, Rio de Janeiro, Brazil",
                authors: [
                    "Batista-da-Silva JA",
                    "Moya-Borja GE",
                    "Queiroz MMC"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "J Insect Sci"
            }
        ]
    },
    {
        id: "occ-045",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2006-09-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-032",
                title: "Factors of susceptibility of human myiasis caused by the New World screw-worm, Cochliomyia 556   556/562 hominivorax in São Gonçalo, Rio de Janeiro, Brazil",
                authors: [
                    "Batista-da-Silva JA",
                    "Moya-Borja GE",
                    "Queiroz MMC"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "J Insect Sci"
            }
        ]
    },
    {
        id: "occ-046",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2006-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-033",
                title: "Miíases Humanas Causadas por Larvas de Cochliomyia hominivorax (Coquerel) (Diptera: Calliphoridae) em São Gonçalo, RJ, Brasil: Uma Abordagem Sócio- Econômica",
                authors: [
                    "Batista-da-Silva JA",
                    "Moya-Borja GE",
                    "Queiroz MMC"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "EntomoBrasilis"
            }
        ]
    },
    {
        id: "occ-047",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2006-11-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-034",
                title: "Patient with tracheostomy parasitized in hospital by larvae of the screwworm, Cochliomyia hominivorax",
                authors: [
                    "Batista-da-Silva JA",
                    "Moya-Borja GE",
                    "Queiroz MMC"
                ],
                year: 2011,
                type: "caso clínico",
                journal: "J Insect Sci"
            }
        ]
    },
    {
        id: "occ-048",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2006-12-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-035",
                title: "Miíase interna oro-nasal e cutânea por Cochliomyia hominivorax (Coquerel, 1858) em felino (Felis catus)- Relato de caso",
                authors: [
                    "Marotta CR",
                    "Scherer PO",
                    "Sanavria A"
                ],
                year: 2011,
                type: "caso clínico",
                journal: "Rev Bras Med Vet"
            }
        ]
    },
    {
        id: "occ-049",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2007-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-036",
                title: "Míiase com exposição de calota craniana causada pela associação de Cochliomyia hominivorax (Coquerel, 1858), Cochliomyia macellaria (Fabricius, 1775) e Chrysomya albiceps (Wiedemann, 1819), (Diptera: Calliphoridae) em um paciente atendido em Hospital Público, Rio de Janeiro",
                authors: [
                    "Valviesse VRGA",
                    "Ferraz AC",
                    "Proenca B",
                    "Werneck GRN",
                    "Aguiar VM",
                    "Lessa CS"
                ],
                year: 2014,
                type: "artigo científico",
                journal: "Entomotrópica"
            },
            {
                id: "art-037",
                title: "Record of the first cases of human myiasis by Lucilia cuprina (Diptera: Calliphoridae), Rio de Janeiro, Brazil",
                authors: [
                    "Azevedo WT",
                    "Figueiredo AL",
                    "Carvalho RP",
                    "Lemos GA",
                    "Silva PF",
                    "Miranda TA"
                ],
                year: 2015,
                type: "artigo científico",
                journal: "J Med Entomol"
            }
        ]
    },
    {
        id: "occ-050",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2007-02-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-037",
                title: "Record of the first cases of human myiasis by Lucilia cuprina (Diptera: Calliphoridae), Rio de Janeiro, Brazil",
                authors: [
                    "Azevedo WT",
                    "Figueiredo AL",
                    "Carvalho RP",
                    "Lemos GA",
                    "Silva PF",
                    "Miranda TA"
                ],
                year: 2015,
                type: "artigo científico",
                journal: "J Med Entomol"
            }
        ]
    },
    {
        id: "occ-051",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2007-03-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-008",
                title: "Nasal foreign bodies: description of types and complications in 420 cases",
                authors: [
                    "Figueiredo RR",
                    "Azevedo AA",
                    "Ávila Kós AO",
                    "Tomita S"
                ],
                year: 2006,
                type: "artigo científico",
                journal: "Rev Bras Otorrinolaringol"
            }
        ]
    },
    {
        id: "occ-052",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2007-04-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-009",
                title: "Vulvar myiasis during pregnancy",
                authors: [
                    "Passos MR",
                    "Varella RQ",
                    "Tavares RR",
                    "Barreto NA",
                    "Santos CC",
                    "Pinheiro VM"
                ],
                year: 2002,
                type: "caso clínico",
                journal: "Infect Dis Obstet Gynecol"
            }
        ]
    },
    {
        id: "occ-053",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2007-05-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-010",
                title: "Oral myiasis: a case report",
                authors: [
                    "Rossi-Schneider T",
                    "Cherubini K",
                    "Yurgel LS",
                    "Salum F",
                    "Figueiredo MA"
                ],
                year: 2007,
                type: "caso clínico",
                journal: "J Oral Sci"
            }
        ]
    },
    {
        id: "occ-054",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1989-08-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-038",
                title: "Epidemiology of sheep myiases in São Paulo state, Brazil",
                authors: [
                    "Amarante AFT",
                    "Barbosa MA",
                    "Oliveira-Sequeira TC",
                    "Fernandes S"
                ],
                year: 1992,
                type: "estudo epidemiológico",
                journal: "Trop Anim Health Prod"
            }
        ]
    },
    {
        id: "occ-055",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1989-09-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-056",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1989-10-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-039",
                title: "Control of gastrointestinal nematodes and productivity responses of grazing cattle treated with a two dose program of doramectin or ivermectin",
                authors: [
                    "Gennari SM",
                    "Kasai N",
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LC",
                    "Derozier C"
                ],
                year: 2000,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            },
            {
                id: "art-040",
                title: "Ivermectina e abamectina em diferentes doses e vias de aplicação contra larvas de Cochliomyia hominivorax em bolsas escrotais de bovinos recém-castrados, provenientes da região sudeste do Brasil",
                authors: [
                    "Lopes WDZ",
                    "Teixeira WFP",
                    "Felippelli G",
                    "Cruz BC",
                    "Maciel WG",
                    "Matos LVS"
                ],
                year: 2013,
                type: "artigo científico",
                journal: "Cienc Rural"
            }
        ]
    },
    {
        id: "occ-057",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1989-11-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-040",
                title: "Ivermectina e abamectina em diferentes doses e vias de aplicação contra larvas de Cochliomyia hominivorax em bolsas escrotais de bovinos recém-castrados, provenientes da região sudeste do Brasil",
                authors: [
                    "Lopes WDZ",
                    "Teixeira WFP",
                    "Felippelli G",
                    "Cruz BC",
                    "Maciel WG",
                    "Matos LVS"
                ],
                year: 2013,
                type: "artigo científico",
                journal: "Cienc Rural"
            }
        ]
    },
    {
        id: "occ-058",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1989-12-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-041",
                title: "The effectiveness of a fixed-dose combination pour-on formulation of 1.25% fipronil and 2.5% fluazuron against economically important ectoparasites and associated pharmacokinetics in cattle",
                authors: [
                    "Lopes WDZ",
                    "Chiummo RM",
                    "Vettorato LF",
                    "Castro Rodrigues D",
                    "Sonada RB"
                ],
                year: 2017,
                type: "artigo científico",
                journal: "Parasitol Int"
            }
        ]
    },
    {
        id: "occ-059",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1989-12-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-042",
                title: "Terapia fotodinâmica no tratamento de ferida causada por miíase em vulva de caprino – relato de caso",
                authors: [
                    "Sellera FP",
                    "Barbosa BS",
                    "Gargano RG",
                    "Benesi FJ",
                    "Pogliani FC"
                ],
                year: 2014,
                type: "caso clínico",
                journal: "Acta Vet Brasilica"
            }
        ]
    },
    {
        id: "occ-060",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1989-12-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-005",
                title: "Sobre um tipo interessante de miíase dos bezerros e seu agente causal",
                authors: [
                    "Vaz Z",
                    "Carvalho GT"
                ],
                year: 1938,
                type: "artigo científico",
                journal: "Rev Fac Med Vet S Paulo"
            }
        ]
    },
    {
        id: "occ-061",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-01-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-006",
                title: "Miiase e perfuração do rumen de bezerros por larvas de Cochliomyia hominivorax (Coquerel, 1858)",
                authors: [
                    "Rocha UF",
                    "Vaz Z"
                ],
                year: 1950,
                type: "artigo científico",
                journal: "Significação econômica. Rev Fac Med Vet S Paulo"
            },
            {
                id: "art-007",
                title: "Primary myiasis in buffaloes--Bufalos bubais L., 1758--of the state of São Paulo, Brazil, by Cochliomyia hominivorax (Coquerel, 1858), Diptera Calliphoridae",
                authors: [
                    "Abdallah SI",
                    "Rocha UF",
                    "Serra OP",
                    "Oba MS",
                    "Serra RG"
                ],
                year: 1970,
                type: "artigo científico",
                journal: "Rev Farm Bioquim Univ Sao Paulo"
            }
        ]
    },
    {
        id: "occ-062",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-01-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-007",
                title: "Primary myiasis in buffaloes--Bufalos bubais L., 1758--of the state of São Paulo, Brazil, by Cochliomyia hominivorax (Coquerel, 1858), Diptera Calliphoridae",
                authors: [
                    "Abdallah SI",
                    "Rocha UF",
                    "Serra OP",
                    "Oba MS",
                    "Serra RG"
                ],
                year: 1970,
                type: "artigo científico",
                journal: "Rev Farm Bioquim Univ Sao Paulo"
            }
        ]
    },
    {
        id: "occ-063",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-01-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-038",
                title: "Epidemiology of sheep myiases in São Paulo state, Brazil",
                authors: [
                    "Amarante AFT",
                    "Barbosa MA",
                    "Oliveira-Sequeira TC",
                    "Fernandes S"
                ],
                year: 1992,
                type: "estudo epidemiológico",
                journal: "Trop Anim Health Prod"
            }
        ]
    },
    {
        id: "occ-064",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-01-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-065",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-02-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-039",
                title: "Control of gastrointestinal nematodes and productivity responses of grazing cattle treated with a two dose program of doramectin or ivermectin",
                authors: [
                    "Gennari SM",
                    "Kasai N",
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LC",
                    "Derozier C"
                ],
                year: 2000,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-066",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-02-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-040",
                title: "Ivermectina e abamectina em diferentes doses e vias de aplicação contra larvas de Cochliomyia hominivorax em bolsas escrotais de bovinos recém-castrados, provenientes da região sudeste do Brasil",
                authors: [
                    "Lopes WDZ",
                    "Teixeira WFP",
                    "Felippelli G",
                    "Cruz BC",
                    "Maciel WG",
                    "Matos LVS"
                ],
                year: 2013,
                type: "artigo científico",
                journal: "Cienc Rural"
            },
            {
                id: "art-041",
                title: "The effectiveness of a fixed-dose combination pour-on formulation of 1.25% fipronil and 2.5% fluazuron against economically important ectoparasites and associated pharmacokinetics in cattle",
                authors: [
                    "Lopes WDZ",
                    "Chiummo RM",
                    "Vettorato LF",
                    "Castro Rodrigues D",
                    "Sonada RB"
                ],
                year: 2017,
                type: "artigo científico",
                journal: "Parasitol Int"
            }
        ]
    },
    {
        id: "occ-067",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-02-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-041",
                title: "The effectiveness of a fixed-dose combination pour-on formulation of 1.25% fipronil and 2.5% fluazuron against economically important ectoparasites and associated pharmacokinetics in cattle",
                authors: [
                    "Lopes WDZ",
                    "Chiummo RM",
                    "Vettorato LF",
                    "Castro Rodrigues D",
                    "Sonada RB"
                ],
                year: 2017,
                type: "artigo científico",
                journal: "Parasitol Int"
            }
        ]
    },
    {
        id: "occ-068",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-03-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-042",
                title: "Terapia fotodinâmica no tratamento de ferida causada por miíase em vulva de caprino – relato de caso",
                authors: [
                    "Sellera FP",
                    "Barbosa BS",
                    "Gargano RG",
                    "Benesi FJ",
                    "Pogliani FC"
                ],
                year: 2014,
                type: "caso clínico",
                journal: "Acta Vet Brasilica"
            }
        ]
    },
    {
        id: "occ-069",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-03-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-005",
                title: "Sobre um tipo interessante de miíase dos bezerros e seu agente causal",
                authors: [
                    "Vaz Z",
                    "Carvalho GT"
                ],
                year: 1938,
                type: "artigo científico",
                journal: "Rev Fac Med Vet S Paulo"
            }
        ]
    },
    {
        id: "occ-070",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-03-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-006",
                title: "Miiase e perfuração do rumen de bezerros por larvas de Cochliomyia hominivorax (Coquerel, 1858)",
                authors: [
                    "Rocha UF",
                    "Vaz Z"
                ],
                year: 1950,
                type: "artigo científico",
                journal: "Significação econômica. Rev Fac Med Vet S Paulo"
            }
        ]
    },
    {
        id: "occ-071",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-04-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-007",
                title: "Primary myiasis in buffaloes--Bufalos bubais L., 1758--of the state of São Paulo, Brazil, by Cochliomyia hominivorax (Coquerel, 1858), Diptera Calliphoridae",
                authors: [
                    "Abdallah SI",
                    "Rocha UF",
                    "Serra OP",
                    "Oba MS",
                    "Serra RG"
                ],
                year: 1970,
                type: "artigo científico",
                journal: "Rev Farm Bioquim Univ Sao Paulo"
            },
            {
                id: "art-038",
                title: "Epidemiology of sheep myiases in São Paulo state, Brazil",
                authors: [
                    "Amarante AFT",
                    "Barbosa MA",
                    "Oliveira-Sequeira TC",
                    "Fernandes S"
                ],
                year: 1992,
                type: "estudo epidemiológico",
                journal: "Trop Anim Health Prod"
            }
        ]
    },
    {
        id: "occ-072",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-04-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-038",
                title: "Epidemiology of sheep myiases in São Paulo state, Brazil",
                authors: [
                    "Amarante AFT",
                    "Barbosa MA",
                    "Oliveira-Sequeira TC",
                    "Fernandes S"
                ],
                year: 1992,
                type: "estudo epidemiológico",
                journal: "Trop Anim Health Prod"
            }
        ]
    },
    {
        id: "occ-073",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-04-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-074",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-05-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-039",
                title: "Control of gastrointestinal nematodes and productivity responses of grazing cattle treated with a two dose program of doramectin or ivermectin",
                authors: [
                    "Gennari SM",
                    "Kasai N",
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LC",
                    "Derozier C"
                ],
                year: 2000,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-075",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-05-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-040",
                title: "Ivermectina e abamectina em diferentes doses e vias de aplicação contra larvas de Cochliomyia hominivorax em bolsas escrotais de bovinos recém-castrados, provenientes da região sudeste do Brasil",
                authors: [
                    "Lopes WDZ",
                    "Teixeira WFP",
                    "Felippelli G",
                    "Cruz BC",
                    "Maciel WG",
                    "Matos LVS"
                ],
                year: 2013,
                type: "artigo científico",
                journal: "Cienc Rural"
            }
        ]
    },
    {
        id: "occ-076",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-06-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-041",
                title: "The effectiveness of a fixed-dose combination pour-on formulation of 1.25% fipronil and 2.5% fluazuron against economically important ectoparasites and associated pharmacokinetics in cattle",
                authors: [
                    "Lopes WDZ",
                    "Chiummo RM",
                    "Vettorato LF",
                    "Castro Rodrigues D",
                    "Sonada RB"
                ],
                year: 2017,
                type: "artigo científico",
                journal: "Parasitol Int"
            },
            {
                id: "art-042",
                title: "Terapia fotodinâmica no tratamento de ferida causada por miíase em vulva de caprino – relato de caso",
                authors: [
                    "Sellera FP",
                    "Barbosa BS",
                    "Gargano RG",
                    "Benesi FJ",
                    "Pogliani FC"
                ],
                year: 2014,
                type: "caso clínico",
                journal: "Acta Vet Brasilica"
            }
        ]
    },
    {
        id: "occ-077",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-06-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-042",
                title: "Terapia fotodinâmica no tratamento de ferida causada por miíase em vulva de caprino – relato de caso",
                authors: [
                    "Sellera FP",
                    "Barbosa BS",
                    "Gargano RG",
                    "Benesi FJ",
                    "Pogliani FC"
                ],
                year: 2014,
                type: "caso clínico",
                journal: "Acta Vet Brasilica"
            }
        ]
    },
    {
        id: "occ-078",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-07-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-005",
                title: "Sobre um tipo interessante de miíase dos bezerros e seu agente causal",
                authors: [
                    "Vaz Z",
                    "Carvalho GT"
                ],
                year: 1938,
                type: "artigo científico",
                journal: "Rev Fac Med Vet S Paulo"
            }
        ]
    },
    {
        id: "occ-079",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1990-07-01",
        host: "Ovis aries",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-006",
                title: "Miiase e perfuração do rumen de bezerros por larvas de Cochliomyia hominivorax (Coquerel, 1858)",
                authors: [
                    "Rocha UF",
                    "Vaz Z"
                ],
                year: 1950,
                type: "artigo científico",
                journal: "Significação econômica. Rev Fac Med Vet S Paulo"
            }
        ]
    },
    {
        id: "occ-080",
        coordinates: [
            -52.3376,
            -31.7649
        ],
        city: "Pelotas",
        state: "RS",
        disease: "Calliphora lopesi",
        vector: "Não informado",
        date: "2003-07-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            },
            {
                id: "art-043",
                title: "Surto de ceratoconjuntivite infecciosa bovina e hemoncose causando mortalidade em bezerros",
                authors: [
                    "Carmo PMS",
                    "Vargas AC",
                    "Rissi DR",
                    "Oliveira-Filho JC",
                    "Pierezan F",
                    "Lucena RB"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-081",
        coordinates: [
            -52.3376,
            -31.7649
        ],
        city: "Pelotas",
        state: "RS",
        disease: "Calliphora lopesi",
        vector: "Não informado",
        date: "2004-06-30",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-043",
                title: "Surto de ceratoconjuntivite infecciosa bovina e hemoncose causando mortalidade em bezerros",
                authors: [
                    "Carmo PMS",
                    "Vargas AC",
                    "Rissi DR",
                    "Oliveira-Filho JC",
                    "Pierezan F",
                    "Lucena RB"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-082",
        coordinates: [
            -43.0537,
            -22.8268
        ],
        city: "São Gonçalo",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2008-04-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "36",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-029",
                title: "Raro caso de miíases por Cochliomyia hominivorax (Diptera: Calliphoridae) e Dermatobia hominis (Diptera: Oestridae) em paciente humano",
                authors: [
                    "Ferraz AC",
                    "Nunes R",
                    "Gadelha BQ",
                    "Nascimento BP",
                    "Barros PREM",
                    "Coelho VMA"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Arq Ciênc Saúde"
            },
            {
                id: "art-030",
                title: "Epidemiological Study of Myiases in the Hospital do Andaraí, Rio de Janeiro, Including Reference to an exotic etiological Agent",
                authors: [
                    "Ferraz AC",
                    "Almeida VRG",
                    "Jesus DM",
                    "Rotatori GN",
                    "Nunes R",
                    "Proenca B"
                ],
                year: 2011,
                type: "estudo epidemiológico",
                journal: "Neotrop Entomol"
            }
        ]
    },
    {
        id: "occ-083",
        coordinates: [
            -43.0537,
            -22.8268
        ],
        city: "São Gonçalo",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2008-06-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "45",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-030",
                title: "Epidemiological Study of Myiases in the Hospital do Andaraí, Rio de Janeiro, Including Reference to an exotic etiological Agent",
                authors: [
                    "Ferraz AC",
                    "Almeida VRG",
                    "Jesus DM",
                    "Rotatori GN",
                    "Nunes R",
                    "Proenca B"
                ],
                year: 2011,
                type: "estudo epidemiológico",
                journal: "Neotrop Entomol"
            }
        ]
    },
    {
        id: "occ-084",
        coordinates: [
            -43.0537,
            -22.8268
        ],
        city: "São Gonçalo",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2008-09-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "76",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-031",
                title: "Miíase humana por Dermatobia hominis (Linneaus Jr.) (Diptera, Cuterebridae) e Cochliomyia hominivorax (Coquerel) (Diptera, Calliphoridae) em Sucessão Parasitaria",
                authors: [
                    "Batista-da-Silva JA",
                    "Abádio HC",
                    "Queiroz MMC"
                ],
                year: 2009,
                type: "artigo científico",
                journal: "EntomoBrasilis"
            }
        ]
    },
    {
        id: "occ-085",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Dermatobia hominis",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "35",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            },
            {
                id: "art-044",
                title: "Ectoparasitos em rebanhos de caprinos e ovinos na microrregião do Alto mearim e Grajaú, estado do Maranhão",
                authors: [
                    "Brito DRB",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2005,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-086",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Dermatobia hominis",
        vector: "Não informado",
        date: "2026-03-18",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "35",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-044",
                title: "Ectoparasitos em rebanhos de caprinos e ovinos na microrregião do Alto mearim e Grajaú, estado do Maranhão",
                authors: [
                    "Brito DRB",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2005,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-087",
        coordinates: [
            -49.0661,
            -26.9155
        ],
        city: "Blumenau",
        state: "SC",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2010-04-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "42",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-045",
                title: "Oftalmomiíase pós-traumática: relato de caso e revisão de literatura",
                authors: [
                    "Martins-Junior JC",
                    "Keim FS",
                    "Iarocrinski J"
                ],
                year: 2010,
                type: "revisão",
                journal: "Rev Bras Oftalmol"
            }
        ]
    },
    {
        id: "occ-088",
        coordinates: [
            -43.1785,
            -22.505
        ],
        city: "Petrópolis",
        state: "RJ",
        disease: "Philornis glaucinis",
        vector: "Não informado",
        date: "2008-05-01",
        host: "Thalurania glaucopis",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "14",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-001",
                title: "Biologia, Flutuação populacional e patologia da Cochliomyia hominivorax (Coquerel, 1858) (Diptera: Calliphoridae) [dissertação]",
                authors: [
                    "Oliveira CMB"
                ],
                year: 1980,
                type: "estudo epidemiológico",
                journal: "Seropédica: Universidade Federal Rural do Rio de Janeiro"
            },
            {
                id: "art-046",
                title: "Sinantropia em dípteros caliptratos na área metropolitana do Rio de Janeiro [tese]",
                authors: [
                    "D’Almeida JM"
                ],
                year: 1983,
                type: "outro",
                journal: "Rio de Janeiro: Universidade Federal Rural do Rio de Janeiro"
            }
        ]
    },
    {
        id: "occ-089",
        coordinates: [
            -51.8103,
            -16.9567
        ],
        city: "Caiapônia",
        state: "GO",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2006-01-01",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-047",
                title: "Artrópodes parasitos dos animais domésticos do estado de Goiás",
                authors: [
                    "Lustosa ES",
                    "Carvalho MESD",
                    "Carneiro JR",
                    "Silva IG"
                ],
                year: 1983,
                type: "artigo científico",
                journal: "Rev Patol Trop"
            },
            {
                id: "art-048",
                title: "Análise cariotípica, morfométrica e de compatibilidade sexual, em linhagens brasileiras de Cochliomyia hominivorax (Diptera: Calliphoridae) [tese]",
                authors: [
                    "Azeredo-Espin AM"
                ],
                year: 1987,
                type: "outro",
                journal: "Campinas: Universidade de Campinas"
            }
        ]
    },
    {
        id: "occ-090",
        coordinates: [
            -51.8103,
            -16.9567
        ],
        city: "Caiapônia",
        state: "GO",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2011-02-01",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-048",
                title: "Análise cariotípica, morfométrica e de compatibilidade sexual, em linhagens brasileiras de Cochliomyia hominivorax (Diptera: Calliphoridae) [tese]",
                authors: [
                    "Azeredo-Espin AM"
                ],
                year: 1987,
                type: "outro",
                journal: "Campinas: Universidade de Campinas"
            }
        ]
    },
    {
        id: "occ-091",
        coordinates: [
            -51.2177,
            -30.0346
        ],
        city: "Floresta Nacional de Canela",
        state: "RS",
        disease: "Philornis sp.",
        vector: "Não informado",
        date: "2004-12-21",
        host: "Pachyramphus validus",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "10",
        outcome: "Não informado",
        articles: [
            {
                id: "art-049",
                title: "Contribuição ao estudo das miíases em oto-rino-laringologia [tese]",
                authors: [
                    "Souza A"
                ],
                year: 1939,
                type: "outro",
                journal: "Porto Alegre: Universidade Federal do Rio Grande do Sul"
            },
            {
                id: "art-048",
                title: "Análise cariotípica, morfométrica e de compatibilidade sexual, em linhagens brasileiras de Cochliomyia hominivorax (Diptera: Calliphoridae) [tese]",
                authors: [
                    "Azeredo-Espin AM"
                ],
                year: 1987,
                type: "outro",
                journal: "Campinas: Universidade de Campinas"
            }
        ]
    },
    {
        id: "occ-092",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Dermatobia hominis",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "35",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-050",
                title: "Ectoparasitos de pequenos mamíferos silvestres de áreas adjacentes ao rio Itapecuru e área de preservação ambiental do Inhamum, estado do Maranhão, Brasil",
                authors: [
                    "Reis FS",
                    "Barros MC",
                    "Fraga EC",
                    "Penha TA",
                    "Teixeira WC",
                    "Santos ACG"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-093",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Dermatobia hominis",
        vector: "Não informado",
        date: "2026-03-18",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "35",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-051",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-094",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Lucilia cuprina",
        vector: "Não informado",
        date: "2008-05-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "57",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-032",
                title: "Factors of susceptibility of human myiasis caused by the New World screw-worm, Cochliomyia 556   556/562 hominivorax in São Gonçalo, Rio de Janeiro, Brazil",
                authors: [
                    "Batista-da-Silva JA",
                    "Moya-Borja GE",
                    "Queiroz MMC"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "J Insect Sci"
            }
        ]
    },
    {
        id: "occ-095",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Lucilia cuprina",
        vector: "Não informado",
        date: "2008-05-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "68",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-033",
                title: "Miíases Humanas Causadas por Larvas de Cochliomyia hominivorax (Coquerel) (Diptera: Calliphoridae) em São Gonçalo, RJ, Brasil: Uma Abordagem Sócio- Econômica",
                authors: [
                    "Batista-da-Silva JA",
                    "Moya-Borja GE",
                    "Queiroz MMC"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "EntomoBrasilis"
            }
        ]
    },
    {
        id: "occ-096",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Lucilia cuprina",
        vector: "Não informado",
        date: "2008-05-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "52",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-034",
                title: "Patient with tracheostomy parasitized in hospital by larvae of the screwworm, Cochliomyia hominivorax",
                authors: [
                    "Batista-da-Silva JA",
                    "Moya-Borja GE",
                    "Queiroz MMC"
                ],
                year: 2011,
                type: "caso clínico",
                journal: "J Insect Sci"
            },
            {
                id: "art-035",
                title: "Miíase interna oro-nasal e cutânea por Cochliomyia hominivorax (Coquerel, 1858) em felino (Felis catus)- Relato de caso",
                authors: [
                    "Marotta CR",
                    "Scherer PO",
                    "Sanavria A"
                ],
                year: 2011,
                type: "caso clínico",
                journal: "Rev Bras Med Vet"
            }
        ]
    },
    {
        id: "occ-097",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Lucilia cuprina",
        vector: "Não informado",
        date: "2008-05-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "29",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-035",
                title: "Miíase interna oro-nasal e cutânea por Cochliomyia hominivorax (Coquerel, 1858) em felino (Felis catus)- Relato de caso",
                authors: [
                    "Marotta CR",
                    "Scherer PO",
                    "Sanavria A"
                ],
                year: 2011,
                type: "caso clínico",
                journal: "Rev Bras Med Vet"
            }
        ]
    },
    {
        id: "occ-098",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Lucilia cuprina",
        vector: "Não informado",
        date: "2008-05-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "72",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-036",
                title: "Míiase com exposição de calota craniana causada pela associação de Cochliomyia hominivorax (Coquerel, 1858), Cochliomyia macellaria (Fabricius, 1775) e Chrysomya albiceps (Wiedemann, 1819), (Diptera: Calliphoridae) em um paciente atendido em Hospital Público, Rio de Janeiro",
                authors: [
                    "Valviesse VRGA",
                    "Ferraz AC",
                    "Proenca B",
                    "Werneck GRN",
                    "Aguiar VM",
                    "Lessa CS"
                ],
                year: 2014,
                type: "artigo científico",
                journal: "Entomotrópica"
            }
        ]
    },
    {
        id: "occ-099",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Lucilia cuprina",
        vector: "Não informado",
        date: "2008-05-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "13",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-037",
                title: "Record of the first cases of human myiasis by Lucilia cuprina (Diptera: Calliphoridae), Rio de Janeiro, Brazil",
                authors: [
                    "Azevedo WT",
                    "Figueiredo AL",
                    "Carvalho RP",
                    "Lemos GA",
                    "Silva PF",
                    "Miranda TA"
                ],
                year: 2015,
                type: "artigo científico",
                journal: "J Med Entomol"
            }
        ]
    },
    {
        id: "occ-100",
        coordinates: [
            -43.4511,
            -22.7592
        ],
        city: "Nova Iguaçu",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2006-06-01",
        host: "Puma concolor",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-046",
                title: "Sinantropia em dípteros caliptratos na área metropolitana do Rio de Janeiro [tese]",
                authors: [
                    "D’Almeida JM"
                ],
                year: 1983,
                type: "outro",
                journal: "Rio de Janeiro: Universidade Federal Rural do Rio de Janeiro"
            }
        ]
    },
    {
        id: "occ-101",
        coordinates: [
            -43.4511,
            -22.7592
        ],
        city: "Nova Iguaçu",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2006-07-01",
        host: "Puma concolor",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-002",
                title: "Efficacy of injectable doramectin in the protection of castrated cattle against field infestations of Cochliomyia hominivorax",
                authors: [
                    "Muniz RA",
                    "Coronado A",
                    "Anziani OS",
                    "Sanavria A",
                    "Moreno J",
                    "Errecalde J"
                ],
                year: 1995,
                type: "caso clínico",
                journal: "Vet Parasitol"
            }
        ]
    },
    {
        id: "occ-102",
        coordinates: [
            -43.4511,
            -22.7592
        ],
        city: "Nova Iguaçu",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2006-08-01",
        host: "Puma concolor",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-004",
                title: "Eficácia profilática do doramectin contra infestações naturais por Cochliomyia hominivorax em ovinos pós-castração",
                authors: [
                    "Sanavria A",
                    "Prata MCA"
                ],
                year: 1996,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-103",
        coordinates: [
            -43.4511,
            -22.7592
        ],
        city: "Nova Iguaçu",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2006-09-01",
        host: "Puma concolor",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-052",
                title: "Population genetics and gene variation in screwworms (Diptera: Calliphoridae) from Brazil",
                authors: [
                    "Taylor DB",
                    "Peterson RD 2nd",
                    "Moya-Borja GE"
                ],
                year: 1996,
                type: "artigo científico",
                journal: "Biochem Genet"
            }
        ]
    },
    {
        id: "occ-104",
        coordinates: [
            -43.4511,
            -22.7592
        ],
        city: "Nova Iguaçu",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2006-10-01",
        host: "Puma concolor",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            },
            {
                id: "art-053",
                title: "Corpos estranhos animados em otorrinolaringologia",
                authors: [
                    "Figueiredo RR",
                    "Dorf S",
                    "Couri MS",
                    "Azevedo AA",
                    "Mossumez F"
                ],
                year: 2002,
                type: "artigo científico",
                journal: "Rev Bras Otorrinolaringol"
            }
        ]
    },
    {
        id: "occ-105",
        coordinates: [
            -43.4511,
            -22.7592
        ],
        city: "Nova Iguaçu",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2006-11-01",
        host: "Puma concolor",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-053",
                title: "Corpos estranhos animados em otorrinolaringologia",
                authors: [
                    "Figueiredo RR",
                    "Dorf S",
                    "Couri MS",
                    "Azevedo AA",
                    "Mossumez F"
                ],
                year: 2002,
                type: "artigo científico",
                journal: "Rev Bras Otorrinolaringol"
            }
        ]
    },
    {
        id: "occ-106",
        coordinates: [
            -43.4511,
            -22.7592
        ],
        city: "Nova Iguaçu",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2006-12-01",
        host: "Puma concolor",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-008",
                title: "Nasal foreign bodies: description of types and complications in 420 cases",
                authors: [
                    "Figueiredo RR",
                    "Azevedo AA",
                    "Ávila Kós AO",
                    "Tomita S"
                ],
                year: 2006,
                type: "artigo científico",
                journal: "Rev Bras Otorrinolaringol"
            }
        ]
    },
    {
        id: "occ-107",
        coordinates: [
            -43.4511,
            -22.7592
        ],
        city: "Nova Iguaçu",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2007-01-01",
        host: "Puma concolor",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-009",
                title: "Vulvar myiasis during pregnancy",
                authors: [
                    "Passos MR",
                    "Varella RQ",
                    "Tavares RR",
                    "Barreto NA",
                    "Santos CC",
                    "Pinheiro VM"
                ],
                year: 2002,
                type: "caso clínico",
                journal: "Infect Dis Obstet Gynecol"
            }
        ]
    },
    {
        id: "occ-108",
        coordinates: [
            -43.4511,
            -22.7592
        ],
        city: "Nova Iguaçu",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2007-02-01",
        host: "Puma concolor",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-026",
                title: "Inquérito sobre os casos de miíase por Cochliomyia hominivorax em cães da zona sul do município do Rio de Janeiro no ano 2000",
                authors: [
                    "Cramer-Ribeiro BC",
                    "Sanavria A",
                    "Oliveira MQ",
                    "Souza FS",
                    "Rocco FS",
                    "Cardoso PG"
                ],
                year: 2002,
                type: "artigo científico",
                journal: "Braz J Vet Res Anim Sci"
            }
        ]
    },
    {
        id: "occ-109",
        coordinates: [
            -43.4511,
            -22.7592
        ],
        city: "Nova Iguaçu",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2007-03-01",
        host: "Puma concolor",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-054",
                title: "Inquérito sobre os casos de miíase por Cochliomyia hominivorax em gatos das zonas norte, sul e oeste e do centro do município do Rio de Janeiro no ano 2000",
                authors: [
                    "Cramer-Ribeiro BC",
                    "Sanavria A",
                    "Oliveira MQ",
                    "Souza FS",
                    "Rocco FS",
                    "Cardoso PG"
                ],
                year: 2002,
                type: "artigo científico",
                journal: "Braz J Vet Res Anim Sci"
            },
            {
                id: "art-027",
                title: "Inquiry of cases of myiasis by Cochliomyia hominivorax in dogs (Canis familiaris) of the Northern and Western zones of Rio de Janeiro city in 2000",
                authors: [
                    "Cramer-Ribeiro BC",
                    "Sanavria A",
                    "Monteiro HHM",
                    "Oliveira MQ",
                    "Souza FS"
                ],
                year: 2003,
                type: "artigo científico",
                journal: "Braz J Vet Res Anim Sci"
            }
        ]
    },
    {
        id: "occ-110",
        coordinates: [
            -43.4511,
            -22.7592
        ],
        city: "Nova Iguaçu",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2007-04-01",
        host: "Puma concolor",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-027",
                title: "Inquiry of cases of myiasis by Cochliomyia hominivorax in dogs (Canis familiaris) of the Northern and Western zones of Rio de Janeiro city in 2000",
                authors: [
                    "Cramer-Ribeiro BC",
                    "Sanavria A",
                    "Monteiro HHM",
                    "Oliveira MQ",
                    "Souza FS"
                ],
                year: 2003,
                type: "artigo científico",
                journal: "Braz J Vet Res Anim Sci"
            }
        ]
    },
    {
        id: "occ-111",
        coordinates: [
            -43.4511,
            -22.7592
        ],
        city: "Nova Iguaçu",
        state: "RJ",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2007-05-01",
        host: "Puma concolor",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-022",
                title: "Improving access to the control region and tRNA gene clusters of dipteran mitochondrial DNA",
                authors: [
                    "Oliveira MT",
                    "Rosa AC",
                    "Azeredo-Espin AM",
                    "Lessinger AC"
                ],
                year: 2006,
                type: "caso clínico",
                journal: "J Med Entomol"
            }
        ]
    },
    {
        id: "occ-112",
        coordinates: [
            -47.8825,
            -15.7942
        ],
        city: "Brasília",
        state: "DF",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2009-04-06",
        host: "Chrysocyon brachyurus",
        hostCategory: "Selvagem",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-011",
                title: "Myiasis by Screw Worm Cochliomyia hominivorax (Coquerel) (Diptera: Calliphoridae) in a Wild Maned Wolf Chrysocyon brachyurus (Mammalia: Canidae), in Brasilia, Brazil",
                authors: [
                    "Cansi ER",
                    "Bonorino R",
                    "Ataide HS",
                    "Pujol-Luz JR"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "Neotrop Entomol"
            },
            {
                id: "art-012",
                title: "Miíase por Lucilia eximia (Diptera: Calliphoridae) em Didelphis albiventris (Mammalia: Didelphidae) no Brasil Central",
                authors: [
                    "Cansi ER",
                    "Bonorino R"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "EntomoBrasilis"
            }
        ]
    },
    {
        id: "occ-113",
        coordinates: [
            -46.1389,
            -5.8194
        ],
        city: "Grajaú",
        state: "MA",
        disease: "Bovicola caprae",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Capra hircus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            },
            {
                id: "art-044",
                title: "Ectoparasitos em rebanhos de caprinos e ovinos na microrregião do Alto mearim e Grajaú, estado do Maranhão",
                authors: [
                    "Brito DRB",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2005,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-114",
        coordinates: [
            -46.1389,
            -5.8194
        ],
        city: "Grajaú",
        state: "MA",
        disease: "Bovicola caprae",
        vector: "Não informado",
        date: "2026-03-18",
        host: "Capra hircus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-044",
                title: "Ectoparasitos em rebanhos de caprinos e ovinos na microrregião do Alto mearim e Grajaú, estado do Maranhão",
                authors: [
                    "Brito DRB",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2005,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-115",
        coordinates: [
            -46.1389,
            -5.8194
        ],
        city: "Grajaú",
        state: "MA",
        disease: "Bovicola caprae",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Capra hircus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-050",
                title: "Ectoparasitos de pequenos mamíferos silvestres de áreas adjacentes ao rio Itapecuru e área de preservação ambiental do Inhamum, estado do Maranhão, Brasil",
                authors: [
                    "Reis FS",
                    "Barros MC",
                    "Fraga EC",
                    "Penha TA",
                    "Teixeira WC",
                    "Santos ACG"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-116",
        coordinates: [
            -46.1389,
            -5.8194
        ],
        city: "Grajaú",
        state: "MA",
        disease: "Bovicola caprae",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Capra hircus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-051",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-117",
        coordinates: [
            -46.1389,
            -5.8194
        ],
        city: "Grajaú",
        state: "MA",
        disease: "Bovicola caprae",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Capra hircus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-118",
        coordinates: [
            -46.1389,
            -5.8194
        ],
        city: "Grajaú",
        state: "MA",
        disease: "Bovicola caprae",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Capra hircus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-044",
                title: "Ectoparasitos em rebanhos de caprinos e ovinos na microrregião do Alto mearim e Grajaú, estado do Maranhão",
                authors: [
                    "Brito DRB",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2005,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            },
            {
                id: "art-050",
                title: "Ectoparasitos de pequenos mamíferos silvestres de áreas adjacentes ao rio Itapecuru e área de preservação ambiental do Inhamum, estado do Maranhão, Brasil",
                authors: [
                    "Reis FS",
                    "Barros MC",
                    "Fraga EC",
                    "Penha TA",
                    "Teixeira WC",
                    "Santos ACG"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-119",
        coordinates: [
            -46.1389,
            -5.8194
        ],
        city: "Grajaú",
        state: "MA",
        disease: "Bovicola caprae",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Capra hircus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-050",
                title: "Ectoparasitos de pequenos mamíferos silvestres de áreas adjacentes ao rio Itapecuru e área de preservação ambiental do Inhamum, estado do Maranhão, Brasil",
                authors: [
                    "Reis FS",
                    "Barros MC",
                    "Fraga EC",
                    "Penha TA",
                    "Teixeira WC",
                    "Santos ACG"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-120",
        coordinates: [
            -46.1389,
            -5.8194
        ],
        city: "Grajaú",
        state: "MA",
        disease: "Bovicola caprae",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Capra hircus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-051",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-121",
        coordinates: [
            -46.1389,
            -5.8194
        ],
        city: "Grajaú",
        state: "MA",
        disease: "Bovicola caprae",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Capra hircus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-122",
        coordinates: [
            -46.1389,
            -5.8194
        ],
        city: "Grajaú",
        state: "MA",
        disease: "Bovicola caprae",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Capra hircus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-044",
                title: "Ectoparasitos em rebanhos de caprinos e ovinos na microrregião do Alto mearim e Grajaú, estado do Maranhão",
                authors: [
                    "Brito DRB",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2005,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-123",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Chrysomya albiceps",
        vector: "Chrysomya albiceps",
        date: "2004-12-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-017",
                title: "Uso de ivermectin na prevenção das miíases em bezerros, de corte criados extensivamente",
                authors: [
                    "Bianchin I",
                    "Corrêa ES",
                    "Gomes A",
                    "Honer MR",
                    "Curvo JE"
                ],
                year: 1991,
                type: "artigo científico",
                journal: "Brasília: EMBRAPA"
            },
            {
                id: "art-018",
                title: "Uso de ivermectin aplicado por via subcutânea na prevenção das miíases umbilicais em bezerros de corte criados extensivamente",
                authors: [
                    "Bianchin I",
                    "Côrrea ES",
                    "Honer MR",
                    "Gomes A",
                    "Curvo JE"
                ],
                year: 1992,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-124",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Chrysomya albiceps",
        vector: "Chrysomya albiceps",
        date: "2007-11-30",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-018",
                title: "Uso de ivermectin aplicado por via subcutânea na prevenção das miíases umbilicais em bezerros de corte criados extensivamente",
                authors: [
                    "Bianchin I",
                    "Côrrea ES",
                    "Honer MR",
                    "Gomes A",
                    "Curvo JE"
                ],
                year: 1992,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-125",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Chrysomya megacephala",
        vector: "Chrysomya megacephala",
        date: "2004-12-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-126",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Chrysomya megacephala",
        vector: "Chrysomya megacephala",
        date: "2007-11-30",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-021",
                title: "Abundance and seasonality of Cochliomyia macellaria (Diptera: Calliphoridae) in Southern Pantanal, Brazil",
                authors: [
                    "Koller WW",
                    "Barros AT",
                    "Corrêa EC"
                ],
                year: 2011,
                type: "estudo epidemiológico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-127",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Chrysomya putoria",
        vector: "Chrysomya putoria",
        date: "2004-12-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-023",
                title: "Miíases umbilicais em bezerros nelore recém-nascidos: predisposição em dois cruzamentos raciais criados no sistema de manejo voisin no Rio de Janeiro e avaliação de medidas profiláticas em criação extensiva no Pantanal Sul-Mato-Grossense [dissertação]",
                authors: [
                    "Pires MS"
                ],
                year: 2008,
                type: "outro",
                journal: "Seropédica: Universidade Federal Rural do Rio de Janeiro"
            }
        ]
    },
    {
        id: "occ-128",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Chrysomya putoria",
        vector: "Chrysomya putoria",
        date: "2007-11-30",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-055",
                title: "Eficácia de Endectocidas em Infestações Naturais por Cochliomyia hominivorax (Mosca- Varejeira) em Bezerros no Pantanal",
                authors: [
                    "Barros ATM",
                    "Ravaglia E",
                    "Aquino WS",
                    "Passos WM",
                    "Leite LTB"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Brasília: EMBRAPA"
            },
            {
                id: "art-056",
                title: "Avaliação de Extratos Vegetais na Prevenção e tratamento de Miíases Umbilicais em Bezerros no Pantanal",
                authors: [
                    "Barros ATM",
                    "Ravaglia E",
                    "Aquino WS",
                    "Passos WM",
                    "Leite LTB"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Brasília: EMBRAPA"
            }
        ]
    },
    {
        id: "occ-129",
        coordinates: [
            -49.2533,
            -16.6869
        ],
        city: "Goiânia",
        state: "GO",
        disease: "Eristalis tenax",
        vector: "Não informado",
        date: "2003-10-08",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "11",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-057",
                title: "Human pseudomyiasis caused by Eristalis tenax (Linnaeus) (Diptera: Syrphidae) in Goiás",
                authors: [
                    "Garcia-Zapata MT",
                    "Souza ESS Jr",
                    "Fernandes FF",
                    "Santos SFO"
                ],
                year: 2005,
                type: "artigo científico",
                journal: "Rev Soc Bras Med Trop"
            },
            {
                id: "art-058",
                title: "First report of human myiasis in Goiás state, Brazil: frequency of different types of myiasis, their various etiological agents, and associated factors",
                authors: [
                    "Fernandes LF",
                    "Pimenta FC",
                    "Fernandes FF"
                ],
                year: 2009,
                type: "estudo epidemiológico",
                journal: "J Parasitol"
            }
        ]
    },
    {
        id: "occ-130",
        coordinates: [
            -49.2533,
            -16.6869
        ],
        city: "Goiânia",
        state: "GO",
        disease: "Eristalis tenax",
        vector: "Não informado",
        date: "2004-11-16",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "11",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-058",
                title: "First report of human myiasis in Goiás state, Brazil: frequency of different types of myiasis, their various etiological agents, and associated factors",
                authors: [
                    "Fernandes LF",
                    "Pimenta FC",
                    "Fernandes FF"
                ],
                year: 2009,
                type: "estudo epidemiológico",
                journal: "J Parasitol"
            }
        ]
    },
    {
        id: "occ-131",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2008-06-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-055",
                title: "Eficácia de Endectocidas em Infestações Naturais por Cochliomyia hominivorax (Mosca- Varejeira) em Bezerros no Pantanal",
                authors: [
                    "Barros ATM",
                    "Ravaglia E",
                    "Aquino WS",
                    "Passos WM",
                    "Leite LTB"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Brasília: EMBRAPA"
            }
        ]
    },
    {
        id: "occ-132",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2009-05-31",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-056",
                title: "Avaliação de Extratos Vegetais na Prevenção e tratamento de Miíases Umbilicais em Bezerros no Pantanal",
                authors: [
                    "Barros ATM",
                    "Ravaglia E",
                    "Aquino WS",
                    "Passos WM",
                    "Leite LTB"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Brasília: EMBRAPA"
            },
            {
                id: "art-059",
                title: "Chrysomya (Diptera: Calliphoridae) relative abundance and species seasonality in the Pantanal, State of Mato Grosso do Sul, Brazil",
                authors: [
                    "Corrêa EC",
                    "Koller WW",
                    "Barros ATM"
                ],
                year: 2010,
                type: "estudo epidemiológico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-133",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-060",
                title: "Efeito de diferentes iscas na atração de califorídeos (Diptera) no campus do Valonguinho, Universidade Federal Fluminense, Niterói, RJ, Brasil",
                authors: [
                    "D’Almeida JM",
                    "Fraga MB"
                ],
                year: 2007,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-134",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Chrysomya megacephala",
        vector: "Não informado",
        date: "1975-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-061",
                title: "Miíases no lábio superior: apresentação de caso clínico",
                authors: [
                    "Melo REVA",
                    "Vitor CMA",
                    "Silva MBL",
                    "Luna LA",
                    "Firmo ACB"
                ],
                year: 2003,
                type: "caso clínico",
                journal: "Int J Dent"
            },
            {
                id: "art-062",
                title: "Extensive oral lesion colonized with 601 myiasis larvae",
                authors: [
                    "Laureano-Filho JR",
                    "Bezerra TP",
                    "Lima FT",
                    "Campelo RI"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "Trop Doct"
            }
        ]
    },
    {
        id: "occ-135",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Chrysomya megacephala",
        vector: "Não informado",
        date: "1977-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-062",
                title: "Extensive oral lesion colonized with 601 myiasis larvae",
                authors: [
                    "Laureano-Filho JR",
                    "Bezerra TP",
                    "Lima FT",
                    "Campelo RI"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "Trop Doct"
            }
        ]
    },
    {
        id: "occ-136",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Chrysomya megacephala",
        vector: "Não informado",
        date: "1978-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-063",
                title: "Head and neck myiasis: a case series and review of the literature",
                authors: [
                    "Arruda JAA",
                    "Oliveira Silva LV",
                    "Silva PUJ",
                    "Figueiredo EL",
                    "Callou G",
                    "Mesquita RA"
                ],
                year: 2017,
                type: "revisão",
                journal: "Oral Surg Oral Med Oral Pathol Oral Radiol"
            }
        ]
    },
    {
        id: "occ-137",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Chrysomya megacephala",
        vector: "Não informado",
        date: "1979-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-061",
                title: "Miíases no lábio superior: apresentação de caso clínico",
                authors: [
                    "Melo REVA",
                    "Vitor CMA",
                    "Silva MBL",
                    "Luna LA",
                    "Firmo ACB"
                ],
                year: 2003,
                type: "caso clínico",
                journal: "Int J Dent"
            }
        ]
    },
    {
        id: "occ-138",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Chrysomya megacephala",
        vector: "Não informado",
        date: "2001-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-062",
                title: "Extensive oral lesion colonized with 601 myiasis larvae",
                authors: [
                    "Laureano-Filho JR",
                    "Bezerra TP",
                    "Lima FT",
                    "Campelo RI"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "Trop Doct"
            }
        ]
    },
    {
        id: "occ-139",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Chrysomya megacephala",
        vector: "Não informado",
        date: "2007-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-063",
                title: "Head and neck myiasis: a case series and review of the literature",
                authors: [
                    "Arruda JAA",
                    "Oliveira Silva LV",
                    "Silva PUJ",
                    "Figueiredo EL",
                    "Callou G",
                    "Mesquita RA"
                ],
                year: 2017,
                type: "revisão",
                journal: "Oral Surg Oral Med Oral Pathol Oral Radiol"
            },
            {
                id: "art-061",
                title: "Miíases no lábio superior: apresentação de caso clínico",
                authors: [
                    "Melo REVA",
                    "Vitor CMA",
                    "Silva MBL",
                    "Luna LA",
                    "Firmo ACB"
                ],
                year: 2003,
                type: "caso clínico",
                journal: "Int J Dent"
            }
        ]
    },
    {
        id: "occ-140",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Chrysomya megacephala",
        vector: "Não informado",
        date: "2008-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-061",
                title: "Miíases no lábio superior: apresentação de caso clínico",
                authors: [
                    "Melo REVA",
                    "Vitor CMA",
                    "Silva MBL",
                    "Luna LA",
                    "Firmo ACB"
                ],
                year: 2003,
                type: "caso clínico",
                journal: "Int J Dent"
            }
        ]
    },
    {
        id: "occ-141",
        coordinates: [
            -70.6693,
            -33.4489
        ],
        city: "Santiago",
        state: "RM",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2016-08-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "26",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-008",
                title: "Nasal foreign bodies: description of types and complications in 420 cases",
                authors: [
                    "Figueiredo RR",
                    "Azevedo AA",
                    "Ávila Kós AO",
                    "Tomita S"
                ],
                year: 2006,
                type: "artigo científico",
                journal: "Rev Bras Otorrinolaringol"
            }
        ]
    },
    {
        id: "occ-142",
        coordinates: [
            -70.6693,
            -33.4489
        ],
        city: "Santiago",
        state: "RM",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2016-08-03",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "26",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-009",
                title: "Vulvar myiasis during pregnancy",
                authors: [
                    "Passos MR",
                    "Varella RQ",
                    "Tavares RR",
                    "Barreto NA",
                    "Santos CC",
                    "Pinheiro VM"
                ],
                year: 2002,
                type: "caso clínico",
                journal: "Infect Dis Obstet Gynecol"
            },
            {
                id: "art-010",
                title: "Oral myiasis: a case report",
                authors: [
                    "Rossi-Schneider T",
                    "Cherubini K",
                    "Yurgel LS",
                    "Salum F",
                    "Figueiredo MA"
                ],
                year: 2007,
                type: "caso clínico",
                journal: "J Oral Sci"
            }
        ]
    },
    {
        id: "occ-143",
        coordinates: [
            -47.8908,
            -22.0087
        ],
        city: "São Carlos",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-007",
                title: "Primary myiasis in buffaloes--Bufalos bubais L., 1758--of the state of São Paulo, Brazil, by Cochliomyia hominivorax (Coquerel, 1858), Diptera Calliphoridae",
                authors: [
                    "Abdallah SI",
                    "Rocha UF",
                    "Serra OP",
                    "Oba MS",
                    "Serra RG"
                ],
                year: 1970,
                type: "artigo científico",
                journal: "Rev Farm Bioquim Univ Sao Paulo"
            }
        ]
    },
    {
        id: "occ-144",
        coordinates: [
            -47.8908,
            -22.0087
        ],
        city: "São Carlos",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-038",
                title: "Epidemiology of sheep myiases in São Paulo state, Brazil",
                authors: [
                    "Amarante AFT",
                    "Barbosa MA",
                    "Oliveira-Sequeira TC",
                    "Fernandes S"
                ],
                year: 1992,
                type: "estudo epidemiológico",
                journal: "Trop Anim Health Prod"
            },
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-145",
        coordinates: [
            -47.4431,
            -6.5608
        ],
        city: "Estreito",
        state: "MA",
        disease: "Chrysomya albiceps",
        vector: "Chrysomya albiceps",
        date: "2009-07-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-064",
                title: "Applying spatial analysis of genetic and environmental data to predict connection corridors to the New World screwworm populations in South America",
                authors: [
                    "Fresia P",
                    "Silver M",
                    "Mastrangelo T",
                    "Azeredo-Espin AM",
                    "Lyra ML"
                ],
                year: 2014,
                type: "artigo científico",
                journal: "Acta Trop"
            }
        ]
    },
    {
        id: "occ-146",
        coordinates: [
            -47.4431,
            -6.5608
        ],
        city: "Estreito",
        state: "MA",
        disease: "Chrysomya albiceps",
        vector: "Chrysomya albiceps",
        date: "2009-08-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-065",
                title: "Genetic diversity and population structure of the New World screwworm fly from the Amazon region of Brazil",
                authors: [
                    "Mastrangelo T",
                    "Fresia P",
                    "Lyra ML",
                    "Rodrigues RA",
                    "Azeredo-Espin AM"
                ],
                year: 2014,
                type: "artigo científico",
                journal: "Acta Trop"
            },
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-147",
        coordinates: [
            -47.4431,
            -6.5608
        ],
        city: "Estreito",
        state: "MA",
        disease: "Chrysomya albiceps",
        vector: "Chrysomya albiceps",
        date: "2009-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-148",
        coordinates: [
            -47.4431,
            -6.5608
        ],
        city: "Estreito",
        state: "MA",
        disease: "Chrysomya albiceps",
        vector: "Chrysomya albiceps",
        date: "2009-11-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-044",
                title: "Ectoparasitos em rebanhos de caprinos e ovinos na microrregião do Alto mearim e Grajaú, estado do Maranhão",
                authors: [
                    "Brito DRB",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2005,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-149",
        coordinates: [
            -47.4431,
            -6.5608
        ],
        city: "Estreito",
        state: "MA",
        disease: "Chrysomya albiceps",
        vector: "Chrysomya albiceps",
        date: "2010-08-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-050",
                title: "Ectoparasitos de pequenos mamíferos silvestres de áreas adjacentes ao rio Itapecuru e área de preservação ambiental do Inhamum, estado do Maranhão, Brasil",
                authors: [
                    "Reis FS",
                    "Barros MC",
                    "Fraga EC",
                    "Penha TA",
                    "Teixeira WC",
                    "Santos ACG"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-150",
        coordinates: [
            -47.4431,
            -6.5608
        ],
        city: "Estreito",
        state: "MA",
        disease: "Chrysomya albiceps",
        vector: "Chrysomya albiceps",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-051",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-151",
        coordinates: [
            -47.4431,
            -6.5608
        ],
        city: "Estreito",
        state: "MA",
        disease: "Chrysomya albiceps",
        vector: "Chrysomya albiceps",
        date: "2010-11-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-064",
                title: "Applying spatial analysis of genetic and environmental data to predict connection corridors to the New World screwworm populations in South America",
                authors: [
                    "Fresia P",
                    "Silver M",
                    "Mastrangelo T",
                    "Azeredo-Espin AM",
                    "Lyra ML"
                ],
                year: 2014,
                type: "artigo científico",
                journal: "Acta Trop"
            },
            {
                id: "art-065",
                title: "Genetic diversity and population structure of the New World screwworm fly from the Amazon region of Brazil",
                authors: [
                    "Mastrangelo T",
                    "Fresia P",
                    "Lyra ML",
                    "Rodrigues RA",
                    "Azeredo-Espin AM"
                ],
                year: 2014,
                type: "artigo científico",
                journal: "Acta Trop"
            }
        ]
    },
    {
        id: "occ-152",
        coordinates: [
            -47.4431,
            -6.5608
        ],
        city: "Estreito",
        state: "MA",
        disease: "Chrysomya albiceps",
        vector: "Chrysomya albiceps",
        date: "2011-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-065",
                title: "Genetic diversity and population structure of the New World screwworm fly from the Amazon region of Brazil",
                authors: [
                    "Mastrangelo T",
                    "Fresia P",
                    "Lyra ML",
                    "Rodrigues RA",
                    "Azeredo-Espin AM"
                ],
                year: 2014,
                type: "artigo científico",
                journal: "Acta Trop"
            }
        ]
    },
    {
        id: "occ-153",
        coordinates: [
            -47.4431,
            -6.5608
        ],
        city: "Estreito",
        state: "MA",
        disease: "Chrysomya albiceps",
        vector: "Chrysomya albiceps",
        date: "2011-04-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-154",
        coordinates: [
            -47.4431,
            -6.5608
        ],
        city: "Estreito",
        state: "MA",
        disease: "Chrysomya albiceps",
        vector: "Chrysomya albiceps",
        date: "2011-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-044",
                title: "Ectoparasitos em rebanhos de caprinos e ovinos na microrregião do Alto mearim e Grajaú, estado do Maranhão",
                authors: [
                    "Brito DRB",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2005,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-155",
        coordinates: [
            -47.4431,
            -6.5608
        ],
        city: "Estreito",
        state: "MA",
        disease: "Chrysomya albiceps",
        vector: "Chrysomya albiceps",
        date: "2012-02-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-050",
                title: "Ectoparasitos de pequenos mamíferos silvestres de áreas adjacentes ao rio Itapecuru e área de preservação ambiental do Inhamum, estado do Maranhão, Brasil",
                authors: [
                    "Reis FS",
                    "Barros MC",
                    "Fraga EC",
                    "Penha TA",
                    "Teixeira WC",
                    "Santos ACG"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-156",
        coordinates: [
            -47.4431,
            -6.5608
        ],
        city: "Estreito",
        state: "MA",
        disease: "Chrysomya albiceps",
        vector: "Chrysomya albiceps",
        date: "2012-05-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-051",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            },
            {
                id: "art-064",
                title: "Applying spatial analysis of genetic and environmental data to predict connection corridors to the New World screwworm populations in South America",
                authors: [
                    "Fresia P",
                    "Silver M",
                    "Mastrangelo T",
                    "Azeredo-Espin AM",
                    "Lyra ML"
                ],
                year: 2014,
                type: "artigo científico",
                journal: "Acta Trop"
            }
        ]
    },
    {
        id: "occ-157",
        coordinates: [
            -47.4431,
            -6.5608
        ],
        city: "Estreito",
        state: "MA",
        disease: "Chrysomya albiceps",
        vector: "Chrysomya albiceps",
        date: "2012-11-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-064",
                title: "Applying spatial analysis of genetic and environmental data to predict connection corridors to the New World screwworm populations in South America",
                authors: [
                    "Fresia P",
                    "Silver M",
                    "Mastrangelo T",
                    "Azeredo-Espin AM",
                    "Lyra ML"
                ],
                year: 2014,
                type: "artigo científico",
                journal: "Acta Trop"
            }
        ]
    },
    {
        id: "occ-158",
        coordinates: [
            -43.0537,
            -22.8268
        ],
        city: "São Gonçalo",
        state: "RJ",
        disease: "Dermatobia hominis",
        vector: "Dermatobia hominis",
        date: "2026-03-15",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "12",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-010",
                title: "Oral myiasis: a case report",
                authors: [
                    "Rossi-Schneider T",
                    "Cherubini K",
                    "Yurgel LS",
                    "Salum F",
                    "Figueiredo MA"
                ],
                year: 2007,
                type: "caso clínico",
                journal: "J Oral Sci"
            }
        ]
    },
    {
        id: "occ-159",
        coordinates: [
            -43.0537,
            -22.8268
        ],
        city: "São Gonçalo",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2026-03-25",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "12",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-029",
                title: "Raro caso de miíases por Cochliomyia hominivorax (Diptera: Calliphoridae) e Dermatobia hominis (Diptera: Oestridae) em paciente humano",
                authors: [
                    "Ferraz AC",
                    "Nunes R",
                    "Gadelha BQ",
                    "Nascimento BP",
                    "Barros PREM",
                    "Coelho VMA"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Arq Ciênc Saúde"
            }
        ]
    },
    {
        id: "occ-160",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Dermatobia hominis",
        vector: "Dermatobia hominis",
        date: "2012-06-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-062",
                title: "Extensive oral lesion colonized with 601 myiasis larvae",
                authors: [
                    "Laureano-Filho JR",
                    "Bezerra TP",
                    "Lima FT",
                    "Campelo RI"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "Trop Doct"
            }
        ]
    },
    {
        id: "occ-161",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Dermatobia hominis",
        vector: "Dermatobia hominis",
        date: "2012-06-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-063",
                title: "Head and neck myiasis: a case series and review of the literature",
                authors: [
                    "Arruda JAA",
                    "Oliveira Silva LV",
                    "Silva PUJ",
                    "Figueiredo EL",
                    "Callou G",
                    "Mesquita RA"
                ],
                year: 2017,
                type: "revisão",
                journal: "Oral Surg Oral Med Oral Pathol Oral Radiol"
            }
        ]
    },
    {
        id: "occ-162",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Dermatobia hominis",
        vector: "Dermatobia hominis",
        date: "2012-06-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-061",
                title: "Miíases no lábio superior: apresentação de caso clínico",
                authors: [
                    "Melo REVA",
                    "Vitor CMA",
                    "Silva MBL",
                    "Luna LA",
                    "Firmo ACB"
                ],
                year: 2003,
                type: "caso clínico",
                journal: "Int J Dent"
            }
        ]
    },
    {
        id: "occ-163",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Dermatobia hominis",
        vector: "Dermatobia hominis",
        date: "2012-06-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-062",
                title: "Extensive oral lesion colonized with 601 myiasis larvae",
                authors: [
                    "Laureano-Filho JR",
                    "Bezerra TP",
                    "Lima FT",
                    "Campelo RI"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "Trop Doct"
            },
            {
                id: "art-063",
                title: "Head and neck myiasis: a case series and review of the literature",
                authors: [
                    "Arruda JAA",
                    "Oliveira Silva LV",
                    "Silva PUJ",
                    "Figueiredo EL",
                    "Callou G",
                    "Mesquita RA"
                ],
                year: 2017,
                type: "revisão",
                journal: "Oral Surg Oral Med Oral Pathol Oral Radiol"
            }
        ]
    },
    {
        id: "occ-164",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Dermatobia hominis",
        vector: "Dermatobia hominis",
        date: "2012-06-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-063",
                title: "Head and neck myiasis: a case series and review of the literature",
                authors: [
                    "Arruda JAA",
                    "Oliveira Silva LV",
                    "Silva PUJ",
                    "Figueiredo EL",
                    "Callou G",
                    "Mesquita RA"
                ],
                year: 2017,
                type: "revisão",
                journal: "Oral Surg Oral Med Oral Pathol Oral Radiol"
            }
        ]
    },
    {
        id: "occ-165",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2007-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "30",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-030",
                title: "Epidemiological Study of Myiases in the Hospital do Andaraí, Rio de Janeiro, Including Reference to an exotic etiological Agent",
                authors: [
                    "Ferraz AC",
                    "Almeida VRG",
                    "Jesus DM",
                    "Rotatori GN",
                    "Nunes R",
                    "Proenca B"
                ],
                year: 2011,
                type: "estudo epidemiológico",
                journal: "Neotrop Entomol"
            }
        ]
    },
    {
        id: "occ-166",
        coordinates: [
            -48.445,
            -22.8858
        ],
        city: "Botucatu",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "1986-01-01",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-066",
                title: "Oral myiasis in a captive hippopotamus",
                authors: [
                    "Rossi JL Jr",
                    "Guiao-Leite FL",
                    "Gioso MA",
                    "Falqueiro LM",
                    "Fecchio RS"
                ],
                year: 2009,
                type: "caso clínico",
                journal: "J Vet Dent"
            }
        ]
    },
    {
        id: "occ-167",
        coordinates: [
            -41.8559,
            -11.3033
        ],
        city: "Irecê",
        state: "BA",
        disease: "Struthiopterolichus bicaudatus",
        vector: "Não informado",
        date: "2005-05-01",
        host: "Struthio camelus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Infestado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            },
            {
                id: "art-067",
                title: "Ocorrência de ectoparasitos em avestruzes (Struthio camelus) criados no semi-árido Baiano",
                authors: [
                    "Almeida MA",
                    "Duarte LF",
                    "Rocha JS",
                    "Silva MS",
                    "Guimarães JE",
                    "Ayres MC"
                ],
                year: 2008,
                type: "estudo epidemiológico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-168",
        coordinates: [
            -41.8559,
            -11.3033
        ],
        city: "Irecê",
        state: "BA",
        disease: "Struthiopterolichus bicaudatus",
        vector: "Struthiopterolichus bicaudatus",
        date: "2005-05-01",
        host: "Struthio camelus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Infestado",
        articles: [
            {
                id: "art-067",
                title: "Ocorrência de ectoparasitos em avestruzes (Struthio camelus) criados no semi-árido Baiano",
                authors: [
                    "Almeida MA",
                    "Duarte LF",
                    "Rocha JS",
                    "Silva MS",
                    "Guimarães JE",
                    "Ayres MC"
                ],
                year: 2008,
                type: "estudo epidemiológico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-169",
        coordinates: [
            -41.8559,
            -11.3033
        ],
        city: "Irecê",
        state: "BA",
        disease: "Struthiopterolichus bicaudatus",
        vector: "Não informado",
        date: "2005-08-01",
        host: "Struthio camelus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Infestado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-170",
        coordinates: [
            -41.8559,
            -11.3033
        ],
        city: "Irecê",
        state: "BA",
        disease: "Struthiopterolichus bicaudatus",
        vector: "Struthiopterolichus bicaudatus",
        date: "2005-08-01",
        host: "Struthio camelus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Infestado",
        articles: [
            {
                id: "art-067",
                title: "Ocorrência de ectoparasitos em avestruzes (Struthio camelus) criados no semi-árido Baiano",
                authors: [
                    "Almeida MA",
                    "Duarte LF",
                    "Rocha JS",
                    "Silva MS",
                    "Guimarães JE",
                    "Ayres MC"
                ],
                year: 2008,
                type: "estudo epidemiológico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-171",
        coordinates: [
            -41.8559,
            -11.3033
        ],
        city: "Irecê",
        state: "BA",
        disease: "Struthiolipeurus rheae",
        vector: "Struthiolipeurus rheae",
        date: "2005-08-01",
        host: "Struthio camelus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Infestado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-172",
        coordinates: [
            -47.8825,
            -15.7942
        ],
        city: "Brasília",
        state: "DF",
        disease: "Chrysomya megacephala",
        vector: "Chrysomya megacephala",
        date: "Não informado",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-011",
                title: "Myiasis by Screw Worm Cochliomyia hominivorax (Coquerel) (Diptera: Calliphoridae) in a Wild Maned Wolf Chrysocyon brachyurus (Mammalia: Canidae), in Brasilia, Brazil",
                authors: [
                    "Cansi ER",
                    "Bonorino R",
                    "Ataide HS",
                    "Pujol-Luz JR"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "Neotrop Entomol"
            },
            {
                id: "art-012",
                title: "Miíase por Lucilia eximia (Diptera: Calliphoridae) em Didelphis albiventris (Mammalia: Didelphidae) no Brasil Central",
                authors: [
                    "Cansi ER",
                    "Bonorino R"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "EntomoBrasilis"
            }
        ]
    },
    {
        id: "occ-173",
        coordinates: [
            -42.9664,
            -22.4167
        ],
        city: "Teresópolis",
        state: "RJ",
        disease: "Notochaeta bufonivora",
        vector: "Não informado",
        date: "2007-01-01",
        host: "Aplastodiscus arildae",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Óbito",
        articles: [
            {
                id: "art-068",
                title: "Cochliomyia hominivorax myiasis in a colony of stray cats (Felis catus Linnaeus, 1758) in Rio de Janeiro, RJ",
                authors: [
                    "Mendes-de-Almeida F",
                    "Labarthe N",
                    "Guerrero J",
                    "Landau-Remy G",
                    "Rodrigues DP",
                    "Moya-Borja GE"
                ],
                year: 2007,
                type: "artigo científico",
                journal: "Vet Parasitol"
            }
        ]
    },
    {
        id: "occ-174",
        coordinates: [
            -42.9664,
            -22.4167
        ],
        city: "Teresópolis",
        state: "RJ",
        disease: "Notochaeta bufonivora",
        vector: "Não informado",
        date: "2007-02-01",
        host: "Aplastodiscus arildae",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Óbito",
        articles: [
            {
                id: "art-010",
                title: "Oral myiasis: a case report",
                authors: [
                    "Rossi-Schneider T",
                    "Cherubini K",
                    "Yurgel LS",
                    "Salum F",
                    "Figueiredo MA"
                ],
                year: 2007,
                type: "caso clínico",
                journal: "J Oral Sci"
            },
            {
                id: "art-069",
                title: "Miíases associadas com alguns fatores sócio-econômicos em cinco áreas urbanas do Estado do Rio de Janeiro",
                authors: [
                    "Marquez AT",
                    "Mattos MS",
                    "Nascimento SB"
                ],
                year: 2007,
                type: "artigo científico",
                journal: "Rev Soc Bras Med Trop"
            }
        ]
    },
    {
        id: "occ-175",
        coordinates: [
            -96.7898,
            46.8772
        ],
        city: "Fargo",
        state: "ND",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-070",
                title: "A review on the occurrence of Cochliomyia hominivorax (Diptera: Calliphoridae) in Brazil",
                authors: [
                    "Costa-Júnior LM",
                    "Chaves DP",
                    "Brito DRB",
                    "Santos VAF",
                    "Costa-Júnior HN",
                    "Barros ATM"
                ],
                year: 2019,
                type: "revisão",
                journal: "Revista Brasileira de Parasitologia Veterinária"
            }
        ]
    },
    {
        id: "occ-176",
        coordinates: [
            -96.7898,
            46.8772
        ],
        city: "Fargo",
        state: "ND",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2026-03-18",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-070",
                title: "A review on the occurrence of Cochliomyia hominivorax (Diptera: Calliphoridae) in Brazil",
                authors: [
                    "Costa-Júnior LM",
                    "Chaves DP",
                    "Brito DRB",
                    "Santos VAF",
                    "Costa-Júnior HN",
                    "Barros ATM"
                ],
                year: 2019,
                type: "revisão",
                journal: "Revista Brasileira de Parasitologia Veterinária"
            }
        ]
    },
    {
        id: "occ-187",
        coordinates: [
            -46.7983,
            -21.9692
        ],
        city: "São João da Boa Vista",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-277",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Austromenopon sp.",
        vector: "Austromenopon sp.",
        date: "2006-08-01",
        host: "Thalasseus maximus",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-050",
                title: "Ectoparasitos de pequenos mamíferos silvestres de áreas adjacentes ao rio Itapecuru e área de preservação ambiental do Inhamum, estado do Maranhão, Brasil",
                authors: [
                    "Reis FS",
                    "Barros MC",
                    "Fraga EC",
                    "Penha TA",
                    "Teixeira WC",
                    "Santos ACG"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            },
            {
                id: "art-051",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-188",
        coordinates: [
            -46.7983,
            -21.9692
        ],
        city: "São João da Boa Vista",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-039",
                title: "Control of gastrointestinal nematodes and productivity responses of grazing cattle treated with a two dose program of doramectin or ivermectin",
                authors: [
                    "Gennari SM",
                    "Kasai N",
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LC",
                    "Derozier C"
                ],
                year: 2000,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-189",
        coordinates: [
            -46.7983,
            -21.9692
        ],
        city: "São João da Boa Vista",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-040",
                title: "Ivermectina e abamectina em diferentes doses e vias de aplicação contra larvas de Cochliomyia hominivorax em bolsas escrotais de bovinos recém-castrados, provenientes da região sudeste do Brasil",
                authors: [
                    "Lopes WDZ",
                    "Teixeira WFP",
                    "Felippelli G",
                    "Cruz BC",
                    "Maciel WG",
                    "Matos LVS"
                ],
                year: 2013,
                type: "artigo científico",
                journal: "Cienc Rural"
            }
        ]
    },
    {
        id: "occ-190",
        coordinates: [
            -46.7983,
            -21.9692
        ],
        city: "São João da Boa Vista",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-041",
                title: "The effectiveness of a fixed-dose combination pour-on formulation of 1.25% fipronil and 2.5% fluazuron against economically important ectoparasites and associated pharmacokinetics in cattle",
                authors: [
                    "Lopes WDZ",
                    "Chiummo RM",
                    "Vettorato LF",
                    "Castro Rodrigues D",
                    "Sonada RB"
                ],
                year: 2017,
                type: "artigo científico",
                journal: "Parasitol Int"
            }
        ]
    },
    {
        id: "occ-191",
        coordinates: [
            -46.7983,
            -21.9692
        ],
        city: "São João da Boa Vista",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-042",
                title: "Terapia fotodinâmica no tratamento de ferida causada por miíase em vulva de caprino – relato de caso",
                authors: [
                    "Sellera FP",
                    "Barbosa BS",
                    "Gargano RG",
                    "Benesi FJ",
                    "Pogliani FC"
                ],
                year: 2014,
                type: "caso clínico",
                journal: "Acta Vet Brasilica"
            },
            {
                id: "art-005",
                title: "Sobre um tipo interessante de miíase dos bezerros e seu agente causal",
                authors: [
                    "Vaz Z",
                    "Carvalho GT"
                ],
                year: 1938,
                type: "artigo científico",
                journal: "Rev Fac Med Vet S Paulo"
            }
        ]
    },
    {
        id: "occ-192",
        coordinates: [
            -47.9319,
            -19.7472
        ],
        city: "Uberaba",
        state: "MG",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            },
            {
                id: "art-071",
                title: "Ocorrência e tratamento de miíases cutâneas em ovinos criados em condições semiáridas no norte de Minas Gerais",
                authors: [
                    "Duarte ER",
                    "Rocha FT",
                    "Teixeira LM",
                    "Silva RB",
                    "Nogueira FA",
                    "Silva NO"
                ],
                year: 2012,
                type: "caso clínico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-193",
        coordinates: [
            -47.9319,
            -19.7472
        ],
        city: "Uberaba",
        state: "MG",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-071",
                title: "Ocorrência e tratamento de miíases cutâneas em ovinos criados em condições semiáridas no norte de Minas Gerais",
                authors: [
                    "Duarte ER",
                    "Rocha FT",
                    "Teixeira LM",
                    "Silva RB",
                    "Nogueira FA",
                    "Silva NO"
                ],
                year: 2012,
                type: "caso clínico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-194",
        coordinates: [
            -47.9319,
            -19.7472
        ],
        city: "Uberaba",
        state: "MG",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-072",
                title: "Evaluation of the prophylactic effect and curative efficacy of fipronil 1% pour on (Topline) on post-castration scrotal myiasis caused by Cochliomyia hominivorax in cattle",
                authors: [
                    "Lima WS",
                    "Malacco MA",
                    "Bordin EL",
                    "Oliveira EL"
                ],
                year: 2004,
                type: "caso clínico",
                journal: "Vet Parasitol"
            }
        ]
    },
    {
        id: "occ-195",
        coordinates: [
            -47.9319,
            -19.7472
        ],
        city: "Uberaba",
        state: "MG",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-073",
                title: "Parâmetros farmacocinéticos e atividade endectocida de uma nova formulação contendo avermectinas, via tópica (pour-on), em bovinos [tese]",
                authors: [
                    "Silva HC"
                ],
                year: 2008,
                type: "caso clínico",
                journal: "Jaboticabal: Universidade Estadual Paulista"
            }
        ]
    },
    {
        id: "occ-196",
        coordinates: [
            -47.9319,
            -19.7472
        ],
        city: "Uberaba",
        state: "MG",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-074",
                title: "Atividade terapêutica do spinosad contra larvas de Cochliomyia hominivorax (L1, L2 E L3) em bovinos infestados natural e artificialmente [dissertação]",
                authors: [
                    "Amos CAA"
                ],
                year: 2009,
                type: "caso clínico",
                journal: "Jaboticabal: Universidade Estadual Paulista"
            }
        ]
    },
    {
        id: "occ-197",
        coordinates: [
            -45.4319,
            -20.4644
        ],
        city: "Formiga",
        state: "MG",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-040",
                title: "Ivermectina e abamectina em diferentes doses e vias de aplicação contra larvas de Cochliomyia hominivorax em bolsas escrotais de bovinos recém-castrados, provenientes da região sudeste do Brasil",
                authors: [
                    "Lopes WDZ",
                    "Teixeira WFP",
                    "Felippelli G",
                    "Cruz BC",
                    "Maciel WG",
                    "Matos LVS"
                ],
                year: 2013,
                type: "artigo científico",
                journal: "Cienc Rural"
            },
            {
                id: "art-075",
                title: "Endectocide activity of a pour-on formulation containing 1.5 per cent ivermectin +0.5 per cent abamectin in cattle",
                authors: [
                    "Silva HC",
                    "Prette N",
                    "Lopes WD",
                    "Sakamoto CA",
                    "Buzzulini C",
                    "Dos Santos TR"
                ],
                year: 2015,
                type: "artigo científico",
                journal: "Vet Rec Open"
            }
        ]
    },
    {
        id: "occ-198",
        coordinates: [
            -45.4319,
            -20.4644
        ],
        city: "Formiga",
        state: "MG",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-075",
                title: "Endectocide activity of a pour-on formulation containing 1.5 per cent ivermectin +0.5 per cent abamectin in cattle",
                authors: [
                    "Silva HC",
                    "Prette N",
                    "Lopes WD",
                    "Sakamoto CA",
                    "Buzzulini C",
                    "Dos Santos TR"
                ],
                year: 2015,
                type: "artigo científico",
                journal: "Vet Rec Open"
            }
        ]
    },
    {
        id: "occ-199",
        coordinates: [
            -45.4319,
            -20.4644
        ],
        city: "Formiga",
        state: "MG",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-200",
        coordinates: [
            -45.4319,
            -20.4644
        ],
        city: "Formiga",
        state: "MG",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-071",
                title: "Ocorrência e tratamento de miíases cutâneas em ovinos criados em condições semiáridas no norte de Minas Gerais",
                authors: [
                    "Duarte ER",
                    "Rocha FT",
                    "Teixeira LM",
                    "Silva RB",
                    "Nogueira FA",
                    "Silva NO"
                ],
                year: 2012,
                type: "caso clínico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-201",
        coordinates: [
            -45.4319,
            -20.4644
        ],
        city: "Formiga",
        state: "MG",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-072",
                title: "Evaluation of the prophylactic effect and curative efficacy of fipronil 1% pour on (Topline) on post-castration scrotal myiasis caused by Cochliomyia hominivorax in cattle",
                authors: [
                    "Lima WS",
                    "Malacco MA",
                    "Bordin EL",
                    "Oliveira EL"
                ],
                year: 2004,
                type: "caso clínico",
                journal: "Vet Parasitol"
            }
        ]
    },
    {
        id: "occ-202",
        coordinates: [
            -50.3386,
            -19.5297
        ],
        city: "União de Minas",
        state: "MG",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-073",
                title: "Parâmetros farmacocinéticos e atividade endectocida de uma nova formulação contendo avermectinas, via tópica (pour-on), em bovinos [tese]",
                authors: [
                    "Silva HC"
                ],
                year: 2008,
                type: "caso clínico",
                journal: "Jaboticabal: Universidade Estadual Paulista"
            },
            {
                id: "art-074",
                title: "Atividade terapêutica do spinosad contra larvas de Cochliomyia hominivorax (L1, L2 E L3) em bovinos infestados natural e artificialmente [dissertação]",
                authors: [
                    "Amos CAA"
                ],
                year: 2009,
                type: "caso clínico",
                journal: "Jaboticabal: Universidade Estadual Paulista"
            }
        ]
    },
    {
        id: "occ-203",
        coordinates: [
            -50.3386,
            -19.5297
        ],
        city: "União de Minas",
        state: "MG",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-074",
                title: "Atividade terapêutica do spinosad contra larvas de Cochliomyia hominivorax (L1, L2 E L3) em bovinos infestados natural e artificialmente [dissertação]",
                authors: [
                    "Amos CAA"
                ],
                year: 2009,
                type: "caso clínico",
                journal: "Jaboticabal: Universidade Estadual Paulista"
            }
        ]
    },
    {
        id: "occ-204",
        coordinates: [
            -50.3386,
            -19.5297
        ],
        city: "União de Minas",
        state: "MG",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-040",
                title: "Ivermectina e abamectina em diferentes doses e vias de aplicação contra larvas de Cochliomyia hominivorax em bolsas escrotais de bovinos recém-castrados, provenientes da região sudeste do Brasil",
                authors: [
                    "Lopes WDZ",
                    "Teixeira WFP",
                    "Felippelli G",
                    "Cruz BC",
                    "Maciel WG",
                    "Matos LVS"
                ],
                year: 2013,
                type: "artigo científico",
                journal: "Cienc Rural"
            }
        ]
    },
    {
        id: "occ-205",
        coordinates: [
            -50.3386,
            -19.5297
        ],
        city: "União de Minas",
        state: "MG",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-075",
                title: "Endectocide activity of a pour-on formulation containing 1.5 per cent ivermectin +0.5 per cent abamectin in cattle",
                authors: [
                    "Silva HC",
                    "Prette N",
                    "Lopes WD",
                    "Sakamoto CA",
                    "Buzzulini C",
                    "Dos Santos TR"
                ],
                year: 2015,
                type: "artigo científico",
                journal: "Vet Rec Open"
            }
        ]
    },
    {
        id: "occ-206",
        coordinates: [
            -50.3386,
            -19.5297
        ],
        city: "União de Minas",
        state: "MG",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2012-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "12",
        outcome: "Ineficaz",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-207",
        coordinates: [
            -47.0626,
            -22.9099
        ],
        city: "Campinas",
        state: "SP",
        disease: "Phaenicia eximia",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Canis familiaris",
        hostCategory: "Companhia",
        hostSex: "Fêmea",
        hostAge: "10",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-109",
                title: "Freqüência de dermatopatias infecciosas, parasitárias e neoplásicas em cães na região de Garça, São Paulo - Brasil [dissertação]",
                authors: [
                    "Pena SB"
                ],
                year: 2007,
                type: "estudo epidemiológico",
                journal: "Botucatu:Universidade Estadual Paulista"
            }
        ]
    },
    {
        id: "occ-208",
        coordinates: [
            -47.0626,
            -22.9099
        ],
        city: "Campinas",
        state: "SP",
        disease: "Chrysomya bezziana",
        vector: "Chrysomya bezziana",
        date: "2026-03-18",
        host: "Felis domesticus",
        hostCategory: "Companhia",
        hostSex: "Fêmea",
        hostAge: "15",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-110",
                title: "Freqüência de dermatopatias infecciosas, parasitárias e neoplásicas em cães na região de Garça, São Paulo - Brasil [dissertação]",
                authors: [
                    "Pena SB"
                ],
                year: 2007,
                type: "estudo epidemiológico",
                journal: "Botucatu:Universidade Estadual Paulista"
            }
        ]
    },
    {
        id: "occ-209",
        coordinates: [
            -43.0537,
            -22.8268
        ],
        city: "São Gonçalo",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2008-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "59",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-031",
                title: "Miíase humana por Dermatobia hominis (Linneaus Jr.) (Diptera, Cuterebridae) e Cochliomyia hominivorax (Coquerel) (Diptera, Calliphoridae) em Sucessão Parasitaria",
                authors: [
                    "Batista-da-Silva JA",
                    "Abádio HC",
                    "Queiroz MMC"
                ],
                year: 2009,
                type: "artigo científico",
                journal: "EntomoBrasilis"
            }
        ]
    },
    {
        id: "occ-210",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "MS",
        state: "MS",
        disease: "Chloroprocta idioidea",
        vector: "Não informado",
        date: "Não informado",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-059",
                title: "Chrysomya (Diptera: Calliphoridae) relative abundance and species seasonality in the Pantanal, State of Mato Grosso do Sul, Brazil",
                authors: [
                    "Corrêa EC",
                    "Koller WW",
                    "Barros ATM"
                ],
                year: 2010,
                type: "estudo epidemiológico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-211",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Dermatobia hominis",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "80",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-065",
                title: "Genetic diversity and population structure of the New World screwworm fly from the Amazon region of Brazil",
                authors: [
                    "Mastrangelo T",
                    "Fresia P",
                    "Lyra ML",
                    "Rodrigues RA",
                    "Azeredo-Espin AM"
                ],
                year: 2014,
                type: "artigo científico",
                journal: "Acta Trop"
            }
        ]
    },
    {
        id: "occ-212",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Dermatobia hominis",
        vector: "Não informado",
        date: "2026-03-18",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "80",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-213",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Dermatobia hominis",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "80",
        outcome: "Óbito",
        articles: [
            {
                id: "art-044",
                title: "Ectoparasitos em rebanhos de caprinos e ovinos na microrregião do Alto mearim e Grajaú, estado do Maranhão",
                authors: [
                    "Brito DRB",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2005,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-214",
        coordinates: [
            -42.8019,
            -5.0892
        ],
        city: "Pi",
        state: "Pi",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-016",
                title: "Genital myiasis in a woman with psychiatric disturbance",
                authors: [
                    "Silva BB",
                    "Vieira SC",
                    "Coelho EG",
                    "Machado V",
                    "Borges US",
                    "Silveira Filho MA"
                ],
                year: 2005,
                type: "caso clínico",
                journal: "BJOG"
            }
        ]
    },
    {
        id: "occ-215",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-069",
                title: "Miíases associadas com alguns fatores sócio-econômicos em cinco áreas urbanas do Estado do Rio de Janeiro",
                authors: [
                    "Marquez AT",
                    "Mattos MS",
                    "Nascimento SB"
                ],
                year: 2007,
                type: "artigo científico",
                journal: "Rev Soc Bras Med Trop"
            }
        ]
    },
    {
        id: "occ-216",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-076",
                title: "Nim (Azadirachta indica): uma alternativa no controle de moscas na pecuária",
                authors: [
                    "Deleito CSR",
                    "Moya-Borja GE"
                ],
                year: 2008,
                type: "caso clínico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-217",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-029",
                title: "Raro caso de miíases por Cochliomyia hominivorax (Diptera: Calliphoridae) e Dermatobia hominis (Diptera: Oestridae) em paciente humano",
                authors: [
                    "Ferraz AC",
                    "Nunes R",
                    "Gadelha BQ",
                    "Nascimento BP",
                    "Barros PREM",
                    "Coelho VMA"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Arq Ciênc Saúde"
            }
        ]
    },
    {
        id: "occ-218",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-077",
                title: "Influência climática e antrópica na abundância e riqueza de Calliphoridae (Diptera) em fragmento florestal da Reserva Biológica do Tinguá, RJ",
                authors: [
                    "Ferraz AC",
                    "Gadelha BQ",
                    "Aguiar-Coelho VM"
                ],
                year: 2010,
                type: "estudo epidemiológico",
                journal: "Neotrop Entomol"
            }
        ]
    },
    {
        id: "occ-219",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-078",
                title: "Effects of forest fragmentation on dipterofauna (Calliphoridae) at the Reserva Biológica do Tinguá, Nova Iguacu, RJ",
                authors: [
                    "Ferraz AC",
                    "Gadelha BQ",
                    "Queiroz MM",
                    "Moya-Borja GE",
                    "Aguiar-Coelho VM"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Braz J Biol"
            },
            {
                id: "art-030",
                title: "Epidemiological Study of Myiases in the Hospital do Andaraí, Rio de Janeiro, Including Reference to an exotic etiological Agent",
                authors: [
                    "Ferraz AC",
                    "Almeida VRG",
                    "Jesus DM",
                    "Rotatori GN",
                    "Nunes R",
                    "Proenca B"
                ],
                year: 2011,
                type: "estudo epidemiológico",
                journal: "Neotrop Entomol"
            }
        ]
    },
    {
        id: "occ-220",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-030",
                title: "Epidemiological Study of Myiases in the Hospital do Andaraí, Rio de Janeiro, Including Reference to an exotic etiological Agent",
                authors: [
                    "Ferraz AC",
                    "Almeida VRG",
                    "Jesus DM",
                    "Rotatori GN",
                    "Nunes R",
                    "Proenca B"
                ],
                year: 2011,
                type: "estudo epidemiológico",
                journal: "Neotrop Entomol"
            }
        ]
    },
    {
        id: "occ-221",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-079",
                title: "Sinantropia da fauna de Califorídeos (Diptera, Cochliomyia hominivorax in Brazil Calliphoridae) na Baixada Fluminense, Rio de Janeiro, Brasil",
                authors: [
                    "Rodrigues-Guimarães R",
                    "Guimarães RR",
                    "Barros HM",
                    "Carvalho RW",
                    "Moya-Borja GE"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Cienc Tecnol"
            }
        ]
    },
    {
        id: "occ-222",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-023",
                title: "Miíases umbilicais em bezerros nelore recém-nascidos: predisposição em dois cruzamentos raciais criados no sistema de manejo voisin no Rio de Janeiro e avaliação de medidas profiláticas em criação extensiva no Pantanal Sul-Mato-Grossense [dissertação]",
                authors: [
                    "Pires MS"
                ],
                year: 2008,
                type: "outro",
                journal: "Seropédica: Universidade Federal Rural do Rio de Janeiro"
            }
        ]
    },
    {
        id: "occ-223",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-031",
                title: "Miíase humana por Dermatobia hominis (Linneaus Jr.) (Diptera, Cuterebridae) e Cochliomyia hominivorax (Coquerel) (Diptera, Calliphoridae) em Sucessão Parasitaria",
                authors: [
                    "Batista-da-Silva JA",
                    "Abádio HC",
                    "Queiroz MMC"
                ],
                year: 2009,
                type: "artigo científico",
                journal: "EntomoBrasilis"
            }
        ]
    },
    {
        id: "occ-224",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-080",
                title: "Larvicidal efficacy of nitenpyram on the treatment of myiasis caused by Cochliomyia hominivorax (Diptera: Calliphoridae) in dogs",
                authors: [
                    "Correia TR",
                    "Scott FB",
                    "Verocai GG",
                    "Souza CP",
                    "Fernandes JI",
                    "Melo RM"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Cochliomyia hominivorax in Brazil Vet Parasitol"
            },
            {
                id: "art-081",
                title: "Myiasis caused by the New World screwworm fly Cochliomyia hominivorax (Diptera: Calliphoridae) in cats from Brazil: report of five cases",
                authors: [
                    "Souza CP",
                    "Verocai GG",
                    "Ramadinha RH"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "J Feline Med Surg"
            }
        ]
    },
    {
        id: "occ-225",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-081",
                title: "Myiasis caused by the New World screwworm fly Cochliomyia hominivorax (Diptera: Calliphoridae) in cats from Brazil: report of five cases",
                authors: [
                    "Souza CP",
                    "Verocai GG",
                    "Ramadinha RH"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "J Feline Med Surg"
            }
        ]
    },
    {
        id: "occ-226",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-082",
                title: "Influência do clima e da cobertura de solo na mortalidade de Cochliomyia hominivorax (Coquerel, 1858) (Diptera: Calliphoridae) e na atuação de seus inimigos naturais",
                authors: [
                    "Souza JR",
                    "Pires MS",
                    "Sanavria A"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Biosci J"
            }
        ]
    },
    {
        id: "occ-227",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-032",
                title: "Factors of susceptibility of human myiasis caused by the New World screw-worm, Cochliomyia 556   556/562 hominivorax in São Gonçalo, Rio de Janeiro, Brazil",
                authors: [
                    "Batista-da-Silva JA",
                    "Moya-Borja GE",
                    "Queiroz MMC"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "J Insect Sci"
            }
        ]
    },
    {
        id: "occ-228",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Felis catus",
        hostCategory: "Selvagem",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-082",
                title: "Influência do clima e da cobertura de solo na mortalidade de Cochliomyia hominivorax (Coquerel, 1858) (Diptera: Calliphoridae) e na atuação de seus inimigos naturais",
                authors: [
                    "Souza JR",
                    "Pires MS",
                    "Sanavria A"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Biosci J"
            }
        ]
    },
    {
        id: "occ-229",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Felis catus",
        hostCategory: "Selvagem",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-083",
                title: "Efeito da poluição causada por óleo mineral sobre a comunidade de Calliphoridae (Diptera, Oestroidea) em manguezal",
                authors: [
                    "Batista-da-Silva JA"
                ],
                year: 2015,
                type: "artigo científico",
                journal: "Entomotrópica"
            },
            {
                id: "art-035",
                title: "Miíase interna oro-nasal e cutânea por Cochliomyia hominivorax (Coquerel, 1858) em felino (Felis catus)- Relato de caso",
                authors: [
                    "Marotta CR",
                    "Scherer PO",
                    "Sanavria A"
                ],
                year: 2011,
                type: "caso clínico",
                journal: "Rev Bras Med Vet"
            }
        ]
    },
    {
        id: "occ-230",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Felis catus",
        hostCategory: "Selvagem",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Óbito",
        articles: [
            {
                id: "art-035",
                title: "Miíase interna oro-nasal e cutânea por Cochliomyia hominivorax (Coquerel, 1858) em felino (Felis catus)- Relato de caso",
                authors: [
                    "Marotta CR",
                    "Scherer PO",
                    "Sanavria A"
                ],
                year: 2011,
                type: "caso clínico",
                journal: "Rev Bras Med Vet"
            }
        ]
    },
    {
        id: "occ-231",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Felis catus",
        hostCategory: "Selvagem",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Óbito",
        articles: [
            {
                id: "art-036",
                title: "Míiase com exposição de calota craniana causada pela associação de Cochliomyia hominivorax (Coquerel, 1858), Cochliomyia macellaria (Fabricius, 1775) e Chrysomya albiceps (Wiedemann, 1819), (Diptera: Calliphoridae) em um paciente atendido em Hospital Público, Rio de Janeiro",
                authors: [
                    "Valviesse VRGA",
                    "Ferraz AC",
                    "Proenca B",
                    "Werneck GRN",
                    "Aguiar VM",
                    "Lessa CS"
                ],
                year: 2014,
                type: "artigo científico",
                journal: "Entomotrópica"
            }
        ]
    },
    {
        id: "occ-232",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2004-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "1",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-056",
                title: "Avaliação de Extratos Vegetais na Prevenção e tratamento de Miíases Umbilicais em Bezerros no Pantanal",
                authors: [
                    "Barros ATM",
                    "Ravaglia E",
                    "Aquino WS",
                    "Passos WM",
                    "Leite LTB"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Brasília: EMBRAPA"
            }
        ]
    },
    {
        id: "occ-233",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2004-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "1",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-059",
                title: "Chrysomya (Diptera: Calliphoridae) relative abundance and species seasonality in the Pantanal, State of Mato Grosso do Sul, Brazil",
                authors: [
                    "Corrêa EC",
                    "Koller WW",
                    "Barros ATM"
                ],
                year: 2010,
                type: "estudo epidemiológico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-234",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2005-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "1",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-017",
                title: "Uso de ivermectin na prevenção das miíases em bezerros, de corte criados extensivamente",
                authors: [
                    "Bianchin I",
                    "Corrêa ES",
                    "Gomes A",
                    "Honer MR",
                    "Curvo JE"
                ],
                year: 1991,
                type: "artigo científico",
                journal: "Brasília: EMBRAPA"
            }
        ]
    },
    {
        id: "occ-235",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2005-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "1",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-018",
                title: "Uso de ivermectin aplicado por via subcutânea na prevenção das miíases umbilicais em bezerros de corte criados extensivamente",
                authors: [
                    "Bianchin I",
                    "Côrrea ES",
                    "Honer MR",
                    "Gomes A",
                    "Curvo JE"
                ],
                year: 1992,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-236",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2005-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "1",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            },
            {
                id: "art-021",
                title: "Abundance and seasonality of Cochliomyia macellaria (Diptera: Calliphoridae) in Southern Pantanal, Brazil",
                authors: [
                    "Koller WW",
                    "Barros AT",
                    "Corrêa EC"
                ],
                year: 2011,
                type: "estudo epidemiológico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-237",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2005-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "1",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-021",
                title: "Abundance and seasonality of Cochliomyia macellaria (Diptera: Calliphoridae) in Southern Pantanal, Brazil",
                authors: [
                    "Koller WW",
                    "Barros AT",
                    "Corrêa EC"
                ],
                year: 2011,
                type: "estudo epidemiológico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-238",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2004-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "1",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-023",
                title: "Miíases umbilicais em bezerros nelore recém-nascidos: predisposição em dois cruzamentos raciais criados no sistema de manejo voisin no Rio de Janeiro e avaliação de medidas profiláticas em criação extensiva no Pantanal Sul-Mato-Grossense [dissertação]",
                authors: [
                    "Pires MS"
                ],
                year: 2008,
                type: "outro",
                journal: "Seropédica: Universidade Federal Rural do Rio de Janeiro"
            }
        ]
    },
    {
        id: "occ-239",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2005-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "1",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-055",
                title: "Eficácia de Endectocidas em Infestações Naturais por Cochliomyia hominivorax (Mosca- Varejeira) em Bezerros no Pantanal",
                authors: [
                    "Barros ATM",
                    "Ravaglia E",
                    "Aquino WS",
                    "Passos WM",
                    "Leite LTB"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Brasília: EMBRAPA"
            }
        ]
    },
    {
        id: "occ-240",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2004-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "1",
        outcome: "Infectado",
        articles: [
            {
                id: "art-056",
                title: "Avaliação de Extratos Vegetais na Prevenção e tratamento de Miíases Umbilicais em Bezerros no Pantanal",
                authors: [
                    "Barros ATM",
                    "Ravaglia E",
                    "Aquino WS",
                    "Passos WM",
                    "Leite LTB"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Brasília: EMBRAPA"
            }
        ]
    },
    {
        id: "occ-241",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2005-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "1",
        outcome: "Infectado",
        articles: [
            {
                id: "art-059",
                title: "Chrysomya (Diptera: Calliphoridae) relative abundance and species seasonality in the Pantanal, State of Mato Grosso do Sul, Brazil",
                authors: [
                    "Corrêa EC",
                    "Koller WW",
                    "Barros ATM"
                ],
                year: 2010,
                type: "estudo epidemiológico",
                journal: "Rev Bras Parasitol Vet"
            },
            {
                id: "art-017",
                title: "Uso de ivermectin na prevenção das miíases em bezerros, de corte criados extensivamente",
                authors: [
                    "Bianchin I",
                    "Corrêa ES",
                    "Gomes A",
                    "Honer MR",
                    "Curvo JE"
                ],
                year: 1991,
                type: "artigo científico",
                journal: "Brasília: EMBRAPA"
            }
        ]
    },
    {
        id: "occ-242",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2004-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "1",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-017",
                title: "Uso de ivermectin na prevenção das miíases em bezerros, de corte criados extensivamente",
                authors: [
                    "Bianchin I",
                    "Corrêa ES",
                    "Gomes A",
                    "Honer MR",
                    "Curvo JE"
                ],
                year: 1991,
                type: "artigo científico",
                journal: "Brasília: EMBRAPA"
            }
        ]
    },
    {
        id: "occ-243",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2004-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "1",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-018",
                title: "Uso de ivermectin aplicado por via subcutânea na prevenção das miíases umbilicais em bezerros de corte criados extensivamente",
                authors: [
                    "Bianchin I",
                    "Côrrea ES",
                    "Honer MR",
                    "Gomes A",
                    "Curvo JE"
                ],
                year: 1992,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-244",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2005-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "1",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-245",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2005-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "1",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-021",
                title: "Abundance and seasonality of Cochliomyia macellaria (Diptera: Calliphoridae) in Southern Pantanal, Brazil",
                authors: [
                    "Koller WW",
                    "Barros AT",
                    "Corrêa EC"
                ],
                year: 2011,
                type: "estudo epidemiológico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-246",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2005-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "1",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-023",
                title: "Miíases umbilicais em bezerros nelore recém-nascidos: predisposição em dois cruzamentos raciais criados no sistema de manejo voisin no Rio de Janeiro e avaliação de medidas profiláticas em criação extensiva no Pantanal Sul-Mato-Grossense [dissertação]",
                authors: [
                    "Pires MS"
                ],
                year: 2008,
                type: "outro",
                journal: "Seropédica: Universidade Federal Rural do Rio de Janeiro"
            },
            {
                id: "art-055",
                title: "Eficácia de Endectocidas em Infestações Naturais por Cochliomyia hominivorax (Mosca- Varejeira) em Bezerros no Pantanal",
                authors: [
                    "Barros ATM",
                    "Ravaglia E",
                    "Aquino WS",
                    "Passos WM",
                    "Leite LTB"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Brasília: EMBRAPA"
            }
        ]
    },
    {
        id: "occ-247",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2005-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "1",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-055",
                title: "Eficácia de Endectocidas em Infestações Naturais por Cochliomyia hominivorax (Mosca- Varejeira) em Bezerros no Pantanal",
                authors: [
                    "Barros ATM",
                    "Ravaglia E",
                    "Aquino WS",
                    "Passos WM",
                    "Leite LTB"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Brasília: EMBRAPA"
            }
        ]
    },
    {
        id: "occ-248",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "80",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-050",
                title: "Ectoparasitos de pequenos mamíferos silvestres de áreas adjacentes ao rio Itapecuru e área de preservação ambiental do Inhamum, estado do Maranhão, Brasil",
                authors: [
                    "Reis FS",
                    "Barros MC",
                    "Fraga EC",
                    "Penha TA",
                    "Teixeira WC",
                    "Santos ACG"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            },
            {
                id: "art-051",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-249",
        coordinates: [
            -46.6333,
            -23.5505
        ],
        city: "São Paulo",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "95",
        outcome: "Óbito",
        articles: [
            {
                id: "art-084",
                title: "Massive orbital myiasis infestation",
                authors: [
                    "Rocha EM",
                    "Yvanoff JL",
                    "Silva LM",
                    "Prado AP",
                    "Caldato R"
                ],
                year: 1999,
                type: "artigo científico",
                journal: "Arch Ophthalmol"
            },
            {
                id: "art-085",
                title: "Tratamento da miíase humana cavitária com ivermectina oral",
                authors: [
                    "Ribeiro FAQ",
                    "Pereira CSB",
                    "Alves AC",
                    "Marcon MA"
                ],
                year: 2001,
                type: "caso clínico",
                journal: "Rev Bras Otorrinolaringol"
            }
        ]
    },
    {
        id: "occ-250",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Dermatobia hominis",
        vector: "Dermatobia hominis",
        date: "2026-03-15",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "63",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-051",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-251",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Dermatobia hominis",
        vector: "Dermatobia hominis",
        date: "2026-03-18",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "63",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-064",
                title: "Applying spatial analysis of genetic and environmental data to predict connection corridors to the New World screwworm populations in South America",
                authors: [
                    "Fresia P",
                    "Silver M",
                    "Mastrangelo T",
                    "Azeredo-Espin AM",
                    "Lyra ML"
                ],
                year: 2014,
                type: "artigo científico",
                journal: "Acta Trop"
            }
        ]
    },
    {
        id: "occ-252",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Dermatobia hominis",
        vector: "Dermatobia hominis",
        date: "2026-03-15",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "35",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-065",
                title: "Genetic diversity and population structure of the New World screwworm fly from the Amazon region of Brazil",
                authors: [
                    "Mastrangelo T",
                    "Fresia P",
                    "Lyra ML",
                    "Rodrigues RA",
                    "Azeredo-Espin AM"
                ],
                year: 2014,
                type: "artigo científico",
                journal: "Acta Trop"
            }
        ]
    },
    {
        id: "occ-253",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Dermatobia hominis",
        vector: "Dermatobia hominis",
        date: "2026-03-18",
        host: "Canis lupus familiaris",
        hostCategory: "Companhia",
        hostSex: "Fêmea",
        hostAge: "4",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-112",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-254",
        coordinates: [
            -47.0626,
            -22.9099
        ],
        city: "Campinas",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-005",
                title: "Sobre um tipo interessante de miíase dos bezerros e seu agente causal",
                authors: [
                    "Vaz Z",
                    "Carvalho GT"
                ],
                year: 1938,
                type: "artigo científico",
                journal: "Rev Fac Med Vet S Paulo"
            }
        ]
    },
    {
        id: "occ-255",
        coordinates: [
            -47.0626,
            -22.9099
        ],
        city: "Campinas",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-006",
                title: "Miiase e perfuração do rumen de bezerros por larvas de Cochliomyia hominivorax (Coquerel, 1858)",
                authors: [
                    "Rocha UF",
                    "Vaz Z"
                ],
                year: 1950,
                type: "artigo científico",
                journal: "Significação econômica. Rev Fac Med Vet S Paulo"
            }
        ]
    },
    {
        id: "occ-256",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "1999-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "5",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-032",
                title: "Factors of susceptibility of human myiasis caused by the New World screw-worm, Cochliomyia 556   556/562 hominivorax in São Gonçalo, Rio de Janeiro, Brazil",
                authors: [
                    "Batista-da-Silva JA",
                    "Moya-Borja GE",
                    "Queiroz MMC"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "J Insect Sci"
            },
            {
                id: "art-033",
                title: "Miíases Humanas Causadas por Larvas de Cochliomyia hominivorax (Coquerel) (Diptera: Calliphoridae) em São Gonçalo, RJ, Brasil: Uma Abordagem Sócio- Econômica",
                authors: [
                    "Batista-da-Silva JA",
                    "Moya-Borja GE",
                    "Queiroz MMC"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "EntomoBrasilis"
            }
        ]
    },
    {
        id: "occ-257",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2003-12-31",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "5",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-033",
                title: "Miíases Humanas Causadas por Larvas de Cochliomyia hominivorax (Coquerel) (Diptera: Calliphoridae) em São Gonçalo, RJ, Brasil: Uma Abordagem Sócio- Econômica",
                authors: [
                    "Batista-da-Silva JA",
                    "Moya-Borja GE",
                    "Queiroz MMC"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "EntomoBrasilis"
            }
        ]
    },
    {
        id: "occ-258",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Dermatobia hominis",
        vector: "Dermatobia hominis",
        date: "1999-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "5",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-034",
                title: "Patient with tracheostomy parasitized in hospital by larvae of the screwworm, Cochliomyia hominivorax",
                authors: [
                    "Batista-da-Silva JA",
                    "Moya-Borja GE",
                    "Queiroz MMC"
                ],
                year: 2011,
                type: "caso clínico",
                journal: "J Insect Sci"
            }
        ]
    },
    {
        id: "occ-259",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Dermatobia hominis",
        vector: "Dermatobia hominis",
        date: "2003-12-31",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "5",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-035",
                title: "Miíase interna oro-nasal e cutânea por Cochliomyia hominivorax (Coquerel, 1858) em felino (Felis catus)- Relato de caso",
                authors: [
                    "Marotta CR",
                    "Scherer PO",
                    "Sanavria A"
                ],
                year: 2011,
                type: "caso clínico",
                journal: "Rev Bras Med Vet"
            }
        ]
    },
    {
        id: "occ-260",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Cochliomyia macellaria",
        vector: "Cochliomyia macellaria",
        date: "1999-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "5",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-036",
                title: "Míiase com exposição de calota craniana causada pela associação de Cochliomyia hominivorax (Coquerel, 1858), Cochliomyia macellaria (Fabricius, 1775) e Chrysomya albiceps (Wiedemann, 1819), (Diptera: Calliphoridae) em um paciente atendido em Hospital Público, Rio de Janeiro",
                authors: [
                    "Valviesse VRGA",
                    "Ferraz AC",
                    "Proenca B",
                    "Werneck GRN",
                    "Aguiar VM",
                    "Lessa CS"
                ],
                year: 2014,
                type: "artigo científico",
                journal: "Entomotrópica"
            }
        ]
    },
    {
        id: "occ-261",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Cochliomyia macellaria",
        vector: "Cochliomyia macellaria",
        date: "2003-12-31",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "5",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-037",
                title: "Record of the first cases of human myiasis by Lucilia cuprina (Diptera: Calliphoridae), Rio de Janeiro, Brazil",
                authors: [
                    "Azevedo WT",
                    "Figueiredo AL",
                    "Carvalho RP",
                    "Lemos GA",
                    "Silva PF",
                    "Miranda TA"
                ],
                year: 2015,
                type: "artigo científico",
                journal: "J Med Entomol"
            },
            {
                id: "art-008",
                title: "Nasal foreign bodies: description of types and complications in 420 cases",
                authors: [
                    "Figueiredo RR",
                    "Azevedo AA",
                    "Ávila Kós AO",
                    "Tomita S"
                ],
                year: 2006,
                type: "artigo científico",
                journal: "Rev Bras Otorrinolaringol"
            }
        ]
    },
    {
        id: "occ-262",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Phaenicia sp",
        vector: "Phaenicia sp",
        date: "1999-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "5",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-008",
                title: "Nasal foreign bodies: description of types and complications in 420 cases",
                authors: [
                    "Figueiredo RR",
                    "Azevedo AA",
                    "Ávila Kós AO",
                    "Tomita S"
                ],
                year: 2006,
                type: "artigo científico",
                journal: "Rev Bras Otorrinolaringol"
            }
        ]
    },
    {
        id: "occ-263",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Phaenicia sp",
        vector: "Phaenicia sp",
        date: "2003-12-31",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "5",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-009",
                title: "Vulvar myiasis during pregnancy",
                authors: [
                    "Passos MR",
                    "Varella RQ",
                    "Tavares RR",
                    "Barreto NA",
                    "Santos CC",
                    "Pinheiro VM"
                ],
                year: 2002,
                type: "caso clínico",
                journal: "Infect Dis Obstet Gynecol"
            }
        ]
    },
    {
        id: "occ-264",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Lucilla sp",
        vector: "Lucilla sp",
        date: "1999-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "5",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-010",
                title: "Oral myiasis: a case report",
                authors: [
                    "Rossi-Schneider T",
                    "Cherubini K",
                    "Yurgel LS",
                    "Salum F",
                    "Figueiredo MA"
                ],
                year: 2007,
                type: "caso clínico",
                journal: "J Oral Sci"
            }
        ]
    },
    {
        id: "occ-265",
        coordinates: [
            -43.1729,
            -22.9068
        ],
        city: "Rio de Janeiro",
        state: "RJ",
        disease: "Lucilla sp",
        vector: "Lucilla sp",
        date: "2003-12-31",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "5",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-029",
                title: "Raro caso de miíases por Cochliomyia hominivorax (Diptera: Calliphoridae) e Dermatobia hominis (Diptera: Oestridae) em paciente humano",
                authors: [
                    "Ferraz AC",
                    "Nunes R",
                    "Gadelha BQ",
                    "Nascimento BP",
                    "Barros PREM",
                    "Coelho VMA"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Arq Ciênc Saúde"
            }
        ]
    },
    {
        id: "occ-266",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia macellaria",
        vector: "Cochliomyia macellaria",
        date: "2004-12-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Fêmea",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-056",
                title: "Avaliação de Extratos Vegetais na Prevenção e tratamento de Miíases Umbilicais em Bezerros no Pantanal",
                authors: [
                    "Barros ATM",
                    "Ravaglia E",
                    "Aquino WS",
                    "Passos WM",
                    "Leite LTB"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Brasília: EMBRAPA"
            }
        ]
    },
    {
        id: "occ-267",
        coordinates: [
            -57.6536,
            -19.0092
        ],
        city: "Corumbá",
        state: "MS",
        disease: "Cochliomyia macellaria",
        vector: "Cochliomyia macellaria",
        date: "2007-11-30",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Fêmea",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-059",
                title: "Chrysomya (Diptera: Calliphoridae) relative abundance and species seasonality in the Pantanal, State of Mato Grosso do Sul, Brazil",
                authors: [
                    "Corrêa EC",
                    "Koller WW",
                    "Barros ATM"
                ],
                year: 2010,
                type: "estudo epidemiológico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-268",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Amblyomma rotundatum",
        vector: "Amblyomma rotundatum",
        date: "2006-08-01",
        host: "Boa constrictor",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-051",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-269",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Amblyomma rotundatum",
        vector: "Amblyomma rotundatum",
        date: "2006-08-01",
        host: "Iguana iguana",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-050",
                title: "Ectoparasitos de pequenos mamíferos silvestres de áreas adjacentes ao rio Itapecuru e área de preservação ambiental do Inhamum, estado do Maranhão, Brasil",
                authors: [
                    "Reis FS",
                    "Barros MC",
                    "Fraga EC",
                    "Penha TA",
                    "Teixeira WC",
                    "Santos ACG"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-270",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Trichodectes canis",
        vector: "Trichodectes canis",
        date: "2006-08-01",
        host: "Cerdocyon thous",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-051",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-271",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Trichodectes canis",
        vector: "Trichodectes canis",
        date: "2006-08-01",
        host: "Nasua nasua",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-050",
                title: "Ectoparasitos de pequenos mamíferos silvestres de áreas adjacentes ao rio Itapecuru e área de preservação ambiental do Inhamum, estado do Maranhão, Brasil",
                authors: [
                    "Reis FS",
                    "Barros MC",
                    "Fraga EC",
                    "Penha TA",
                    "Teixeira WC",
                    "Santos ACG"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-272",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Ctenocephalides felis",
        vector: "Ctenocephalides felis",
        date: "2006-08-01",
        host: "Nasua nasua",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-051",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            },
            {
                id: "art-050",
                title: "Ectoparasitos de pequenos mamíferos silvestres de áreas adjacentes ao rio Itapecuru e área de preservação ambiental do Inhamum, estado do Maranhão, Brasil",
                authors: [
                    "Reis FS",
                    "Barros MC",
                    "Fraga EC",
                    "Penha TA",
                    "Teixeira WC",
                    "Santos ACG"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-273",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Rhopalopsyllus lutzi lutzi",
        vector: "Rhopalopsyllus lutzi lutzi",
        date: "2006-08-01",
        host: "Galictis cuja",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-050",
                title: "Ectoparasitos de pequenos mamíferos silvestres de áreas adjacentes ao rio Itapecuru e área de preservação ambiental do Inhamum, estado do Maranhão, Brasil",
                authors: [
                    "Reis FS",
                    "Barros MC",
                    "Fraga EC",
                    "Penha TA",
                    "Teixeira WC",
                    "Santos ACG"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-274",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Rhipicephalus sanguineus",
        vector: "Rhipicephalus sanguineus",
        date: "2006-08-01",
        host: "Galictis cuja",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-051",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-275",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Amblyomma sp.",
        vector: "Amblyomma sp.",
        date: "2006-08-01",
        host: "Tamandua tetradactyla",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-050",
                title: "Ectoparasitos de pequenos mamíferos silvestres de áreas adjacentes ao rio Itapecuru e área de preservação ambiental do Inhamum, estado do Maranhão, Brasil",
                authors: [
                    "Reis FS",
                    "Barros MC",
                    "Fraga EC",
                    "Penha TA",
                    "Teixeira WC",
                    "Santos ACG"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-276",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2006-08-01",
        host: "Tamandua tetradactyla",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-051",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-278",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Quadraceps sp.",
        vector: "Quadraceps sp.",
        date: "2006-08-01",
        host: "Thalasseus maximus",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-050",
                title: "Ectoparasitos de pequenos mamíferos silvestres de áreas adjacentes ao rio Itapecuru e área de preservação ambiental do Inhamum, estado do Maranhão, Brasil",
                authors: [
                    "Reis FS",
                    "Barros MC",
                    "Fraga EC",
                    "Penha TA",
                    "Teixeira WC",
                    "Santos ACG"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            },
            {
                id: "art-051",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-279",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Saemundssonia sp.",
        vector: "Saemundssonia sp.",
        date: "2006-08-01",
        host: "Thalasseus maximus",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-051",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-280",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Saemundssonia sp.",
        vector: "Saemundssonia sp.",
        date: "2006-08-01",
        host: "Dendrocygna viduata",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-050",
                title: "Ectoparasitos de pequenos mamíferos silvestres de áreas adjacentes ao rio Itapecuru e área de preservação ambiental do Inhamum, estado do Maranhão, Brasil",
                authors: [
                    "Reis FS",
                    "Barros MC",
                    "Fraga EC",
                    "Penha TA",
                    "Teixeira WC",
                    "Santos ACG"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-281",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Saemundssonia sp.",
        vector: "Saemundssonia sp.",
        date: "2006-08-01",
        host: "Dendrocygna autumnalis",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-051",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            }
        ]
    },
    {
        id: "occ-282",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Acidoproctus sp.",
        vector: "Acidoproctus sp.",
        date: "2006-08-01",
        host: "Butorides striatus",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-050",
                title: "Ectoparasitos de pequenos mamíferos silvestres de áreas adjacentes ao rio Itapecuru e área de preservação ambiental do Inhamum, estado do Maranhão, Brasil",
                authors: [
                    "Reis FS",
                    "Barros MC",
                    "Fraga EC",
                    "Penha TA",
                    "Teixeira WC",
                    "Santos ACG"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-283",
        coordinates: [
            -44.3028,
            -2.5307
        ],
        city: "São Luís",
        state: "MA",
        disease: "Ciconiphilus sp.",
        vector: "Ciconiphilus sp.",
        date: "2006-08-01",
        host: "Turdus rufiventris",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-051",
                title: "Ectoparasitos de animais silvestres no Maranhão",
                authors: [
                    "Figueiredo MA",
                    "Santos ACG",
                    "Guerra RMSNC"
                ],
                year: 2010,
                type: "artigo científico",
                journal: "Pesq Vet Bras"
            },
            {
                id: "art-050",
                title: "Ectoparasitos de pequenos mamíferos silvestres de áreas adjacentes ao rio Itapecuru e área de preservação ambiental do Inhamum, estado do Maranhão, Brasil",
                authors: [
                    "Reis FS",
                    "Barros MC",
                    "Fraga EC",
                    "Penha TA",
                    "Teixeira WC",
                    "Santos ACG"
                ],
                year: 2008,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-284",
        coordinates: [
            -80.7821,
            8.538
        ],
        city: "Panama",
        state: "Não informado",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-070",
                title: "A review on the occurrence of Cochliomyia hominivorax (Diptera: Calliphoridae) in Brazil",
                authors: [
                    "Costa-Júnior LM",
                    "Chaves DP",
                    "Brito DRB",
                    "Santos VAF",
                    "Costa-Júnior HN",
                    "Barros ATM"
                ],
                year: 2019,
                type: "revisão",
                journal: "Revista Brasileira de Parasitologia Veterinária"
            }
        ]
    },
    {
        id: "occ-288",
        coordinates: [
            -44.3181,
            -23.0067
        ],
        city: "Angra dos Reis",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2006-03-15",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "41",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-030",
                title: "Epidemiological Study of Myiases in the Hospital do Andaraí, Rio de Janeiro, Including Reference to an exotic etiological Agent",
                authors: [
                    "Ferraz AC",
                    "Almeida VRG",
                    "Jesus DM",
                    "Rotatori GN",
                    "Nunes R",
                    "Proenca B"
                ],
                year: 2011,
                type: "estudo epidemiológico",
                journal: "Neotrop Entomol"
            },
            {
                id: "art-031",
                title: "Miíase humana por Dermatobia hominis (Linneaus Jr.) (Diptera, Cuterebridae) e Cochliomyia hominivorax (Coquerel) (Diptera, Calliphoridae) em Sucessão Parasitaria",
                authors: [
                    "Batista-da-Silva JA",
                    "Abádio HC",
                    "Queiroz MMC"
                ],
                year: 2009,
                type: "artigo científico",
                journal: "EntomoBrasilis"
            }
        ]
    },
    {
        id: "occ-289",
        coordinates: [
            -51.8103,
            -16.9567
        ],
        city: "Caiapônia",
        state: "GO",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2005-01-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-290",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "BCR",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-017",
                title: "Uso de ivermectin na prevenção das miíases em bezerros, de corte criados extensivamente",
                authors: [
                    "Bianchin I",
                    "Corrêa ES",
                    "Gomes A",
                    "Honer MR",
                    "Curvo JE"
                ],
                year: 1991,
                type: "artigo científico",
                journal: "Brasília: EMBRAPA"
            },
            {
                id: "art-018",
                title: "Uso de ivermectin aplicado por via subcutânea na prevenção das miíases umbilicais em bezerros de corte criados extensivamente",
                authors: [
                    "Bianchin I",
                    "Côrrea ES",
                    "Honer MR",
                    "Gomes A",
                    "Curvo JE"
                ],
                year: 1992,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-291",
        coordinates: [
            -51.2177,
            -30.0346
        ],
        city: "BSA",
        state: "RS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-048",
                title: "Análise cariotípica, morfométrica e de compatibilidade sexual, em linhagens brasileiras de Cochliomyia hominivorax (Diptera: Calliphoridae) [tese]",
                authors: [
                    "Azeredo-Espin AM"
                ],
                year: 1987,
                type: "outro",
                journal: "Campinas: Universidade de Campinas"
            }
        ]
    },
    {
        id: "occ-298",
        coordinates: [
            -48.5678,
            -20.5531
        ],
        city: "Barretos",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "36",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-085",
                title: "Tratamento da miíase humana cavitária com ivermectina oral",
                authors: [
                    "Ribeiro FAQ",
                    "Pereira CSB",
                    "Alves AC",
                    "Marcon MA"
                ],
                year: 2001,
                type: "caso clínico",
                journal: "Rev Bras Otorrinolaringol"
            }
        ]
    },
    {
        id: "occ-299",
        coordinates: [
            -48.5678,
            -20.5531
        ],
        city: "Barretos",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2026-03-18",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "36",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-086",
                title: "Miíase Vulvar: relato de Caso",
                authors: [
                    "Martinez CAR",
                    "Romani G",
                    "Priolli DG",
                    "Campos AA",
                    "Carneiro VPP",
                    "Dalbem CAG"
                ],
                year: 2003,
                type: "caso clínico",
                journal: "Rev Bras Ginecol Obstet"
            }
        ]
    },
    {
        id: "occ-300",
        coordinates: [
            -47.8825,
            -15.7942
        ],
        city: "Br",
        state: "Br",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "56",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-012",
                title: "Miíase por Lucilia eximia (Diptera: Calliphoridae) em Didelphis albiventris (Mammalia: Didelphidae) no Brasil Central",
                authors: [
                    "Cansi ER",
                    "Bonorino R"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "EntomoBrasilis"
            }
        ]
    },
    {
        id: "occ-301",
        coordinates: [
            -63.6167,
            -38.4161
        ],
        city: "AR",
        state: "AR",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-007",
                title: "Primary myiasis in buffaloes--Bufalos bubais L., 1758--of the state of São Paulo, Brazil, by Cochliomyia hominivorax (Coquerel, 1858), Diptera Calliphoridae",
                authors: [
                    "Abdallah SI",
                    "Rocha UF",
                    "Serra OP",
                    "Oba MS",
                    "Serra RG"
                ],
                year: 1970,
                type: "artigo científico",
                journal: "Rev Farm Bioquim Univ Sao Paulo"
            }
        ]
    },
    {
        id: "occ-302",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2006-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "22",
        outcome: "Bone and soft tissue loss",
        articles: [
            {
                id: "art-061",
                title: "Miíases no lábio superior: apresentação de caso clínico",
                authors: [
                    "Melo REVA",
                    "Vitor CMA",
                    "Silva MBL",
                    "Luna LA",
                    "Firmo ACB"
                ],
                year: 2003,
                type: "caso clínico",
                journal: "Int J Dent"
            }
        ]
    },
    {
        id: "occ-303",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2006-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "50",
        outcome: "Bone and soft tissue loss; hearing loss on the affected side",
        articles: [
            {
                id: "art-062",
                title: "Extensive oral lesion colonized with 601 myiasis larvae",
                authors: [
                    "Laureano-Filho JR",
                    "Bezerra TP",
                    "Lima FT",
                    "Campelo RI"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "Trop Doct"
            }
        ]
    },
    {
        id: "occ-304",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2006-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "45",
        outcome: "Bone and soft tissue loss",
        articles: [
            {
                id: "art-063",
                title: "Head and neck myiasis: a case series and review of the literature",
                authors: [
                    "Arruda JAA",
                    "Oliveira Silva LV",
                    "Silva PUJ",
                    "Figueiredo EL",
                    "Callou G",
                    "Mesquita RA"
                ],
                year: 2017,
                type: "revisão",
                journal: "Oral Surg Oral Med Oral Pathol Oral Radiol"
            }
        ]
    },
    {
        id: "occ-305",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2006-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "33",
        outcome: "Bone and soft tissue loss; hearing loss on the affected side",
        articles: [
            {
                id: "art-061",
                title: "Miíases no lábio superior: apresentação de caso clínico",
                authors: [
                    "Melo REVA",
                    "Vitor CMA",
                    "Silva MBL",
                    "Luna LA",
                    "Firmo ACB"
                ],
                year: 2003,
                type: "caso clínico",
                journal: "Int J Dent"
            },
            {
                id: "art-062",
                title: "Extensive oral lesion colonized with 601 myiasis larvae",
                authors: [
                    "Laureano-Filho JR",
                    "Bezerra TP",
                    "Lima FT",
                    "Campelo RI"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "Trop Doct"
            }
        ]
    },
    {
        id: "occ-306",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2006-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "26",
        outcome: "Bone and soft tissue loss",
        articles: [
            {
                id: "art-062",
                title: "Extensive oral lesion colonized with 601 myiasis larvae",
                authors: [
                    "Laureano-Filho JR",
                    "Bezerra TP",
                    "Lima FT",
                    "Campelo RI"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "Trop Doct"
            }
        ]
    },
    {
        id: "occ-307",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2006-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "57",
        outcome: "Blindness; bone and soft tissue loss",
        articles: [
            {
                id: "art-063",
                title: "Head and neck myiasis: a case series and review of the literature",
                authors: [
                    "Arruda JAA",
                    "Oliveira Silva LV",
                    "Silva PUJ",
                    "Figueiredo EL",
                    "Callou G",
                    "Mesquita RA"
                ],
                year: 2017,
                type: "revisão",
                journal: "Oral Surg Oral Med Oral Pathol Oral Radiol"
            }
        ]
    },
    {
        id: "occ-308",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2006-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "21",
        outcome: "Blindness; bone and soft tissue loss",
        articles: [
            {
                id: "art-061",
                title: "Miíases no lábio superior: apresentação de caso clínico",
                authors: [
                    "Melo REVA",
                    "Vitor CMA",
                    "Silva MBL",
                    "Luna LA",
                    "Firmo ACB"
                ],
                year: 2003,
                type: "caso clínico",
                journal: "Int J Dent"
            }
        ]
    },
    {
        id: "occ-309",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2006-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "24",
        outcome: "Bone and soft tissue loss; oroantral communication",
        articles: [
            {
                id: "art-062",
                title: "Extensive oral lesion colonized with 601 myiasis larvae",
                authors: [
                    "Laureano-Filho JR",
                    "Bezerra TP",
                    "Lima FT",
                    "Campelo RI"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "Trop Doct"
            }
        ]
    },
    {
        id: "occ-310",
        coordinates: [
            -34.877,
            -8.0476
        ],
        city: "Recife",
        state: "PE",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2006-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "65",
        outcome: "Bone and soft tissue loss; loss of the salivary gland",
        articles: [
            {
                id: "art-063",
                title: "Head and neck myiasis: a case series and review of the literature",
                authors: [
                    "Arruda JAA",
                    "Oliveira Silva LV",
                    "Silva PUJ",
                    "Figueiredo EL",
                    "Callou G",
                    "Mesquita RA"
                ],
                year: 2017,
                type: "revisão",
                journal: "Oral Surg Oral Med Oral Pathol Oral Radiol"
            },
            {
                id: "art-061",
                title: "Miíases no lábio superior: apresentação de caso clínico",
                authors: [
                    "Melo REVA",
                    "Vitor CMA",
                    "Silva MBL",
                    "Luna LA",
                    "Firmo ACB"
                ],
                year: 2003,
                type: "caso clínico",
                journal: "Int J Dent"
            }
        ]
    },
    {
        id: "occ-311",
        coordinates: [
            -51.8103,
            -16.9567
        ],
        city: "Caiapônia",
        state: "GO",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "Não informado",
        host: "Cochliomyia hominivorax",
        hostCategory: "Selvagem",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Resistente",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-312",
        coordinates: [
            -43.7075,
            -22.7439
        ],
        city: "Seropédica",
        state: "RJ",
        disease: "Philornis bella",
        vector: "Philornis bella",
        date: "2006-07-01",
        host: "Tyrannus melancholicus",
        hostCategory: "Selvagem",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Sobreviveu",
        articles: [
            {
                id: "art-087",
                title: "Miíase associada a erisipela bolhosa",
                authors: [
                    "Braga LBF",
                    "Thompson NR",
                    "Gadelha BQ",
                    "Veloso ARA",
                    "Hoerlle MO",
                    "Coelho VMA"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "Rev Patol Trop"
            }
        ]
    },
    {
        id: "occ-313",
        coordinates: [
            -56.65,
            -18.98
        ],
        city: "Nhecolândia",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2004-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-017",
                title: "Uso de ivermectin na prevenção das miíases em bezerros, de corte criados extensivamente",
                authors: [
                    "Bianchin I",
                    "Corrêa ES",
                    "Gomes A",
                    "Honer MR",
                    "Curvo JE"
                ],
                year: 1991,
                type: "artigo científico",
                journal: "Brasília: EMBRAPA"
            }
        ]
    },
    {
        id: "occ-314",
        coordinates: [
            -56.65,
            -18.98
        ],
        city: "Nhecolândia",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2004-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-018",
                title: "Uso de ivermectin aplicado por via subcutânea na prevenção das miíases umbilicais em bezerros de corte criados extensivamente",
                authors: [
                    "Bianchin I",
                    "Côrrea ES",
                    "Honer MR",
                    "Gomes A",
                    "Curvo JE"
                ],
                year: 1992,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            },
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-315",
        coordinates: [
            -56.65,
            -18.98
        ],
        city: "Nhecolândia",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2004-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-316",
        coordinates: [
            -56.65,
            -18.98
        ],
        city: "Nhecolândia",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2004-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-021",
                title: "Abundance and seasonality of Cochliomyia macellaria (Diptera: Calliphoridae) in Southern Pantanal, Brazil",
                authors: [
                    "Koller WW",
                    "Barros AT",
                    "Corrêa EC"
                ],
                year: 2011,
                type: "estudo epidemiológico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-317",
        coordinates: [
            -56.65,
            -18.98
        ],
        city: "Nhecolândia",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2004-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-023",
                title: "Miíases umbilicais em bezerros nelore recém-nascidos: predisposição em dois cruzamentos raciais criados no sistema de manejo voisin no Rio de Janeiro e avaliação de medidas profiláticas em criação extensiva no Pantanal Sul-Mato-Grossense [dissertação]",
                authors: [
                    "Pires MS"
                ],
                year: 2008,
                type: "outro",
                journal: "Seropédica: Universidade Federal Rural do Rio de Janeiro"
            }
        ]
    },
    {
        id: "occ-318",
        coordinates: [
            -56.65,
            -18.98
        ],
        city: "Nhecolândia",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2005-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-055",
                title: "Eficácia de Endectocidas em Infestações Naturais por Cochliomyia hominivorax (Mosca- Varejeira) em Bezerros no Pantanal",
                authors: [
                    "Barros ATM",
                    "Ravaglia E",
                    "Aquino WS",
                    "Passos WM",
                    "Leite LTB"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Brasília: EMBRAPA"
            }
        ]
    },
    {
        id: "occ-319",
        coordinates: [
            -56.65,
            -18.98
        ],
        city: "Nhecolândia",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2005-09-01",
        host: "Bos taurus",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-056",
                title: "Avaliação de Extratos Vegetais na Prevenção e tratamento de Miíases Umbilicais em Bezerros no Pantanal",
                authors: [
                    "Barros ATM",
                    "Ravaglia E",
                    "Aquino WS",
                    "Passos WM",
                    "Leite LTB"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Brasília: EMBRAPA"
            },
            {
                id: "art-059",
                title: "Chrysomya (Diptera: Calliphoridae) relative abundance and species seasonality in the Pantanal, State of Mato Grosso do Sul, Brazil",
                authors: [
                    "Corrêa EC",
                    "Koller WW",
                    "Barros ATM"
                ],
                year: 2010,
                type: "estudo epidemiológico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-320",
        coordinates: [
            -45.4131,
            -23.6203
        ],
        city: "Caraguatatuba",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "Não informado",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-088",
                title: "Ivermectina no tratamento de miíase orbitária - Relato de caso",
                authors: [
                    "Rodriguez MEL",
                    "Aoki L",
                    "Nicoletti AGB",
                    "Matayoshi S",
                    "Fernandes JBVD"
                ],
                year: 2003,
                type: "caso clínico",
                journal: "Arq Bras Oftalmol"
            }
        ]
    },
    {
        id: "occ-321",
        coordinates: [
            -47.7294,
            -21.3403
        ],
        city: "Cravinhos",
        state: "Sa",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "97",
        outcome: "Óbito",
        articles: [
            {
                id: "art-089",
                title: "Oral myiasis treated with ivermectin: case report",
                authors: [
                    "Shinohara EH",
                    "Martini MZ",
                    "Oliveira HG No",
                    "Takahashi A"
                ],
                year: 2004,
                type: "caso clínico",
                journal: "Braz Dent J"
            }
        ]
    },
    {
        id: "occ-322",
        coordinates: [
            -43.0537,
            -22.8268
        ],
        city: "São Gonçalo",
        state: "RJ",
        disease: "Sarcophaga",
        vector: "Sarcophaga",
        date: "2026-03-15",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "19",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-031",
                title: "Miíase humana por Dermatobia hominis (Linneaus Jr.) (Diptera, Cuterebridae) e Cochliomyia hominivorax (Coquerel) (Diptera, Calliphoridae) em Sucessão Parasitaria",
                authors: [
                    "Batista-da-Silva JA",
                    "Abádio HC",
                    "Queiroz MMC"
                ],
                year: 2009,
                type: "artigo científico",
                journal: "EntomoBrasilis"
            }
        ]
    },
    {
        id: "occ-323",
        coordinates: [
            -43.1034,
            -22.8832
        ],
        city: "Niterói",
        state: "RJ",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2026-03-18",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "17",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-032",
                title: "Factors of susceptibility of human myiasis caused by the New World screw-worm, Cochliomyia 556   556/562 hominivorax in São Gonçalo, Rio de Janeiro, Brazil",
                authors: [
                    "Batista-da-Silva JA",
                    "Moya-Borja GE",
                    "Queiroz MMC"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "J Insect Sci"
            }
        ]
    },
    {
        id: "occ-324",
        coordinates: [
            -43.9378,
            -19.9208
        ],
        city: "Belo Horizonte",
        state: "MG",
        disease: "Não informado",
        vector: "Não informado",
        date: "Não informado",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Macho",
        hostAge: "32",
        outcome: "Em cicatrização",
        articles: [
            {
                id: "art-090",
                title: "Oral myiasis by screwworm Cochliomyia hominivorax",
                authors: [
                    "Gomez RS",
                    "Perdigão PF",
                    "Pimenta FJ",
                    "Rios Leite AC",
                    "Tanos de Lacerda JC",
                    "Custódio AL No"
                ],
                year: 2003,
                type: "caso clínico",
                journal: "Br J Oral Maxillofac Surg"
            },
            {
                id: "art-091",
                title: "Oral myiasis: a case report",
                authors: [
                    "Abdo EN",
                    "Sette-Dias AC",
                    "Comunian CR",
                    "Dutra CE",
                    "Aguiar EG"
                ],
                year: 2006,
                type: "caso clínico",
                journal: "Med Oral Patol Oral Cir Bucal"
            }
        ]
    },
    {
        id: "occ-325",
        coordinates: [
            -47.8825,
            -15.7942
        ],
        city: "Brasília",
        state: "DF",
        disease: "Lucilia eximia",
        vector: "Não informado",
        date: "2009-05-20",
        host: "Didelphis albiventris",
        hostCategory: "Selvagem",
        hostSex: "Macho",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-012",
                title: "Miíase por Lucilia eximia (Diptera: Calliphoridae) em Didelphis albiventris (Mammalia: Didelphidae) no Brasil Central",
                authors: [
                    "Cansi ER",
                    "Bonorino R"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "EntomoBrasilis"
            }
        ]
    },
    {
        id: "occ-326",
        coordinates: [
            -47.6492,
            -22.7253
        ],
        city: "Piracicaba",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2026-03-15",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "5",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-092",
                title: "Use of ivermectin in the treatment of orbital myiasis caused by Cochliomyia hominivorax",
                authors: [
                    "Tarso P",
                    "Pierre-Filho P",
                    "Minguini N",
                    "Pierre LM",
                    "Pierre AM"
                ],
                year: 2004,
                type: "caso clínico",
                journal: "Scand J Infect Dis"
            },
            {
                id: "art-093",
                title: "Oftalmomiíase externa causada por Cochliomyia hominivorax",
                authors: [
                    "Takahagi RU",
                    "Gonçalves FP",
                    "Madeira NG",
                    "Schellini SA"
                ],
                year: 2007,
                type: "artigo científico",
                journal: "Rev Bras Oftalmol"
            }
        ]
    },
    {
        id: "occ-327",
        coordinates: [
            -47.6492,
            -22.7253
        ],
        city: "Piracicaba",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2026-03-18",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "5",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-093",
                title: "Oftalmomiíase externa causada por Cochliomyia hominivorax",
                authors: [
                    "Takahagi RU",
                    "Gonçalves FP",
                    "Madeira NG",
                    "Schellini SA"
                ],
                year: 2007,
                type: "artigo científico",
                journal: "Rev Bras Oftalmol"
            }
        ]
    },
    {
        id: "occ-328",
        coordinates: [
            -47.6492,
            -22.7253
        ],
        city: "Piracicaba",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2026-03-20",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "5",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-094",
                title: "Oral infection by Diptera larvae in children: a case report",
                authors: [
                    "Barbosa TS",
                    "Salvitti Sá Rocha RA",
                    "Guirado CG",
                    "Rocha FJ",
                    "Duarte Gavião MB"
                ],
                year: 2008,
                type: "caso clínico",
                journal: "Int J Dermatol"
            }
        ]
    },
    {
        id: "occ-329",
        coordinates: [
            -47.6492,
            -22.7253
        ],
        city: "Piracicaba",
        state: "SP",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2026-03-25",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "5",
        outcome: "Em tratamento",
        articles: [
            {
                id: "art-066",
                title: "Oral myiasis in a captive hippopotamus",
                authors: [
                    "Rossi JL Jr",
                    "Guiao-Leite FL",
                    "Gioso MA",
                    "Falqueiro LM",
                    "Fecchio RS"
                ],
                year: 2009,
                type: "caso clínico",
                journal: "J Vet Dent"
            }
        ]
    },
    {
        id: "occ-330",
        coordinates: [
            -42.8019,
            -5.0892
        ],
        city: "Teresina",
        state: "PI",
        disease: "Cochliomyia hominivorax",
        vector: "Não informado",
        date: "2005-01-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Fêmea",
        hostAge: "Não informado",
        outcome: "Recuperado",
        articles: [
            {
                id: "art-095",
                title: "Myiasis in the uterine cavity of an elderly woman with a complete uterine prolapse",
                authors: [
                    "Lopes-Costa PV",
                    "dos Santos AR",
                    "Pereira-Filho JD",
                    "da Silva BB"
                ],
                year: 2008,
                type: "caso clínico",
                journal: "Trans R Soc Trop Med Hyg"
            }
        ]
    },
    {
        id: "occ-331",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Chloroprocta idioidea",
        vector: "Chloroprocta idioidea",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-096",
                title: "Lesões proliferativas em pênis e prepúcio eqüinos [dissertação]",
                authors: [
                    "Xavier FS"
                ],
                year: 2010,
                type: "outro",
                journal: "Pelotas: Universidade Federal de Pelotas"
            }
        ]
    },
    {
        id: "occ-332",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Chrysomya albiceps",
        vector: "Chrysomya albiceps",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-097",
                title: "Genetic structure and demographic history of new world screwworm across its current geographic range",
                authors: [
                    "Fresia P",
                    "Lyra ML",
                    "Coronado A",
                    "Azeredo-Espin AM"
                ],
                year: 2011,
                type: "artigo científico",
                journal: "J Med Entomol"
            }
        ]
    },
    {
        id: "occ-333",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Mesembrinella bicolor",
        vector: "Mesembrinella bicolor",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-098",
                title: "Análise filogeográfica da mosca da bicheira, Cochliomyia hominivorax [tese]",
                authors: [
                    "Fresia P"
                ],
                year: 2011,
                type: "outro",
                journal: "Campinas: Universidade de Campinas"
            }
        ]
    },
    {
        id: "occ-334",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Chrysomya putoria",
        vector: "Chrysomya putoria",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-099",
                title: "The phylogeographic history of the new world screwworm fly, inferred by approximate bayesian computation analysis",
                authors: [
                    "Fresia P",
                    "Azeredo-Espin AM",
                    "Lyra ML"
                ],
                year: 2013,
                type: "artigo científico",
                journal: "PLoS One"
            },
            {
                id: "art-064",
                title: "Applying spatial analysis of genetic and environmental data to predict connection corridors to the New World screwworm populations in South America",
                authors: [
                    "Fresia P",
                    "Silver M",
                    "Mastrangelo T",
                    "Azeredo-Espin AM",
                    "Lyra ML"
                ],
                year: 2014,
                type: "artigo científico",
                journal: "Acta Trop"
            }
        ]
    },
    {
        id: "occ-335",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Chrysomya megacephala",
        vector: "Chrysomya megacephala",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-064",
                title: "Applying spatial analysis of genetic and environmental data to predict connection corridors to the New World screwworm populations in South America",
                authors: [
                    "Fresia P",
                    "Silver M",
                    "Mastrangelo T",
                    "Azeredo-Espin AM",
                    "Lyra ML"
                ],
                year: 2014,
                type: "artigo científico",
                journal: "Acta Trop"
            }
        ]
    },
    {
        id: "occ-336",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Lucilia eximia",
        vector: "Lucilia eximia",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-100",
                title: "Ocorrência de moscas sinantropicas em borda de mata de galeria, no sistema Serra de Maracaju [online]",
                authors: [
                    "Taira TL",
                    "Oliveira AD",
                    "Nicácio J",
                    "Abot AR",
                    "Koller WW",
                    "Rodrigues SR"
                ],
                year: 2011,
                type: "estudo epidemiológico",
                journal: "Brasília: EMBRAPA"
            }
        ]
    },
    {
        id: "occ-337",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Cochliomyia macellaria",
        vector: "Cochliomyia macellaria",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-101",
                title: "New records of Muscidae (Diptera) in Campo Grande, MS, Brazil",
                authors: [
                    "Luiz HL",
                    "Taira TL",
                    "Koller WW"
                ],
                year: 2012,
                type: "artigo científico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-338",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Hemilucilia segmentaria",
        vector: "Hemilucilia segmentaria",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-102",
                title: "Incongruent nuclear and mitochondrial genetic structure of new world screwworm fly populations due to positive selection of mutations associated with dimethyl- and diethyl-organophosphates resistance",
                authors: [
                    "Bergamo LW",
                    "Fresia P",
                    "Azeredo-Espin AM"
                ],
                year: 2015,
                type: "artigo científico",
                journal: "PLoS One"
            }
        ]
    },
    {
        id: "occ-339",
        coordinates: [
            -54.6464,
            -20.4697
        ],
        city: "Campo Grande",
        state: "MS",
        disease: "Cochliomyia hominivorax",
        vector: "Cochliomyia hominivorax",
        date: "2010-10-01",
        host: "Homo sapiens",
        hostCategory: "Humano",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-103",
                title: "Blow flies from forest fragments embedded in different land uses: implications for selecting indicators in forensic entomology",
                authors: [
                    "Souza MS",
                    "Pepinelli M",
                    "de Almeida EC",
                    "Ochoa-Quintero JM",
                    "Roque FO"
                ],
                year: 2016,
                type: "artigo científico",
                journal: "J Forensic Sci"
            },
            {
                id: "art-104",
                title: "Lista das espécies de Calliphoridae (Diptera, Oestroidea) do Estado do Mato Grosso do Sul, Brasil",
                authors: [
                    "Kosmann C",
                    "Prestes AC",
                    "Tepedino KP",
                    "Franco AC",
                    "Pujol-Luz CVA",
                    "Pujol-Luz JR"
                ],
                year: 2017,
                type: "artigo científico",
                journal: "Iheringia Ser Zool"
            }
        ]
    },
    {
        id: "occ-340",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-20",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            },
            {
                id: "art-025",
                title: "Controle seletivo do Rhipicephalus (Boophilus) microplus (Canestrini, 1887), em bovinos criados em campo nativo, com uso de fipronil e avaliação de sua eficácia em Lages – SC [dissertação]",
                authors: [
                    "Paim F"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Florianópolis: Universidade do Estado de Santa Catarina"
            }
        ]
    },
    {
        id: "occ-341",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-21",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-025",
                title: "Controle seletivo do Rhipicephalus (Boophilus) microplus (Canestrini, 1887), em bovinos criados em campo nativo, com uso de fipronil e avaliação de sua eficácia em Lages – SC [dissertação]",
                authors: [
                    "Paim F"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Florianópolis: Universidade do Estado de Santa Catarina"
            }
        ]
    },
    {
        id: "occ-342",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-22",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-343",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-23",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-025",
                title: "Controle seletivo do Rhipicephalus (Boophilus) microplus (Canestrini, 1887), em bovinos criados em campo nativo, com uso de fipronil e avaliação de sua eficácia em Lages – SC [dissertação]",
                authors: [
                    "Paim F"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Florianópolis: Universidade do Estado de Santa Catarina"
            }
        ]
    },
    {
        id: "occ-344",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-24",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-345",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-25",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-025",
                title: "Controle seletivo do Rhipicephalus (Boophilus) microplus (Canestrini, 1887), em bovinos criados em campo nativo, com uso de fipronil e avaliação de sua eficácia em Lages – SC [dissertação]",
                authors: [
                    "Paim F"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Florianópolis: Universidade do Estado de Santa Catarina"
            },
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-346",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-26",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-347",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-27",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-025",
                title: "Controle seletivo do Rhipicephalus (Boophilus) microplus (Canestrini, 1887), em bovinos criados em campo nativo, com uso de fipronil e avaliação de sua eficácia em Lages – SC [dissertação]",
                authors: [
                    "Paim F"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Florianópolis: Universidade do Estado de Santa Catarina"
            }
        ]
    },
    {
        id: "occ-348",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-28",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-003",
                title: "Persistent efficacy of doramectin and ivermectin in the prevention of natural Cochliomyia hominivorax infestations in cattle castrated 10 days after treatment",
                authors: [
                    "Caproni L Jr",
                    "Umehara O",
                    "Gonçalves LCB",
                    "Moro E"
                ],
                year: 1998,
                type: "caso clínico",
                journal: "Rev Bras Parasitol Vet"
            }
        ]
    },
    {
        id: "occ-349",
        coordinates: [
            -48.5482,
            -27.5949
        ],
        city: "Florianópolis",
        state: "SC",
        disease: "Chrysomya albiceps",
        vector: "Não informado",
        date: "2014-01-30",
        host: "Sus scrofa",
        hostCategory: "Produção",
        hostSex: "Não informado",
        hostAge: "Não informado",
        outcome: "Não informado",
        articles: [
            {
                id: "art-025",
                title: "Controle seletivo do Rhipicephalus (Boophilus) microplus (Canestrini, 1887), em bovinos criados em campo nativo, com uso de fipronil e avaliação de sua eficácia em Lages – SC [dissertação]",
                authors: [
                    "Paim F"
                ],
                year: 2010,
                type: "caso clínico",
                journal: "Florianópolis: Universidade do Estado de Santa Catarina"
            }
        ]
    }
];
const mockGeoJsonData = {
    type: "FeatureCollection",
    features: mockOccurrences.map((occurrence)=>({
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: occurrence.coordinates
            },
            properties: {
                id: occurrence.id,
                disease: occurrence.disease,
                vector: occurrence.vector,
                date: occurrence.date,
                city: occurrence.city,
                state: occurrence.state,
                host: occurrence.host,
                hostCategory: occurrence.hostCategory,
                hostSex: occurrence.hostSex,
                hostAge: occurrence.hostAge,
                outcome: occurrence.outcome,
                articles: occurrence.articles.map((article)=>({
                        ...article,
                        url: ""
                    }))
            }
        }))
};
function filterOccurrencesBySearch(occurrences, query) {
    if (!query.trim()) return occurrences;
    const lowerQuery = query.toLowerCase();
    return occurrences.filter((occ)=>occ.city.toLowerCase().includes(lowerQuery) || occ.state.toLowerCase().includes(lowerQuery));
}
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
}
function getHostCategoryColor(category) {
    const colors = {
        Humano: "bg-destructive/10 text-destructive",
        Produção: "bg-chart-3/10 text-chart-3",
        Criação: "bg-primary/10 text-primary",
        Silvestre: "bg-accent/10 text-accent",
        Outro: "bg-muted text-muted-foreground"
    };
    return colors[category] || colors.Outro;
}
function getOutcomeColor(outcome) {
    if (!outcome) return "text-muted-foreground"; // Caso seja undefined ou null
    if (outcome === "Recuperado") return "text-accent";
    if (outcome === "Óbito") return "text-destructive";
    return "text-muted-foreground";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/articles/hooks/useArticles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useArticles",
    ()=>useArticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApiQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useApiQuery.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useArticles(options = {}) {
    _s();
    const fallbackData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useArticles.useCallback[fallbackData]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockArticles"])()
    }["useArticles.useCallback[fallbackData]"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApiQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiQuery"])([
        "articles",
        options.search,
        options.types
    ], {
        "useArticles.useApiQuery": ()=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHOULD_USE_MOCKS"]) return Promise.resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockArticles"])());
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/articles", {
                params: {
                    search: options.search,
                    types: options.types
                }
            });
        }
    }["useArticles.useApiQuery"], {
        enabled: options.enabled ?? true,
        fallbackData
    });
}
_s(useArticles, "nffW71MMuDVYZP5LEkxsffBY3kw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApiQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/dashboard/constants/dashboardDefaults.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_MAP_CENTER",
    ()=>DEFAULT_MAP_CENTER,
    "DEFAULT_MAP_ZOOM",
    ()=>DEFAULT_MAP_ZOOM,
    "DEFAULT_SELECTED_HOSTS",
    ()=>DEFAULT_SELECTED_HOSTS,
    "DEFAULT_SELECTED_VECTORS",
    ()=>DEFAULT_SELECTED_VECTORS
]);
const DEFAULT_MAP_CENTER = [
    -14.235,
    -51.925
];
const DEFAULT_MAP_ZOOM = 4;
const DEFAULT_SELECTED_VECTORS = [
    "cochliomyia-hominivorax"
];
const DEFAULT_SELECTED_HOSTS = [
    "homo-sapiens",
    "canis-familiaris",
    "felis-catus",
    "bos-taurus",
    "ovis-aries",
    "capra-hircus",
    "sus-scrofa",
    "equus-caballus",
    "hydrochoerus"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/dashboard/hooks/useFullscreen.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFullscreen",
    ()=>useFullscreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useFullscreen() {
    _s();
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleFullscreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFullscreen.useCallback[toggleFullscreen]": ()=>{
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
                setIsFullscreen(true);
            } else {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    }["useFullscreen.useCallback[toggleFullscreen]"], []);
    return {
        isFullscreen,
        toggleFullscreen
    };
}
_s(useFullscreen, "Fq0ZmOKkMaCUCRLcVgM/JKln660=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/hosts/components/HostPanel/HostPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HostPanel",
    ()=>HostPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hosts$2f$hooks$2f$useHosts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/hosts/hooks/useHosts.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Host categories
const hostCategories = [
    {
        id: "humano",
        label: "Humanos",
        color: "bg-destructive/10 text-destructive"
    },
    {
        id: "producao",
        label: "Produção",
        color: "bg-chart-3/10 text-chart-3"
    },
    {
        id: "criacao",
        label: "Criação",
        color: "bg-primary/10 text-primary"
    },
    {
        id: "silvestre",
        label: "Silvestres",
        color: "bg-accent/10 text-accent"
    },
    {
        id: "outro",
        label: "Outros",
        color: "bg-muted text-muted-foreground"
    }
];
// Life stages
const lifeStages = [
    {
        id: "recem-nascido",
        label: "Recém-nascido"
    },
    {
        id: "jovem",
        label: "Jovem"
    },
    {
        id: "adulto",
        label: "Adulto"
    }
];
// Sex options
const sexOptions = [
    {
        id: "masculino",
        label: "Masculino"
    },
    {
        id: "feminino",
        label: "Feminino"
    }
];
// Host species
const hostSpecies = [
    {
        id: "homo-sapiens",
        name: "Homo sapiens",
        commonName: "Humano",
        category: "humano",
        count: 3,
        inCurrentMap: true
    },
    {
        id: "canis-familiaris",
        name: "Canis familiaris",
        commonName: "Cão",
        category: "criacao",
        count: 2,
        inCurrentMap: true
    },
    {
        id: "felis-catus",
        name: "Felis catus",
        commonName: "Gato",
        category: "criacao",
        count: 1,
        inCurrentMap: true
    },
    {
        id: "bos-taurus",
        name: "Bos taurus",
        commonName: "Bovino",
        category: "producao",
        count: 1,
        inCurrentMap: true
    },
    {
        id: "ovis-aries",
        name: "Ovis aries",
        commonName: "Ovino",
        category: "producao",
        count: 2,
        inCurrentMap: true
    },
    {
        id: "capra-hircus",
        name: "Capra aegagrus hircus",
        commonName: "Caprino",
        category: "producao",
        count: 1,
        inCurrentMap: true
    },
    {
        id: "sus-scrofa",
        name: "Sus scrofa domesticus",
        commonName: "Suíno",
        category: "producao",
        count: 1,
        inCurrentMap: true
    },
    {
        id: "equus-caballus",
        name: "Equus caballus",
        commonName: "Equino",
        category: "criacao",
        count: 1,
        inCurrentMap: true
    },
    {
        id: "hydrochoerus",
        name: "Hydrochoerus hydrochaeris",
        commonName: "Capivara",
        category: "silvestre",
        count: 1,
        inCurrentMap: true
    }
];
// Distribution by host over time
const timeDistribution = [
    {
        period: "2008-2010",
        humano: 2,
        producao: 2,
        criacao: 1,
        silvestre: 1
    },
    {
        period: "2011-2013",
        humano: 1,
        producao: 2,
        criacao: 1,
        silvestre: 0
    },
    {
        period: "2014-2016",
        humano: 0,
        producao: 1,
        criacao: 3,
        silvestre: 0
    },
    {
        period: "2017-2020",
        humano: 0,
        producao: 2,
        criacao: 0,
        silvestre: 0
    }
];
// Distribution by region
const regionDistribution = [
    {
        region: "Norte",
        count: 2
    },
    {
        region: "Nordeste",
        count: 4
    },
    {
        region: "Centro-Oeste",
        count: 2
    },
    {
        region: "Sudeste",
        count: 3
    },
    {
        region: "Sul",
        count: 1
    }
];
function HostPanel({ isExpanded, onClose, onToggleExpand, selectedHosts, onHostSelect, onApplyFilter }) {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCategories, setSelectedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedStages, setSelectedStages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSex, setSelectedSex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showError, setShowError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: hostsFromApi } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hosts$2f$hooks$2f$useHosts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHosts"])();
    const hosts = hostsFromApi ?? hostSpecies;
    // Filter hosts
    const filteredHosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HostPanel.useMemo[filteredHosts]": ()=>{
            let result = hosts;
            // Search filter
            if (searchQuery.trim()) {
                const query = searchQuery.toLowerCase();
                result = result.filter({
                    "HostPanel.useMemo[filteredHosts]": (host)=>host.name.toLowerCase().includes(query) || (host.commonName ?? host.name).toLowerCase().includes(query)
                }["HostPanel.useMemo[filteredHosts]"]);
            }
            // Category filter
            if (selectedCategories.length > 0) {
                result = result.filter({
                    "HostPanel.useMemo[filteredHosts]": (host)=>host.category && selectedCategories.includes(host.category)
                }["HostPanel.useMemo[filteredHosts]"]);
            }
            return result;
        }
    }["HostPanel.useMemo[filteredHosts]"], [
        hosts,
        searchQuery,
        selectedCategories
    ]);
    const handleHostToggle = (hostId)=>{
        if (selectedHosts.includes(hostId)) {
            onHostSelect(selectedHosts.filter((id)=>id !== hostId));
        } else {
            onHostSelect([
                ...selectedHosts,
                hostId
            ]);
        }
    };
    const handleCategoryToggle = (category)=>{
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c)=>c !== category));
        } else {
            setSelectedCategories([
                ...selectedCategories,
                category
            ]);
        }
    };
    const handleStageToggle = (stage)=>{
        if (selectedStages.includes(stage)) {
            setSelectedStages(selectedStages.filter((s)=>s !== stage));
        } else {
            setSelectedStages([
                ...selectedStages,
                stage
            ]);
        }
    };
    const handleSexToggle = (sex)=>{
        if (selectedSex.includes(sex)) {
            setSelectedSex(selectedSex.filter((s)=>s !== sex));
        } else {
            setSelectedSex([
                ...selectedSex,
                sex
            ]);
        }
    };
    const handleSelectAll = ()=>{
        onHostSelect(filteredHosts.map((h)=>h.id));
    };
    const handleClearSelection = ()=>{
        onHostSelect([]);
    };
    const handleApply = ()=>{
        if (selectedHosts.length === 0) {
            setShowError(true);
            return;
        }
        setShowError(false);
        onApplyFilter();
    };
    const getCategoryColor = (category)=>{
        return hostCategories.find((c)=>c.id === category)?.color || "bg-muted text-muted-foreground";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute left-4 top-16 bottom-4 z-20 bg-card border-r border-border shadow-xl flex flex-col transition-all duration-300 ${isExpanded ? "w-[700px]" : "w-[420px]"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-foreground",
                        children: "Filtro por Hospedeiro"
                    }, void 0, false, {
                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: onToggleExpand,
                                title: isExpanded ? "Recolher" : "Expandir",
                                children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                    lineNumber: 188,
                                    columnNumber: 27
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                    lineNumber: 188,
                                    columnNumber: 63
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: onClose,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-border space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Buscar hospedeiro...",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                className: "w-full pl-10 pr-4 py-2 rounded-none border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            }, void 0, false, {
                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-medium text-muted-foreground mb-2 block",
                                children: "Grupo de Hospedeiro"
                            }, void 0, false, {
                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: hostCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: selectedCategories.includes(category.id) ? "default" : "outline",
                                        size: "sm",
                                        onClick: ()=>handleCategoryToggle(category.id),
                                        children: category.label
                                    }, category.id, false, {
                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-medium text-muted-foreground mb-2 block",
                                children: "Estágio de Vida"
                            }, void 0, false, {
                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: lifeStages.map((stage)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: selectedStages.includes(stage.id) ? "default" : "outline",
                                        size: "sm",
                                        onClick: ()=>handleStageToggle(stage.id),
                                        children: stage.label
                                    }, stage.id, false, {
                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-medium text-muted-foreground mb-2 block",
                                children: "Sexo"
                            }, void 0, false, {
                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: sexOptions.map((sex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: selectedSex.includes(sex.id) ? "default" : "outline",
                                        size: "sm",
                                        onClick: ()=>handleSexToggle(sex.id),
                                        children: sex.label
                                    }, sex.id, false, {
                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 border-b border-border flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            selectedHosts.length,
                            " de ",
                            filteredHosts.length,
                            " selecionados"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: handleSelectAll,
                                children: "Selecionar todos"
                            }, void 0, false, {
                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: handleClearSelection,
                                children: "Limpar"
                            }, void 0, false, {
                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `overflow-y-auto border-r border-border ${isExpanded ? "w-1/2" : "flex-1"}`,
                        children: filteredHosts.map((host)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `px-4 py-3 border-b border-border hover:bg-muted/50 transition-colors ${host.inCurrentMap ? "" : "opacity-50"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                            checked: selectedHosts.includes(host.id),
                                            onCheckedChange: ()=>handleHostToggle(host.id),
                                            className: "mt-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-foreground italic",
                                                            children: host.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 21
                                                        }, this),
                                                        host.inCurrentMap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2 h-2 rounded-none bg-accent",
                                                            title: "No mapa atual"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: host.commonName ?? host.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-xs px-2 py-0.5 rounded-none ${getCategoryColor(host.category ?? "outro")}`,
                                                            children: hostCategories.find((c)=>c.id === host.category)?.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: [
                                                                host.count ?? 0,
                                                                " ocorrência(s)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                            lineNumber: 300,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                    lineNumber: 294,
                                    columnNumber: 15
                                }, this)
                            }, host.id, false, {
                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/2 overflow-y-auto p-4 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-medium text-foreground mb-3",
                                        children: "Distribuição ao Longo do Tempo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-48",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: "100%",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                                data: timeDistribution,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                        strokeDasharray: "3 3",
                                                        stroke: "hsl(var(--border))"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                        dataKey: "period",
                                                        tick: {
                                                            fontSize: 9,
                                                            fill: "hsl(var(--muted-foreground))"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                        tick: {
                                                            fontSize: 10,
                                                            fill: "hsl(var(--muted-foreground))"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                        contentStyle: {
                                                            backgroundColor: "hsl(var(--card))",
                                                            border: "1px solid hsl(var(--border))",
                                                            borderRadius: "8px",
                                                            fontSize: "11px"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                        type: "monotone",
                                                        dataKey: "humano",
                                                        name: "Humanos",
                                                        stroke: "hsl(var(--destructive))",
                                                        strokeWidth: 2,
                                                        dot: {
                                                            r: 3
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                        type: "monotone",
                                                        dataKey: "producao",
                                                        name: "Produção",
                                                        stroke: "hsl(var(--chart-3))",
                                                        strokeWidth: 2,
                                                        dot: {
                                                            r: 3
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                        type: "monotone",
                                                        dataKey: "criacao",
                                                        name: "Criação",
                                                        stroke: "hsl(var(--primary))",
                                                        strokeWidth: 2,
                                                        dot: {
                                                            r: 3
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                        type: "monotone",
                                                        dataKey: "silvestre",
                                                        name: "Silvestres",
                                                        stroke: "hsl(var(--accent))",
                                                        strokeWidth: 2,
                                                        dot: {
                                                            r: 3
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                lineNumber: 334,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                        lineNumber: 332,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-3 mt-2 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3 h-3 rounded-none bg-destructive"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Humanos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                lineNumber: 385,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3 h-3 rounded-none bg-chart-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Produção"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                lineNumber: 389,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3 h-3 rounded-none bg-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Criação"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                lineNumber: 393,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3 h-3 rounded-none bg-accent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Silvestres"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                lineNumber: 397,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                        lineNumber: 384,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-medium text-foreground mb-3",
                                        children: "Distribuição por Região"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                        lineNumber: 406,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-48",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: "100%",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                data: regionDistribution,
                                                layout: "vertical",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                        strokeDasharray: "3 3",
                                                        stroke: "hsl(var(--border))"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                        type: "number",
                                                        tick: {
                                                            fontSize: 10,
                                                            fill: "hsl(var(--muted-foreground))"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                        type: "category",
                                                        dataKey: "region",
                                                        tick: {
                                                            fontSize: 10,
                                                            fill: "hsl(var(--muted-foreground))"
                                                        },
                                                        width: 80
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                        contentStyle: {
                                                            backgroundColor: "hsl(var(--card))",
                                                            border: "1px solid hsl(var(--border))",
                                                            borderRadius: "8px",
                                                            fontSize: "11px"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                        dataKey: "count",
                                                        fill: "hsl(var(--primary))",
                                                        radius: [
                                                            0,
                                                            4,
                                                            4,
                                                            0
                                                        ],
                                                        name: "Ocorrências"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                        lineNumber: 428,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                                lineNumber: 411,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                            lineNumber: 410,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                        lineNumber: 409,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                        lineNumber: 326,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            showError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 bg-destructive/10 border-t border-destructive/20 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-4 h-4 text-destructive"
                    }, void 0, false, {
                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                        lineNumber: 445,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-destructive",
                        children: "Selecione pelo menos um hospedeiro para aplicar o filtro."
                    }, void 0, false, {
                        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                        lineNumber: 446,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                lineNumber: 444,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handleApply,
                    className: "w-full",
                    disabled: selectedHosts.length === 0,
                    children: [
                        "Aplicar Filtro (",
                        selectedHosts.length,
                        " hospedeiros)"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                    lineNumber: 454,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
                lineNumber: 453,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/hosts/components/HostPanel/HostPanel.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
_s(HostPanel, "CCYJdNzrF7/z5q90NeNC//5Cl88=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hosts$2f$hooks$2f$useHosts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHosts"]
    ];
});
_c = HostPanel;
var _c;
__turbopack_context__.k.register(_c, "HostPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/hosts/hooks/useHosts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHosts",
    ()=>useHosts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApiQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useApiQuery.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useHosts(options = {}) {
    _s();
    const fallbackData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHosts.useCallback[fallbackData]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockHosts"])()
    }["useHosts.useCallback[fallbackData]"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApiQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiQuery"])([
        "hosts",
        options.search,
        options.categories
    ], {
        "useHosts.useApiQuery": ()=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHOULD_USE_MOCKS"]) return Promise.resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockHosts"])());
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/hosts", {
                params: {
                    search: options.search,
                    categories: options.categories
                }
            });
        }
    }["useHosts.useApiQuery"], {
        enabled: options.enabled ?? true,
        fallbackData
    });
}
_s(useHosts, "nffW71MMuDVYZP5LEkxsffBY3kw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApiQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/locations/components/LocationSearch/LocationSearch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocationSearch",
    ()=>LocationSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$locations$2f$hooks$2f$useLocationSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/locations/hooks/useLocationSearch.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const LocationSearch = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function LocationSearch({ onLocationSelect }, ref) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: results } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$locations$2f$hooks$2f$useLocationSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocationSearch"])(query);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full max-w-md z-[500]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: ref,
                id: "map-search",
                type: "text",
                value: query,
                onChange: (event)=>{
                    setQuery(event.target.value);
                    setShowSuggestions(true);
                },
                onFocus: ()=>{
                    if (query.trim().length > 0) {
                        setShowSuggestions(true);
                    }
                },
                placeholder: "Pesquisar por bairro, cidade ou estado...",
                className: "w-full px-3 pr-4 py-2 rounded-none border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            }, void 0, false, {
                fileName: "[project]/src/features/locations/components/LocationSearch/LocationSearch.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this),
            showSuggestions && results && results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "absolute w-full bg-white border border-slate-200 mt-1 rounded-none shadow-lg max-h-60 overflow-y-auto text-sm",
                children: results.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "p-3 hover:bg-slate-100 cursor-pointer border-b border-slate-100 last:border-b-0",
                        onClick: ()=>{
                            onLocationSelect(item.lat, item.lon, 13);
                            setQuery(item.label);
                            setShowSuggestions(false);
                        },
                        children: item.label
                    }, item.id, false, {
                        fileName: "[project]/src/features/locations/components/LocationSearch/LocationSearch.tsx",
                        lineNumber: 44,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/locations/components/LocationSearch/LocationSearch.tsx",
                lineNumber: 42,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/locations/components/LocationSearch/LocationSearch.tsx",
        lineNumber: 22,
        columnNumber: 7
    }, this);
}, "/VW4gUn7HtPsYcYTZZN1iaMY748=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$locations$2f$hooks$2f$useLocationSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocationSearch"]
    ];
})), "/VW4gUn7HtPsYcYTZZN1iaMY748=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$locations$2f$hooks$2f$useLocationSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocationSearch"]
    ];
});
_c1 = LocationSearch;
LocationSearch.displayName = "LocationSearch";
var _c, _c1;
__turbopack_context__.k.register(_c, "LocationSearch$forwardRef");
__turbopack_context__.k.register(_c1, "LocationSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/locations/hooks/useLocationSearch.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocationSearch",
    ()=>useLocationSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApiQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useApiQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebouncedValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDebouncedValue.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function normalizeNominatimResult(item) {
    const address = item.address ?? {};
    const name = address.city ?? address.town ?? address.village ?? address.suburb ?? address.neighbourhood ?? item.display_name;
    return {
        id: String(item.place_id),
        label: [
            name,
            address.state,
            address.country
        ].filter(Boolean).join(", "),
        lat: Number(item.lat),
        lon: Number(item.lon)
    };
}
function useLocationSearch(query, enabled = true) {
    _s();
    const debouncedQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebouncedValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedValue"])(query.trim(), 500);
    const canSearch = enabled && debouncedQuery.length > 2;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApiQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiQuery"])([
        "location-search",
        debouncedQuery
    ], {
        "useLocationSearch.useApiQuery": async (signal)=>{
            if (!canSearch) return [];
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=10&q=${encodeURIComponent(debouncedQuery)}`, {
                signal
            });
            const data = await response.json();
            return data.map(normalizeNominatimResult);
        }
    }["useLocationSearch.useApiQuery"], {
        enabled: canSearch,
        fallbackData: [],
        keepPreviousData: false
    });
}
_s(useLocationSearch, "Zlzt6t0a9nq6z4JwVySSlqKCBHA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebouncedValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApiQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OccurrencePanel",
    ()=>OccurrencePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$occurrences$2f$utils$2f$formatOccurrenceDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/occurrences/utils/formatOccurrenceDate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$occurrences$2f$utils$2f$getHostCategoryColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/occurrences/utils/getHostCategoryColor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$occurrences$2f$utils$2f$getOutcomeColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/occurrences/utils/getOutcomeColor.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function OccurrencePanel({ occurrences, isExpanded, onClose, onExpand, onCollapse }) {
    if (!occurrences || occurrences.length === 0) return null;
    const mainLocation = occurrences[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        absolute top-0 right-0 h-full bg-card border-l border-border shadow-xl z-30
        transition-all duration-300 ease-in-out overflow-hidden
        ${isExpanded ? "w-full md:w-2/3 lg:w-1/2" : "w-80 md:w-96"}
      `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0 px-4 py-3 border-b border-border bg-muted/30",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-none bg-primary/10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                            className: "w-4 h-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold text-foreground uppercase tracking-wider",
                                            children: [
                                                "Ocorrências (",
                                                occurrences.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "h-8 w-8",
                                        onClick: isExpanded ? onCollapse : onExpand,
                                        children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                            lineNumber: 67,
                                            columnNumber: 31
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                            lineNumber: 67,
                                            columnNumber: 70
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "h-8 w-8",
                                        onClick: onClose,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto custom-scrollbar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: occurrences.map((occ, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-border last:border-0",
                                children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpandedContent, {
                                    occurrence: occ,
                                    index: index,
                                    isMultiple: occurrences.length > 1
                                }, void 0, false, {
                                    fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                    lineNumber: 82,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompactContent, {
                                    occurrence: occ,
                                    onExpand: onExpand
                                }, void 0, false, {
                                    fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                    lineNumber: 84,
                                    columnNumber: 19
                                }, this)
                            }, occ.id || index, false, {
                                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = OccurrencePanel;
// COMPACT CONTENT - Corrigido Props
function CompactContent({ occurrence, onExpand }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCard, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                            lineNumber: 106,
                            columnNumber: 25
                        }, this),
                        label: "Doença",
                        value: occurrence.disease
                    }, void 0, false, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCard, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                            lineNumber: 108,
                            columnNumber: 17
                        }, this),
                        label: "Vetor",
                        value: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            className: "text-xs",
                            children: occurrence.vector.split(" ").slice(0, 2).join(" ")
                        }, void 0, false, {
                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                            lineNumber: 110,
                            columnNumber: 18
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCard, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                            lineNumber: 112,
                            columnNumber: 25
                        }, this),
                        label: "Data",
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$occurrences$2f$utils$2f$formatOccurrenceDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatOccurrenceDate"])(occurrence.date)
                    }, void 0, false, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCard, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                            lineNumber: 113,
                            columnNumber: 25
                        }, this),
                        label: "Hospedeiro",
                        value: occurrence.host
                    }, void 0, false, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                        className: "w-4 h-4 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-xs font-medium px-2 py-1 rounded-none ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$occurrences$2f$utils$2f$getHostCategoryColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHostCategoryColor"])(occurrence.hostCategory)}`,
                        children: occurrence.hostCategory
                    }, void 0, false, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                className: "w-full",
                onClick: onExpand,
                children: [
                    "Ver detalhes completos",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                        className: "w-4 h-4 ml-2"
                    }, void 0, false, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_c1 = CompactContent;
// EXPANDED CONTENT - Corrigido para não usar .map interno (já está no pai)
function ExpandedContent({ occurrence, index, isMultiple }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-6 bg-background ${index > 0 ? "border-t-4 border-muted" : ""}`,
        children: [
            isMultiple && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded",
                    children: [
                        "Evento Epidemiológico #",
                        index + 1
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                    lineNumber: 145,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 pb-4 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1 h-6 bg-primary rounded-none"
                            }, void 0, false, {
                                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-foreground",
                                children: "Prontuário da Ocorrência"
                            }, void 0, false, {
                                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "ID: ",
                            occurrence.id,
                            " — Registro de ",
                            occurrence.disease
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                    lineNumber: 161,
                                    columnNumber: 31
                                }, this),
                                title: "Localização"
                            }, void 0, false, {
                                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Cidade",
                                        value: occurrence.city
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Estado",
                                        value: occurrence.state
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Coordenadas",
                                        value: `${occurrence.coordinates[1].toFixed(4)}, ${occurrence.coordinates[0].toFixed(4)}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                    lineNumber: 170,
                                    columnNumber: 31
                                }, this),
                                title: "Doença e Vetor"
                            }, void 0, false, {
                                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Doença",
                                        value: occurrence.disease
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Vetor",
                                        value: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: occurrence.vector
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                            lineNumber: 173,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Data",
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$occurrences$2f$utils$2f$formatOccurrenceDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatOccurrenceDate"])(occurrence.date)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                    lineNumber: 179,
                                    columnNumber: 31
                                }, this),
                                title: "Hospedeiro"
                            }, void 0, false, {
                                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Espécie",
                                        value: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: occurrence.host
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                            lineNumber: 181,
                                            columnNumber: 47
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Categoria",
                                        value: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-xs font-medium px-2 py-0.5 rounded-none ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$occurrences$2f$utils$2f$getHostCategoryColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHostCategoryColor"])(occurrence.hostCategory)}`,
                                            children: occurrence.hostCategory
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                            lineNumber: 184,
                                            columnNumber: 22
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                    lineNumber: 190,
                                    columnNumber: 31
                                }, this),
                                title: "Desfecho"
                            }, void 0, false, {
                                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 mt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "Desfecho",
                                    value: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-medium ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$occurrences$2f$utils$2f$getOutcomeColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOutcomeColor"])(occurrence.outcome)}`,
                                        children: occurrence.outcome || "Não informado"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                        lineNumber: 192,
                                        columnNumber: 48
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-t border-border pt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                            lineNumber: 198,
                            columnNumber: 29
                        }, this),
                        title: "Artigos Científicos"
                    }, void 0, false, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 space-y-4",
                        children: occurrence.articles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-none border border-border bg-muted/20 hover:bg-muted/40 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-foreground mb-2",
                                                    children: article.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-none",
                                                            children: article.year
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: article.journal
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            className: "h-8 w-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this)
                            }, article.id, false, {
                                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_c2 = ExpandedContent;
// Funções Auxiliares de UI (Sub-componentes)
function InfoCard({ icon, label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-3 rounded-none border border-border bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-muted-foreground mb-1",
                children: [
                    icon,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium text-foreground truncate",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
_c3 = InfoCard;
function SectionTitle({ icon, title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-primary",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
        lineNumber: 237,
        columnNumber: 5
    }, this);
}
_c4 = SectionTitle;
function DetailRow({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start justify-between gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-foreground text-right",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/occurrences/components/OccurrencePanel/OccurrencePanel.tsx",
        lineNumber: 246,
        columnNumber: 5
    }, this);
}
_c5 = DetailRow;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "OccurrencePanel");
__turbopack_context__.k.register(_c1, "CompactContent");
__turbopack_context__.k.register(_c2, "ExpandedContent");
__turbopack_context__.k.register(_c3, "InfoCard");
__turbopack_context__.k.register(_c4, "SectionTitle");
__turbopack_context__.k.register(_c5, "DetailRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/occurrences/hooks/useOccurrences.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOccurrences",
    ()=>useOccurrences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$FiltersStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/FiltersStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApiQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useApiQuery.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function useOccurrences(options = {}) {
    _s();
    const storeFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$FiltersStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFiltersStore"])();
    const filters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useOccurrences.useMemo[filters]": ()=>({
                diseases: storeFilters.selectedDiseases,
                vectors: storeFilters.selectedVectors,
                hosts: storeFilters.selectedHosts,
                geographicLevel: storeFilters.geographicLevel,
                region: storeFilters.selectedRegion,
                ...options.filters
            })
    }["useOccurrences.useMemo[filters]"], [
        options.filters?.articles,
        options.filters?.diseases,
        options.filters?.geographicLevel,
        options.filters?.hosts,
        options.filters?.region,
        options.filters?.search,
        options.filters?.vectors,
        storeFilters.geographicLevel,
        storeFilters.selectedDiseases,
        storeFilters.selectedHosts,
        storeFilters.selectedRegion,
        storeFilters.selectedVectors
    ]);
    const fallbackData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOccurrences.useCallback[fallbackData]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockOccurrences"])(filters)
    }["useOccurrences.useCallback[fallbackData]"], [
        filters
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApiQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiQuery"])([
        "occurrences",
        filters
    ], {
        "useOccurrences.useApiQuery": (signal)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHOULD_USE_MOCKS"]) return Promise.resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockOccurrences"])(filters));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/occurrences", {
                signal,
                params: {
                    diseases: filters.diseases,
                    articles: filters.articles,
                    vectors: filters.vectors,
                    hosts: filters.hosts,
                    geographicLevel: filters.geographicLevel,
                    region: filters.region,
                    search: filters.search
                }
            });
        }
    }["useOccurrences.useApiQuery"], {
        enabled: options.enabled ?? true,
        fallbackData
    });
}
_s(useOccurrences, "A67NrKjDH/DWAPVXelwXVPE5hrI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$FiltersStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFiltersStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApiQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/occurrences/utils/formatOccurrenceDate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatOccurrenceDate",
    ()=>formatOccurrenceDate
]);
function formatOccurrenceDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/occurrences/utils/getHostCategoryColor.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHostCategoryColor",
    ()=>getHostCategoryColor
]);
function getHostCategoryColor(category) {
    const colors = {
        Humano: "bg-destructive/10 text-destructive",
        Producao: "bg-chart-3/10 text-chart-3",
        "ProduÃ§Ã£o": "bg-chart-3/10 text-chart-3",
        Criacao: "bg-primary/10 text-primary",
        "CriaÃ§Ã£o": "bg-primary/10 text-primary",
        Silvestre: "bg-accent/10 text-accent",
        Outro: "bg-muted text-muted-foreground"
    };
    return colors[category] || colors.Outro;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/occurrences/utils/getOutcomeColor.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOutcomeColor",
    ()=>getOutcomeColor
]);
function getOutcomeColor(outcome) {
    if (!outcome) return "text-muted-foreground";
    if (outcome === "Recuperado") return "text-accent";
    if (outcome === "Obito" || outcome === "Ã“bito") return "text-destructive";
    return "text-muted-foreground";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VectorPanel",
    ()=>VectorPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$vectors$2f$hooks$2f$useVectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/vectors/hooks/useVectors.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Vector data
const vectors = [
    {
        id: "cochliomyia-hominivorax",
        scientificName: "Cochliomyia hominivorax",
        commonName: "Mosca-varejeira / Mosca da bicheira",
        description: "Principal causador de miíase primária no Brasil. Deposita ovos em feridas e tecidos vivos.",
        occurrenceCount: 12,
        isSelected: true
    }
];
// Distribution over time data
const timeDistribution = [
    {
        period: "Antes de 2000",
        count: 3
    },
    {
        period: "2000-2010",
        count: 4
    },
    {
        period: "2011-2020",
        count: 5
    }
];
// Regional distribution data
const regionDistribution = [
    {
        name: "Norte",
        value: 2
    },
    {
        name: "Nordeste",
        value: 4
    },
    {
        name: "Centro-Oeste",
        value: 2
    },
    {
        name: "Sudeste",
        value: 3
    },
    {
        name: "Sul",
        value: 1
    }
];
const COLORS = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))"
];
function VectorPanel({ isExpanded, onClose, onToggleExpand, selectedVectors, onVectorSelect, onApplyFilter }) {
    _s();
    const [showError, setShowError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: vectorsFromApi } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$vectors$2f$hooks$2f$useVectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVectors"])();
    const vectorOptions = vectorsFromApi ?? vectors;
    const handleVectorToggle = (vectorId)=>{
        if (selectedVectors.includes(vectorId)) {
            onVectorSelect(selectedVectors.filter((id)=>id !== vectorId));
        } else {
            onVectorSelect([
                ...selectedVectors,
                vectorId
            ]);
        }
    };
    const handleApply = ()=>{
        if (selectedVectors.length === 0) {
            setShowError(true);
            return;
        }
        setShowError(false);
        onApplyFilter();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute left-4 top-16 bottom-4 z-20 bg-card border-r border-border shadow-xl flex flex-col transition-all duration-300 ${isExpanded ? "w-[600px]" : "w-96"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-foreground",
                        children: "Filtro por Vetor"
                    }, void 0, false, {
                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: onToggleExpand,
                                title: isExpanded ? "Recolher" : "Expandir",
                                children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                    lineNumber: 111,
                                    columnNumber: 27
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                    lineNumber: 111,
                                    columnNumber: 63
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: onClose,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-foreground mb-3",
                                children: "Vetores Disponíveis"
                            }, void 0, false, {
                                fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground mb-4",
                                children: [
                                    "Na versão atual, o sistema cobre apenas ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "Cochliomyia hominivorax"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                        lineNumber: 127,
                                        columnNumber: 53
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            vectorOptions.map((vector)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-4 rounded-none border ${selectedVectors.includes(vector.id) ? "border-primary bg-primary/5" : "border-border bg-muted/30"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                checked: selectedVectors.includes(vector.id),
                                                onCheckedChange: ()=>handleVectorToggle(vector.id),
                                                className: "mt-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold text-foreground italic",
                                                        children: vector.scientificName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground mt-1",
                                                        children: vector.commonName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground mt-2 leading-relaxed",
                                                        children: vector.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 flex items-center gap-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs px-2 py-1 rounded-none bg-accent/10 text-accent font-medium",
                                                            children: [
                                                                vector.occurrenceCount ?? 0,
                                                                " ocorrências no mapa"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                }, vector.id, false, {
                                    fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    selectedVectors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-b border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-medium text-foreground mb-3",
                                        children: "Distribuição ao Longo do Tempo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-48",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: "100%",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                data: timeDistribution,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                        strokeDasharray: "3 3",
                                                        stroke: "hsl(var(--border))"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                        dataKey: "period",
                                                        tick: {
                                                            fontSize: 10,
                                                            fill: "hsl(var(--muted-foreground))"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                        tick: {
                                                            fontSize: 10,
                                                            fill: "hsl(var(--muted-foreground))"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                        contentStyle: {
                                                            backgroundColor: "hsl(var(--card))",
                                                            border: "1px solid hsl(var(--border))",
                                                            borderRadius: "8px",
                                                            fontSize: "12px"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                        dataKey: "count",
                                                        fill: "hsl(var(--primary))",
                                                        radius: [
                                                            4,
                                                            4,
                                                            0,
                                                            0
                                                        ],
                                                        name: "Ocorrências"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                lineNumber: 176,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this),
                            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-b border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-medium text-foreground mb-3",
                                        children: "Distribuição por Região"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                        lineNumber: 205,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-56 flex items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: "100%",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                        data: regionDistribution,
                                                        cx: "50%",
                                                        cy: "50%",
                                                        innerRadius: 50,
                                                        outerRadius: 80,
                                                        paddingAngle: 2,
                                                        dataKey: "value",
                                                        label: ({ name, percent })=>`${name}: ${(percent * 100).toFixed(0)}%`,
                                                        labelLine: false,
                                                        children: regionDistribution.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                                fill: COLORS[index % COLORS.length]
                                                            }, `cell-${index}`, false, {
                                                                fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                        contentStyle: {
                                                            backgroundColor: "hsl(var(--card))",
                                                            border: "1px solid hsl(var(--border))",
                                                            borderRadius: "8px",
                                                            fontSize: "12px"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                lineNumber: 210,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                            lineNumber: 209,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                        lineNumber: 208,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 mt-2 justify-center",
                                        children: regionDistribution.map((region, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3 h-3 rounded-none",
                                                        style: {
                                                            backgroundColor: COLORS[index % COLORS.length]
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: [
                                                            region.name,
                                                            " (",
                                                            region.value,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, region.name, true, {
                                                fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                                lineNumber: 244,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                        lineNumber: 242,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                                lineNumber: 204,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            showError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 bg-destructive/10 border-t border-destructive/20 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-4 h-4 text-destructive"
                    }, void 0, false, {
                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-destructive",
                        children: "Selecione pelo menos um vetor para aplicar o filtro."
                    }, void 0, false, {
                        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                lineNumber: 263,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handleApply,
                    className: "w-full",
                    disabled: selectedVectors.length === 0,
                    children: "Aplicar Filtro"
                }, void 0, false, {
                    fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/vectors/components/VectorPanel/VectorPanel.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(VectorPanel, "icNfykuMGgYnHGpz5IzwjeYnq/M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$vectors$2f$hooks$2f$useVectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVectors"]
    ];
});
_c = VectorPanel;
var _c;
__turbopack_context__.k.register(_c, "VectorPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/vectors/hooks/useVectors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVectors",
    ()=>useVectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApiQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useApiQuery.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useVectors(enabled = true) {
    _s();
    const fallbackData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVectors.useCallback[fallbackData]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockVectors"])()
    }["useVectors.useCallback[fallbackData]"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApiQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiQuery"])([
        "vectors"
    ], {
        "useVectors.useApiQuery": ()=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHOULD_USE_MOCKS"]) return Promise.resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockVectors"])());
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/vectors");
        }
    }["useVectors.useApiQuery"], {
        enabled,
        fallbackData
    });
}
_s(useVectors, "nffW71MMuDVYZP5LEkxsffBY3kw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApiQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useApiQuery.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useApiQuery",
    ()=>useApiQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function resolveFallback(fallback) {
    if (typeof fallback === "function") {
        return fallback();
    }
    return fallback ?? null;
}
function useApiQuery(queryKey, queryFn, options = {}) {
    _s();
    const { enabled = true, fallbackData, keepPreviousData = true } = options;
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useApiQuery.useState": ()=>resolveFallback(fallbackData)
    }["useApiQuery.useState"]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(enabled);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const abortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const queryFnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(queryFn);
    const fallbackDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(fallbackData);
    const keepPreviousDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(keepPreviousData);
    const stableKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useApiQuery.useMemo[stableKey]": ()=>JSON.stringify(queryKey)
    }["useApiQuery.useMemo[stableKey]"], [
        queryKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useApiQuery.useEffect": ()=>{
            queryFnRef.current = queryFn;
            fallbackDataRef.current = fallbackData;
            keepPreviousDataRef.current = keepPreviousData;
        }
    }["useApiQuery.useEffect"], [
        fallbackData,
        keepPreviousData,
        queryFn
    ]);
    const execute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useApiQuery.useCallback[execute]": async ()=>{
            if (!enabled) {
                setIsLoading(false);
                return;
            }
            abortRef.current?.abort();
            const controller = new AbortController();
            abortRef.current = controller;
            setIsLoading(true);
            if (!keepPreviousDataRef.current) setData(resolveFallback(fallbackDataRef.current));
            try {
                const response = await queryFnRef.current(controller.signal);
                setData(response);
                setError(null);
            } catch (err) {
                if (controller.signal.aborted) return;
                setError(err instanceof Error ? err : new Error("Erro desconhecido na requisicao."));
                const fallback = resolveFallback(fallbackDataRef.current);
                if (fallback !== null) setData(fallback);
            } finally{
                if (!controller.signal.aborted) setIsLoading(false);
            }
        }
    }["useApiQuery.useCallback[execute]"], [
        enabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useApiQuery.useEffect": ()=>{
            execute();
            return ({
                "useApiQuery.useEffect": ()=>abortRef.current?.abort()
            })["useApiQuery.useEffect"];
        }
    }["useApiQuery.useEffect"], [
        execute,
        stableKey
    ]);
    return {
        data,
        isLoading,
        error,
        refetch: execute
    };
}
_s(useApiQuery, "nl7CZjhV4DX8fkcZIOPxFjuI+DU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useDebouncedValue.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebouncedValue",
    ()=>useDebouncedValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useDebouncedValue(value, delayMs = 400) {
    _s();
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebouncedValue.useEffect": ()=>{
            const timeoutId = window.setTimeout({
                "useDebouncedValue.useEffect.timeoutId": ()=>setDebouncedValue(value)
            }["useDebouncedValue.useEffect.timeoutId"], delayMs);
            return ({
                "useDebouncedValue.useEffect": ()=>window.clearTimeout(timeoutId)
            })["useDebouncedValue.useEffect"];
        }
    }["useDebouncedValue.useEffect"], [
        value,
        delayMs
    ]);
    return debouncedValue;
}
_s(useDebouncedValue, "KDuPAtDOgxm8PU6legVJOb3oOmA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/dashboard/DashboardFooterSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardFooterSection",
    ()=>DashboardFooterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function DashboardFooterSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "shrink-0 bg-primary text-primary-foreground px-4 py-1.5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-center"
        }, void 0, false, {
            fileName: "[project]/src/sections/dashboard/DashboardFooterSection.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/dashboard/DashboardFooterSection.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = DashboardFooterSection;
var _c;
__turbopack_context__.k.register(_c, "DashboardFooterSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/dashboard/DashboardHeaderSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardHeaderSection",
    ()=>DashboardHeaderSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
function DashboardHeaderSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "border-b border-neutral-200 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/sidpb",
                    className: "flex items-center gap-4 transition-opacity hover:opacity-80",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/logo.png",
                            alt: "SIDPB",
                            width: 120,
                            height: 36,
                            className: "h-9 w-auto object-contain",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/sections/dashboard/DashboardHeaderSection.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold tracking-wide text-foreground",
                                    children: "SIDPB"
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/dashboard/DashboardHeaderSection.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Sistema de Informação de Doenças Parasitárias do Brasil"
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/dashboard/DashboardHeaderSection.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/sections/dashboard/DashboardHeaderSection.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/dashboard/DashboardHeaderSection.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-foreground",
                            children: "Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/dashboard/DashboardHeaderSection.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Visualização dos registros"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/dashboard/DashboardHeaderSection.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/dashboard/DashboardHeaderSection.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/dashboard/DashboardHeaderSection.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/dashboard/DashboardHeaderSection.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = DashboardHeaderSection;
var _c;
__turbopack_context__.k.register(_c, "DashboardHeaderSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/apiClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "ApiError",
    ()=>ApiError,
    "SHOULD_USE_MOCKS",
    ()=>SHOULD_USE_MOCKS,
    "apiRequest",
    ()=>apiRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
class ApiError extends Error {
    status;
    details;
    constructor(message, status, details){
        super(message);
        this.name = "ApiError";
        this.status = status;
        this.details = details;
    }
}
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";
const SHOULD_USE_MOCKS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_USE_API_MOCKS === "true" || API_BASE_URL.length === 0;
function buildUrl(path, params) {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    const origin = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : window.location.origin;
    const url = new URL(`${API_BASE_URL}${normalizedPath}`, origin);
    Object.entries(params ?? {}).forEach(([key, value])=>{
        if (value === undefined || value === null || value === "") return;
        if (Array.isArray(value)) {
            if (value.length > 0) url.searchParams.set(key, value.join(","));
            return;
        }
        url.searchParams.set(key, String(value));
    });
    return url.toString();
}
function unwrapEnvelope(payload) {
    if (payload && typeof payload === "object" && "data" in payload) {
        return payload.data;
    }
    return payload;
}
async function apiRequest(path, options = {}) {
    if (!API_BASE_URL) {
        throw new ApiError("NEXT_PUBLIC_API_BASE_URL nao foi configurado.", 0);
    }
    const controller = new AbortController();
    const timeout = window.setTimeout(()=>controller.abort(), options.timeoutMs ?? 15000);
    try {
        const response = await fetch(buildUrl(path, options.params), {
            ...options,
            headers: {
                Accept: "application/json",
                ...options.body ? {
                    "Content-Type": "application/json"
                } : {},
                ...options.headers
            },
            body: options.body ? JSON.stringify(options.body) : undefined,
            signal: options.signal ?? controller.signal
        });
        const text = await response.text();
        const payload = text ? JSON.parse(text) : null;
        if (!response.ok) {
            throw new ApiError(payload?.message ?? `Erro ${response.status} ao chamar ${path}.`, response.status, payload);
        }
        return unwrapEnvelope(payload);
    } finally{
        window.clearTimeout(timeout);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMockArticles",
    ()=>getMockArticles,
    "getMockHosts",
    ()=>getMockHosts,
    "getMockLocationResults",
    ()=>getMockLocationResults,
    "getMockOccurrences",
    ()=>getMockOccurrences,
    "getMockVectors",
    ()=>getMockVectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$data$2f$articles$2e$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/articles/data/articles.mock.ts [app-client] (ecmascript)");
;
function slugify(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function includesAny(value, filters) {
    if (!filters || filters.length === 0) return true;
    const normalized = slugify(value);
    return filters.some((filter)=>normalized.includes(slugify(filter)) || slugify(filter).includes(normalized));
}
function getMockOccurrences(filters = {}) {
    const features = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$data$2f$articles$2e$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockGeoJsonData"].features.filter((feature)=>{
        const properties = feature.properties;
        return includesAny(properties.disease, filters.diseases) && includesAny(properties.vector, filters.vectors) && includesAny(properties.host, filters.hosts) && (!filters.articles?.length || properties.articles.some((article)=>filters.articles?.includes(article.id))) && (!filters.search || [
            properties.city,
            properties.state,
            properties.disease,
            properties.host
        ].join(" ").toLowerCase().includes(filters.search.toLowerCase()));
    });
    return {
        type: "FeatureCollection",
        features
    };
}
function getMockArticles() {
    const articles = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$data$2f$articles$2e$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockOccurrences"].flatMap((occurrence)=>occurrence.articles);
    return Array.from(new Map(articles.map((article)=>[
            article.id,
            article
        ])).values());
}
function getMockVectors() {
    const byVector = new Map();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$data$2f$articles$2e$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockOccurrences"].forEach((occurrence)=>{
        const id = slugify(occurrence.vector);
        const current = byVector.get(id);
        byVector.set(id, {
            id,
            scientificName: occurrence.vector,
            commonName: id === "cochliomyia-hominivorax" ? "Mosca-varejeira / Mosca da bicheira" : undefined,
            description: id === "cochliomyia-hominivorax" ? "Principal causador de miiase primaria no Brasil. Deposita ovos em feridas e tecidos vivos." : undefined,
            occurrenceCount: (current?.occurrenceCount ?? 0) + 1
        });
    });
    return Array.from(byVector.values());
}
function getMockHosts() {
    const byHost = new Map();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$data$2f$articles$2e$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockOccurrences"].forEach((occurrence)=>{
        const id = slugify(occurrence.host);
        const current = byHost.get(id);
        byHost.set(id, {
            id,
            name: occurrence.host,
            commonName: occurrence.host.split(" ")[0],
            category: slugify(occurrence.hostCategory),
            count: (current?.count ?? 0) + 1,
            inCurrentMap: true
        });
    });
    return Array.from(byHost.values());
}
function getMockLocationResults(query) {
    if (query.trim().length < 3) return [];
    const normalizedQuery = query.toLowerCase();
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$data$2f$articles$2e$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockOccurrences"].filter((occurrence)=>`${occurrence.city} ${occurrence.state}`.toLowerCase().includes(normalizedQuery)).map((occurrence)=>({
            id: occurrence.id,
            label: `${occurrence.city}, ${occurrence.state}, Brasil`,
            lat: occurrence.coordinates[1],
            lon: occurrence.coordinates[0]
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/FiltersStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFiltersStore",
    ()=>useFiltersStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const STORAGE_KEY = "sidpb-filters-storage";
const initialState = {
    geographicLevel: "country",
    selectedRegion: null,
    selectedDiseases: [],
    selectedVectors: [],
    selectedHosts: [],
    visibleLayers: [
        "occurrences"
    ],
    showLegend: true
};
let state = initialState;
const listeners = new Set();
let cachedSnapshot;
function getPersistedState() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (!stored) return null;
        const parsed = JSON.parse(stored);
        return parsed.state ?? parsed;
    } catch  {
        return null;
    }
}
function persistState() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        state
    }));
}
function emit(nextState) {
    state = nextState;
    cachedSnapshot = createSnapshot();
    persistState();
    listeners.forEach((listener)=>listener());
}
function setState(partial) {
    emit({
        ...state,
        ...partial
    });
}
function ensureHydrated() {
    const persisted = getPersistedState();
    if (persisted) {
        state = {
            ...state,
            ...persisted
        };
        cachedSnapshot = createSnapshot();
    }
}
const actions = {
    setGeographicLevel: (level)=>setState({
            geographicLevel: level
        }),
    setSelectedRegion: (region)=>setState({
            selectedRegion: region
        }),
    toggleDisease: (disease)=>setState({
            selectedDiseases: state.selectedDiseases.includes(disease) ? state.selectedDiseases.filter((item)=>item !== disease) : [
                ...state.selectedDiseases,
                disease
            ]
        }),
    toggleLayer: (layerId)=>setState({
            visibleLayers: state.visibleLayers.includes(layerId) ? state.visibleLayers.filter((item)=>item !== layerId) : [
                ...state.visibleLayers,
                layerId
            ]
        }),
    setShowLegend: (show)=>setState({
            showLegend: show
        }),
    resetFilters: ()=>setState({
            selectedDiseases: [],
            selectedVectors: [],
            selectedHosts: [],
            geographicLevel: "country",
            selectedRegion: null
        })
};
function createSnapshot() {
    return {
        ...state,
        ...actions
    };
}
cachedSnapshot = createSnapshot();
const getSnapshot = ()=>cachedSnapshot;
const getServerSnapshot = getSnapshot;
function subscribe(listener) {
    ensureHydrated();
    listeners.add(listener);
    return ()=>listeners.delete(listener);
}
function useFiltersStore(selector) {
    _s();
    const snapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getSnapshot, getServerSnapshot);
    return selector ? selector(snapshot) : snapshot;
}
_s(useFiltersStore, "OyuchrIPNo1DXZH22thPVfdCTYs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0va1yrn._.js.map