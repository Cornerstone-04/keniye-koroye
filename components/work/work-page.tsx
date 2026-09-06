"use client";

import { useEffect, useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { WorkHeader } from "./work-header";
import { WorkFilters } from "./work-filters";
import { WorkGrid } from "./work-grid";
import type { Filter } from "./work-types";

const projectList = [
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
  "bunka-shelf",
  "bunka-totem",
  "bunka-plinth",
];

function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function WorkPage() {
  const [active, setActive] = useState<Filter>("all");
  const [allTabProjectOrder, setAllTabProjectOrder] = useState(projectList);

  useEffect(() => {
    setAllTabProjectOrder(shuffle([...projectList]));
  }, []);

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
  }, [active, allTabProjectOrder]);

  return (
    <div className="min-h-screen bg-paper pt-14.25">
      <WorkHeader />
      <WorkFilters active={active} changeAction={setActive} />
      <WorkGrid projects={filtered} />
    </div>
  );
}
