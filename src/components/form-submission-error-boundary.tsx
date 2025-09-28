'use client';

import React from 'react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Mail, Phone } from 'lucide-react';

interface FormSubmissionErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

function FormSubmissionErrorFallback({ error, resetError }: FormSubmissionErrorFallbackProps) {
  return (
    <div className="bg-red-50 border border-red-200 p-6 text-center">
      <div className="mb-4">
        <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-red-800 mb-2">
          Inlämningsfel
        </h3>
        <p className="text-red-700 mb-4">
          Ditt meddelande kunde inte skickas. Vänligen försök igen eller kontakta oss direkt.
        </p>
      </div>
      
      <div className="space-y-3">
        <Button 
          onClick={resetError} 
          variant="destructive"
          size="sm"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Försök igen
        </Button>
        
        <div className="text-sm text-red-600 space-y-2">
          <p>Eller kontakta oss direkt:</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="mailto:info@komplettvvs.se"
              className="inline-flex items-center gap-2 text-red-700 hover:text-red-800 font-medium"
            >
              <Mail className="h-4 w-4" />
              info@komplettvvs.se
            </a>
            <a 
              href="tel:+46737224962"
              className="inline-flex items-center gap-2 text-red-700 hover:text-red-800 font-medium"
            >
              <Phone className="h-4 w-4" />
              0737 22 49 62
            </a>
          </div>
        </div>
      </div>

      {process.env.NODE_ENV === 'development' && (
        <details className="mt-4 text-left">
          <summary className="cursor-pointer text-xs text-red-600 mb-2">
            Teknisk information
          </summary>
          <pre className="text-xs text-red-500 bg-red-100 p-2 rounded overflow-auto">
            {error.message}
            {error.stack && `\n\n${error.stack}`}
          </pre>
        </details>
      )}
    </div>
  );
}

interface FormSubmissionErrorBoundaryProps {
  children: React.ReactNode;
}

export function FormSubmissionErrorBoundary({ children }: FormSubmissionErrorBoundaryProps) {
  return (
    <ErrorBoundary fallback={FormSubmissionErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}
