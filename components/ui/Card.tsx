import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'organic' | 'glass';
  elevation?: 'none' | 'low' | 'high';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', elevation = 'low', children, ...props }, ref) => {
    
    const variants = {
      default: 'bg-[var(--color-surface-lowest)] rounded-2xl',
      organic: 'bg-[var(--color-surface-lowest)] card-organic',
      glass: 'glass-dark rounded-3xl',
    };

    const elevations = {
      none: '',
      low: 'shadow-petcare',
      high: 'shadow-float',
    };

    return (
      <div
        ref={ref}
        className={cn('overflow-hidden', variants[variant], elevations[elevation], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';
