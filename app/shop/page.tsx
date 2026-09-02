import { Metadata } from "next";
import { ShopPage } from "@/components/shop/shop-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Shop",
  description: "Shop sculptural furniture and object releases from Keniyē.",
  path: "/shop",
});

export default function Page() {
  return <ShopPage />;
}
