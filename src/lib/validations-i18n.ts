import { z } from 'zod';

// Create validation schemas that accept translation functions
export function createContactFormSchema(t: (key: string) => string) {
  return z.object({
    name: z
      .string()
      .min(2, t('name.minLength'))
      .max(50, t('name.maxLength'))
      .regex(/^[a-zA-ZåäöÅÄÖ\s-]+$/, t('name.invalidCharacters')),
    
    email: z
      .string()
      .min(1, t('email.required'))
      .email(t('email.invalid'))
      .max(100, t('email.maxLength')),
    
    phone: z
      .string()
      .optional()
      .refine((val) => {
        if (!val || val.trim() === '') return true;
        // Swedish phone number pattern: 070-123 45 67 or 0701234567
        const phoneRegex = /^(\+46|0)[0-9\s-]{8,15}$/;
        return phoneRegex.test(val);
      }, t('phone.invalid')),
    
    message: z
      .string()
      .min(10, t('message.minLength'))
      .max(1000, t('message.maxLength'))
      .regex(/^[a-zA-ZåäöÅÄÖ0-9\s.,!?()-]+$/, t('message.invalidCharacters')),
  });
}

export function createNewsletterSchema(t: (key: string) => string) {
  return z.object({
    email: z
      .string()
      .min(1, t('email.required'))
      .email(t('email.invalid'))
      .max(100, t('email.maxLength')),
  });
}

export function createQuoteRequestSchema(t: (key: string) => string) {
  return z.object({
    name: z
      .string()
      .min(2, t('name.minLength'))
      .max(50, t('name.maxLength')),
    
    email: z
      .string()
      .min(1, t('email.required'))
      .email(t('email.invalid')),
    
    phone: z
      .string()
      .min(1, t('phone.required'))
      .regex(/^(\+46|0)[0-9\s-]{8,15}$/, t('phone.invalid')),
    
    service: z
      .string()
      .min(1, t('service.required')),
    
    description: z
      .string()
      .min(20, t('description.minLength'))
      .max(500, t('description.maxLength')),
    
    urgency: z
      .enum(['low', 'medium', 'high'])
      .refine((val) => ['low', 'medium', 'high'].includes(val), {
        message: t('urgency.required'),
      }),
  });
}

// Type exports
export type ContactFormData = z.infer<ReturnType<typeof createContactFormSchema>>;
export type NewsletterData = z.infer<ReturnType<typeof createNewsletterSchema>>;
export type QuoteRequestData = z.infer<ReturnType<typeof createQuoteRequestSchema>>;
