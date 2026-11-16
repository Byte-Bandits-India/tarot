export interface NumberMeaning {
  archetype: string;
  tagline: string;
  description: string;
}

export const MASTER_NUMBERS = [11, 22, 33] as const;

export const NUMEROLOGY_MEANINGS: Record<number, NumberMeaning> = {
  1: {
    archetype: 'The Leader',
    tagline: 'Leader',
    description: 'Independent, ambitious and original. You are here to pioneer and start things.'
  },
  2: {
    archetype: 'The Diplomat',
    tagline: 'Diplomat',
    description: 'Gentle, cooperative and intuitive. You bring harmony and thrive in partnership.'
  },
  3: {
    archetype: 'The Communicator',
    tagline: 'Creator',
    description: 'Creative, expressive and joyful. You inspire others with words and ideas.'
  },
  4: {
    archetype: 'The Builder',
    tagline: 'Builder',
    description: 'Practical, disciplined and dependable. You create lasting foundations.'
  },
  5: {
    archetype: 'The Explorer',
    tagline: 'Adventurer',
    description: 'Adventurous, curious and adaptable. Freedom and change energise you.'
  },
  6: {
    archetype: 'The Nurturer',
    tagline: 'Nurturer',
    description: 'Caring, responsible and loving. Family and community are your calling.'
  },
  7: {
    archetype: 'The Seeker',
    tagline: 'Seeker',
    description: 'Analytical, spiritual and reflective. You search for deeper truth.'
  },
  8: {
    archetype: 'The Achiever',
    tagline: 'Achiever',
    description: 'Powerful, driven and business-minded. You manifest success and abundance.'
  },
  9: {
    archetype: 'The Humanitarian',
    tagline: 'Humanitarian',
    description: 'Compassionate, wise and idealistic. You are here to serve and complete cycles.'
  },
  11: {
    archetype: 'The Illuminator',
    tagline: 'Intuitive',
    description: 'A master number of intuition and inspiration. Sensitive, visionary and spiritually gifted.'
  },
  22: {
    archetype: 'The Master Builder',
    tagline: 'Master Builder',
    description: 'A master number of grand vision. You can turn big dreams into lasting reality.'
  },
  33: {
    archetype: 'The Master Teacher',
    tagline: 'Master Teacher',
    description: 'A master number of selfless service. You uplift and heal through compassion.'
  }
};
