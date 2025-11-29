// Minimal SEO helpers: set page meta tags and inject JSON-LD
export function setMeta({ title, description, url, image, canonical } = {}) {
  if (title) document.title = title

  const upsert = (attrName, attrType = 'name') => (value) => {
    if (!value) {
      const existing = document.querySelector(`meta[${attrType}="${attrName}"]`)
      if (existing) existing.remove()
      return
    }
    let el = document.querySelector(`meta[${attrType}="${attrName}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attrType, attrName)
      document.head.appendChild(el)
    }
    el.setAttribute('content', value)
  }

  const setName = upsert('description', 'name')
  const setOgTitle = upsert('og:title', 'property')
  const setOgDesc = upsert('og:description', 'property')
  const setOgUrl = upsert('og:url', 'property')
  const setOgImage = upsert('og:image', 'property')

  setName(description)
  setOgTitle(title)
  setOgDesc(description)
  setOgUrl(url)
  setOgImage(image)

  // canonical
  if (canonical) {
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonical)
  }
}

export function addJsonLd(obj, id = 'json-ld') {
  if (!obj) return
  let script = document.getElementById(id)
  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = id
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(obj)
}

export default {
  setMeta,
  addJsonLd
}
