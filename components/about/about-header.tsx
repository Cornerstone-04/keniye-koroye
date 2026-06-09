import PageHero from "../ui/PageHero";

export function AboutHeader() {
  return (
    <PageHero
      eyebrow="About the Person"
      title={
        <>
          The Man Behind
          <br />
          The <em className="text-accent">Products</em>
        </>
      }
    />
  );
}
