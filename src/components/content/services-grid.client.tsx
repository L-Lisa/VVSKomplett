"use client";

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
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

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-[#E6E9EF] bg-white shadow-[0_6px_18px_rgba(12,21,36,0.06)] h-full flex flex-col overflow-hidden">
      <div className="p-6 flex-1 animate-pulse">
        <div className="h-12 w-12 rounded-md bg-gray-200 mb-4" />
        <div className="h-5 bg-gray-200 rounded w-2/3 mb-3" />
        <div className="h-4 bg-gray-200 rounded w-full mb-2" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
      <div className="px-6 pb-6">
        <div className="h-4 bg-gray-200 rounded w-40" />
      </div>
    </div>
  );
}

export function ServicesGridClient({ services }: ServicesGridClientProps) {
  const t = useTranslations();
  const [revealed, setRevealed] = useState<boolean[]>(() => services.map((_, i) => i < 3));

  // Intersection Observer to reveal cards 4-6 as they enter viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    services.forEach((_, index) => {
      if (index < 3) return; // first 3 already revealed instantly
      const el = document.getElementById(`service-card-${index}`);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setRevealed((prev) => {
                if (prev[index]) return prev;
                const next = [...prev];
                next[index] = true;
                return next;
              });
              observer.disconnect();
            }
          });
        },
        { rootMargin: '0px 0px -20% 0px', threshold: 0.1 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [services]);

  const renderDelay = (index: number) => {
    // First 3: 0ms, 20ms, 40ms for a calming effect; others: quick 120ms stagger on reveal
    if (index === 0) return 0;
    if (index === 1) return 20;
    if (index === 2) return 40;
    return (index - 3) * 120;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" role="list" aria-label={t('home.a11y.servicesAria')}>
      {services.map((service, index) => {
        const Icon = iconMap[service.iconName as keyof typeof iconMap];
        const isStambyte = service.key === 'pipeReplacement';
        const isRevealed = revealed[index];

        return (
          <div
            key={service.key}
            id={`service-card-${index}`}
            style={{
              transition: 'opacity 300ms ease-out, transform 300ms ease-out',
              transitionDelay: `${renderDelay(index)}ms`,
              opacity: isRevealed ? 1 : 0.001,
              transform: isRevealed ? 'none' : 'translateY(8px)',
            }}
          >
            {isRevealed ? (
              <Card className="group relative rounded-2xl border border-[#E6E9EF] bg-white shadow-[0_6px_18px_rgba(12,21,36,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-[#1f398a]/20 h-full flex flex-col" role="listitem">
                {isStambyte && (
                  <span className="absolute -top-2 -right-2 z-10 text-[10px] font-semibold uppercase tracking-wide text-white bg-[#F97316] px-2 py-1 rounded-full shadow-lg" aria-label={t('home.a11y.brfBadge')}>
                    BRF & Företag
                  </span>
                )}
                <CardHeader className="flex-1">
                  <Icon className="h-12 w-12 text-[#1f398a] mb-4 group-hover:text-[#F97316] group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" aria-hidden="true" />
                  <CardTitle className="text-xl font-outfit mb-3">
                    {t(`services.${service.key}.title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <CardDescription className="text-base flex-1 mb-4">
                    {t(`services.${service.key}.description`)}
                  </CardDescription>
                  <a 
                    className="inline-flex items-center gap-1 text-[#1f398a] font-medium hover:text-[#F97316] hover:underline transition-colors duration-300 mt-auto"
                    href={service.href}
                    aria-label={`Läs mer om ${t(`services.${service.key}.title`)}`}
                  >
                    {t('home.readMore')} {t(`services.${service.key}.title`)}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </CardContent>
              </Card>
            ) : (
              <SkeletonCard />
            )}
          </div>
        );
      })}
    </div>
  );
}


