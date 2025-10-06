'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// Dynamic components will be passed as props
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
  const locale = useLocale();
  const isEnglish = locale === 'en';
  const pathname = usePathname();
  
  const navItems: NavItem[] = [
    { key: 'newInstallation', href: '/nyinstallation' },
    { key: 'pipeReplacement', href: '/stambyte' },
    { key: 'service', href: '/service' },
    { key: 'relining', href: '/relining' },
    { key: 'pipeFlushing', href: '/stamspolning' },
    { key: 'pipeCoating', href: '/stamfilmning' },
    { key: 'about', href: '/om-oss' },
    { key: 'careers', href: '/jobba-hos-oss' },
    { key: 'contact', href: '/kontakt' },
  ];

  // Desktop-only: group three items under VVS dropdown
  const groupedKeys = new Set(['newInstallation', 'pipeReplacement', 'service']);
  const desktopTopNavItems = navItems.filter((item) => !groupedKeys.has(item.key));
  const vvsChildren = navItems.filter((item) => groupedKeys.has(item.key));

  const isChildActive = vvsChildren.some((child) => pathname.startsWith(child.href));

  // Ensure all internal links preserve the active locale
  const withLocale = (href: string) => `/${locale}${href}`;


  // Reusable CTA buttons component
  const CTAButtons = ({ className = "", onClick }: { className?: string; onClick?: () => void }) => (
    <>
      <Button variant="secondary" className={className} asChild>
        <Link href={`/${locale}/kontakt`} {...(onClick && { onClick })}>
          {t('navigation.contact')}
        </Link>
      </Button>
    </>
  );

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 left-0 right-0 z-50">
      <div className="container">
        {/* Desktop: Logo spans both rows */}
        <div className="hidden lg:flex items-center">
          {/* Logo - spans both rows */}
          <Link href={`/${locale}`} className="flex items-center py-4 -ml-2 md:-ml-4">
            <Image
              src="/logokomplett.webp"
              alt={t('header.logoAlt')}
              width={1280}
              height={720}
              className="w-32 h-auto shrink-0 scale-85"
              priority
            />
          </Link>
          
          {/* Spacer - 1rem space between logo and nav */}
          <div className="w-4"></div>
          
          {/* Right side content */}
          <div className="flex flex-col flex-1">
                        {/* Navigation Row with Language Toggle */}
                        <nav className={`flex items-center justify-end ${isEnglish ? 'space-x-5' : 'space-x-4'}`} role="navigation" aria-label="Main navigation">
                          {/* VVS dropdown (desktop only) */}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <button
                                className={`${isEnglish ? 'text-base' : 'text-lg'} font-medium whitespace-nowrap transition-all duration-200 ease-in-out ${isChildActive ? 'text-primary' : 'text-text-700 hover:text-primary hover:scale-105 active:scale-95'}`}
                                aria-haspopup="menu"
                                aria-expanded={isChildActive}
                              >
                                {t('navigation.vvs')}
                              </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="p-2 border-0 rounded-none outline-none focus-visible:ring-0">
                              {vvsChildren.map((child) => (
                                <DropdownMenuItem key={child.key} className="px-2 py-1.5 rounded-none">
                                  <Link href={withLocale(child.href)} className="block w-full">
                                    {t(`navigation.${child.key}`)}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>

                          {/* Remaining top-level items (excluding grouped) */}
                          {desktopTopNavItems.map((item) => (
                            <Link
                              key={item.key}
                              href={withLocale(item.href)}
                              className={`${isEnglish ? 'text-base' : 'text-lg'} font-medium text-text-700 hover:text-primary hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out whitespace-nowrap`}
                              aria-current={item.href === pathname ? 'page' : undefined}
                            >
                              {t(`navigation.${item.key}`)}
                            </Link>
                          ))}
              {/* Language Toggle inline with menu items */}
              <div className="ml-4">
                <LocaleSwitcher />
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile: Original layout */}
        <div className="flex lg:hidden items-center justify-between py-4">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <Image
              src="/logokomplett.webp"
              alt={t('header.logoAlt')}
              width={1280}
              height={720}
              className="w-32 h-auto shrink-0"
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
              <div className="flex flex-col space-y-6 mt-6">
                  {/* Accessible title/description for the sheet */}
                  <div className="sr-only">
                    <h2>{t('header.menuTitle')}</h2>
                    <p>{t('header.menuDescription')}</p>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4" role="navigation" aria-label="Main navigation">
                    {navItems.map((item) => (
                      <Link
                        key={item.key}
                        href={withLocale(item.href)}
                        className="text-lg font-medium text-text-700 hover:text-primary transition-colors pl-4"
                        onClick={() => setIsOpen(false)}
                        aria-current={item.href === '/om-oss' ? 'page' : undefined}
                      >
                        {t(`navigation.${item.key}`)}
                      </Link>
                    ))}
                  </nav>
                  
                  {/* Mobile CTA */}
                  <div className="pt-6 border-t">
                    <CTAButtons className="w-full mb-4" onClick={() => setIsOpen(false)} />
                    
                    {/* Logo */}
                    <div className="flex justify-center mt-6">
                      <Image
                        src="/logokomplett.webp"
                        alt={t('header.logoAlt')}
                        width={1280}
                        height={720}
                        className="h-12 w-auto opacity-60"
                      />
                    </div>
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
