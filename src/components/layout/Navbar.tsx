'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MenuIcon,
  CloseIcon,
  ArrowRightIcon,
  TarotIcon,
  ZodiacCompassIcon,
  NumerologyIcon,
  FlameCandleIcon,
  HealerIcon,
  SparklesIcon
} from '@/components/common/Icons';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/', icon: <SparklesIcon size={18} /> },
    { label: 'Tarot', href: '/tarot', icon: <TarotIcon size={18} /> },
    { label: 'Horoscope', href: '/horoscope', icon: <ZodiacCompassIcon size={18} /> },
    { label: 'Numerology', href: '/numerology', icon: <NumerologyIcon size={18} /> },
    { label: 'Shop', href: '/shop', icon: <FlameCandleIcon size={18} /> },
    { label: 'About', href: '/about', icon: <SparklesIcon size={18} /> },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Handle ESC key and scroll lock when open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <header className="top">
      <div className="nav-inner">
        {/* Left Side: Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? 'on' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side: Desktop Book a Session / Mobile Hamburger */}
        <div className="nav-actions">
          <Link href="/healers" className="btn primary desktop-only-btn">
            Book a Session
          </Link>

          <button
            type="button"
            className="burger-btn"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer: Slides in from Right to Left */}
      <aside
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-title">Menu</span>
          <button
            type="button"
            className="drawer-close-btn"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <CloseIcon size={20} />
          </button>
        </div>

        <nav className="mobile-drawer-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-drawer-item ${isActive(link.href) ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="mobile-item-left">
                <span className="mobile-item-icon">{link.icon}</span>
                <span className="mobile-item-label">{link.label}</span>
              </div>
              <ArrowRightIcon size={14} className="mobile-item-arrow" />
            </Link>
          ))}
          <Link
            href="/healers"
            className={`mobile-drawer-item ${isActive('/healers') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="mobile-item-left">
              <span className="mobile-item-icon">
                <HealerIcon size={18} />
              </span>
              <span className="mobile-item-label">Healers &amp; Astrology</span>
            </div>
            <ArrowRightIcon size={14} className="mobile-item-arrow" />
          </Link>
        </nav>

        {/* Book a Session moved inside the opened mobile drawer */}
        <div className="mobile-drawer-footer">
          <Link
            href="/healers"
            className="btn primary mobile-footer-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Session
          </Link>
          <p className="mobile-drawer-tagline">
            Vedic Astrology &middot; Tarot &middot; Sacred Rituals
          </p>
        </div>
      </aside>
    </header>
  );
}
