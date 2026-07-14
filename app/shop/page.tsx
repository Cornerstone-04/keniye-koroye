import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
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
      <section className="relative aspect-4/3 min-h-128 max-h-[calc(100svh-3.5625rem)] w-full overflow-hidden border-b-[3px] border-double border-ink sm:aspect-16/7">
        <Image
          src="/images/shop-hero.jpeg"
          alt="A collection of sculptural wooden tables in Keniye Koroye's showroom"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_68%] sm:object-[center_62%]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-black/25" />

        <div className="absolute inset-x-0 bottom-0 px-6 pb-8 text-paper md:px-12 md:pb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-paper/80 font-mono">
              External Store
            </span>
            <span className="h-px flex-1 bg-paper/45" />
          </div>
          <h1
            className="font-playfair font-black leading-[0.85] -tracking-[0.035em]"
            style={{ fontSize: "clamp(4rem, 11vw, 9rem)" }}
          >
            Shop <em className="text-accent">Objects</em>
          </h1>
        </div>
      </section>

      <section className="grid gap-6 border-b-[3px] border-double border-ink px-6 py-8 md:grid-cols-2 md:gap-16 md:px-12 md:py-10">
        <p className="max-w-xl font-fraunces italic text-[1.25rem] leading-[1.6] md:text-[1.5rem]">
          A dedicated store for products, objects, and limited releases.
        </p>
        <div className="space-y-4 text-[0.78rem] md:text-[0.85rem] leading-[1.85] text-muted">
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
      </section>
    </div>
  );
}
