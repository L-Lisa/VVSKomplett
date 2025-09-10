import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { generateContactPageSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { COMPANY } from '@/config/company';
import { CTA } from '@/components/content/cta';
import Image from 'next/image';
import { ContactForm } from '@/components/contact-form';

export async function generateMetadata() {
  const t = await getTranslations();
  return generatePageMetadata({
    title: t('contact.title'),
    description: t('contact.description'),
    path: '/kontakt',
  });
}

export default async function ContactPage() {
  const t = await getTranslations();

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      value: COMPANY.phone,
      description: 'Ring oss för akutservice eller offert'
    },
    {
      icon: Mail,
      title: t('contact.email'),
      value: COMPANY.email,
      description: 'Skicka e-post för icke-akuta frågor'
    }
  ];

  const services = [
    { name: 'Nyinstallation', href: '/nyinstallation' },
    { name: 'Stambyte', href: '/stambyte' },
    { name: 'VVS-service', href: '/service' },
    { name: 'Relining', href: '/relining' },
    { name: 'Stamspolning', href: '/stamspolning' },
    { name: 'Stamfilmning', href: '/stamfilmning' }
  ];

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
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block rounded-md bg-white/70 md:bg-white/60 backdrop-blur-md md:backdrop-blur-sm px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
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
                <Button asChild size="lg" variant="secondary">
                  <a href={`tel:${COMPANY.phone}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Ring oss nu
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`mailto:${COMPANY.email}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    Skicka e-post
                  </a>
                </Button>
              </div>

              {/* Säker Vatten badge (above the fold) */}
              <div className="hidden md:block absolute right-3 -bottom-6">
                <div className="bg-white/70 backdrop-blur-sm px-3 py-2 rounded-md shadow-sm">
                  <Image
                    src="/saker-vatten.webp"
                    alt="Säker Vatten"
                    width={135}
                    height={72}
                    className="shadow-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section - enterprise grouping */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit text-center mb-8">
              Kontaktinformation
            </h2>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-text-600">{info.title}</p>
                        <p className="text-lg font-semibold text-primary">{info.value}</p>
                        <p className="text-sm text-text-600">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
                  className="absolute -inset-3 md:-inset-4 rounded-xl bg-gradient-to-br from-[#F97316]/10 via-white/50 to-[#1f398a]/10 backdrop-blur-sm ring-1 ring-[#1f398a]/10 shadow-sm"
                  aria-hidden="true"
                ></div>
                <div className="relative">
                  <h2 className="text-3xl font-bold font-outfit mb-6">
                    Skicka oss ett meddelande
                  </h2>
                  <p className="text-lg text-text-700 mb-8">
                    Fyll i formuläret så återkommer vi till dig inom 24 timmar. 
                    För akuta problem, ring oss direkt.
                  </p>
                  <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm ring-1 ring-black/5">
                    <ContactForm />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold font-outfit mb-6">
                  Våra tjänster
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
                      <h4 className="font-semibold mb-2">
                        <Link href={service.href} className="text-primary hover:underline">
                          {service.name}
                        </Link>
                      </h4>
                      <p className="text-text-700 text-sm">
                        Professionella VVS-tjänster i Stockholm
                      </p>
                    </div>
                  ))}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit text-center mb-12">
              Vanliga frågor
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Hur snabbt kan ni komma ut för akutservice?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-700">
                    Vi erbjuder akutservice dygnet runt. I Stockholm och omnejd kan vi vanligtvis 
                    vara på plats inom 2-4 timmar för akuta problem.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Vad kostar en offert?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-700">
                    Alla våra offerter är helt kostnadsfria. Vi kommer ut och gör en besiktning 
                    utan någon kostnad för dig.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Arbetar ni med både privata kunder och företag?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-700">
                    Ja, vi hjälper både privatpersoner med hemrenoveringar och företag med större 
                    VVS-projekt. Vi har erfarenhet av allt från lägenheter till kontorsbyggnader.
                  </p>
                </CardContent>
              </Card>
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