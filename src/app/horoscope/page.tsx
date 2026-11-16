import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { HoroscopeSection } from '@/components/horoscope/HoroscopeSection';
import { HoroscopeGuideSection } from '@/components/horoscope/HoroscopeGuideSection';

export const metadata = {
  title: 'Horoscope & Astrology | Starlit Whispers',
  description: 'Explore daily, weekly, monthly, and yearly horoscopes and characteristics for all 12 zodiac signs.',
};

export default function HoroscopePage() {
  return (
    <section className="sec bg-[#f5f3fd]">
      <div className="wrap">
        <SectionHeader
          badgeText="Horoscope & Numerology"
          title="Check your horoscope and numbers"
          description="Enter your name and date of birth to reveal your zodiac sign, your horoscope and your core numerology numbers — or simply browse any sign below."
        />
        <HoroscopeSection />

        {/* Distinct Non-Card Guide & Domain FAQs */}
        <HoroscopeGuideSection />
      </div>
    </section>
  );
}
