'use client';
import React, { useState, useEffect } from 'react';
import { Section } from '@/types/api';
import { Clock, Tag, AlertCircle } from 'lucide-react';

interface OffersSectionProps {
  section: Section;
}

const OffersSection: React.FC<OffersSectionProps> = ({ section }) => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  if (section.type !== 'offers') {
    return null;
  }

  // Find the timer offer
  const timerOffer = section.values.find(offer => offer.template === 'timer');

  useEffect(() => {
    if (timerOffer?.end_at) {
      const endDate = new Date(timerOffer.end_at).getTime();

      const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance > 0) {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          setTimeLeft({ days, hours, minutes, seconds });
        } else {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timerOffer]);

  return (
    <section id="offers" className="py-12 bg-gradient-to-r from-red-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {section.values && section.values.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            {section.values.map((offer, index) => (
              <div 
                key={offer.id || index} 
                className="bg-white rounded-2xl p-8 shadow-soft border border-red-100"
                style={{
                  backgroundColor: offer.background_color || '#ffffff',
                  backgroundImage: offer.background_img ? `url(${offer.background_img})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {offer.template === 'timer' && (
                  <div className="text-center">
                    {/* Offer Icon */}
                    <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
                      <Clock className="w-8 h-8 text-red-600" />
                    </div>

                    {/* Offer Text */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {offer.text}
                    </h3>

                    {/* Countdown Timer */}
                    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                      <div className="bg-red-500 text-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold">{timeLeft.days}</div>
                        <div className="text-sm">Days</div>
                      </div>
                      <div className="bg-red-500 text-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold">{timeLeft.hours}</div>
                        <div className="text-sm">Hours</div>
                      </div>
                      <div className="bg-red-500 text-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                        <div className="text-sm">Minutes</div>
                      </div>
                      <div className="bg-red-500 text-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                        <div className="text-sm">Seconds</div>
                      </div>
                    </div>

                    {/* Offer Details */}
                    {offer.start_at && offer.end_at && (
                      <div className="mt-6 text-sm text-gray-600">
                        <p>Offer Period: {new Date(offer.start_at).toLocaleDateString()} - {new Date(offer.end_at).toLocaleDateString()}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Other offer types can be added here */}
                {offer.template !== 'timer' && (
                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4">
                      <Tag className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {offer.text || 'Special Offer'}
                    </h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          // No offers available
          <div className="text-center py-8">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Active Offers
              </h3>
              <p className="text-gray-600 text-sm">
                Check back later for special offers and discounts.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OffersSection; 