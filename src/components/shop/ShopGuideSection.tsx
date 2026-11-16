'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/common/Badge';
import { FlameCandleIcon, HelpCircleIcon } from '@/components/common/Icons';

export function ShopGuideSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pillars = [
    {
      num: '01',
      title: 'Clean Botanical Burn',
      desc: '100% natural soy wax and unbleached cotton wicks ensure zero petroleum soot, black smoke, or synthetic headaches. Enjoy 45–50 hours of clean ambient flame.',
    },
    {
      num: '02',
      title: 'Aromatherapeutic Intent',
      desc: 'Therapeutic-grade essential oils blended specifically to settle the nervous system, open heart space, and elevate concentration during meditation and card pulls.',
    },
    {
      num: '03',
      title: 'Direct WhatsApp Dispatch',
      desc: 'Quick-order directly on WhatsApp with pre-filled product notes, express nationwide shipping, and personalized packaging blessings.',
    },
  ];

  const faqs = [
    {
      q: 'How do I place an order via WhatsApp?',
      a: 'Tap "Quick View" on any candle in the carousel and select "Order on WhatsApp". Your selected item and details are pre-filled in a direct chat with our studio for immediate confirmation.',
    },
    {
      q: 'How do I get the longest burn life out of my candle?',
      a: 'On the first lighting, let the melt pool reach the outer glass edges (about 2–3 hours) to prevent wax tunneling. Always trim the cotton wick to 1/4 inch before relighting.',
    },
    {
      q: 'Can I clean and reuse the glass candle jars?',
      a: 'Yes! Once 1/2 inch of wax remains, soak the jar in warm soapy water to loosen the wax. Our amber jars make beautiful containers for crystals, dried herbs, or altar trinkets.',
    },
    {
      q: 'What if a candle arrives damaged during transit?',
      a: 'We pack every order in recyclable shock-absorbent cushioning. In the rare event of transit damage, message us on WhatsApp with a quick photo for an immediate, hassle-free replacement.',
    },
  ];

  return (
    <div className="subpage-guide">
      {/* Editorial Split (No Cards) */}
      <div className="subpage-guide-grid">
        <div className="subpage-narrative">
          <Badge icon={<FlameCandleIcon size={14} />}>Botanical Sanctuary</Badge>
          <h3>Small-Batch Hand-Poured Ritual Candles</h3>
          <p>
            Every candle is hand-crafted in micro-batches using pure biodegradable soy wax, lead-free cotton wicks, and botanical essential oils. Formulated without synthetic phthalates or petroleum paraffin, they are designed to anchor sacred atmosphere for meditation, journaling, and tarot spreads.
          </p>
          <div className="subpage-highlight-tip">
            <span>
              <strong>Seeker Insight:</strong> Wax possesses memory. Allowing a complete surface melt pool on your first burn ensures an even, flat burn down to the base of the jar.
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
          <Badge icon={<HelpCircleIcon size={14} />}>Candle Care &amp; Orders</Badge>
          <h3>Frequently Asked Questions</h3>
          <p>Helpful advice on wax purity, wick maintenance, and express WhatsApp shipping.</p>
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
