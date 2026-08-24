"use client";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

interface UseApiQueryOptions<T> {
  enabled?: boolean;
  fallbackData?: T | (() => T);
  keepPreviousData?: boolean;
}

interface UseApiQueryResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

function resolveFallback<T>(fallback?: T | (() => T)) {
  if (typeof fallback === "function") {
    return (fallback as () => T)();
  }

  return fallback;
}

export function useApiQuery<T>(
  queryKey: readonly unknown[],
  queryFn: (signal: AbortSignal) => Promise<T>,
  options: UseApiQueryOptions<T> = {}
): UseApiQueryResult<T> {
  const { enabled = true, fallbackData, keepPreviousData = true } = options;
  const fallback = resolveFallback(fallbackData);

  const queryOptions: UseQueryOptions<T, Error, T, readonly unknown[]> = {
    queryKey,
    queryFn: ({ signal }) => queryFn(signal),
    enabled,
    placeholderData: (previousData) =>
      keepPreviousData ? previousData ?? fallback : fallback,
  } as UseQueryOptions<T, Error, T, readonly unknown[]>;

  const query = useQuery<T, Error, T, readonly unknown[]>(queryOptions);

  return {
    data: query.data ?? null,
    isLoading: query.isFetching,
    error: query.error,
    refetch: async () => {
      await query.refetch();
    },
  };
}
