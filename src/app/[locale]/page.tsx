import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ServicesGridClient } from '@/components/content/services-grid.client';
import { Hero } from '@/components/content/hero';
import { CTA } from '@/components/content/cta';
import { generatePageMetadata } from '@/lib/metadata';
import { generateLocalBusinessSchema } from '@/lib/schemas';
import { GeometricAccents } from '@/components/ui/geometric-accents';
import { ScreenReaderAnnouncement } from '@/components/ui/screen-reader-announcement';
import Link from 'next/link';
import { CheckIcon } from '@/components/ui/check-icon';
import { IndustrialGridBackground } from '@/components/ui/industrial-grid-background';
// (client wrapper used instead)

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return generatePageMetadata({
    title: t('home.title'),
    description: t('home.description'),
    path: '/',
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const services = [
    {
      key: 'newInstallation',
      iconName: 'Wrench',
      href: '/nyinstallation',
    },
    {
      key: 'pipeReplacement',
      iconName: 'Home',
      href: '/stambyte',
    },
    {
      key: 'service',
      iconName: 'Settings',
      href: '/service',
    },
    {
      key: 'relining',
      iconName: 'Shield',
      href: '/relining',
    },
    {
      key: 'pipeFlushing',
      iconName: 'Droplets',
      href: '/stamspolning',
    },
    {
      key: 'pipeCoating',
      iconName: 'Paintbrush',
      href: '/stamfilmning',
    },
    {
      key: 'bathroomDesign',
      iconName: 'Bath',
      href: '#', // Placeholder for Badrums concept
    },
    {
      key: 'electricalInstallation',
      iconName: 'Zap',
      href: '#', // Placeholder for elteknik23
    },
    {
      key: 'allVVS',
      iconName: 'Cog',
      href: '/om-oss',
    },
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
      <Hero
        title={t('home.title')}
        lead={t('home.subtitle')}
        primaryCta={{
          text: t('navigation.contact'),
          href: '/kontakt'
        }}
        priority={true}
      />

      {/* Services Section */}
      <section className="py-20 relative bg-gradient-to-br from-[#1f398a]/8 via-gray-50/30 to-[#F97316]/6" aria-labelledby="services-heading">
        {/* Simple industrial grid pattern */}
        <IndustrialGridBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold font-outfit text-center mb-8 sm:mb-12">
            {t('home.servicesTitle')}
          </h2>
          <ServicesGridClient services={services} />
        </div>
      </section>

      {/* Screen Reader Announcement for Services */}
      <ScreenReaderAnnouncement 
        message={t('home.a11y.servicesLoaded')}
        delay={1000}
      />


      {/* Content Section with Internal Linking */}
      <section className="py-20 bg-[#F7F9FC] relative">
        <GeometricAccents variant="border" className="opacity-25" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-center mb-8">
              {t('home.contentSection.mainTitle')}
            </h2>
            
            <div className="text-text-700 mb-8 text-left">
              <p className="text-xl leading-relaxed mb-6 text-left">
                {t('home.hero.intro1')}
              </p>
              <p className="text-lg leading-relaxed mb-8 text-left">
                {t('home.hero.intro2')}
              </p>
            </div>

            {/* Process Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold font-outfit mb-4">{t('home.contentSection.specialtiesTitle')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span><Link href={`/${locale}/nyinstallation`} className="text-primary hover:underline font-medium">{t('navigation.newInstallation')}</Link> {t('home.specialties.items.nyinstallation.after')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span><Link href={`/${locale}/stambyte`} className="text-primary hover:underline font-medium">{t('navigation.pipeReplacement')}</Link> {t('home.specialties.items.stambyte.after')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span><Link href={`/${locale}/relining`} className="text-primary hover:underline font-medium">{t('navigation.relining')}</Link> {t('home.specialties.items.relining.after')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span><Link href={`/${locale}/service`} className="text-primary hover:underline font-medium">{t('navigation.service')}</Link> {t('home.specialties.items.service.after')}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold font-outfit mb-4">{t('home.contentSection.safetyTitle')}</h3>
                <ul className="space-y-3">
                  {t.raw('home.safety.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-muted/20 rounded-lg p-8 text-left">
              <h3 className="text-2xl font-bold font-outfit mb-4">{t('home.serviceAreas.title')}</h3>
              <p className="text-lg text-text-700 mb-6">
                {t('home.serviceAreas.intro1')} 
                {t('home.serviceAreas.intro2')} 
                <Link href={`/${locale}/nyinstallation`} className="text-primary hover:underline font-medium mx-1">{t('navigation.newInstallation')}</Link> 
                {t('home.serviceAreas.and')} <Link href={`/${locale}/stamspolning`} className="text-primary hover:underline font-medium mx-1">{t('navigation.pipeFlushing')}</Link> 
                {t('home.serviceAreas.and2')} <Link href={`/${locale}/stamfilmning`} className="text-primary hover:underline font-medium mx-1">{t('navigation.pipeCoating')}</Link>.
              </p>
              <Button asChild size="lg">
                <Link href={`/${locale}/kontakt`}>
                  {t('home.serviceAreas.cta')}
                </Link>
              </Button>
            </div>

            {/* Why Choose Us Section - Split Hero Layout */}
            <div className="mt-16">
              <div className="bg-gradient-to-br from-[#1f398a]/5 to-[#F97316]/5 rounded-2xl p-8 lg:p-12">
                {/* Header spanning both columns */}
                <h2 className="text-2xl lg:text-3xl font-bold font-outfit mb-8 text-[#1f398a] text-center lg:text-left">
                  {t('home.whyChooseUs')}
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-start">
                  {/* Left: 5 Reasons */}
                  <div>
                    <div className="space-y-6" role="list" aria-label={t('home.a11y.whyAria')}>
                      {t.raw('home.faq.items').map((item: { question: string; answer: string }, index: number) => (
                        <div key={index} className="flex items-start group" role="listitem">
                          <div className="flex-shrink-0 mr-4 mt-1 group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
                            <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-sm">{index + 1}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-text-900 text-lg mb-2 group-hover:text-[#F97316] transition-colors duration-200" aria-label={`Punkt ${index + 1}: ${item.question}`}>
                              {item.question.replace(/^\d+\s*–\s*/, '')}
                            </h3>
                            <p className="text-text-700 leading-relaxed">{item.answer}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Local Area Info */}
                  <div className="p-8 lg:px-10 lg:pb-8 lg:pt-0 flex flex-col h-full">
                      <h3 className="text-lg font-semibold text-text-900 mb-4">
                        {t('home.localArea.title')}
                      </h3>
                      <p className="text-text-700 mb-6 leading-relaxed" dangerouslySetInnerHTML={{__html: t('home.localArea.description')}} />
                      
                      {/* Image Showcase - grows to fill remaining space */}
                      <div className="rounded-2xl overflow-hidden shadow-lg flex-1">
                        <Image 
                          src="/fardig8.webp" 
                          alt={t('home.localArea.imageAlt')}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                          priority={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title={t('cta.title')}
        description={t('cta.description')}
      />
    </>
  );
}
