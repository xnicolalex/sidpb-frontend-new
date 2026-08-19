export interface SearchFilters {
  search?: string;
  diseases?: string[];
  articles?: string[];
  vectors?: string[];
  hosts?: string[];
  region?: string;
  geographicLevel?: string;
}

export function buildSearchParams(filters: SearchFilters) {
  const params = new URLSearchParams();

  if (filters.search)
    params.set("search", filters.search);

  filters.diseases?.forEach((disease) =>
    params.append("disease", disease)
  );

  filters.articles?.forEach((article) =>
    params.append("article", article)
  );

  filters.vectors?.forEach((vector) =>
    params.append("vector", vector)
  );

  filters.hosts?.forEach((host) =>
    params.append("host", host)
  );

  if (filters.region)
    params.set("region", filters.region);

  if (filters.geographicLevel)
    params.set("level", filters.geographicLevel);

  return params.toString();
}