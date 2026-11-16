'use client';

import React, { useState, useRef } from 'react';
import {
  ZODIAC_SIGNS,
  HoroscopePeriod,
  HOROSCOPE_PERIOD_LABELS
} from '@/data/zodiac';
import { MONTH_NAMES } from '@/data/healers';
import { NUMEROLOGY_MEANINGS as NUM_DATA } from '@/data/numerology';
import { getSignIndex } from '@/lib/zodiac';
import {
  calculateLifePath,
  reduceNumber,
  calculateNameNumbers
} from '@/lib/numerology';

export function HoroscopeSection() {
  const [selectedSignIndex, setSelectedSignIndex] = useState<number>(0);
  const [selectedPeriod, setSelectedPeriod] = useState<HoroscopePeriod>('daily');
  const [nameInput, setNameInput] = useState<string>('');
  const [dobInput, setDobInput] = useState<string>('');
  const [formError, setFormError] = useState<string>('');
  const [numerologyResult, setNumerologyResult] = useState<{
    name: string;
    day: number;
    month: number;
    year: number;
    life: number;
    bday: number;
    expr: number;
    soul: number;
    pers: number;
  } | null>(null);

  const signsContainerRef = useRef<HTMLDivElement>(null);

  const activeSign = ZODIAC_SIGNS[selectedSignIndex];

  const handleSignSelect = (index: number) => {
    setSelectedSignIndex(index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = nameInput.trim();
    if (!trimmedName || !dobInput) {
      setFormError('Please enter your name and date of birth.');
      return;
    }

    setFormError('');
    const [yStr, mStr, dStr] = dobInput.split('-');
    const y = parseInt(yStr, 10);
    const m = parseInt(mStr, 10);
    const d = parseInt(dStr, 10);

    if (isNaN(y) || isNaN(m) || isNaN(d)) {
      setFormError('Please enter a valid date of birth.');
      return;
    }

    const calculatedSign = getSignIndex(m, d);
    setSelectedSignIndex(calculatedSign);

    const life = calculateLifePath(y, m, d);
    const bday = reduceNumber(d);
    const nameNumbers = calculateNameNumbers(trimmedName);

    setNumerologyResult({
      name: trimmedName,
      day: d,
      month: m,
      year: y,
      life,
      bday,
      expr: nameNumbers.expression,
      soul: nameNumbers.soulUrge,
      pers: nameNumbers.personality
    });

    // Scroll active sign into view
    if (signsContainerRef.current) {
      const signElement = signsContainerRef.current.children[calculatedSign] as HTMLElement;
      if (signElement) {
        signElement.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
      }
    }
  };

  const renderNumberCard = (title: string, subtitle: string, numberVal: number) => {
    const meaning = NUM_DATA[numberVal] || {
      archetype: 'The Seeker',
      description: 'A deeply meaningful path of personal insight.'
    };

    return (
      <div className="ncard">
        <div className="big">{numberVal}</div>
        <h4>{title}</h4>
        <em>{subtitle}</em>
        <p>
          <b>{meaning.archetype}.</b> {meaning.description}
        </p>
      </div>
    );
  };

  return (
    <div className="horoscope-content">
      {/* Form */}
      <form className="hform" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="hname">Full name</label>
          <input
            id="hname"
            placeholder="e.g. Aanya Rao"
            autoComplete="name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="hdob">Date of birth</label>
          <input
            id="hdob"
            type="date"
            value={dobInput}
            onChange={(e) => setDobInput(e.target.value)}
          />
        </div>
        <button className="btn primary" type="submit">
          Reveal
        </button>
      </form>

      {formError && <div className="formerr">{formError}</div>}

      {/* 12 Signs Carousel */}
      <div className="signs" ref={signsContainerRef}>
        {ZODIAC_SIGNS.map((sign, i) => (
          <button
            key={sign.name}
            type="button"
            className="sg"
            aria-pressed={i === selectedSignIndex}
            onClick={() => handleSignSelect(i)}
          >
            <span className="g">{sign.glyph}</span>
            <b>{sign.name}</b>
            <small>{sign.dates}</small>
          </button>
        ))}
      </div>

      {/* Tabs */}
      <div className="tabs" role="tablist">
        {(Object.keys(HOROSCOPE_PERIOD_LABELS) as HoroscopePeriod[]).map((pKey) => (
          <button
            key={pKey}
            type="button"
            role="tab"
            aria-selected={selectedPeriod === pKey}
            onClick={() => setSelectedPeriod(pKey)}
          >
            {pKey.charAt(0).toUpperCase() + pKey.slice(1)}
          </button>
        ))}
      </div>

      {/* Reading Box */}
      <div className="reading">
        <h3>
          {activeSign.name} {HOROSCOPE_PERIOD_LABELS[selectedPeriod]}
        </h3>
        <p>{activeSign[selectedPeriod]}</p>
      </div>

      {/* Optional Numerology Results Snapshot */}
      {numerologyResult && (
        <div className="nums show">
          <h3>Numerology for {numerologyResult.name}</h3>
          <div className="who">
            Born {numerologyResult.day} {MONTH_NAMES[numerologyResult.month - 1]} {numerologyResult.year} ·{' '}
            {activeSign.name} {activeSign.glyph}
          </div>
          <div className="ngrid">
            {renderNumberCard('Life Path', "Your life's purpose", numerologyResult.life)}
            {renderNumberCard('Birthday', 'Your natural talent', numerologyResult.bday)}
            {renderNumberCard('Expression', 'Your destiny number', numerologyResult.expr)}
            {renderNumberCard('Soul Urge', 'Your inner desire', numerologyResult.soul)}
            {renderNumberCard('Personality', 'How others see you', numerologyResult.pers)}
          </div>
        </div>
      )}
    </div>
  );
}
