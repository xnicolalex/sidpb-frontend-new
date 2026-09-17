import type {
  MapOccurrenceDto,
  MapOccurrenceSourceDto,
  Occurrence,
  OccurrenceFeature,
  OccurrenceFeatureCollection,
  OccurrenceFilters,
} from "@/entities/occurrence/occurrence.types"

export function occurrenceFeatureToOccurrence(feature: OccurrenceFeature): Occurrence {
  const [lon, lat] = feature.geometry.coordinates

  return {
    id: feature.properties.id,
    coordinates: [lon, lat],
    city: feature.properties.city,
    state: feature.properties.state,
    disease: feature.properties.disease,
    vector: feature.properties.vector,
    parasite: feature.properties.parasite,
    date: feature.properties.date,
    host: feature.properties.host,
    hostCategory: feature.properties.hostCategory,
    hostSex: feature.properties.hostSex,
    hostAge: feature.properties.hostAge,
    outcome: feature.properties.outcome,
    articles: feature.properties.articles,
  }
}

export function occurrenceCollectionToOccurrences(
  collection?: OccurrenceFeatureCollection | null
) {
  return collection?.features.map(occurrenceFeatureToOccurrence) ?? []
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function includesAny(value: string | undefined, filters?: string[]) {
  if (!filters || filters.length === 0) return true
  if (!value) return false

  const normalized = slugify(value)
  return filters.some((filter) => {
    const normalizedFilter = slugify(filter)
    return normalized.includes(normalizedFilter) || normalizedFilter.includes(normalized)
  })
}

function sourceToArticle(source: MapOccurrenceSourceDto) {
  const date = source.data ?? ""
  const year = Number(date.slice(0, 4))
  const fallbackId = source.idFonte ?? source.nomeFonte ?? source.titulo ?? "fonte-sem-id"

  return {
    id: String(fallbackId),
    title: source.titulo ?? source.nomeFonte ?? "Fonte sem titulo",
    authors: source.autores ?? [],
    year: Number.isFinite(year) ? year : 0,
    journal: source.nomeFonte ?? undefined,
    url: source.url ?? undefined,
    type: source.tipoFonte ?? "outro",
  }
}

function toNumber(value: number | string | null) {
  if (value === null || value === "") return null
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

function hasValidCoordinates(latitude: number | null, longitude: number | null) {
  return (
    latitude !== null &&
    longitude !== null &&
    latitude >= -90 &&
    latitude <= 90 &&
    longitude >= -180 &&
    longitude <= 180
  )
}

export function mapOccurrenceDtoToFeature(dto: MapOccurrenceDto): OccurrenceFeature | null {
  const latitude = toNumber(dto.latitude)
  const longitude = toNumber(dto.longitude)

  if (
    latitude === null ||
    longitude === null ||
    !hasValidCoordinates(latitude, longitude)
  ) {
    return null
  }

  const parasite = dto.parasitoNomeCientifico ?? undefined
  const vector = dto.vetorNomeCientifico ?? parasite ?? "Nao informado"

  return {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [longitude, latitude],
    },
    properties: {
      id: String(dto.idOcorrencia),
      disease: dto.doencaNomeCientifico ?? "Nao informado",
      vector,
      parasite,
      date: dto.dataOcorrencia ?? "",
      city: dto.cidade ?? "Municipio nao informado",
      state: dto.uf ?? "UF nao informada",
      host: dto.hospedeiroEspecie ?? "Nao informado",
      hostCategory: dto.categoriaHospedeiro ?? "Nao informado",
      outcome: dto.desfecho ?? undefined,
      articles: (dto.fontes ?? []).map(sourceToArticle),
    },
  }
}

export function mapOccurrenceDtosToFeatureCollection(
  occurrences: MapOccurrenceDto[]
): OccurrenceFeatureCollection {
  const features = occurrences
    .map(mapOccurrenceDtoToFeature)
    .filter((feature): feature is OccurrenceFeature => Boolean(feature))

  return {
    type: "FeatureCollection",
    features,
    totalOccurrences: occurrences.length,
    invalidCoordinatesCount: occurrences.length - features.length,
  }
}

export function filterOccurrenceCollection(
  collection: OccurrenceFeatureCollection | null,
  filters: OccurrenceFilters
): OccurrenceFeatureCollection | null {
  if (!collection) return null

  const search = filters.search?.trim().toLowerCase()
  const features = collection.features.filter((feature) => {
    const properties = feature.properties

    return (
      includesAny(properties.disease, filters.diseases) &&
      (!filters.vectors?.length ||
        includesAny(properties.vector, filters.vectors) ||
        includesAny(properties.parasite, filters.vectors)) &&
      includesAny(properties.host, filters.hosts) &&
      includesAny(properties.state, filters.states) &&
      (!filters.articles?.length ||
        properties.articles.some((article) => filters.articles?.includes(article.id))) &&
      (!search ||
        [
          properties.city,
          properties.state,
          properties.disease,
          properties.vector,
          properties.parasite,
          properties.host,
        ]
          .join(" ")
          .toLowerCase()
          .includes(search))
    )
  })

  return {
    ...collection,
    features,
  }
}
