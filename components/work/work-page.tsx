"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { WorkHeader } from "./work-header";
import { WorkFilters } from "./work-filters";
import { WorkGrid } from "./work-grid";
import type { Filter } from "./work-types";

const allTabProjectOrder = [
  "cradle-health",
  "nugas",
  "kelvar-dome",
  "africa-heel",
  "eight-medical",
  "spritz-brush",
  "kelvar-hydrax",
  "sense",
  "nupe-energy",
  "idia-heel",
  "kelvar-robobot",
  "jaza-battery",
  "omi",
  "equalizer",
  "cowrie-heel",
];

export default function WorkPage() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (active === "all") {
      return allTabProjectOrder
        .map((slug) => projects.find((project) => project.slug === slug))
        .filter((project): project is (typeof projects)[number] =>
          Boolean(project),
        );
    }

    return projects.filter((project) => {
      return project.tag === active;
    });
  }, [active]);

  return (
    <div className="min-h-screen pt-14.25 bg-paper">
      <WorkHeader />
      <WorkFilters active={active} changeAction={setActive} />
      <WorkGrid projects={filtered} />
    </div>
  );
}
