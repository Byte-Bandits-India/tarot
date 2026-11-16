import React from 'react';
import { SONAL } from '@/lib/contact';
import { WhatsAppIcon, ArrowRightIcon } from '@/components/common/Icons';

const testimonials = [
  {
    quote:
      'The birth chart reading with Sonal brought profound peace during a sudden career crossroads. Her timing prediction for October was remarkably accurate to the week.',
    name: 'Priyanka Sharma',
    role: 'Vedic Astrology Consultation, Mumbai',
  },
  {
    quote:
      'I draw the three-card tarot spread every Monday morning. It gives me grounded clarity about what truly matters instead of getting lost in daily anxiety.',
    name: 'Arjun Sen',
    role: 'Weekly Tarot Reading, Bengaluru',
  },
  {
    quote:
      'Sonal calculated my Life Path and Expression numbers with astonishing depth. It felt like being handed a compass for my true natural talents.',
    name: 'Kavita Nair',
    role: 'Numerology & Life Path, New Delhi',
  },
];

export function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="wrap">
        <div className="sec-head">
          <h2>
            Real People. Real <em>Transformations.</em>
          </h2>
          <p>Don&apos;t take my word for it. Hear from people who found clarity at life&apos;s crossroads.</p>
        </div>

        <div className="testimonial-cards">
          {testimonials.map((t) => (
            <figure key={t.name} className="testimonial-card">
              <span className="testimonial-quote-icon" aria-hidden="true">&ldquo;</span>
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                {'★★★★★'}
              </div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="author-name">{t.name}</span>
                <span className="author-meta">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="testimonial-cta">
          <a href={SONAL.whatsappHref} className="btn primary" target="_blank" rel="noreferrer">
            <WhatsAppIcon size={18} /> Book Your Consultation <ArrowRightIcon size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
