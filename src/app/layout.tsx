import type { Metadata } from 'next'
import './globals.css'
import ReduxProvider from '@/components/ReduxProvider'
import { GeistSans, GeistMono } from 'geist/font'
import { generateDynamicMetadata } from '@/utils/seo'
import Link from 'next/link'

// Default SEO configuration for the site
const defaultSEO = {
  defaultMeta: [
    {
      content: "10 Minute School - Best Online Learning Platform",
      type: "property",
      value: "og:title"
    },
    {
      content: "jpg",
      type: "property",
      value: "og:image:type"
    },
    {
      content: "website",
      type: "property",
      value: "og:type"
    },
    {
      content: "Empowering students with quality education and comprehensive learning resources to achieve their academic goals.",
      type: "name",
      value: "og:description"
    },
    {
      content: "https://10minuteschool.com/logo.png",
      type: "name",
      value: "og:image:secure_url"
    },
    {
      content: "https://10minuteschool.com/logo.png",
      type: "property",
      value: "og:image"
    },
    {
      content: "en_US",
      type: "property",
      value: "og:locale"
    },
    {
      content: "10 Minute School Logo",
      type: "property",
      value: "og:image:alt"
    },
    {
      content: "https://10minuteschool.com",
      type: "property",
      value: "og:url"
    }
  ],
  description: "Empowering students with quality education and comprehensive learning resources to achieve their academic goals.",
  keywords: [
    "Online Learning",
    "Education",
    "Courses",
    "10 Minute School",
    "Bangladesh Education"
  ],
  schema: [
    {
      meta_name: "ld-json",
      meta_value: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "10 Minute School",
        "url": "https://10minuteschool.com",
        "logo": "https://10minuteschool.com/logo.png",
        "description": "Empowering students with quality education and comprehensive learning resources to achieve their academic goals.",
        "sameAs": [
          "https://facebook.com/10minuteschool",
          "https://youtube.com/10minuteschool",
          "https://linkedin.com/company/10minuteschool"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "support@10minuteschool.com"
        }
      }),
      type: "ld-json"
    }
  ],
  title: "10 Minute School - Best Online Learning Platform"
}

// Generate default metadata using the dynamic SEO system
export const metadata: Metadata = generateDynamicMetadata({
  seo: defaultSEO,
  baseUrl: 'https://10minuteschool.com',
  currentPath: '/'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.10minuteschool.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/10mslogo-svg.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/10mslogo-svg.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/10mslogo-svg.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/10mslogo-svg.svg" />
        <link rel="manifest" href="/10mslogo-svg.svg" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
        suppressHydrationWarning={true}>
        <ReduxProvider>
          {/* Skip to main content for accessibility */}
          <Link
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-lg z-50"
          >
            Skip to main content
          </Link>
          
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
} 