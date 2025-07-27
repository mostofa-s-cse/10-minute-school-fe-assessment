'use client';
import React, { useState } from 'react';
import { Section, Language } from '@/types/api';
import { BookOpen, Target, Users, Award, ChevronDown, ChevronUp } from 'lucide-react';

interface AboutSectionProps {
  section: Section;
  language: Language;
}

const AboutSection: React.FC<AboutSectionProps> = ({ section }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  if (section.type !== 'about' || !section.values.length) {
    return null;
  }

  // Icons for different content types
  const getIcon = (index: number) => {
    const icons = [BookOpen, Target, Users, Award];
    return icons[index % icons.length];
  };

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="details" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Course Details
          </div> */}
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {section.name}
          </h2>
          
          {section.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {section.description}
            </p>
          )}
        </div>

        {/* Collapsible Content Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {section.values.map((item, index) => {
            const IconComponent = getIcon(index);
            const isOpen = openItems.includes(index);
            
            return (
              <div 
                key={item.id || index} 
                className="group bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Clickable Header */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-2 md:p-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg transition-all duration-300 ${isOpen ? 'scale-110' : 'group-hover:scale-105'}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    {item.title && (
                      <div className="flex-1">
                        <h3 
                          className="text-lg md:text-xl font-bold text-gray-900 transition-colors duration-200"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Chevron Icon */}
                  <div className="flex-shrink-0 ml-4">
                    <div className={`w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary-100 text-primary-600 rotate-180' : 'text-gray-500 group-hover:bg-gray-200'}`}>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Collapsible Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    {/* Decorative Line */}
                    <div className="w-full h-px bg-gradient-to-r from-primary-200 to-secondary-200 mb-6"></div>
                    
                    {/* Description */}
                    {item.description && (
                      <div 
                        className="prose prose-base max-w-none text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 