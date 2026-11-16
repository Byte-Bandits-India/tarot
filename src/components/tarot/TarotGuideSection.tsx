'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/common/Badge';
import { TarotIcon, HelpCircleIcon } from '@/components/common/Icons';

export function TarotGuideSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const breakdown = [
    {
      num: '01',
      title: 'The Root (Past)',
      desc: 'Subconscious motivations, ancestral conditioning, and past events that quietly formed the foundation of your question.',
    },
    {
      num: '02',
      title: 'The Crucible (Present)',
      desc: 'Where your vital energy is currently concentrated—active choices, conscious tensions, and immediate opportunities.',
    },
    {
      num: '03',
      title: 'The Horizon (Future)',
      desc: 'The natural trajectory if your current mindset and momentum continue, illuminating where you retain the power to adapt.',
    },
  ];

  const faqs = [
    {
      q: 'Can Tarot predict an absolute, unchangeable future?',
      a: 'No. Tarot illuminates probabilities based on present momentum. You possess sovereign free will; the cards illuminate the energetic weather so you can make conscious, empowered decisions.',
    },
    {
      q: 'What should I do if an intense card like The Tower or Death appears?',
      a: 'In Tarot, intense archetypes signify radical transformation, clearing outmoded patterns, and profound spiritual renewal rather than literal misfortune. They herald necessary liberation.',
    },
    {
      q: 'How frequently is it healthy to consult the 3-card spread?',
      a: 'Consulting the cards once a week or when facing genuine crossroads allows enough time for the energies to mature. Repeatedly asking the same question on the same day only clouds intuitive perception.',
    },
    {
      q: 'How should I formulate my question before drawing?',
      a: 'Frame open-ended questions like "What energy should I cultivate regarding this situation?" or "What am I not seeing about my direction?" rather than rigid yes-or-no demands.',
    },
  ];

  return (
    <div className="subpage-guide">
      {/* Editorial Split (No Cards) */}
      <div className="subpage-guide-grid">
        <div className="subpage-narrative">
          <Badge icon={<TarotIcon size={14} />}>Card Reading Wisdom</Badge>
          <h3>How the Past, Present &amp; Future Speak Together</h3>
          <p>
            A three-card spread is not three isolated fortunes—it is a continuous narrative of cause, consciousness, and consequence. When interpreted as a unified arc, the cards reflect how past experiences shape your current state and point toward your emerging trajectory.
          </p>
          <div className="subpage-highlight-tip">
            <span>
              <strong>Seeker Insight:</strong> Notice which archetype draws your eye first. The subconscious often communicates through visual resonance before logic takes over.
            </span>
          </div>
        </div>

        <div className="subpage-guide-list">
          {breakdown.map((item) => (
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
          <Badge icon={<HelpCircleIcon size={14} />}>Tarot Answers</Badge>
          <h3>Frequently Asked Questions</h3>
          <p>Key guidance on interpreting archetypes and formulating intuitive queries.</p>
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
