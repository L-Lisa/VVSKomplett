'use client';

import Image from 'next/image';
import { IndustrialGridBackground } from '@/components/ui/industrial-grid-background';
import { useState, useEffect } from 'react';

interface WorkflowSectionProps {
  title: string;
  steps: string[];
  imageSrc: string;
  imageAlt: string;
  backgroundGradient?: string;
  backgroundImage?: string;
  showGrid?: boolean;
}

export function WorkflowSection({
  title,
  steps,
  imageSrc,
  imageAlt,
  backgroundGradient = 'bg-gradient-to-br from-[#1f398a]/20 via-gray-50/50 to-[#F97316]/15',
  backgroundImage,
  showGrid = true,
}: WorkflowSectionProps) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Set new timeout to reset scrolling state
      const newTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
      
      setScrollTimeout(newTimeout);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  return (
    <section 
      className={`pt-20 pb-2 md:py-20 relative ${
        backgroundImage ? `bg-cover bg-center` : backgroundGradient
      }`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {/* Background gradient with scroll-based opacity */}
      <div 
        className={`absolute inset-0 transition-opacity duration-300 ${
          isScrolling ? 'opacity-100' : 'opacity-20'
        } ${
          backgroundImage ? `bg-cover bg-center` : backgroundGradient
        }`}
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      />
      
      {/* Industrial grid pattern */}
      {showGrid && <IndustrialGridBackground />}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center">
          <div className="bg-white/60 backdrop-blur-lg px-4 py-6 lg:px-6 lg:py-8 shadow-2xl border border-white/30 w-fit max-w-6xl">
            <h2 className="text-3xl font-bold font-outfit text-center mb-12">
              {title}
            </h2>
            
            <div className="grid md:[grid-template-columns:auto_auto] justify-center gap-6 items-stretch">
              {/* Steps List */}
              <div className="w-full">
                <div className="h-64 md:h-full flex items-center">
                  <div className="space-y-6 w-full">
                    {steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-lg text-text-700 pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full flex justify-center">
                <div className="w-full md:h-full flex items-center justify-center">
                  <div className="relative w-[90%] md:max-w-md lg:max-w-lg">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={400}
                      height={300}
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 448px, 512px"
                      className="object-contain w-full h-auto"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
