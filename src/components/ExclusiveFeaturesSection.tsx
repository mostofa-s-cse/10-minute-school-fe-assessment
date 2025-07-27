import React from 'react';
import { Section, Language } from '@/types/api';
import Image from 'next/image';
import { Star, Zap, Shield, Award, CheckIcon } from 'lucide-react';

interface ExclusiveFeaturesSectionProps {
  section: Section;
  language: Language;
}

const ExclusiveFeaturesSection: React.FC<ExclusiveFeaturesSectionProps> = ({ section }) => {
  if (section.type !== 'feature_explanations' || !section.values.length) {
    return null;
  }

  // Icons for different feature types
  const getIcon = (index: number) => {
    const icons = [Star, Zap, Shield, Award];
    return icons[index % icons.length];
  };

  return (
    <section id="exclusive-features" className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {section.name}
          </h2>
          
          {section.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {section.description}
            </p>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {section.values.map((feature, index) => {
            const IconComponent = getIcon(index);
            
            return (
              <div 
                key={feature.id || index} 
                className="group relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                    {/* Feature Image */}
                    {feature.file_url && (
                      <div className="flex-shrink-0 relative">
                        <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                          <Image
                            src={feature.file_url}
                            alt={feature.title || 'Feature'}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        {/* Icon Badge */}
                        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    )}

                    {/* Feature Content */}
                    <div className="flex-1 text-center lg:text-left space-y-6">
                      {/* Title */}
                      {feature.title && (
                        <div className="space-y-3">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300 leading-tight">
                            {feature.title}
                          </h3>
                          
                          {/* Decorative Line */}
                          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full group-hover:w-24 transition-all duration-300 mx-auto lg:mx-0"></div>
                        </div>
                      )}

                      {/* Checklist */}
                      {feature.checklist && feature.checklist.length > 0 && (
                        <ul className="space-y-4">
                          {feature.checklist.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3 group/item">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                                <CheckIcon className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveFeaturesSection; 