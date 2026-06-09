import { guidanceSections } from "@/lib/gtv-details";
import { motion } from "motion/react";
import FadeIn from "../ui/FadeIn";
import { GTVSectionLabel } from "./gtv-section-label";

export const GlobalTalentVisaGuidanceSections = () => {
  return (
    <section
      className="flex flex-col md:grid"
      style={{ gridTemplateColumns: "1fr 1px 1fr" }}
    >
      <div className="px-6 md:px-12 py-10 md:py-14">
        <GTVSectionLabel>Guidance Notes</GTVSectionLabel>

        <div className="space-y-5">
          {guidanceSections.slice(0, 4).map((section, index) => (
            <motion.article
              key={section.title}
              className="border-b border-rule pb-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <h2 className="my-2 text-xl font-black leading-tight">
                {section.title}
              </h2>
              <div className="space-y-4 text-[0.78rem] md:text-[0.85rem] leading-[1.85] text-muted">
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
            </motion.article>
          ))}
        </div>
      </div>

      <div className="hidden md:block bg-rule" />

      <div className="px-6 md:px-12 py-10 md:py-14">
        <GTVSectionLabel>Profile Building</GTVSectionLabel>

        <div className="space-y-5">
          {guidanceSections.slice(4).map((section, index) => (
            <motion.article
              key={section.title}
              className="border-b border-rule pb-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <h2 className="my-2 text-2xl font-black leading-tight">
                {section.title}
              </h2>
              <div className="space-y-4 text-[0.78rem] md:text-[0.85rem] leading-[1.85] text-muted">
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
            </motion.article>
          ))}

          <FadeIn delay={0.2}>
            <div className="py-4">
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
    </section>
  );
};
