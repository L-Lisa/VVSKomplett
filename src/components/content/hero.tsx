'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

interface HeroProps {
  title: string;
  lead: string;
  primaryCta: {
    text: string;
    href: string;
  };
  className?: string;
  priority?: boolean;
}

export function Hero({
  title,
  lead,
  primaryCta,
  className,
  priority = false
}: HeroProps) {
  const t = useTranslations('home.hero');
  return (
    <section className={cn('relative py-20 overflow-hidden', className)}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/pipe_background.webp"
          alt="VVS pipes background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={priority}
          fetchPriority="high"
        />
        {/* Gradient overlay for better text contrast - from top-left corner fading toward center */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(22,58,95,0.6)] via-[rgba(22,58,95,0.2)] to-transparent" aria-hidden="true"></div>
      </div>
      
      {/* Content with glassmorphism effect */}
      <div className="container relative z-10">
        <div className="text-center">
          {/* Glassmorphism container for text content */}
          <div className="backdrop-blur-md bg-white/70 md:bg-white/40 border border-white/60 md:border-white/40 p-8 md:p-4 shadow-2xl max-w-4xl mx-auto">
            <h1 className="text-h1 font-outfit text-text-900 mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-text-700 mb-8 max-w-3xl mx-auto">
              {lead}
            </p>
            {/* Single CTA Button */}
            <div className="flex justify-center mb-6">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-6" 
                asChild
              >
                <a href={primaryCta.href}>
                  {primaryCta.text}
                </a>
              </Button>
            </div>
            
            {/* Chips text under CTA buttons - plain royal blue text */}
            <div className="mt-3 text-[#1f398a] text-sm font-medium">
              {t('chips')}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
