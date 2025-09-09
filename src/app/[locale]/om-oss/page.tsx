import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { generateLocalBusinessSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Shield, Award, Users, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { CertificationBadgeServer } from '@/components/ui/certification-badge-server';

export const metadata = generatePageMetadata({
  title: 'Komplett VVS i Sthlm AB – hantverkare du kan lita på',
  description: 'Lär känna vårt team av certifierade VVS-montörer i Stockholm. Över 20 års erfarenhet, Säker Vatten-certifiering och full garanti på alla arbeten.',
  keywords: 'VVS företag Stockholm, VVS-montörer, Säker Vatten, VVS certifiering, rörmokare Stockholm',
  path: '/om-oss',
});

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();

  const certifications = [
    'Certifierade enligt Säker Vatten-standarder',
    'Försäkrade arbeten med full täckning',
    'Garanti på alla installationer och reparationer',
    'Kontinuerlig utbildning av personal',
    'Miljöcertifiering enligt ISO 14001'
  ];

  const teamMembers = [
    {
      name: 'Håkan Andersson',
      role: 'VD & Grundare',
      experience: '25+ års erfarenhet',
      specialties: ['Nyinstallation', 'Stambyte', 'Projekthantering']
    },
    {
      name: 'Daniel Eriksson',
      role: 'Chefsmontör',
      experience: '20+ års erfarenhet',
      specialties: ['Service', 'Akutreparationer', 'Relining']
    },
    {
      name: 'Maria Lindqvist',
      role: 'Projektledare',
      experience: '15+ års erfarenhet',
      specialties: ['Kundkontakt', 'Planering', 'Kvalitetskontroll']
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
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-700 mb-4">{member.experience}</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-outfit mb-6">
              {t('about.pageContent.ctaTitle')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('about.pageContent.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href={`/${locale}/kontakt`}>
                  <Phone className="h-4 w-4 mr-2" />
                  {t('about.pageContent.ctaButtons.callNow')}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link href={`/${locale}/kontakt`}>
                  {t('about.pageContent.ctaButtons.sendMessage')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}