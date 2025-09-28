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
        },
        {
          '@type': 'ContactPoint',
          telephone: COMPANY.phone,
          contactType: 'emergency service',
          availableLanguage: ['Swedish', 'English'],
        },
      ],
    },
  };
}

export function generateJobPostingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'VVS-montör',
    description: 'Komplett VVS i Sthlm AB söker erfarna VVS-montörer för att ansluta till vårt växande team. Vi erbjuder anställning med kollektivavtal, konkurrenskraftig lön och möjlighet till vidareutbildning.',
    identifier: {
      '@type': 'PropertyValue',
      name: 'VVS-montör',
      value: 'VVS-MONTOR-2024',
    },
    datePosted: new Date().toISOString(),
    validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days from now
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: COMPANY.name,
      sameAs: process.env.NEXT_PUBLIC_BASE_URL || 'https://komplettvvs.se',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Stockholm',
        addressCountry: 'SE',
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'SEK',
      value: {
        '@type': 'QuantitativeValue',
        minValue: 35000,
        maxValue: 45000,
        unitText: 'MONTH',
      },
    },
    qualifications: [
      'Utbildad och certifierad VVS-montör',
      'Minst 3 års erfarenhet i branschen',
      'B-körkort',
      'Svenska språkkunskaper',
    ],
    responsibilities: [
      'Installation av nya VVS-system',
      'Service och underhåll av befintliga system',
      'Samarbete med team och kunder',
      'Följa säkerhetsregler och kvalitetsstandarder',
    ],
    benefits: [
      'Kollektivavtal',
      'Konkurrenskraftig lön',
      'Möjlighet till vidareutbildning',
      'Modern utrustning',
      'Trygg arbetsmiljö',
    ],
    workHours: 'Heltid',
    applicationContact: {
      '@type': 'ContactPoint',
      email: COMPANY.email,
      telephone: COMPANY.phone,
      contactType: 'hiring manager',
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
