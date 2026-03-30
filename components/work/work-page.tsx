"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { WorkHeader } from "./work-header";
import { WorkFilters } from "./work-filters";
import { WorkGrid } from "./work-grid";
import type { Filter } from "./work-types";

export default function WorkPage() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      return active === "all" || project.tag === active;
    });
  }, [active]);

  return (
    <div className="min-h-screen pt-14.25 bg-paper">
      <WorkHeader />
      <WorkFilters active={active} changeAction={setActive} />
      <WorkGrid projects={filtered} totalProjects={projects.length} />
    </div>
  );
}
