'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setScrollToTopVisible(true);
      } else {
        setScrollToTopVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

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
        <ArrowUp className="w-6 h-6" />
    </button>
    
  );
};

export default ScrollToTop; 