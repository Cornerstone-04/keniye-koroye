import type { Metadata } from "next";
import AboutPage from "@/components/about/about-page";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Funfere Keniyē Koroye's background across product management, product development, research, industrial design, and service design.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Keniyē",
    description:
      "Learn about Funfere Keniyē Koroye's background across product management, product development, research, industrial design, and service design.",
    url: "/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
