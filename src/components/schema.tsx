import { useTranslations } from 'next-intl';

export function LocalBusinessSchema() {
  const t = useTranslations('home');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Komplett VVS i Stockholm AB',
    description: t('description'),
    url: 'https://komplettvvs.se',
    telephone: '08-123 456 78',
    email: 'info@komplettvvs.se',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Stockholm',
      addressCountry: 'SE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '59.3293',
      longitude: '18.0686',
    },
    openingHours: 'Mo-Fr 08:00-17:00',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '59.3293',
        longitude: '18.0686',
      },
      geoRadius: '50000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'VVS-tjänster',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nyinstallation',
            description: 'Professionell installation av nya VVS-system',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Stambyte',
            description: 'Komplett byte av rörsystem i fastigheter',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Service',
            description: 'Regelbunden service och underhåll av VVS-system',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Relining',
            description: 'Modern relining-teknik för befintliga rör',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Stamspolning',
            description: 'Professionell rengöring av rörsystem',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Stamfilmning',
            description: 'Skyddande filmning av rörsystem',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ContactPointSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Kontakt - Komplett VVS i Stockholm AB',
    description: 'Kontakta oss för en kostnadsfri offert',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Komplett VVS i Stockholm AB',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '08-123 456 78',
        contactType: 'customer service',
        availableLanguage: ['Swedish', 'English'],
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  serviceName,
  serviceDescription,
}: {
  serviceName: string;
  serviceDescription: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Komplett VVS i Stockholm AB',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Stockholm',
        addressCountry: 'SE',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Stockholm',
    },
    serviceType: 'Plumbing Services',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
