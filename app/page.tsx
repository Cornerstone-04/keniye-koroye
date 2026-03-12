"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { stats, disciplines, personal, bio } from "@/lib/data";
import Image from "next/image";

export default function HomePage() {
  return (
    <div
      className="min-h-screen pt-[57px] flex flex-col"
      style={{ background: "var(--paper)" }}
    >
      {/* Masthead */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-12 py-8"
        style={{
          borderBottom: "3px double var(--ink)",
          fontFamily: "'DM Mono', monospace",
        }}
      >
        {/* Mobile: just title centred */}
        <div className="flex flex-col items-center text-center md:hidden mb-2">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-black uppercase leading-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3.5rem, 18vw, 6rem)",
              letterSpacing: "-0.02em",
            }}
          >
            KEN
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>I</em>YE
          </motion.h1>
          <p
            className="mt-2 text-[0.82rem]"
            style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: "italic",
              color: "var(--muted)",
            }}
          >
            Building impactful technology
          </p>
          <div
            className="mt-2 text-[0.6rem] tracking-[0.12em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            Product Manager · Developer · Researcher
          </div>
        </div>

        {/* Desktop: 3-col masthead */}
        <div className="hidden md:grid grid-cols-3 items-end gap-8">
          <div
            className="text-[0.62rem] tracking-[0.15em] uppercase leading-loose"
            style={{ color: "var(--muted)" }}
          >
            Product Manager
            <br />
            Product Developer
            <br />
            Product Researcher
          </div>
          <div className="text-center">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-black uppercase leading-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              KEN
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>I</em>
              YE
            </motion.h1>
            <p
              className="mt-2 text-[0.9rem]"
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                color: "var(--muted)",
              }}
            >
              Building impactful technology
            </p>
          </div>
          <div
            className="text-right text-[0.62rem] tracking-widest leading-loose"
            style={{ color: "var(--muted)" }}
          >
            {personal.location}
          </div>
        </div>
      </motion.div>

      {/* Body */}
      {/* Mobile: single column stack */}
      <div
        className="flex-1 md:hidden flex flex-col"
        style={{ borderBottom: "1px solid var(--rule)" }}
      >
        {/* Hero image */}
        <div className="px-6 pt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="w-full relative overflow-hidden mb-5"
            style={{ aspectRatio: "4/5", background: "var(--ink)" }}
          >
            <Image
              alt="Keniye Koroye"
              src="/keniye-pic.png"
              fill
              style={{ objectFit: "cover" }}
            />
            <span
              className="absolute bottom-3 left-3 text-[0.55rem] tracking-[0.12em] uppercase"
              style={{
                color: "rgba(255,255,255,0.35)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              — Funfere B. Koroye
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[1.05rem] leading-relaxed pl-4 mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              borderLeft: "3px solid var(--accent)",
            }}
          >
            "{personal.tagline}"
          </motion.p>
        </div>

        {/* Bio + CTA */}
        <div
          className="px-6 pb-8"
          style={{ borderBottom: "1px solid var(--rule)" }}
        >
          <p
            className="text-[0.88rem] leading-[1.8] mb-6"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {bio.intro} {bio.paragraphs[0]}
          </p>
          <Link
            href="/work"
            className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase"
            style={{
              padding: "0.9rem 1.6rem",
              background: "var(--ink)",
              color: "var(--paper)",
              fontFamily: "'DM Mono', monospace",
              textDecoration: "none",
            }}
          >
            View Selected Work <span>→</span>
          </Link>
        </div>

        {/* Stats grid */}
        <div
          className="grid grid-cols-2 px-6 py-6"
          style={{ borderBottom: "1px solid var(--rule)" }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="py-4 pr-4"
              style={{ borderBottom: i < 2 ? "1px solid var(--rule)" : "none" }}
            >
              <div
                className="font-bold leading-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2rem",
                }}
              >
                {s.num}
              </div>
              <div
                className="mt-1 text-[0.58rem] tracking-[0.15em] uppercase"
                style={{
                  color: "var(--muted)",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disciplines */}
        <div className="px-6 py-6">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-[0.6rem] tracking-[0.25em] uppercase"
              style={{
                color: "var(--accent)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Disciplines
            </span>
            <span
              className="flex-1 h-px"
              style={{ background: "var(--rule)" }}
            />
          </div>
          {disciplines.map((d, i) => (
            <div
              key={d}
              className="flex justify-between items-center py-[0.55rem] text-[0.65rem] tracking-widest uppercase"
              style={{
                borderBottom: "1px solid var(--rule)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              <span>{d}</span>
              <span style={{ color: "var(--accent)" }}>●</span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 3-col body */}
      <div
        className="flex-1 hidden md:grid"
        style={{
          gridTemplateColumns: "1fr 1px 1.6fr 1px 1fr",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div className="p-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="pb-6 mb-6"
              style={{
                borderBottom:
                  i < stats.length - 1 ? "1px solid var(--rule)" : "none",
              }}
            >
              <div
                className="font-bold leading-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.2rem",
                }}
              >
                {s.num}
              </div>
              <div
                className="mt-1 text-[0.62rem] tracking-[0.2em] uppercase"
                style={{
                  color: "var(--muted)",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
        <div style={{ background: "var(--rule)" }} />
        <div className="p-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="w-full relative overflow-hidden mb-6"
            style={{ aspectRatio: "3/4", background: "var(--ink)" }}
          >
            <Image
              alt="Keniye Koroye"
              src="/keniye-pic.png"
              fill
              style={{ objectFit: "cover" }}
              priority
              blurDataURL="data:..."
              placeholder="blur"
            />
            <span
              className="absolute bottom-4 left-4 text-[0.58rem] tracking-[0.15em] uppercase"
              style={{
                color: "rgba(255,255,255,0.35)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              — Funfere B. Koroye
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[1.2rem] leading-relaxed pl-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              borderLeft: "3px solid var(--accent)",
            }}
          >
            "{personal.tagline}"
          </motion.p>
        </div>
        <div style={{ background: "var(--rule)" }} />
        <div className="p-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-[0.95rem] leading-[1.8] mb-8"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {bio.intro}{" "}
            <strong
              className="font-normal"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 60%, rgba(200,57,43,0.25) 60%)",
              }}
            >
              {bio.paragraphs[0]}
            </strong>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase transition-colors duration-200"
              style={{
                padding: "0.9rem 1.8rem",
                background: "var(--ink)",
                color: "var(--paper)",
                fontFamily: "'DM Mono', monospace",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--ink)")
              }
            >
              View Selected Work <span>→</span>
            </Link>
          </motion.div>
          <div
            className="mt-10 pt-8"
            style={{ borderTop: "1px solid var(--rule)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-[0.6rem] tracking-[0.25em] uppercase"
                style={{
                  color: "var(--accent)",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                Disciplines
              </span>
              <span
                className="flex-1 h-px"
                style={{ background: "var(--rule)" }}
              />
            </div>
            {disciplines.map((d, i) => (
              <motion.div
                key={d}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                className="flex justify-between items-center py-[0.55rem] text-[0.68rem] tracking-widest uppercase"
                style={{
                  borderBottom: "1px solid var(--rule)",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                <span>{d}</span>
                <span style={{ color: "var(--accent)" }}>●</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
