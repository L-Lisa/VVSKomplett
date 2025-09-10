import { getTranslations } from 'next-intl/server';
import { generateServiceMetadata } from '@/lib/metadata';
import { generateServiceSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Home, Shield, Leaf, Clock } from 'lucide-react';
import Link from 'next/link';
import { CTA } from '@/components/content/cta';
import Image from 'next/image';

export const metadata = generateServiceMetadata({
  title: 'Relining i Stockholm – renovera rören utan rivning',
  description: 'Modern relining-teknik för befintliga rör i Stockholm. Ingen rivning, minimal störning och långsiktigt hållbara lösningar. Kostnadsfri offert.',
  keywords: 'relining Stockholm, rör relining, VVS relining, rörrenovering, miljövänlig VVS',
  path: '/relining',
});

export default async function ReliningPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();

  const features = [
    {
      icon: Home,
      title: 'Ingen rivning',
      description: 'Bevarar byggnadens ursprungliga struktur'
    },
    {
      icon: Leaf,
      title: 'Miljövänlig',
      description: 'Minimal avfall och störning av omgivningen'
    },
    {
      icon: Clock,
      title: 'Snabb genomförande',
      description: 'Faster än traditionellt stambyte'
    },
    {
      icon: Shield,
      title: 'Långsiktigt hållbart',
      description: 'Håller 30-50 år som traditionella rör'
    }
  ];

  const processSteps = [
    'Kamerainspektion av befintliga rör',
    'Rengöring och förberedelse av rören',
    'Installation av nya rörliner',
    'Kvalitetskontroll och testning',
    'Dokumentation och överlämning'
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(
            'Relining Stockholm',
            'Modern relining-teknik för befintliga rör i Stockholm. Ingen rivning, minimal störning och långsiktigt hållbara lösningar.'
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
            <div className="inline-block rounded-md border border-white/60 md:border-white/40 bg-white/70 md:bg-white/40 backdrop-blur-md md:backdrop-blur-sm px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
              <h1 id="hero-title" className="text-4xl md:text-5xl font-bold font-outfit mb-4">
                {t('services.relining.hero.h1')}
              </h1>
              <p className="text-xl text-text-700 mb-8 leading-relaxed">
                {t('services.relining.hero.intro')}
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

      {/* About Our Relining Expertise */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit mb-8 text-primary text-center">
              {locale === 'en' ? 'Why relining is the future of pipe renovation' : 'Varför relining är framtiden för rörrenovering'}
            </h2>
            <div className="prose prose-lg max-w-none text-text-700 leading-relaxed text-left">
              <p className="mb-6">
                {locale === 'en'
                  ? 'Relining represents a revolution in the VVS industry – a technique that renews pipe systems without demolition or disturbing residents. With 30+ years of experience, we’ve seen how this innovation has changed the game. Every relining project is unique and demands careful planning, modern technology and a deep understanding of both technical and practical aspects.'
                  : 'Relining representerar en revolution inom VVS-branschen - en teknik som gör det möjligt att förnya rörsystem utan att riva upp byggnader eller störa boende. Med över 30 års erfarenhet har vi sett hur denna innovativa metod har förändrat spelreglerna för rörrenovering. Vi förstår att varje relining-projekt är unikt och kräver noggrann planering, modern teknik och djup förståelse för både tekniska och praktiska aspekter.'}
              </p>
              <p className="mb-6">
                {locale === 'en'
                  ? 'What makes us experts in relining is our combination of technical excellence and environmental awareness. Clients value solutions that are both cost‑effective and sustainable – and relining delivers exactly that. We optimize every step to minimize disruption, maximize durability and ensure the renewed system performs for decades. This passion for innovation and quality makes us Stockholm’s leading partner for relining.'
                  : 'Det som gör oss till experter på relining är vår kombination av teknisk expertis och miljömedvetenhet. Vi vet att kunder värdesätter lösningar som är både kostnadseffektiva och hållbara - och relining levererar precis det. När vi genomför ett relining-projekt ser vi till att varje steg optimeras för att minimera störningar, maximera hållbarhet och säkerställa att det nya systemet fungerar perfekt i decennier framöver. Det är denna passion för innovation och kvalitet som gör oss till Stockholms ledande partner för relining.'}
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
              Våra relining-tjänster
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
              {t('services.relining.process.title')}
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
                      alt={t('services.relining.process.imageAlt')}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                      className="object-contain md:rotate-90"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
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
                  Varför välja relining?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Bevarar historiska byggnader</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Minimal störning för boende</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Miljövänlig metod</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Långsiktigt hållbart resultat</span>
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
                      <Link href={`/${locale}/stambyte`} className="text-primary hover:underline">
                        Stambyte
                      </Link>
                    </h4>
                    <p className="text-text-700 text-sm">
                      Traditionell metod för komplett byte av rör
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
                    <h4 className="font-semibold mb-2">
                      <Link href={`/${locale}/stamfilmning`} className="text-primary hover:underline">
                        Stamfilmning
                      </Link>
                    </h4>
                    <p className="text-text-700 text-sm">
                      Kamerainspektion för att bedöma rörenas tillstånd
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
                    <h4 className="font-semibold mb-2">
                      <Link href={`/${locale}/stamspolning`} className="text-primary hover:underline">
                        Stamspolning
                      </Link>
                    </h4>
                    <p className="text-text-700 text-sm">
                      Rengöring innan relining för bästa resultat
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
        title={t('ctaPages.relining.title')}
        description={t('ctaPages.relining.description')}
        orangeHeading
        showCorners
      />
    </>
  );
}