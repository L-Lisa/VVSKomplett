import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  title?: string;
  eyebrow?: string;
  lead?: string;
  container?: boolean;
}

const spacingMap = {
  sm: 'py-8',
  md: 'py-12', 
  lg: 'py-16',
  xl: 'py-20'
};

export function Section({ 
  children, 
  className, 
  spacing = 'md',
  title,
  eyebrow,
  lead,
  container = true
}: SectionProps) {
  return (
    <section className={cn(spacingMap[spacing], className)}>
      {container ? (
        <div className="container">
          {(title || eyebrow || lead) && (
            <div className="text-center mb-12">
              {eyebrow && (
                <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="text-h2 font-outfit text-text-900 mb-4">
                  {title}
                </h2>
              )}
              {lead && (
                <p className="text-lg text-text-700 max-w-3xl mx-auto">
                  {lead}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      ) : (
        <>
          {(title || eyebrow || lead) && (
            <div className="text-center mb-12">
              {eyebrow && (
                <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="text-h2 font-outfit text-text-900 mb-4">
                  {title}
                </h2>
              )}
              {lead && (
                <p className="text-lg text-text-700 max-w-3xl mx-auto">
                  {lead}
                </p>
              )}
            </div>
          )}
          {children}
        </>
      )}
    </section>
  );
}
