"use client";

import { motion } from "motion/react";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import { articles } from "@/lib/data";

export default function ResearchPage() {
  return (
    <div className="min-h-screen pt-[57px]" style={{ background: "var(--paper)" }}>
      <div className="px-6 md:px-12 pt-10 pb-8" style={{ borderBottom: "3px double var(--ink)" }}>
        <FadeIn delay={0.05}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[0.6rem] tracking-[0.25em] uppercase" style={{ color: "var(--accent)", fontFamily: "'DM Mono', monospace" }}>Thinking & Writing</span>
            <span className="flex-1 h-px" style={{ background: "var(--rule)" }} />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-black leading-[0.95]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 8vw, 5.5rem)", letterSpacing: "-0.02em" }}>
            Ideas Worth<br /><em style={{ color: "var(--accent)" }}>Documenting</em>
          </h2>
        </FadeIn>
      </div>

      <div className="px-6 md:px-12">
        {articles.map((a, i) => (
          <motion.div key={a.num}
            className="py-7 md:py-8"
            style={{ borderBottom: "1px solid var(--rule)" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            whileHover={{ x: 6 }}
            data-hover>
            {/* Mobile layout: stacked */}
            <div className="flex items-start gap-5">
              <div className="font-black leading-none shrink-0 hidden sm:block"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", color: "var(--rule)" }}>
                {a.num}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <div className="text-[0.6rem] tracking-[0.2em] uppercase" style={{ color: "var(--accent)", fontFamily: "'DM Mono', monospace" }}>{a.type}</div>
                  <div className="text-[0.6rem] tracking-widest shrink-0" style={{ color: "var(--muted)", fontFamily: "'DM Mono', monospace" }}>{a.date}</div>
                </div>
                <div className="font-bold leading-snug mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1rem, 3vw, 1.2rem)" }}>{a.title}</div>
                <div className="text-[0.75rem] leading-[1.7]" style={{ color: "var(--muted)" }}>{a.excerpt}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
