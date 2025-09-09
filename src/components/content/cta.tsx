import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { COMPANY } from '@/config/company';

interface CTAProps {
  title: string;
  description: string;
  phoneNumbers: {
    name: string;
    number: string;
  }[];
  contactHref: string;
  className?: string;
}

export function CTA({ 
  title, 
  description, 
  phoneNumbers, 
  contactHref, 
  className 
}: CTAProps) {
  const t = useTranslations('cta');
  
  return (
    <section className={cn('py-16 navy-gradient text-white', className)}>
      <div className="container text-center">
        <h2 className="text-h2 font-outfit mb-4">
          {title}
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          {description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {/* Contact Button */}
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-6 btn-navy-outline"
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
              className="text-lg px-8 py-6 btn-navy-outline"
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
