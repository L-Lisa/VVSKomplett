import { getTranslations } from 'next-intl/server';
import { generateServiceMetadata } from '@/lib/metadata';
import { generateServiceSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Settings, Shield, Calendar } from 'lucide-react';
import Link from 'next/link';
import { CTA } from '@/components/content/cta';
import Image from 'next/image';

// Shimmer utility for image loading
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="20%" />
      <stop stop-color="#edeef1" offset="50%" />
      <stop stop-color="#f6f7f8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export async function generateMetadata() {
  const t = await getTranslations();
  return generateServiceMetadata({
    title: t('services.service.title'),
    description: t('services.service.description'),
    keywords: t('services.service.pageContent.buttons.getQuote'),
    path: '/service',
  });
}

export default async function ServicePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();

  const features = [
    {
      icon: Calendar,
      title: t('services.service.pageContent.features.0.title'),
      description: t('services.service.pageContent.features.0.description')
    },
    {
      icon: Clock,
      title: t('services.service.pageContent.features.1.title'),
      description: t('services.service.pageContent.features.1.description')
    },
    {
      icon: Settings,
      title: t('services.service.pageContent.features.2.title'),
      description: t('services.service.pageContent.features.2.description')
    },
    {
      icon: Shield,
      title: t('services.service.pageContent.features.3.title'),
      description: t('services.service.pageContent.features.3.description')
    }
  ];

  const processSteps = [
    t('services.service.process.steps.0'),
    t('services.service.process.steps.1'),
    t('services.service.process.steps.2'),
    t('services.service.process.steps.3'),
    t('services.service.process.steps.4')
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(
            'VVS Service Stockholm',
            'Professionell VVS-service och underhåll i Stockholm. Förebyggande underhåll, akutservice dygnet runt och serviceavtal.'
          )),
        }}
      />

      {/* Hero Section */}
      <section
        className="relative py-20"
        role="region"
        aria-labelledby="hero-title"
        style={{
          backgroundImage: "url('/vvsbackground.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <span aria-hidden="true" className="absolute inset-0 bg-white/10"></span>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block rounded-md bg-white/70 md:bg-white/60 backdrop-blur-md md:backdrop-blur-sm px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
              <h1 id="hero-title" className="text-4xl md:text-5xl font-bold font-outfit mb-4">
                {t('services.service.hero.h1')}
              </h1>
              <p className="text-xl text-text-700 mb-8 leading-relaxed">
                {t('services.service.hero.intro')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href={`/${locale}/kontakt`}>
                    {t('services.service.pageContent.buttons.getQuote')}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/${locale}/om-oss`}>
                    {t('services.service.pageContent.buttons.learnMore')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Service Expertise */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit mb-8 text-primary text-center">
              {locale === 'en' ? 'Why customers trust our service' : 'Varför våra kunder litar på vår service'}
            </h2>
            <div className="prose prose-lg max-w-none text-text-700 leading-relaxed text-left">
              <p className="mb-6">
                {locale === 'en'
                  ? 'Service is the heart of our company – this is where we build long‑term relationships. With 30+ years of experience, we know great service is about more than fixing issues when they appear. It’s about understanding your needs, communicating proactively and delivering solutions that last longer than expected.'
                  : 'Service är hjärtat i vårt företag - det är där vi bygger långsiktiga relationer med våra kunder. Med över 30 års erfarenhet vet vi att bra service handlar om mer än att bara lösa problem när de uppstår. Det handlar om att förstå dina behov, vara proaktiv i vår kommunikation och alltid leverera lösningar som håller längre än förväntat.'}
              </p>
              <p className="mb-6">
                {locale === 'en'
                  ? 'We understand that VVS issues rarely come at convenient times. That’s why we’ve built a service culture that prioritizes fast response and personal follow‑up. Our customers know they can rely on us – whether it’s scheduled maintenance, urgent problems or complex troubleshooting. This reliability, and our passion for finding the right solution, is why we’re Stockholm’s preferred VVS partner.'
                  : 'Vi förstår att VVS-problem ofta kommer i olämpliga stunder, och det är därför vi har byggt upp en servicekultur som prioriterar snabb respons och personlig uppföljning. Våra kunder vet att de kan räkna med oss - oavsett om det gäller planerat underhåll, akuta problem eller komplexa felsökningar. Det är denna pålitlighet och vår passion för att hitta rätt lösning som gör oss till Stockholms föredragna VVS-partner.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit text-center mb-12">
              {t('services.service.pageContent.featuresTitle')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section with image */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit text-center mb-12">
              {t('services.service.process.title')}
            </h2>
            <div className="grid md:[grid-template-columns:auto_auto] justify-center gap-6 items-stretch">
              <div>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <p className="text-lg text-text-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full">
                <div className="h-64 md:h-full flex items-center">
                  <div className="relative w-full md:w-[460px] h-full rounded-lg overflow-hidden">
                  <Image
                    src="/placeholdertool.webp"
                    alt={t('services.service.process.imageAlt')}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    className="object-contain md:rotate-90"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold font-outfit mb-6">
                  {t('services.service.pageContent.whyChooseUsTitle')}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t('services.service.pageContent.whyChooseUs.0')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t('services.service.pageContent.whyChooseUs.1')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t('services.service.pageContent.whyChooseUs.2')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t('services.service.pageContent.whyChooseUs.3')}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold font-outfit mb-6">
                  {t('services.service.pageContent.relatedServicesTitle')}
                </h3>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
                    <h4 className="font-semibold mb-2">
                      <Link href={`/${locale}/nyinstallation`} className="text-primary hover:underline">
                        {t('services.service.pageContent.relatedServices.0.title')}
                      </Link>
                    </h4>
                    <p className="text-text-700 text-sm">
                      {t('services.service.pageContent.relatedServices.0.description')}
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
                    <h4 className="font-semibold mb-2">
                      <Link href={`/${locale}/stamspolning`} className="text-primary hover:underline">
                        {t('services.service.pageContent.relatedServices.1.title')}
                      </Link>
                    </h4>
                    <p className="text-text-700 text-sm">
                      {t('services.service.pageContent.relatedServices.1.description')}
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
                    <h4 className="font-semibold mb-2">
                      <Link href={`/${locale}/stamfilmning`} className="text-primary hover:underline">
                        {t('services.service.pageContent.relatedServices.2.title')}
                      </Link>
                    </h4>
                    <p className="text-text-700 text-sm">
                      {t('services.service.pageContent.relatedServices.2.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title={t('cta.title')}
        description={t('cta.description')}
        orangeHeading
        showCorners
      />
    </>
  );
}