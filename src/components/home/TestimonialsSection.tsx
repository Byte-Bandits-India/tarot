import React from 'react';
import { Badge } from '@/components/common/Badge';
import { SparklesIcon } from '@/components/common/Icons';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'The birth chart reading with Aanya brought profound peace during a sudden career crossroads. Her timing prediction for October was remarkably accurate to the week.',
      author: 'Priyanka Sharma',
      location: 'Mumbai',
      session: 'Vedic Astrology Consultation',
    },
    {
      quote:
        'I draw the three-card tarot spread every Monday morning. It provides grounded clarity that helps me prioritize what truly matters rather than getting lost in daily anxiety.',
      author: 'Arjun Sen',
      location: 'Bengaluru',
      session: 'Weekly Tarot Reading',
    },
    {
      quote:
        'Dev calculated my Life Path and Expression numbers with astonishing depth. It felt like someone had handed me a compass for my true natural talents.',
      author: 'Kavita Nair',
      location: 'New Delhi',
      session: 'Numerology & Life Path',
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="wrap">
        <div className="sec-head">
          <Badge icon={<SparklesIcon size={14} />}>Seeker Stories</Badge>
          <h2>Clarity Shared by Our Community</h2>
          <p>
            Real reflections from individuals who sought astrological insight and tarot guidance at life&apos;s crossroads.
          </p>
        </div>

        <div className="testimonials-flow">
          {testimonials.map((item, idx) => (
            <div
              key={item.author}
              className={`testimonial-item ${idx !== testimonials.length - 1 ? 'has-border' : ''}`}
            >
              <div className="quote-mark">&ldquo;</div>
              <blockquote className="testimonial-body">
                {item.quote}
              </blockquote>
              <div className="testimonial-footer">
                <span className="author-name">{item.author}</span>
                <span className="author-meta">
                  {item.location} · <span className="session-tag">{item.session}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
