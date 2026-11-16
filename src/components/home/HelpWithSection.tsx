import React from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/common/SectionHeader';

const areas = [
  { title: 'Love & Relationships', line: 'Heal. Align. Attract.', icon: '/icons/love.png' },
  { title: 'Career & Finance', line: 'Right decisions. Better success.', icon: '/icons/carrer.png' },
  { title: 'Life Purpose & Direction', line: 'Live with clarity and meaning.', icon: '/icons/life.png' },
  { title: 'Negative Energy Removal', line: 'Cleanse. Protect. Transform.', icon: '/icons/negative.png' },
  { title: 'Spiritual Growth', line: 'Connect. Evolve. Elevate.', icon: '/icons/spritual.png' },
];

export function HelpWithSection() {
  return (
    <section className="help-section">
      <div className="help-inner">
        <SectionHeader
          title="I Help You With"
          description="Whatever you are facing, a clear reading can show you where to begin."
        />
        <div className="help-grid">
          {areas.map((a) => (
            <div key={a.title} className="help-item">
              <Image src={a.icon} alt="" width={200} height={200} className="help-icon" />
              <h3>{a.title}</h3>
              <p>{a.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
