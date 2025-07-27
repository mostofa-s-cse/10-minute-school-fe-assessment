'use client';
import React, { useState } from 'react';
import { Section, Language } from '@/types/api';
import { ChevronDown, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

interface FAQSectionProps {
  section: Section;
  language: Language;
}

const FAQSection: React.FC<FAQSectionProps> = ({ section, language }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  if (section.type !== 'faq' || !section.values.length) {
    return null;
  }

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {section.name}
          </h2>
          {section.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {section.description}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {section.values.map((faq, index) => (
            <div key={faq.id || index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                  openItems.includes(index) ? 'rotate-180' : ''
                }`} />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <div 
                    className="prose prose-sm max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: faq.answer || '' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Still have questions?' : 'আরও প্রশ্ন আছে?'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'en' 
                ? 'Contact our support team for any additional questions or concerns.'
                : 'আরও কোন প্রশ্ন বা উদ্বেগ থাকলে আমাদের সহায়তা দলের সাথে যোগাযোগ করুন।'
              }
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="tel:16910"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                16910
              </Link>
              <Link
                href="mailto:support@10minuteschool.com"
                className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                support@10minuteschool.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 