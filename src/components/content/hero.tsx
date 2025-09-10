import Image from 'next/image';
import { Button } from '@/components/ui/button';
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
    <section className={cn('relative py-20 overflow-hidden', className)}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/pipe_background.webp"
          alt="VVS pipes background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={priority}
        />
        {/* Gradient overlay for better text contrast - from top-left corner fading toward center */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(22,58,95,0.6)] via-[rgba(22,58,95,0.2)] to-transparent" aria-hidden="true"></div>
      </div>
      
      {/* Content with glassmorphism effect */}
      <div className="container relative z-10">
        <div className="text-center">
          {/* Glassmorphism container for text content */}
          <div className="backdrop-blur-md bg-white/40 border border-white/40 rounded-2xl p-8 md:p-4 shadow-2xl max-w-4xl mx-auto">
            <h1 className="text-h1 font-outfit text-text-900 mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-text-700 mb-8 max-w-3xl mx-auto">
              {lead}
            </p>
            {description && (
              <p className="text-lg text-text-900 mb-12 max-w-2xl mx-auto">
                {description}
              </p>
            )}
            {/* Single CTA Button - responsive text */}
            <div className="flex justify-center mb-6">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-6" 
                asChild
              >
                <a href={primaryCta.href}>
                  <span className="hidden md:block">{primaryCta.text}</span>
                  <span className="md:hidden">Ring direkt</span>
                </a>
              </Button>
            </div>
            
            {/* Chips text under CTA buttons - plain royal blue text */}
            <div className="mt-3 text-[#1f398a] text-sm font-medium">
              Entreprenad • BRF • Företag • Privat
            </div>
            
            {/* Profile Picture - Aligned with buttons, 15px to the right */}
            <div className="hidden md:block absolute" style={{top: 'calc(100% - 120px)', left: 'calc(50% + 200px)'}}>
              <div className="p-1">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={360}
                  height={203}
                  className="object-cover object-center rounded-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
