'use client';

import React, { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { fetchCourseData } from '@/store/slices/courseSlice';
import { useCourse } from '@/hooks/useCourse';
import { useUI } from '@/hooks/useUI';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="spinner w-12 h-12 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading course information...</p>
    </div>
  </div>
);

// Error component for error handling
const ErrorMessage = ({ message }: { message: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center max-w-md mx-auto px-4">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h2>
      <p className="text-gray-600 mb-4">{message}</p>
      <button 
        onClick={() => window.location.reload()} 
        className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { data, language, loading, error, changeLanguage } = useCourse();

  // Fetch data on component mount and language change
  useEffect(() => {
    dispatch(fetchCourseData(language));
  }, [dispatch, language]);

  // Handle language change from URL on initial load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang') as 'en' | 'bn';
    if (langParam && (langParam === 'en' || langParam === 'bn')) {
      changeLanguage(langParam);
    }
  }, [changeLanguage]);

  // Loading state
  if (loading) {
    return <LoadingSpinner />;
  }

  // Error state
  if (error) {
    return <ErrorMessage message={error} />;
  }

  // No data state
  if (!data) {
    return <ErrorMessage message="No course data available." />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header 
        language={language} 
        onLanguageChange={changeLanguage} 
      />

      {/* Main Content */}
      <main id="main-content">
        {/* Section */}
      </main>

      {/* Footer */}
      <Footer data={data} language={language} />

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

// Scroll to top component
const ScrollToTop = () => {
  const { scrollToTopVisible, updateScrollVisibility } = useUI();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        updateScrollVisibility(true);
      } else {
        updateScrollVisibility(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [updateScrollVisibility]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!scrollToTopVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      aria-label="Scroll to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}; 