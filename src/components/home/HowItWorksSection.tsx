import React from 'react';

export function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Reach Out',
      desc: 'Message or call me on WhatsApp, or email me, and tell me what you would like clarity on.',
    },
    {
      num: '02',
      title: 'Share Your Details',
      desc: 'Share your birth date, time and place, or simply your question, so the reading can be personal to you.',
    },
    {
      num: '03',
      title: 'Your Private Session',
      desc: 'We talk one-on-one, confidentially, using astrology, tarot or numerology as your situation needs.',
    },
    {
      num: '04',
      title: 'Walk Away With Clarity',
      desc: 'You leave with practical guidance and a calmer, clearer sense of your next step.',
    },
  ];

  return (
    <section className="how-it-works-clean">
      <div className="wrap">
        <div className="sec-head">
          <h2>How a Consultation Works</h2>
          <p>
            Four simple steps from your first message to a clearer path.
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
