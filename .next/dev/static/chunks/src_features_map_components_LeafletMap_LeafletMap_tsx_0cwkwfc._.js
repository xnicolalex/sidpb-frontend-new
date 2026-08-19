(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/map/components/LeafletMap/LeafletMap.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_1t1vpjg._.js",
  "static/chunks/src_1-0pr3w._.js",
  {
    "path": "static/chunks/node_modules_0dth3t5._.css",
    "included": [
      "[project]/node_modules/leaflet/dist/leaflet.css [app-client] (css)",
      "[project]/node_modules/leaflet.markercluster/dist/MarkerCluster.css [app-client] (css)",
      "[project]/node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css [app-client] (css)"
    ],
    "moduleChunks": [
      "static/chunks/node_modules_leaflet_dist_leaflet_css_1igg3k2._.single.css",
      "static/chunks/node_modules_leaflet_markercluster_dist_MarkerCluster_css_1igg3k2._.single.css",
      "static/chunks/node_modules_leaflet_markercluster_dist_MarkerCluster_Default_css_1igg3k2._.single.css"
    ]
  }
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/features/map/components/LeafletMap/LeafletMap.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);