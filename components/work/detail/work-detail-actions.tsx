"use client";

import { motion } from "motion/react";
import { BsArrowRight } from "react-icons/bs";
import { workDetailEase, workDetailViewport } from "./work-detail-shared";

export function WorkDetailExternalButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase font-mono no-underline text-paper bg-ink px-6 md:w-auto md:px-7 py-3.5 transition-all ease-linear duration-200 hover:bg-accent"
    >
      {children}
      <span>
        <BsArrowRight />
      </span>
    </a>
  );
}

type WorkDetailLinksProps = {
  shopUrl?: string;
  links?: { label: string; href: string }[];
};

export function WorkDetailLinks({ shopUrl, links }: WorkDetailLinksProps) {
  if (!shopUrl && !links?.length) return null;

  return (
    <section className="px-6 md:px-12 py-10 md:py-14 border-b border-rule">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={workDetailViewport}
        transition={{ duration: 0.5, ease: workDetailEase }}
        className="max-w-328"
      >
        <div className="text-[0.62rem] tracking-[0.2em] uppercase mb-5 text-accent font-mono">
          Links
        </div>
        <div className="flex flex-wrap gap-3">
          {shopUrl ? (
            <WorkDetailExternalButton href={shopUrl}>
              Shop This Object
            </WorkDetailExternalButton>
          ) : null}
          {links?.map((item) => (
            <WorkDetailExternalButton key={item.href} href={item.href}>
              {item.label}
            </WorkDetailExternalButton>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
