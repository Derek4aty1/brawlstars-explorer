import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Brawlstars Explorer",
  description: "Explore the Brawlstars universe!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="fixed top-0 left-0 w-full h-full z-[-1]">
          <video autoPlay playsInline loop muted className="w-full h-full object-cover overflow-hidden">
            <source src="/videos/brawl-lobby-animated.mp4" type="video/mp4" className="select-none" />
          </video>
        </div>
        <main className="p-8">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
