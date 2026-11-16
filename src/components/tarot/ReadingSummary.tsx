import React from 'react';
import Link from 'next/link';
import { ARCANA } from '@/data/arcana';

interface ReadingSummaryProps {
  picks: number[];
}

export function ReadingSummary({ picks }: ReadingSummaryProps) {
  if (picks.length < 3) return null;

  const [pastCard, presentCard, futureCard] = picks.map(i => ARCANA[i]);

  return (
    <div className="summary show">
      <h3>Your reading</h3>
      <p>
        Your past was shaped by <b>{pastCard.name}</b>, your present is guided by{' '}
        <b>{presentCard.name}</b>, and <b>{futureCard.name}</b> points to what is coming.{' '}
        {presentCard.description}
      </p>
      <div className="tools">
        <Link href="/healers" className="btn primary">
          Discuss with a healer
        </Link>
      </div>
    </div>
  );
}
