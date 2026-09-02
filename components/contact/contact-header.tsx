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
      <p className="font-fraunces text-[1.05rem] leading-[1.75] text-muted italic">
        {personal.tagline}
      </p>
    </PageHero>
  );
}
