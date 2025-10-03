'use client';

import React from 'react';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import Image from 'next/image';
import { DynamicComponentErrorBoundary } from '@/components/dynamic-component-error-boundary';

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
  slidesToShow?: number;
  slidesToScroll?: number;
  draggable?: boolean;
  hasArrows?: boolean;
  hasDots?: boolean;
  className?: string;
}

function ImageSliderComponent({
  images,
  slidesToShow = 2,
  slidesToScroll = 1,
  draggable = true,
  hasArrows = true,
  hasDots = true,
  className = ''
}: ImageSliderProps) {
  return (
    <div className={`w-full ${className}`} role="region" aria-label="Image gallery">
      <Glider
        draggable={draggable}
        hasArrows={hasArrows}
        hasDots={hasDots}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]}
        className="glider-contain"
      >
        {images.map((image, index) => {
          const isWideLogo = image.src.includes('saker-vatten.webp');
          const containerAspect = isWideLogo
            ? 'aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/10]'
            : 'aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]';
          return (
          <div key={index} className="px-1 sm:px-2" role="group" aria-label={`Image ${index + 1} of ${images.length}`}>
            <div className={`relative ${containerAspect} overflow-hidden shadow-lg`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={index < 2}
              />
                     {/* Removed overlay title/description by request */}
            </div>
          </div>
        );})}
      </Glider>
    </div>
  );
}

export function ImageSlider(props: ImageSliderProps) {
  return (
    <DynamicComponentErrorBoundary>
      <ImageSliderComponent {...props} />
    </DynamicComponentErrorBoundary>
  );
}
