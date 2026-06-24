import type { Metadata } from "next";
import ColabPage from "@/components/story-pages/colab-page";

export const metadata: Metadata = {
  title: "COLAB",
  description:
    "COLAB is Keniye Koroye's evolving space for creative partnerships across art, design, fashion, technology, and culture.",
  alternates: {
    canonical: "/colab",
  },
  openGraph: {
    title: "COLAB | Keniyē",
    description:
      "COLAB is Keniye Koroye's evolving space for creative partnerships across art, design, fashion, technology, and culture.",
    url: "/colab",
  },
};

export default function Page() {
  return <ColabPage />;
}
