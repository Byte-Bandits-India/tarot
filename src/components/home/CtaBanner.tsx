import React from 'react';
import Link from 'next/link';

export function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="wrap">
        <h2>Seek Clarity for the Path Ahead</h2>
        <p>
          Whether navigating career choices, relationship crossroads, or spiritual evolution, our gifted readers are here to guide you.
        </p>
        <div className="cta-buttons">
          <Link href="/healers" className="btn primary">
            Book a Healer Session
          </Link>
          <Link href="/tarot" className="btn cta-outline">
            Draw a 3-Card Spread
          </Link>
        </div>
      </div>
    </section>
  );
}
