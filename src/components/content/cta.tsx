import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

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
        
        {/* Phone Numbers */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {phoneNumbers.map((phone, index) => (
            <div key={index} className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold">{phone.name}</div>
                <a 
                  href={`tel:${phone.number}`}
                  className="text-lg hover:underline"
                >
                  {phone.number}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact Button */}
        <Button 
          size="lg" 
          variant="secondary" 
          className="text-lg px-8 py-6 btn-navy-outline"
          asChild
        >
          <a href={contactHref}>
            <Mail className="h-5 w-5 mr-2" />
            {t('contactUs')}
          </a>
        </Button>
      </div>
    </section>
  );
}
