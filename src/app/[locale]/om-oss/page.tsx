import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { generateLocalBusinessSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CertificationBadgeServer } from '@/components/ui/certification-badge-server';
import { ImageSlider } from '@/components/ui/image-slider';
import { CTA } from '@/components/content/cta';
import { IndustrialGridBackground } from '@/components/ui/industrial-grid-background';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    keywords: locale === 'en'
      ? 'plumbing company Stockholm, plumbers, Safe Water, VVS certification, plumber Stockholm'
      : 'VVS företag Stockholm, VVS-montörer, Säker Vatten, VVS certifiering, rörmokare Stockholm',
    path: '/om-oss',
    locale: locale === 'en' ? 'en_US' : 'sv_SE',
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const certifications = [
    t('about.certifications.certifiedBy'),
    t('about.certifications.insuredWork'),
    t('about.certifications.warranty'),
    t('about.certifications.continuousTraining'),
    t('about.certifications.environmentalCert')
  ];

  const teamMembers = [
    {
      name: 'Håkan',
      role: t('about.team.role'),
      experience: t('about.team.experience'),
      specialties: [],
      image: '/hakan.webp',
      phone: '+46760275720',
      displayPhone: '+46 76 027 57 20',
      email: 'hakan@komplettvvs.se'
    },
    {
      name: 'Daniel',
      role: t('about.team.role'),
      experience: t('about.team.experience'),
      specialties: [],
      image: '/daniel.webp',
      phone: '+46707488664',
      displayPhone: '+46 70 748 86 64',
      email: 'daniel@komplettvvs.se'
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
      <section 
        className="relative py-20"
        style={{
          backgroundImage: "url('/komplettvvs-bakgrund.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <span aria-hidden="true" className="absolute inset-0 bg-white/10"></span>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block border border-white/60 md:border-white/40 bg-white/85 md:bg-white/70 backdrop-blur-md md:backdrop-blur-sm px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
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
              <Button asChild variant="secondary" size="lg">
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
        </div>
      </section>


      {/* About Håkan and Daniel */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit mb-8 text-primary text-center">
              {t('about.founders.title')}
            </h2>
            <div className="prose prose-lg max-w-none text-text-700 leading-relaxed text-left">
              <p className="mb-6">
                {t('about.founders.paragraph1')}
              </p>
              <p className="mb-6">
                {t('about.founders.paragraph2')}
              </p>
              <p>
                {t('about.founders.paragraph3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative bg-gradient-to-br from-[#1f398a]/20 via-gray-50/50 to-[#F97316]/15">
        <IndustrialGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center">
            <div className="bg-white/60 backdrop-blur-lg px-4 py-6 lg:px-6 lg:py-8 shadow-2xl border border-white/30 w-fit max-w-6xl">
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
                    <div className="mx-auto w-20 h-20 bg-primary/10 flex items-center justify-center mb-4 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
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
                      <div className="text-sm text-text-600 mb-1">
                        <strong>{t('contact.phone')}:</strong> {member.phone ? (
                          <a href={`tel:${member.phone}`} className="underline text-primary hover:text-[#F97316]">{member.displayPhone ?? member.phone}</a>
                        ) : (
                          process.env.NEXT_PUBLIC_PHONE ?? '+46 70-123 45 67'
                        )}
                      </div>
                      {member.email && (
                        <div className="text-sm text-text-600 mb-2 break-all">
                          <strong>{t('contact.email')}:</strong> <a href={`mailto:${member.email}`} className="underline text-primary hover:text-[#F97316]">{member.email}</a>
                        </div>
                      )}
                      <Button 
                        size="sm" 
                        variant="secondary"
                        className="font-medium w-[70%]"
                        asChild
                      >
                        <Link href={`/${locale}/kontakt`}>
                          {t('about.team.contact')}
                        </Link>
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm"
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Carousel Section (moved from Home) */}
      <section id="projects-carousel" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit text-center mb-8 text-[#1f398a]">
              {t('about.projects.heading')}
            </h2>
             <ImageSlider
               images={[
                 { src: '/fardig.webp', alt: t('home.projects.fardig.altText') },
                 { src: '/fardig6.webp', alt: t('home.projects.fardig6.altText') },
                 { src: '/fardig7.webp', alt: t('home.projects.fardig7.altText') },
                 { src: '/fardig8.webp', alt: t('home.projects.fardig8.altText') },
                 { src: '/fardig9.webp', alt: t('home.projects.fardig9.altText') },
                 { src: '/fardig10.webp', alt: t('home.projects.fardig10.altText') },
                 { src: '/fardigt.webp', alt: t('home.projects.fardigt.altText') }
               ]}
              slidesToShow={1}
              slidesToScroll={1}
              className="mb-8"
            />
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