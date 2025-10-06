import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { generateContactPageSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { COMPANY } from '@/config/company';
import { CTA } from '@/components/content/cta';
import Image from 'next/image';
import { ContactForm } from '@/components/contact-form';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return generatePageMetadata({
    title: t('contact.title'),
    description: t('contact.description'),
    path: '/kontakt',
    locale: locale === 'en' ? 'en_US' : 'sv_SE',
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  

  const services = t.raw('contact.services.list').map((name: string, index: number) => ({
    name,
    href: ['/nyinstallation', '/stambyte', '/service', '/relining', '/stamspolning', '/stamfilmning'][index]
  }));

  type Service = {
    name: string;
    href: string;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateContactPageSchema()),
        }}
      />

      {/* Hero Section with background + glassmorphism */}
      <section
        className="relative py-20"
        role="region"
        aria-labelledby="contact-hero-title"
        style={{
          backgroundImage: "url('/rormockarebakgrund.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <span aria-hidden="true" className="absolute inset-0 bg-white/10"></span>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative inline-block border border-white/60 md:border-white/40 bg-white/85 md:bg-white/70 backdrop-blur-md md:backdrop-blur-sm px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
              <h1 id="contact-hero-title" className="text-4xl md:text-5xl font-bold font-outfit mb-6">
                {t('contact.hero.h1')}
              </h1>
              <p className="text-xl text-text-700 mb-8 leading-relaxed">
                {t('contact.hero.intro')}
              </p>
              <p className="text-lg text-text-600 mb-8">
                {t('contact.hero.intro2')}
              </p>
              <p className="text-sm md:text-base text-text-700 mb-6">{t('contact.hero.benefits')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" size="lg">
                  <a href={`mailto:${COMPANY.email}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    {t('cta.contactUs')}
                  </a>
                </Button>
              </div>

              {/* Säker Vatten badge (above the fold) */}
              <div className="hidden md:block absolute right-3 -bottom-6">
                <div className="bg-white/70 backdrop-blur-sm px-3 py-2 shadow-sm">
                  <Image
                    src="/saker-vatten.webp"
                    alt="Säker Vatten"
                    width={135}
                    height={72}
                    className="shadow-none w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Contact Form Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[1.15fr_420px] lg:grid-cols-[1.15fr_460px] gap-10 items-start">
              <div className="relative">
                <div
                  className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-[#F97316]/10 via-white/50 to-[#1f398a]/10 backdrop-blur-sm ring-1 ring-[#1f398a]/10 shadow-sm"
                  aria-hidden="true"
                ></div>
                <div className="relative">
                  <h2 className="text-3xl font-bold font-outfit mb-6">
                    {t('contact.form.title')}
                  </h2>
                  <p className="text-lg text-text-700 mb-8">
                    {t('contact.form.description')}
                  </p>
                  <div className="bg-white p-4 md:p-6 shadow-sm ring-1 ring-black/5">
                    <ContactForm />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold font-outfit mb-6">
                  {t('contact.services.sidebarTitle')}
                </h3>
                <div className="space-y-4">
                  {services.map((service: Service, index: number) => (
                    <div key={index} className="p-4 border hover:border-primary/50 transition-colors">
                      <h4 className="font-semibold mb-2">
                        <Link href={service.href} className="text-primary hover:underline">
                          {service.name}
                        </Link>
                      </h4>
                      <p className="text-text-700 text-sm">
                        {t('contact.services.title')}
                      </p>
                    </div>
                  ))}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section - aligned with service pages */}
      <CTA 
        title={t('contact.pageContent.ctaTitle')} 
        description={t('contact.pageContent.ctaDescription')} 
        orangeHeading 
        showCorners 
      />
    </>
  );
}