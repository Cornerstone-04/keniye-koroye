"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/lib/data";

type WorkDetailPageProps = {
  project: Project;
};

export function WorkDetailPage({ project }: WorkDetailPageProps) {
  return (
    <div className="min-h-screen pt-14.25 bg-paper">
      <section className="px-6 md:px-12 pt-10 pb-8 border-b-[3px] border-double border-ink">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <Link
            href="/work"
            className="text-[0.6rem] tracking-[0.25em] uppercase text-accent font-mono no-underline"
          >
            Back to Work
          </Link>
          <span className="flex-1 h-px bg-rule" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="grid gap-8 md:grid-cols-[1.4fr_0.8fr]"
        >
          <div>
            <div className="mb-3 text-[0.62rem] tracking-[0.18em] uppercase text-muted font-mono">
              {project.year} · {project.client}
            </div>

            <h1
              className="font-black leading-[0.95] font-playfair -tracking-[0.02em]"
              style={{ fontSize: "clamp(2.2rem, 8vw, 5.5rem)" }}
            >
              {project.title}
            </h1>

            {project.desc ? (
              <p className="mt-4 max-w-[60ch] text-[0.95rem] md:text-[1rem] leading-[1.8] text-[#3a3730] font-fraunces">
                {project.desc}
              </p>
            ) : null}
          </div>

          <div className="md:pt-2">
            <div className="space-y-4 border border-rule p-5">
              <div>
                <div className="text-[0.58rem] tracking-[0.18em] uppercase text-muted font-mono">
                  Category
                </div>
                <div className="mt-1 text-[0.95rem] font-fraunces">
                  {project.tagLabel}
                </div>
              </div>

              <div>
                <div className="text-[0.58rem] tracking-[0.18em] uppercase text-muted font-mono">
                  Project No.
                </div>
                <div className="mt-1 text-[0.95rem] font-fraunces">
                  {project.num}
                </div>
              </div>

              <div>
                <div className="text-[0.58rem] tracking-[0.18em] uppercase text-muted font-mono">
                  Focus
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.pills.map((pill) => (
                    <span
                      key={pill}
                      className="px-2 py-[0.2rem] text-[0.58rem] tracking-[0.12em] uppercase border border-rule text-muted font-mono"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1.45fr_0.95fr]">
        <div className="border-b lg:border-b-0 lg:border-r border-rule">
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-video"
            style={{ background: project.bg }}
          >
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center font-playfair text-[6rem] text-white/10">
                {project.num}
              </div>
            )}

            <span className="absolute top-4 left-4 text-[0.58rem] tracking-[0.15em] uppercase text-white/40 font-mono">
              {project.num}
            </span>
          </motion.div>
        </div>

        <div className="px-6 md:px-12 py-8 md:py-10">
          <div className="space-y-8">
            <DetailBlock
              label="Overview"
              content={project.overview}
              delay={0.15}
            />
            <DetailBlock
              label="Challenge"
              content={project.challenge}
              delay={0.22}
            />
            <DetailBlock
              label="Solution"
              content={project.solution}
              delay={0.29}
            />
            <DetailBlock label="Impact" content={project.impact} delay={0.36} />

            {project.outcomes?.length ? (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.42 }}
                className="pt-6 border-t border-rule"
              >
                <div className="text-[0.62rem] tracking-[0.2em] uppercase mb-5 text-accent font-mono">
                  Outcomes
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {project.outcomes.map((outcome) => (
                    <div
                      key={`${outcome.pct}-${outcome.label}`}
                      className="border border-rule px-3 py-4 text-center"
                    >
                      <div className="font-black text-[1.15rem] font-playfair">
                        {outcome.pct}
                      </div>
                      <div className="mt-1 text-[0.55rem] leading-tight text-muted font-mono">
                        {outcome.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}

type DetailBlockProps = {
  label: string;
  content?: string;
  delay?: number;
};

function DetailBlock({ label, content, delay = 0 }: DetailBlockProps) {
  if (!content) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[0.62rem] tracking-[0.2em] uppercase text-accent font-mono">
          {label}
        </span>
        <span className="flex-1 h-px bg-rule" />
      </div>

      <p className="text-[0.9rem] leading-[1.85] text-[#3a3730] font-fraunces">
        {content}
      </p>
    </motion.div>
  );
}
