import React from 'react';
import { SONAL } from '@/lib/contact';
import { WhatsAppIcon } from '@/components/common/Icons';

export function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="wrap">
        <h2>Book Your Personal Consultation</h2>
        <p>Your journey to clarity starts here.</p>
        <div className="cta-buttons">
          <a href={SONAL.whatsappHref} className="btn primary cta-wa" target="_blank" rel="noreferrer">
            <WhatsAppIcon size={18} /> WhatsApp {SONAL.phoneDisplay}
          </a>
          <a href={SONAL.phoneHref} className="btn cta-outline">
            Call {SONAL.phoneDisplay}
          </a>
          <a href={SONAL.emailHref} className="btn cta-outline">
            {SONAL.email}
          </a>
        </div>
        <p className="cta-reminder">
          A gentle reminder: you already have the answers within you. I&apos;m here to help you see
          them clearly.
        </p>
      </div>
    </section>
  );
}
