'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/common/Badge';
import { HealerIcon, HelpCircleIcon } from '@/components/common/Icons';

export function HealersGuideSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pillars = [
    {
      num: '01',
      title: 'Holistic Diagnosis',
      desc: 'In-depth analysis of your Vedic birth chart (Kundali), Dasha timing cycles, and planetary yogas to pinpoint root spiritual and karmic blockages.',
    },
    {
      num: '02',
      title: 'Grounded Practical Remedies',
      desc: 'Clear, non-dogmatic remedies including tailored meditation practices, charity timing, gemstone consultations, and life adjustments.',
    },
    {
      num: '03',
      title: 'Direct WhatsApp Connection',
      desc: 'Confidential 1-on-1 video or HD audio calls with pre-filled booking details, calendar slot protection, and summary notes provided afterwards.',
    },
  ];

  const faqs = [
    {
      q: 'What if I do not know my exact time of birth?',
      a: 'If your birth hour is uncertain, our practitioners employ Prashna (Horary) astrology based on the moment your inquiry is received, or combine Tarot and Pythagorean Numerology consultations, which do not require minute-precise birth time.',
    },
    {
      q: 'How should I prepare for my 1-on-1 session?',
      a: 'Have your birth date, city, and approximate time ready. Spend 5 minutes before the session writing down the 2–3 life areas (career, relationship, inner healing) where you seek deepest clarity, and keep a notebook nearby.',
    },
    {
      q: 'How are sessions conducted and is my privacy guaranteed?',
      a: 'Sessions are hosted via private WhatsApp video or HD audio call. All chart data, questions, and personal conversations are held in sacred, strict confidentiality and never shared with third parties.',
    },
    {
      q: 'Can I reschedule my appointment if something urgent arises?',
      a: 'Yes. You can reschedule your booking anytime up to 12 hours prior to your scheduled time slot directly via WhatsApp message with your healer.',
    },
  ];

  return (
    <div className="subpage-guide">
      {/* Editorial Split (No Cards) */}
      <div className="subpage-guide-grid">
        <div className="subpage-narrative">
          <Badge icon={<HealerIcon size={14} />}>Lineage &amp; Ethics</Badge>
          <h3>Compassionate Astrological Doctors for Your Life</h3>
          <p>
            Just as you would consult an expert physician when the body feels worn, an authentic astrological counselor diagnoses spiritual blockages, planetary timing cycles, and pivotal karmic crossroads. Our healers blend classical Vedic lineage with trauma-informed empathy to illuminate your path.
          </p>
          <div className="subpage-highlight-tip">
            <span>
              <strong>Seeker Insight:</strong> Confidentiality pledge: Your birth details, personal inquiries, and session recordings remain strictly private and protected.
            </span>
          </div>
        </div>

        <div className="subpage-guide-list">
          {pillars.map((item) => (
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
          <Badge icon={<HelpCircleIcon size={14} />}>Consultation Details</Badge>
          <h3>Frequently Asked Questions</h3>
          <p>Everything you need to know about preparing for your 1-on-1 consultation.</p>
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
