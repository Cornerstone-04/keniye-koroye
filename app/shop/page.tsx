import { BsArrowRight } from "react-icons/bs";
import PageHero from "@/components/ui/PageHero";
import { personal } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Shop",
  description:
    "Shop objects, products, and limited releases from Keniye Koroye.",
  path: "/shop",
});

export default function Page() {
  const hasStoreUrl = Boolean(personal.shopUrl);

  return (
    <div className="min-h-screen pt-14.25 bg-paper">
      <PageHero
        as="h1"
        eyebrow="External Store"
        title={
          <>
            Shop
            <br />
            <em className="text-accent">Objects</em>
          </>
        }
      >
        <div className="space-y-4 text-[0.78rem] md:text-[0.85rem] leading-[1.85] text-muted">
          <p className="font-fraunces italic text-[1.05rem] leading-[1.75]">
            A dedicated store for products, objects, and limited releases.
          </p>
          <p>
            This page is set up as a bridge to an external storefront. Once the
            store link is ready, the button below can point visitors directly
            there.
          </p>
          {hasStoreUrl ? (
            <a
              href={personal.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase font-mono no-underline text-paper bg-ink px-6 md:px-7 py-3.5 transition-all ease-linear duration-200 hover:bg-accent"
            >
              Visit Store
              <span>
                <BsArrowRight />
              </span>
            </a>
          ) : (
            <p className="text-[0.62rem] tracking-[0.16em] uppercase text-accent font-mono">
              Store link coming soon
            </p>
          )}
        </div>
      </PageHero>
    </div>
  );
}
