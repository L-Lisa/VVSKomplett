import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { COMPANY } from '@/config/company';

interface CTAProps {
  title: string;
  description: string;
  className?: string;
}

export function CTA({ 
  title, 
  description, 
  className 
}: CTAProps) {
  const t = useTranslations('cta');
  
  return (
    <section className={cn('py-16 navy-gradient text-white', className)}>
      <div className="container text-center">
        <h2 className="text-h2 font-outfit mb-4 text-[#F97316]">
          {title}
        </h2>
        <p className="text-lg mb-4 max-w-2xl mx-auto opacity-90">
          {description}
        </p>
        <p className="text-sm mb-8 max-w-2xl mx-auto opacity-80">
          {t('waterLeak')}
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {/* Contact Button */}
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-6"
            asChild
          >
            <a href={`mailto:${COMPANY.email}`} aria-label="Kontakta oss via e-post">
              <Mail className="h-5 w-5 mr-2" />
              Kontakta oss
            </a>
          </Button>
          
          {/* Phone Button - only show if phone number is configured */}
          {COMPANY.phone && COMPANY.phone !== '+468-000000' && (
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6"
              asChild
            >
              <a href={`tel:${COMPANY.phone}`} aria-label="Ring direkt">
                <Phone className="h-5 w-5 mr-2" />
                Ring direkt
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
