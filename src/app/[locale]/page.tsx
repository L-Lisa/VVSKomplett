import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Wrench,
  Home,
  Settings,
  Shield,
  Droplets,
  Paintbrush,
} from 'lucide-react';
import { LocalBusinessSchema } from '@/components/schema';

export default function HomePage() {
  const t = useTranslations('home');
  const tNav = useTranslations('navigation');
  const tServices = useTranslations('services');

  const services = [
    {
      key: 'newInstallation',
      icon: Wrench,
      href: '/nyinstallation',
    },
    {
      key: 'pipeReplacement',
      icon: Home,
      href: '/stambyte',
    },
    {
      key: 'service',
      icon: Settings,
      href: '/service',
    },
    {
      key: 'relining',
      icon: Shield,
      href: '/relining',
    },
    {
      key: 'pipeFlushing',
      icon: Droplets,
      href: '/stamspolning',
    },
    {
      key: 'pipeCoating',
      icon: Paintbrush,
      href: '/stamfilmning',
    },
  ];

  return (
    <>
      <LocalBusinessSchema />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Wrench className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold font-outfit">
                  Komplett VVS
                </span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="/"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {tNav('home')}
                </a>
                <a
                  href="/om-oss"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {tNav('about')}
                </a>
                <a
                  href="/kontakt"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {tNav('contact')}
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                {tNav('contact')}
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                {tNav('about')}
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-center mb-12">
              Våra tjänster
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.key}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <Icon className="h-12 w-12 text-primary mb-4" />
                      <CardTitle className="text-xl font-outfit">
                        {tServices(`${service.key}.title`)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {tServices(`${service.key}.description`)}
                      </CardDescription>
                      <Button className="w-full mt-4" variant="outline">
                        Läs mer
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-muted/20 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold font-outfit">
                    Komplett VVS
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Din pålitliga VVS-partner i Stockholm
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Tjänster</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Nyinstallation</li>
                  <li>Stambyte</li>
                  <li>Service</li>
                  <li>Relining</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Kontakt</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Stockholm, Sverige</li>
                  <li>Telefon: 08-123 456 78</li>
                  <li>E-post: info@komplettvvs.se</li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>
                &copy; 2024 Komplett VVS i Stockholm AB. Alla rättigheter
                förbehållna.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
