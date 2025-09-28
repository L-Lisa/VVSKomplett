'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ContactForm } from '@/components/contact-form';
import { useTranslations } from 'next-intl';

export function StickyCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('home');

  return (
    <div className="fixed bottom-4 right-2 sm:bottom-6 sm:right-6 z-50">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="font-bold text-sm sm:text-lg px-4 py-2 sm:px-6 sm:py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 animate-pulse whitespace-nowrap"
            size="lg"
          >
            {t('freeQuote')}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center text-[#1f398a]">
              {t('freeQuote')}
            </DialogTitle>
          </DialogHeader>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
