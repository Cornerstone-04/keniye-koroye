import { Metadata } from "next";
import { ShopProductPage } from "@/components/shop/shop-product-page";
import { createPageMetadata } from "@/lib/metadata";
import { shopProducts } from "@/lib/shop";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return shopProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = shopProducts.find((item) => item.slug === slug);

  if (!product) {
    return createPageMetadata({
      title: "Shop Object",
      description: "Shop sculptural furniture and object releases from Keniyē.",
      path: "/shop",
    });
  }

  return createPageMetadata({
    title: product.name,
    description: product.description,
    path: `/shop/${product.slug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return <ShopProductPage slug={slug} />;
}
