import { getTranslations } from 'next-intl/server';
import { generateServiceMetadata } from '@/lib/metadata';
import { generateServiceSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Wrench, Home, Settings, Shield, Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata = generateServiceMetadata({
  title: 'Nyinstallation av VVS i Stockholm – rätt från början',
  description: 'Komplett nyinstallation för entreprenad, BRF, företag och privatpersoner. Vi projekterar och installerar hela VVS-system: värme, vatten, avlopp och ventilationens VVS-del.',
  keywords: 'VVS nyinstallation Stockholm, VVS-installation, badrumsrenovering, VVS-montörer, Säker Vatten, entreprenad, BRF, företag',
  path: '/nyinstallation',
});

export default async function NewInstallationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();

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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
              {t('services.newInstallation.hero.h1')}
            </h1>
            <p className="text-xl text-text-700 mb-8 leading-relaxed">
              {t('services.newInstallation.hero.intro')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href={`/${locale}/kontakt`}>
                  {t('services.newInstallation.pageContent.buttons.getQuote')}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`/${locale}/om-oss`}>
                  {t('services.newInstallation.pageContent.buttons.learnMore')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit text-center mb-12">
              {t('services.newInstallation.pageContent.featuresTitle')}
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

      {/* Process Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit text-center mb-12">
              {t('services.newInstallation.process.title')}
            </h2>
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
        </div>
      </section>

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
                    <div key={index} className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
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
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-outfit mb-6">
              {t('services.newInstallation.pageContent.ctaTitle')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('services.newInstallation.pageContent.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href={`/${locale}/kontakt`}>
                  <Phone className="h-4 w-4 mr-2" />
                  {t('services.newInstallation.pageContent.ctaButtons.callNow')}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link href={`/${locale}/kontakt`}>
                  {t('services.newInstallation.pageContent.ctaButtons.sendMessage')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}