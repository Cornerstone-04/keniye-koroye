"use client";

import { useState } from "react";
import { motion } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";
import { timeline } from "@/lib/data";

const STEP = 3;

export function AboutTimeline() {
  const [visibleCount, setVisibleCount] = useState(STEP);

  const visible = timeline.slice(0, visibleCount);
  const hasMore = visibleCount < timeline.length;

  return (
    <FadeIn delay={0.55}>
      <div className="mt-8">
        <h3 className="text-[0.62rem] tracking-[0.2em] uppercase mb-6 text-accent font-mono">
          Career Timeline
        </h3>

        <div className="space-y-5">
          {visible.map((t, i) => (
            <motion.div
              key={t.year + t.role}
              className="grid gap-x-4"
              style={{ gridTemplateColumns: "55px 1px 1fr" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <span className="text-[0.8rem] font-bold pt-0.5 font-playfair text-muted">
                {t.year}
              </span>
              <div className="relative bg-rule">
                <span className="absolute top-2 left-1/2 -translate-x-11/20 md:-translate-x-9/20 w-2 h-2 rounded-full bg-accent" />
              </div>
              <div>
                <div className="text-[0.85rem] font-bold font-playfair">
                  {t.role}
                </div>
                <div className="text-[0.6rem] tracking-widest uppercase mt-1 text-muted font-mono">
                  {t.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <button
            onClick={() => setVisibleCount((prev) => prev + STEP)}
            className="mt-5 text-[0.6rem] tracking-widest uppercase font-mono text-accent hover:opacity-70 transition-opacity"
          >
            + {Math.min(STEP, timeline.length - visibleCount)} more
          </button>
        )}
      </div>
    </FadeIn>
  );
}
