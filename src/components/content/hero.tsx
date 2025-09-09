import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ImageOverlay } from '@/components/ui/image-overlay';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  lead: string;
  description?: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
  className?: string;
  priority?: boolean;
}

export function Hero({
  title,
  lead,
  description,
  primaryCta,
  secondaryCta,
  image,
  className,
  priority = false
}: HeroProps) {
  return (
    <section className={cn('relative py-20 bg-gradient-to-b from-background to-muted/20', className)}>
      <div className="container text-center">
        <h1 className="text-h1 font-outfit text-text-900 mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-text-700 mb-8 max-w-3xl mx-auto">
          {lead}
        </p>
        {description && (
          <p className="text-lg text-text-700 mb-12 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href={primaryCta.href}>
              {primaryCta.text}
            </a>
          </Button>
          {secondaryCta && (
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <a href={secondaryCta.href}>
                {secondaryCta.text}
              </a>
            </Button>
          )}
        </div>
        
        {/* Image with proper aspect ratios and overlay */}
        <div className="relative max-w-6xl mx-auto">
          <ImageOverlay className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[16/9]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                className="object-cover object-center"
                priority={priority}
              />
            </div>
          </ImageOverlay>
        </div>
      </div>
    </section>
  );
}
