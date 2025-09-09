import { getTranslations } from 'next-intl/server';
import { generateServiceMetadata } from '@/lib/metadata';
import { generateServiceSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Camera, Video, Settings, Phone, FileText } from 'lucide-react';
import Link from 'next/link';

export const metadata = generateServiceMetadata({
  title: 'Stamfilmning med kamera – få full koll på rören',
  description: 'Professionell stamfilmning med kamera i Stockholm. Högupplöst inspektion, dokumentation och förebyggande underhåll. Kostnadsfri offert.',
  keywords: 'stamfilmning Stockholm, kamerainspektion rör, VVS diagnostik, rörinspektion, VVS kamera',
  path: '/stamfilmning',
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
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
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
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
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

      {/* Process Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit text-center mb-12">
              {t('services.pipeCoating.process.title')}
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
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-outfit mb-6">
              Behöver ni kamerainspektion?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontakta oss för professionell stamfilmning och diagnostik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href={`/${locale}/kontakt`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Ring oss nu
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link href={`/${locale}/kontakt`}>
                  Skicka meddelande
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}