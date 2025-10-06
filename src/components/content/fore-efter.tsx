'use client';

import * as React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';

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
  const images = React.useMemo(() => {
    return pairs.flatMap((p, idx) => [
      { src: p.beforeSrc, alt: t('home.gallery.beforeCaption'), key: `${idx}-before` },
      { src: p.afterSrc, alt: t('home.gallery.afterCaption'), key: `${idx}-after` },
    ]);
  }, [pairs, t]);

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

        <div>
          <Glider
            className="glider-contain"
            draggable
            hasArrows
            hasDots
            slidesToShow={1}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 640,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
              },
              {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
              },
              {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 1 }
              }
            ]}
          >
            {images.map((image, index) => (
              <div key={image.key} className="px-1 sm:px-2" role="group" aria-label={`Bild ${index + 1} av ${images.length}`}>
                <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-x-0 bottom-0 py-1.5 sm:py-2 text-center backdrop-blur-sm bg-[#1f398a]/70">
                    <span className="text-[#F97316] text-xs sm:text-sm font-semibold tracking-wide">
                      {image.key.endsWith('before') ? t('home.gallery.beforeShort') : t('home.gallery.afterShort')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Glider>
          <div className="pt-4 flex justify-center lg:justify-end">
            <a
              href={`/${locale}/om-oss#projects-carousel`}
              className="inline-flex items-center justify-center px-4 py-2 bg-[#F97316] text-white font-medium hover:bg-[#e86a0a] transition-colors"
            >
              {t('home.gallery.moreImagesShort')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


