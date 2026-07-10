/**
 * Single choke point for app logging. Swap the implementation here (Sentry,
 * LogRocket, a backend endpoint, etc.) without touching every call site.
 */
const isDev = import.meta.env.DEV

function info(...args) {
  if (isDev) console.info(...args)
}

function warn(...args) {
  console.warn(...args)
}

function error(...args) {
  console.error(...args)
}

export const logger = { info, warn, error }
export default logger
