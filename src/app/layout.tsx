import type { Metadata } from 'next'
import './globals.css'
import ReduxProvider from '@/components/ReduxProvider'
import { GeistSans, GeistMono } from 'geist/font'

export const metadata: Metadata = {
  title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
  description: 'Master the IELTS exam with our comprehensive course designed by expert instructor Munzereen Shahid. Learn proven strategies, practice with real exam questions, and achieve your target band score.',
  keywords: ['IELTS', 'English', 'Exam Preparation', 'Munzereen Shahid', '10 Minute School', 'IELTS Course', 'English Learning'],
  authors: [{ name: '10 Minute School' }],
  creator: '10 Minute School',
  publisher: '10 Minute School',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://10minuteschool.com'),
  alternates: {
    canonical: '/product/ielts-course',
    languages: {
      'en': '/product/ielts-course',
      'bn': '/product/ielts-course?lang=bn',
    },
  },
  openGraph: {
    title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
    description: 'Master the IELTS exam with our comprehensive course designed by expert instructor Munzereen Shahid. Learn proven strategies, practice with real exam questions, and achieve your target band score.',
    url: 'https://10minuteschool.com/product/ielts-course',
    siteName: '10 Minute School',
    images: [
      {
        url: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        width: 1200,
        height: 630,
        alt: 'IELTS Course by Munzereen Shahid',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
    description: 'Master the IELTS exam with our comprehensive course designed by expert instructor Munzereen Shahid.',
    images: ['https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'],
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "IELTS Course by Munzereen Shahid",
              "description": "Master the IELTS exam with our comprehensive course designed by expert instructor Munzereen Shahid. Learn proven strategies, practice with real exam questions, and achieve your target band score.",
              "provider": {
                "@type": "Organization",
                "name": "10 Minute School",
                "url": "https://10minuteschool.com"
              },
              "instructor": {
                "@type": "Person",
                "name": "Munzereen Shahid",
                "jobTitle": "IELTS Expert & Certified Instructor"
              },
              "coursePrerequisites": "Basic English knowledge (Intermediate level)",
              "educationalLevel": "Intermediate to Advanced",
              "courseMode": "Online",
              "timeRequired": "P4W",
              "offers": {
                "@type": "Offer",
                "price": "1000",
                "priceCurrency": "BDT",
                "availability": "https://schema.org/InStock"
              },
              "url": "https://10minuteschool.com/product/ielts-course"
            })
          }}
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
        suppressHydrationWarning={true}>
        <ReduxProvider>
          {/* Skip to main content for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-lg z-50"
          >
            Skip to main content
          </a>
          
          {children}
        </ReduxProvider>
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }}
        />
      </body>
    </html>
  )
} 