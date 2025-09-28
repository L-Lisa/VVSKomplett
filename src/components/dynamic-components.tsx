'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { DynamicComponentErrorBoundary } from '@/components/dynamic-component-error-boundary';

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
const CookieBannerComponent = dynamic(() => import('@/components/cookie-banner').then(mod => ({ default: mod.CookieBanner })), {
  ssr: false,
  loading: () => null, // No loading state needed for cookie banner
});

const LocaleSwitcherComponent = dynamic(() => import('@/components/locale-switcher').then(mod => ({ default: mod.LocaleSwitcher })), {
  ssr: false,
  loading: () => <LocaleSwitcherLoading />,
});

// Wrapped components with error boundaries
export const CookieBanner = () => (
  <DynamicComponentErrorBoundary>
    <CookieBannerComponent />
  </DynamicComponentErrorBoundary>
);

export const LocaleSwitcher = () => (
  <DynamicComponentErrorBoundary>
    <LocaleSwitcherComponent />
  </DynamicComponentErrorBoundary>
);
