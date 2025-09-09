import {getTranslations} from 'next-intl/server';
import {COMPANY} from '@/config/company';
import {generatePageMetadata} from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cookies' });
  const isEnglish = locale === 'en';
  return generatePageMetadata({
    title: t('title'),
    description: 'Information om cookies som används på webbplatsen.',
    path: `/${locale}/cookies`,
    robots: { index: !isEnglish, follow: true },
  });
}

export default async function CookiesPage() {
  const t = await getTranslations();
  const today = new Date().toISOString().slice(0, 10);

  return (
    <main className="container py-10">
      <article className="prose max-w-none">
        <h1>{t('cookies.title')}</h1>
        <p className="text-sm text-text-600">{t('cookies.lastUpdated', {date: today})}</p>

        <p>{t('cookies.intro', {company: COMPANY.name})}</p>

        <h2>{t('cookies.whatAre.title')}</h2>
        <p>{t('cookies.whatAre.body')}</p>

        <h2>{t('cookies.types.title')}</h2>
        
        <h3>{t('cookies.types.essential.title')}</h3>
        <p>{t('cookies.types.essential.description')}</p>
        <ul>
          {t.raw('cookies.types.essential.items').map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>{t('cookies.types.none.title')}</h3>
        <p>{t('cookies.types.none.description')}</p>

        <h2>{t('cookies.management.title')}</h2>
        <p>{t('cookies.management.banner')}</p>
        <p>{t('cookies.management.browser')}</p>
        <ul>
          {t.raw('cookies.management.browserSteps').map((step: string, index: number) => (
            <li key={index}>{step}</li>
          ))}
        </ul>

        <h2>{t('cookies.consent.title')}</h2>
        <p>{t('cookies.consent.body')}</p>
        <p>{t('cookies.consent.withdraw')}</p>

        <h2>{t('cookies.contact.title')}</h2>
        <p>{t('cookies.contact.body', {email: COMPANY.email})}</p>
      </article>
    </main>
  );
}
