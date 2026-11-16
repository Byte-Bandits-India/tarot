import React from 'react';
import { Badge } from '@/components/common/Badge';
import { SparklesIcon } from '@/components/common/Icons';

export function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Modality',
      desc: 'Select from 3-card Tarot pulls, Vedic birth chart reviews, numerology calculation, or a 1-on-1 session.',
    },
    {
      num: '02',
      title: 'Share Your Coordinates',
      desc: 'Provide your birth date, time, and focus question so the planetary matrix can be accurately mapped.',
    },
    {
      num: '03',
      title: 'Planetary Calculation',
      desc: 'Our mathematical engines and certified readers analyze planetary transits, dasha cycles, and archetypes.',
    },
    {
      num: '04',
      title: 'Receive Actionable Clarity',
      desc: 'Gain instant readings online or connect directly on WhatsApp to resolve uncertainties with trusted guidance.',
    },
  ];

  return (
    <section className="how-it-works-clean">
      <div className="wrap">
        <div className="sec-head">
          <Badge icon={<SparklesIcon size={14} />}>Simple &amp; Seamless</Badge>
          <h2>How Online Consultation Works</h2>
          <p>
            Four effortless steps from planetary calculations to personalized spiritual direction.
          </p>
        </div>

        <div className="timeline-track">
          {steps.map((step, idx) => (
            <div key={step.num} className="timeline-node">
              <div className="timeline-badge-wrap">
                <span className="timeline-badge">{step.num}</span>
                {idx !== steps.length - 1 && <span className="timeline-bar" />}
              </div>
              <div className="timeline-text">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
