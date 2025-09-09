import { cn } from '@/lib/utils';

interface ImageOverlayProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'navy-gradient' | 'dark-gradient' | 'light-gradient';
}

export function ImageOverlay({ 
  children, 
  className,
  variant = 'navy-gradient' 
}: ImageOverlayProps) {
  const gradientClasses = {
    'navy-gradient': 'bg-gradient-to-t from-navy/60 via-navy/20 to-transparent',
    'dark-gradient': 'bg-gradient-to-t from-black/60 via-black/20 to-transparent',
    'light-gradient': 'bg-gradient-to-t from-white/60 via-white/20 to-transparent',
  };

  return (
    <div className={cn('relative', className)}>
      {children}
      <div className={cn('absolute inset-0', gradientClasses[variant])} />
    </div>
  );
}
