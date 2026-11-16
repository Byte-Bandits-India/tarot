export interface Healer {
  id: number;
  name: string;
  role: string;
  service: string;
  price: string;
  price30: number;
  price60: number;
  initials: string;
  offDays: number[];
  experience: string;
}

export const HEALERS: Healer[] = [
  {
    id: 0,
    name: 'Aanya Rao',
    role: 'Vedic Astrologer & Tarot Reader',
    service: 'Birth Chart Reading',
    price: '₹999',
    price30: 999,
    price60: 1699,
    initials: 'AR',
    offDays: [0],
    experience: '12+ years experience',
  },
  {
    id: 1,
    name: 'Meera Iyer',
    role: 'Reiki & Energy Healer',
    service: 'Reiki Healing Session',
    price: '₹1,299',
    price30: 1299,
    price60: 2199,
    initials: 'MI',
    offDays: [1],
    experience: '9+ years experience',
  },
  {
    id: 2,
    name: 'Dev Malhotra',
    role: 'Numerologist & Life Coach',
    service: 'Numerology Consultation',
    price: '₹799',
    price30: 799,
    price60: 1399,
    initials: 'DM',
    offDays: [2],
    experience: '8+ years experience',
  },
];

export interface TimeSlot {
  label: string;
  hour: number;
  minute: number;
  period: 'Morning' | 'Afternoon' | 'Evening';
}

export const TIME_SLOTS: TimeSlot[] = [
  { label: '9:30 AM', hour: 9, minute: 30, period: 'Morning' },
  { label: '10:45 AM', hour: 10, minute: 45, period: 'Morning' },
  { label: '11:45 AM', hour: 11, minute: 45, period: 'Morning' },
  { label: '1:30 PM', hour: 13, minute: 30, period: 'Afternoon' },
  { label: '2:45 PM', hour: 14, minute: 45, period: 'Afternoon' },
  { label: '4:00 PM', hour: 16, minute: 0, period: 'Afternoon' },
  { label: '5:15 PM', hour: 17, minute: 15, period: 'Afternoon' },
  { label: '6:30 PM', hour: 18, minute: 30, period: 'Evening' },
  { label: '7:45 PM', hour: 19, minute: 45, period: 'Evening' },
  { label: '8:30 PM', hour: 20, minute: 30, period: 'Evening' },
];

export const AVAILABLE_TIMES = TIME_SLOTS.map((s) => s.label);

export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const DAY_OF_WEEKS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
