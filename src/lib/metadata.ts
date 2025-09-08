import { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  locale: string;
  path?: string;
}

export function generateMetadata({
  title,
  description,
  locale,
  path = '',
}: MetadataProps): Metadata {
  const baseUrl = 'https://komplettvvs.se';
  const url = `${baseUrl}/${locale}${path}`;
  const imageUrl = `${baseUrl}/images/vvsror.jpg`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Komplett VVS i Stockholm AB',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === 'sv' ? 'sv_SE' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
      languages: {
        sv: `${baseUrl}/sv${path}`,
        en: `${baseUrl}/en${path}`,
      },
    },
  };
}
