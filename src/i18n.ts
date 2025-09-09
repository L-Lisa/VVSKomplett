// src/i18n.ts
import {getRequestConfig} from 'next-intl/server';

export const locales = ['sv', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'sv';

export default getRequestConfig(async ({locale}) => {
  const safeLocale: Locale = locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
  const messages = (await import(`./messages/${safeLocale}.json`)).default;
  return {
    locale: safeLocale,
    messages
  };
});
