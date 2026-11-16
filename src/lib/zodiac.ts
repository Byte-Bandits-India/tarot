export function getSignIndex(month: number, day: number): number {
  // Month: 1-12, Day: 1-31
  // Start dates for signs:
  // Aries (Mar 21), Taurus (Apr 20), Gemini (May 21), Cancer (Jun 21),
  // Leo (Jul 23), Virgo (Aug 23), Libra (Sep 23), Scorpio (Oct 23),
  // Sagittarius (Nov 22), Capricorn (Dec 22), Aquarius (Jan 20), Pisces (Feb 19)
  const cut: [number, number][] = [
    [3, 21],
    [4, 20],
    [5, 21],
    [6, 21],
    [7, 23],
    [8, 23],
    [9, 23],
    [10, 23],
    [11, 22],
    [12, 22],
    [1, 20],
    [2, 19]
  ];

  const v = month * 100 + day;
  // Capricorn wraps around year-end
  if (v >= 1222 || v < 120) return 9;

  for (let i = 0; i < 12; i++) {
    const s = cut[i][0] * 100 + cut[i][1];
    const nextIdx = (i + 1) % 12;
    const e = cut[nextIdx][0] * 100 + cut[nextIdx][1];

    if (s < e) {
      if (v >= s && v < e) return i;
    } else {
      if (v >= s || v < e) return i;
    }
  }

  return 0;
}
