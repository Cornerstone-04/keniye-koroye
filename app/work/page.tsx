// work/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";
import { projects, ProjectTag } from "@/lib/data";
import Image from "next/image";

type Filter = "all" | ProjectTag;
const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "pm", label: "PM" },
  { key: "dev", label: "Dev" },
  { key: "research", label: "Research" },
];

export default function WorkPage() {
  const [active, setActive] = useState<Filter>("all");
  const filtered = projects.filter((p) => active === "all" || p.tag === active);

  return (
    <div className="min-h-screen pt-14.25 bg-paper">
      <div className="px-6 md:px-12 pt-10 pb-8 border-b-[3px] border-double border-ink">
        <FadeIn delay={0.05}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-accent font-mono">
              Selected Projects
            </span>
            <span className="flex-1 h-px bg-rule" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="font-black leading-[0.95] font-playfair -tracking-[0.02em]"
            style={{ fontSize: "clamp(2.2rem, 8vw, 5.5rem)" }}
          >
            Work That
            <br />
            <em className="text-accent">Ships</em>
          </h2>
        </FadeIn>
      </div>

      {/* Filters */}
      <div className="px-6 md:px-12 py-4 flex gap-2 flex-wrap border-b border-rule">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`px-4 py-[0.4rem] text-[0.62rem] tracking-[0.15em] uppercase transition-all duration-200 font-mono border ${
              active === f.key
                ? "bg-ink text-paper border-ink"
                : "bg-transparent text-muted border-rule"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.num}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-r border-b border-rule"
              data-hover
            >
              <div
                className="relative overflow-hidden aspect-4/3"
                style={{ background: p.bg }}
              >
                {p.thumbnail ? (
                  <Image
                    src={p.thumbnail}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center font-black select-none font-playfair text-[5rem] text-white/5">
                    {p.num}
                  </div>
                )}
                <span className="absolute top-3 left-3 text-[0.58rem] tracking-[0.15em] uppercase z-10 text-white/35 font-mono">
                  {p.num} / 0{projects.length}
                </span>
                <span className="absolute top-3 right-3 px-2 py-[0.2rem] text-[0.55rem] tracking-[0.15em] uppercase text-white z-10 bg-accent font-mono">
                  {p.tagLabel}
                </span>
              </div>

              <div className="p-5 md:p-6">
                <div className="text-[0.6rem] tracking-[0.15em] uppercase mb-1 text-muted font-mono">
                  {p.year} · {p.client}
                </div>
                <div className="font-bold text-[1rem] md:text-[1.1rem] leading-snug mb-2 font-playfair">
                  {p.title}
                </div>
                <div className="text-[0.72rem] leading-[1.7] mb-4 text-[#3a3730]">
                  {p.desc}
                </div>

                {p.outcomes && (
                  <div className="grid grid-cols-3 gap-2 mb-4 pt-3 border-t border-rule">
                    {p.outcomes.map((o) => (
                      <div key={o.pct} className="text-center">
                        <div className="font-black text-[1.05rem] font-playfair">
                          {o.pct}
                        </div>
                        <div className="text-[0.52rem] leading-tight mt-1 text-muted font-mono">
                          {o.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {p.pills.map((pill) => (
                    <span
                      key={pill}
                      className="px-2 py-[0.2rem] text-[0.58rem] tracking-[0.12em] uppercase border border-rule text-muted font-mono"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
