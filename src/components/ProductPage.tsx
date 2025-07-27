import React, { Suspense } from 'react';
import { Data, Language } from '@/types/api';
import HeroSection from '@/components/HeroSection';
import InstructorSection from '@/components/InstructorSection';
import FeaturesSection from '@/components/FeaturesSection';
import PointersSection from '@/components/PointersSection';
import AboutSection from '@/components/AboutSection';
import ExclusiveFeaturesSection from '@/components/ExclusiveFeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContentPreviewSection from '@/components/ContentPreviewSection';
import BundleItemsSection from '@/components/BundleItemsSection';
import OffersSection from '@/components/OffersSection';
import GroupJoinEngagementSection from '@/components/GroupJoinEngagementSection';
import FreeItemsSection from '@/components/FreeItemsSection';
import CertificateSection from '@/components/CertificateSection';
import RequirementsSection from '@/components/RequirementsSection';
import HowToPaySection from '@/components/HowToPaySection';
import FAQSection from '@/components/FAQSection';
import DynamicSEO from '@/components/DynamicSEO';
import LoadingSpinner from '@/components/LoadingSpinner';

interface ProductPageProps {
  data: Data;
  language: Language;
}

// Loading component for sections
const SectionLoading = ({ sectionName }: { sectionName: string }) => (
  <div className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <LoadingSpinner message={`Loading ${sectionName}...`} size="sm" />
      </div>
    </div>
  </div>
);

const ProductPage: React.FC<ProductPageProps> = ({ data, language }) => {
  // Helper function to find section by type
  const findSection = (type: string) => {
    return data.sections.find(section => section.type === type);
  };

  // Get sections in order
  const bundleItemsSection = findSection('bundle_items');
  const offersSection = findSection('offers');
  const instructorSection = findSection('instructors');
  const featuresSection = findSection('features');
  const groupJoinEngagementSection = findSection('group_join_engagement');
  const pointersSection = findSection('pointers');
  const contentPreviewSection = findSection('content_preview');
  const aboutSection = findSection('about');
  const exclusiveFeaturesSection = findSection('feature_explanations');
  const freeItemsSection = findSection('free_items');
  const certificateSection = findSection('certificate');
  const testimonialsSection = findSection('testimonials');
  const requirementsSection = findSection('requirements');
  const howToPaySection = findSection('how_to_pay');
  const faqSection = findSection('faq');

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic SEO */}
      <DynamicSEO seo={data.seo} language={language} />
      
      {/* Hero Section */}
      <Suspense fallback={<SectionLoading sectionName="Hero" />}>
        <HeroSection data={data} language={language} />
      </Suspense>

      {/* Bundle Items */}
      {bundleItemsSection && (
        <Suspense fallback={<SectionLoading sectionName="Bundle Items" />}>
          <BundleItemsSection section={bundleItemsSection} />
        </Suspense>
      )}

      {/* Offers */}
      {offersSection && (
        <Suspense fallback={<SectionLoading sectionName="Offers" />}>
          <OffersSection section={offersSection} />
        </Suspense>
      )}

      {/* Course Instructor */}
      {instructorSection && (
        <Suspense fallback={<SectionLoading sectionName="Instructor" />}>
          <InstructorSection section={instructorSection} language={language} />
        </Suspense>
      )}

      {/* How the course is laid out */}
      {featuresSection && (
        <Suspense fallback={<SectionLoading sectionName="Features" />}>
          <FeaturesSection section={featuresSection} language={language} />
        </Suspense>
      )}

      {/* Group Join Engagement */}
      {groupJoinEngagementSection && (
        <Suspense fallback={<SectionLoading sectionName="Group Engagement" />}>
          <GroupJoinEngagementSection section={groupJoinEngagementSection} />
        </Suspense>
      )}

      {/* What you will learn */}
      {pointersSection && (
        <Suspense fallback={<SectionLoading sectionName="Learning Points" />}>
          <PointersSection section={pointersSection} language={language} />
        </Suspense>
      )}

      {/* Course details */}
      {aboutSection && (
        <Suspense fallback={<SectionLoading sectionName="Course Details" />}>
          <AboutSection section={aboutSection} language={language} />
        </Suspense>
      )}

      {/* Course Exclusive Features */}
      {exclusiveFeaturesSection && (
        <Suspense fallback={<SectionLoading sectionName="Exclusive Features" />}>
          <ExclusiveFeaturesSection section={exclusiveFeaturesSection} language={language} />
        </Suspense>
      )}

      {/* Content Preview */}
      {contentPreviewSection && (
        <Suspense fallback={<SectionLoading sectionName="Content Preview" />}>
          <ContentPreviewSection section={contentPreviewSection} />
        </Suspense>
      )}

      {/* Students opinion */}
      {testimonialsSection && (
        <Suspense fallback={<SectionLoading sectionName="Testimonials" />}>
          <TestimonialsSection section={testimonialsSection} />
        </Suspense>
      )}

      {/* FAQ */}
      {faqSection && (
        <Suspense fallback={<SectionLoading sectionName="FAQ" />}>
          <FAQSection section={faqSection} language={language} />
        </Suspense>
      )}

      {/* Free Items */}
      {freeItemsSection && (
        <Suspense fallback={<SectionLoading sectionName="Free Items" />}>
          <FreeItemsSection section={freeItemsSection} />
        </Suspense>
      )}

      {/* Certificate */}
      {certificateSection && (
        <Suspense fallback={<SectionLoading sectionName="Certificate" />}>
          <CertificateSection section={certificateSection} />
        </Suspense>
      )}

      {/* Requirements */}
      {requirementsSection && (
        <Suspense fallback={<SectionLoading sectionName="Requirements" />}>
          <RequirementsSection section={requirementsSection} />
        </Suspense>
      )}

      {/* How to Pay */}
      {howToPaySection && (
        <Suspense fallback={<SectionLoading sectionName="Payment Process" />}>
          <HowToPaySection section={howToPaySection} />
        </Suspense>
      )}
    </div>
  );
};

export default ProductPage; 