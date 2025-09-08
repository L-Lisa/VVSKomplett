import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Wrench, Users, Award, Clock } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');
  const tNav = useTranslations('navigation');

  const values = [
    {
      icon: Users,
      title: 'Erfarenhet',
      description: 'Många års erfarenhet av VVS-branschen',
    },
    {
      icon: Award,
      title: 'Kvalitet',
      description: 'Vi levererar alltid högsta kvalitet',
    },
    {
      icon: Clock,
      title: 'Pålitlighet',
      description: 'Du kan lita på oss när det gäller',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
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

      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <Wrench className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-center mb-12">
            Våra värderingar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl font-outfit">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
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
            Kontakta oss
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vill du veta mer om oss eller våra tjänster? Vi hör gärna från dig.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Kontakta oss
          </Button>
        </div>
      </section>
    </div>
  );
}
