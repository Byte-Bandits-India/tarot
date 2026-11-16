import { MASTER_NUMBERS } from '@/data/numerology';

export function reduceNumber(n: number): number {
  while (n > 9 && !(MASTER_NUMBERS as readonly number[]).includes(n)) {
    n = String(n)
      .split('')
      .reduce((acc, char) => acc + Number(char), 0);
  }
  return n;
}

export function sumDigits(s: string | number): number {
  return String(s)
    .split('')
    .reduce((acc, char) => acc + (Number(char) || 0), 0);
}

// Pythagorean letter mapping: A=1..I=9, J=1..R=9, S=1..Z=8
export function letterToNumber(c: string): number {
  const code = c.toUpperCase().charCodeAt(0);
  if (code < 65 || code > 90) return 0;
  return ((code - 65) % 9) + 1;
}

export interface NameNumbers {
  expression: number;
  soulUrge: number;
  personality: number;
}

export function calculateNameNumbers(name: string, treatYAsVowel: boolean = false): NameNumbers {
  const letters = name.toUpperCase().replace(/[^A-Z]/g, '').split('');
  const vowelsList = treatYAsVowel ? 'AEIOUY' : 'AEIOU';

  const vowels = letters.filter(c => vowelsList.includes(c));
  const consonants = letters.filter(c => !vowelsList.includes(c));

  const sumLetters = (arr: string[]) => arr.reduce((acc, c) => acc + letterToNumber(c), 0);

  return {
    expression: reduceNumber(sumLetters(letters)),
    soulUrge: reduceNumber(sumLetters(vowels)),
    personality: reduceNumber(sumLetters(consonants))
  };
}

export function calculateLifePath(year: number, month: number, day: number): number {
  const total = sumDigits(year) + sumDigits(month) + sumDigits(day);
  return reduceNumber(total);
}
