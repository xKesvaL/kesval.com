export const PAGES = {
  "lang=locale": (params: {[lang=locale: string}, sp?: Record<string, string>) => { return `/${params.${params.lang=locale}}${appendSp(sp)}` },
  "lang=locale_about": (params: {[lang=locale: string}, sp?: Record<string, string>) => { return `/${params.${params.lang=locale}}/about${appendSp(sp)}` },
  "lang=locale_blog": (params: {[lang=locale: string}, sp?: Record<string, string>) => { return `/${params.${params.lang=locale}}/blog${appendSp(sp)}` },
  "lang=locale_work": (params: {[lang=locale: string}, sp?: Record<string, string>) => { return `/${params.${params.lang=locale}}/work${appendSp(sp)}` }
}

export const SERVERS = {
  "assets_site.webmanifest": (sp?: Record<string, string>) => { return `/(assets)/site.webmanifest${appendSp(sp)}` },
  "assets_sitemap.xml": (sp?: Record<string, string>) => { return `/(assets)/sitemap.xml${appendSp(sp)}` }
}

export const ACTIONS = {
  
}

const appendSp = (sp?: Record<string, string>) => {
  if (sp === undefined) return ''
  return `?${new URLSearchParams(sp || {}).toString()}`
}
