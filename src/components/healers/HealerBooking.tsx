'use client';

import React, { useState, useSyncExternalStore } from 'react';
import {
  HEALERS,
  TIME_SLOTS,
  MONTH_NAMES,
  DAY_OF_WEEKS,
  TimeSlot,
} from '@/data/healers';
import { createWhatsAppBookingLink } from '@/lib/whatsapp';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  WhatsAppIcon,
  ClockIcon,
} from '@/components/common/Icons';

const SERVER_DATE = new Date(2026, 0, 1);
let cachedClientDate: Date | null = null;
const emptySubscribe = () => () => {};

function getClientDateSnapshot(): Date {
  if (!cachedClientDate && typeof window !== 'undefined') {
    cachedClientDate = new Date();
  }
  return cachedClientDate ?? SERVER_DATE;
}

function getServerDateSnapshot(): Date {
  return SERVER_DATE;
}

function getIsClientSnapshot(): boolean {
  return true;
}

function getIsServerSnapshot(): boolean {
  return false;
}

export function HealerBooking() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    getIsClientSnapshot,
    getIsServerSnapshot
  );

  const clientDate = useSyncExternalStore(
    emptySubscribe,
    getClientDateSnapshot,
    getServerDateSnapshot
  );

    const [duration, setDuration] = useState<'30m' | '60m'>('30m');
  const [monthOffset, setMonthOffset] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const currentHealer = HEALERS[0];
  const currentPrice =
    duration === '30m' ? currentHealer.price30 : currentHealer.price60;
  const formattedPrice = `₹${currentPrice.toLocaleString('en-IN')}`;

  const todayMidnight = isClient
    ? new Date(
        clientDate.getFullYear(),
        clientDate.getMonth(),
        clientDate.getDate()
      )
    : null;

  // Active date: chosen date or default first available date
  const resolvedDate: Date | null = selectedDate
    ? selectedDate
    : todayMidnight
    ? (() => {
        const d = new Date(todayMidnight);
        if (currentHealer.offDays.includes(d.getDay())) {
          d.setDate(d.getDate() + 1);
        }
        return d;
      })()
    : null;

  // Month navigation calculation
  const viewBaseDate = new Date(
    clientDate.getFullYear(),
    clientDate.getMonth() + monthOffset,
    1
  );
  const viewYear = viewBaseDate.getFullYear();
  const viewMonth = viewBaseDate.getMonth();
  const isPrevDisabled = monthOffset <= 0;

  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();
  const totalDaysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const isDayAvailable = (d: Date): boolean => {
    if (!todayMidnight) return true;
    if (d < todayMidnight) return false;
    if (currentHealer.offDays.includes(d.getDay())) return false;
    return true;
  };

  const handlePrevMonth = () => {
    if (monthOffset > 0) setMonthOffset((prev) => prev - 1);
  };

  const handleNextMonth = () => {
    setMonthOffset((prev) => prev + 1);
  };

  const handleDateClick = (dayNumber: number) => {
    const clickedDate = new Date(viewYear, viewMonth, dayNumber);
    if (!isDayAvailable(clickedDate)) return;
    setSelectedDate(clickedDate);
    setSelectedTime(null);
  };

  const isSlotAvailable = (slot: TimeSlot): boolean => {
    if (!resolvedDate || !todayMidnight || !isClient) return true;
    const isToday = resolvedDate.getTime() === todayMidnight.getTime();
    if (isToday) {
      const now = new Date();
      const curH = now.getHours();
      const curM = now.getMinutes();
      if (slot.hour < curH || (slot.hour === curH && slot.minute <= curM + 15)) {
        return false;
      }
    }
    return true;
  };

  const formatShortDate = (d: Date | null): string => {
    if (!d) return '';
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return `${dayNames[d.getDay()]}, ${MONTH_NAMES[d.getMonth()].slice(0, 3)} ${d.getDate()}`;
  };

  const formatFullDate = (d: Date | null): string => {
    if (!d) return '';
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return `${dayNames[d.getDay()]}, ${MONTH_NAMES[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  };

  // WhatsApp prefilled booking link
  const whatsAppUrl =
    resolvedDate && selectedTime
      ? createWhatsAppBookingLink(
          currentHealer.name,
          `${currentHealer.service} (${duration})`,
          formatFullDate(resolvedDate),
          selectedTime,
          formattedPrice
        )
      : '#';

  return (
    <div className="booking-widget">
      {/* Left Column: Healer & Session Info */}
      <aside className="booking-widget-side">
        <div className="bwidget-profile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentHealer.photo}
            alt={currentHealer.name}
            className="bwidget-photo"
          />
          <div className="bwidget-name">{currentHealer.name}</div>
          <div className="bwidget-role">{currentHealer.role}</div>
        </div>

        {/* Duration Toggle */}
        <div className="bwidget-duration-row">
          <div className="bwidget-label">Duration</div>
          <div className="bwidget-toggle">
            <button
              type="button"
              className={`bwidget-toggle-btn ${duration === '30m' ? 'active' : ''}`}
              onClick={() => setDuration('30m')}
            >
              30 Min
            </button>
            <button
              type="button"
              className={`bwidget-toggle-btn ${duration === '60m' ? 'active' : ''}`}
              onClick={() => setDuration('60m')}
            >
              60 Min
            </button>
          </div>
        </div>

        {/* Price Tag */}
        <div className="bwidget-pricing">
          <span className="bwidget-price-label">Fee</span>
          <span className="bwidget-price-val">{formattedPrice}</span>
        </div>
      </aside>

      {/* Right Column: Calendar & Time Slots */}
      <main className="booking-widget-main">
        {/* Month Navigation */}
        <div className="bwidget-month-nav">
          <button
            type="button"
            className="bwidget-nav-arrow"
            onClick={handlePrevMonth}
            disabled={isPrevDisabled}
            aria-label="Previous month"
          >
            <ChevronLeftIcon size={16} />
          </button>
          <span className="bwidget-month-title">
            {MONTH_NAMES[viewMonth]} {viewYear}
          </span>
          <button
            type="button"
            className="bwidget-nav-arrow"
            onClick={handleNextMonth}
            aria-label="Next month"
          >
            <ChevronRightIcon size={16} />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="bwidget-cal-grid">
          {DAY_OF_WEEKS.map((dow) => (
            <div key={dow} className="bwidget-dow">
              {dow}
            </div>
          ))}

          {Array.from({ length: firstDayOfWeek }).map((_, i) => (
            <div key={`empty-${i}`} className="bwidget-day empty" />
          ))}

          {Array.from({ length: totalDaysInMonth }).map((_, i) => {
            const dayNum = i + 1;
            const dayDate = new Date(viewYear, viewMonth, dayNum);
            const available = isDayAvailable(dayDate);
            const isSelected =
              resolvedDate != null &&
              resolvedDate.getFullYear() === viewYear &&
              resolvedDate.getMonth() === viewMonth &&
              resolvedDate.getDate() === dayNum;

            const isToday =
              todayMidnight != null &&
              dayDate.getTime() === todayMidnight.getTime();

            return (
              <button
                key={dayNum}
                type="button"
                className={`bwidget-day ${available ? 'available' : 'disabled'} ${
                  isSelected ? 'selected' : ''
                } ${isToday ? 'today' : ''}`}
                disabled={!available}
                onClick={() => handleDateClick(dayNum)}
              >
                <span>{dayNum}</span>
                {isToday && !isSelected && <span className="bwidget-today-dot" />}
              </button>
            );
          })}
        </div>

        {/* Time Slots */}
        <div className="bwidget-slots-section">
          <div className="bwidget-slots-header">
            <ClockIcon size={14} className="text-plum" />
            <span>
              {resolvedDate
                ? `Available Times · ${formatShortDate(resolvedDate)}`
                : 'Select a Date'}
            </span>
          </div>

          <div className="bwidget-times-grid">
            {TIME_SLOTS.map((slot) => {
              const isOk = isSlotAvailable(slot);
              const isSel = selectedTime === slot.label;
              return (
                <button
                  key={slot.label}
                  type="button"
                  className={`bwidget-time ${isOk ? 'available' : 'disabled'} ${
                    isSel ? 'selected' : ''
                  }`}
                  disabled={!isOk}
                  onClick={() => setSelectedTime(slot.label)}
                >
                  {slot.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Booking Action Bar */}
        <div className="bwidget-footer">
          <div className="bwidget-summary">
            {resolvedDate && selectedTime ? (
              <span>
                <b>{formatShortDate(resolvedDate)}</b> at <b>{selectedTime}</b> · {currentHealer.name} ({duration})
              </span>
            ) : (
              <span className="text-muted">
                {resolvedDate ? 'Pick a time slot above' : 'Select a date'}
              </span>
            )}
          </div>

          {resolvedDate && selectedTime ? (
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              <WhatsAppIcon size={18} /> Book Now
            </a>
          ) : (
            <button type="button" className="btn primary" disabled>
              Select Time
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
