'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// Dynamic components will be passed as props
import { Menu, Phone } from 'lucide-react';
import { COMPANY } from '@/config/company';

interface NavItem {
  key: string;
  href: string;
}

interface HeaderProps {
  LocaleSwitcher: React.ComponentType;
}

export function Header({ LocaleSwitcher }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const t = useTranslations();
  
  const navItems: NavItem[] = [
    { key: 'newInstallation', href: '/nyinstallation' },
    { key: 'pipeReplacement', href: '/stambyte' },
    { key: 'service', href: '/service' },
    { key: 'relining', href: '/relining' },
    { key: 'pipeFlushing', href: '/stamspolning' },
    { key: 'pipeCoating', href: '/stamfilmning' },
    { key: 'about', href: '/om-oss' },
    { key: 'contact', href: '/kontakt' },
  ];

  const phoneNumber = COMPANY.phone;

  // Reusable CTA buttons component
  const CTAButtons = ({ className = "", onClick }: { className?: string; onClick?: () => void }) => (
    <>
      <Button className={className} asChild>
        <a href={`tel:${phoneNumber}`}>
          <Phone className="h-4 w-4 mr-2" />
          {t('header.ringDirect')}
        </a>
      </Button>
      <Button variant="outline" className={className} asChild>
        <Link href="/kontakt" {...(onClick && { onClick })}>
          {t('navigation.contact')}
        </Link>
      </Button>
    </>
  );

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container">
        {/* Desktop: Logo spans both rows */}
        <div className="hidden lg:flex items-start justify-between">
          {/* Logo - spans both rows */}
          <Link href="/" className="flex items-start space-x-2 py-4">
            <Image
              src="/logokomplett.webp"
              alt={t('header.logoAlt')}
              width={1280}
              height={720}
              className="h-20 w-auto shrink-0"
              priority
            />
          </Link>
          
          {/* Right side content */}
          <div className="flex flex-col">
            {/* Navigation Row */}
            <nav className="flex items-center space-x-8 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-sm font-medium text-text-700 hover:text-primary transition-colors"
                >
                  {t(`navigation.${item.key}`)}
                </Link>
              ))}
            </nav>
            
            {/* CTA & Locale Row */}
            <div className="flex items-center justify-end space-x-4 pb-4">
              <div className="flex items-center space-x-2">
                <LocaleSwitcher />
              </div>
              <CTAButtons />
            </div>
          </div>
        </div>

        {/* Mobile: Original layout */}
        <div className="flex lg:hidden items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logokomplett.webp"
              alt={t('header.logoAlt')}
              width={1280}
              height={720}
              className="h-16 w-auto shrink-0"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <LocaleSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                {/* Accessible title/description for the sheet */}
                <div className="sr-only">
                  <h2>{t('header.menuTitle')}</h2>
                  <p>{t('header.menuDescription')}</p>
                </div>
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        className="text-lg font-medium text-text-700 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {t(`navigation.${item.key}`)}
                      </Link>
                    ))}
                  </nav>
                  
                  {/* Mobile CTA */}
                  <div className="pt-6 border-t">
                    <CTAButtons className="w-full mb-4" onClick={() => setIsOpen(false)} />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
