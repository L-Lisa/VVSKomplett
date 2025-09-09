import { getTranslations } from 'next-intl/server';
import { generateServiceMetadata } from '@/lib/metadata';
import { generateServiceSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Settings, Shield, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';

export const metadata = generateServiceMetadata({
  title: 'VVS-service & underhåll – när du behöver det',
  description: 'Professionell VVS-service och underhåll i Stockholm. Förebyggande underhåll, akutservice dygnet runt och serviceavtal. Kostnadsfri offert.',
  keywords: 'VVS service Stockholm, VVS underhåll, akutservice VVS, VVS serviceavtal, rörmokare Stockholm',
  path: '/service',
});

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
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
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

      {/* Process Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit text-center mb-12">
              {t('services.service.process.title')}
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
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-outfit mb-6">
              {t('services.service.pageContent.ctaTitle')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('services.service.pageContent.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href={`/${locale}/kontakt`}>
                  <Phone className="h-4 w-4 mr-2" />
                  {t('services.service.pageContent.ctaButtons.callNow')}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link href={`/${locale}/kontakt`}>
                  {t('services.service.pageContent.ctaButtons.sendMessage')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}