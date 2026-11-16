'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { TarotFan } from '@/components/tarot/TarotFan';
import { TarotSlots } from '@/components/tarot/TarotSlots';
import { ReadingSummary } from '@/components/tarot/ReadingSummary';
import { TarotGuideSection } from '@/components/tarot/TarotGuideSection';

export default function TarotPage() {
  const [picks, setPicks] = useState<number[]>([]);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);

  const handlePick = (cardIndex: number) => {
    if (picks.length >= 3 || picks.includes(cardIndex)) return;
    setPicks(prev => [...prev, cardIndex]);
  };

  const handleReset = () => {
    setPicks([]);
  };

  const handleShuffle = () => {
    setPicks([]);
    setIsShuffling(true);
    setTimeout(() => {
      setIsShuffling(false);
    }, 550);
  };

  const hintText =
    picks.length < 3
      ? `Pick card ${picks.length + 1} of 3`
      : 'Your spread is complete';

  return (
    <section className="sec" style={{ background: 'linear-gradient(180deg, var(--bg), #f3ebf0)' }}>
      <div className="wrap">
        <SectionHeader
          className="tight"
          title="Draw your three-card spread"
          description="Take a breath, hold a question in mind, and choose three cards from the fan. Each one will be revealed as your Past, Present and Future."
        />

        <TarotFan picks={picks} onPick={handlePick} isShuffling={isShuffling} />

        <p className="hint">{hintText}</p>

        <TarotSlots picks={picks} />

        <ReadingSummary picks={picks} />

        <div className="tools">
          <button type="button" className="btn" onClick={handleShuffle} disabled={isShuffling}>
            Shuffle deck
          </button>
          <button type="button" className="btn" onClick={handleReset} disabled={picks.length === 0}>
            Start over
          </button>
        </div>

        {/* Distinct Non-Card Guide & Domain FAQs */}
        <TarotGuideSection />
      </div>
    </section>
  );
}
