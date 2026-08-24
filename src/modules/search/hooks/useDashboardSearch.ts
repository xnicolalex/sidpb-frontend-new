"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { createSerializer, parseAsString } from "nuqs";

const serializeSearchParams = createSerializer({
  search: parseAsString,
});

export function useSearchNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  const navigateToSearch = useCallback(
    (search: string) => {
      const value = search.trim();
      const params = serializeSearchParams({
        search: value.length > 0 ? value : null,
      });

      router.push(`${pathname === "/dashboard" ? pathname : "/dashboard"}${params}`);
    },
    [pathname, router]
  );

  return {
    navigateToSearch,
  };
}
