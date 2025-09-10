import { getTranslations } from 'next-intl/server';
import { generateServiceMetadata } from '@/lib/metadata';
import { generateServiceSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Wrench, Droplets, Shield, Camera } from 'lucide-react';
import Link from 'next/link';
import { CTA } from '@/components/content/cta';

export const metadata = generateServiceMetadata({
  title: 'Stamspolning & fräsning – förebygg stopp och vattenskador',
  description: 'Professionell stamspolning och fräsning i Stockholm. Högtrycksspolning, kamerainspektion och förebyggande underhåll. Kostnadsfri offert.',
  keywords: 'stamspolning Stockholm, rörspolning, VVS rengöring, rörfräsning, VVS underhåll',
  path: '/stamspolning',
});

export default async function PipeFlushingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();

  const features = [
    {
      icon: Droplets,
      title: 'Högtrycksspolning',
      description: 'Djuprengöring med specialiserad utrustning'
    },
    {
      icon: Wrench,
      title: 'Fräsning',
      description: 'Borttagning av hårdnade avlagringar'
    },
    {
      icon: Camera,
      title: 'Kamerainspektion',
      description: 'Kontroll före och efter arbetet'
    },
    {
      icon: Shield,
      title: 'Miljövänliga medel',
      description: 'Säkra rengöringsmedel för miljön'
    }
  ];

  const processSteps = [
    'Kamerainspektion för att kartlägga problem',
    'Högtrycksspolning med specialiserad utrustning',
    'Fräsning av hårdnade avlagringar',
    'Rengöring med miljövänliga medel',
    'Kvalitetskontroll och dokumentation'
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(
            'Stamspolning Stockholm',
            'Professionell stamspolning och fräsning i Stockholm. Högtrycksspolning, kamerainspektion och förebyggande underhåll.'
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
            <div className="inline-block rounded-md bg-white/60 backdrop-blur-sm px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
              <h1 id="hero-title" className="text-4xl md:text-5xl font-bold font-outfit mb-4">
                {t('services.pipeFlushing.hero.h1')}
              </h1>
              <p className="text-xl text-text-700 mb-8 leading-relaxed">
                {t('services.pipeFlushing.hero.intro')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href={`/${locale}/kontakt`}>
                    Få kostnadsfri offert
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/${locale}/om-oss`}>
                    Läs mer om oss
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Stamspolning Expertise */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit mb-8 text-primary text-center">
              {locale === 'en' ? 'Why pipe flushing is critical for reliability' : 'Varför stamspolning är avgörande för driftsäkerhet'}
            </h2>
            <div className="prose prose-lg max-w-none text-text-700 leading-relaxed text-left">
              <p className="mb-6">
                {locale === 'en'
                  ? 'Pipe flushing is one of the most effective measures to prevent blockages, water damage and unnecessary downtime. With over 30 years of experience, we know that the right method, pressure and timing make all the difference. We combine high‑pressure flushing, milling and camera inspection to ensure the system performs as it should – without surprises.'
                  : 'Stamspolning är en av de mest effektiva åtgärderna för att förebygga stopp, vattenskador och onödiga driftstörningar. Med över 30 års erfarenhet har vi lärt oss att rätt metod, rätt tryck och rätt timing gör hela skillnaden. Vi kombinerar högtrycksspolning, fräsning och kamerainspektion för att säkerställa att systemet fungerar som det ska – utan överraskningar.'}
              </p>
              <p className="mb-6">
                {locale === 'en'
                  ? 'What sets us apart is our structured process and focus on resident safety. We plan communication, coordinate with property management and work efficiently to minimize impact on the building. The result: clean stacks, fewer emergency call‑outs and documented actions that strengthen the property’s long‑term value. That’s why we’re Stockholm’s preferred partner for pipe flushing.'
                  : 'Det som särskiljer oss är vår strukturerade arbetsprocess och vårt fokus på trygghet för de boende. Vi planerar kommunikationen, koordinerar med fastighetsförvaltning och arbetar effektivt för att minimera påverkan i fastigheten. Resultatet är rena stammar, färre akuta insatser och en dokumenterad åtgärd som stärker fastighetens långsiktiga värde. Det är därför vi är Stockholms föredragna partner för stamspolning.'}
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
              Våra stamspolnings-tjänster
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
              {t('services.pipeFlushing.process.title')}
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
                  Varför regelbunden stamspolning?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Förebygger stopp och vattenskador</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Förbättrar vattenkvaliteten</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Förlänger rörens livslängd</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Sparar pengar på reparationer</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold font-outfit mb-6">
                  Relaterade tjänster
                </h3>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
                    <h4 className="font-semibold mb-2">
                      <Link href={`/${locale}/stamfilmning`} className="text-primary hover:underline">
                        Stamfilmning
                      </Link>
                    </h4>
                    <p className="text-text-700 text-sm">
                      Kamerainspektion för att kartlägga rörenas tillstånd
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
                    <h4 className="font-semibold mb-2">
                      <Link href={`/${locale}/service`} className="text-primary hover:underline">
                        VVS-service
                      </Link>
                    </h4>
                    <p className="text-text-700 text-sm">
                      Regelbunden service och underhåll
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
                    <h4 className="font-semibold mb-2">
                      <Link href={`/${locale}/relining`} className="text-primary hover:underline">
                        Relining
                      </Link>
                    </h4>
                    <p className="text-text-700 text-sm">
                      Förnyelse av rör efter rengöring
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
        title={t('ctaPages.pipeFlushing.title')}
        description={t('ctaPages.pipeFlushing.description')}
        orangeHeading
        showCorners
      />
    </>
  );
}