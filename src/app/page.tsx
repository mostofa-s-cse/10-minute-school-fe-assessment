'use client';

import React, { useEffect, useState } from 'react';
import { fetchIELTSCourseData } from '@/utils/api';
import { Data, Language } from '@/types/api';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductPage from '@/components/ProductPage';
import ErrorBoundary from '@/components/ErrorBoundary';
import ScrollToTop from '@/components/ScrollToTop';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Ban, TriangleAlert } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function HomePage() {
  const [data, setData] = useState<Data | null>(null);
  const [language, setLanguage] = useState<Language>('en');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data when language changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetchIELTSCourseData(language);
        setData(response.data);
      } catch (err) {
        setError('Failed to load course information. Please try again later.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

  // Handle language change from URL on initial load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang') as Language;
    if (langParam && (langParam === 'en' || langParam === 'bn')) {
      setLanguage(langParam);
    }
  }, []);

  // Handle language change
  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    
    // Update URL without page reload
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url.toString());
  };

  // Loading state
  if (loading) {
    return <LoadingSpinner message="Loading course information..." size="lg" />;
  }

  // Error state
  if (error) {
    return (
      <ErrorBoundary>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <TriangleAlert className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <Button
            onClick={() => window.location.reload()} 
              text="Try again"
              variant="primary"
              size="md"
              width="2xl"
            />
          </div>
        </div>
      </ErrorBoundary>
    );
  }

  // No data state
  if (!data) {
    return (
      <ErrorBoundary>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Ban className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No course data available</h2>
            <p className="text-gray-600 mb-4">Please try refreshing the page.</p>
            <Button
            onClick={() => window.location.reload()} 
              text="Refresh"
              variant="primary"
              size="md"
              width="2xl"
            />
          </div>
        </div>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header 
          language={language} 
          onLanguageChange={handleLanguageChange}
        />

        {/* Main Content */}
        <main id="main-content">
          <ProductPage data={data} language={language} />
        </main>

        {/* Footer */}
        <Footer data={data} language={language} />

        {/* Scroll to top button */}
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
} 