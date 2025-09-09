import { getTranslations } from 'next-intl/server';
import { generateServiceMetadata } from '@/lib/metadata';
import { generateServiceSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Wrench, Settings, Shield, Phone, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata = generateServiceMetadata({
  title: 'Stambyte i flerbostadshus – effektivt och säkert',
  description: 'Professionellt stambyte i Stockholm med minimal störning för boende. Certifierade montörer, modern rörteknik och full garanti. Kostnadsfri offert.',
  keywords: 'stambyte Stockholm, rörbyte flerbostadshus, VVS stambyte, rörmokare Stockholm, bostadsrättsförening',
  path: '/stambyte',
});

export default async function PipeReplacementPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();

  const features = [
    {
      icon: Users,
      title: 'Minimal störning',
      description: 'Planerad genomförande med minimal påverkan på boende'
    },
    {
      icon: Wrench,
      title: 'Modern rörteknik',
      description: 'Hållbara lösningar för långsiktig funktionalitet'
    },
    {
      icon: Settings,
      title: 'Samordning',
      description: 'Täta samarbeten med fastighetsförvaltning'
    },
    {
      icon: Shield,
      title: 'Försäkrade arbeten',
      description: 'Full garanti och försäkring på alla arbeten'
    }
  ];

  const processSteps = [
    'Grundlig besiktning av befintliga rör',
    'Planering och koordinering med fastighetsförvaltning',
    'Information till boende om arbetet',
    'Professionell genomförande med minimal störning',
    'Testning och överlämning med dokumentation'
  ];

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
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
              {t('services.pipeReplacement.hero.h1')}
            </h1>
            <p className="text-xl text-text-700 mb-8 leading-relaxed">
              {t('services.pipeReplacement.hero.intro')}
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
              Våra stambyte-tjänster
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
              {t('services.pipeReplacement.process.title')}
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
                  Varför välja oss för stambyte?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Erfarenhet av stambyte i flerbostadshus</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Samarbete med fastighetsförvaltning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Minimal störning för boende</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Modern rörteknik för långsiktig hållbarhet</span>
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
                      <Link href={`/${locale}/relining`} className="text-primary hover:underline">
                        Relining
                      </Link>
                    </h4>
                    <p className="text-text-700 text-sm">
                      Alternativ till stambyte - förnya rör utan rivning
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
                    <h4 className="font-semibold mb-2">
                      <Link href={`/${locale}/stamspolning`} className="text-primary hover:underline">
                        Stamspolning
                      </Link>
                    </h4>
                    <p className="text-text-700 text-sm">
                      Rengöring av befintliga rör innan byte
                    </p>
                  </div>
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
              Behöver ni stambyte i er fastighet?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontakta oss för en kostnadsfri besiktning och offert
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