'use client'

import { useEffect } from 'react'
import { Seo, Language } from '@/types/api'
import { generateStructuredData, generateMetaTags } from '@/utils/seo'

interface DynamicSEOProps {
  seo: Seo
  language: Language
}

export default function DynamicSEO({ seo, language }: DynamicSEOProps) {
  useEffect(() => {
    // Update document title and meta description
    document.title = seo.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seo.description);

    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seo.keywords.join(', '));

    // Generate and inject structured data
    const structuredData = generateStructuredData(seo.schema)
    
    structuredData.forEach((schema, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = schema
      script.id = `dynamic-schema-${index}`
      
      // Remove existing script if it exists
      const existingScript = document.getElementById(`dynamic-schema-${index}`)
      if (existingScript) {
        existingScript.remove()
      }
      
      document.head.appendChild(script)
    })

    // Generate and inject meta tags
    const metaTags = generateMetaTags(seo.defaultMeta)
    
    metaTags.forEach((meta, index) => {
      const metaElement = document.createElement('meta')
      
      if (meta.name) {
        metaElement.name = meta.name
      }
      if (meta.property) {
        metaElement.setAttribute('property', meta.property)
      }
      
      metaElement.content = meta.content
      metaElement.id = `dynamic-meta-${index}`
      
      // Remove existing meta tag if it exists
      const existingMeta = document.getElementById(`dynamic-meta-${index}`)
      if (existingMeta) {
        existingMeta.remove()
      }
      
      document.head.appendChild(metaElement)
    })

    // Add additional social media meta tags
    const additionalMetaTags = [
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:site_name', content: '10 Minute School' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: language === 'bn' ? 'bn_BD' : 'en_US' },
      { property: 'og:url', content: window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description },
      { name: 'twitter:site', content: '@10minuteschool' },
      { name: 'twitter:creator', content: '@10minuteschool' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: '10 Minute School' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#0ea5e9' },
      { name: 'msapplication-TileColor', content: '#0ea5e9' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: '10 Minute School' },
    ]

    additionalMetaTags.forEach((meta, index) => {
      const metaElement = document.createElement('meta')
      
      if (meta.name) {
        metaElement.name = meta.name
      }
      if (meta.property) {
        metaElement.setAttribute('property', meta.property)
      }
      
      metaElement.content = meta.content
      metaElement.id = `additional-meta-${index}`
      
      // Remove existing meta tag if it exists
      const existingMeta = document.getElementById(`additional-meta-${index}`)
      if (existingMeta) {
        existingMeta.remove()
      }
      
      document.head.appendChild(metaElement)
    })

    // Cleanup function
    return () => {
      // Remove all dynamic scripts and meta tags on unmount
      structuredData.forEach((_, index) => {
        const script = document.getElementById(`dynamic-schema-${index}`)
        if (script) {
          script.remove()
        }
      })
      
      metaTags.forEach((_, index) => {
        const meta = document.getElementById(`dynamic-meta-${index}`)
        if (meta) {
          meta.remove()
        }
      })

      additionalMetaTags.forEach((_, index) => {
        const meta = document.getElementById(`additional-meta-${index}`)
        if (meta) {
          meta.remove()
        }
      })
    }
  }, [seo, language])

  return null // This component doesn't render anything visible
} 