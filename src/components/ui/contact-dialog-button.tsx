'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { Mail } from 'lucide-react';
import * as React from 'react';

interface ContactDialogButtonProps {
  label: string;
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  showIcon?: boolean;
  ariaLabel?: string;
}

export function ContactDialogButton({
  label,
  variant = 'secondary',
  size = 'lg',
  className,
  showIcon = true,
  ariaLabel,
}: ContactDialogButtonProps) {
  const t = useTranslations();
  const dialogTitle = t('contact.form.title');
  const ContactForm = React.useMemo(
    () => dynamic(async () => (await import('@/components/contact-form')).ContactForm, { ssr: false }),
    []
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className} aria-label={ariaLabel ?? label}>
          {showIcon && <Mail className="h-5 w-5 mr-2" />}
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center text-[#1f398a]">
            {dialogTitle}
          </DialogTitle>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}


