import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { generateJobPostingSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { CheckIcon } from '@/components/ui/check-icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Briefcase, Award, Wrench } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return generatePageMetadata({
    title: t('careers.title'),
    description: t('careers.description'),
    path: '/jobba-hos-oss',
  });
}

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateJobPostingSchema()),
        }}
      />
      {/* Hero Section */}
      <section className="text-white py-20 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/komplettvvs-background-team.webp"
            alt="Komplett VVS team working on plumbing installation in modern office environment"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1f398a]/40 to-[#1f398a]/30 z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-6 text-[#F97316]">
              {t('careers.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              {t('careers.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <a href="#ansokan">
                  {t('careers.hero.cta')}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-[#1f398a] bg-white hover:bg-[#F97316] hover:text-white hover:border-[#F97316]">
                <Link href={`/${locale}/om-oss`}>
                  {t('careers.hero.learnMore')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-gradient-to-br from-[#1f398a]/20 via-gray-50/50 to-[#F97316]/15 relative">
        {/* Industrial grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(31, 57, 138, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(31, 57, 138, 0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                {t('careers.intro.paragraph1')}
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                {t('careers.intro.paragraph2')}
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                {t('careers.intro.paragraph3')}
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                {t('careers.intro.paragraph4')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit text-center mb-12 text-[#1f398a]">
              {t('careers.offer.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-[#F97316] flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{t('careers.offer.employment.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{t('careers.offer.employment.description')}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-[#F97316] flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{t('careers.offer.environment.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{t('careers.offer.environment.description')}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-[#F97316] flex items-center justify-center mx-auto mb-4">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{t('careers.offer.projects.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{t('careers.offer.projects.description')}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-[#F97316] flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{t('careers.offer.team.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{t('careers.offer.team.description')}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-[#F97316] flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{t('careers.offer.development.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{t('careers.offer.development.description')}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-[#F97316] flex items-center justify-center mx-auto mb-4">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{t('careers.offer.tools.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{t('careers.offer.tools.description')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit text-center mb-12 text-[#1f398a]">
              {t('careers.requirements.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">{t('careers.requirements.qualifications')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#F97316] mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t('careers.requirements.education')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#F97316] mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t('careers.requirements.experience')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#F97316] mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t('careers.requirements.independence')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#F97316] mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t('careers.requirements.qualities')}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">{t('careers.requirements.requirements')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#F97316] mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t('careers.requirements.license')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#F97316] mr-3 mt-0.5 flex-shrink-0" />
                    <span>{t('careers.requirements.language')}</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-blue-50">
                  <p className="text-sm text-blue-800">
                    <strong>{t('careers.requirements.note')}</strong> {t('careers.requirements.apprentices')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Role */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit text-center mb-8 text-[#1f398a]">
              {t('careers.role.title')}
            </h2>
            <div className="bg-white shadow-lg p-8">
              <p className="text-lg leading-relaxed text-gray-700">
                {t('careers.role.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="ansokan" className="py-16 navy-gradient text-white relative">
        {/* Corner decorations */}
        <span aria-hidden="true" className="pointer-events-none absolute left-6 top-6 w-8 h-8 md:left-8 md:top-8 md:w-10 md:h-10 lg:left-10 lg:top-10 lg:w-12 lg:h-12 border-t-2 border-l-2 border-[#F97316]"></span>
        <span aria-hidden="true" className="pointer-events-none absolute right-6 bottom-6 w-8 h-8 md:right-8 md:bottom-8 md:w-10 md:h-10 lg:right-10 lg:bottom-10 lg:w-12 lg:h-12 border-b-2 border-r-2 border-[#F97316]"></span>
        
        <div className="container px-8 md:px-4">
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 text-left">
            <h2 className="text-h2 font-outfit mb-4 text-[#F97316]">
              Ansökan
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Skicka ditt CV, ett kort personligt brev och eventuella certifikat till:
            </p>
            
            <div className="text-lg space-y-2">
              <p><strong>E-post:</strong> info@komplettvvs.se</p>
              <p><strong>Telefon:</strong> 0737 22 49 62</p>
            </div>
            
            <div className="mt-8 text-sm space-y-2 opacity-80">
              <p>Urval och intervjuer sker löpande. Alla ansökningar behandlas konfidentiellt.</p>
              <p>Vi söker även personer med mindre erfarenhet, exempelvis lärlingar.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
