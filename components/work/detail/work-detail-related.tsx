"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/lib/data";
import { WorkPills } from "../work-pills";
import { WorkDetailSectionHeader } from "./work-detail-blocks";
import { workDetailEase, workDetailViewport } from "./work-detail-shared";

export function WorkDetailRelated({
  projects,
}: {
  projects: Project[];
}) {
  if (!projects.length) return null;

  return (
    <section className="border-b border-rule">
      <WorkDetailSectionHeader label="Related Work" />
      <div className="grid grid-cols-1 md:grid-cols-3">
        {projects.map((item, index) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={workDetailViewport}
            transition={{
              duration: 0.45,
              delay: index * 0.05,
              ease: workDetailEase,
            }}
          >
            <Link
              href={`/work/${item.slug}`}
              className="group block h-full border-b border-r border-rule p-6 no-underline transition-colors hover:bg-cream"
            >
              <p className="text-[0.58rem] tracking-[0.16em] uppercase text-muted font-mono">
                {item.tagLabel}
              </p>
              <h2 className="my-4 font-playfair text-[1.2rem] font-bold leading-tight text-ink transition-colors group-hover:text-accent">
                {item.title}
              </h2>
              <WorkPills pills={item.pills} />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
