"use client";

import { motion } from "motion/react";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import {
  timeline,
  skills,
  tools,
  bio,
  education,
  awards,
  residencies,
} from "@/lib/data";
import CertHover from "@/components/ui/CertHover";

export default function AboutPage() {
  return (
    <div
      className="min-h-screen pt-14.25"
      style={{ background: "var(--paper)" }}
    >
      {/* Header */}
      <div
        className="px-6 md:px-12 pt-10 pb-0"
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
              About the Person
            </span>
            <span
              className="flex-1 h-px"
              style={{ background: "var(--rule)" }}
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="font-black leading-[0.95] pb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 8vw, 5.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            The Man Behind
            <br />
            The <em style={{ color: "var(--accent)" }}>Products</em>
          </h2>
        </FadeIn>
      </div>

      {/* Body — stacks on mobile, 2-col on desktop */}
      <div
        className="flex flex-col md:grid"
        style={{ gridTemplateColumns: "1.2fr 1px 1fr" }}
      >
        {/* Main content */}
        <div className="px-6 md:px-12 py-10">
          <FadeIn delay={0.15}>
            <p
              className="leading-[1.75] mb-6"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(1rem, 3vw, 1.2rem)",
                maxWidth: "52ch",
              }}
            >
              {bio.intro}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* Single column on mobile, 2-col on md+ */}
            <div
              className="text-[0.82rem] leading-[1.9] mb-8"
              style={{ color: "#3a3730" }}
            >
              <div className="block md:hidden space-y-4">
                {bio.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div
                className="hidden md:block"
                style={{ columns: 2, columnGap: "2rem", maxWidth: "60ch" }}
              >
                {bio.paragraphs.map((p, i) => (
                  <p key={i} style={{ marginBottom: "1rem" }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Skills */}
          <FadeIn delay={0.25}>
            <div>
              <h3
                className="text-[0.62rem] tracking-[0.2em] uppercase mb-5"
                style={{
                  color: "var(--accent)",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                Core Competencies
              </h3>
              {skills.map((s, i) => (
                <div key={s.name} className="flex items-center gap-3 mb-3">
                  <span
                    className="text-[0.62rem] tracking-[0.08em] uppercase shrink-0"
                    style={{ width: 130, fontFamily: "'DM Mono', monospace" }}
                  >
                    {s.name}
                  </span>
                  <div
                    className="flex-1 relative"
                    style={{ height: 2, background: "var(--rule)" }}
                  >
                    <motion.div
                      className="absolute left-0 top-0 bottom-0"
                      style={{ background: "var(--ink)" }}
                      initial={{ width: 0 }}
                      animate={{ width: `${s.pct}%` }}
                      transition={{
                        duration: 1,
                        delay: 0.4 + i * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  </div>
                  <span
                    className="text-[0.6rem] w-8 text-right"
                    style={{
                      color: "var(--muted)",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {s.pct}%
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Tools */}
          <FadeIn delay={0.35}>
            <div
              className="mt-8 pt-8"
              style={{ borderTop: "1px solid var(--rule)" }}
            >
              <h3
                className="text-[0.62rem] tracking-[0.2em] uppercase mb-4"
                style={{
                  color: "var(--accent)",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-[0.62rem] tracking-widest"
                    style={{
                      border: "1px solid var(--rule)",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Divider — hidden on mobile */}
        <div
          className="hidden md:block"
          style={{ background: "var(--rule)" }}
        />

        {/* Sidebar */}
        <div
          className="px-6 md:px-12 py-10"
          style={{ background: "var(--cream)" }}
        >
          {/* Education */}
          <FadeIn delay={0.15}>
            <h3
              className="text-[0.62rem] tracking-[0.2em] uppercase mb-5"
              style={{
                color: "var(--accent)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Education
            </h3>
            <div className="space-y-4 mb-10">
              {education.map((e, i) => (
                <motion.div
                  key={e.institution}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <CertHover
                    institution={e.institution}
                    full={e.full}
                    subject={e.subject}
                    year={e.year}
                    certificate={e.certificate}
                  />
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Awards */}
          <FadeIn delay={0.3}>
            <h3
              className="text-[0.62rem] tracking-[0.2em] uppercase mb-5"
              style={{
                color: "var(--accent)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Awards
            </h3>
            <div className="space-y-3 mb-10">
              {awards.map((a, i) => (
                <motion.div
                  key={a.org}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex justify-between items-start pb-3"
                  style={{ borderBottom: "1px solid var(--rule)" }}
                >
                  <div>
                    <div
                      className="text-[0.68rem] tracking-[0.12em] uppercase font-bold"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {a.org}
                    </div>
                    <div
                      className="text-[0.82rem]"
                      style={{ fontFamily: "'Fraunces', serif" }}
                    >
                      {a.title}
                    </div>
                  </div>
                  <div
                    className="text-[0.6rem] tracking-widest shrink-0 ml-4"
                    style={{
                      color: "var(--muted)",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {a.year}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Residencies */}
          <FadeIn delay={0.45}>
            <h3
              className="text-[0.62rem] tracking-[0.2em] uppercase mb-5"
              style={{
                color: "var(--accent)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Residencies
            </h3>
            <div className="space-y-3 mb-10">
              {residencies.map((r, i) => (
                <motion.div
                  key={r.org}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.08 }}
                  className="flex justify-between items-start pb-3"
                  style={{ borderBottom: "1px solid var(--rule)" }}
                >
                  <div>
                    <div
                      className="text-[0.68rem] tracking-[0.12em] uppercase font-bold"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {r.org}
                    </div>
                    <div
                      className="text-[0.82rem]"
                      style={{ fontFamily: "'Fraunces', serif" }}
                    >
                      {r.title}
                    </div>
                  </div>
                  <div
                    className="text-[0.6rem] tracking-widest shrink-0 ml-4"
                    style={{
                      color: "var(--muted)",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {r.year}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Timeline */}
          <FadeIn delay={0.55}>
            <div
              className="pt-8"
              style={{ borderTop: "1px solid var(--rule)" }}
            >
              <h3
                className="text-[0.62rem] tracking-[0.2em] uppercase mb-6"
                style={{
                  color: "var(--accent)",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                Career Timeline
              </h3>
              <div className="space-y-5">
                {timeline.map((t, i) => (
                  <motion.div
                    key={t.year + t.role}
                    className="grid gap-x-4"
                    style={{ gridTemplateColumns: "55px 1px 1fr" }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 + i * 0.1 }}
                  >
                    <span
                      className="text-[0.8rem] font-bold pt-0.5"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "var(--muted)",
                      }}
                    >
                      {t.year}
                    </span>
                    <div
                      className="relative"
                      style={{ background: "var(--rule)" }}
                    >
                      <span
                        className="absolute top-1.5 -left-0.75 w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--accent)" }}
                      />
                    </div>
                    <div>
                      <div
                        className="text-[0.85rem] font-bold"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {t.role}
                      </div>
                      <div
                        className="text-[0.6rem] tracking-widest uppercase mt-1"
                        style={{
                          color: "var(--muted)",
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {t.company}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
