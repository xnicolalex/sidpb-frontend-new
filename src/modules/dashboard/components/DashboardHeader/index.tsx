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
    <header className="grid h-16 grid-cols-[1fr_auto_1fr] items-center border-b border-border bg-background px-6">
      <div className="justify-self-start">
        <Image
          src="/sidpb/logo.svg"
          alt="SIDPB"
          width={120}
          height={42}
          priority
        />
      </div>

      <div className="w-[min(48rem,50vw)] justify-self-center">
        <SearchForm
          initialValue={search}
          onSearch={handleSearch}
          placeholder="Pesquise por doença, parasito, hospedeiro..."
        />
      </div>

      <div className="justify-self-end">
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