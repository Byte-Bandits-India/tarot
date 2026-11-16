import React from 'react';
import { CheckCircleIcon } from '@/components/common/Icons';

const expect = [
  'Accurate Insights & Practical Guidance',
  'Personalized & Confidential Readings',
  'Support in Tough Times & Transitions',
  'Clarity, Peace & Positive Transformation',
  'Empowerment to Create Your Best Life',
];

const why = [
  'Years of Experience & Deep Intuition',
  'Ethical, Honest & Positive Approach',
  '100% Confidential & Respectful',
  'Guidance That Empowers You',
  'Trusted by Many, Recommended by Hearts',
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="trust-list">
      {items.map((t) => (
        <li key={t}>
          <CheckCircleIcon size={18} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

const fans = {
  a: ['card1', 'card2', 'card3'],
  b: ['card3', 'card1', 'card2'],
};

function CardVisual({ variant }: { variant: 'a' | 'b' }) {
  return (
    <div className={`trust-visual trust-visual-${variant}`} aria-hidden="true">
      {fans[variant].map((c, i) => (
        <span
          key={c}
          className={`trust-card trust-card-${i + 1}`}
          style={{ backgroundImage: `url(/assets/cards/${c}.png)` }}
        />
      ))}
    </div>
  );
}

export function TrustSection() {
  return (
    <section className="trust-section">
      <div className="wrap">
        <div className="trust-inner">
          <h2 className="trust-quote">
            <span>
              Insight today, <em>better decisions tomorrow.</em>
            </span>
            <span>Brighter life forever.</span>
          </h2>

          <div className="trust-row">
            <div className="trust-col">
              <h3>What You Can Expect</h3>
              <List items={expect} />
            </div>
            <CardVisual variant="a" />
          </div>

          <div className="trust-row">
            <CardVisual variant="b" />
            <div className="trust-col">
              <h3>Why Choose Me?</h3>
              <List items={why} />
            </div>
          </div>

          <p className="trust-confidential">
            Every consultation is confidential, held for your comfort and safety.
          </p>
        </div>
      </div>
    </section>
  );
}
