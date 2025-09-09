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

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logokomplett.webp"
              alt={t('header.logoAlt')}
              width={40}
              height={40}
              className="h-10 w-10 shrink-0"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
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

          {/* Desktop CTA & Locale */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <LocaleSwitcher />
            </div>
            <Button asChild>
              <a href={`tel:${phoneNumber}`}>
                <Phone className="h-4 w-4 mr-2" />
                {t('header.ringDirect')}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/kontakt">
                {t('navigation.contact')}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center space-x-2">
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
                    <Button className="w-full mb-4" asChild>
                      <a href={`tel:${phoneNumber}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        {t('header.ringDirect')}
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/kontakt" onClick={() => setIsOpen(false)}>
                        {t('navigation.contact')}
                      </Link>
                    </Button>
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
