import type { Metadata } from "next";
import TekPage from "@/components/story-pages/tek-page";

export const metadata: Metadata = {
  title: "TEK Grant",
  description:
    "The Taukeme Edwin Koroye Grant honors a legacy of education, technology, opportunity, and community impact.",
  alternates: {
    canonical: "/tek",
  },
  openGraph: {
    title: "TEK Grant | Keniyē",
    description:
      "The Taukeme Edwin Koroye Grant honors a legacy of education, technology, opportunity, and community impact.",
    url: "/tek",
  },
};

export default function Page() {
  return <TekPage />;
}
