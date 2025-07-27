'use client';
import React from 'react';
import { Section } from '@/types/api';
import { CheckCircle, Info } from 'lucide-react';

interface RequirementsSectionProps {
  section: Section;
}

const RequirementsSection: React.FC<RequirementsSectionProps> = ({ section }) => {
  if (section.type !== 'requirements') {
    return null;
  }

  return (
    <section id="requirements" className="py-16 bg-gradient-to-br from-gray-50 to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {section.name || 'Course Requirements'}
          </h2>
          
          {section.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {section.description}
            </p>
          )}
        </div>

        {/* Requirements */}
        <div className="max-w-4xl mx-auto">
          {section.values && section.values.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.values.map((item, index) => (
                <div 
                  key={item.id || index} 
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100"
                >
                  {/* Requirement Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-gray-600" />
                  </div>

                  {/* Requirement Title */}
                  {item.title && (
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                      {item.title}
                    </h3>
                  )}

                  {/* Requirement Description */}
                  {item.description && (
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // No requirements available
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Info className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  No Specific Requirements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  This course is designed to be accessible to learners of all levels. No prior experience required.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection; 