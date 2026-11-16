'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/common/Badge';
import { ZodiacCompassIcon, HelpCircleIcon } from '@/components/common/Icons';

export function HoroscopeGuideSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const triad = [
    {
      num: '01',
      title: 'Sun Sign (Life Force)',
      desc: 'Your conscious ego, primary vitality, and overarching soul direction. It describes what makes you feel authentically alive.',
    },
    {
      num: '02',
      title: 'Moon Sign (The Subconscious)',
      desc: 'Your emotional baseline, instinctual reactions, comfort zones, and what you require to feel spiritually secure.',
    },
    {
      num: '03',
      title: 'Rising / Ascendant (The Persona)',
      desc: 'The zodiac sign ascending on the eastern horizon at birth, establishing your 12 house placements and how you navigate the physical world.',
    },
  ];

  const faqs = [
    {
      q: 'Why do horoscopes differ between Western and Vedic astrology?',
      a: 'Western astrology uses the Tropical zodiac (anchored to the seasons and equinoxes), whereas Vedic astrology uses the Sidereal zodiac (aligned with real astronomical constellations). Earth’s axial precession creates an approximate 24-degree difference between them.',
    },
    {
      q: 'What actually happens during Mercury Retrograde?',
      a: 'Mercury governs communication, logistics, and cognition. Its retrograde is an optical illusion where it appears to travel backward, prompting a period of review, editing, and course-correction rather than reckless new initiatives.',
    },
    {
      q: 'What is a cusp and does it mean I have two signs?',
      a: 'Mathematically, the Sun cannot occupy two zodiac coordinates at the exact same minute; you have only one Sun sign. However, if born within a day or two of a sign boundary, you may feel the blending of adjacent elemental energies.',
    },
    {
      q: 'How frequently do planetary transits change?',
      a: 'The Moon changes signs every 2.5 days (governing immediate mood fluctuations), the Sun every 30 days, while outer planets like Jupiter and Saturn spend 1 to 2.5 years in a sign, shaping broad generational life chapters.',
    },
  ];

  return (
    <div className="subpage-guide">
      {/* Editorial Split (No Cards) */}
      <div className="subpage-guide-grid">
        <div className="subpage-narrative">
          <Badge icon={<ZodiacCompassIcon size={14} />}>Astrological Geometry</Badge>
          <h3>Decoding Your Sun, Moon &amp; Rising Signs</h3>
          <p>
            Popular culture often reduces astrology to just your Sun sign, but authentic astrological counsel considers your entire cosmic triad. Your Sun, Moon, and Ascendant together form a multidimensional blueprint of your inner psyche, subconscious emotional needs, and outer persona.
          </p>
          <div className="subpage-highlight-tip">
            <span>
              <strong>Seeker Insight:</strong> For daily and weekly timing forecasts, read for your Rising (Ascendant) sign first, as it aligns with the transit houses of real life events.
            </span>
          </div>
        </div>

        <div className="subpage-guide-list">
          {triad.map((item) => (
            <div key={item.num} className="subpage-guide-row">
              <span className="subpage-guide-num">{item.num}</span>
              <div className="subpage-guide-body">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Domain-Specific FAQ (No Cards, Minimal Hairline Accordion) */}
      <div className="subpage-faq">
        <div className="subpage-faq-head">
          <Badge icon={<HelpCircleIcon size={14} />}>Zodiac &amp; Transit FAQ</Badge>
          <h3>Frequently Asked Questions</h3>
          <p>Key clarity on planetary retrogrades, cusp dates, and cosmic mechanics.</p>
        </div>

        <div className="subpage-faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={faq.q} className="subpage-faq-item">
                <button
                  type="button"
                  className={`subpage-faq-btn ${isOpen ? 'open' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="subpage-faq-indicator">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="subpage-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
