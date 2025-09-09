import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {Inter, Outfit} from 'next/font/google';
import {ThemeProvider} from 'next-themes';
import {Header} from '@/components/layout/header';
import {Footer} from '@/components/layout/footer';
import { CookieBanner, ThemeSwitcher, LocaleSwitcher } from '@/components/dynamic-components';
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
    'VVS i Stockholm – nyinstallation, stambyte, relining, stamspolning och service. Säker Vatten, försäkrade arbeten och garanti.'
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
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header 
                ThemeSwitcher={ThemeSwitcher}
                LocaleSwitcher={LocaleSwitcher}
              />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
              <CookieBanner />
            </ThemeProvider>
          </GlobalErrorBoundary>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
