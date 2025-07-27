# IELTS Course Product Page - Next.js Starter Kit

A modern, responsive product page for IELTS courses built with Next.js, TypeScript, and Tailwind CSS. Features server-side rendering, localization, and comprehensive SEO optimization.

## 🚀 Features

### Core Features
- ✅ **Product Title & Description** - Dynamic content from API
- ✅ **Course Instructors** - Instructor section with profiles
- ✅ **Product Trailer** - YouTube video player integration
- ✅ **Pricing** - Default pricing with discount display
- ✅ **CTA Buttons** - Dynamic call-to-action text
- ✅ **Localization** - English and Bengali language support
- ✅ **Server-Side Rendering** - Next.js App Router with ISR

### Good to Have Features
- ✅ **Course Layout** - How the course is structured
- ✅ **Learning Outcomes** - What students will learn
- ✅ **Exclusive Features** - Course-specific benefits
- ✅ **Course Details** - Comprehensive course information
- ✅ **Checklist** - Course features and benefits
- ✅ **SEO Optimization** - Dynamic meta tags and structured data

### Technical Features
- ✅ **Incremental Static Generation (ISR)** - Performance optimization
- ✅ **Error Boundaries** - Comprehensive error handling
- ✅ **Loading States** - Progressive loading with Suspense
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **TypeScript** - Full type safety
- ✅ **Accessibility** - ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **API**: REST API with custom headers
- **Deployment**: Vercel-ready

### Live Link:
https://10-minute-school-fe-assessment.vercel.app/

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main page with language switching
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # Reusable UI components
│   │   ├── Button.tsx        # Button component with variants
│   ├── HeroSection.tsx       # Hero section with video player
│   ├── InstructorSection.tsx # Course instructors
│   ├── FeaturesSection.tsx   # Course features
│   ├── PointersSection.tsx   # Learning outcomes
│   ├── AboutSection.tsx      # Course details
│   ├── ExclusiveFeaturesSection.tsx # Exclusive features
│   ├── TestimonialsSection.tsx # Student testimonials
│   ├── FAQSection.tsx        # Frequently asked questions
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Site footer
│   ├── ProductPage.tsx       # Main product page layout
│   ├── DynamicSEO.tsx        # SEO component
│   ├── ErrorBoundary.tsx     # Error handling
│   ├── LoadingSpinner.tsx    # Loading states
│   └── ScrollToTop.tsx       # Scroll to top functionality
├── hooks/
│   ├── useCourse.ts          # Course data hook
│   ├── useSEO.ts             # SEO hook
│   └── useUI.ts              # UI state hook
├── store/
│   ├── index.ts              # Redux store
│   ├── hooks.ts              # Redux hooks
│   └── slices/
│       ├── courseSlice.ts    # Course state management
│       └── uiSlice.ts        # UI state management
├── types/
│   └── api.ts                # TypeScript interfaces
├── utils/
│   ├── api.ts                # API utilities
│   └── seo.ts                # SEO utilities
└── public/                   # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextjs-starter-kit
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Language Support

The application supports two languages:
- **English** (default): `/?lang=en`
- **Bengali**: `/?lang=bn`

Language switching is handled via URL query parameters and updates the entire page content dynamically.

## 🎨 Component Usage

### Button Component
```tsx
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

// Basic usage
<Button text="Click me" />

// With variants and sizes
<Button 
  text="Download" 
  variant="primary" 
  size="lg" 
  leftIcon={<Download />} 
/>

// With width variants
<Button 
  text="Submit" 
  width="xl" 
  type="submit" 
  rightIcon={<ArrowRight />} 
/>
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_API_BASE_URL=https://api.10minuteschool.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### API Configuration
The application uses the 10 Minute School API with custom headers:
- `X-TENMS-SOURCE-PLATFORM: web` for SEO data
- Language-specific endpoints for localization

## 📱 Responsive Design

The application is built with a mobile-first approach:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

All components are fully responsive with proper breakpoints.

## 🎯 SEO Features

- **Dynamic Meta Tags**: Title, description, keywords
- **Open Graph**: Social media sharing
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: JSON-LD schema markup
- **Canonical URLs**: Proper URL structure
- **Language Alternates**: Hreflang tags

## 🚀 Performance

- **ISR**: Incremental Static Generation for fast loading
- **Code Splitting**: Automatic component splitting
- **Image Optimization**: Next.js Image component
- **Font Optimization**: System fonts with fallbacks
- **Bundle Analysis**: Optimized bundle sizes

## 🧪 Testing

The application is ready for testing with:
- **Error Boundaries**: Graceful error handling
- **Loading States**: Progressive loading
- **Accessibility**: ARIA labels and keyboard navigation
- **Cross-browser**: Modern browser support

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Updates

Stay updated with the latest changes:
- Follow the repository
- Check the releases page
- Read the changelog

---


### Full Page Screenshot
<img width="2880" height="11074" alt="full-page screenshot" src="https://github.com/user-attachments/assets/6edb73f1-7a47-424f-9e64-a3cc756f841e" />

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS** 
