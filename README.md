# VVS Komplett - Stockholm Plumbing Services

This is a [Next.js](https://nextjs.org) project for Komplett VVS i Sthlm AB, a professional plumbing company in Stockholm.

## 🌐 Internationalization (i18n)

This project uses `next-intl` for Swedish/English translations.

### Translation Structure
- **Swedish (sv)**: Primary language, fully optimized for SEO
- **English (en)**: Complete translations for international customers
- **Default locale**: Swedish (`sv`)
- **URL structure**: `/sv/...` and `/en/...`

### Maintaining English Translations

**Current Approach**: Manual translation of Swedish content to English
- All content is written in Swedish first (`src/messages/sv.json`)
- English translations are maintained in `src/messages/en.json`
- Both languages have full, SEO-optimized content

**For Future Updates**:
1. Update Swedish content in `src/messages/sv.json`
2. **CRITICAL**: Always update English content in `src/messages/en.json` to match
3. Test both languages: `http://localhost:3000/sv` and `http://localhost:3000/en`

**⚠️ Translation Sync Reminder**:
- **NEVER** commit changes to `sv.json` without updating `en.json`
- Both language files must have identical key structures
- Missing English translations will cause runtime errors
- Use the same namespace structure in both files

**Auto-Translation Workflow** (Optional):
See "Auto-Translation Setup" section below for automated translation workflow.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Dev tip: routing/i18n changes and browser cache
- After changing locales, routes, or assets, use a fresh Incognito window or clear cache for `http://localhost:3000` to avoid stale client chunks.
- If you see mysterious `webpack ... reading 'call'` errors, stop dev, delete `.next/`, and relaunch `pnpm dev`.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🤖 Auto-Translation Setup (Optional)

To set up automatic translation from Swedish to English:

### Option 1: AI-Powered Translation (Recommended)

1. **Install dependencies**:
```bash
pnpm add openai
```

2. **Create translation script**:
```bash
# Create scripts directory
mkdir scripts
```

3. **Add to package.json**:
```json
{
  "scripts": {
    "translate": "tsx scripts/translate-content.ts"
  }
}
```

4. **Set up environment variable**:
```bash
# .env.local
OPENAI_API_KEY=your_openai_api_key
```

5. **Usage**:
```bash
# Translate Swedish content to English
pnpm translate

# This will:
# 1. Read src/messages/sv.json
# 2. Translate to English using AI
# 3. Update src/messages/en.json
# 4. Preserve structure and context
```

### Option 2: Google Translate API

1. **Install dependencies**:
```bash
pnpm add @google-cloud/translate
```

2. **Set up Google Cloud credentials**
3. **Create translation script with Google Translate API**

### Option 3: GitHub Actions (Fully Automated)

1. **Create `.github/workflows/translate.yml`**
2. **Auto-translate on every push to main**
3. **Create PR with translated content**

### Benefits of Auto-Translation:
- ✅ Consistent terminology
- ✅ Faster content updates
- ✅ Reduced manual work
- ✅ Maintains context and industry terms
- ✅ Can be reviewed before merging

### Manual Review Process:
1. AI translates Swedish → English
2. Developer reviews translations
3. Adjusts industry-specific terms if needed
4. Commits both languages together

## 🖼️ Image Policy and Brand Asset Management

This project follows Next.js best practices for image optimization and brand asset management.

### Current Brand Assets

**Logo Files:**
- **Primary Logo**: `/public/logokomplett.webp` (40x40px in header, 24x24px in footer)
- **Usage**: Company logo used in header and footer components
- **Format**: WebP with transparency support

**Content Images:**
- **Hero Image**: `/public/images/vvsror.jpg` (plumbing pipes image)
- **Usage**: Main hero section on homepage
- **Format**: JPG optimized for web

**Icon Assets:**
- **Lucide Icons**: Used throughout the site (imported from `lucide-react`)
- **SVG Icons**: Custom icons in `/public/` (file.svg, globe.svg, etc.)

### Image Optimization Standards

**Next.js Image Component:**
```tsx
import Image from 'next/image';

// ✅ Correct usage
<Image
  src="/logokomplett.webp"
  alt={t('header.logoAlt')}
  width={40}
  height={40}
  priority // For above-the-fold images
/>

// ✅ Hero images with proper aspect ratios
<Image
  src="/images/vvsror.jpg"
  alt={t('home.hero.imageAlt')}
  fill
  className="object-cover"
  priority
/>
```

**Performance Requirements:**
- ✅ All images use `next/image` for automatic optimization
- ✅ Proper `alt` attributes with translations
- ✅ `priority` flag for above-the-fold images
- ✅ Responsive sizing with `fill` and proper aspect ratios
- ✅ WebP/AVIF format conversion (automatic via Next.js)

### How to Swap Logo/Brand Assets

**1. Replace Company Logo:**
```bash
# Replace the logo file
cp your-new-logo.webp public/logokomplett.webp

# Ensure dimensions are appropriate:
# - Header: 40x40px minimum
# - Footer: 24x24px minimum
# - Format: SVG with transparency
```

**2. Update Hero Images:**
```bash
# Replace hero image
cp your-new-hero.jpg public/images/vvsror.jpg

# Recommended specs:
# - Dimensions: 1200x630px (16:9 aspect ratio)
# - Format: JPG or WebP
# - File size: <500KB
# - Quality: 80-85% compression
```

**3. Add New Content Images:**
```bash
# Add to images directory
mkdir -p public/images
cp your-image.jpg public/images/

# Update component imports
# In your component:
<Image
  src="/images/your-image.jpg"
  alt={t('your.translation.key')}
  width={800}
  height={600}
/>
```

### Image Naming Convention

**File Structure:**
```
public/
├── logokomplett.webp         # Company logo
├── images/
│   ├── vvsror.jpg           # Hero/feature images
│   ├── service-*.jpg        # Service-specific images
│   └── team-*.jpg           # Team/company images
└── icons/                   # Custom SVG icons
    ├── file.svg
    └── globe.svg
```

**Naming Rules:**
- **Logos**: `logokomplett.webp` (keep consistent for easy replacement)
- **Content Images**: `descriptive-name.jpg` (kebab-case)
- **Service Images**: `service-{service-name}.jpg`
- **Team Images**: `team-{person-name}.jpg`

### Translation Integration

**Alt Text Management:**
```json
// src/messages/sv.json
{
  "header": {
    "logoAlt": "Komplett VVS i Sthlm AB logotyp"
  },
  "home": {
    "hero": {
      "imageAlt": "Professionell VVS-installation i Stockholm"
    }
  }
}

// src/messages/en.json
{
  "header": {
    "logoAlt": "Komplett VVS i Sthlm AB logo"
  },
  "home": {
    "hero": {
      "imageAlt": "Professional plumbing installation in Stockholm"
    }
  }
}
```

### Performance Monitoring

**Image Optimization Checklist:**
- [ ] All images use `next/image` component
- [ ] Proper `alt` attributes with translations
- [ ] `priority` flag on above-the-fold images
- [ ] Responsive sizing with proper aspect ratios
- [ ] File sizes optimized (<500KB for hero images)
- [ ] WebP/AVIF formats enabled (automatic)

**Testing Image Changes:**
```bash
# 1. Replace image file
cp new-logo.webp public/logokomplett.webp

# 2. Test build
pnpm build

# 3. Test in development
pnpm dev

# 4. Verify in browser
# - Check Network tab for optimized images
# - Verify alt text displays correctly
# - Test responsive behavior
```

### Brand Asset Guidelines

**Logo Requirements:**
- **Format**: PNG with transparency
- **Minimum Size**: 40x40px (header), 24x24px (footer)
- **Aspect Ratio**: Square (1:1) preferred
- **Background**: Transparent or white
- **Style**: Clean, professional, readable at small sizes

**Content Image Requirements:**
- **Format**: JPG (photos) or PNG (graphics with transparency)
- **Dimensions**: 1200x630px minimum for hero images
- **File Size**: <500KB for optimal loading
- **Quality**: High enough for web display, optimized for speed
- **Content**: Professional, relevant to VVS/plumbing services

## 🚀 Deployment & Quality Assurance

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### 📋 Quality Assurance Checklist

Before deploying, please review our comprehensive [QA Checklist](./QA_CHECKLIST.md) to ensure:

- ✅ All functionality works correctly
- ✅ Performance meets standards
- ✅ SEO and metadata are optimized
- ✅ Accessibility requirements are met
- ✅ Mobile responsiveness is verified
- ✅ Translations are complete and accurate

**Important**: Complete the pre-deployment checklist before every release to maintain high quality standards.
