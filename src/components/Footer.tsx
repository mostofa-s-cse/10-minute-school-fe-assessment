import React from 'react';
import { Data, Language } from '@/types/api';
import Image from 'next/image';
import { Facebook, Youtube, Linkedin } from 'lucide-react';
import Link from 'next/link';
interface FooterProps {
  data: Data;
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-white text-gray-900">
      {/* Footer Links */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
            <Link href="/">
                <Image src="/10mslogo-svg.svg" alt="10 Minute School" width={100} height={100} />
              </Link>
              <p className="text-gray-600 mb-4 max-w-md mt-5">
                {language === 'en' 
                  ? 'Empowering students with quality education and comprehensive learning resources to achieve their academic goals.'
                  : 'শিক্ষার্থীদের মানসম্পন্ন শিক্ষা এবং বিস্তৃত শিক্ষার সম্পদ দিয়ে তাদের একাডেমিক লক্ষ্য অর্জনে ক্ষমতায়ন করা।'
                }
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                  <span className="sr-only">Facebook</span>
                  <Facebook />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                  <span className="sr-only">YouTube</span>
                  <Youtube />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === 'en' ? 'Quick Links' : 'দ্রুত লিঙ্ক'}
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {language === 'en' ? 'About Us' : 'আমাদের সম্পর্কে'}
                </a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {language === 'en' ? 'Contact' : 'যোগাযোগ'}
                </a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {language === 'en' ? 'Privacy Policy' : 'গোপনীয়তা নীতি'}
                </a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {language === 'en' ? 'Terms of Service' : 'সেবার শর্তাবলী'}
                </a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === 'en' ? 'Support' : 'সহায়তা'}
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {language === 'en' ? 'Help Center' : 'সাহায্য কেন্দ্র'}
                </a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {language === 'en' ? 'Student Community' : 'শিক্ষার্থী সম্প্রদায়'}
                </a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {language === 'en' ? 'Refund Policy' : 'ফেরত নীতি'}
                </a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {language === 'en' ? 'Technical Support' : 'টেকনিক্যাল সহায়তা'}
                </a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 10 Minute School. {language === 'en' ? 'All rights reserved.' : 'সর্বস্বত্ব সংরক্ষিত।'}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200">
                {language === 'en' ? 'Privacy' : 'গোপনীয়তা'}
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200">
                {language === 'en' ? 'Terms' : 'শর্তাবলী'}
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200">
                {language === 'en' ? 'Cookies' : 'কুকিজ'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 