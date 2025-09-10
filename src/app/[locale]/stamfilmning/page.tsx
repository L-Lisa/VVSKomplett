import { getTranslations } from 'next-intl/server';
import { generateServiceMetadata } from '@/lib/metadata';
import { generateServiceSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Camera, Video, Settings, FileText } from 'lucide-react';
import Link from 'next/link';
import { CTA } from '@/components/content/cta';
import Image from 'next/image';
import fs from 'node:fs';
import path from 'node:path';

export const metadata = generateServiceMetadata({
  title: 'Stamfilmning med kamera – få full koll på rören',
  description: 'Professionell stamfilmning med kamera i Stockholm. Högupplöst inspektion, dokumentation och förebyggande underhåll. Kostnadsfri offert.',
  keywords: 'stamfilmning Stockholm, kamerainspektion rör, VVS diagnostik, rörinspektion, VVS kamera',
  path: '/pipeinspection',
});

export default async function PipeCoatingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();

  const features = [
    {
      icon: Camera,
      title: 'Högupplöst inspektion',
      description: 'Tydlig bild av rörenas inre tillstånd'
    },
    {
      icon: Video,
      title: 'Dokumentation',
      description: 'Bilder och video för fullständig rapport'
    },
    {
      icon: Settings,
      title: 'Förebyggande underhåll',
      description: 'Identifiering av problem innan de blir allvarliga'
    },
    {
      icon: FileText,
      title: 'Detaljerad rapport',
      description: 'Tydliga rekommendationer och åtgärdsförslag'
    }
  ];

  const processSteps = [
    'Förberedelse och säkerhetskontroll',
    'Kamerainspektion av hela rörsystemet',
    'Identifiering och dokumentation av problem',
    'Analys och rekommendationer',
    'Rapport med bilder och åtgärdsförslag'
  ];

  // Lightweight shimmer placeholder for blurDataURL
  const shimmer = (w: number, h: number) =>
    `data:image/svg+xml;base64,${Buffer.from(
      `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><defs><linearGradient id="g"><stop stop-color="#f6f7f8" offset="20%"/><stop stop-color="#edeef1" offset="50%"/><stop stop-color="#f6f7f8" offset="70%"/></linearGradient></defs><rect width="${w}" height="${h}" fill="#f6f7f8"/><rect id="r" width="${w}" height="${h}" fill="url(#g)"/><animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  /></svg>`
    ).toString('base64')}`;

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
                {t('services.pipeCoating.hero.h1')}
              </h1>
              <p className="text-xl text-text-700 mb-8 leading-relaxed">
                {t('services.pipeCoating.hero.intro')}
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
              Våra stamfilmnings-tjänster
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
              {t('services.pipeCoating.process.title')}
            </h2>
            <div className="grid md:[grid-template-columns:auto_auto] justify-center gap-6 items-stretch">
              {/* Steps (left on desktop, top on mobile) */}
              <div className="md:pr-2">
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

              {/* Image (right on desktop, below on mobile) */}
              <div className="w-full">
                {(() => {
                  const rel = '/placeholdertool.webp';
                  const absolute = path.join(process.cwd(), 'public', rel);
                  const exists = fs.existsSync(absolute);
                  if (!exists) {
                    return (
                      <div className="rounded-lg h-64 md:h-80 flex items-center justify-center text-text-600">
                        <span className="text-sm">Bild kommer här</span>
                      </div>
                    );
                  }
                  return (
                    <div className="h-64 md:h-full flex items-center">
                      <div className="relative w-full md:w-[460px] h-full rounded-lg overflow-hidden">
                        <Image
                          src={rel}
                          alt={t('services.pipeCoating.process.imageAlt')}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                          className="object-contain md:rotate-90"
                          placeholder="blur"
                          blurDataURL={shimmer(1200, 900)}
                          loading="lazy"
                          fetchPriority="low"
                          decoding="async"
                        />
                      </div>
                    </div>
                  );
                })()}
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
                  Varför stamfilmning?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Identifierar problem innan de blir allvarliga</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Förebyggande underhåll</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Dokumentation för försäkringar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Kostnadseffektiv diagnostik</span>
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
                      <Link href={`/${locale}/stamspolning`} className="text-primary hover:underline">
                        Stamspolning
                      </Link>
                    </h4>
                    <p className="text-text-700 text-sm">
                      Rengöring baserat på kamerainspektion
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
                    <h4 className="font-semibold mb-2">
                      <Link href={`/${locale}/relining`} className="text-primary hover:underline">
                        Relining
                      </Link>
                    </h4>
                    <p className="text-text-700 text-sm">
                      Förnyelse av rör efter inspektion
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