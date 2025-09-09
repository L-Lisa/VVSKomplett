'use client';

import * as React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

type Locale = 'sv' | 'en';

export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();
  const [currentLocale, setCurrentLocale] = React.useState<Locale>('sv');

  React.useEffect(() => {
    // Extract current locale from pathname
    const segments = pathname.split('/');
    const locale = segments[1] as Locale;
    if (locale === 'en' || locale === 'sv') {
      setCurrentLocale(locale);
    }
  }, [pathname]);

  const handleLocaleChange = (newLocale: Locale) => {
    // Replace the locale in the current pathname
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    
    setCurrentLocale(newLocale);
    router.push(newPath);
  };

  const getLabel = () => {
    return currentLocale.toUpperCase();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="btn-focus"
          aria-label={t('header.languageToggle')}
        >
          <Globe className="h-4 w-4" />
          <span className="ml-1">{getLabel()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-20">
        <DropdownMenuItem
          onClick={() => handleLocaleChange('sv')}
          className="flex items-center justify-center"
        >
          <span>SV</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLocaleChange('en')}
          className="flex items-center justify-center"
        >
          <span>EN</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
