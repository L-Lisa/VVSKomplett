import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav 
      className={cn('flex items-center space-x-1 text-sm text-text-600', className)}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        <li>
          <Link 
            href="/" 
            className="flex items-center hover:text-primary transition-colors"
            aria-label="Go to homepage"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-text-400 mx-1" aria-hidden="true" />
            {item.href ? (
              <Link 
                href={item.href}
                className="hover:text-primary transition-colors"
                aria-current={index === items.length - 1 ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ) : (
              <span 
                className="text-text-900 font-medium"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
