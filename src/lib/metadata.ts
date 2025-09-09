import { Metadata } from 'next';
import { COMPANY } from '@/config/company';

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  path: string;
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
}

export function generatePageMetadata({
  title,
  description,
  keywords,
  path,
  robots,
}: PageMetadata): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const fullUrl = `${baseUrl}${path}`;
  const ogImageUrl = `${baseUrl}/opengraph-image?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

  return {
    title: `${title} | ${COMPANY.name}`,
    description,
    keywords: keywords || 'VVS Stockholm, VVS-installation, stambyte, relining, VVS-service, rörmokare Stockholm',
    openGraph: {
      title: `${title} | ${COMPANY.name}`,
      description,
      url: fullUrl,
      siteName: COMPANY.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'sv_SE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${COMPANY.name}`,
      description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: fullUrl,
      languages: {
        'sv': fullUrl,
        'en': fullUrl.replace('/sv/', '/en/'),
      },
    },
    robots: {
      index: robots?.index ?? true,
      follow: robots?.follow ?? true,
      googleBot: {
        index: robots?.index ?? true,
        follow: robots?.follow ?? true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateServiceMetadata(service: {
  title: string;
  description: string;
  keywords: string;
  path: string;
}): Metadata {
  return generatePageMetadata({
    ...service,
    keywords: `${service.keywords}, VVS Stockholm, professionell installation, certifierade montörer`,
  });
}