import type { Metadata } from 'next';
import './globals.css';
import 'lenis/dist/lenis.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/common/SmoothScroll';

export const metadata: Metadata = {
  title: 'Starlit Whispers | Tarot & Astrological Guidance',
  description:
    'Connect with gifted tarot readers, explore personalized numerology, read daily horoscopes, and discover ritual candles at Starlit Whispers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
