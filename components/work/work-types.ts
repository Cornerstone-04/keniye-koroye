import type { ProjectTag } from "@/lib/data";

export type Filter = "all" | ProjectTag;

export const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "hardware", label: "Hardware" },
  { key: "software", label: "Software" },
  { key: "product", label: "Product" },
  { key: "art", label: "Art" },
  { key: "tech", label: "Tech" },
  { key: "fashion", label: "Fashion" },
];
