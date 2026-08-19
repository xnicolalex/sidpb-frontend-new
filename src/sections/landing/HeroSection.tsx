"use client";

import { useRouter } from "next/navigation";

import { SearchForm } from "@/modules/search/components/SearchForm";
import { AdvancedSearchToggle } from "@/modules/search/components/AdvancedSearchToggle";
import { useSearchNavigation } from "@/modules/search/hooks/useDashboardSearch";
import { buildSearchParams } from "@/modules/search/utils/buildSearchParams";

export function HeroSection() {

const { navigateToSearch } = useSearchNavigation();
  
  return (
    <section className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-14">

        {/* Logo */}

        <img
          src="/sidpb/logo.svg"
          alt="Logo"
          width={250}
          height={250}
        />

        {/* Titulo */}
        <p
          className="
            mt-3
            text-center
            text-[22px]
            font-Merriweather
            uppercase
            tracking-[0.08em]
            leading-[1.45]
            text-neutral-500
          "
        >
          <span className="block">
            Sistema de Informação de
          </span>

          <span className="block">
            Doenças Parasitárias no Brasil
          </span>
        </p>


        {/* Search */}

        <div className="mt-10 w-full max-w-4xl">

          <SearchForm
              onSearch={navigateToSearch}
          />

          <AdvancedSearchToggle />

        </div>

      </div>
    </section>

    
  );
}
