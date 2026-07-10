import { useCallback, useState } from 'react'
import { submitContactForm } from '../services/contactService'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialValues = {
  name: '',
  email: '',
  project: '',
  details: '',
  // Honeypot: real users never see or fill this field. Any value here means
  // the submission almost certainly came from a bot.
  honeypot: '',
}

function validateField(field, value) {
  const trimmed = value.trim()

  switch (field) {
    case 'name':
      return trimmed.length >= 2 ? '' : 'Please enter your name.'
    case 'email':
      if (!trimmed) return 'Please enter your email.'
      return EMAIL_PATTERN.test(trimmed) ? '' : 'Please enter a valid email address.'
    case 'project':
      return trimmed.length >= 2 ? '' : 'Let us know what type of project this is.'
    case 'details':
      return trimmed.length >= 10 ? '' : 'Please share a few more details (at least 10 characters).'
    default:
      return ''
  }
}

function validateAll(values) {
  return Object.keys(initialValues).reduce((errors, field) => {
    const message = validateField(field, values[field])
    if (message) errors[field] = message
    return errors
  }, {})
}

function useContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const isSubmitting = status === 'submitting'

  const handleChange = useCallback((event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => (current[name] ? { ...current, [name]: '' } : current))
  }, [])

  const handleBlur = useCallback((event) => {
    const { name, value } = event.target
    const message = validateField(name, value)
    setErrors((current) => ({ ...current, [name]: message }))
  }, [])

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()

      if (isSubmitting) return

      const nextErrors = validateAll(values)
      setErrors(nextErrors)
      if (Object.keys(nextErrors).length > 0) return

      setStatus('submitting')
      setErrorMessage('')

      try {
        await submitContactForm(values)
        setStatus('success')
        setValues(initialValues)
        setErrors({})
      } catch (error) {
        setStatus('error')
        setErrorMessage(error.message)
      }
    },
    [isSubmitting, values],
  )

  return {
    values,
    errors,
    status,
    errorMessage,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  }
}

export default useContactForm
