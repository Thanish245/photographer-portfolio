import { useEffect, useState } from 'react'

function getPathname() {
  return window.location.pathname.replace(/\/+$/, '') || '/'
}

function usePathname() {
  const [pathname, setPathname] = useState(() =>
    typeof window === 'undefined' ? '/' : getPathname(),
  )

  useEffect(() => {
    const handlePopState = () => setPathname(getPathname())

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return pathname
}

export function navigateTo(pathname) {
  const nextPathname = pathname.replace(/\/+$/, '') || '/'
  if (getPathname() === nextPathname) return

  window.history.pushState({}, '', nextPathname)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export default usePathname
