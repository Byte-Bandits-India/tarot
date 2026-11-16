export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  highlights: string[];
  image: string;
}

const CANDLE_IMAGES = ['/assets/candle1.jpeg', '/assets/candle2.jpeg'];

export const PRODUCTS: Product[] = [
  {
    id: 0,
    name: 'Pure White Pillar Duo',
    category: 'Meditation',
    price: 499,
    description: 'A pair of clean-burning white pillar candles with glass holders. Perfect for tarot spreads, meditation and altar work.',
    highlights: ['Unscented, clean burn', 'Burn time ~40 hrs', 'Glass holders included'],
    image: CANDLE_IMAGES[0]
  },
  {
    id: 1,
    name: 'Vanilla Glow Soy Candle',
    category: 'Comfort',
    price: 649,
    description: 'A triple-wick soy candle in a frosted amber jar, with warm creamy vanilla that makes any reading space feel cosy.',
    highlights: ['Premium scented soy wax', 'Triple wick, even burn', 'Frosted amber glass jar'],
    image: CANDLE_IMAGES[1]
  },
  {
    id: 2,
    name: 'Moon Ritual White Pillars',
    category: 'Moon rituals',
    price: 549,
    description: 'Set intentions on every new and full moon with these tall white pillar candles. Simple, pure and powerful.',
    highlights: ['Unscented, clean burn', 'Burn time ~45 hrs', 'Ideal for intention setting'],
    image: CANDLE_IMAGES[0]
  },
  {
    id: 3,
    name: 'Golden Hour Vanilla Jar',
    category: 'Self-care',
    price: 699,
    description: 'Soft golden light and a gentle vanilla aroma to wind down after a long day or ground yourself before a session.',
    highlights: ['Hand-poured soy wax', 'Burn time ~35 hrs', 'Reusable jar'],
    image: CANDLE_IMAGES[1]
  },
  {
    id: 4,
    name: 'Altar Pillar Set',
    category: 'Altar',
    price: 599,
    description: 'A balanced set of pillar candles for your altar, available in two sizes to build a layered, ritual-ready display.',
    highlights: ['Two heights', 'Drip-free finish', 'Clean-burning wax'],
    image: CANDLE_IMAGES[0]
  },
  {
    id: 5,
    name: 'Cosy Evening Vanilla',
    category: 'Comfort',
    price: 629,
    description: 'A wide-jar candle with three wicks for a generous glow. Pairs beautifully with journaling and tarot pulls.',
    highlights: ['Triple wick', 'Soy wax blend', 'Gift-ready jar'],
    image: CANDLE_IMAGES[1]
  },
  {
    id: 6,
    name: 'Clarity Pillar Pair',
    category: 'Meditation',
    price: 479,
    description: 'Calm, steady flames to anchor your breathing practice and clear your mind before readings.',
    highlights: ['Unscented', 'Long burn', 'Stable base'],
    image: CANDLE_IMAGES[0]
  },
  {
    id: 7,
    name: 'Honey Vanilla Glow',
    category: 'Self-care',
    price: 679,
    description: 'A glowing amber jar with soft vanilla notes, made to turn any corner of your home into a sanctuary.',
    highlights: ['Premium soy wax', 'Cotton wicks', 'Burn time ~35 hrs'],
    image: CANDLE_IMAGES[1]
  }
];
