import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { NumerologySection } from '@/components/numerology/NumerologySection';

export const metadata = {
  title: 'Numerology Calculator & Reading | Starlit Whispers',
  description: 'Calculate your Life Path, Expression, Soul Urge, Personality, and Birthday numbers with our free Pythagorean numerology calculator.',
};

export default function NumerologyPage() {
  return (
    <section className="sec" style={{ background: 'linear-gradient(180deg, #f9f3ef, var(--bg) 40%)' }}>
      <div className="wrap">
        <SectionHeader
          title="Numerology Calculator & Personalized Reading"
          description="Discover your Life Path, Destiny, Soul Urge & Personality Numbers"
        />
        <NumerologySection />
      </div>
    </section>
  );
}
