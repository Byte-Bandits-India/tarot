import React from 'react';
import Link from 'next/link';
import { CelestialWheel } from './CelestialWheel';
import { SONAL } from '@/lib/contact';
import { WhatsAppIcon } from '@/components/common/Icons';

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="inner">
        <div className="hero-text">
          <h1 className="hero-name">{SONAL.name}</h1>
          <p className="hero-role">Astrologer</p>
          <p className="hero-tagline">
            Guiding you from <em>Uncertainty to Clarity,</em>
            <br />
            <em>Confusion to Confidence.</em>
          </p>
          <p className="sub">
            I help you understand life&apos;s patterns, align with divine timing and make choices
            with confidence and clarity.
          </p>
          <div className="cta">
            <a href={SONAL.whatsappHref} className="btn primary" target="_blank" rel="noreferrer">
              <WhatsAppIcon size={18} /> Book a Consultation
            </a>
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
