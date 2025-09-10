import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
}

export interface Testimonials3Props {
  testimonials: Testimonial[];
  className?: string;
}

export function Testimonials3({ testimonials, className }: Testimonials3Props) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6', className)}>
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="card-hover hover:shadow-lg transition-shadow navy-border"
        >
          <CardContent className="pt-6">
            <Quote className="h-8 w-8 text-[#F97316] mb-4" />
            <blockquote className="text-text-700 mb-4 italic">
              &quot;{testimonial.quote}&quot;
            </blockquote>
            <div className="text-sm">
              <div className="font-semibold navy-text">
                {testimonial.author}
              </div>
              {testimonial.role && (
                <div className="text-text-500">
                  {testimonial.role}
                  {testimonial.company && `, ${testimonial.company}`}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
