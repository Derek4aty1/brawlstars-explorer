import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Scroll from '@/components/layout/Scroll';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Brawlstars Explorer',
  description: 'Explore the Brawlstars universe!',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <Scroll />
      <body className="m-0 flex min-h-full flex-col text-balance bg-blue-700 p-0 text-center font-lilita-one text-white text-shadow-outline">
        <Header />
        <div className="fixed left-0 top-0 z-[-1] h-full w-full">
          <video autoPlay playsInline loop muted className="h-full w-full overflow-hidden object-cover">
            <source src="/videos/brawl-lobby-animated.mp4" type="video/mp4" className="select-none" />
          </video>
        </div>
        <main className="flex flex-1 items-start justify-center">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
