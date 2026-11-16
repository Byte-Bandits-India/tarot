import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/common/SectionHeader';
import {
  SparklesIcon,
  TarotIcon,
  HealerIcon,
  ZodiacCompassIcon,
  NumerologyIcon,
  FlameCandleIcon,
  ArrowRightIcon
} from '@/components/common/Icons';

export function PathwaysSection() {
  const pathways = [
    {
      title: 'Tarot Spread',
      subtitle: '3-Card Oracle',
      desc: 'Past, Present & Future spread for immediate clarity and intuitive guidance.',
      href: '/tarot',
      icon: <TarotIcon size={24} />,
    },
    {
      title: 'Book a Healer',
      subtitle: '1-on-1 Sessions',
      desc: 'Private consultations with certified Vedic astrologers and energy healers.',
      href: '/healers',
      icon: <HealerIcon size={24} />,
    },
    {
      title: 'Daily Horoscope',
      subtitle: 'Zodiac Transit',
      desc: 'Sun & Moon sign forecasts and personality profiles across all 12 signs.',
      href: '/horoscope',
      icon: <ZodiacCompassIcon size={24} />,
    },
    {
      title: 'Numerology',
      subtitle: 'Core Blueprint',
      desc: 'Calculate your Life Path, Destiny, Soul Urge & Personality numbers.',
      href: '/numerology',
      icon: <NumerologyIcon size={24} />,
    },
    {
      title: 'Ritual Shop',
      subtitle: 'Hand-Poured',
      desc: 'Pure clean-burning soy candles crafted for meditation and altars.',
      href: '/shop',
      icon: <FlameCandleIcon size={24} />,
    },
  ];

  return (
    <section className="pathways-section">
      <div className="wrap">
        <SectionHeader
          badgeText="Discover Your Path"
          badgeIcon={<SparklesIcon size={14} />}
          title="Explore Starlit Whispers"
          description="Ancient wisdom translated into accessible modern guidance for your personal spiritual journey."
        />

        <div className="pathways-cards-grid">
          {pathways.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="pathway-card group"
            >
              <div className="pathway-card-icon">{item.icon}</div>
              <span className="pathway-card-sub">{item.subtitle}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="pathway-card-cta">
                Explore <ArrowRightIcon size={13} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
