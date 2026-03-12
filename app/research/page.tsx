// research/page.tsx
"use client";

import { motion } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";
import { articles } from "@/lib/data";

export default function ResearchPage() {
  return (
    <div className="min-h-screen pt-14.25 bg-paper">
      <div className="px-6 md:px-12 pt-10 pb-8 border-b-[3px] border-double border-ink">
        <FadeIn delay={0.05}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-accent font-mono">
              Thinking & Writing
            </span>
            <span className="flex-1 h-px bg-rule" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="font-black leading-[0.95] font-playfair -tracking-[0.02em]"
            style={{ fontSize: "clamp(2.2rem, 8vw, 5.5rem)" }}
          >
            Ideas Worth
            <br />
            <em className="text-accent">Documenting</em>
          </h2>
        </FadeIn>
      </div>

      <div className="px-6 md:px-12">
        {articles.map((a, i) => (
          <motion.div
            key={a.num}
            className="py-7 md:py-8 border-b border-rule"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            whileHover={{ x: 6 }}
            data-hover
          >
            <div className="flex items-start gap-5">
              <div className="font-black leading-none shrink-0 hidden sm:block font-playfair text-[2.5rem] text-rule">
                {a.num}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <div className="text-[0.6rem] tracking-[0.2em] uppercase text-accent font-mono">
                    {a.type}
                  </div>
                  <div className="text-[0.6rem] tracking-widest shrink-0 text-muted font-mono">
                    {a.date}
                  </div>
                </div>
                <div
                  className="font-bold leading-snug mb-2 font-playfair"
                  style={{ fontSize: "clamp(1rem, 3vw, 1.2rem)" }}
                >
                  {a.title}
                </div>
                <div className="text-[0.75rem] leading-[1.7] text-muted">
                  {a.excerpt}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
