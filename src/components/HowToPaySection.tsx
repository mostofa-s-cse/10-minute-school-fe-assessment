'use client';
import React from 'react';
import { Section } from '@/types/api';
import { CreditCard, Info } from 'lucide-react';

interface HowToPaySectionProps {
  section: Section;
}

const HowToPaySection: React.FC<HowToPaySectionProps> = ({ section }) => {
  if (section.type !== 'how_to_pay') {
    return null;
  }

  return (
    <section id="how-to-pay" className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {section.name || 'Payment Process'}
          </h2>
          
          {section.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {section.description}
            </p>
          )}
        </div>

        {/* Payment Process */}
        <div className="max-w-4xl mx-auto">
          {section.values && section.values.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.values.map((item, index) => (
                <div 
                  key={item.id || index} 
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-emerald-100"
                >
                  {/* Payment Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-emerald-600" />
                  </div>

                  {/* Payment Title */}
                  {item.title && (
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                      {item.title}
                    </h3>
                  )}

                  {/* Payment Description */}
                  {item.description && (
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // No payment information available
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Info className="w-12 h-12 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Payment Information Coming Soon
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Payment process details will be available soon. Contact support for payment assistance.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowToPaySection; 