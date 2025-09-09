'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { useTranslations } from 'next-intl';

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export function ContactForm() {
  const t = useTranslations('contact');
  const [formState, setFormState] = useState<FormState>({ status: 'idle' });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState({ status: 'loading' });
    
    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your API
      console.log('Form data:', data);
      
      setFormState({ 
        status: 'success', 
        message: t('feedback.success') 
      });
      reset();
    } catch {
      setFormState({ 
        status: 'error', 
        message: t('feedback.error') 
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-900 mb-2">
          {t('form.name')} *
        </label>
        <Input
          id="name"
          {...register('name')}
          placeholder={t('form.placeholders.name')}
          className={`w-full ${errors.name ? 'border-destructive' : ''}`}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-900 mb-2">
          {t('form.email')} *
        </label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder={t('form.placeholders.email')}
          className={`w-full ${errors.email ? 'border-destructive' : ''}`}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text-900 mb-2">
          {t('form.phone')}
        </label>
        <Input
          id="phone"
          type="tel"
          {...register('phone')}
          placeholder={t('form.placeholders.phone')}
          className={`w-full ${errors.phone ? 'border-destructive' : ''}`}
          aria-invalid={errors.phone ? 'true' : 'false'}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-destructive flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-900 mb-2">
          {t('form.message')} *
        </label>
        <Textarea
          id="message"
          {...register('message')}
          rows={6}
          placeholder={t('form.placeholders.message')}
          className={`w-full ${errors.message ? 'border-destructive' : ''}`}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button 
        type="submit" 
        size="lg" 
        className="w-full" 
        disabled={isSubmitting || formState.status === 'loading'}
      >
        {isSubmitting || formState.status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            {t('feedback.sending')}
          </>
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            {t('form.submit')}
          </>
        )}
      </Button>

      {/* Status Messages */}
      {formState.status === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
            <p className="text-sm text-green-800">{formState.message}</p>
          </div>
        </div>
      )}

      {formState.status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
            <p className="text-sm text-red-800">{formState.message}</p>
          </div>
        </div>
      )}
    </form>
  );
}
