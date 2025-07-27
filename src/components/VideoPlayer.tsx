'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { VideoPlayerProps } from '@/types/api';
import { Play } from 'lucide-react';

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (isPlaying) {
    return (
      <div className="aspect-video bg-black rounded-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1&rel=0`}
          title={title || 'Course Video'}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="aspect-video bg-black rounded-lg overflow-hidden relative group cursor-pointer" onClick={handlePlay}>
      {thumbnail ? (
        <Image 
          src={thumbnail} 
          alt={title || 'Video thumbnail'} 
          width={400}
          height={225}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
          <div className="text-center text-white">
            <Play className="w-16 h-16 mx-auto mb-4" />
            <p className="text-lg font-semibold">Click to play</p>
          </div>
        </div>
      )}
      
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-all duration-200">
          <Play className="w-12 h-12 text-white" />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer; 