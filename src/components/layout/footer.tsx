import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Phone, Mail, MapPin, Clock, Shield, Award } from 'lucide-react';
import { COMPANY } from '@/config/company';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const phoneNumbers = [
    { name: 'Håkan', number: '070-123 45 67' },
    { name: 'Daniel', number: '070-987 65 43' }
  ];

  const services = [
    { key: 'newInstallation', href: '/nyinstallation' },
    { key: 'pipeReplacement', href: '/stambyte' },
    { key: 'service', href: '/service' },
    { key: 'relining', href: '/relining' },
    { key: 'pipeFlushing', href: '/stamspolning' },
    { key: 'pipeCoating', href: '/stamfilmning' },
  ];

  return (
    <footer className="border-t bg-muted/20">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact - First on mobile, third on desktop */}
          <div className="lg:order-3">
            <h3 className="font-semibold text-text-900 mb-4 flex items-center">
              <Phone className="h-5 w-5 mr-2 text-primary" />
              {t('footer.contact')}
            </h3>
            <div className="space-y-3">
              {phoneNumbers.map((phone, index) => (
                <div key={index} className="text-sm">
                  <div className="font-medium text-text-900">{phone.name}</div>
                  <a 
                    href={`tel:${phone.number}`}
                    className="text-text-700 hover:text-primary transition-colors"
                  >
                    {phone.number}
                  </a>
                </div>
              ))}
              <div className="text-sm text-text-700 flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                {COMPANY.email}
              </div>
              <div className="text-sm text-text-700 flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {COMPANY.address}
              </div>
            </div>
          </div>

          {/* Areas - Second on mobile, first on desktop */}
          <div className="lg:order-1">
            <h3 className="font-semibold text-text-900 mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              {t('footer.areas')}
            </h3>
            <div className="text-sm text-text-700">
              <p>Stor Stockholm</p>
              <p className="mt-2">Stockholm med omnejd</p>
            </div>
          </div>

          {/* Hours - Third on mobile, second on desktop */}
          <div className="lg:order-2">
            <h3 className="font-semibold text-text-900 mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-primary" />
              {t('footer.hours')}
            </h3>
            <div className="text-sm text-text-700 space-y-1">
              {COMPANY.openingHours.map((hours, index) => (
                <p key={index}>{hours}</p>
              ))}
              <p className="mt-2 text-xs text-text-500">
                {t('footer.emergencyService')}
              </p>
            </div>
          </div>

          {/* Certificates - Fourth on both mobile and desktop */}
          <div className="lg:order-4">
            <h3 className="font-semibold text-text-900 mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary" />
              {t('footer.certificates')}
            </h3>
            <div className="text-sm text-text-700 space-y-2">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-primary" />
                Säker Vatten
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-primary" />
                Försäkring
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-primary" />
                Garanti
              </div>
            </div>
          </div>
        </div>

        {/* Services Links */}
        <div className="mt-8 pt-8 border-t">
          <h3 className="font-semibold text-text-900 mb-4">{t('footer.services')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service) => (
              <Link
                key={service.key}
                href={service.href}
                className="text-sm text-text-700 hover:text-primary transition-colors"
              >
                {t(`services.${service.key}.title`)}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image
               src="/logokomplett.webp"
              alt={t('footer.logoAlt')}
              width={1280}
              height={720}
              className="h-6 w-auto"
            />
            <span className="text-sm text-text-700">
              {t('home.footerCopyright')}
            </span>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link 
              href={`/${locale}/integritetspolicy`} 
              className="text-text-700 hover:text-primary transition-colors"
            >
              {t('footer.privacyPolicy')}
            </Link>
            <Link 
              href={`/${locale}/cookies`} 
              className="text-text-700 hover:text-primary transition-colors"
            >
              {t('footer.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
