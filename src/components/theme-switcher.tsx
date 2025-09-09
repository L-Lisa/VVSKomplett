'use client';

import {Monitor, Moon, Sun} from 'lucide-react';
import {useTheme} from 'next-themes';
import {useTranslations} from 'next-intl';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export default function ThemeSwitcher() {
  const {theme, setTheme} = useTheme();
  const t = useTranslations('theme');
  const value = (theme ?? 'system') as 'light' | 'dark' | 'system';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button aria-label={t('label')} className="btn btn-navy">
          {value === 'light' ? <Sun size={18} /> : value === 'dark' ? <Moon size={18} /> : <Monitor size={18} />}
          <span className="sr-only">{t('label')}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel>{t('label')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={value} onValueChange={(v) => setTheme(v as 'light' | 'dark' | 'system')}>
          <DropdownMenuRadioItem value="light">{t('light')}</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">{t('dark')}</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">{t('system')}</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}