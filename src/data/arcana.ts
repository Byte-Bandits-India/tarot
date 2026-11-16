export interface ArcanaCard {
  name: string;
  subtitle: string;
  description: string;
  frontImage: string;
}

export const ARCANA_RAW: [string, string, string][] = [
  ['The Fool', 'Beginnings & Freedom', 'A leap of faith awaits. Embrace the unknown with an open heart.'],
  ['The Magician', 'Willpower & Creation', 'You hold every tool you need. Focus your intent and act.'],
  ['The High Priestess', 'Intuition & Mystery', 'Listen inward. The answer is quiet, and it is already within you.'],
  ['The Empress', 'Abundance & Nature', 'Nurture what you love. Creativity and comfort are blooming.'],
  ['The Emperor', 'Authority & Structure', 'Build firm foundations. Discipline and clear boundaries serve you.'],
  ['The Hierophant', 'Wisdom & Tradition', 'Seek guidance from trusted teachers and time-tested ways.'],
  ['The Lovers', 'Harmony & Choice', 'A heartfelt choice aligned with your values brings union.'],
  ['The Chariot', 'Determination & Victory', 'Hold the reins steady. Willpower carries you through to victory.'],
  ['Strength', 'Courage & Patience', 'Gentle courage tames what force cannot. Be kind to yourself.'],
  ['The Hermit', 'Soul Searching & Truth', 'Step back and reflect. Solitude lights the path forward.'],
  ['Wheel of Fortune', 'Destiny & Cycles', 'Change is turning in your favour. Trust the cycle.'],
  ['Justice', 'Truth & Fairness', 'Honesty and balance prevail. Weigh your choices with care.'],
  ['The Hanged Man', 'Surrender & New Perspective', 'Pause and see differently. Letting go reveals a better view.'],
  ['Death', 'Transformation & Rebirth', 'One chapter closes so another can begin. Welcome the renewal.'],
  ['Temperance', 'Balance & Moderation', 'Blend patience with purpose. Moderation restores harmony.'],
  ['The Devil', 'Shadow & Inner Freedom', 'Notice what binds you. Awareness is the first step to freedom.'],
  ['The Tower', 'Awakening & Sudden Change', 'Sudden shifts clear false foundations and make room for truth.'],
  ['The Star', 'Hope & Divine Inspiration', 'Hope returns. Healing and inspiration flow in quietly.'],
  ['The Moon', 'Intuition & Subconscious', 'Not all is as it seems. Trust your instincts through the fog.'],
  ['The Sun', 'Vitality, Joy & Success', 'Radiant joy and success. Enjoy the warmth of your progress.'],
  ['Judgement', 'Awakening & Reckoning', 'A call to rise. Forgive the past and answer your purpose.'],
  ['The World', 'Completion & Wholeness', 'A cycle completes in fulfilment. Celebrate how far you have come.']
];

export const FRONTS = ['card1', 'card2', 'card3'];
export const SLOT_NAMES = ['Past', 'Present', 'Future'] as const;

export const ARCANA: ArcanaCard[] = ARCANA_RAW.map(([name, subtitle, description], index) => ({
  name,
  subtitle,
  description,
  frontImage: `/assets/cards/${FRONTS[index % 3]}.png`
}));
