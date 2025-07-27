import React from 'react';
import { Section, Language } from '@/types/api';
import Image from 'next/image';

interface FeaturesSectionProps {
  section: Section;
  language: Language;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ section }) => {
  if (section.type !== 'features' || !section.values.length) {
    return null;
  }

  return (
    <section id="features" className="py-16 bg-gray-50">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {section.values.map((feature, index) => (
            <div key={feature.id || index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                {/* Feature Icon */}
                {feature.icon && (
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <Image
                      src={feature.icon}
                      alt={feature.title || 'Feature'}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                )}

                {/* Feature Title */}
                {feature.title && (
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                )}

                {/* Feature Subtitle */}
                {feature.subtitle && (
                  <p className="text-gray-600 leading-relaxed">
                    {feature.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 