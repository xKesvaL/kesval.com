export const PAGES = {
  "lang_locale_\": (params?: {lang?: string | number}, sp?: Record<string, string | number>) =>  { return `/${params?.lang ?? ''}\${appendSp(sp)}` },
  "lang_locale_\about\": (params?: {lang?: string | number}, sp?: Record<string, string | number>) =>  { return `/${params?.lang ?? ''}\about\${appendSp(sp)}` },
  "lang_locale_\blog\": (params?: {lang?: string | number}, sp?: Record<string, string | number>) =>  { return `/${params?.lang ?? ''}\blog\${appendSp(sp)}` },
  "lang_locale_\blog\_slug_\": (params: {lang?: string | number,slug: string | number}, sp?: Record<string, string | number>) =>  { return `/${params?.lang ?? ''}\blog\${params.slug}\${appendSp(sp)}` },
  "lang_locale_\work\": (params?: {lang?: string | number}, sp?: Record<string, string | number>) =>  { return `/${params?.lang ?? ''}\work\${appendSp(sp)}` }
}

export const SERVERS = {
  "assets_\site.webmanifest\": (sp?: Record<string, string | number>) =>  { return `/\site.webmanifest\${appendSp(sp)}` },
  "assets_\sitemap.xml\": (sp?: Record<string, string | number>) =>  { return `/\sitemap.xml\${appendSp(sp)}` }
}

export const ACTIONS = {
  
}

const appendSp = (sp?: Record<string, string | number>) => {
  if (sp === undefined) return ''
  return `?${new URLSearchParams(sp as Record<string, string> || {}).toString()}`
}
