import { guidanceSections } from "@/lib/gtv-details";
import { motion } from "motion/react";
import FadeIn from "../ui/FadeIn";
import { GTVSectionLabel } from "./gtv-section-label";

export const GlobalTalentVisaGuidanceSections = () => {
  return (
    <section className="border-b border-rule">
      <div className="px-6 md:px-12 pt-10 md:pt-14 pb-8 border-b border-rule">
        <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <FadeIn delay={0.05}>
            <div>
              <GTVSectionLabel>Key Things To Understand</GTVSectionLabel>
              <h2
                className="font-black leading-tight font-playfair -tracking-[0.02em]"
                style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
              >
                Build the profile before you organise the paperwork.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="max-w-2xl text-[0.78rem] md:text-[0.85rem] leading-[1.85] text-muted">
              These notes are the practical ideas behind the application:
              positioning, proof, validation, leadership, and long-term
              visibility.
            </p>
          </FadeIn>
        </div>
      </div>

      <div
        className="flex flex-col md:grid"
        style={{ gridTemplateColumns: "1fr 1px 1fr" }}
      >
      <div className="px-6 md:px-12 py-10 md:py-14">
        <GTVSectionLabel>Guidance Notes</GTVSectionLabel>

        <div className="space-y-0 border-t border-rule">
          {guidanceSections.slice(0, 4).map((section, index) => (
            <motion.article
              key={section.title}
              className="grid gap-4 border-b border-rule py-6"
              style={{ gridTemplateColumns: "42px 1fr" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <span className="font-playfair font-black text-[1rem] text-muted/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-black leading-tight">
                  {section.title}
                </h3>
                <div className="mt-4 space-y-4 text-[0.78rem] md:text-[0.85rem] leading-[1.85] text-muted">
                  <p>{section.body}</p>
                  {section.points && (
                    <ul className="space-y-2">
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-3 h-px w-4 shrink-0 bg-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.closing && <p>{section.closing}</p>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="hidden md:block bg-rule" />

      <div className="px-6 md:px-12 py-10 md:py-14">
        <GTVSectionLabel>Profile Building</GTVSectionLabel>

        <div className="space-y-0 border-t border-rule">
          {guidanceSections.slice(4).map((section, index) => (
            <motion.article
              key={section.title}
              className="grid gap-4 border-b border-rule py-6"
              style={{ gridTemplateColumns: "42px 1fr" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <span className="font-playfair font-black text-[1rem] text-muted/40">
                {String(index + 5).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-black leading-tight">
                  {section.title}
                </h3>
                <div className="mt-4 space-y-4 text-[0.78rem] md:text-[0.85rem] leading-[1.85] text-muted">
                  <p>{section.body}</p>
                  {section.points && (
                    <ul className="space-y-2">
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-3 h-px w-4 shrink-0 bg-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.closing && <p>{section.closing}</p>}
                </div>
              </div>
            </motion.article>
          ))}

          <FadeIn delay={0.2}>
            <div className="mt-8">
              <span className="text-[0.6rem] tracking-[0.18em] uppercase text-accent font-mono">
                The One Thing I&apos;d Tell Anyone Applying
              </span>
              <p className="mt-5 text-3xl leading-tight font-playfair font-black">
                Don&apos;t chase the visa.
              </p>
              <p className="mt-4 text-[0.78rem] md:text-[0.85rem] leading-[1.85] text-muted">
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
