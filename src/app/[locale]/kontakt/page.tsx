import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { generateContactPageSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { COMPANY } from '@/config/company';
import { ContactForm } from '@/components/contact-form';

export const metadata = generatePageMetadata({
  title: 'Kontakta oss – få en kostnadsfri offert',
  description: 'Kontakta Komplett VVS i Stockholm för kostnadsfri offert och rådgivning. Akutservice dygnet runt, telefon 08-123 456 78. Vi hjälper dig med alla VVS-behov.',
  keywords: 'kontakt VVS Stockholm, VVS offert, akutservice VVS, rörmokare Stockholm, VVS rådgivning',
  path: '/kontakt',
});

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
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      value: COMPANY.address,
      description: 'Vi arbetar i hela Stockholm'
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      value: 'Mån–Fre 08:00–17:00',
      description: 'Akutservice dygnet runt'
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
              {t('contact.hero.h1')}
            </h1>
            <p className="text-xl text-text-700 mb-8 leading-relaxed">
              {t('contact.hero.intro')}
            </p>
            <p className="text-lg text-text-600 mb-8">
              {t('contact.hero.intro2')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
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
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit text-center mb-12">
              Kontaktinformation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-primary mb-2">{info.value}</p>
                    <CardDescription className="text-sm">{info.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold font-outfit mb-6">
                  Skicka oss ett meddelande
                </h2>
                <p className="text-lg text-text-700 mb-8">
                  Fyll i formuläret så återkommer vi till dig inom 24 timmar. 
                  För akuta problem, ring oss direkt.
                </p>
                <ContactForm />
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
                
                <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <MessageCircle className="h-5 w-5 text-primary mr-2" />
                    Akutservice
                  </h4>
                  <p className="text-text-700 mb-4">
                    För akuta VVS-problem som inte kan vänta, ring oss direkt. 
                    Vi erbjuder akutservice dygnet runt i Stockholm.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href={`tel:${COMPANY.phone}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      Ring akutservice
                    </a>
                  </Button>
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-outfit mb-6">
              Redo att komma igång?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontakta oss idag för en kostnadsfri offert och rådgivning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href={`tel:${COMPANY.phone}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Ring oss nu
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <a href={`mailto:${COMPANY.email}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  Skicka e-post
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}