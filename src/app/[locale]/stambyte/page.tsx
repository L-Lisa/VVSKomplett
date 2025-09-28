import { getTranslations } from 'next-intl/server';
import { generateServiceMetadata } from '@/lib/metadata';
import { generateServiceSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Wrench, Settings, Shield, Users } from 'lucide-react';
import Link from 'next/link';
import { CTA } from '@/components/content/cta';
import { WorkflowSection } from '@/components/content/workflow-section';

export const metadata = generateServiceMetadata({
  title: 'Stambyte i flerbostadshus – effektivt och säkert',
  description: 'Professionellt stambyte i Stockholm med minimal störning för boende. Certifierade montörer, modern rörteknik och full garanti. Kostnadsfri offert.',
  keywords: 'stambyte Stockholm, rörbyte flerbostadshus, VVS stambyte, rörmokare Stockholm, bostadsrättsförening',
  path: '/stambyte',
});

export default async function PipeReplacementPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const features = [
    {
      icon: Users,
      title: t('services.pipeReplacement.features.minimalDisruption.title'),
      description: t('services.pipeReplacement.features.minimalDisruption.description')
    },
    {
      icon: Wrench,
      title: t('services.pipeReplacement.features.modernTechnology.title'),
      description: t('services.pipeReplacement.features.modernTechnology.description')
    },
    {
      icon: Settings,
      title: t('services.pipeReplacement.features.coordination.title'),
      description: t('services.pipeReplacement.features.coordination.description')
    },
    {
      icon: Shield,
      title: t('services.pipeReplacement.features.insuredWork.title'),
      description: t('services.pipeReplacement.features.insuredWork.description')
    }
  ];

  const processSteps = t.raw('services.pipeReplacement.process.steps');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(
            'Stambyte Stockholm',
            'Professionellt stambyte i Stockholm med minimal störning för boende. Certifierade montörer, modern rörteknik och full garanti.'
          )),
        }}
      />

      {/* Hero Section */}
      <section
        className="relative py-20"
        role="region"
        aria-labelledby="hero-title"
        style={{
          backgroundImage: "url('/lagenheter.webp')",
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
                {t('services.pipeReplacement.hero.h1')}
              </h1>
              <p className="text-xl text-text-700 mb-8 leading-relaxed">
                {t('services.pipeReplacement.hero.intro')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link href={`/${locale}/kontakt`}>
                    {t('hero.getQuote')}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/${locale}/om-oss`}>
                    {t('hero.readMoreAboutUs')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Stambyte Expertise */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit mb-8 text-primary text-center">
              {locale === 'en'
                ? 'Why we are experts in pipe replacement for apartment buildings'
                : 'Varför vi är experter på stambyte i flerbostadshus'}
            </h2>
            <div className="prose prose-lg max-w-none text-text-700 leading-relaxed text-left">
              <p className="mb-6">
                {locale === 'en'
                  ? 'Pipe replacement in apartment buildings requires more than technical skill – it demands a deep understanding of people, process and complex coordination. With 30+ years of experience, we know successful projects rest on three pillars: minimal disruption for residents, smooth coordination with property management and work performed according to Säker Vatten standards. Every detail matters – from the first planning meeting to the moment the new system goes live.'
                  : 'Stambyte i flerbostadshus kräver mer än teknisk expertis - det kräver en djup förståelse för människor, processer och komplexa samordningskrav. Med över 30 års erfarenhet har vi lärt oss att framgångsrika stambyte-projekt bygger på tre pelare: minimal störning för boende, smidig samordning med fastighetsförvaltning, och arbeten enligt Säker Vatten-standarder. Vi vet att varje detalj räknas, från första planeringsmötet till det ögonblick när det nya systemet tas i drift.'}
              </p>
              <p className="mb-6">
                {locale === 'en'
                  ? 'What sets us apart is our ability to see the whole picture. Pipe replacement is about transforming older buildings into modern, reliable homes with improved water quality and safety. We stay engaged end‑to‑end – from needs analysis and stakeholder coordination to careful execution that allows residents to live as normally as possible. When large projects demand speed, we mobilize our entire team to deliver efficiently. This blend of technical expertise, human understanding and operational capacity makes us Stockholm’s leading partner for pipe replacement.'
                  : 'Det som särskiljer oss är vår förmåga att se helheten - vi förstår att stambyte handlar om att förvandla äldre fastigheter till moderna, funktionella hem med förbättrad vattenkvalitet och trygghet. Vi värdesätter att vara med genom hela processen: från analys av fastighetens behov och samordning med alla parter, till den noggranna genomförandet som säkerställer att boende kan leva normalt under arbetet. När stora projekt kräver snabb genomförande mobiliserar vi hela vårt team för att säkerställa att arbetet utförs så effektivt som möjligt. Det är denna kombination av teknisk expertis, mänsklig förståelse och operativ kapacitet som gör oss till Stockholms ledande partner för stambyte.'}
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
              Våra stambyte-tjänster
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


      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold font-outfit mb-6">
                  {t('services.pipeReplacement.whyChooseUs.title')}
                </h3>
                <ul className="space-y-4">
                  {t.raw('services.pipeReplacement.whyChooseUs.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold font-outfit mb-6">
                  {t('services.pipeReplacement.relatedServices.title')}
                </h3>
                <div className="space-y-4">
                  {t.raw('services.pipeReplacement.relatedServices.services').map((service: { title: string; description: string }, index: number) => (
                    <div key={index} className="p-4 border hover:border-primary/50 transition-colors">
                      <h4 className="font-semibold mb-2">
                        <Link href={`/${locale}/${service.title === 'Relining' ? 'relining' : service.title === 'Stamspolning' ? 'stamspolning' : 'stamfilmning'}`} className="text-primary hover:underline">
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
        title={t('ctaPages.pipeReplacement.title')}
        description={t('ctaPages.pipeReplacement.description')}
        orangeHeading
        showCorners
      />
    </>
  );
}