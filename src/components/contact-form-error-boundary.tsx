'use client';

import React from 'react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Mail } from 'lucide-react';

interface ContactFormErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

function ContactFormErrorFallback({ error, resetError }: ContactFormErrorFallbackProps) {
  return (
    <div className="bg-red-50 border border-red-200 p-6 text-center">
      <div className="mb-4">
        <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-red-800 mb-2">
          Formulärfel
        </h3>
        <p className="text-red-700 mb-4">
          Kontaktformuläret kunde inte laddas korrekt. Vänligen försök igen.
        </p>
      </div>
      
      <div className="space-y-3">
        <Button 
          onClick={resetError} 
          size="sm"
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Försök igen
        </Button>
        
        <div className="text-sm text-red-600">
          <p>Eller kontakta oss direkt:</p>
          <a 
            href="mailto:info@komplettvvs.se"
            className="inline-flex items-center gap-2 text-red-700 hover:text-red-800 font-medium"
          >
            <Mail className="h-4 w-4" />
            info@komplettvvs.se
          </a>
        </div>
      </div>

      {process.env.NODE_ENV === 'development' && (
        <details className="mt-4 text-left">
          <summary className="cursor-pointer text-xs text-red-600 mb-2">
            Teknisk information
          </summary>
          <pre className="text-xs text-red-500 bg-red-100 p-2 rounded overflow-auto">
            {error.message}
          </pre>
        </details>
      )}
    </div>
  );
}

interface ContactFormErrorBoundaryProps {
  children: React.ReactNode;
}

export function ContactFormErrorBoundary({ children }: ContactFormErrorBoundaryProps) {
  return (
    <ErrorBoundary fallback={ContactFormErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}
