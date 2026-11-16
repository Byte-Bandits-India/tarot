import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badgeText?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  badgeText,
  badgeIcon,
  title,
  description,
  className = ''
}: SectionHeaderProps) {
  return (
    <div className={`sec-head ${className}`}>
      {badgeText ? <Badge icon={badgeIcon}>{badgeText}</Badge> : null}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
