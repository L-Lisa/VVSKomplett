"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('notFound');
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md mx-auto text-center p-6">
        <div className="mb-6">
          <div className="text-6xl font-bold text-primary mb-4">404</div>
          <h1 className="text-2xl font-bold text-text-900 mb-2">{t('title')}</h1>
          <p className="text-text-700 mb-4">{t('description')}</p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              {t('goHome')}
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="w-full">
            <Link href="/kontakt">
              <Search className="h-4 w-4 mr-2" />
              {t('contactUs')}
            </Link>
          </Button>
        </div>

        <div className="mt-8 text-sm text-text-600">
          <p>{t('commonPagesTitle')}</p>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <Link href="/nyinstallation" className="text-primary hover:underline">
              Nyinstallation
            </Link>
            <Link href="/service" className="text-primary hover:underline">
              Service
            </Link>
            <Link href="/om-oss" className="text-primary hover:underline">
              Om oss
            </Link>
            <Link href="/kontakt" className="text-primary hover:underline">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
