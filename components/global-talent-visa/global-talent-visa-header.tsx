import PageHero from "@/components/ui/PageHero";

export const GlobalTalentVisaHeader = () => {
  return (
    <PageHero
      as="h1"
      eyebrow="Recipient Guide"
      innerClassName="md:gap-12 md:items-start"
      headlineClassName="max-w-4xl"
      title={
        <>
          Global Talent
          <br />
          <em className="text-accent">Visa</em>
        </>
      }
    >
      <div className="max-w-xl space-y-5 text-[0.78rem] leading-[1.9] text-muted md:text-[0.88rem]">
        <p
          className="font-fraunces text-[1.1rem] leading-[1.7] italic md:text-[1.3rem]"
          style={{ color: "var(--muted)" }}
        >
          A practical guide from someone who has already gone through the
          process.
        </p>
        <p>
          Over the past few years, many people have asked me how to qualify for
          the UK Global Talent Visa. Most people start in the wrong place. They
          focus on documents, application strategies, and checklists.
        </p>
        <p>
          But the visa is really asking a much simpler question: are you
          already, or clearly becoming, someone your industry recognises as
          valuable?
        </p>
        <div className="grid gap-3 border-t border-rule pt-5 font-mono text-[0.58rem] tracking-[0.16em] text-accent uppercase sm:grid-cols-3">
          <span>Positioning</span>
          <span>Evidence</span>
          <span>Validation</span>
        </div>
      </div>
    </PageHero>
  );
};
