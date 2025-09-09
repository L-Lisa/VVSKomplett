import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

interface Features3Props {
  features: Feature[];
  className?: string;
}

export function Features3({ features, className }: Features3Props) {
  const t = useTranslations('home');
  
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6', className)}>
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <Card
            key={index}
            className="card-hover hover:shadow-lg transition-shadow navy-border"
          >
            <CardHeader>
              <Icon className="h-12 w-12 navy-text mb-4" />
              <CardTitle className="text-xl font-outfit navy-text">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                {feature.description}
              </CardDescription>
              <Button className="w-full btn-navy-outline" asChild>
                <a href={feature.href}>
                  {t('readMore')}
                </a>
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
