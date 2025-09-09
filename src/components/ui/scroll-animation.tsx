'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'bottom' | 'left' | 'right';
}

export function ScrollAnimation({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 300,
  direction = 'bottom'
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  const getTransform = () => {
    switch (direction) {
      case 'bottom':
        return isVisible ? 'translateY(0)' : 'translateY(30px)';
      case 'left':
        return isVisible ? 'translateX(0)' : 'translateX(-30px)';
      case 'right':
        return isVisible ? 'translateX(0)' : 'translateX(30px)';
      default:
        return isVisible ? 'translateY(0)' : 'translateY(30px)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      }}
    >
      {children}
    </div>
  );
}
