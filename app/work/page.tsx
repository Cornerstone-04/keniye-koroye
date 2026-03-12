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
    <div
      className="min-h-screen pt-14.25"
      style={{ background: "var(--paper)" }}
    >
      <div
        className="px-6 md:px-12 pt-10 pb-8"
        style={{ borderBottom: "3px double var(--ink)" }}
      >
        <FadeIn delay={0.05}>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-[0.6rem] tracking-[0.25em] uppercase"
              style={{
                color: "var(--accent)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Selected Projects
            </span>
            <span
              className="flex-1 h-px"
              style={{ background: "var(--rule)" }}
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="font-black leading-[0.95]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 8vw, 5.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Work That
            <br />
            <em style={{ color: "var(--accent)" }}>Ships</em>
          </h2>
        </FadeIn>
      </div>

      {/* Filters */}
      <div
        className="px-6 md:px-12 py-4 flex gap-2 flex-wrap"
        style={{ borderBottom: "1px solid var(--rule)" }}
      >
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className="px-4 py-[0.4rem] text-[0.62rem] tracking-[0.15em] uppercase transition-all duration-200"
            style={{
              fontFamily: "'DM Mono', monospace",
              border: "1px solid var(--rule)",
              background: active === f.key ? "var(--ink)" : "transparent",
              color: active === f.key ? "var(--paper)" : "var(--muted)",
              borderColor: active === f.key ? "var(--ink)" : "var(--rule)",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
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
              className="overflow-hidden"
              style={{
                borderRight: "1px solid var(--rule)",
                borderBottom: "1px solid var(--rule)",
              }}
              data-hover
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/3", background: p.bg }}
              >
                {p.thumbnail ? (
                  <Image
                    src={p.thumbnail}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center font-black select-none"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "5rem",
                      color: "rgba(255,255,255,0.05)",
                    }}
                  >
                    {p.num}
                  </div>
                )}
                <span
                  className="absolute top-3 left-3 text-[0.58rem] tracking-[0.15em] uppercase z-10"
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {p.num} / 0{projects.length}
                </span>
                <span
                  className="absolute top-3 right-3 px-2 py-[0.2rem] text-[0.55rem] tracking-[0.15em] uppercase text-white z-10"
                  style={{
                    background: "var(--accent)",
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {p.tagLabel}
                </span>
              </div>

              <div className="p-5 md:p-6">
                <div
                  className="text-[0.6rem] tracking-[0.15em] uppercase mb-1"
                  style={{
                    color: "var(--muted)",
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {p.year} · {p.client}
                </div>
                <div
                  className="font-bold text-[1rem] md:text-[1.1rem] leading-snug mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {p.title}
                </div>
                <div
                  className="text-[0.72rem] leading-[1.7] mb-4"
                  style={{ color: "#3a3730" }}
                >
                  {p.desc}
                </div>

                {p.outcomes && (
                  <div
                    className="grid grid-cols-3 gap-2 mb-4 pt-3"
                    style={{ borderTop: "1px solid var(--rule)" }}
                  >
                    {p.outcomes.map((o) => (
                      <div key={o.pct} className="text-center">
                        <div
                          className="font-black text-[1.05rem]"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {o.pct}
                        </div>
                        <div
                          className="text-[0.52rem] leading-tight mt-1"
                          style={{
                            color: "var(--muted)",
                            fontFamily: "'DM Mono', monospace",
                          }}
                        >
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
                      className="px-2 py-[0.2rem] text-[0.58rem] tracking-[0.12em] uppercase"
                      style={{
                        border: "1px solid var(--rule)",
                        color: "var(--muted)",
                        fontFamily: "'DM Mono', monospace",
                      }}
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
