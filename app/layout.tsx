import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Cursor from "@/components/ui/Cursor";

export const metadata: Metadata = {
  title: "Keniye — Product Manager & Developer",
  description: "Portfolio of Keniye — Product Manager, Developer, and Researcher building products that matter.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300;1,9..144,400&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'DM Mono', monospace", fontWeight: 300 }}>
        <Cursor />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
