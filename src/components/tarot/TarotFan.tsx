'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ARCANA } from '@/data/arcana';

interface TarotFanProps {
  picks: number[];
  onPick: (index: number) => void;
  isShuffling: boolean;
}

const CARDS_IN_FAN = 60;
const CARDS_IN_FAN_NARROW = 30; // fewer cards on phones so each one stays tappable
const ARC_RADIUS = 0.9; // arch radius as a fraction of the screen width
const ARC_REACH = 0.52; // how far the outermost cards reach, as a fraction of the width (>0.5 = cut off at the edges)
const ARC_VISIBLE = 0.35; // how much of the arch's sideways drop stays visible (the rest is clipped)
const FAN_TOP = 24; // headroom so a hovered card can lift without being clipped
const APPEAR_INTERVAL_S = 0.025; // each card fades in this many seconds after the previous one

function drawFromDeck(count: number): number[] {
  const deck = Array.from({ length: ARCANA.length }, (_, i) => i);
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck.slice(0, count);
}

export function TarotFan({ picks, onPick, isShuffling }: TarotFanProps) {
  const fanRef = useRef<HTMLDivElement>(null);
  const wasShuffling = useRef(false);
  const [deal, setDeal] = useState<number[]>([]); // ARCANA indices drawn for the fan
  const [round, setRound] = useState(0); // bumps on every shuffle so the animation replays
  const [inView, setInView] = useState(false);
  const [shown, setShown] = useState<number[]>([]); // cards whose fade-in has started
  const [width, setWidth] = useState(0);

  const measure = useCallback(() => {
    if (fanRef.current) setWidth(fanRef.current.clientWidth);
  }, []);

  const layOut = useCallback(() => {
    setDeal(drawFromDeck(CARDS_IN_FAN));
    setShown([]);
    setRound((r) => r + 1);
  }, []);

  // Draw the cards on the client (random, so not during server render).
  useEffect(() => {
    const id = setTimeout(() => {
      measure();
      layOut();
    }, 0);
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(id);
      window.removeEventListener('resize', measure);
    };
  }, [measure, layOut]);

  // Reshuffle once the shuffle pause is over.
  useEffect(() => {
    if (wasShuffling.current && !isShuffling) layOut();
    wasShuffling.current = isShuffling;
  }, [isShuffling, layOut]);

  // Start the fade-in when the fan scrolls into view.
  useEffect(() => {
    const el = fanRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Lay the cards out along a semicircular arch.
  const W = width || 800;
  const visible = W < 640 ? deal.slice(0, CARDS_IN_FAN_NARROW) : deal;
  const n = visible.length;
  const cw = Math.min(W / 12, 100);
  const R = ARC_RADIUS * W;
  const max = Math.asin(Math.min(ARC_REACH / ARC_RADIUS, 1));
  const da = n > 1 ? (2 * max) / (n - 1) : 0;
  const fanHeight = FAN_TOP + cw * 1.75 + R * (1 - Math.cos(max)) * ARC_VISIBLE;

  return (
    <div
      ref={fanRef}
      className={`fan ${inView ? 'in-view' : ''} ${isShuffling ? 'shuffling' : ''}`}
      style={{ height: `${fanHeight}px`, '--step': `${APPEAR_INTERVAL_S}s` } as React.CSSProperties}
    >
      {visible.map((cardIndex, k) => {
        const th = (k - (n - 1) / 2) * da;
        const t = `translateX(-50%) translate(${R * Math.sin(th)}px, ${R * (1 - Math.cos(th))}px) rotate(${th}rad)`;
        const isPicked = picks.includes(cardIndex);
        return (
          <button
            key={`${round}-${cardIndex}`}
            type="button"
            className={`fc ${isPicked ? 'gone' : ''}`}
            aria-label={`Face-down tarot card ${k + 1}`}
            disabled={isPicked || picks.length >= 3 || isShuffling || !shown.includes(k)}
            onClick={() => onPick(cardIndex)}
            onAnimationStart={() => setShown((s) => (s.includes(k) ? s : [...s, k]))}
            style={
              {
                '--cw': `${cw}px`,
                '--t': t,
                '--i': n - 1 - k, // right-most card appears first
                zIndex: k,
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
