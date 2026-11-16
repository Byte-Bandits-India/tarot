import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { HelpWithSection } from '@/components/home/HelpWithSection';
import { TrustSection } from '@/components/home/TrustSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FaqSection } from '@/components/home/FaqSection';
import { CtaBanner } from '@/components/home/CtaBanner';

export const metadata = {
  title: 'Sonal Jain | Astrologer, Tarot Reader & Numerologist',
  description:
    'Sonal Jain, ISO certified astrologer. Tarot reading, numerology and healing to guide you from uncertainty to clarity.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HelpWithSection />
      <TrustSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaBanner />
      <FaqSection />
    </>
  );
}
