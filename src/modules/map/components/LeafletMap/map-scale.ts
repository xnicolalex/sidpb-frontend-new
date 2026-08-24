export const SCALE_BAR_WIDTH_PX = 120;

export function metersPerPixel(latitude: number, zoom: number) {
  return (40075016.686 * Math.cos((latitude * Math.PI) / 180)) / Math.pow(2, zoom + 8);
}

export function formatScaleKm(value: number) {
  if (value >= 100) return Math.round(value / 10) * 10;
  if (value >= 10) return Math.round(value);

  return Number(value.toFixed(1));
}
