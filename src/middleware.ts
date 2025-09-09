// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed' // /sv, /en, och redirectar / -> /sv
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    // - … Open Graph image route which is locale-agnostic
    '/((?!api|_next|_vercel|opengraph-image|.*\\..*).*)'
  ]
};
