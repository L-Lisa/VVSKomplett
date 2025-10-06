import {getTranslations} from 'next-intl/server';
import {COMPANY} from '@/config/company';
import {generatePageMetadata} from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });
  return generatePageMetadata({
    title: t('title'),
    description: 'Kort integritetspolicy för webbplatsen.',
    path: `/${locale}/integritetspolicy`
  });
}

export default async function IntegritetspolicyPage() {
  const t = await getTranslations();
  const today = new Date().toISOString().slice(0, 10);

  return (
    <main className="container py-10">
      <article className="prose max-w-none">
        <h1>{t('privacy.title')}</h1>
        <p className="text-sm text-text-600">{t('privacy.lastUpdated', {date: today})}</p>

        <p>{t('privacy.intro', {company: COMPANY.name})}</p>

        <h2>{t('privacy.controller.title')}</h2>
        <p>{t('privacy.controller.body', {
          company: COMPANY.name,
          address: COMPANY.address,
          email: COMPANY.email,
          phone: '+46 70 748 86 64'
        })}</p>

        <h2>{t('privacy.data.title')}</h2>
        <ul>
          <li>{t('privacy.data.item1')}</li>
          <li>{t('privacy.data.item2')}</li>
          <li>{t('privacy.data.item3')}</li>
        </ul>

        <h2>{t('privacy.purposes.title')}</h2>
        <ul>
          <li>{t('privacy.purposes.item1')}</li>
          <li>{t('privacy.purposes.item2')}</li>
          <li>{t('privacy.purposes.item3')}</li>
        </ul>

        <h2>{t('privacy.recipients.title')}</h2>
        <p>{t('privacy.recipients.body')}</p>

        <h2>{t('privacy.transfers.title')}</h2>
        <p>{t('privacy.transfers.body')}</p>

        <h2>{t('privacy.retention.title')}</h2>
        <ul>
          <li>{t('privacy.retention.item1')}</li>
          <li>{t('privacy.retention.item2')}</li>
          <li>{t('privacy.retention.item3')}</li>
        </ul>

        <h2>{t('privacy.rights.title')}</h2>
        <p>{t('privacy.rights.items')}</p>
        <p>{t('privacy.rights.complaint')}</p>

        <h2>{t('privacy.cookies.title')}</h2>
        <p>{t('privacy.cookies.body')}</p>

        <h2>{t('privacy.changes.title')}</h2>
        <p>{t('privacy.changes.body')}</p>

        <h2>{t('privacy.contact.title')}</h2>
        <p>{t('privacy.contact.body', {email: COMPANY.email})}</p>
      </article>
    </main>
  );
}
