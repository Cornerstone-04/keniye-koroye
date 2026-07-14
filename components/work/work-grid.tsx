"use client";

import { AnimatePresence, motion, type Variants } from "motion/react";
import type { projects } from "@/lib/data";
import { WorkCard } from "./work-card";

type Project = (typeof projects)[number];

type WorkGridProps = {
  projects: Project[];
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.09,
    },
  },
};

export function WorkGrid({ projects }: WorkGridProps) {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <WorkCard key={project.num} project={project} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
