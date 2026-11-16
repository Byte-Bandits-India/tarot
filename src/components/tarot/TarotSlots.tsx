'use client';

import React, { useEffect, useState } from 'react';
import { ARCANA, SLOT_NAMES } from '@/data/arcana';

interface TarotSlotsProps {
  picks: number[];
}

export function TarotSlots({ picks }: TarotSlotsProps) {
  const [flipped, setFlipped] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    if (picks.length === 0) {
      const resetTimer = setTimeout(() => {
        setFlipped([false, false, false]);
      }, 0);
      return () => clearTimeout(resetTimer);
    }

    const timers = picks.map((_, i) =>
      setTimeout(() => {
        setFlipped((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 80)
    );

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [picks]);

  return (
    <div className="slots">
      {SLOT_NAMES.map((slotLabel, i) => {
        const cardIndex = picks[i];
        const card = cardIndex != null ? ARCANA[cardIndex] : null;

        return (
          <div key={slotLabel} className="slot">
            <div className="lbl">{slotLabel}</div>
            {card ? (
              <>
                <div className={`flip ${flipped[i] ? 'on' : ''}`}>
                  <div className="in">
                    <div className="face f" />
                    <div
                      className="face b"
                      style={{ backgroundImage: `url('${card.frontImage}')` }}
                    />
                  </div>
                </div>
                <h3>{card.name}</h3>
                <div className="sub2">{card.subtitle}</div>
                <p>{card.description}</p>
              </>
            ) : (
              <div className="ph">✦</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
