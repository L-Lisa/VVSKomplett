import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Droplets, CheckCircle, Clock, Zap } from 'lucide-react';

export default function PipeFlushingPage() {
  const t = useTranslations('services.pipeFlushing');
  const tNav = useTranslations('navigation');

  const features = [
    {
      icon: CheckCircle,
      title: 'Professionell rengöring',
      description: 'Avancerad teknik för djuprengöring av rör',
    },
    {
      icon: Clock,
      title: 'Snabb process',
      description: 'Effektiv metod som tar kort tid',
    },
    {
      icon: Zap,
      title: 'Förbättrad prestanda',
      description: 'Bättre vattenflöde efter rengöring',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-primary" />
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

      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <Droplets className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('description')}
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Få offert
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-center mb-12">
            Varför välja oss?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl font-outfit">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-6">
            Redo att komma igång?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kontakta oss idag för en kostnadsfri konsultation och offert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Kontakta oss
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Ring oss
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
