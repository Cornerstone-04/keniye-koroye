"use client";

import { AnimatePresence } from "motion/react";
import type { projects } from "@/lib/data";
import { WorkCard } from "./work-card";

type Project = (typeof projects)[number];

type WorkGridProps = {
  projects: Project[];
};

export function WorkGrid({ projects }: WorkGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <WorkCard key={project.num} project={project} />
        ))}
      </AnimatePresence>
    </div>
  );
}
