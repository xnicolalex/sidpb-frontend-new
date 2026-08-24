import { create } from "zustand";
import { persist } from "zustand/middleware";

export type GeographicLevel = "country" | "state" | "city";

interface FiltersState {
  geographicLevel: GeographicLevel;
  selectedRegion: string | null;

  selectedDiseases: string[];
  selectedVectors: string[];
  selectedHosts: string[];

  visibleLayers: string[];
  showLegend: boolean;

  setGeographicLevel: (level: GeographicLevel) => void;
  setSelectedRegion: (region: string | null) => void;

  setSelectedDiseases: (diseases: string[]) => void;
  setSelectedVectors: (vectors: string[]) => void;
  setSelectedHosts: (hosts: string[]) => void;

  toggleDisease: (disease: string) => void;
  toggleVector: (vector: string) => void;
  toggleHost: (host: string) => void;

  toggleLayer: (layerId: string) => void;

  setShowLegend: (show: boolean) => void;

  resetFilters: () => void;
}

const STORAGE_KEY = "sidpb-filters-storage";

type PersistedState = Pick<
  FiltersState,
  | "geographicLevel"
  | "selectedRegion"
  | "selectedDiseases"
  | "selectedVectors"
  | "selectedHosts"
  | "visibleLayers"
  | "showLegend"
>;

const initialState: PersistedState = {
  geographicLevel: "country",
  selectedRegion: null,

  selectedDiseases: [],
  selectedVectors: [],
  selectedHosts: [],

  visibleLayers: ["occurrences"],

  showLegend: true,
};

function toggleArrayItem(list: string[], value: string) {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

export const useFiltersStore = create<FiltersState>()(
  persist(
    (set) => ({
      ...initialState,

      setGeographicLevel: (level) =>
        set({
          geographicLevel: level,
        }),

      setSelectedRegion: (region) =>
        set({
          selectedRegion: region,
        }),

      setSelectedDiseases: (selectedDiseases) =>
        set({
          selectedDiseases,
        }),

      setSelectedVectors: (selectedVectors) =>
        set({
          selectedVectors,
        }),

      setSelectedHosts: (selectedHosts) =>
        set({
          selectedHosts,
        }),

      toggleDisease: (disease) =>
        set((state) => ({
          selectedDiseases: toggleArrayItem(
            state.selectedDiseases,
            disease
          ),
        })),

      toggleVector: (vector) =>
        set((state) => ({
          selectedVectors: toggleArrayItem(
            state.selectedVectors,
            vector
          ),
        })),

      toggleHost: (host) =>
        set((state) => ({
          selectedHosts: toggleArrayItem(
            state.selectedHosts,
            host
          ),
        })),

      toggleLayer: (layerId) =>
        set((state) => ({
          visibleLayers: toggleArrayItem(
            state.visibleLayers,
            layerId
          ),
        })),

      setShowLegend: (showLegend) =>
        set({
          showLegend,
        }),

      resetFilters: () =>
        set({
          ...initialState,
        }),
    }),
    {
      name: STORAGE_KEY,

      partialize: (state) => ({
        geographicLevel: state.geographicLevel,
        selectedRegion: state.selectedRegion,

        selectedDiseases: state.selectedDiseases,
        selectedVectors: state.selectedVectors,
        selectedHosts: state.selectedHosts,

        visibleLayers: state.visibleLayers,

        showLegend: state.showLegend,
      }),
    }
  )
);