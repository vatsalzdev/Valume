import { useEffect } from 'react'

interface BreadcrumbItem {
  name: string
  url: string
}

interface SEOProps {
  title: string
  description: string
  canonicalUrl: string
  ogType?: string
  ogImage?: string
  breadcrumbs?: BreadcrumbItem[]
  noIndex?: boolean
}

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://valume.studio/hero_cinematic.jpg',
  breadcrumbs,
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    document.title = title

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement(selector.startsWith('meta') ? 'meta' : 'link')
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    if (noIndex) {
      setMeta('meta[name="robots"]', 'content', 'noindex, nofollow')
    } else {
      setMeta('meta[name="robots"]', 'content', 'index, follow')
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[name="title"]', 'content', title)
    setMeta('link[rel="canonical"]', 'href', canonicalUrl)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', canonicalUrl)
    setMeta('meta[property="og:type"]', 'content', ogType)
    setMeta('meta[property="og:site_name"]', 'content', 'Valume')
    setMeta('meta[property="og:image"]', 'content', ogImage)
    setMeta('meta[property="twitter:title"]', 'content', title)
    setMeta('meta[property="twitter:description"]', 'content', description)
    setMeta('meta[property="twitter:url"]', 'content', canonicalUrl)
    setMeta('meta[property="twitter:image"]', 'content', ogImage)

    // Per-page WebPage JSON-LD schema
    const scriptId = 'valume-page-schema'
    let script = document.getElementById(scriptId) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }

    const schema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      name: title,
      description,
      url: canonicalUrl,
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://valume.studio/#website',
        name: 'Valume',
        url: 'https://valume.studio/'
      }
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      schema.breadcrumb = {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: b.name,
          item: b.url
        }))
      }
    }

    script.textContent = JSON.stringify(schema, null, 2)
  }, [title, description, canonicalUrl, ogType, ogImage, breadcrumbs, noIndex])

  return null
}
