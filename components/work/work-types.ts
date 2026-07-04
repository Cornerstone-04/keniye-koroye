import type { ProjectTag } from "@/lib/data";

export type Filter = "all" | ProjectTag;

export const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "art", label: "Art" },
  { key: "fashion", label: "Fashion" },
  { key: "hardware", label: "Hardware" },
  { key: "product", label: "Product" },
  { key: "software", label: "Software" },
  { key: "tech", label: "Tech" },
];
