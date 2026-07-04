import ColabPage from "@/components/story-pages/colab-page";
import { createPageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "COLAB",
  description:
    "COLAB is Keniye Koroye's evolving space for creative partnerships across art, design, fashion, technology, and culture.",
  path: "/colab",
});

export default function Page() {
  return <ColabPage />;
}
