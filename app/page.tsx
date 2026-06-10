import type { Metadata } from "next";
import HomePage from "@/components/home/home-page";

export const metadata: Metadata = {
  title: {
    absolute: "Keniyē — Product Manager, Developer & Researcher",
  },
  description:
    "Funfere Keniyē Koroye is a Product Manager, Product Developer, and Product Researcher building impactful technology from London.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Keniyē — Product Manager, Developer & Researcher",
    description:
      "Funfere Keniyē Koroye is a Product Manager, Product Developer, and Product Researcher building impactful technology from London.",
    url: "/",
  },
};

export default function Page() {
  return <HomePage />;
}
