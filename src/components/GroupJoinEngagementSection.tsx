'use client';
import React from 'react';
import { Section } from '@/types/api';
import { Users, Download, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface GroupJoinEngagementSectionProps {
  section: Section;
}

const GroupJoinEngagementSection: React.FC<GroupJoinEngagementSectionProps> = ({ section }) => {
  if (section.type !== 'group_join_engagement') {
    return null;
  }

  return (
    <section id="group-engagement" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {section.values && section.values.length > 0 ? (
          <div className="max-w-6xl mx-auto">
            {section.values.map((item, index) => (
              <div 
                key={item.id || index} 
                className="relative bg-white rounded-2xl p-8 shadow-soft border border-purple-100 overflow-hidden"
                style={{
                  backgroundImage: item.background?.image ? `url(${item.background.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Background Overlay */}
                {item.background?.image && (
                  <div className="absolute inset-0 bg-black/20"></div>
                )}

                <div className="relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                      {/* Top Left Icon */}
                      {item.top_left_icon_img && (
                        <div className="w-16 h-16">
                          <Image
                            src={item.top_left_icon_img}
                            alt="Icon"
                            width={64}
                            height={64}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      )}

                      {/* Title */}
                      <h3 
                        className="text-3xl font-bold leading-tight"
                        style={{ color: item.title_color || '#1f2937' }}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p 
                        className="text-lg leading-relaxed"
                        style={{ color: item.description_color || '#6b7280' }}
                      >
                        {item.description}
                      </p>

                      {/* CTA Button */}
                      {item.cta && (
                        <div className="pt-4">
                          <Link
                            href={item.cta.clicked_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                            style={{ backgroundColor: item.cta.color || '#9333ea' }}
                          >
                            <Download className="w-5 h-5 mr-2" />
                            {item.cta.text}
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Thumbnail */}
                    {item.thumbnail && (
                      <div className="flex justify-center lg:justify-end">
                        <div className="relative w-80 h-60 rounded-xl overflow-hidden shadow-lg">
                          <Image
                            src={item.thumbnail}
                            alt={item.title || 'Engagement Content'}
                            width={320}
                            height={240}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          {/* Play button overlay if it's a video */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                              <Users className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // No engagement content available
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Join Our Community
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with fellow learners and get access to exclusive resources and support.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GroupJoinEngagementSection; 