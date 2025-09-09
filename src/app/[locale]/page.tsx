import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Wrench,
  Home,
  Settings,
  Shield,
  Droplets,
  Paintbrush,
  CheckCircle,
} from 'lucide-react';
import { Hero } from '@/components/content/hero';
import { Testimonials3 } from '@/components/content/testimonials3';
import { CTA } from '@/components/content/cta';
import { generatePageMetadata } from '@/lib/metadata';
import { generateLocalBusinessSchema } from '@/lib/schemas';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { GeometricAccents } from '@/components/ui/geometric-accents';
import { ScreenReaderAnnouncement } from '@/components/ui/screen-reader-announcement';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'VVS i Stockholm för entreprenad, BRF, företag och privatpersoner',
  description: 'Komplett VVS i Sthlm AB levererar trygga VVS-lösningar i Stor-Stockholm: nyinstallation, stambyte, relining, stamspolning, stamfilmning och service.',
  keywords: 'VVS Stockholm, VVS-installation, stambyte, relining, VVS-service, rörmokare Stockholm, VVS-montörer, VVS-renovering, entreprenad, BRF, företag',
  path: '/',
});

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();

  const services = [
    {
      key: 'newInstallation',
      icon: Wrench,
      href: '/nyinstallation',
    },
    {
      key: 'pipeReplacement',
      icon: Home,
      href: '/stambyte',
    },
    {
      key: 'service',
      icon: Settings,
      href: '/service',
    },
    {
      key: 'relining',
      icon: Shield,
      href: '/relining',
    },
    {
      key: 'pipeFlushing',
      icon: Droplets,
      href: '/stamspolning',
    },
    {
      key: 'pipeCoating',
      icon: Paintbrush,
      href: '/stamfilmning',
    },
  ];


  const testimonials = [
    {
      quote: 'Professionell service och snabb respons. Kommer definitivt att använda er igen!',
      author: 'Anna Lindberg',
      role: 'Husägare',
      company: 'Södermalm'
    },
    {
      quote: 'Utmärkt arbete med vår nya VVS-installation. Mycket nöjd med resultatet.',
      author: 'Erik Johansson',
      role: 'Fastighetsägare',
      company: 'Östermalm'
    },
    {
      quote: 'Pålitlig partner som alltid levererar kvalitet. Rekommenderas varmt!',
      author: 'Maria Andersson',
      role: 'Byggherre',
      company: 'Vasastan'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      
      {/* Hero Section */}
      <Hero
        title={t('home.title')}
        lead={t('home.subtitle')}
        description={t('home.description')}
        primaryCta={{
          text: t('navigation.contact'),
          href: '/kontakt'
        }}
        secondaryCta={{
          text: t('navigation.about'),
          href: '/om-oss'
        }}
        image={{
          src: '/images/vvsror.jpg',
          alt: t('home.hero.imageAlt')
        }}
        priority={true}
      />

      {/* Services Section */}
      <section className="py-20 relative" aria-labelledby="services-heading">
        <GeometricAccents variant="corner" className="opacity-30" />
        <div className="container mx-auto px-4">
          <ScrollAnimation delay={0} duration={300}>
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold font-outfit text-center mb-12">
              {t('home.servicesTitle')}
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Våra VVS-tjänster">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isStambyte = service.key === 'pipeReplacement';
              return (
                <ScrollAnimation 
                  key={service.key} 
                  delay={index * 100} 
                  duration={300}
                  direction="bottom"
                >
                  <Card className="group rounded-2xl border border-[#E6E9EF] bg-white shadow-[0_6px_18px_rgba(12,21,36,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-[#1f398a]/20" role="listitem">
                    <CardHeader>
                      {isStambyte && (
                        <span className="inline-block mb-2 text-[11px] font-semibold uppercase tracking-wide text-white bg-[#F97316] px-2 py-1 rounded" aria-label="Rekommenderas för BRF och företag">
                          BRF & Företag
                        </span>
                      )}
                      <Icon className="h-12 w-12 text-[#1f398a] mb-4 group-hover:text-[#F97316] transition-colors duration-300" aria-hidden="true" />
                      <CardTitle className="text-xl font-outfit">
                        {t(`services.${service.key}.title`)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {t(`services.${service.key}.description`)}
                      </CardDescription>
                      <a 
                        className="mt-3 inline-flex items-center gap-1 text-[#1f398a] font-medium hover:text-[#F97316] hover:underline transition-colors duration-300"
                        href={service.href}
                        aria-label={`Läs mer om ${t(`services.${service.key}.title`)}`}
                      >
                        {t('home.readMore')}
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Screen Reader Announcement for Services */}
      <ScreenReaderAnnouncement 
        message="Våra VVS-tjänster har laddats. Du kan navigera genom tjänstekorten med Tab-tangenten."
        delay={1000}
      />

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/20 relative">
        <GeometricAccents variant="diagonal" className="opacity-20" />
        <div className="container mx-auto px-4">
          <ScrollAnimation delay={0} duration={300}>
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-center mb-12">
              {t('home.testimonialsTitle')}
            </h2>
          </ScrollAnimation>
          <Testimonials3 testimonials={testimonials} />
        </div>
      </section>

      {/* Content Section with Internal Linking */}
      <section className="py-20 bg-[#F7F9FC] relative">
        <GeometricAccents variant="border" className="opacity-25" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation delay={0} duration={300}>
              <h2 className="text-3xl md:text-4xl font-bold font-outfit text-center mb-8">
                {t('home.contentSection.mainTitle')}
              </h2>
            </ScrollAnimation>
            
            <div className="prose prose-lg max-w-none text-text-700 mb-8">
              <p className="text-xl leading-relaxed mb-6">
                {t('home.hero.intro1')}
              </p>
              <p className="text-lg leading-relaxed mb-8">
                {t('home.hero.intro2')}
              </p>
            </div>

            {/* Process Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold font-outfit mb-4">{t('home.contentSection.specialtiesTitle')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span><Link href={`/${locale}/nyinstallation`} className="text-primary hover:underline font-medium">{t('navigation.newInstallation')}</Link> {t('home.specialties.items.nyinstallation.after')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span><Link href={`/${locale}/stambyte`} className="text-primary hover:underline font-medium">{t('navigation.pipeReplacement')}</Link> {t('home.specialties.items.stambyte.after')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span><Link href={`/${locale}/relining`} className="text-primary hover:underline font-medium">{t('navigation.relining')}</Link> {t('home.specialties.items.relining.after')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span><Link href={`/${locale}/service`} className="text-primary hover:underline font-medium">{t('navigation.service')}</Link> {t('home.specialties.items.service.after')}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold font-outfit mb-4">{t('home.contentSection.safetyTitle')}</h3>
                <ul className="space-y-3">
                  {t.raw('home.safety.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-muted/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold font-outfit mb-4">{t('home.serviceAreas.title')}</h3>
              <p className="text-lg text-text-700 mb-6">
                {t('home.serviceAreas.intro1')} 
                {t('home.serviceAreas.intro2')} 
                <Link href={`/${locale}/nyinstallation`} className="text-primary hover:underline font-medium mx-1">{t('navigation.newInstallation')}</Link> 
                {t('home.serviceAreas.and')} <Link href={`/${locale}/stamspolning`} className="text-primary hover:underline font-medium mx-1">{t('navigation.pipeFlushing')}</Link> 
                {t('home.serviceAreas.and2')} <Link href={`/${locale}/stamfilmning`} className="text-primary hover:underline font-medium mx-1">{t('navigation.pipeCoating')}</Link>.
              </p>
              <Button asChild size="lg">
                <Link href={`/${locale}/kontakt`}>
                  {t('home.serviceAreas.cta')}
                </Link>
              </Button>
            </div>

            {/* Why Choose Us Section - positioned right after the two columns */}
            <div className="mt-12">
              <ScrollAnimation delay={0} duration={300}>
                <h2 className="text-2xl font-bold font-outfit mb-6">
                  {t('home.whyChooseUs')}
                </h2>
              </ScrollAnimation>
              <ul className="space-y-6" role="list" aria-label="5 anledningar att välja oss">
                {t.raw('home.faq.items').map((item: { question: string; answer: string }, index: number) => (
                  <ScrollAnimation key={index} delay={index * 200} duration={300} direction="bottom">
                    <li className="flex items-start group" role="listitem">
                      <div className="flex-shrink-0 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                        <svg 
                          className="w-6 h-6 text-[#F97316]" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-text-900 text-lg" aria-label={`Punkt ${index + 1}: ${item.question}`}>
                          {item.question}
                        </span>
                        <p className="text-text-700 mt-1 leading-relaxed">{item.answer}</p>
                      </div>
                    </li>
                  </ScrollAnimation>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title={t('cta.title')}
        description={t('cta.description')}
      />
    </>
  );
}
