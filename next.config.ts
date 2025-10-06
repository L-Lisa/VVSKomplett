import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

// Add image qualities allowlist to suppress Next.js 16 warning and allow quality=60
const nextConfig: NextConfig & { images?: { qualities?: number[] } } = {
  images: {
    qualities: [60, 75]
  }
};

export default withNextIntl(nextConfig);
