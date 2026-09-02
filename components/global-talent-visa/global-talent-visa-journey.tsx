import FadeIn from "@/components/ui/FadeIn";
import { visaBenefits } from "@/lib/gtv-details";
import { GTVSectionLabel } from "./gtv-section-label";
import { GTVJourneyImage } from "./gtv-journey-image";

export const GlobalTalentVisaJourney = () => {
  return (
    <section className="border-b border-rule">
      <div className="px-6 py-10 md:px-12 md:py-14">
        <GTVSectionLabel>My Journey</GTVSectionLabel>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-16">
          <FadeIn delay={0.1}>
            <div>
              <h2
                className="mb-6 font-playfair leading-tight font-black -tracking-[0.02em]"
                style={{ fontSize: "clamp(1.35rem, 3vw, 2rem)" }}
              >
                The application started years before I applied.
              </h2>

              <div className="space-y-4 text-[0.78rem] leading-[1.85] text-muted md:text-[0.85rem]">
                <p>
                  One of the biggest misconceptions about the Global Talent Visa
                  is that the application begins when you decide to apply.
                </p>
                <p>In reality, it begins years earlier.</p>

                <ul className="space-y-2 py-1">
                  {[
                    "The projects you build.",
                    "The people you work with.",
                    "The communities you contribute to.",
                    "The reputation you earn.",
                  ].map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-3 h-px w-4 shrink-0 bg-accent" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <p>
                  By the time I submitted my application, the evidence already
                  existed. The challenge was simply presenting the story
                  clearly.
                </p>
              </div>

              <div className="mt-6 border-t border-rule pt-5">
                <span className="font-mono text-[0.6rem] tracking-[0.18em] text-accent uppercase">
                  Benefits Of The Visa
                </span>
                <div className="mt-4 grid gap-0 border-t border-rule">
                  {visaBenefits.map((benefit) => (
                    <div key={benefit} className="border-b border-rule py-3.5">
                      <span className="text-[0.76rem] leading-snug text-muted md:text-[0.82rem]">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="md:h-full">
            <div className="md:h-full">
              <GTVJourneyImage />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
