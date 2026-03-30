"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { projects } from "@/lib/data";
import { WorkOutcomes } from "./work-outcomes";
import { WorkPills } from "./work-pills";

type Project = (typeof projects)[number];

type WorkCardProps = {
  project: Project;
  totalProjects: number;
};

export function WorkCard({ project, totalProjects }: WorkCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
      className="overflow-hidden border-r border-b border-rule"
      data-hover
    >
      <div
        className="relative overflow-hidden aspect-4/3"
        style={{ background: project.bg }}
      >
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center font-black select-none font-playfair text-[5rem] text-white/5">
            {project.num}
          </div>
        )}

        <span className="absolute top-3 left-3 z-10 text-[0.58rem] tracking-[0.15em] uppercase text-white/35 font-mono">
          {project.num} / 0{totalProjects}
        </span>

        <span className="absolute top-3 right-3 z-10 px-2 py-[0.2rem] text-[0.55rem] tracking-[0.15em] uppercase text-white bg-accent font-mono">
          {project.tagLabel}
        </span>
      </div>

      <div className="p-5 md:p-6">
        <div className="text-[0.6rem] tracking-[0.15em] uppercase mb-1 text-muted font-mono">
          {project.year} · {project.client}
        </div>

        <h3 className="font-bold text-[1rem] md:text-[1.1rem] leading-snug mb-2 font-playfair">
          {project.title}
        </h3>

        <p className="text-[0.72rem] leading-[1.7] mb-4 text-[#3a3730]">
          {project.desc}
        </p>

        {project.outcomes ? <WorkOutcomes outcomes={project.outcomes} /> : null}

        <WorkPills pills={project.pills} />
      </div>
    </motion.article>
  );
}
