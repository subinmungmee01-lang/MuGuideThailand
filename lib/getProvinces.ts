import { temples } from "@/data/temples";

export function getProvincesByRegion(region: string) {
  const provinces = temples
    .filter((t) => t.region === region)
    .map((t) => t.province);

  return [...new Set(provinces)];
}