import React from 'react';
import { getTranslations } from 'next-intl/server';
import { generateServiceMetadata } from '@/lib/metadata';
import { generateServiceSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { ContactDialogButton } from '@/components/ui/contact-dialog-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Camera, Video, Settings, FileText } from 'lucide-react';
import Link from 'next/link';
import { CTA } from '@/components/content/cta';
import { WorkflowSection } from '@/components/content/workflow-section';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.pipeCoating' });
  return generateServiceMetadata({
    title: t('title'),
    description: t('description'),
    keywords: locale === 'en'
      ? 'pipe inspection Stockholm, camera inspection, plumbing diagnostics, pipe inspection, camera'
      : 'stamfilmning Stockholm, kamerainspektion rör, VVS diagnostik, rörinspektion, VVS kamera',
    path: '/stamfilmning',
  });
}

export default async function PipeCoatingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const features = t.raw('services.pipeCoating.features').map((feature: { title: string; description: string }, index: number) => ({
    icon: [Camera, Video, Settings, FileText][index],
    title: feature.title,
    description: feature.description
  }));

  type Feature = {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  };

  const processSteps = t.raw('services.pipeCoating.process.steps');


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(
            'Stamfilmning Stockholm',
            'Professionell stamfilmning med kamera i Stockholm. Högupplöst inspektion, dokumentation och förebyggande underhåll.'
          )),
        }}
      />

      {/* Hero Section */}
      <section
        className="relative py-20"
        role="region"
        aria-labelledby="hero-title"
        style={{
          backgroundImage: "url('/vvsfilmning.webp')",
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
                {t('services.pipeCoating.hero.h1')}
              </h1>
              <p className="text-xl text-text-700 mb-8 leading-relaxed">
                {t('services.pipeCoating.hero.intro')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ContactDialogButton label={t('hero.getQuote')} />
                <Button asChild variant="outline" size="lg">
                  <Link href={`/${locale}/om-oss`}>{t('hero.readMoreAboutUs')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Stamfilmning Expertise */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit mb-8 text-primary text-center">
              {locale === 'en' ? 'Why pipe inspection is the foundation of smart maintenance' : 'Varför stamfilmning är grunden för smart underhåll'}
            </h2>
            <div className="prose prose-lg max-w-none text-text-700 leading-relaxed text-left">
              <p className="mb-6">
                {locale === 'en'
                  ? 'Camera inspection gives us the complete picture needed to make the right decisions at the right time. With high‑resolution cameras and structured documentation, we identify cracks, deposits and risk zones before issues become acute. That means fewer disruptions, more precise actions and a lower total cost over time.'
                  : 'Stamfilmning ger oss den helhetsbild som krävs för att fatta rätt beslut i rätt tid. Med högupplösta kameror och strukturerad dokumentation kan vi identifiera sprickor, beläggningar och riskzoner innan problemen blir akuta. Det betyder färre driftstopp, mer träffsäkra åtgärder och lägre totalkostnad över tid.'}
              </p>
              <p className="mb-6">
                {locale === 'en'
                  ? 'What sets us apart is our blend of technology and process. We don’t just record – we analyze, recommend and follow up. Our documentation is clear, recommendations are prioritized and communication with management and residents is thoughtful. The result is a safe, data‑driven plan for maintenance and investment. That’s why we are Stockholm’s preferred partner for pipe inspection.'
                  : 'Det som särskiljer oss är vår kombination av teknik och process. Vi filmar inte bara – vi analyserar, rekommenderar och följer upp. Vår dokumentation är tydlig, åtgärdsförslagen är prioriterade och kommunikationen med förvaltning och boende är genomtänkt. Resultatet är en trygg plan för underhåll och investeringar, baserad på fakta från din fastighet. Det är därför vi är Stockholms föredragna partner för stamfilmning.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit text-center mb-12">
              {t('services.pipeCoating.featuresTitle')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature: Feature, index: number) => (
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
        title={t('services.pipeCoating.process.title')}
        steps={processSteps}
        imageSrc="/industrialpipe.webp"
        imageAlt={t('services.pipeCoating.process.imageAlt')}
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
                  {t('services.pipeCoating.whyTitle')}
                </h3>
                <ul className="space-y-4">
                  {t.raw('services.pipeCoating.whyItems').map((reason: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold font-outfit mb-6">
                  {t('services.pipeCoating.relatedTitle')}
                </h3>
                <div className="space-y-4">
                  {t.raw('services.pipeCoating.relatedServices').map((svc: { title: string; description: string }, idx: number) => (
                    <div key={idx} className="p-4 border hover:border-primary/50 transition-colors">
                      <h4 className="font-semibold mb-2">
                        <Link
                          href={`/${locale}${['/stamspolning','/relining','/service'][idx]}`}
                          className="text-primary hover:underline"
                        >
                          {svc.title}
                        </Link>
                      </h4>
                      <p className="text-text-700 text-sm">
                        {svc.description}
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
        title={t('ctaPages.pipeCoating.title')}
        description={t('ctaPages.pipeCoating.description')}
        orangeHeading
        showCorners
      />
    </>
  );
}