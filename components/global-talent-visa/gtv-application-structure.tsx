"use client";

import { motion } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";
import { coreDocs, evidenceItems, visaExpertise } from "@/lib/gtv-details";
import { GTVSectionLabel } from "./gtv-section-label";

export const GlobalTalentVisaApplicationStructure = () => {
  return (
    <section className="border-b border-rule">
      <div className="px-6 md:px-12 py-10 md:py-14 border-y border-rule">
        <GTVSectionLabel>Application Structure</GTVSectionLabel>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 md:items-end">
          <FadeIn delay={0.1} className="flex flex-col gap-4">
            <h2
              className="font-black leading-tight font-playfair -tracking-[0.02em]"
              style={{ fontSize: "clamp(1.35rem, 3vw, 2rem)" }}
            >
              What My Submission Looked Like
            </h2>
            <div className="flex flex-col gap-2">
              <span className="text-[0.6rem] tracking-[0.18em] uppercase text-accent font-mono">
                My Visa Expertise Areas
              </span>
              <div className="flex flex-wrap gap-2">
                {visaExpertise.map((item) => (
                  <span
                    key={item}
                    className="border border-rule px-3 py-2 text-[0.58rem] tracking-[0.14em] uppercase text-muted font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-3 text-[0.78rem] md:text-[0.85rem] leading-[1.85] text-muted">
              <p>
                Every application is different, but this is the structure of the
                evidence package I submitted.
              </p>
              <p>
                This is not a template. It is simply an example of how I
                presented my work, impact, and credibility.
              </p>
              <div className="bg-cream px-5 py-5">
                <p className="text-[0.75rem] leading-[1.75] text-muted">
                  This is personal guidance from experience, not legal advice.
                  Use it to understand how a strong profile can be organised,
                  then verify the formal requirements for your own route.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="px-6 md:px-12 py-10 md:py-14">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16">
          <FadeIn delay={0.1}>
            <div>
              <span className="text-[0.6rem] tracking-[0.18em] uppercase text-muted font-mono">
                Core Pack — 3 Documents
              </span>
              <h3 className="mt-4 text-[1rem] font-bold leading-tight mb-6">
                The profile foundation.
              </h3>
              <div className="border-t border-rule">
                {coreDocs.map((doc, index) => (
                  <motion.article
                    key={doc.num}
                    className="py-5 border-b border-rule"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                  >
                    <div>
                      <span className="text-[0.55rem] tracking-[0.16em] uppercase text-accent font-mono">
                        {doc.label}
                      </span>
                      <h4 className="mt-2 text-[0.92rem] font-black leading-tight">
                        {doc.title}
                      </h4>
                      <p className="mt-3 text-[0.74rem] md:text-[0.8rem] leading-[1.75] text-muted">
                        {doc.body}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <span className="text-[0.6rem] tracking-[0.18em] uppercase text-muted font-mono">
                Evidence Pack — 10 Documents
              </span>
              <h3 className="mt-4 text-[1rem] font-bold leading-tight mb-6">
                Proof reviewers can verify.
              </h3>
              <div className="grid md:grid-cols-2 border-t border-rule md:border-l">
                {evidenceItems.map((item, index) => (
                  <motion.article
                    key={item.title}
                    className="py-4 md:px-4 border-b border-rule md:border-r"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                  >
                    <span>
                      <span className="block text-[0.54rem] tracking-[0.15em] uppercase text-accent font-mono">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-[0.76rem] md:text-[0.8rem] leading-snug">
                        {item.title}
                      </span>
                    </span>
                  </motion.article>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
