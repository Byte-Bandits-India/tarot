'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ARCANA } from '@/data/arcana';

interface TarotFanProps {
  picks: number[];
  onPick: (index: number) => void;
  isShuffling: boolean;
}

export function TarotFan({ picks, onPick, isShuffling }: TarotFanProps) {
  const fanRef = useRef<HTMLDivElement>(null);
  const [fanHeight, setFanHeight] = useState<number>(360);
  const [cardTransforms, setCardTransforms] = useState<{ cw: number; t: string; zIndex: number }[]>([]);

  const updateLayout = useCallback(() => {
    if (!fanRef.current) return;
    const W = fanRef.current.clientWidth || 800;
    const n = ARCANA.length;
    const cw = Math.min(W / 11, 112);
    const da = (2.4 * Math.PI) / 180;
    const max = ((n - 1) / 2) * da;
    const R = (W * 0.46 - cw / 2) / Math.sin(max);

    const calculatedHeight = cw * 1.75 + R * (1 - Math.cos(max)) + 20;
    setFanHeight(calculatedHeight);

    const transforms = ARCANA.map((_, i) => {
      const th = (i - (n - 1) / 2) * da;
      const t = `translateX(-50%) translate(${R * Math.sin(th)}px, ${R * (1 - Math.cos(th))}px) rotate(${th}rad)`;
      return { cw, t, zIndex: i };
    });

    setCardTransforms(transforms);
  }, []);

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [updateLayout]);

  return (
    <div
      ref={fanRef}
      className={`fan ${isShuffling ? 'shuffle' : ''}`}
      style={{ height: `${fanHeight}px` }}
    >
      {ARCANA.map((card, i) => {
        const isPicked = picks.includes(i);
        const transformData = cardTransforms[i];
        if (!transformData) return null;

        return (
          <button
            key={i}
            type="button"
            className={`fc ${isPicked ? 'gone' : ''}`}
            aria-label={`Face-down tarot card ${i + 1}`}
            disabled={isPicked || picks.length >= 3 || isShuffling}
            onClick={() => onPick(i)}
            style={
              {
                '--cw': `${transformData.cw}px`,
                '--t': transformData.t,
                transform: transformData.t,
                zIndex: transformData.zIndex
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
