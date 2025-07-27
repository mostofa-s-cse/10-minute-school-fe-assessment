'use client';
import React, { useState, useRef } from 'react';
import { Section } from '@/types/api';
import Image from 'next/image';
import VideoPlayer from '@/components/VideoPlayer';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

interface TestimonialsSectionProps {
  section: Section;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ section }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (section.type !== 'testimonials' || !section.values.length) {
    return null;
  }

  const testimonials = section.values;
  const cardWidth = 320;
  const gap = 16;

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const scrollPosition = index * (cardWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
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

        <div className="max-w-6xl mx-auto">
          {/* Testimonials Slider with Arrows */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              disabled={currentIndex >= testimonials.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>

            {/* Scrollable Testimonials */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide px-8 sm:px-10"
            >
              <div className="flex gap-4 sm:gap-6 pb-4 min-w-max">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id || index} 
                    className="relative border border-gray-200 rounded-xl p-4 sm:p-6 flex-shrink-0 bg-white shadow-soft hover:shadow-medium transition-all duration-300 min-h-80 w-80 sm:w-96 lg:w-80"
                  >
                    
                    {/* Content Area */}
                    <div className="mt-4 h-40 sm:h-48">
                      {testimonial.video_url ? (
                        <div className="relative h-full rounded-lg overflow-hidden">
                          <VideoPlayer
                            videoUrl={testimonial.video_url}
                            title={testimonial.name}
                            thumbnail={testimonial.thumb || testimonial.profile_image || '/default-avatar.jpg'}
                          />
                        </div>
                      ) : (
                        <div className="h-full flex flex-col">
                          <div className="flex-1 overflow-y-auto scrollbar-hide">
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {testimonial.testimonial || ''}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Profile Information */}
                    <div className="flex items-center gap-3 mt-4 sm:mt-6">
                      <div className="relative">
                        <Image
                          alt={`Profile picture of ${testimonial.name}`}
                          src={testimonial.profile_image || testimonial.thumb || '/default-avatar.jpg'}
                          width={48}
                          height={48}
                          className="rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover border-2 border-gray-200"
                          loading="lazy"
                        />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {testimonial.name || 'Student'}
                        </p>
                        <p className="text-xs text-gray-500">
                          IELTS Score: {testimonial.description || '7'}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 opacity-10">
                      <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 