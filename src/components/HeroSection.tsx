'use client';
import React, { useState } from 'react';
import { Data, Language } from '@/types/api';
import Button from '@/components/ui/Button';
import Checklist from '@/components/Checklist';
import VideoPlayer from '@/components/VideoPlayer';
import {FileImage} from 'lucide-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

interface HeroSectionProps {
  data: Data;
  language: Language;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data, language }) => {
  // State for current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Default price as specified in requirements
  const price = 1000;
  const oldPrice = 40000;
  const discount = Math.round(((oldPrice - price) / oldPrice) * 100);

  // Get all media items for slides - both images and videos
  const mediaItems = data.media.filter(media => 
    (media.name === 'preview_gallery' || media.name === 'thumbnail') && 
    media.resource_value && 
    media.resource_value.trim() !== '' &&
    (media.resource_type === 'image' ? media.resource_value.startsWith('http') : true)
  );



  // Fallback image if no media items
  const fallbackImage = "https://via.placeholder.com/600x250/1e40af/ffffff?text=IELTS+Course";

  // Handle slide navigation
  const nextSlide = () => {
    if (mediaItems.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
    }
  };

  const prevSlide = () => {
    if (mediaItems.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    }
  };

  // Handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="course" className="text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#352870]"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {data.title}
            </h1>

            {/* Rating and Students */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-semibold">4.9 (1000+ ratings)</span>
              </div>
              <span className="text-lg">1000+ students</span>
            </div>

            {/* Description */}
            <div 
              className="text-lg leading-relaxed text-blue-100"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />

            {/* Price and CTA */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold">৳{price.toLocaleString()}</span>
                <span className="text-xl line-through text-blue-200">৳{oldPrice.toLocaleString()}</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  -{discount}% OFF
                </span>
              </div>
              
              <Button 
                text={data.cta_text.name}
                variant="primary"
                size="md"
                width="2xl"
              />
            </div>
          </div>

          {/* Right Column - Video Trailer */}
          <div className="space-y-6">
            {/* Main Banner/Slide */}
            <div className="relative">
              {mediaItems[currentSlide]?.resource_type === 'video' ? (
                // Show video player for videos
                <VideoPlayer 
                  videoUrl={mediaItems[currentSlide]?.resource_value || ''}
                  title={data.title}
                  thumbnail={mediaItems[currentSlide]?.thumbnail_url || ''}
                />
              ) : (
                // Show image directly
                <Image
                  alt={`Slide ${currentSlide + 1} - ${data.title}`}
                  src={mediaItems[currentSlide]?.resource_value || fallbackImage}
                  width={600}
                  height={250}
                  className="w-full rounded-lg"
                />
              )}
              {/* Left arrow */}
              <button 
                onClick={prevSlide}
                aria-label="Previous" 
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-black shadow hover:bg-gray-100 transition-colors z-10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {/* Right arrow */}
              <button 
                onClick={nextSlide}
                aria-label="Next" 
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-black shadow hover:bg-gray-100 transition-colors z-10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Thumbnail images row */}
            <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide">
              {mediaItems.length > 0 ? (
                mediaItems.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`relative flex-shrink-0 ${currentSlide === index ? 'border-2 border-green-900' : 'border border-gray-300'} rounded overflow-hidden`}
                  >
                    <Image 
                      alt={`Thumbnail ${index + 1}`}
                      src={media.resource_type === 'video' ? (media.thumbnail_url || fallbackImage) : media.resource_value}
                      width={80}
                      height={50}
                      className="w-20 h-12 object-cover"
                    />
                    {media.resource_type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </button>
                ))
              ) : (
                // Show placeholder thumbnails if no media items
                Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-20 h-12 bg-gray-300 rounded border border-gray-300 flex-shrink-0 flex items-center justify-center"
                  >
                    <FileImage className="w-6 h-6 text-gray-500"/>
                  </div>
                ))
              )}
            </div>
          </div>
         
        </div>
                    
         {/* Checklist */}
         <div className="mt-8">
              <Checklist items={data.checklist} language={language} />
            </div>
      </div>
    </section>
  );
};

export default HeroSection; 