"use client"

import {
  filterOccurrenceCollection,
  mapOccurrenceDtosToFeatureCollection,
} from "@/entities/occurrence/occurrence.mappers"
import type {
  MapOccurrenceDto,
  OccurrenceFeatureCollection,
  OccurrenceFilters,
} from "@/entities/occurrence/occurrence.types"
import { ApiError, apiRequest } from "@/services/apiClient"

export async function fetchDashboardOccurrences(signal?: AbortSignal) {
  try {
    const occurrences = await apiRequest<MapOccurrenceDto[]>("/api/mapa/ocorrencias", {
      signal,
    })

    return mapOccurrenceDtosToFeatureCollection(occurrences)
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw error
    }

    console.error("Erro tecnico ao carregar ocorrencias do mapa.", error)

    if (error instanceof ApiError && error.status > 0) {
      throw new Error(`Nao foi possivel carregar as ocorrencias da API. HTTP ${error.status}.`)
    }

    throw new Error("Nao foi possivel conectar a API de ocorrencias.")
  }
}

export function applyOccurrenceFilters(
  collection: OccurrenceFeatureCollection | null,
  filters: OccurrenceFilters
) {
  return filterOccurrenceCollection(collection, filters)
}
