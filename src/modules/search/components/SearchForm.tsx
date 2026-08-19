"use client";

import { useEffect, useState } from "react";

import { SearchInput } from "./SearchInput";
import { SearchButton } from "./SearchButton";

interface SearchFormProps {
  initialValue?: string;
  placeholder?: string;
  onSearch: (value: string) => void;
}

export function SearchForm({
  initialValue = "",
  placeholder,
  onSearch,
}: SearchFormProps) {
  const [search, setSearch] = useState(initialValue);

  useEffect(() => {
    setSearch(initialValue);
  }, [initialValue]);

  function submit() {
    onSearch(search.trim());
  }

  return (
    <div className="flex w-full">
      <SearchInput
        value={search}
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submit();
          }
        }}
      />

      <SearchButton onClick={submit} />
    </div>
  );
}