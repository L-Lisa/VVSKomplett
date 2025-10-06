'use client';

import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ContactForm } from '@/components/contact-form';

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
        <p className="text-lg mb-4 max-w-2xl mx-auto opacity-90 whitespace-nowrap md:whitespace-normal">
          {description}
        </p>
        <p className="text-sm mb-8 max-w-2xl mx-auto opacity-80">
          {t('waterLeak')}
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {/* Contact Button opens dialog with ContactForm */}
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-6 w-[80%] sm:w-auto self-center"
                aria-label={t('contactUs')}
              >
                <Mail className="h-5 w-5 mr-2" />
                {t('contactUs')}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md mx-auto">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-center text-[#1f398a]">
                  {t('title')}
                </DialogTitle>
              </DialogHeader>
              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
