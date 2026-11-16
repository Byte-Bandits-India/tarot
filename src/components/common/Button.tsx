import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'wa' | 'sm';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'default',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  let variantClass = '';
  if (variant === 'primary') variantClass = 'primary';
  else if (variant === 'wa') variantClass = 'wa';
  else if (variant === 'sm') variantClass = 'btn-sm';

  const combinedClass = `btn ${variantClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
}
