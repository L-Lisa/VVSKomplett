import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from '../contact-form'

// Mock next-intl
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      'form.name': 'Namn',
      'form.email': 'E-post',
      'form.phone': 'Telefon',
      'form.message': 'Meddelande',
      'form.submit': 'Skicka',
      'form.placeholders.name': 'Ditt namn',
      'form.placeholders.email': 'din@email.se',
      'form.placeholders.phone': '070-123 45 67',
      'form.placeholders.message': 'Beskriv ditt VVS-behov...',
      'feedback.success': 'Tack för ditt meddelande! Vi återkommer inom 24\u00A0timmar.',
      'feedback.error': 'Något gick fel. Vänligen försök igen eller ring oss direkt.',
      'feedback.sending': 'Skickar...',
    }
    return translations[key] ?? key
  },
}))

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    
    expect(screen.getByLabelText('Namn *')).toBeInTheDocument()
    expect(screen.getByLabelText('E-post *')).toBeInTheDocument()
    expect(screen.getByLabelText('Telefon')).toBeInTheDocument()
    expect(screen.getByLabelText('Meddelande *')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Skicka' })).toBeInTheDocument()
  })

  it('shows validation errors for required fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const submitButton = screen.getByRole('button', { name: 'Skicka' })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Namnet måste vara minst 2 tecken')).toBeInTheDocument()
      expect(screen.getByText('E-postadress krävs')).toBeInTheDocument()
      expect(screen.getByText('Meddelandet måste vara minst 10 tecken')).toBeInTheDocument()
    })
  })

  it('validates email format', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const emailInput = screen.getByLabelText('E-post *')
    await user.type(emailInput, 'invalid-email')
    await user.tab() // Trigger onBlur validation
    
    await waitFor(() => {
      expect(screen.getByText('Ogiltig e-postadress')).toBeInTheDocument()
    })
  })

  it('validates phone number format', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const phoneInput = screen.getByLabelText('Telefon')
    await user.type(phoneInput, 'invalid-phone')
    await user.tab() // Trigger onBlur validation
    
    await waitFor(() => {
      expect(screen.getByText('Ogiltigt telefonnummer. Använd formatet 070-123 45 67')).toBeInTheDocument()
    })
  })

  it('accepts valid phone number', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const phoneInput = screen.getByLabelText('Telefon')
    await user.type(phoneInput, '070-123 45 67')
    await user.tab() // Trigger onBlur validation
    
    await waitFor(() => {
      expect(screen.queryByText('Ogiltigt telefonnummer')).not.toBeInTheDocument()
    })
  })

  it('submits form with valid data', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    // Fill in valid form data
    await user.type(screen.getByLabelText('Namn *'), 'Test User')
    await user.type(screen.getByLabelText('E-post *'), 'test@example.com')
    await user.type(screen.getByLabelText('Meddelande *'), 'This is a test message with enough characters')
    
    const submitButton = screen.getByRole('button', { name: 'Skicka' })
    await user.click(submitButton)
    
    // Check for loading state
    expect(screen.getByText('Skickar...')).toBeInTheDocument()
    
    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText('Tack för ditt meddelande! Vi återkommer inom 24\u00A0timmar.')).toBeInTheDocument()
    }, { timeout: 3000 })
  })

  it('shows success message on successful submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    // Fill in valid form data
    await user.type(screen.getByLabelText('Namn *'), 'Test User')
    await user.type(screen.getByLabelText('E-post *'), 'test@example.com')
    await user.type(screen.getByLabelText('Meddelande *'), 'This is a test message with enough characters')
    
    const submitButton = screen.getByRole('button', { name: 'Skicka' })
    await user.click(submitButton)
    
    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText('Tack för ditt meddelande! Vi återkommer inom 24\u00A0timmar.')).toBeInTheDocument()
    }, { timeout: 3000 })
  })
})
