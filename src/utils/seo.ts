import { Metadata } from 'next'
import { Seo } from '@/types/api'

export interface DynamicSEOProps {
  seo: Seo
  baseUrl?: string
  currentPath?: string
}

export function generateDynamicMetadata({ 
  seo, 
  baseUrl = 'https://10minuteschool.com',
  currentPath = '/'
}: DynamicSEOProps): Metadata {
  // Extract Open Graph meta tags from defaultMeta
  const ogMeta = seo.defaultMeta.filter(meta => meta.value.startsWith('og:'))
  const ogTitle = ogMeta.find(meta => meta.value === 'og:title')?.content
  const ogDescription = ogMeta.find(meta => meta.value === 'og:description')?.content
  const ogImage = ogMeta.find(meta => meta.value === 'og:image')?.content
  const ogImageSecureUrl = ogMeta.find(meta => meta.value === 'og:image:secure_url')?.content
  const ogImageType = ogMeta.find(meta => meta.value === 'og:image:type')?.content
  const ogType = ogMeta.find(meta => meta.value === 'og:type')?.content
  const ogLocale = ogMeta.find(meta => meta.value === 'og:locale')?.content
  const ogImageAlt = ogMeta.find(meta => meta.value === 'og:image:alt')?.content
  const ogUrl = ogMeta.find(meta => meta.value === 'og:url')?.content

  // Parse JSON-LD schemas (used in generateStructuredData function)
  seo.schema
    .filter(schema => schema.type === 'ld-json' && schema.meta_value)
    .forEach(schema => {
      try {
        JSON.parse(schema.meta_value)
      } catch (error) {
        console.warn('Failed to parse JSON-LD schema:', error)
      }
    })

  const metadata: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: '10 Minute School' }],
    creator: '10 Minute School',
    publisher: '10 Minute School',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentPath,
      languages: {
        'en': currentPath,
        'bn': `${currentPath}?lang=bn`,
      },
    },
    openGraph: {
      title: ogTitle || seo.title,
      description: ogDescription || seo.description,
      url: ogUrl || `${baseUrl}${currentPath}`,
      siteName: '10 Minute School',
      images: ogImage || ogImageSecureUrl ? [
        {
          url: ogImage || ogImageSecureUrl || '',
          width: 1200,
          height: 630,
          alt: ogImageAlt || seo.title,
          type: ogImageType ? `image/${ogImageType}` : 'image/jpg',
        },
      ] : undefined,
      locale: ogLocale || 'en_US',
      type: (ogType as 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other') || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ogImage || ogImageSecureUrl ? [{ url: (ogImage || ogImageSecureUrl) as string }] : undefined,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  }

  return metadata
}

export function generateStructuredData(schemas: Seo['schema']): string[] {
  return schemas
    .filter(schema => schema.type === 'ld-json' && schema.meta_value)
    .map(schema => schema.meta_value)
    .filter(Boolean)
}

export function generateMetaTags(defaultMeta: Seo['defaultMeta']): Array<{ name?: string; property?: string; content: string }> {
  return defaultMeta.map(meta => {
    if (meta.type === 'name') {
      return { name: meta.value, content: meta.content }
    } else if (meta.type === 'property') {
      return { property: meta.value, content: meta.content }
    }
    return { name: meta.value, content: meta.content }
  })
}

// Helper function to merge page-specific SEO with default SEO
export function mergeSEO(defaultSEO: Seo, pageSEO: Partial<Seo>): Seo {
  return {
    title: pageSEO.title || defaultSEO.title,
    description: pageSEO.description || defaultSEO.description,
    keywords: [...(defaultSEO.keywords || []), ...(pageSEO.keywords || [])],
    defaultMeta: [
      ...defaultSEO.defaultMeta,
      ...(pageSEO.defaultMeta || [])
    ],
    schema: [
      ...defaultSEO.schema,
      ...(pageSEO.schema || [])
    ]
  }
} 