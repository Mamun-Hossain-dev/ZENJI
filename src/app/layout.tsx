import type { Metadata } from "next";
import "@fontsource/oswald/600.css";
import "@fontsource/oswald/700.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";
import { AnnouncementBar } from "@/components/common/AnnouncementBar";
import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { NewsletterModal } from "@/components/common/NewsletterModal";
import { PageTransition } from "@/components/common/PageTransition";
import { SwordCursor } from "@/components/common/SwordCursor";

export const metadata: Metadata = {
  title: { default: "ZENJI — Wear Your Story", template: "%s — ZENJI" },
  description:
    "Original anime-inspired streetwear. Limited drops, built between Sydney and Tokyo.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AnnouncementBar />
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <NewsletterModal />
        <SwordCursor />
      </body>
    </html>
  );
}
