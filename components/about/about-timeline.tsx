"use client";

import { useState } from "react";
import { motion } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";
import { timeline } from "@/lib/data";
import { LuMinus, LuPlus } from "react-icons/lu";

const STEP = 3;

export function AboutTimeline() {
  const [visibleCount, setVisibleCount] = useState(STEP);

  const visible = timeline.slice(0, visibleCount);
  const hasMore = visibleCount < timeline.length;
  const showLess = visibleCount > STEP;

  return (
    <FadeIn delay={0.55}>
      <div className="mt-8">
        <h3 className="mb-6 font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
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
              <span className="pt-0.5 font-playfair text-[0.8rem] font-bold text-muted">
                {t.year}
              </span>
              <div className="relative bg-rule">
                <span className="absolute top-2 left-1/2 h-2 w-2 -translate-x-11/20 rounded-full bg-accent md:-translate-x-9/20" />
              </div>
              <div>
                <div className="font-playfair text-[0.85rem] font-bold">
                  {t.role}
                </div>
                <div className="mt-1 font-mono text-[0.6rem] tracking-widest text-muted uppercase">
                  {t.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          {hasMore && (
            <DisplayButton
              onClick={() => setVisibleCount((prev) => prev + STEP)}
            >
              <LuPlus /> {Math.min(STEP, timeline.length - visibleCount)} more
            </DisplayButton>
          )}
          {showLess && (
            <DisplayButton onClick={() => setVisibleCount(STEP)}>
              <LuMinus /> show less
            </DisplayButton>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

const DisplayButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 font-mono text-[0.6rem] tracking-widest text-accent uppercase transition-opacity hover:opacity-70"
  >
    {children}
  </button>
);
