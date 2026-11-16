import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ShopCarousel } from '@/components/shop/ShopCarousel';
import { ShopGuideSection } from '@/components/shop/ShopGuideSection';

export const metadata = {
  title: 'Ritual Candles & Shop | Starlit Whispers',
  description: 'Hand-poured ritual candles to set the mood for readings, meditation, and moon rituals.',
};

export default function ShopPage() {
  return (
    <section className="sec bg-bg">
      <div className="wrap">
        <SectionHeader
          badgeText="Ritual Shop"
          title="Candles for your rituals"
          description="Hand-poured candles to set the mood for readings, meditation and moon rituals. Tap a candle for a quick view."
        />
        <ShopCarousel />

        {/* Distinct Non-Card Guide & Domain FAQs */}
        <ShopGuideSection />
      </div>
    </section>
  );
}
