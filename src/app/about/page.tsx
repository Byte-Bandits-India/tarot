import React from 'react';
import Link from 'next/link';
import { WHATSAPP_PHONE } from '@/lib/whatsapp';

export const metadata = {
  title: 'About Sonal Jain | Starlit Whispers',
  description:
    'Meet Sonal Jain: tarot life coach, numerologist and healer. A calm, kind and private space to talk things through.',
};

const SERVICES = [
  {
    title: 'Tarot Life Coaching',
    image: '/assets/tarrot.jpeg',
    question: 'Not sure which way to turn?',
    text: "Let's talk it through, and let the cards bring clarity, perspective and a calm next step.",
  },
  {
    title: 'Numerology & Name Correction',
    image: '/assets/numerology.png',
    question: 'What do my numbers say about me?',
    text: 'Together we look at the numbers in your birth date and name to understand your strengths, cycles and timing.',
  },
  {
    title: 'Reiki & Healing',
    image: '/assets/reiki.jpeg',
    question: 'Feeling drained and need a reset?',
    text: 'A gentle energy session in a safe, quiet space where you can rest, release and recharge. Ancestral healing and past life regression are also available.',
  },
];

const APPROACH = [
  {
    title: 'I listen first',
    text: 'Your story comes before any technique. Every session begins with you, so what you receive fits you and not a script.',
  },
  {
    title: 'Kind, honest and private',
    text: 'No fear, no pressure and no big promises. I tell you what I see, gently and in plain words, and everything you share stays private.',
  },
  {
    title: 'Many tools, one thread',
    text: 'Tarot, numbers and healing come together, so we can look at one question from a few gentle angles.',
  },
  {
    title: 'Your choices stay yours',
    text: 'I offer perspective and tools. The decisions, always, are yours to make.',
  },
];

const CERTIFICATIONS = [
  'Certified Grand Master Lama Fera Therapist',
  'Certified Grand Master Ancestral Healer',
  'Certified Grand Master Past Life Regression Therapist',
  'Certified Akashic Record Tarot Reader',
];

export default function AboutPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    "Hi Sonal! I'd love to talk with you."
  )}`;

  return (
    <>
      {/* Intro */}
      <section className="sec bg-bg">
        <div className="wrap about-hero">
          <div className="about-copy">
            <span className="badge">About me</span>
            <h1>Let Me Be Your Guide to Clarity and Inner Balance</h1>
            <p className="about-lead">
              Come as you are. This is a calm, grounded space to talk things through, with tarot,
              numbers and healing as my gentle tools.
            </p>
            <p>
              I&apos;m Sonal Jain. For nearly a decade I have been immersed in healing and the
              spiritual sciences. It started with a simple wish: to find balance and peace in my
              own life as a homemaker. What began as a personal journey slowly became a way to
              support others.
            </p>
            <p>
              I trained in several healing modalities, and for the last few years I have read for
              people on different astrology platforms. Now I am building my own practice, where I
              can take my time with each person. Today I work with tarot, Western numerology and
              healing, and I always start by listening.
            </p>
            <div className="about-stat">
              <strong>5+</strong>
              <span>
                years of
                <br />
                experience
              </span>
            </div>
          </div>
          <div className="about-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sonal.webp" alt="Sonal Jain at her reading table with tarot cards, a crystal ball and candles" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="about-block">
        <div className="wrap">
          <div className="sec-head">
            <span className="badge">How I can help</span>
            <h2>A Little Guidance for Whatever Life Brings</h2>
          </div>
          <div className="about-grid three">
            {SERVICES.map((s) => (
              <div className="about-card" key={s.title}>
                <div className="about-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt={s.title} />
                </div>
                <h3>{s.title}</h3>
                <p className="about-q">{s.question}</p>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="about-block alt">
        <div className="wrap">
          <div className="sec-head">
            <span className="badge">My approach</span>
            <h2>A safe place to be heard</h2>
            <p>You don&apos;t need the right words. Start where you are, and I&apos;ll meet you there.</p>
          </div>
          <div className="about-grid four">
            {APPROACH.map((a) => (
              <div className="about-card plain" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="about-block">
        <div className="wrap about-training">
          <div className="about-photo small">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/certified.jpg" alt="Certified in multiple healing modalities" />
          </div>
          <div>
            <span className="badge">Training</span>
            <h2>Certifications and modalities</h2>
            <ul className="about-certs">
              {CERTIFICATIONS.map((c) => (
                <li key={c}>
                  <span aria-hidden="true">✦</span>
                  {c}
                </li>
              ))}
            </ul>
            <p>
              I also work with Mantra healing, Navkar Mantra Reiki, colour therapy, water charging
              and kitchen remedies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-block about-cta">
        <div className="wrap">
          <h2>Let&apos;s begin with a conversation</h2>
          <p>
            Pull a free card to begin, or message me directly. I&apos;d love to hear what is on
            your mind.
          </p>
          <div className="about-cta-btns">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn primary">
              Talk to Sonal
            </a>
            <Link href="/tarot" className="btn">
              Pull a free card
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
