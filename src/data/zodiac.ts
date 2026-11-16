export interface ZodiacSign {
  name: string;
  dates: string;
  glyph: string;
  daily: string;
  weekly: string;
  monthly: string;
  yearly: string;
  traits: string;
}

export type HoroscopePeriod = 'daily' | 'weekly' | 'monthly' | 'yearly' | 'traits';

export const HOROSCOPE_PERIOD_LABELS: Record<HoroscopePeriod, string> = {
  daily: 'Daily Horoscope',
  weekly: 'Weekly Horoscope',
  monthly: 'Monthly Horoscope',
  yearly: 'Yearly Horoscope',
  traits: 'Characteristics'
};

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    "name": "Aries",
    "dates": "Mar 21 - Apr 19",
    "glyph": "♈",
    "daily": "In the coming days, Aries individuals can look forward to positive shifts in their financial discussions, especially regarding shared budgets and pending payments. With Mercury moving direct in Scorpio, clarity will emerge slowly in money matters. Couples will find it simpler to tackle joint finances, while singles may find themselves drawn to someone with a calm, grounded approach to life.",
    "weekly": "Momentum builds early this week. A project you have been pushing alone finally attracts helpers, so share the load instead of racing ahead. Midweek brings a candid chat that clears up an old misunderstanding, and the weekend favours a spontaneous plan.",
    "monthly": "This month rewards patience over speed. Work responsibilities grow, but so does your visibility, and a senior person may notice your effort. Keep spending steady during the second week and save the bold moves for the last ten days.",
    "yearly": "The year opens with restless energy and settles into a strong, productive stretch by mid-year. Career gains are likely after spring, while relationships deepen once you slow down and listen. Finances improve steadily if you avoid impulse buys.",
    "traits": "Aries is the first sign of the zodiac, ruled by Mars and belonging to the Fire element. Courageous, direct and energetic, Aries people love a challenge and lead by example. Their impatience is the one thing worth watching."
  },
  {
    "name": "Taurus",
    "dates": "Apr 20 - May 20",
    "glyph": "♉",
    "daily": "Comfort and stability take centre stage today, Taurus. A small home upgrade or a tidy workspace lifts your mood more than you expect. Someone close needs reassurance, and your steady words carry real weight. Avoid heavy meals late in the evening.",
    "weekly": "Slow and steady wins again. You make quiet progress on a long-term goal, and a payment or reply you have been waiting for finally lands. Keep weekend plans simple and spend time with people who make you feel at ease.",
    "monthly": "Money matters take a practical turn this month. A budget review reveals where small leaks have been hiding, and fixing them frees up room for something you want. Relationships benefit from honest, unhurried talks.",
    "yearly": "This is a year of building. Foundations laid in the first half support a noticeable rise in income and status later on. Be willing to adapt when plans shift, and your natural patience will carry you through.",
    "traits": "Taurus is ruled by Venus and belongs to the Earth element. Reliable, sensual and determined, Taurus people value comfort, loyalty and good food. Their stubborn streak can be a strength or a stumbling block."
  },
  {
    "name": "Gemini",
    "dates": "May 21 - Jun 20",
    "glyph": "♊",
    "daily": "Your mind is sharp and conversation flows easily today, Gemini. A message you send could open an unexpected door, so say what you mean. Be careful not to scatter your energy across too many tasks; finish one thing before starting another.",
    "weekly": "Plenty of chatter and movement fill the week. Short trips, calls and meetings keep you busy, and one of them leads to a useful new contact. Rest on Sunday to avoid mental overload.",
    "monthly": "Learning is the theme this month. A course, book or mentor sparks fresh ideas you can use at work. Watch for mixed signals in a friendship and clear them up early rather than letting them linger.",
    "yearly": "Variety defines your year. Expect new people, new skills and at least one change of routine. By autumn you will know which interest deserves your long-term focus, and your confidence grows with it.",
    "traits": "Gemini is ruled by Mercury and belongs to the Air element. Curious, witty and adaptable, Gemini people thrive on conversation and change. They can struggle with consistency when boredom sets in."
  },
  {
    "name": "Cancer",
    "dates": "Jun 21 - Jul 22",
    "glyph": "♋",
    "daily": "Your intuition is strong today, Cancer, and it points you toward the right choice in a family matter. Make time for a home-cooked meal or a call to someone you miss. Keep personal worries from spilling into work.",
    "weekly": "Emotions run a little high early in the week, but a calm routine settles things. A family plan comes together nicely, and a friend offers advice worth hearing. Money stays steady if you avoid comfort spending.",
    "monthly": "Home and family take priority this month. A repair, move or rearrangement brings relief. At work, quiet persistence earns trust, and a colleague may finally recognise your contribution.",
    "yearly": "A nurturing, rewarding year. Bonds with family and old friends strengthen, and a long-held wish for security moves closer to reality. Set boundaries early so you do not carry everyone else's burdens.",
    "traits": "Cancer is ruled by the Moon and belongs to the Water element. Caring, protective and intuitive, Cancer people create warmth wherever they go. They can retreat into their shell when hurt."
  },
  {
    "name": "Leo",
    "dates": "Jul 23 - Aug 22",
    "glyph": "♌",
    "daily": "The spotlight finds you today, Leo, and you handle it with ease. Share your ideas boldly in a meeting or group chat. A generous gesture towards a colleague comes back to you later. Keep an eye on your ego in a heated discussion.",
    "weekly": "Confidence is high and doors open. A creative project gains admirers, and an invitation arrives that you should say yes to. Avoid overspending on the weekend just to impress.",
    "monthly": "A highly visible month. Leadership opportunities appear at work, and your warmth wins over sceptics. In love, grand gestures matter less than steady attention, so show up consistently.",
    "yearly": "This year lets you shine. Recognition, creative growth and a stronger social circle mark the months ahead. Stay humble when praise arrives, and the support around you will only grow.",
    "traits": "Leo is ruled by the Sun and belongs to the Fire element. Warm, generous and dramatic, Leo people are natural leaders who love to celebrate others. Pride is their weak spot."
  },
  {
    "name": "Virgo",
    "dates": "Aug 23 - Sep 22",
    "glyph": "♍",
    "daily": "Details are your strength today, Virgo. A tangled task finally makes sense once you break it into steps. Resist the urge to criticise yourself or others too harshly. A short walk after lunch helps your focus and digestion.",
    "weekly": "An organised week pays off. You tidy up loose ends at work and feel lighter for it. A friend asks for practical help, and your calm approach makes all the difference. Rest well on Friday night.",
    "monthly": "Health and routine come into focus this month. Small habits, like sleep and water, add up to big changes. Work brings a chance to show your skills, so prepare well and let the results speak.",
    "yearly": "A year of steady improvement. Skills sharpen, finances grow more orderly and a health goal becomes achievable. Learn to accept good enough, and you will enjoy the progress far more.",
    "traits": "Virgo is ruled by Mercury and belongs to the Earth element. Analytical, practical and kind, Virgo people notice what others miss. Perfectionism and worry are the habits they most need to ease."
  },
  {
    "name": "Libra",
    "dates": "Sep 23 - Oct 22",
    "glyph": "♎",
    "daily": "Balance is the keyword today, Libra. A disagreement can be settled with fairness and a little humour. Beauty lifts your spirits, so spend time somewhere pleasant. Avoid putting off a decision just to keep everyone happy.",
    "weekly": "Partnerships stand out this week. A joint effort at work goes well, and a personal relationship feels warmer after an honest talk. Treat yourself to something small but lovely on the weekend.",
    "monthly": "Harmony returns after a hectic period. Negotiations and agreements go your way, especially in the second half. Be clear about your own needs, not only everyone else's.",
    "yearly": "A sociable, balanced year with strong partnerships. A shared venture or a meaningful commitment may take shape. Decisions come easier when you trust your own taste and judgement.",
    "traits": "Libra is ruled by Venus and belongs to the Air element. Charming, fair-minded and artistic, Libra people value harmony and good company. Indecision is their familiar challenge."
  },
  {
    "name": "Scorpio",
    "dates": "Oct 23 - Nov 21",
    "glyph": "♏",
    "daily": "Your focus is intense today, Scorpio, and it helps you see through a confusing situation. Keep some plans private until they are ready. A late-day conversation brings deeper trust with someone close.",
    "weekly": "Hidden matters come to light, and you handle them with composure. A financial question gets resolved, and a stalled plan starts moving again. Use the weekend to rest and recharge.",
    "monthly": "A transformative month. Old habits fall away to make space for something stronger. Shared money or resources need attention, and honesty with a partner brings relief.",
    "yearly": "A powerful year of renewal. Letting go of what no longer serves you opens real opportunity, especially in career and finances. Trust yourself, and let people in a little more.",
    "traits": "Scorpio is ruled by Mars and Pluto and belongs to the Water element. Passionate, resourceful and loyal, Scorpio people feel deeply and guard their privacy. Jealousy can be their weak point."
  },
  {
    "name": "Sagittarius",
    "dates": "Nov 22 - Dec 21",
    "glyph": "♐",
    "daily": "Adventure calls today, Sagittarius, even if only in a new route or a fresh idea. Optimism wins people over at work. Be careful with promises made in the moment; check you can keep them.",
    "weekly": "A week of expansion. You may hear news about travel, study or a new opportunity. Stay realistic about deadlines, and keep your sense of humour when plans change.",
    "monthly": "Growth comes from stepping outside your usual circle. A course or journey broadens your outlook. Financially, avoid taking a gamble on a tip that sounds too good to be true.",
    "yearly": "A big-picture year. Travel, learning and new friendships widen your world, and a long-term goal finally gets clear direction. Follow through on small details to turn dreams into results.",
    "traits": "Sagittarius is ruled by Jupiter and belongs to the Fire element. Honest, adventurous and optimistic, Sagittarius people love freedom and big ideas. Their bluntness can sting without meaning to."
  },
  {
    "name": "Capricorn",
    "dates": "Dec 22 - Jan 19",
    "glyph": "♑",
    "daily": "Discipline pays off today, Capricorn. A task you have worked at steadily gets noticed by someone who matters. Take a short break to relax; rest is part of your productivity. Keep conversations at home warm and unhurried.",
    "weekly": "Work takes most of your attention, and the results are worth it. A senior colleague offers helpful guidance, and a financial plan starts to look achievable. Spend time with loved ones on the weekend.",
    "monthly": "A practical, productive month. Goals that seemed distant begin to take shape. Do not neglect your health or relationships while chasing success; a little balance goes a long way.",
    "yearly": "Hard work finally earns its reward this year. Career advancement, financial stability and respect from peers are all likely. Learn to celebrate small wins along the way.",
    "traits": "Capricorn is ruled by Saturn and belongs to the Earth element. Ambitious, disciplined and patient, Capricorn people climb steadily towards their goals. Overwork and pessimism are their common traps."
  },
  {
    "name": "Aquarius",
    "dates": "Jan 20 - Feb 18",
    "glyph": "♒",
    "daily": "Original ideas flow today, Aquarius, and a friend or group helps bring one to life. Do not be afraid to stand out. Stay flexible when a plan changes at the last moment; it may work out even better.",
    "weekly": "Friends and networks play a big role this week. A collaborative project gains energy, and an unusual suggestion turns out to be a winner. Give yourself a quiet evening to think.",
    "monthly": "A month for innovation and community. Technology or a group project moves forward, and you may meet someone who shares your vision. Be open with a loved one about your need for space.",
    "yearly": "A forward-looking year. New friendships, causes and ideas shape your direction, and a goal that once felt unusual becomes achievable. Stay in touch with those closest to you as your world grows.",
    "traits": "Aquarius is ruled by Saturn and Uranus and belongs to the Air element. Independent, inventive and humane, Aquarius people think ahead of their time. Emotional distance can sometimes puzzle others."
  },
  {
    "name": "Pisces",
    "dates": "Feb 19 - Mar 20",
    "glyph": "♓",
    "daily": "Your imagination is vivid today, Pisces, and a creative task flows beautifully. Listen to your intuition before agreeing to a request. Make time for quiet, music or a walk near water to restore your energy.",
    "weekly": "A gentle, dreamy week with some lovely moments of connection. A kind gesture from a friend lifts your spirits. Keep an eye on your budget, and do not lend money without a clear plan.",
    "monthly": "Compassion and creativity lead the month. An artistic idea gains support, and a healing conversation brings closure. Set boundaries at work so that your goodwill is not taken for granted.",
    "yearly": "A spiritual and creative year. Inner clarity grows, and a project close to your heart can finally take shape. Ground your dreams with a simple plan, and good things will follow.",
    "traits": "Pisces is ruled by Jupiter and Neptune and belongs to the Water element. Compassionate, artistic and intuitive, Pisces people feel the moods of others. They need regular quiet time to stay grounded."
  }
];
