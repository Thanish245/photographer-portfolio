import logger from '../utils/logger'

const SIMULATED_LATENCY_MS = 900

// Client-side placeholder only. A real deployment must also rate-limit on the
// server/edge (per IP or API key) — this just stops a chatty browser tab from
// hammering the endpoint and gives the UI something sensible to show.
const MIN_SUBMIT_INTERVAL_MS = 15_000
let lastSubmittedAt = 0

async function stubProvider(payload) {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS))
  logger.info('[contactService] stub provider received submission', payload)
  return { success: true }
}

let activeProvider = stubProvider

/**
 * Swap the delivery mechanism (EmailJS, Resend, a backend API, etc.) without
 * touching any calling code. A provider receives the form payload and either
 * resolves or throws; submitContactForm normalizes any failure into an Error.
 */
function setContactFormProvider(provider) {
  activeProvider = provider
}

async function submitContactForm(payload) {
  const { honeypot, ...fields } = payload

  // Spam bots fill every field, including ones hidden from real users.
  // Pretend to succeed without actually sending anything.
  if (honeypot) {
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS))
    return { success: true }
  }

  const now = Date.now()
  if (now - lastSubmittedAt < MIN_SUBMIT_INTERVAL_MS) {
    throw new Error('You are submitting too quickly. Please wait a moment and try again.')
  }

  try {
    const result = await activeProvider(fields)
    lastSubmittedAt = now
    return result
  } catch (error) {
    logger.error('[contactService] provider failed', error)
    throw new Error(error?.message || 'Unable to send your message right now. Please try again.', { cause: error })
  }
}

export { submitContactForm, setContactFormProvider }
