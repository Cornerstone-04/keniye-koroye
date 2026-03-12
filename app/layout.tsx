import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Cursor from "@/components/ui/Cursor";
import Footer from "@/components/layout/Footer";


export const metadata: Metadata = {
  title: {
    default: "Keniye — Product Manager, Developer & Researcher",
    template: "%s | Keniye",
  },
  description:
    "Funfere B. Koroye is a certified Product Manager and Design Engineer with expertise in Industrial, Service, and UX design. Global Talent Visa recipient. Based in London.",
  keywords: [
    "Product Manager",
    "Product Developer",
    "UX Researcher",
    "Funfere Koroye",
    "Keniye",
    "Product Design",
    "London",
    "Tech Nation",
    "Global Talent Visa",
    "Cradle Health",
    "Nupe Energy",
  ],
  authors: [
    { name: "Funfere B. Koroye", url: "https://keniyekoroye.vercel.app" },
  ],
  creator: "Funfere B. Koroye",
  metadataBase: new URL("https://keniyekoroye.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://keniyekoroye.vercel.app",
    title: "Keniye — Product Manager, Developer & Researcher",
    description:
      "Funfere B. Koroye is a certified Product Manager and Design Engineer. Global Talent Visa recipient. Building impactful technology from London.",
    siteName: "Keniye Portfolio",
    images: [
      {
        url: "https://keniyekoroye.vercel.app/keniye-og.png",
        width: 2000,
        height: 2000,
        alt: "Keniye — Product Manager, Developer & Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keniye — Product Manager, Developer & Researcher",
    description:
      "Funfere B. Koroye is a certified Product Manager and Design Engineer. Global Talent Visa recipient. Building impactful technology from London.",
    creator: "@keniyekoroye",
    images: ["https://keniyekoroye.vercel.app/keniye-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300;1,9..144,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'DM Mono', monospace", fontWeight: 300 }}>
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
