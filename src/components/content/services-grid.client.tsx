"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import {
  Wrench,
  Home,
  Settings,
  Shield,
  Droplets,
  Paintbrush,
  Bath,
  Zap,
  Cog,
} from 'lucide-react';

export interface ServiceItem {
  key: string;
  iconName: string;
  href: string;
}

const iconMap = {
  Wrench,
  Home,
  Settings,
  Shield,
  Droplets,
  Paintbrush,
  Bath,
  Zap,
  Cog,
} as const;

export interface ServicesGridClientProps {
  services: ServiceItem[];
  localeHrefPrefix?: string; // e.g. "/sv" or "/en" if needed
}


export function ServicesGridClient({ services }: ServicesGridClientProps) {
  const t = useTranslations();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4" role="list" aria-label={t('home.a11y.servicesAria')}>
      {services.map((service) => {
        const Icon = iconMap[service.iconName as keyof typeof iconMap];
        const isStambyte = service.key === 'pipeReplacement';

        return (
          <Card 
            key={service.key}
            className="group relative rounded-xl border border-[#E6E9EF] bg-white shadow-[0_4px_12px_rgba(12,21,36,0.06)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 hover:border-[#1f398a]/20 h-full flex flex-col" 
            role="listitem"
          >
            {isStambyte && (
              <span className="absolute -top-1 -right-1 z-10 text-[9px] font-semibold uppercase tracking-wide text-white bg-[#F97316] px-2 py-0.5 rounded-full shadow-md" aria-label={t('home.a11y.brfBadge')}>
                BRF & Företag
              </span>
            )}
            <CardHeader className="p-4 pb-2">
              <Icon className="h-8 w-8 text-[#1f398a] mb-2 group-hover:text-[#F97316] group-hover:rotate-6 group-hover:scale-105 transition-all duration-200" aria-hidden="true" />
              <CardTitle className="text-lg font-outfit mb-1 leading-tight">
                {t(`services.${service.key}.title`)}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex flex-col flex-1">
              <CardDescription className="text-sm flex-1 mb-3 leading-relaxed">
                {t(`services.${service.key}.description`)}
              </CardDescription>
              <a 
                className="inline-flex items-center gap-1 text-[#1f398a] font-medium hover:text-[#F97316] hover:underline transition-colors duration-200 mt-auto text-sm"
                href={service.href}
                aria-label={`${t('home.readMoreAbout')} ${t(`services.${service.key}.title`)}`}
              >
                {t('home.readMoreEllipsis')}
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}


