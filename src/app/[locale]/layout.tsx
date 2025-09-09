import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {Inter, Outfit} from 'next/font/google';
import {Header} from '@/components/layout/header';
import {Footer} from '@/components/layout/footer';
import { CookieBanner, LocaleSwitcher } from '@/components/dynamic-components';
import { GlobalErrorBoundary } from '@/components/global-error-boundary';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Geist Sans is not available in next/font/google, using Outfit as heading font

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'Komplett VVS i Sthlm AB',
  description:
    'VVS i Stockholm för entreprenad, BRF, företag och privatpersoner. Komplett VVS – Allt under samma tak för ditt vatten och avlopp.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();

  if (process.env.NODE_ENV !== 'production') {
    const supported = ['sv', 'en'];
    if (!supported.includes(locale)) {
      // Minimal guardrail: warn if an unknown locale is requested
      console.warn(`[i18n] Unknown locale received: ${locale}`);
    }
    if (!messages || typeof messages !== 'object') {
      console.warn('[i18n] Messages failed to load or are not an object');
    }
  }

  return (
    <html lang={locale} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`min-h-dvh bg-background text-foreground antialiased ${inter.variable} ${outfit.variable}`}>
        <NextIntlClientProvider 
          locale={locale} 
          messages={messages}
        >
          <GlobalErrorBoundary>
            <Header 
              LocaleSwitcher={LocaleSwitcher}
            />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <CookieBanner />
          </GlobalErrorBoundary>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
