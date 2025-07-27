import React from 'react';
import { Section, Language } from '@/types/api';
import Image from 'next/image';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import Button from './ui/Button';

interface InstructorSectionProps {
  section: Section;
  language: Language;
}

const InstructorSection: React.FC<InstructorSectionProps> = ({ section, language }) => {
  if (section.type !== 'instructors' || !section.values.length) {
    return null;
  }

  const instructor = section.values[0];

  return (
    <section id="instructor" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {section.name}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Instructor Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <Image
                    src={instructor.image || '/default-instructor.jpg'}
                    alt={instructor.name || 'Instructor'}
                    width={200}
                    height={200}
                    className="w-48 h-48 rounded-full object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2">
                  <BadgeCheck className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Instructor Details */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {instructor.name}
                </h3>
                
                {instructor.short_description && (
                  <p className="text-lg text-gray-600 mb-4">
                    {instructor.short_description}
                  </p>
                )}

                {instructor.description && (
                  <div 
                    className="prose prose-lg max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: instructor.description }}
                  />
                )}

                {instructor.has_instructor_page && (
                  <div className="mt-6">
                    <Button
                      text={language === 'en' ? 'View Profile' : 'প্রোফাইল দেখুন'}
                      variant="primary"
                      size="md"
                      width="2xl"
                      rightIcon={<ArrowRight className="ml-2 -mr-1 w-5 h-5" />}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection; 