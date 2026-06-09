import React from "react";
import FadeIn from "../ui/FadeIn";

const GlobalTalentVisaHeader = () => {
  return (
    <section className="px-6 md:px-12 pt-10 pb-8 border-b-[3px] border-double border-ink">
      <FadeIn delay={0.05}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-accent font-mono">
            Build a profile that earns it.
          </span>
          <span className="flex-1 h-px bg-rule" />
        </div>
      </FadeIn>

      <div className="py-8 flex flex-col md:grid md:grid-cols-2 gap-8  md:items-end">
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
            <div className="space-y-4 text-[0.78rem] md:text-[0.85rem] leading-[1.85] text-muted">
              <p>
                Over the past few years, many people have asked me how to
                qualify for the UK Global Talent Visa. Most people start in the
                wrong place. They focus on documents, application strategies,
                and checklists.
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
  );
};

export default GlobalTalentVisaHeader;
