import React from 'react';
import { cn } from '@/lib/utils';

interface IndustrialGridBackgroundProps {
  className?: string;
  opacityClassName?: string;
}

export function IndustrialGridBackground({ className, opacityClassName = 'opacity-30' }: IndustrialGridBackgroundProps) {
  return (
    <div
      className={cn('absolute inset-0 pointer-events-none', opacityClassName, className)}
      style={{
        backgroundImage:
          'linear-gradient(rgba(31, 57, 138, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(31, 57, 138, 0.15) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
      aria-hidden="true"
    />
  );
}
