import React from 'react';
import { Section, Language } from '@/types/api';
import { ArrowRight, CheckIcon } from 'lucide-react';
import Link from 'next/link';

interface PointersSectionProps {
  section: Section;
  language: Language;
}

const PointersSection: React.FC<PointersSectionProps> = ({ section }) => {
  if (section.type !== 'pointers' || !section.values.length) {
    return null;
  }

  return (
    <section id="learn" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {section.values.map((pointer, index) => (
            <div key={pointer.id || index} className="flex items-start space-x-2 p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              {/* Check Icon */}
              <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <CheckIcon className="w-4 h-4 text-white" />
              </div>

              {/* Pointer Text */}
              <div className="flex-1">
                <p className="text-gray-800 leading-relaxed">
                  {pointer.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link href="#cta" className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-soft border border-gray-200">
            <span className="text-gray-600 font-medium mr-2">Ready to start learning?</span>
              <ArrowRight className="w-5 h-5 text-primary-600" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PointersSection; 