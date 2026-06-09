"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { BsArrowRight } from "react-icons/bs";
import FadeIn from "@/components/ui/FadeIn";
import { personal } from "@/lib/data";
import { globalTalentAssessment, guidanceSections } from "@/lib/gtv-details";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[0.62rem] tracking-[0.2em] uppercase mb-4 text-accent font-mono">
      {children}
    </h3>
  );
}

export default function GlobalTalentVisaPage() {
  const [checked, setChecked] = useState<boolean[]>(
    globalTalentAssessment.map(() => false),
  );

  const score = checked.filter(Boolean).length;
  const result = useMemo(() => {
    if (score <= 2) {
      return "Start by tightening your positioning and gathering clearer evidence of impact.";
    }

    if (score <= 4) {
      return "You may have the beginnings of a strong story. Look for gaps in validation, leadership, or proof.";
    }

    return "You have several useful signals. The next step is shaping them into a coherent, verifiable story.";
  }, [score]);

  return (
    <div className="min-h-screen pt-14.25 bg-paper">
      <section className="px-6 md:px-12 pt-10 pb-8 border-b-[3px] border-double border-ink">
        <FadeIn delay={0.05}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-accent font-mono">
              Global Talent Visa
            </span>
            <span className="flex-1 h-px bg-rule" />
          </div>
        </FadeIn>

        <div className="flex flex-col md:grid md:grid-cols-2 md:items-end gap-8">
          <FadeIn delay={0.1}>
            <h1
              className="font-black leading-[0.95] font-playfair -tracking-[0.02em]"
              style={{ fontSize: "clamp(2.2rem, 8vw, 5.5rem)" }}
            >
              Global Talent
              <br />
              <em className="text-accent">Visa</em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-2">
              <p
                className="leading-[1.75]"
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                  color: "var(--muted)",
                }}
              >
                Build a profile that earns it.
              </p>
              <div className="space-y-4 text-[0.78rem] md:text-[0.85rem] leading-[1.85] text-muted">
                <p>
                  Over the past few years, many people have asked me how to
                  qualify for the UK Global Talent Visa. Most people start in
                  the wrong place. They focus on documents, application
                  strategies, and checklists.
                </p>
                <p>
                  But the visa is really asking a much simpler question: are you
                  already, or clearly becoming, someone your industry recognises
                  as valuable?
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section
        className="flex flex-col md:grid"
        style={{ gridTemplateColumns: "1fr 1px 1fr" }}
      >
        <div className="px-6 md:px-12 py-10 md:py-14">
          <SectionLabel>Guidance Notes</SectionLabel>

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
                <span className="text-[0.6rem] tracking-[0.15em] uppercase text-muted font-mono">
                  0{index + 1}
                </span>
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
          </div>
        </div>

        <div className="hidden md:block bg-rule" />

        <div className="px-6 md:px-12 py-10 md:py-14">
          <SectionLabel>Profile Building</SectionLabel>

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
                <span className="text-[0.6rem] tracking-[0.15em] uppercase text-muted font-mono">
                  0{index + 1}
                </span>
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
              <div className="border-y-[3px] border-double border-ink py-8">
                <span className="text-[0.6rem] tracking-[0.18em] uppercase text-accent font-mono">
                  The One Thing I&apos;d Tell Anyone Applying
                </span>
                <p className="mt-5 text-3xl  leading-tight font-playfair font-black">
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

      <section className="px-6 md:px-12 py-10 md:py-14 border-t border-rule">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16">
          <FadeIn delay={0.1}>
            <div>
              <SectionLabel>Eligibility Self-Assessment</SectionLabel>
              <h2 className="text-3xl  font-black leading-tight mb-5">
                Reflect on your readiness.
              </h2>
              <p className="text-[0.78rem] md:text-[0.85rem] leading-[1.85] text-muted max-w-xl">
                This is not a formal eligibility checker or legal advice. It is
                a practical prompt to help you see whether your profile is
                starting to show the signals that matter.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border-t border-rule">
              {globalTalentAssessment.map((item, index) => (
                <label
                  key={item.id}
                  className="grid gap-4 py-4 items-start border-b border-rule"
                  style={{ gridTemplateColumns: "28px 1fr" }}
                >
                  <input
                    type="checkbox"
                    checked={checked[index]}
                    onChange={() =>
                      setChecked((current) =>
                        current.map((value, itemIndex) =>
                          itemIndex === index ? !value : value,
                        ),
                      )
                    }
                    className="mt-1 h-4 w-4 accent-accent"
                  />
                  <span className="space-y-2">
                    <span className="block text-[0.78rem] md:text-[0.85rem] leading-[1.65] text-ink">
                      {item.question}
                    </span>
                    <span className="block text-[0.68rem] md:text-[0.72rem] leading-[1.65] text-muted">
                      {item.requirement}
                    </span>
                  </span>
                </label>
              ))}

              <div className="mt-6 bg-cream px-5 py-5">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[0.6rem] tracking-[0.18em] uppercase text-muted font-mono">
                    Readiness Signals
                  </span>
                  <span className="font-playfair text-3xl font-black text-accent">
                    {score}/{globalTalentAssessment.length}
                  </span>
                </div>
                <div className="h-px bg-rule">
                  <div
                    className="h-px bg-accent transition-all duration-300"
                    style={{
                      width: `${(score / globalTalentAssessment.length) * 100}%`,
                    }}
                  />
                </div>
                <p className="mt-4 text-[0.75rem] leading-[1.75] text-muted">
                  {result}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 md:px-12 py-10 md:py-14 border-t-[3px] border-double border-ink">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 md:items-end">
          <FadeIn delay={0.1}>
            <div>
              <SectionLabel>Need Guidance?</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                Need practical feedback on your profile?
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6 max-w-xl">
              <p className="text-[0.78rem] md:text-[0.85rem] leading-[1.85] text-muted">
                If you are working toward the Global Talent Visa and would like
                practical feedback on your profile, portfolio, positioning, or
                evidence strategy, let&apos;s talk.
              </p>
              <a
                href={personal.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase font-mono no-underline text-paper bg-ink px-6 md:px-7 py-3.5 transition-colors duration-200 hover:bg-accent"
              >
                Book a Call
                <span>
                  <BsArrowRight />
                </span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
