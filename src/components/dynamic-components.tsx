'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

// Loading components with translations
// Theme switcher removed; loading placeholder no longer needed

function LocaleSwitcherLoading() {
  const t = useTranslations('locale');
  return (
    <div className="btn btn-navy" aria-label={t('loading')}>
      <div className="h-4 w-4 animate-pulse bg-current opacity-50" />
    </div>
  );
}

// Dynamic imports with SSR disabled for client-side only components
export const CookieBanner = dynamic(() => import('@/components/cookie-banner').then(mod => ({ default: mod.CookieBanner })), {
  ssr: false,
  loading: () => null, // No loading state needed for cookie banner
});

// Theme switcher removed per requirements

export const LocaleSwitcher = dynamic(() => import('@/components/locale-switcher').then(mod => ({ default: mod.LocaleSwitcher })), {
  ssr: false,
  loading: () => <LocaleSwitcherLoading />,
});
