import { personal } from "@/lib/data";
import { BsArrowRight } from "react-icons/bs";
import FadeIn from "../ui/FadeIn";
import { GTVSectionLabel } from "./gtv-section-label";

export const GlobalTalentVisaCTA = () => {
  return (
    <section className="px-6 md:px-12 py-10 md:py-14 border-t border-rule">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 md:items-end">
        <FadeIn delay={0.1}>
          <div>
            <GTVSectionLabel>Need Guidance?</GTVSectionLabel>
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
              className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase font-mono no-underline text-paper bg-ink px-6 md:px-7 py-3.5 transition-all ease-linear duration-200 hover:bg-accent"
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
  );
};
