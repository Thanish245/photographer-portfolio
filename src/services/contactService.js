const SIMULATED_LATENCY_MS = 900

async function stubProvider(payload) {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS))
  console.info('[contactService] stub provider received submission', payload)
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
  try {
    return await activeProvider(payload)
  } catch (error) {
    throw new Error(error?.message || 'Unable to send your message right now. Please try again.', { cause: error })
  }
}

export { submitContactForm, setContactFormProvider }
