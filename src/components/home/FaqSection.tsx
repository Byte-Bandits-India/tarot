'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/common/Badge';
import { HelpCircleIcon } from '@/components/common/Icons';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why is astrology considered the 'mathematics of life'?",
      a: 'Astrology relies on precise astronomical mathematics. By calculating the exact degrees, angular aspects, and houses of planets at the minute of your birth, it creates an objective mathematical matrix of your natural strengths, emotional patterns, and major life cycles.',
    },
    {
      q: 'How does a Tarot reading differ from an Astrological birth chart?',
      a: 'A birth chart is your permanent cosmic blueprint, mapping lifelong soul themes and overarching planetary timing (dashas). A Tarot reading captures your immediate energetic frequency, subconscious thoughts, and emerging short-term possibilities surrounding a specific situation or decision.',
    },
    {
      q: 'Is an online astrology consultation as effective as in-person?',
      a: 'Yes. Astrological calculations and intuitive readings are anchored in your birth coordinates, intention, and energy rather than physical proximity. Online consultations offer focused, private, and distraction-free one-on-one attention with top practitioners.',
    },
    {
      q: "What if I do not know my exact time of birth?",
      a: 'If your birth time is uncertain, our practitioners can utilize Prashna (Horary) astrology, Solar Chart systems, or Tarot and Numerology consultations, which do not strictly depend on your exact birth hour.',
    },
    {
      q: 'How do I prepare for a consultation with a healer?',
      a: 'Take a quiet moment beforehand to reflect on the core questions or areas of life where you feel stuck or curious. Have your date, place, and approximate time of birth ready. Keep an open heart and a notebook for personal insights.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-accordion-section">
      <div className="wrap">
        <div className="sec-head">
          <Badge icon={<HelpCircleIcon size={14} />}>Cosmic Clarity</Badge>
          <h2>Frequently Asked Questions</h2>
          <p>
            Everything you need to know about our astrological consultations, card spreads, and readings.
          </p>
        </div>

        <div className="accordion-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q} className={`accordion-row ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="accordion-header"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className="accordion-q">{faq.q}</span>
                  <span className="accordion-indicator" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="accordion-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
