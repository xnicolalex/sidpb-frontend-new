import type { SearchFilters } from "./buildSearchParams";

export function parseSearchParams(
  params: URLSearchParams
): SearchFilters {
  return {
    search: params.get("search") ?? undefined,

    diseases: params.getAll("disease"),

    articles: params.getAll("article"),

    vectors: params.getAll("vector"),

    hosts: params.getAll("host"),

    region: params.get("region") ?? undefined,

    geographicLevel: params.get("level") ?? undefined,
  };
}