import HomePage from "@/components/home/home-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: {
    absolute: "Keniyē — Product Manager, Developer & Researcher",
  },
  description:
    "Funfere Keniyē Koroye is a Product Manager, Product Developer, and Product Researcher building impactful technology from London.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
