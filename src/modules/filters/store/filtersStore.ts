import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FiltersState {
  selectedDiseases: string[];
  selectedVectors: string[];
  selectedHosts: string[];
  selectedStates: string[];

  setSelectedDiseases(diseases: string[]): void;
  setSelectedVectors(vectors: string[]): void;
  setSelectedHosts(hosts: string[]): void;
  setSelectedStates(states: string[]): void;

  toggleDisease(disease: string): void;
  toggleVector(vector: string): void;
  toggleHost(host: string): void;
  toggleState(state: string): void;

  resetFilters(): void;
  clearFilters(): void;
}

const STORAGE_KEY = "sidpb-filters-storage";

const initialState = {
  selectedDiseases: [],
  selectedVectors: [],
  selectedHosts: [],
  selectedStates: [],
};

function toggleArrayItem(
  list: string[],
  value: string
) {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

export const useFiltersStore =
  create<FiltersState>()(
    persist(
      (set) => ({
        ...initialState,

        setSelectedDiseases: (
          selectedDiseases
        ) =>
          set({
            selectedDiseases,
          }),

        setSelectedVectors: (
          selectedVectors
        ) =>
          set({
            selectedVectors,
          }),

        setSelectedHosts: (
          selectedHosts
        ) =>
          set({
            selectedHosts,
          }),

        setSelectedStates: (
          selectedStates
        ) =>
          set({
            selectedStates,
          }),

        toggleDisease: (disease) =>
          set((state) => ({
            selectedDiseases:
              toggleArrayItem(
                state.selectedDiseases,
                disease
              ),
          })),

        toggleVector: (vector) =>
          set((state) => ({
            selectedVectors:
              toggleArrayItem(
                state.selectedVectors,
                vector
              ),
          })),

        toggleHost: (host) =>
          set((state) => ({
            selectedHosts:
              toggleArrayItem(
                state.selectedHosts,
                host
              ),
          })),

        toggleState: (stateValue) =>
          set((state) => ({
            selectedStates:
              toggleArrayItem(
                state.selectedStates,
                stateValue
              ),
          })),

        resetFilters: () =>
          set({
            ...initialState,
          }),

        clearFilters: () =>
          set({
            ...initialState,
          }),
      }),
      {
        name: STORAGE_KEY,

        partialize: (state) => ({
          selectedDiseases:
            state.selectedDiseases,
          selectedVectors:
            state.selectedVectors,
          selectedHosts:
            state.selectedHosts,
          selectedStates:
            state.selectedStates,
        }),
      }
    )
  );
