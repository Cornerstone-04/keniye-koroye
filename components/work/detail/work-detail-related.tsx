"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/lib/data";
import { WorkPills } from "../work-pills";
import { WorkDetailSectionHeader } from "./work-detail-blocks";
import { workDetailEase, workDetailViewport } from "./work-detail-shared";

export function WorkDetailRelated({ projects }: { projects: Project[] }) {
  if (!projects.length) return null;

  return (
    <section className="border-b border-rule">
      <WorkDetailSectionHeader label="Related Work" />
      <div className="grid grid-cols-1 md:grid-cols-2">
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
              className="group block h-full border-r border-b border-rule p-6 no-underline transition-colors ease-linear hover:bg-cream"
            >
              <p className="font-mono text-[0.58rem] tracking-[0.16em] text-muted uppercase">
                {item.tagLabel}
              </p>
              <h2 className="my-4 font-playfair text-[1.2rem] leading-tight font-bold text-ink transition-colors ease-linear group-hover:text-accent">
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
