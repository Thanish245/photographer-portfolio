const DEFAULT_SITE_URL = 'https://photographer-portfolio-5vclv3x60-thanizh.vercel.app'

export const SITE_URL = import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

export const resendConfig = {
  apiKey: import.meta.env.VITE_RESEND_API_KEY,
}
