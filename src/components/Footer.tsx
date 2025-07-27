import React from 'react';
import { Data, Language } from '@/types/api';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


interface FooterProps {
  data: Data;
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="text-gray-900 pt-12 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Image 
              src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg" 
              alt="10 Minute School Logo" 
              width={140} 
              height={140} 
              className="mb-4"
            />
            <p className="text-gray-600">
              {language === 'en' 
                ? '10 Minute School is the largest online educational platform in Bangladesh.'
                : '১০ মিনিট স্কুল বাংলাদেশের বৃহত্তম অনলাইন শিক্ষামূলক প্ল্যাটফর্ম।'
              }
            </p>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">
              {language === 'en' ? 'Courses' : 'কোর্সসমূহ'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {language === 'en' ? 'Academic' : 'একাডেমিক'}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {language === 'en' ? 'Skills' : 'দক্ষতা'}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {language === 'en' ? 'Professional' : 'পেশাদার'}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {language === 'en' ? 'Admission Tests' : 'ভর্তি পরীক্ষা'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">
              {language === 'en' ? 'Company' : 'কোম্পানি'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {language === 'en' ? 'About Us' : 'আমাদের সম্পর্কে'}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {language === 'en' ? 'Careers' : 'ক্যারিয়ার'}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {language === 'en' ? 'Blog' : 'ব্লগ'}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {language === 'en' ? 'Contact' : 'যোগাযোগ'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">
              {language === 'en' ? 'Connect With Us' : 'আমাদের সাথে যুক্ত হন'}
            </h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-gray-600">
              {language === 'en' ? 'Email: support@10minuteschool.com' : 'ইমেইল: support@10minuteschool.com'}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © 2025 10 Minute School. {language === 'en' ? 'All rights reserved.' : 'সর্বস্বত্ব সংরক্ষিত।'}
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              {language === 'en' ? 'Terms of Service' : 'সেবার শর্তাবলী'}
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              {language === 'en' ? 'Privacy Policy' : 'গোপনীয়তা নীতি'}
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              {language === 'en' ? 'Refund Policy' : 'ফেরত নীতি'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 