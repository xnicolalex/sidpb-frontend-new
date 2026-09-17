"use client"

import { useEffect, useMemo } from "react"
import type {
  OccurrenceFeatureCollection,
  OccurrenceFilters,
} from "@/entities/occurrence/occurrence.types"
import { useFiltersStore } from "@/modules/filters/store/filtersStore"
import { useApiQuery } from "@/hooks/useApiQuery"
import {
  applyOccurrenceFilters,
  fetchDashboardOccurrences,
} from "@/modules/occurrences/services/occurrences.service"

interface UseOccurrencesOptions {
  filters?: OccurrenceFilters
  enabled?: boolean
}

export function useOccurrences(options: UseOccurrencesOptions = {}) {
  const storeFilters = useFiltersStore()
  const setSelectedDiseases = useFiltersStore((state) => state.setSelectedDiseases)
  const setSelectedVectors = useFiltersStore((state) => state.setSelectedVectors)
  const setSelectedHosts = useFiltersStore((state) => state.setSelectedHosts)
  const setSelectedStates = useFiltersStore((state) => state.setSelectedStates)

  const filters = useMemo<OccurrenceFilters>(
    () => ({
      diseases: storeFilters.selectedDiseases,
      vectors: storeFilters.selectedVectors,
      hosts: storeFilters.selectedHosts,
      states: storeFilters.selectedStates,
      ...options.filters,
    }),
    [
      options.filters?.articles,
      options.filters?.diseases,
      options.filters?.hosts,
      options.filters?.search,
      options.filters?.states,
      options.filters?.vectors,

      storeFilters.selectedDiseases,
      storeFilters.selectedHosts,
      storeFilters.selectedVectors,
      storeFilters.selectedStates,
    ]
  )

  const query = useApiQuery<OccurrenceFeatureCollection>(
    ["dashboard-occurrences"],
    fetchDashboardOccurrences,
    {
      enabled: options.enabled ?? true,
    }
  )

  useEffect(() => {
    if (!query.data) return

    const values = query.data.features.reduce(
      (accumulator, feature) => {
        accumulator.diseases.add(feature.properties.disease)
        accumulator.vectors.add(feature.properties.vector)
        if (feature.properties.parasite) {
          accumulator.vectors.add(feature.properties.parasite)
        }
        accumulator.hosts.add(feature.properties.host)
        accumulator.states.add(feature.properties.state)
        return accumulator
      },
      {
        diseases: new Set<string>(),
        vectors: new Set<string>(),
        hosts: new Set<string>(),
        states: new Set<string>(),
      }
    )

    const filterKnownValues = (selected: string[], knownValues: Set<string>) =>
      selected.filter((value) => knownValues.has(value))

    const nextDiseases = filterKnownValues(storeFilters.selectedDiseases, values.diseases)
    const nextVectors = filterKnownValues(storeFilters.selectedVectors, values.vectors)
    const nextHosts = filterKnownValues(storeFilters.selectedHosts, values.hosts)
    const nextStates = filterKnownValues(storeFilters.selectedStates, values.states)

    if (nextDiseases.length !== storeFilters.selectedDiseases.length) {
      setSelectedDiseases(nextDiseases)
    }

    if (nextVectors.length !== storeFilters.selectedVectors.length) {
      setSelectedVectors(nextVectors)
    }

    if (nextHosts.length !== storeFilters.selectedHosts.length) {
      setSelectedHosts(nextHosts)
    }

    if (nextStates.length !== storeFilters.selectedStates.length) {
      setSelectedStates(nextStates)
    }
  }, [
    query.data,
    setSelectedDiseases,
    setSelectedHosts,
    setSelectedStates,
    setSelectedVectors,
    storeFilters.selectedDiseases,
    storeFilters.selectedHosts,
    storeFilters.selectedStates,
    storeFilters.selectedVectors,
  ])

  const filteredData = useMemo(
    () => applyOccurrenceFilters(query.data, filters),
    [query.data, filters]
  )

  return {
    ...query,
    data: filteredData,
  }
}
