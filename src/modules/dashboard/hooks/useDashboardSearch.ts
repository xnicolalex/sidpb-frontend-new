"use client";

import { parseAsString, useQueryState } from "nuqs";

export function useDashboardSearch() {
  const [, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("")
  );

  function handleSearch(value: string) {
    const nextSearch = value.trim();
    void setSearch(nextSearch.length > 0 ? nextSearch : null);
  }

  return {
    handleSearch,
  };
}
