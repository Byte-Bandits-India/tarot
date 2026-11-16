import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/common/Badge';
import { OrbitIcon, ArrowRightIcon } from '@/components/common/Icons';

export function WhyAstrologySection() {
  const points = [
    {
      num: '01',
      title: 'Planetary Calculations',
      desc: 'Astronomical cycles and planetary positions that calculate life patterns and natural strengths.',
    },
    {
      num: '02',
      title: 'Guidance for Life',
      desc: 'Expert astrologers serving as compassionate guides for clarity when facing crossroads or low points.',
    },
    {
      num: '03',
      title: '5,000-Year Heritage',
      desc: 'Timeless Vedic wisdom preserved by sages, translated into clear guidance for modern decisions.',
    },
  ];

  return (
    <section className="why-astrology-section">
      <div className="wrap">
        <div className="why-grid">
          {/* Left: Clean Heading & Concise Summary */}
          <div className="why-narrative">
            <Badge icon={<OrbitIcon size={14} />}>Mathematics of Life</Badge>
            <h2>Astrology is the Mathematics of Your Life</h2>
            <p className="lead-text">
              Derived from the calculations of your planetary positions to predict what the future holds for you. When you encounter uncertain moments, our consultations provide the clarity and perspective you need.
            </p>
            <div className="why-cta-row">
              <Link href="/healers" className="btn primary">
                Consult an Astrologer
              </Link>
              <Link href="/tarot" className="text-link">
                Explore Spreads <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>

          {/* Right: 3 Clean Minimal Points */}
          <div className="why-tenets">
            {points.map((item) => (
              <div key={item.num} className="tenet-row">
                <span className="tenet-number">{item.num}</span>
                <div className="tenet-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
