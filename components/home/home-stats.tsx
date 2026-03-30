"use client";

import { motion } from "motion/react";
import { stats } from "@/lib/data";

type HomeStatsProps = {
  mobile?: boolean;
};

export function HomeStats({ mobile = false }: HomeStatsProps) {
  if (mobile) {
    return (
      <div className="grid grid-cols-2 px-6 py-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            className={`py-4 pr-4 ${i < 2 ? "border-b border-rule" : ""}`}
          >
            <div className="font-bold leading-none font-playfair text-[2rem]">
              {s.num}
            </div>
            <div className="mt-1 text-[0.58rem] tracking-[0.15em] uppercase text-muted font-mono">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <>
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
          className={`pb-6 mb-6 ${i < stats.length - 1 ? "border-b border-rule" : ""}`}
        >
          <div className="font-bold leading-none font-playfair text-[2.2rem]">
            {s.num}
          </div>
          <div className="mt-1 text-[0.62rem] tracking-[0.2em] uppercase text-muted font-mono">
            {s.label}
          </div>
        </motion.div>
      ))}
    </>
  );
}
