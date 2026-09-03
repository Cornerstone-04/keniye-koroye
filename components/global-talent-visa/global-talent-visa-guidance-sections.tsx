"use client";

import { guidanceSections } from "@/lib/gtv-details";
import { motion } from "motion/react";
import FadeIn from "../ui/FadeIn";
import { GTVSectionLabel } from "./gtv-section-label";

export const GlobalTalentVisaGuidanceSections = () => {
  return (
    <section className="border-b border-rule">
      <div className="px-6 py-10 md:px-12 md:py-14">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start md:gap-16">
          <FadeIn delay={0.05} className="md:sticky md:top-24 md:self-start">
            <div>
              <GTVSectionLabel>Key Things To Understand</GTVSectionLabel>
              <h2
                className="max-w-xl font-playfair leading-tight font-black -tracking-[0.02em]"
                style={{ fontSize: "clamp(1.7rem, 4vw, 3.25rem)" }}
              >
                Build the profile before you organise the paperwork.
              </h2>
              <p className="mt-5 max-w-md text-[0.78rem] leading-[1.85] text-muted md:text-[0.85rem]">
                These notes are the practical ideas behind the application:
                positioning, proof, validation, leadership, and long-term
                visibility.
              </p>
            </div>
          </FadeIn>

          <div className="border-t border-rule">
            {guidanceSections.map((section, index) => (
              <motion.article
                key={section.title}
                className="grid gap-4 border-b border-rule py-6 md:grid-cols-[minmax(10rem,14rem)_1fr]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <h3 className="text-[0.95rem] leading-snug font-bold md:text-[1rem]">
                  {section.title}
                </h3>
                <div className="space-y-4 text-[0.78rem] leading-[1.85] text-muted md:text-[0.85rem]">
                  <p>{section.body}</p>
                  {section.points && (
                    <ul className="flex flex-wrap gap-x-5 gap-y-2">
                      {section.points.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <span className="h-px w-4 shrink-0 bg-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.closing && <p>{section.closing}</p>}
                </div>
              </motion.article>
            ))}

            <FadeIn delay={0.2}>
              <div className="mt-10 border-l-[3px] border-accent pl-5">
                <span className="font-mono text-[0.6rem] tracking-[0.18em] text-accent uppercase">
                  The One Thing I&apos;d Tell Anyone Applying
                </span>
                <p className="mt-5 font-playfair text-[1.1rem] leading-[1.7] text-muted italic">
                  Don&apos;t chase the visa.
                </p>
                <p className="mt-4 text-[0.78rem] leading-[1.85] text-muted md:text-[0.85rem]">
                  Become the kind of person the visa is looking for.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
