"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import { useSearchNavigation } from "@/modules/search/hooks/useDashboardSearch";
import { SearchForm } from "@/modules/search/components/SearchForm";

export function DashboardHeader() {
  const { navigateToSearch } = useSearchNavigation();
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? "";

  function handleSearch(value: string) {
    if (!value.trim()) {
      router.push("/sidpb/dashboard");
      return;
    }

    router.push(
      `/sidpb/dashboard?search=${encodeURIComponent(value)}`
    );
  }

  return (
    <header className="flex h-16 items-center border-b border-border bg-background px-6">
      <div className="mr-8 flex shrink-0 items-center">
        <Image
          src="/sidpb/logo.svg"
          alt="SIDPB"
          width={120}
          height={42}
          priority
        />
      </div>

      <div className="w-full max-w-3xl">
        <SearchForm
          initialValue={search}
          onSearch={navigateToSearch}
          placeholder="Pesquise por doença, parasito, hospedeiro..."
        />
      </div>
    </header>
  );
}