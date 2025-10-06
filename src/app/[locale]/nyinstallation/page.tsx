import { getTranslations } from 'next-intl/server';
import { generateServiceMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { ContactDialogButton } from '@/components/ui/contact-dialog-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Wrench, Home, Settings, Shield } from 'lucide-react';
import Link from 'next/link';
import { CTA } from '@/components/content/cta';
import { WorkflowSection } from '@/components/content/workflow-section';
import { Breadcrumb } from '@/components/ui/breadcrumb';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.newInstallation' });
  return generateServiceMetadata({
    title: t('title'),
    description: t('description'),
    keywords: locale === 'en'
      ? 'VVS new installation Stockholm, plumbing installation, bathroom renovation, plumbers, Safe Water, contractors, BRF, business'
      : 'VVS nyinstallation Stockholm, VVS-installation, badrumsrenovering, VVS-montörer, Säker Vatten, entreprenad, BRF, företag',
    path: '/nyinstallation',
  });
}

export default async function NewInstallationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const features = [
    {
      icon: Wrench,
      title: t('services.newInstallation.pageContent.features.0.title'),
      description: t('services.newInstallation.pageContent.features.0.description')
    },
    {
      icon: Home,
      title: t('services.newInstallation.pageContent.features.1.title'),
      description: t('services.newInstallation.pageContent.features.1.description')
    },
    {
      icon: Settings,
      title: t('services.newInstallation.pageContent.features.2.title'),
      description: t('services.newInstallation.pageContent.features.2.description')
    },
    {
      icon: Shield,
      title: t('services.newInstallation.pageContent.features.3.title'),
      description: t('services.newInstallation.pageContent.features.3.description')
    }
  ];

  const processSteps = [
    t('services.newInstallation.process.steps.0'),
    t('services.newInstallation.process.steps.1'),
    t('services.newInstallation.process.steps.2'),
    t('services.newInstallation.process.steps.3'),
    t('services.newInstallation.process.steps.4')
  ];

  // Breadcrumb data
  const breadcrumbItems = [
    { label: t('navigation.newInstallation'), href: `/${locale}/nyinstallation` }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(
            'VVS Nyinstallation Stockholm',
            'Professionell installation av nya VVS-system i Stockholm. Certifierade montörer, Säker Vatten-standarder och full garanti.'
          )),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(
            breadcrumbItems.map(item => ({ name: item.label, url: item.href || '' }))
          )),
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="relative py-20"
        role="region"
        aria-labelledby="hero-title"
        style={{
          backgroundImage: "url('/design.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <span aria-hidden="true" className="absolute inset-0 bg-white/10"></span>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block border border-white/60 md:border-white/40 bg-white/85 md:bg-white/70 backdrop-blur-md md:backdrop-blur-sm px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
              <h1 id="hero-title" className="text-4xl md:text-5xl font-bold font-outfit mb-4">
                {t('services.newInstallation.hero.h1')}
              </h1>
              <p className="text-xl text-text-700 mb-8 leading-relaxed">
                {t('services.newInstallation.hero.intro')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ContactDialogButton label={t('services.newInstallation.pageContent.buttons.getQuote')} />
                <Button asChild variant="outline" size="lg">
                  <Link href={`/${locale}/om-oss`}>
                    {t('services.newInstallation.pageContent.buttons.learnMore')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Nyinstallation Expertise */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit mb-8 text-primary text-center">
              {locale === 'en'
                ? 'Why we are experts in new VVS installations'
                : 'Varför vi är experter på VVS-nyinstallationer'}
            </h2>
            <div className="prose prose-lg max-w-none text-text-700 leading-relaxed text-left">
              <p className="mb-6">
                {locale === 'en'
                  ? 'With over 30 years of industry experience, we have developed a unique expertise in new VVS installations that puts us in a class of our own. We see every installation as a long-term investment – that’s why we follow Säker Vatten standards and use only high‑quality materials to ensure long-lasting reliability. For us, it’s essential to get it right from the start.'
                  : 'Med över 30 års erfarenhet inom VVS-branschen har vi utvecklat en unik expertis inom nyinstallationer som sätter oss i en klass för oss. Vi förstår att varje nyinstallation är en investering i framtiden - därför arbetar vi enligt Säker Vatten-standarder och använder endast högkvalitativa material som garanterar långsiktig funktionalitet. För oss är det viktigt att det blir rätt gjort från början.'}
              </p>
              <p className="mb-6">
                {locale === 'en'
                  ? 'Our strength lies in seeing the whole picture from day one. We don’t just design the VVS system – we consider how it integrates with the building’s overall functionality, future maintenance needs and energy use. From the first drawing to the finished system, we execute with precision and document every step for your peace of mind.'
                  : 'Vår styrka ligger i att vi har en bred kompetens och erfarenhet för att kunna se helheten från dag ett. Vi projekterar inte bara VVS-systemet, vi tänker på hur det integreras med byggnadens totala funktionalitet, framtida underhållsbehov och energiförbrukning. Från första skissen till färdig installation följer vi varje steg med precision och dokumenterar allt för din trygghet.'}
              </p>
              <p>
                {locale === 'en'
                  ? 'What truly drives us is seeing new projects grow from concept to completion. We value being there from the first conversation about your vision, through the engineering phase where everything takes shape, to the crucial moment when the system goes live and works flawlessly. This passion for end‑to‑end delivery is why we are Stockholm’s trusted VVS partner for new installations.'
                  : 'Det som verkligen driver oss framåt är glädjen att se nya projekt växa från idé till färdig installation. Vi värdesätter att vara med från det första mötet där vi diskuterar dina visioner, genom projekteringsfasen där allt tar form, till det avgörande ögonblicket när systemet tas i drift och fungerar perfekt. Det är denna passion för helhetslösningar som gör oss till Stockholms ledande VVS-partner för nyinstallationer.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto lg:max-w-6xl">
            <h2 className="text-3xl font-bold font-outfit text-center mb-12">
              {t('services.newInstallation.pageContent.featuresTitle')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
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
      <WorkflowSection
        title={t('services.newInstallation.process.title')}
        steps={processSteps}
        imageSrc="/komplettvvs-vaxlare.webp"
        imageAlt={t('services.newInstallation.process.imageAlt')}
        backgroundGradient="bg-gradient-to-br from-[#1f398a]/20 via-gray-50/50 to-[#F97316]/15"
        showGrid={true}
      />


      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold font-outfit mb-6">
                  {t('services.newInstallation.pageContent.whyChooseUsTitle')}
                </h3>
                <ul className="space-y-4">
                  {[
                    t('services.newInstallation.pageContent.whyChooseUs.0'),
                    t('services.newInstallation.pageContent.whyChooseUs.1'),
                    t('services.newInstallation.pageContent.whyChooseUs.2'),
                    t('services.newInstallation.pageContent.whyChooseUs.3')
                  ].map((reason: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold font-outfit mb-6">
                  {t('services.newInstallation.pageContent.relatedServicesTitle')}
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: t('services.newInstallation.pageContent.relatedServices.0.title'),
                      description: t('services.newInstallation.pageContent.relatedServices.0.description'),
                      href: '/service'
                    },
                    {
                      title: t('services.newInstallation.pageContent.relatedServices.1.title'),
                      description: t('services.newInstallation.pageContent.relatedServices.1.description'),
                      href: '/stambyte'
                    },
                    {
                      title: t('services.newInstallation.pageContent.relatedServices.2.title'),
                      description: t('services.newInstallation.pageContent.relatedServices.2.description'),
                      href: '/relining'
                    }
                  ].map((service, index) => (
                    <div key={index} className="p-4 border hover:border-primary/50 transition-colors">
                      <h4 className="font-semibold mb-2">
                        <Link href={`/${locale}${service.href}`} className="text-primary hover:underline">
                          {service.title}
                        </Link>
                      </h4>
                      <p className="text-text-700 text-sm">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title={t('ctaPages.newInstallation.title')}
        description={t('ctaPages.newInstallation.description')}
        orangeHeading
        showCorners
      />
    </>
  );
}