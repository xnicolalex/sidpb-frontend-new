"use client";

import { SearchForm } from "@/modules/search/components/SearchForm";

interface DashboardSearchBarProps {
  initialValue?: string;
  onSearch: (value: string) => void;
}

export function DashboardSearchBar({
  initialValue,
  onSearch,
}: DashboardSearchBarProps) {
  return (
    <div className="border-b border-border bg-background px-4 py-3">
      <SearchForm
        initialValue={initialValue}
        placeholder="Pesquise por doença, parasito, hospedeiro..."
        onSearch={onSearch}
      />
    </div>
  );
}