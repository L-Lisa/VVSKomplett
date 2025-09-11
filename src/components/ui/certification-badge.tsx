'use client';

import Image from 'next/image';

interface CertificationBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
  priority?: boolean;
}

export function CertificationBadge({ 
  size = 'md', 
  className = '', 
  showText = true,
  priority = false 
}: CertificationBadgeProps) {
  
  // Professional sizing for rectangular certification badge (2:1 aspect ratio)
  const sizeConfig = {
    sm: {
      image: { width: 160, height: 80 },
      container: 'w-40 h-20',
      text: 'text-xs',
      spacing: 'mt-1'
    },
    md: {
      image: { width: 240, height: 120 },
      container: 'w-60 h-30',
      text: 'text-sm',
      spacing: 'mt-2'
    },
    lg: {
      image: { width: 320, height: 160 },
      container: 'w-80 h-40',
      text: 'text-base',
      spacing: 'mt-3'
    }
  };

  const config = sizeConfig[size];

  return (
    <div className={`flex flex-col items-center ${className}`} role="img" aria-label="vvs-certifierade">
      <div className={`relative ${config.container}`}>
        <Image
          src="/saker-vatten.webp"
          alt="vvs-certifierade"
          title="Säker Vatten - Auktoriserat VVS-företag"
          width={config.image.width}
          height={config.image.height}
          className="object-contain w-full h-full"
          priority={priority}
          aria-hidden="false"
        />
      </div>
      {showText && (
        <div className={`text-center ${config.spacing}`}>
          <p className={`font-semibold text-primary ${config.text}`}>
            Säker Vatten
          </p>
          <p className={`text-text-600 ${config.text}`}>
            Auktoriserat VVS-företag
          </p>
        </div>
      )}
    </div>
  );
}
