// DRAFT: advocate must review before publishing
import { CourtData } from "./types";
import { delhiHighCourtData } from "./delhi-high-court";
import { supremeCourtData } from "./supreme-court";
import { delhiDistrictCourtsData } from "./delhi-district-courts";

export * from "./types";
export * from "./delhi-high-court";
export * from "./supreme-court";
export * from "./delhi-district-courts";

export const courtsDataList: CourtData[] = [
  delhiHighCourtData,
  supremeCourtData,
  delhiDistrictCourtsData,
];

export const courtsData = courtsDataList;

export function getCourtData(slug: string): CourtData | null {
  const found = courtsDataList.find((c) => c.slug === slug);
  return found || null;
}
