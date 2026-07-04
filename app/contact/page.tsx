import ContactPage from "@/components/contact/contact-page";
import { createPageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Funfere Keniyē Koroye for product management, product development, UX research, and technology collaboration.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
