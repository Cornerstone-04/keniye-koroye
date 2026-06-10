import PageHero from "@/components/ui/PageHero";

export const GlobalTalentVisaHeader = () => {
  return (
    <PageHero
      as="h1"
      eyebrow="Build a profile that earns it."
      innerClassName="py-8 md:gap-8"
      title={
        <>
          Global Talent
          <br />
          <em className="text-accent">Visa</em>
        </>
      }
    >
      <div className="space-y-4 text-[0.78rem] md:text-[0.85rem] leading-[1.85] text-muted">
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
      </div>
    </PageHero>
  );
};

