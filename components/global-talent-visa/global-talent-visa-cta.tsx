import { personal } from "@/lib/data";
import { BsArrowRight } from "react-icons/bs";
import FadeIn from "../ui/FadeIn";
import { GTVSectionLabel } from "./gtv-section-label";

export const GlobalTalentVisaCTA = () => {
  return (
    <section className="border-b-[3px] border-double border-ink px-6 py-10 md:px-12 md:py-14">
      <div className="border border-rule bg-cream px-5 py-7 md:px-8 md:py-9">
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:items-end md:gap-16">
          <FadeIn delay={0.1}>
            <div>
              <GTVSectionLabel>Let&apos;s Talk</GTVSectionLabel>
              <h2 className="text-[1.35rem] leading-tight font-black md:text-2xl">
                Want an honest assessment of your profile?
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-xl space-y-6">
              <p className="text-[0.78rem] leading-[1.85] text-muted md:text-[0.85rem]">
                If you&apos;re working toward the Global Talent Visa and want
                practical feedback on your positioning, evidence, portfolio, or
                overall readiness, let&apos;s talk.
              </p>
              <p className="text-[0.72rem] leading-[1.75] text-muted md:text-[0.78rem]">
                A conversation can help you understand your path more clearly
                before you start organising documents.
              </p>
              <a
                href={personal.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 bg-ink px-6 py-3.5 font-mono text-[0.65rem] tracking-[0.2em] text-paper uppercase no-underline transition-all duration-200 ease-linear hover:bg-accent md:w-auto md:px-7"
              >
                Book A Call
                <span>
                  <BsArrowRight />
                </span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
