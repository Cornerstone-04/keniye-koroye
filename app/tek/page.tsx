import TekPage from "@/components/story-pages/tek-page";
import { createPageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "TEK Grant",
  description:
    "The Taukeme Edwin Koroye Grant honors a legacy of education, technology, opportunity, and community impact.",
  path: "/tek",
});

export default function Page() {
  return <TekPage />;
}
