import { useMemo } from 'react'
import { Seo } from '@/types/api'
import { generateDynamicMetadata, generateStructuredData, generateMetaTags } from '@/utils/seo'

export function useSEO(seo: Seo, baseUrl?: string, currentPath?: string) {
  const metadata = useMemo(() => {
    return generateDynamicMetadata({ seo, baseUrl, currentPath })
  }, [seo, baseUrl, currentPath])

  const structuredData = useMemo(() => {
    return generateStructuredData(seo.schema)
  }, [seo.schema])

  const metaTags = useMemo(() => {
    return generateMetaTags(seo.defaultMeta)
  }, [seo.defaultMeta])

  return {
    metadata,
    structuredData,
    metaTags,
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
  }
}

export function useStructuredData(schemas: Seo['schema']) {
  return useMemo(() => {
    return generateStructuredData(schemas)
  }, [schemas])
}

export function useMetaTags(defaultMeta: Seo['defaultMeta']) {
  return useMemo(() => {
    return generateMetaTags(defaultMeta)
  }, [defaultMeta])
} 