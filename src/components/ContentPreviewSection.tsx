'use client';
import React from 'react';
import { Section } from '@/types/api';
import { FileVideo, Image as ImageIcon, Play } from 'lucide-react';
import Image from 'next/image';
import VideoPlayer from '@/components/VideoPlayer';

interface ContentPreviewSectionProps {
  section: Section;
}

const ContentPreviewSection: React.FC<ContentPreviewSectionProps> = ({ section }) => {
  if (section.type !== 'content_preview') {
    return null;
  }

  return (
    <section id="content-preview" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
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

        {/* Content Preview */}
        <div className="max-w-6xl mx-auto">
          {section.values && section.values.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.values.map((item, index) => (
                <div 
                  key={item.id || index} 
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100"
                >
                  {/* Content Type Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    {item.video_url ? (
                      <FileVideo className="w-8 h-8 text-blue-600" />
                    ) : (
                      <ImageIcon className="w-8 h-8 text-blue-600" />
                    )}
                  </div>

                  {/* Content Title */}
                  {item.title && (
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                      {item.title}
                    </h3>
                  )}

                  {/* Content Preview */}
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                    {item.video_url ? (
                      <VideoPlayer
                        videoUrl={item.video_url}
                        title={item.title || 'Content Preview'}
                        thumbnail={item.thumb || item.profile_image || '/default-avatar.jpg'}
                      />
                    ) : item.profile_image ? (
                      <Image
                        src={item.profile_image}
                        alt={item.title || 'Content Preview'}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <Play className="w-12 h-12 mx-auto mb-2" />
                          <p className="text-sm">Preview Available</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Description */}
                  {item.description && (
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // No content preview available
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileVideo className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Content Preview Coming Soon
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We're working on adding preview content for this course. Check back soon to see sample videos and materials.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentPreviewSection; 