'use client';

import React from 'react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface DynamicComponentErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

function DynamicComponentErrorFallback({ error, resetError }: DynamicComponentErrorFallbackProps) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 p-4 text-center">
      <div className="mb-3">
        <AlertTriangle className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
        <h3 className="text-sm font-semibold text-yellow-800 mb-1">
          Komponentfel
        </h3>
        <p className="text-yellow-700 text-sm">
          Denna komponent kunde inte laddas. Sidan fungerar normalt.
        </p>
      </div>
      
      <Button 
        onClick={resetError} 
        variant="outline"
        size="sm"
        className="text-yellow-700 border-yellow-300 hover:bg-yellow-100"
      >
        <RefreshCw className="h-3 w-3 mr-1" />
        Försök igen
      </Button>

      {process.env.NODE_ENV === 'development' && (
        <details className="mt-3 text-left">
          <summary className="cursor-pointer text-xs text-yellow-600 mb-1">
            Teknisk information
          </summary>
          <pre className="text-xs text-yellow-500 bg-yellow-100 p-2 rounded overflow-auto">
            {error.message}
          </pre>
        </details>
      )}
    </div>
  );
}

interface DynamicComponentErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
}

export function DynamicComponentErrorBoundary({ 
  children, 
  fallback = DynamicComponentErrorFallback 
}: DynamicComponentErrorBoundaryProps) {
  return (
    <ErrorBoundary fallback={fallback}>
      {children}
    </ErrorBoundary>
  );
}
