import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-[var(--color-primary-container)] text-[var(--color-primary)]',
      secondary: 'bg-[var(--color-secondary-container)] text-[var(--color-secondary)]',
      tertiary: 'bg-[var(--color-tertiary-container)] text-[var(--color-tertiary)]',
      outline: 'bg-transparent border border-[var(--color-outline-variant)] text-[var(--color-on-surface-variant)]',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = 'Badge';
