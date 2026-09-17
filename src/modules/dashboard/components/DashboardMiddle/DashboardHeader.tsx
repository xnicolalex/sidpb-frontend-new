"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";

import { SearchForm } from "@/modules/search/components/SearchForm";

export function DashboardHeader() {
  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("")
  );

  function handleSearch(value: string) {
    const nextSearch = value.trim();
    void setSearch(nextSearch.length > 0 ? nextSearch : null);
  }

  return (
    <header className="grid h-16 grid-cols-[18rem_minmax(0,1fr)_24rem] items-center border-b border-border bg-background">
      <div className="flex items-center px-6">
        <Image
          src="/sidpb/logo.svg"
          alt="SIDPB"
          width={120}
          height={42}
          priority
        />
      </div>

      <div className="flex justify-center px-6">
        <div className="w-full max-w-3xl">
          <SearchForm
            initialValue={search}
            onSearch={handleSearch}
            placeholder="Pesquise por doença, parasito, hospedeiro..."
          />
        </div>
      </div>

      <div className="flex justify-end px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para início
        </Link>
      </div>
    </header>
  );
}