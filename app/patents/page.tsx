import PatentsPage from "@/components/story-pages/patents-page";
import { createPageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Patents",
  description:
    "Patent-pending innovation by Keniye Koroye exploring wearable intelligence, AI, robotics, and human-machine interaction.",
  path: "/patents",
});

export default function Page() {
  return <PatentsPage />;
}
