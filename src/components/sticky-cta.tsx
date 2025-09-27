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
    <div className="fixed bottom-6 right-6 z-50">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-[#1f398a] font-bold text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 animate-pulse"
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
