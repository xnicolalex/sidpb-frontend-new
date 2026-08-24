import type { Occurrence } from "@/entities/occurrence/occurrence.types";

export function hasSameCoordinates(occurrences: Occurrence[]) {
  const coordinates = new Set(
    occurrences.map((occurrence) => occurrence.coordinates.join(","))
  );

  return coordinates.size === 1;
}
