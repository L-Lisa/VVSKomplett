import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { generateLocalBusinessSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Shield, Award, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CertificationBadgeServer } from '@/components/ui/certification-badge-server';
import { CTA } from '@/components/content/cta';

export const metadata = generatePageMetadata({
  title: 'Komplett VVS i Sthlm AB – hantverkare du kan lita på',
  description: 'Lär känna vårt team av certifierade VVS-montörer i Stockholm. Över 20 års erfarenhet, Säker Vatten-certifiering och full garanti på alla arbeten.',
  keywords: 'VVS företag Stockholm, VVS-montörer, Säker Vatten, VVS certifiering, rörmokare Stockholm',
  path: '/om-oss',
});

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const certifications = [
    'Certifierade enligt Säker Vatten-standarder',
    'Försäkrade arbeten med full täckning',
    'Garanti på alla installationer och reparationer',
    'Kontinuerlig utbildning av personal',
    'Miljöcertifiering enligt ISO 14001'
  ];

  const teamMembers = [
    {
      name: 'Håkan',
      role: 'Projektledning',
      experience: '30+ års erfarenhet',
      specialties: ['Nyinstallation', 'Stambyte', 'Projekthantering'],
      image: '/hakan.webp'
    },
    {
      name: 'Daniel',
      role: 'Projektledning',
      experience: '30+ års erfarenhet',
      specialties: ['Service', 'Akutreparationer', 'Relining'],
      image: '/daniel.webp'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
              {t('about.hero.h1')}
            </h1>
            <p className="text-xl text-text-700 mb-8 leading-relaxed">
              {t('about.hero.intro')}
            </p>
            <p className="text-lg text-text-600 mb-8">
              {t('about.hero.intro2')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href={`/${locale}/kontakt`}>
                  {t('about.pageContent.buttons.contactUs')}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`/${locale}`}>
                  {t('about.pageContent.buttons.ourServices')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit text-center mb-12">
              {t('about.team.title')}
            </h2>
            <p className="text-xl text-text-700 text-center mb-12 max-w-3xl mx-auto">
              {t('about.team.description')}
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover rounded-full scale-90 hover:scale-100 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-700 mb-4">{member.experience}</p>
                    <div className="flex flex-col gap-2 mb-4 items-center">
                      <Button 
                        size="sm" 
                        className="bg-[#F97316] text-[#1f398a] hover:bg-[#e86a0a] font-medium w-[70%]"
                        asChild
                      >
                        <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE ?? '+46 70-123 45 67'}`}>
                          Ring direkt
                        </Link>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="bg-[#F97316] text-[#1f398a] border-[#F97316] hover:bg-[#e86a0a] font-medium w-[70%]"
                        asChild
                      >
                        <Link href={`/${locale}/kontakt`}>
                          Kontakt
                        </Link>
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-text-900">Specialiteter:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-muted text-sm rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Håkan and Daniel */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit mb-8 text-primary text-center">
              Våra grundare - Håkan & Daniel
            </h2>
            <div className="prose prose-lg max-w-none text-text-700 leading-relaxed text-left">
              <p className="mb-6">
                Med över 30 års erfarenhet inom VVS-branschen har Håkan och Daniel byggt upp Komplett VVS i Sthlm AB till ett certifierat företag som står för kvalitet och trygghet. Deras djupa kunskap sträcker sig från traditionell VVS-installation till modern elektrisk teknik, vilket gör dem till en komplett partner för alla dina behov.
              </p>
              <p className="mb-6">
                Som certifierat VVS-företag erbjuder vi allt inom VVS under samma tak - från nyinstallation och stambyte till relining, stamspolning och service. Vi vill vara det trygga och säkra valet för våra kunder i Stockholm, med fokus på långsiktiga lösningar och kundnöjdhet.
              </p>
              <p>
                Håkan och Daniels vision är att förenkla VVS-projekt genom att erbjuda helhetslösningar med transparent kommunikation, konkurrenskraftiga priser och garanterad kvalitet enligt Säker Vatten-standarder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit text-center mb-12">
              {t('about.certifications.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      {t('about.pageContent.certificationDetails.safeWater.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-700 mb-4">
                      {t('about.pageContent.certificationDetails.safeWater.description')}
                    </p>
                    
                    {/* Certification Badge */}
                    <div className="flex justify-center">
                      <CertificationBadgeServer size="md" showText={true} />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      {t('about.pageContent.certificationDetails.insurance.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-700">
                      {t('about.pageContent.certificationDetails.insurance.description')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-outfit mb-6">
              {t('about.areas.title')}
            </h2>
            <p className="text-xl text-text-700 mb-8">
              {t('about.areas.description')}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center p-6 border rounded-lg">
                <MapPin className="h-8 w-8 text-primary mr-3" />
                <span className="text-lg font-medium">{t('about.pageContent.serviceAreas.0')}</span>
              </div>
              <div className="flex items-center justify-center p-6 border rounded-lg">
                <MapPin className="h-8 w-8 text-primary mr-3" />
                <span className="text-lg font-medium">{t('about.pageContent.serviceAreas.1')}</span>
              </div>
              <div className="flex items-center justify-center p-6 border rounded-lg">
                <MapPin className="h-8 w-8 text-primary mr-3" />
                <span className="text-lg font-medium">{t('about.pageContent.serviceAreas.2')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit text-center mb-12">
              {t('about.pageContent.specialtiesTitle')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>
                    <Link href={`/${locale}/nyinstallation`} className="text-primary hover:underline">
                      {t('about.pageContent.specialties.0.title')}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-700">
                    {t('about.pageContent.specialties.0.description')}
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>
                    <Link href={`/${locale}/stambyte`} className="text-primary hover:underline">
                      {t('about.pageContent.specialties.1.title')}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-700">
                    {t('about.pageContent.specialties.1.description')}
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>
                    <Link href={`/${locale}/service`} className="text-primary hover:underline">
                      {t('about.pageContent.specialties.2.title')}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-700">
                    {t('about.pageContent.specialties.2.description')}
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>
                    <Link href={`/${locale}/relining`} className="text-primary hover:underline">
                      {t('about.pageContent.specialties.3.title')}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-700">
                    {t('about.pageContent.specialties.3.description')}
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>
                    <Link href={`/${locale}/stamspolning`} className="text-primary hover:underline">
                      {t('about.pageContent.specialties.4.title')}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-700">
                    {t('about.pageContent.specialties.4.description')}
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>
                    <Link href={`/${locale}/stamfilmning`} className="text-primary hover:underline">
                      {t('about.pageContent.specialties.5.title')}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-700">
                    {t('about.pageContent.specialties.5.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - aligned with service pages */}
      <CTA 
        title={t('about.pageContent.ctaTitle')} 
        description={t('about.pageContent.ctaDescription')} 
        orangeHeading 
        showCorners 
      />
    </>
  );
}