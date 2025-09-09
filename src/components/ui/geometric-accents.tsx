'use client';

interface GeometricAccentsProps {
  className?: string;
  variant?: 'corner' | 'diagonal' | 'border';
  color?: 'primary' | 'secondary' | 'gradient';
}

export function GeometricAccents({ 
  className = '', 
  variant = 'corner',
  color = 'gradient'
}: GeometricAccentsProps) {
  const getColorClasses = () => {
    switch (color) {
      case 'primary':
        return 'text-[#1f398a]/10';
      case 'secondary':
        return 'text-[#F97316]/10';
      case 'gradient':
        return 'text-transparent bg-gradient-to-r from-[#1f398a]/10 to-[#F97316]/10 bg-clip-text';
      default:
        return 'text-transparent bg-gradient-to-r from-[#1f398a]/10 to-[#F97316]/10 bg-clip-text';
    }
  };

  if (variant === 'corner') {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`}>
        {/* Top-right corner */}
        <div className="absolute top-0 right-0 w-16 h-16">
          <div className={`w-full h-0.5 ${getColorClasses()}`} style={{ background: 'linear-gradient(90deg, rgba(31, 57, 138, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)' }} />
          <div className={`w-0.5 h-full ${getColorClasses()}`} style={{ background: 'linear-gradient(180deg, rgba(31, 57, 138, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)' }} />
        </div>
        
        {/* Bottom-left corner */}
        <div className="absolute bottom-0 left-0 w-16 h-16">
          <div className={`w-full h-0.5 ${getColorClasses()}`} style={{ background: 'linear-gradient(90deg, rgba(249, 115, 22, 0.1) 0%, rgba(31, 57, 138, 0.1) 100%)' }} />
          <div className={`w-0.5 h-full ${getColorClasses()}`} style={{ background: 'linear-gradient(180deg, rgba(249, 115, 22, 0.1) 0%, rgba(31, 57, 138, 0.1) 100%)' }} />
        </div>
      </div>
    );
  }

  if (variant === 'diagonal') {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`}>
        {/* Diagonal line from top-left to bottom-right */}
        <div 
          className="absolute top-0 left-0 w-full h-0.5 origin-left transform rotate-12"
          style={{ background: 'linear-gradient(90deg, rgba(31, 57, 138, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)' }}
        />
        {/* Diagonal line from top-right to bottom-left */}
        <div 
          className="absolute top-0 right-0 w-full h-0.5 origin-right transform -rotate-12"
          style={{ background: 'linear-gradient(90deg, rgba(249, 115, 22, 0.1) 0%, rgba(31, 57, 138, 0.1) 100%)' }}
        />
      </div>
    );
  }

  if (variant === 'border') {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`}>
        {/* Top border */}
        <div 
          className="absolute top-0 left-0 w-full h-0.5"
          style={{ background: 'linear-gradient(90deg, rgba(31, 57, 138, 0.1) 0%, rgba(249, 115, 22, 0.1) 50%, rgba(31, 57, 138, 0.1) 100%)' }}
        />
        {/* Bottom border */}
        <div 
          className="absolute bottom-0 left-0 w-full h-0.5"
          style={{ background: 'linear-gradient(90deg, rgba(249, 115, 22, 0.1) 0%, rgba(31, 57, 138, 0.1) 50%, rgba(249, 115, 22, 0.1) 100%)' }}
        />
      </div>
    );
  }

  return null;
}
