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
  Phone,
  Clock,
} from 'lucide-react';
import { Hero } from '@/components/content/hero';
import { Features3 } from '@/components/content/features3';
import { Testimonials3 } from '@/components/content/testimonials3';
import { CTA } from '@/components/content/cta';
import { generatePageMetadata } from '@/lib/metadata';
import { generateLocalBusinessSchema } from '@/lib/schemas';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'VVS i Stockholm – trygga lösningar för hem & fastighet',
  description: 'Professionella VVS-tjänster i Stockholm. Nyinstallation, stambyte, relining och service av certifierade montörer. Säker Vatten, försäkrade arbeten och garanti.',
  keywords: 'VVS Stockholm, VVS-installation, stambyte, relining, VVS-service, rörmokare Stockholm, VVS-montörer, VVS-renovering',
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

  const features = [
    {
      icon: Shield,
      title: t('home.features.sakerVatten.title'),
      description: t('home.features.sakerVatten.description'),
      href: '/om-oss'
    },
    {
      icon: Wrench,
      title: t('home.features.expertis.title'),
      description: t('home.features.expertis.description'),
      href: '/om-oss'
    },
    {
      icon: Settings,
      title: t('home.features.service.title'),
      description: t('home.features.service.description'),
      href: '/kontakt'
    }
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-center mb-12">
            {t('home.whyChooseUs')}
          </h2>
          <Features3 features={features} />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-center mb-12">
            {t('home.servicesTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.key}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl font-outfit">
                      {t(`services.${service.key}.title`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {t(`services.${service.key}.description`)}
                    </CardDescription>
                    <Button className="w-full mt-4" variant="outline">
                      {t('home.readMore')}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-center mb-12">
            {t('home.testimonialsTitle')}
          </h2>
          <Testimonials3 testimonials={testimonials} />
        </div>
      </section>

      {/* Content Section with Internal Linking */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-center mb-8">
              {t('home.contentSection.mainTitle')}
            </h2>
            
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
                <h3 className="text-2xl font-bold font-outfit mb-4">{t('home.whyChooseUs')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t('home.usp.safeWater')}</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t('home.usp.emergency')}</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t('home.usp.experience')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t('home.usp.insured')}</span>
                  </li>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title={t('cta.title')}
        description={t('cta.description')}
        phoneNumbers={t.raw('cta.phoneNumbers')}
        contactHref="/kontakt"
      />
    </>
  );
}
