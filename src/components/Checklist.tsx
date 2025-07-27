import React from 'react';
import { ChecklistProps } from '@/types/api';
import Image from 'next/image';

const Checklist: React.FC<ChecklistProps> = ({ items, language }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white text-center">
        {language === 'en' ? 'Course Features' : 'কোর্সের বৈশিষ্ট্য'}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/15 transition-all duration-200">
            {item.icon && (
              <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Image 
                  src={item.icon} 
                  alt={item.text}
                  width={20}
                  height={20}
                  className="w-5 h-5 filter brightness-0 invert"
                />
              </div>
            )}
            <span className="text-sm text-white font-medium leading-relaxed">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checklist; 