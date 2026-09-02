import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import FadeIn from "@/components/ui/FadeIn";
import { personal } from "@/lib/profile";
import { shopProducts, type ShopProduct } from "@/lib/shop";

export function ShopPage() {
  const featuredProduct = shopProducts[0];
  const hasStoreUrl = Boolean(personal.shopUrl);

  return (
    <div className="min-h-screen bg-paper pt-14.25">
      <ShopHero product={featuredProduct} />
      <ShopIntro hasStoreUrl={hasStoreUrl} />
      <ShopCatalogue products={shopProducts} />
    </div>
  );
}

function ShopHero({ product }: { product: ShopProduct }) {
  return (
    <section className="grid min-h-[calc(100svh-3.5625rem)] border-b-[3px] border-double border-ink md:grid-cols-[1.16fr_0.84fr]">
      <div className="relative min-h-[58svh] overflow-hidden border-b border-rule bg-cream md:min-h-0 md:border-r md:border-b-0">
        <Image
          src="/images/shop/rive/shop-rive-hero.jpeg"
          alt="Rive sculptural table and stool in an interior space"
          fill
          priority
          sizes="(min-width: 768px) 58vw, 100vw"
          className="object-cover object-[54%_64%]"
        />
      </div>

      <div className="flex min-h-full flex-col justify-between px-6 py-8 md:px-10 md:py-10 lg:px-12">
        <FadeIn delay={0.08} direction="none">
          <div className="max-w-lg">
            <p className="mb-5 font-mono text-[0.62rem] tracking-[0.24em] text-accent uppercase">
              Shop Objects
            </p>
            <h1
              className="font-playfair leading-[0.88] font-black -tracking-[0.03em]"
              style={{ fontSize: "clamp(3.4rem, 8vw, 7.5rem)" }}
            >
              Collectible items by Keniyē.
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mt-10 max-w-md space-y-6 md:mt-0">
            <p className="font-fraunces text-[1.05rem] leading-[1.7] text-muted italic md:text-[1.2rem]">
              Sculptural objects shaped through material culture, local
              manufacturing, and Keniye&apos;s instinct for product stories.
            </p>
            <a
              href="#shop-objects"
              className="inline-flex items-center gap-3 bg-ink px-6 py-3.5 font-mono text-[0.65rem] tracking-[0.2em] text-paper uppercase no-underline transition-colors duration-200 hover:bg-accent"
            >
              View Objects
              <BsArrowRight aria-hidden="true" />
            </a>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-rule pt-5 font-mono text-[0.6rem] tracking-[0.16em] text-muted uppercase md:mt-0">
          <span>{product.name}</span>
          <span className="text-right">{product.category}</span>
        </div>
      </div>
    </section>
  );
}

function ShopIntro({ hasStoreUrl }: { hasStoreUrl: boolean }) {
  return (
    <section className="grid gap-8 border-b border-rule px-6 py-8 md:grid-cols-[0.8fr_1.2fr] md:px-12 md:py-10">
      <FadeIn delay={0.08}>
        <p className="font-mono text-[0.62rem] tracking-[0.22em] text-accent uppercase">
          Current Catalogue
        </p>
      </FadeIn>

      <FadeIn delay={0.14}>
        <div className="max-w-3xl space-y-4 text-[0.8rem] leading-[1.9] text-muted md:text-[0.9rem]">
          <p>
            The shop is staying here for now while the external storefront takes
            shape. These objects can be presented as a compact catalogue first,
            with direct enquiries replacing checkout until the store link is
            ready.
          </p>
          {hasStoreUrl ? (
            <a
              href={personal.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.2em] text-ink uppercase underline underline-offset-6 transition-colors hover:text-accent"
            >
              Visit Store
              <BsArrowRight aria-hidden="true" />
            </a>
          ) : (
            <p className="font-mono text-[0.62rem] tracking-[0.16em] text-accent uppercase">
              Store link coming soon
            </p>
          )}
        </div>
      </FadeIn>
    </section>
  );
}

function ShopCatalogue({ products }: { products: ShopProduct[] }) {
  return (
    <section
      id="shop-objects"
      className="border-b-[3px] border-double border-ink px-6 py-12 md:px-12 md:py-16"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(10rem,16rem)_1fr] md:gap-16">
        <FadeIn delay={0.08} className="md:sticky md:top-24 md:self-start">
          <div className="border-t border-rule pt-4">
            <div className="flex items-center justify-between gap-6 font-mono text-[0.68rem] tracking-[0.18em] uppercase">
              <span>Objects</span>
              <span className="text-muted">{products.length}</span>
            </div>
            <p className="mt-6 max-w-52 text-[0.76rem] leading-[1.8] text-muted">
              Limited furniture pieces and prototypes from Keniye&apos;s object
              practice.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
          {products.map((product, index) => (
            <ShopProductCard
              key={product.slug}
              product={product}
              delay={0.12 + index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShopProductCard({
  product,
  delay,
}: {
  product: ShopProduct;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <article className="group">
        <Link
          href={`/shop/${product.slug}`}
          className="block overflow-hidden border border-rule bg-cream no-underline"
          aria-label={`View ${product.name}`}
        >
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={`${product.name} by Keniye Koroye`}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </Link>

        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <h2 className="font-playfair text-[1.45rem] leading-tight font-black md:text-[1.65rem]">
              {product.name}
            </h2>
            <p className="mt-1 font-mono text-[0.58rem] tracking-[0.18em] text-accent uppercase">
              {product.category}
            </p>
          </div>
          <Link
            href={`/shop/${product.slug}`}
            className="mt-1 inline-flex shrink-0 items-center gap-2 font-mono text-[0.6rem] tracking-[0.16em] text-ink uppercase no-underline transition-colors hover:text-accent"
          >
            View
            <BsArrowRight aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-4 max-w-xl text-[0.78rem] leading-[1.85] text-muted md:text-[0.85rem]">
          {product.description}
        </p>
      </article>
    </FadeIn>
  );
}
