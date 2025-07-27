'use client';
import React from 'react';
import { Section } from '@/types/api';
import { Award, FileText } from 'lucide-react';

interface CertificateSectionProps {
  section: Section;
}

const CertificateSection: React.FC<CertificateSectionProps> = ({ section }) => {
  if (section.type !== 'certificate') {
    return null;
  }

  return (
    <section id="certificate" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {section.name || 'Course Certificate'}
          </h2>
          
          {section.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {section.description}
            </p>
          )}
        </div>

        {/* Certificate Details */}
        <div className="max-w-4xl mx-auto">
          {section.values && section.values.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.values.map((item, index) => (
                <div 
                  key={item.id || index} 
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-blue-100"
                >
                  {/* Certificate Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>

                  {/* Certificate Title */}
                  {item.title && (
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                      {item.title}
                    </h3>
                  )}

                  {/* Certificate Description */}
                  {item.description && (
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // No certificate information available
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Certificate Information Coming Soon
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Certificate details will be available soon. Complete the course to receive your certificate.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection; 