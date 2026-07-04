import AboutPage from "@/components/about/about-page";
import { createPageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Funfere Keniyē Koroye's background across product management, product development, research, industrial design, and service design.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
