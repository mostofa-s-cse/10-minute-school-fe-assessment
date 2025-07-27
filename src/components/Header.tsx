'use client';

import React from 'react';
import { Language } from '@/types/api';

import Link from 'next/link';



interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <img src="/10mslogo-svg.svg" alt="10 Minute School" width={100} height={100} loading="lazy" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#course" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
              {language === 'en' ? 'Course' : 'কোর্স'}
            </Link>
            <Link href="#instructor" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
              {language === 'en' ? 'Instructor' : 'প্রশিক্ষক'}
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
              {language === 'en' ? 'Features' : 'বৈশিষ্ট্য'}
            </Link>
            <Link href="#details" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
              {language === 'en' ? 'Details' : 'বিস্তারিত'}
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                  language === 'en'
                    ? 'bg-white text-primary-600 shadow-soft'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('bn')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                  language === 'bn'
                    ? 'bg-white text-primary-600 shadow-soft'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                বাংলা
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 