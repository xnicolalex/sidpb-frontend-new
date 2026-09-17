"use client";

import type { DashboardFilterOptions } from "../../hooks/useDashboardFilterOptions";

import { useFiltersStore } from "@/modules/filters/store/filtersStore";

import { FilterOption } from "./FilterOption";
import { FilterSection } from "./FilterSection";

interface LeftSidebarFiltersProps {
  options: DashboardFilterOptions;
}

export function LeftSidebarFilters({
  options,
}: LeftSidebarFiltersProps) {
  const selectedDiseases = useFiltersStore(
    (state) => state.selectedDiseases
  );

  const selectedVectors = useFiltersStore(
    (state) => state.selectedVectors
  );

  const selectedHosts = useFiltersStore(
    (state) => state.selectedHosts
  );

  const selectedStates = useFiltersStore(
    (state) => state.selectedStates
  );

  const toggleDisease = useFiltersStore(
    (state) => state.toggleDisease
  );

  const toggleVector = useFiltersStore(
    (state) => state.toggleVector
  );

  const toggleHost = useFiltersStore(
    (state) => state.toggleHost
  );

  const toggleState = useFiltersStore(
    (state) => state.toggleState
  );

  const clearFilters = useFiltersStore(
    (state) => state.clearFilters
  );

  const sections = [
    {
      key: "diseases" as const,
      title: "Doenças",
      options: options.diseases,
      selected: selectedDiseases,
      toggle: toggleDisease,
    },
    {
      key: "vectors" as const,
      title: "Vetores",
      options: options.vectors,
      selected: selectedVectors,
      toggle: toggleVector,
    },
    {
      key: "hosts" as const,
      title: "Hospedeiros",
      options: options.hosts,
      selected: selectedHosts,
      toggle: toggleHost,
    },
    {
      key: "states" as const,
      title: "Estados",
      options: options.states,
      selected: selectedStates,
      toggle: toggleState,
    },
  ];

  const hasActiveFilters =
    selectedDiseases.length > 0 ||
    selectedVectors.length > 0 ||
    selectedHosts.length > 0 ||
    selectedStates.length > 0;

  return (
    <div>
      <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2">
        <h2 className="text-sm font-semibold">
          Filtros
        </h2>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Limpar
          </button>
        )}
      </div>

      {sections.map((section, index) => (
        <FilterSection
          key={section.key}
          title={section.title}
          defaultOpen={index === 0}
        >
          {section.options.length === 0 ? (
            <p className="py-1 text-xs text-muted-foreground">
              Nenhuma opção disponível.
            </p>
          ) : (
            section.options.map((option) => (
              <FilterOption
                key={option.label}
                label={option.label}
                count={option.count}
                checked={section.selected.includes(
                  option.label
                )}
                onChange={() =>
                  section.toggle(option.label)
                }
              />
            ))
          )}
        </FilterSection>
      ))}
    </div>
  );
}