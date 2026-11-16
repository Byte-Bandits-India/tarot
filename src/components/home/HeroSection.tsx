import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/common/Badge';
import { CelestialWheel } from './CelestialWheel';
import { SparklesIcon } from '@/components/common/Icons';

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="inner">
        <div className="hero-text">
          <Badge icon={<SparklesIcon size={14} />}>Personalized Tarot Reading Experience</Badge>
          <h1>
            Guided by<br />
            stars, empowered<br />
            by tarot insight
          </h1>
          <p className="sub">
            At Starlit Whispers, connect with gifted tarot readers and receive intuitive guidance illuminated by the universe.
          </p>
          <div className="cta">
            <Link href="/healers" className="btn primary">
              Book a Reading
            </Link>
            <Link href="/tarot" className="btn">
              Draw a Card
            </Link>
          </div>
        </div>

        <div className="hero-art">
          <CelestialWheel />
        </div>
      </div>
    </section>
  );
}
