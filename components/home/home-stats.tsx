"use client";

import { motion } from "motion/react";
import { stats } from "@/lib/data";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

type HomeStatsProps = {
  mobile?: boolean;
};

export function HomeStats({ mobile = false }: HomeStatsProps) {
  if (mobile) {
    return (
      <div className="px-6 py-6">
        <div className="grid grid-cols-2">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className={`py-4 pr-4 ${i < 2 ? "border-b border-rule" : ""}`}
            >
              <div className="font-playfair text-[2rem] leading-none font-bold">
                {s.num}
              </div>
              <div className="mt-1 font-mono text-[0.58rem] tracking-[0.15em] text-muted uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
        <GlobalTalentPrompt mobile />
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
          className={`mb-6 pb-6 ${i < stats.length - 1 ? "border-b border-rule" : ""}`}
        >
          <div className="font-playfair text-[2.2rem] leading-none font-bold">
            {s.num}
          </div>
          <div className="mt-1 font-mono text-[0.62rem] tracking-[0.2em] text-muted uppercase">
            {s.label}
          </div>
        </motion.div>
      ))}
      <GlobalTalentPrompt />
    </>
  );
}

function GlobalTalentPrompt({ mobile = false }: HomeStatsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: mobile ? 12 : 0, x: mobile ? 0 : -20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className={mobile ? "mt-6 border-t border-rule pt-6" : "pt-2"}
    >
      <p className="mb-4 font-mono text-[0.75rem] leading-[1.75] text-muted">
        Planning to apply for the Global Talent Visa?
      </p>
      <Link
        href="/global-talent-visa"
        className="inline-flex items-center gap-3 bg-ink px-6 py-3.5 font-mono text-[0.65rem] tracking-[0.2em] text-paper uppercase no-underline transition-colors duration-200 hover:bg-accent md:px-7"
      >
        I can help
        <span>
          <BsArrowRight />
        </span>
      </Link>
    </motion.div>
  );
}
