"use client";

import { motion } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";
import { coreDocs, evidenceItems, visaExpertise } from "@/lib/gtv-details";
import { GTVSectionLabel } from "./gtv-section-label";

export const GlobalTalentVisaApplicationStructure = () => {
  return (
    <section className="border-b border-rule">
      <div className="border-y border-rule px-6 py-10 md:px-12 md:py-14">
        <GTVSectionLabel>Application Structure</GTVSectionLabel>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:items-end md:gap-16">
          <FadeIn delay={0.1} className="flex flex-col gap-4">
            <h2
              className="font-playfair leading-tight font-black -tracking-[0.02em]"
              style={{ fontSize: "clamp(1.35rem, 3vw, 2rem)" }}
            >
              What My Submission Looked Like
            </h2>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[0.6rem] tracking-[0.18em] text-accent uppercase">
                My Visa Expertise Areas
              </span>
              <div className="flex flex-wrap gap-2">
                {visaExpertise.map((item) => (
                  <span
                    key={item}
                    className="border border-rule px-3 py-2 font-mono text-[0.58rem] tracking-[0.14em] text-muted uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-3 text-[0.78rem] leading-[1.85] text-muted md:text-[0.85rem]">
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

      <div className="px-6 py-10 md:px-12 md:py-14">
        <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-16">
          <FadeIn delay={0.1}>
            <div>
              <span className="font-mono text-[0.6rem] tracking-[0.18em] text-muted uppercase">
                Core Pack — 3 Documents
              </span>
              <h3 className="mt-4 mb-6 text-[1rem] leading-tight font-bold">
                The profile foundation.
              </h3>
              <div className="border-t border-rule">
                {coreDocs.map((doc, index) => (
                  <motion.article
                    key={doc.num}
                    className="border-b border-rule py-5"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                  >
                    <div>
                      <span className="font-mono text-[0.55rem] tracking-[0.16em] text-accent uppercase">
                        {doc.label}
                      </span>
                      <h4 className="mt-2 text-[0.92rem] leading-tight font-black">
                        {doc.title}
                      </h4>
                      <p className="mt-3 text-[0.74rem] leading-[1.75] text-muted md:text-[0.8rem]">
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
              <span className="font-mono text-[0.6rem] tracking-[0.18em] text-muted uppercase">
                Evidence Pack — 10 Documents
              </span>
              <h3 className="mt-4 mb-6 text-[1rem] leading-tight font-bold">
                Proof reviewers can verify.
              </h3>
              <div className="grid border-t border-rule md:grid-cols-2 md:border-l">
                {evidenceItems.map((item, index) => (
                  <motion.article
                    key={item.title}
                    className="border-b border-rule py-4 md:border-r md:px-4"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                  >
                    <span>
                      <span className="block font-mono text-[0.54rem] tracking-[0.15em] text-accent uppercase">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-[0.76rem] leading-snug md:text-[0.8rem]">
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
