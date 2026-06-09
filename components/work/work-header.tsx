import PageHero from "../ui/PageHero";

export function WorkHeader() {
  return (
    <PageHero
      eyebrow="Selected Projects"
      title={
        <>
          Work That
          <br />
          <em className="text-accent">Ships</em>
        </>
      }
    />
  );
}
