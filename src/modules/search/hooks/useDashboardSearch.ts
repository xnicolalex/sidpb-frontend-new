"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

export function useSearchNavigation() {
  const router = useRouter();

  const navigateToSearch = useCallback((search: string) => {
    const value = search.trim();

    if (!value) {
      router.push("/dashboard");
      return;
    }

    router.push(
      `/dashboard?search=${encodeURIComponent(value)}`
    );
  }, [router]);

  return {
    navigateToSearch,
  };
}