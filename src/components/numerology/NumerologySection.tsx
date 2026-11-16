'use client';

import React, { useState } from 'react';
import { NumerologyWheel } from './NumerologyWheel';
import { MONTH_NAMES } from '@/data/healers';
import { ZODIAC_SIGNS } from '@/data/zodiac';
import { NUMEROLOGY_MEANINGS } from '@/data/numerology';
import { getSignIndex } from '@/lib/zodiac';
import {
  calculateLifePath,
  reduceNumber,
  calculateNameNumbers
} from '@/lib/numerology';

const YEAR_OPTIONS = Array.from({ length: 2026 - 1920 + 1 }, (_, i) => 2026 - i);

export function NumerologySection() {
  const [fullName, setFullName] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [treatYAsVowel, setTreatYAsVowel] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [selectedMeaningNumber, setSelectedMeaningNumber] = useState<number | null>(null);

  const [readingResult, setReadingResult] = useState<{
    name: string;
    day: number;
    month: number;
    year: number;
    signName: string;
    signGlyph: string;
    signDates: string;
    life: number;
    expr: number;
    soul: number;
    pers: number;
    bday: number;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = fullName.trim();
    const m = parseInt(month, 10);
    const d = parseInt(day, 10);
    const y = parseInt(year, 10);

    if (!/[a-z]/i.test(name)) {
      setErrorMessage('Please enter your full birth name.');
      setReadingResult(null);
      return;
    }

    if (!m || !d || !y) {
      setErrorMessage('Please select your full date of birth.');
      setReadingResult(null);
      return;
    }

    const testDate = new Date(y, m - 1, d);
    if (testDate.getMonth() !== m - 1) {
      setErrorMessage('That date does not exist. Please check the day and month.');
      setReadingResult(null);
      return;
    }

    setErrorMessage('');
    const signIdx = getSignIndex(m, d);
    const sign = ZODIAC_SIGNS[signIdx];
    const nameNumbers = calculateNameNumbers(name, treatYAsVowel);
    const lifePath = calculateLifePath(y, m, d);
    const bdayNumber = reduceNumber(d);

    setReadingResult({
      name,
      day: d,
      month: m,
      year: y,
      signName: sign.name,
      signGlyph: sign.glyph,
      signDates: sign.dates,
      life: lifePath,
      expr: nameNumbers.expression,
      soul: nameNumbers.soulUrge,
      pers: nameNumbers.personality,
      bday: bdayNumber
    });
  };

  const renderNumberCard = (title: string, subtitle: string, num: number) => {
    const meaning = NUMEROLOGY_MEANINGS[num] || {
      archetype: 'The Seeker',
      tagline: 'Seeker',
      description: 'A path of personal introspection and discovery.'
    };

    return (
      <div className="ncard">
        <div className="big">{num}</div>
        <h4>{title}</h4>
        <em>{subtitle}</em>
        <p>
          <b>{meaning.archetype}.</b> {meaning.description}
        </p>
      </div>
    );
  };

  const allNumbersToExplore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33];

  return (
    <div className="nz-content">
      {/* Top Section: Animated Wheel & Calculator Form */}
      <div className="nz-top">
        <NumerologyWheel zodiacName={readingResult?.signName} />

        <form className="nz-form" onSubmit={handleSubmit} noValidate>
          <div className="f">
            <label htmlFor="nzName">Full Name</label>
            <input
              id="nzName"
              placeholder="Enter your full birth name"
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="f">
            <label htmlFor="nzMonth">Date of Birth</label>
            <div className="nz-dob">
              <select
                id="nzMonth"
                aria-label="Month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                <option value="">Month</option>
                {MONTH_NAMES.map((mName, idx) => (
                  <option key={mName} value={idx + 1}>
                    {mName}
                  </option>
                ))}
              </select>

              <select
                id="nzDay"
                aria-label="Day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              <select
                id="nzYear"
                aria-label="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">Year</option>
                {YEAR_OPTIONS.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="nz-y">
            <span>Y is treated as a {treatYAsVowel ? 'vowel' : 'consonant'}.</span>{' '}
            <button
              type="button"
              id="nzYBtn"
              onClick={() => setTreatYAsVowel(!treatYAsVowel)}
            >
              Change
            </button>
          </p>

          <button className="btn primary w-full" type="submit">
            Reveal my reading
          </button>

          {errorMessage && (
            <div className="nz-err" role="alert">
              {errorMessage}
            </div>
          )}
        </form>
      </div>

      {/* Reading Result */}
      {readingResult && (
        <div className="nums show mt-12">
          <h3>Reading for {readingResult.name}</h3>
          <div className="who">
            Born {readingResult.day} {MONTH_NAMES[readingResult.month - 1]} {readingResult.year} ·{' '}
            {readingResult.signName} {readingResult.signGlyph} ({readingResult.signDates})
          </div>
          <div className="ngrid">
            {renderNumberCard('Life Path', "Your life's purpose", readingResult.life)}
            {renderNumberCard('Expression', 'Your destiny number', readingResult.expr)}
            {renderNumberCard('Soul Urge', 'Your inner desire', readingResult.soul)}
            {renderNumberCard('Personality', 'How others see you', readingResult.pers)}
            {renderNumberCard('Birthday', 'Your natural talent', readingResult.bday)}
          </div>
        </div>
      )}

      {/* 3 Step Process Banner */}
      <div className="steps">
        <div className="step">
          <i>1</i>
          <div>
            <b>Enter name &amp; birthday</b>
            <span>Use your full birth name and date of birth.</span>
          </div>
        </div>
        <span className="arr">→</span>
        <div className="step">
          <i>2</i>
          <div>
            <b>See 5 core numbers instantly</b>
            <span>Get your Life Path, Expression, Soul Urge, Personality, and Birthday numbers.</span>
          </div>
        </div>
        <span className="arr">→</span>
        <div className="step">
          <i>3</i>
          <div>
            <b>Explore meanings &amp; compatibility</b>
            <span>Open the guides and archetypes that fit your result.</span>
          </div>
        </div>
      </div>

      {/* Number Meanings Interactive Block */}
      <div className="nz-block">
        <div className="sec-head">
          <h2>Numerology Number Meanings</h2>
          <p>Click any number to discover its core meaning and archetype</p>
        </div>

        <div className="nmean">
          {allNumbersToExplore.map((num) => {
            const m = NUMEROLOGY_MEANINGS[num];
            return (
              <button
                key={num}
                type="button"
                aria-pressed={selectedMeaningNumber === num}
                onClick={() => setSelectedMeaningNumber(num)}
              >
                <b>{num}</b>
                <span>{m.tagline}</span>
              </button>
            );
          })}
        </div>

        {selectedMeaningNumber && (
          <div className="reading mt-6">
            <h3>
              {selectedMeaningNumber} · {NUMEROLOGY_MEANINGS[selectedMeaningNumber].archetype}
            </h3>
            <p>{NUMEROLOGY_MEANINGS[selectedMeaningNumber].description}</p>
          </div>
        )}
      </div>

      {/* About / FAQ */}
      <div className="nz-block about">
        <h2>What is a Numerology Calculator?</h2>
        <p>
          A numerology calculator turns your full name and birth date into core numbers that reveal patterns in your personality, motivations, and life direction. Instead of doing the math by hand, you can get a clear reading in seconds.
        </p>
        <p>
          This free numerology calculator gives you your Life Path, Expression, Soul Urge, Personality, and Birthday numbers in one place. Together, these numerology numbers offer a simple overview of your strengths, inner drives, and the way you move through life.
        </p>
        <p>
          Start with your core numbers, then explore what each placement means for your daily path, career, and relationships.
        </p>
      </div>
    </div>
  );
}
