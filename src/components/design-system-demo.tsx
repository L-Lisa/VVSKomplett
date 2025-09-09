'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import ThemeSwitcher from '@/components/theme-switcher';

export function DesignSystemDemo() {
  return (
    <div className="container py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-h1 font-heading">Design System Demo</h1>
        <p className="text-text-700 text-lg max-w-2xl mx-auto">
          Showcasing the VVS website design system with OKLCH colors, typography, and components.
        </p>
        <div className="flex justify-center">
          <ThemeSwitcher />
        </div>
      </div>

      {/* Colors */}
      <section className="space-y-6">
        <h2 className="text-h2 font-heading">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-20 bg-primary rounded-lg"></div>
            <p className="text-sm font-medium">Primary</p>
            <p className="text-xs text-text-500">Royal Blue</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-accent rounded-lg"></div>
            <p className="text-sm font-medium">Accent</p>
            <p className="text-xs text-text-500">Orange</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-navy rounded-lg"></div>
            <p className="text-sm font-medium">Navy</p>
            <p className="text-xs text-text-500">Dark Blue</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-sky rounded-lg border"></div>
            <p className="text-sm font-medium">Sky</p>
            <p className="text-xs text-text-500">Light Blue</p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-6">
        <h2 className="text-h2 font-heading">Typography</h2>
        <div className="space-y-4">
          <div>
            <h1 className="text-h1 font-heading">Heading 1 - Main Title</h1>
            <p className="text-text-500 text-sm">Responsive clamp(2.5rem, 5vw, 3rem)</p>
          </div>
          <div>
            <h2 className="text-h2 font-heading">Heading 2 - Section Title</h2>
            <p className="text-text-500 text-sm">Responsive clamp(1.75rem, 4vw, 2rem)</p>
          </div>
          <div>
            <h3 className="text-h3 font-heading">Heading 3 - Subsection</h3>
            <p className="text-text-500 text-sm">Responsive clamp(1.25rem, 3vw, 1.375rem)</p>
          </div>
          <div>
            <p className="text-body">Body text - Inter font with 1.6 line height for optimal readability.</p>
            <p className="text-text-500 text-sm">1rem with 1.6 line height</p>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="space-y-6">
        <h2 className="text-h2 font-heading">Components</h2>
        
        {/* Buttons */}
        <div className="space-y-4">
          <h3 className="text-h3 font-heading">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        {/* Badges */}
        <div className="space-y-4">
          <h3 className="text-h3 font-heading">Badges</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          <h3 className="text-h3 font-heading">Cards</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Service Card</CardTitle>
                <CardDescription>VVS installation and maintenance services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-text-700">Professional plumbing services with guaranteed quality and reliability.</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Contact Card</CardTitle>
                <CardDescription>Get in touch with our team</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-text-700">24/7 emergency service available throughout Stockholm.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Form Elements */}
        <div className="space-y-4">
          <h3 className="text-h3 font-heading">Form Elements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-text-900">Input Field</label>
                <Input placeholder="Enter your message..." />
              </div>
              <div>
                <label className="text-sm font-medium text-text-900">Textarea</label>
                <Textarea placeholder="Enter detailed message..." />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="notifications" />
                <label htmlFor="notifications" className="text-sm font-medium text-text-900">
                  Enable notifications
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shadows and Effects */}
      <section className="space-y-6">
        <h2 className="text-h2 font-heading">Shadows & Effects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded-lg shadow-xs">
            <h4 className="font-semibold mb-2">Extra Small</h4>
            <p className="text-sm text-text-600">shadow-xs</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Small</h4>
            <p className="text-sm text-text-600">shadow-sm</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-md">
            <h4 className="font-semibold mb-2">Medium</h4>
            <p className="text-sm text-text-600">shadow-md</p>
          </div>
        </div>
      </section>
    </div>
  );
}
