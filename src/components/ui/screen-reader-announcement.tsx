'use client';

import { useEffect, useState } from 'react';

interface ScreenReaderAnnouncementProps {
  message: string;
  delay?: number;
}

export function ScreenReaderAnnouncement({ message, delay = 0 }: ScreenReaderAnnouncementProps) {
  const [announced, setAnnounced] = useState(false);

  useEffect(() => {
    if (message && !announced) {
      const timeoutId = setTimeout(() => {
        setAnnounced(true);
      }, delay);
      return () => clearTimeout(timeoutId);
    }
    return undefined;
  }, [message, announced, delay]);

  if (!announced) {
    return null;
  }

  return (
    <div
      className="sr-only" // Visually hidden
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}
