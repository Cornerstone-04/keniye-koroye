"use client";

import { motion } from "motion/react";
import type { Project } from "@/lib/data";
import { workDetailEase, workDetailViewport } from "./work-detail-shared";

type DetailBlockProps = {
  label: string;
  title?: string;
  content?: string;
  delay?: number;
};

export function WorkDetailBlock({
  label,
  title,
  content,
  delay = 0,
}: DetailBlockProps) {
  if (!content) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={workDetailViewport}
      transition={{ duration: 0.5, delay, ease: workDetailEase }}
      className="border-t border-rule pt-5"
    >
      <div className="mb-4 text-[0.62rem] tracking-[0.2em] uppercase text-accent font-mono">
        {label}
      </div>

      {title ? (
        <h2 className="mb-4 text-[1.05rem] md:text-[1.2rem] font-bold leading-snug">
          {title}
        </h2>
      ) : null}
      <p className="text-[0.9rem] leading-[1.85] text-[#3a3730] font-fraunces">
        {content}
      </p>
    </motion.div>
  );
}

export function WorkDetailSectionHeader({ label }: { label: string }) {
  return (
    <div className="px-6 md:px-12 py-8 md:py-10 border-b border-rule">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={workDetailViewport}
        transition={{ duration: 0.45, ease: workDetailEase }}
        className="flex items-center gap-3"
      >
        <span className="text-[0.62rem] tracking-[0.2em] uppercase text-accent font-mono">
          {label}
        </span>
        <span className="flex-1 h-px bg-rule" />
      </motion.div>
    </div>
  );
}

type ListBlockProps = {
  label: string;
  items: string[];
  delay?: number;
};

export function WorkDetailListBlock({
  label,
  items,
  delay = 0,
}: ListBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={workDetailViewport}
      transition={{ duration: 0.5, delay, ease: workDetailEase }}
    >
      <div className="text-[0.62rem] tracking-[0.2em] uppercase mb-5 text-accent font-mono">
        {label}
      </div>
      <div className="border-t border-rule">
        {items.map((item) => (
          <div key={item} className="border-b border-rule py-3">
            <p className="text-[0.84rem] leading-snug text-muted">{item}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function WorkDetailOutcomesBlock({
  outcomes,
}: {
  outcomes: NonNullable<Project["outcomes"]>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={workDetailViewport}
      transition={{ duration: 0.5, delay: 0.3, ease: workDetailEase }}
      className="lg:col-span-2"
    >
      <div className="text-[0.62rem] tracking-[0.2em] uppercase mb-5 text-accent font-mono">
        Outcomes
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-rule">
        {outcomes.map((outcome) => (
          <div
            key={`${outcome.pct}-${outcome.label}`}
            className="border-b border-r border-rule py-5 px-5"
          >
            <div className="font-black text-[1.65rem] font-playfair">
              {outcome.pct}
            </div>
            <div className="mt-2 text-[0.72rem] leading-snug text-muted font-mono">
              {outcome.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
