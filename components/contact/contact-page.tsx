"use client";

import { ContactHeader } from "./contact-header";
import { ContactTestimonials } from "./contact-testimonials";
import { ContactLayout } from "./contact-layout";

export default function ContactPage() {
  return (
    <div
      className="min-h-screen pt-14.25"
      style={{ background: "var(--paper)" }}
    >
      <ContactHeader />
      <ContactTestimonials />
      <ContactLayout />
    </div>
  );
}
