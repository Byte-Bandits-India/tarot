import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { PathwaysSection } from '@/components/home/PathwaysSection';
import { WhyAstrologySection } from '@/components/home/WhyAstrologySection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FaqSection } from '@/components/home/FaqSection';
import { CtaBanner } from '@/components/home/CtaBanner';

export const metadata = {
  title: 'Starlit Whispers | Tarot, Astrology & Spiritual Guidance',
  description:
    'Your sacred abode for online astrology, Vedic consultations, tarot readings, and personalized numerology guidance.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PathwaysSection />
      <WhyAstrologySection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaBanner />
      <FaqSection />
    </>
  );
}
