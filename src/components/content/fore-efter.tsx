'use client';

import * as React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

interface Pair {
  beforeSrc: string;
  afterSrc: string;
}

interface ForeEfterProps {
  pairs: Pair[];
}

export function ForeEfter({ pairs }: ForeEfterProps) {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold font-outfit text-[#1f398a]">
            {t('home.gallery.heading')}
          </h3>
          <p className="mt-2 text-sm md:text-base text-text-700">
            {t('home.gallery.subheading')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
          {pairs.map((p, idx) => {
            const isPortraitDesktop = idx === 1 || idx === 2;
            const isMiddle = idx === 1 || idx === 2;
            const wrapper = `w-full ${isMiddle ? 'overflow-visible' : 'overflow-hidden'} max-w-[300px] mx-auto lg:max-w-none`;
            const fit = isPortraitDesktop ? 'object-cover lg:object-contain' : 'object-cover';
            return (
              <div
                key={`${p.beforeSrc}-${p.afterSrc}`}
                className={`min-w-0 flex-1 lg:basis-1/4 ${isMiddle ? 'lg:basis-[17.5%]' : ''}`}
              >
                {/* Before */}
                <div className="p-0">
                  <div className={wrapper}>
                    <Image
                      src={p.beforeSrc}
                      alt={t('home.gallery.beforeCaption')}
                      width={1200}
                      height={800}
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className={`${fit} w-full h-auto max-w-[300px] mx-auto lg:max-w-none`}
                      priority={idx === 0}
                      decoding="async"
                    />
                  </div>
                </div>
                {/* Separator */}
                <div className="flex items-center justify-center py-2" aria-hidden="true">
                  <div className="w-0 h-0 border-l-4 border-r-4 border-l-transparent border-r-transparent border-t-8 border-t-[#F97316]" />
                </div>
                {/* After */}
                <div className="p-0">
                  <div className={wrapper}>
                    <Image
                      src={p.afterSrc}
                      alt={t('home.gallery.afterCaption')}
                      width={1200}
                      height={800}
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className={`${fit} w-full h-auto max-w-[300px] mx-auto lg:max-w-none`}
                      priority={false}
                      decoding="async"
                    />
                  </div>
                </div>

                {/* CTA only on the last pair */}
                {idx === 3 && (
                  <div className="pt-3 pb-1 flex justify-center lg:justify-end">
                    <a
                      href={`/${locale}/om-oss#projects-carousel`}
                      className="inline-flex items-center justify-center px-4 py-2 bg-[#F97316] text-white font-medium hover:bg-[#e86a0a] transition-colors"
                    >
                      {t('home.gallery.moreImagesShort')}
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


