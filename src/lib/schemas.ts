import { COMPANY } from '@/config/company';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY.name,
    description: 'Professionella VVS-tjänster i Stockholm. Nyinstallation, stambyte, relining och service av certifierade montörer.',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://komplettvvs.se',
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Stockholm',
      addressCountry: 'SE',
    },
    areaServed: {
      '@type': 'City',
      name: 'Stockholm',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 59.3293,
        longitude: 18.0686,
      },
      geoRadius: '50000',
    },
    openingHours: 'Mo-Fr 08:00-17:00,Sa 09:00-15:00',
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Invoice',
    currenciesAccepted: 'SEK',
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'VVS Services',
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
}

export function generateServiceSchema(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      telephone: COMPANY.phone,
      email: COMPANY.email,
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
    serviceType: 'VVS Service',
    category: 'Home Improvement',
  };
}

export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      telephone: COMPANY.phone,
      email: COMPANY.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Stockholm',
        addressCountry: 'SE',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: COMPANY.phone,
          contactType: 'customer service',
          availableLanguage: ['Swedish', 'English'],
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:00',
          },
        },
        {
          '@type': 'ContactPoint',
          telephone: COMPANY.phone,
          contactType: 'emergency service',
          availableLanguage: ['Swedish', 'English'],
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
          },
        },
      ],
    },
  };
}
