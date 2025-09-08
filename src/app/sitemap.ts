import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://komplettvvs.se';
  const locales = ['sv', 'en'];

  const routes = [
    '',
    '/nyinstallation',
    '/stambyte',
    '/service',
    '/relining',
    '/stamspolning',
    '/stamfilmning',
    '/om-oss',
    '/kontakt',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            sv: `${baseUrl}/sv${route}`,
            en: `${baseUrl}/en${route}`,
          },
        },
      });
    });
  });

  return sitemap;
}
