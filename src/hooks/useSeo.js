import { useEffect } from 'react'
import { SITE_URL } from '../config/env'

function setMetaContent(selector, content) {
  const element = document.querySelector(selector)
  if (element) element.setAttribute('content', content)
}

function setRobotsMeta(noIndex) {
  let element = document.querySelector('meta[name="robots"]')
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('name', 'robots')
    document.head.appendChild(element)
  }
  element.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow')
}

function useSeo({ title, description, path = '/', noIndex = false }) {
  useEffect(() => {
    if (title) {
      document.title = title
      setMetaContent('meta[property="og:title"]', title)
      setMetaContent('meta[name="twitter:title"]', title)
    }

    if (description) {
      setMetaContent('meta[name="description"]', description)
      setMetaContent('meta[property="og:description"]', description)
      setMetaContent('meta[name="twitter:description"]', description)
    }

    const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) canonicalLink.setAttribute('href', canonicalUrl)
    setMetaContent('meta[property="og:url"]', canonicalUrl)

    setRobotsMeta(noIndex)

    return () => setRobotsMeta(false)
  }, [title, description, path, noIndex])
}

export default useSeo
