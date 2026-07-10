import { useEffect } from 'react'

const SITE_URL = 'https://www.frameandlight.studio'

function setMetaContent(selector, content) {
  const element = document.querySelector(selector)
  if (element) element.setAttribute('content', content)
}

function useSeo({ title, description, path = '/' }) {
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
  }, [title, description, path])
}

export default useSeo
