import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { HealerBooking } from '@/components/healers/HealerBooking';
import { HealersGuideSection } from '@/components/healers/HealersGuideSection';

export const metadata = {
  title: 'Book a Healer | Starlit Whispers',
  description: 'Schedule a personalized reading with our gifted Vedic astrologers, tarot readers, reiki healers, and numerologists.',
};

export default function HealersPage() {
  return (
    <section className="sec bg-bg">
      <div className="wrap">
        <SectionHeader
          badgeText="Healer Booking"
          title="Book a session with a healer"
          description="Choose your healer, pick a date and a time that suits you."
        />
        <HealerBooking />

        {/* Distinct Non-Card Guide & Domain FAQs */}
        <HealersGuideSection />
      </div>
    </section>
  );
}
