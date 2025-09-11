'use client';

import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { COMPANY } from '@/config/company';

interface CTAProps {
  title: string;
  description: string;
  className?: string;
  orangeHeading?: boolean;
  showCorners?: boolean;
}

export function CTA({ 
  title, 
  description, 
  className,
  orangeHeading = false,
  showCorners = false,
}: CTAProps) {
  const t = useTranslations('cta');
  
  return (
    <section className={cn('py-16 navy-gradient text-white relative', className)}>
      {showCorners && (
        <>
          <span aria-hidden="true" className="pointer-events-none absolute left-6 top-6 w-8 h-8 md:left-8 md:top-8 md:w-10 md:h-10 lg:left-10 lg:top-10 lg:w-12 lg:h-12 border-t-2 border-l-2 border-[#F97316]"></span>
          <span aria-hidden="true" className="pointer-events-none absolute right-6 bottom-6 w-8 h-8 md:right-8 md:bottom-8 md:w-10 md:h-10 lg:right-10 lg:bottom-10 lg:w-12 lg:h-12 border-b-2 border-r-2 border-[#F97316]"></span>
        </>
      )}
      <div className="container text-left md:text-center px-8 md:px-4">
        <h2 className={cn('text-h2 font-outfit mb-4', orangeHeading ? 'text-[#F97316]' : 'text-white')}>
          {title}
        </h2>
        <p className="text-lg mb-4 max-w-2xl mx-auto opacity-90">
          {description}
        </p>
        <p className="text-sm mb-8 max-w-2xl mx-auto opacity-80">
          {t('waterLeak')}
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {/* Contact Button */}
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-6 w-[80%] sm:w-auto self-center"
            asChild
          >
            <a href={`mailto:${COMPANY.email}`} aria-label={t('contactUs')}>
              <Mail className="h-5 w-5 mr-2" />
              {t('contactUs')}
            </a>
          </Button>
          
          {/* Phone Button - only show if phone number is configured */}
          {COMPANY.phone && COMPANY.phone !== '+468-000000' && (
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6 w-[80%] sm:w-auto self-center"
              asChild
            >
              <a href={`tel:${COMPANY.phone}`} aria-label={t('callNow')}>
                <Phone className="h-5 w-5 mr-2" />
                {t('callNow')}
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
