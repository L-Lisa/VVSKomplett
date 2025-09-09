import { contactFormSchema, newsletterSchema, quoteRequestSchema } from '../validations'

describe('Validation Schemas', () => {
  describe('contactFormSchema', () => {
    it('validates correct contact form data', () => {
      const validData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '070-123 45 67',
        message: 'This is a test message with enough characters'
      }

      const result = contactFormSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('validates contact form without phone', () => {
      const validData = {
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message with enough characters'
      }

      const result = contactFormSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('rejects invalid name', () => {
      const invalidData = {
        name: 'A', // Too short
        email: 'test@example.com',
        message: 'This is a test message with enough characters'
      }

      const result = contactFormSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        const firstIssue = result.error.issues[0]
        expect(firstIssue?.message).toBe('Namnet måste vara minst 2 tecken')
      }
    })

    it('rejects invalid email', () => {
      const invalidData = {
        name: 'Test User',
        email: 'invalid-email',
        message: 'This is a test message with enough characters'
      }

      const result = contactFormSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        const firstIssue = result.error.issues[0]
        expect(firstIssue?.message).toBe('Ogiltig e-postadress')
      }
    })

    it('rejects invalid phone number', () => {
      const invalidData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: 'invalid-phone',
        message: 'This is a test message with enough characters'
      }

      const result = contactFormSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        const firstIssue = result.error.issues[0]
        expect(firstIssue?.message).toBe('Ogiltigt telefonnummer. Använd formatet 070-123 45 67')
      }
    })

    it('rejects message that is too short', () => {
      const invalidData = {
        name: 'Test User',
        email: 'test@example.com',
        message: 'Too short'
      }

      const result = contactFormSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        const firstIssue = result.error.issues[0]
        expect(firstIssue?.message).toBe('Meddelandet måste vara minst 10 tecken')
      }
    })

    it('rejects message with invalid characters', () => {
      const invalidData = {
        name: 'Test User',
        email: 'test@example.com',
        message: 'Message with <script>alert("xss")</script>'
      }

      const result = contactFormSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        const firstIssue = result.error.issues[0]
        expect(firstIssue?.message).toBe('Meddelandet innehåller ogiltiga tecken')
      }
    })
  })

  describe('newsletterSchema', () => {
    it('validates correct newsletter data', () => {
      const validData = {
        email: 'test@example.com'
      }

      const result = newsletterSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('rejects invalid email', () => {
      const invalidData = {
        email: 'invalid-email'
      }

      const result = newsletterSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  describe('quoteRequestSchema', () => {
    it('validates correct quote request data', () => {
      const validData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '070-123 45 67',
        service: 'nyinstallation',
        description: 'This is a detailed description of the service needed with enough characters',
        urgency: 'medium' as const
      }

      const result = quoteRequestSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('rejects invalid urgency', () => {
      const invalidData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '070-123 45 67',
        service: 'nyinstallation',
        description: 'This is a detailed description of the service needed with enough characters',
        urgency: 'invalid' as never
      }

      const result = quoteRequestSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })
})
