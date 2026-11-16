'use client';

import React, { useState } from 'react';

export function HeroCard({ position, face }: { position: 'back' | 'front'; face: string }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <button
      type="button"
      className={`hcard ${position} ${revealed ? 'is-revealed' : ''}`}
      onClick={() => setRevealed((r) => !r)}
      aria-pressed={revealed}
      aria-label={revealed ? 'Hide tarot card' : 'Reveal tarot card'}
    >
      <span className="hcard-in">
        <span className="hcard-face is-back" />
        <span
          className="hcard-face is-front"
          style={{ '--face': `url(${face})` } as React.CSSProperties}
        />
      </span>
    </button>
  );
}
