'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ContactForm } from '@/components/contact-form';
import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';

export function StickyCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('home');

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center sm:left-auto sm:right-4 sm:justify-start z-50">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button 
            className="bg-[#F97316] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2 font-semibold text-sm sm:text-base"
            aria-label="Kontakta oss för offert"
          >
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline">{t('freeQuote')}</span>
            <span className="sm:hidden">Kontakt</span>
          </button>
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
