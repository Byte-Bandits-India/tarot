import React from 'react';
import Link from 'next/link';
import { WHATSAPP_PHONE } from '@/lib/whatsapp';
import { SparklesIcon, WhatsAppIcon, ArrowRightIcon } from '@/components/common/Icons';

export function Footer() {
  const pathways = [
    { label: '3-Card Tarot Oracle', href: '/tarot' },
    { label: 'Daily & Transit Horoscope', href: '/horoscope' },
    { label: 'Book a Certified Healer', href: '/healers' },
    { label: 'Pythagorean Numerology', href: '/numerology' },
    { label: 'Sacred Ritual Candles', href: '/shop' },
  ];

  const modalities = [
    { label: 'Vedic Kundali & Prashna', href: '/healers' },
    { label: 'Planetary Transits & Dasha', href: '/horoscope' },
    { label: '22 Major Arcana Archetypes', href: '/tarot' },
    { label: 'Life Path & Soul Urge Numbers', href: '/numerology' },
    { label: 'Pure Botanical Aromatherapy', href: '/shop' },
  ];

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          {/* Column 1: Brand & Sacred Mission */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span className="footer-logo-icon">
                <SparklesIcon size={16} />
              </span>
              <span>Starlit Whispers</span>
            </Link>
            <p className="footer-desc">
              Your sacred sanctuary for ancient wisdom, Vedic astrology consultations, 3-card tarot oracle readings, and hand-poured moon ritual candles.
            </p>
          </div>

          {/* Column 2: Spiritual Pathways */}
          <div className="footer-col">
            <h4>Pathways</h4>
            <ul className="footer-links">
              {pathways.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <ArrowRightIcon size={11} className="opacity-60" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Modalities & Systems */}
          <div className="footer-col">
            <h4>Modalities</h4>
            <ul className="footer-links">
              {modalities.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <ArrowRightIcon size={11} className="opacity-60" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: WhatsApp Bookings & Hours */}
          <div className="footer-col">
            <h4>Direct Sanctuary</h4>
            <p className="footer-contact-p">
              Connect directly with our master astrologers, tarot readers, and studio dispatch on WhatsApp.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-wa-btn"
              aria-label="Chat with Starlit Whispers on WhatsApp"
            >
              <WhatsAppIcon size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright, WhatsApp link & Motto */}
        <div className="footer-bottom">
          <p>© 2026 Starlit Whispers. All rights reserved.</p>
          <p>The Mathematics of Life &middot; Guided by Ancient Wisdom</p>
        </div>

        {/* Spiritual Disclaimer */}
        <p className="footer-disclaimer">
          Astrological consultations, tarot card spreads, and numerological calculations offer intuitive perspective for self-reflection and personal growth. Sacred traditions practiced with compassion and confidentiality.
        </p>
      </div>
    </footer>
  );
}
