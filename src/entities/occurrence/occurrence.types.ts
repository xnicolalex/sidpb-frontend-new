import type { Article } from "@/entities/article/article.types"

export interface Occurrence {
  id: string
  coordinates: [number, number]
  city: string
  state: string
  disease: string
  vector: string
  parasite?: string
  date: string
  host: string
  hostCategory: string
  hostSex?: string
  hostAge?: string
  outcome?: string
  articles: Article[]
}

export interface OccurrenceProperties {
  id: string
  disease: string
  vector: string
  parasite?: string
  date: string
  city: string
  state: string
  host: string
  hostCategory: string
  hostSex?: string
  hostAge?: string
  outcome?: string
  articles: Article[]
}

export interface OccurrenceFeature {
  type: "Feature"
  geometry: {
    type: "Point"
    coordinates: [number, number]
  }
  properties: OccurrenceProperties
}

export interface OccurrenceFeatureCollection {
  type: "FeatureCollection"
  features: OccurrenceFeature[]
  totalOccurrences?: number
  invalidCoordinatesCount?: number
}

export interface OccurrenceFilters {
  diseases?: string[]
  articles?: string[]
  vectors?: string[]
  hosts?: string[]
  states?: string[]
  geographicLevel?: "country" | "state" | "city"
  region?: string | null
  search?: string
}

export interface MapOccurrenceSourceDto {
  idFonte: number | null
  nomeFonte: string | null
  tipoFonte: string | null
  autores: string[] | null
  titulo: string | null
  url: string | null
  data: string | null
}

export interface MapOccurrenceDto {
  idOcorrencia: number
  idLocal: number | null
  cidade: string | null
  uf: string | null
  bairro: string | null
  latitude: number | string | null
  longitude: number | string | null
  doencaNomeCientifico: string | null
  hospedeiroEspecie: string | null
  categoriaHospedeiro: string | null
  parasitoNomeCientifico: string | null
  vetorNomeCientifico: string | null
  dataOcorrencia: string | null
  desfecho: string | null
  fontes: MapOccurrenceSourceDto[] | null
}
