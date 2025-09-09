import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Namnet måste vara minst 2 tecken')
    .max(50, 'Namnet får inte vara längre än 50 tecken')
    .regex(/^[a-zA-ZåäöÅÄÖ\s-]+$/, 'Namnet får endast innehålla bokstäver, mellanslag och bindestreck'),
  
  email: z
    .string()
    .min(1, 'E-postadress krävs')
    .email('Ogiltig e-postadress')
    .max(100, 'E-postadressen får inte vara längre än 100 tecken'),
  
  phone: z
    .string()
    .optional()
    .refine((val) => {
      if (!val || val.trim() === '') return true;
      // Swedish phone number pattern: 070-123 45 67 or 0701234567
      const phoneRegex = /^(\+46|0)[0-9\s-]{8,15}$/;
      return phoneRegex.test(val);
    }, 'Ogiltigt telefonnummer. Använd formatet 070-123 45 67'),
  
  message: z
    .string()
    .min(10, 'Meddelandet måste vara minst 10 tecken')
    .max(1000, 'Meddelandet får inte vara längre än 1000 tecken')
    .regex(/^[a-zA-ZåäöÅÄÖ0-9\s.,!?()-]+$/, 'Meddelandet innehåller ogiltiga tecken'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Newsletter signup validation schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, 'E-postadress krävs')
    .email('Ogiltig e-postadress')
    .max(100, 'E-postadressen får inte vara längre än 100 tecken'),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

// Quote request validation schema
export const quoteRequestSchema = z.object({
  name: z
    .string()
    .min(2, 'Namnet måste vara minst 2 tecken')
    .max(50, 'Namnet får inte vara längre än 50 tecken'),
  
  email: z
    .string()
    .min(1, 'E-postadress krävs')
    .email('Ogiltig e-postadress'),
  
  phone: z
    .string()
    .min(1, 'Telefonnummer krävs')
    .regex(/^(\+46|0)[0-9\s-]{8,15}$/, 'Ogiltigt telefonnummer'),
  
  service: z
    .string()
    .min(1, 'Välj en tjänst'),
  
  description: z
    .string()
    .min(20, 'Beskrivningen måste vara minst 20 tecken')
    .max(500, 'Beskrivningen får inte vara längre än 500 tecken'),
  
  urgency: z
    .enum(['low', 'medium', 'high'])
    .refine((val) => ['low', 'medium', 'high'].includes(val), {
      message: 'Välj brådska',
    }),
});

export type QuoteRequestData = z.infer<typeof quoteRequestSchema>;
