import { personal } from "@/lib/data";
import PageHero from "../ui/PageHero";

export function ContactHeader() {
  return (
    <PageHero
      title={
        <>
          Let&apos;s Build
          <br />
          Something <em className="text-accent">Real</em>
        </>
      }
    >
      <p className="leading-[1.75] font-fraunces italic text-[1.05rem] text-muted">
        {personal.tagline}
      </p>
    </PageHero>
  );
}
