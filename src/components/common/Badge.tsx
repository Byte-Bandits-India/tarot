import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function Badge({ children, icon, className = '' }: BadgeProps) {
  return (
    <span className={`badge ${className}`}>
      {icon && <i className="inline-flex items-center justify-center">{icon}</i>}
      {children}
    </span>
  );
}
