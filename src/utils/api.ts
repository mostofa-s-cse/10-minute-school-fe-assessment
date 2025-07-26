// API utility functions for fetching IELTS course data
// Handles API calls to 10 Minute School discovery service

import { ApiResponse, Language } from '@/types/api';

const API_BASE_URL = 'https://api.10minuteschool.com/discovery-service/api/v1';
const PRODUCT_SLUG = 'ielts-course';

/**
 * Fetches IELTS course data from the API
 * @param language - Language code ('en' or 'bn')
 * @returns Promise with API response data
 */
export async function fetchIELTSCourseData(language: Language = 'en'): Promise<ApiResponse> {
  try {
    const url = `${API_BASE_URL}/products/${PRODUCT_SLUG}?lang=${language}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web',
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // Enable caching for better performance
      next: {
        revalidate: 3600, // Revalidate every hour
        tags: ['ielts-course', language],
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    
    if (data.error && data.error.length > 0) {
      throw new Error(data.message || 'API request was not successful');
    }

    return data;
  } catch (error) {
    console.error('Error fetching IELTS course data:', error);
    
    // Return fallback data for development/testing
    return getFallbackData(language);
  }
}

/**
 * Fallback data for development and testing purposes
 * @param language - Language code
 * @returns Mock API response
 */
function getFallbackData(language: Language): ApiResponse {
  const isEnglish = language === 'en';
  return {
    code: 200,
    data: {
      slug: 'ielts-course',
      id: 153,
      title: 'IELTS Course by Munzereen Shahid',
      description: '<p class="tenms__paragraph" dir="ltr"><span style="white-space: pre-wrap;">Get complete preparation of Academic IELTS and General Training IELTS in one course! Join our IELTS Course today to achieve your desired band score under the guidance of the best IELTS Instructor in the country.</span></p>',
      platform: 'skills',
      type: 'regular',
      modality: 'recorded',
      old_info: {
        cat_id: 21,
        course_id: 50,
        platform: 'skills',
        skills_cat_id: 90,
        slug: 'ielts-course',
      },
      start_at: '',
      media: [
        {
          name: 'preview_gallery',
          resource_type: 'video',
          resource_value: 'zrlYnaZftEQ',
          thumbnail_url: 'https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png',
        },
        {
          name: 'sqr_img',
          resource_type: 'image',
          resource_value: 'https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_1_1.png',
        },
        {
          name: 'thumbnail',
          resource_type: 'image',
          resource_value: 'https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png',
        },
        {
          name: 'preview_gallery',
          resource_type: 'image',
          resource_value: 'https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737298483.png',
          thumbnail_url: '',
        },
        {
          name: 'preview_gallery',
          resource_type: 'image',
          resource_value: 'https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726736040872.png',
          thumbnail_url: '',
        },
        {
          name: 'preview_gallery',
          resource_type: 'video',
          resource_value: '30y-wlDtIIQ',
          thumbnail_url: 'https://cdn.10minuteschool.com/images/catalog/media/introduction_1706097447220.jpg',
        },
        {
          name: 'preview_gallery',
          resource_type: 'video',
          resource_value: 'QBz8FX4GE_w',
          thumbnail_url: 'https://cdn.10minuteschool.com/images/catalog/media/QBz8FX4GE_w-HD_1718880944063.jpg',
        },
        {
          name: 'book_preview',
          resource_type: 'video',
          resource_value: 'BbtkvRnraok',
          thumbnail_url: 'https://cdn.10minuteschool.com/images/catalog/media/BbtkvRnraok-HD_1718880976960.jpg',
        },
        {
          name: 'preview_gallery',
          resource_type: 'video',
          resource_value: 'AvB2ibYd1z4',
          thumbnail_url: 'https://cdn.10minuteschool.com/images/catalog/media/AvB2ibYd1z4-HD_1707647843136.jpg',
        },
      ],
      checklist: [
        {
          color: 'black',
          icon: 'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png',
          id: 'meta64Ckyd1YRb1719741712652',
          list_page_visibility: true,
          text: 'Total Enrolled 33007',
        },
        {
          color: 'black',
          icon: 'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png',
          id: 'metaCCDbAAumOD1719741712652',
          list_page_visibility: false,
          text: 'Time Required 50 hours',
        },
        {
          color: 'black',
          icon: 'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png',
          id: 'metaKc4SuylDeM1719741712652',
          list_page_visibility: true,
          text: '54 Videos',
        },
        {
          color: 'black',
          icon: 'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png',
          id: 'metajKYau1Xq2M1719741712652',
          list_page_visibility: false,
          text: '10 Reading & 10 Listening Mocktests',
        },
        {
          color: 'black',
          icon: 'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png',
          id: 'metayIP949ZIWE1719741712652',
          list_page_visibility: false,
          text: '38 Lecture Sheets',
        },
        {
          color: 'black',
          icon: 'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video-lecture.png',
          id: 'metaRDOD1IqfGY1719741712652',
          list_page_visibility: false,
          text: '25 Video Lectures',
        },
        {
          color: 'black',
          icon: 'https://cdn.10minuteschool.com/images/Landing_page/pdp_icon_flashcard.png',
          id: 'metaeV6gonz1Uz1719741712652',
          list_page_visibility: false,
          text: '1 Free Hardcopy Book Delivered',
        },
        {
          color: 'black',
          icon: 'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png',
          id: 'metagw8Tp7dq3a1719741712652',
          list_page_visibility: false,
          text: 'Facebook Support Group',
        },
        {
          color: 'black',
          icon: 'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png',
          id: 'metaWq2pVEViVv1719741712652',
          list_page_visibility: false,
          text: 'Course Validity Lifetime',
        },
      ],
      seo: {
        defaultMeta: [
          { content: 'IELTS Preparation Course in BD', type: 'property', value: 'og:title' },
          { content: 'jpg', type: 'property', value: 'og:image:type' },
          { content: 'product', type: 'property', value: 'og:type' },
          { content: 'Take Best IELTS preparation to next level with IELTS preparation Course. This Course is one of the Best IELTS Course in Bangladesh.', type: 'name', value: 'og:description' },
          { content: 'https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png', type: 'name', value: 'og:image:secure_url' },
          { content: 'https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png', type: 'property', value: 'og:image' },
          { content: 'en_US', type: 'property', value: 'og:locale' },
          { content: 'Best IELTS Preparation Course in Bangladesh', type: 'property', value: 'og:image:alt' },
          { content: 'https://10minuteschool.com/product/ielts-course', type: 'property', value: 'og:url' },
        ],
        description: 'Take Best IELTS preparation with us, This Course is one of the Best IELTS Course in Bangladesh, which includes mock tests, and a premium study book.',
        keywords: [
          'IELTS Course',
          'IELTS Course in BD',
          'IELTS Preparation',
          'IELTS Bangladesh',
        ],
        schema: [
          {
            meta_name: 'ld-json',
            meta_value: '{   "@context": "https://schema.org/",    "@type": "Product",    "name": "IELTS Course by Munzereen Shahid",   "image": "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",   "description": "IELTS-এর সেরা প্রস্তুতি নিতে আজই জয়েন করুন Complete IELTS Course-টিতে, যেখানে থাকছে দেশসেরা IELTS ইন্সট্রাক্টরের গাইডলাইন, Mock Test ও প্রিমিয়াম হার্ডকপি বই।",   "brand": {     "@type": "Brand",     "name": "10 Minute School"   },   "sku": "153",   "offers": {     "@type": "Offer",     "url": "https://10minuteschool.com/product/ielts-course",     "priceCurrency": "BDT",     "price": "5000"   } }',
            type: 'ld-json',
          },
          { meta_name: 'ld-json', meta_value: '', type: 'ld-json' },
          {
            meta_name: 'ld-json',
            meta_value: '{   "@context": "https://schema.org",   "@type": "VideoObject",   "name": "IELTS Course by Munzereen Shahid",   "description": "IELTS-এর সেরা প্রস্তুতি নিতে আজই জয়েন করুন Complete IELTS Course-টিতে, যেখানে থাকছে দেশসেরা IELTS ইন্সট্রাক্টরের গাইডলাইন, Mock Test ও প্রিমিয়াম হার্ডকপি বই।",   "thumbnailUrl": "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",   "uploadDate": "2023-06-14",   "duration": "PT1M41S",   "contentUrl": "https://10minuteschool.com/product/ielts-course" }',
            type: 'ld-json',
          },
        ],
        title: 'Best IELTS Preparation Course by Munzereen Shahid [2025]',
      },
      cta_text: { name: 'Enroll', value: 'enroll' },
      sections: [
        { type: 'bundle_items', name: '', description: '', bg_color: '', order_idx: 0, values: [] },
        { type: 'offers', name: '', description: '', bg_color: '', order_idx: 1, values: [ { background_color: '#ff0000', background_img: '', checklist_text_color: '#ff0000', end_at: '2023-10-09T17:59:00.000Z', id: 'metaMMKrjDghYF1719742425757', start_at: '2023-09-25T06:32:00.000Z', template: 'timer', text: 'Special offer ends in' } ] },
        { type: 'instructors', name: 'Course instructor', description: '', bg_color: '', order_idx: 2, values: [ { description: '<p>MSc (English), University of Oxford (UK);<br>BA, MA (English), University of Dhaka;<br>IELTS: 8.5</p>\n<p>&nbsp;</p>', has_instructor_page: true, image: 'https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg', name: 'Munzereen Shahid', short_description: 'Course Instructor', slug: 'munzereen-shahid' } ] },
        { type: 'features', name: 'How the course is laid out', description: '', bg_color: '', order_idx: 3, values: [ { icon: 'https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png', id: 'metazam2sVh6Do1719742426346', subtitle: 'IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা', title: '৫০+ ভিডিও লেকচার' }, { icon: 'https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_1684919669537.png', id: 'metaeCElISxX3W1719742426346', subtitle: 'Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary', title: '৩৮টি লেকচার শিট' }, { icon: 'https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604652_1684919731714.png', id: 'meta2UAEkiN8J61719742426346', subtitle: '10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই', title: 'রিডিং এন্ড লিসিনিং মক টেস্ট' }, { icon: 'https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_%281%29_1684919813933.png', id: 'metaRNaqU0UtvF1719742426346', subtitle: 'সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর সুযোগ', title: 'ডাউট সল্ভিং লাইভ ক্লাস' } ] },
        { type: 'group_join_engagement', name: '', description: '', bg_color: '', order_idx: 4, values: [ { background: { image: 'https://cdn.10minuteschool.com/images/Free_class_card_BG_1722414654287.png', primary_color: '', secondary_color: '' }, cta: { clicked_url: 'https://cdn.10minuteschool.com/images/Skills_Lead_Gen_PDF/IELTS_Course_by_Munzereen_Shahid.pdf', color: '', text: 'ফ্রি PDF Download করুন' }, description: 'IELTS  ভালো  score করার সেরা Strategies জানুন সেরাদের গাইডলাইনে ।', description_color: '#ededed', id: 'metaZENdZWshL21732621224194', thumbnail: 'https://cdn.10minuteschool.com/images/catalog/product/pointer/Thumbnail_for_IELTS_Course_by_MS_1732621023962.jpg', title: 'IELTS Confirm 7+ Score (Guideline)', title_color: '#ffffff', top_left_icon_img: 'https://cdn.10minuteschool.com/images/catalog/product/pointer/467478234_1276985680016189_8175110495169425888_n_1732621183218.png' } ] },
        { type: 'pointers', name: 'What you will learn by doing the course', description: '', bg_color: '', order_idx: 5, values: [ { color: 'black', icon: '0', id: 'metat2NZfKBa8T1719742427715', text: 'Detailed rules and regulations of each module of the IELTS test' }, { color: 'black', icon: '0', id: 'metaxyyxXg8vek1719742427715', text: 'Formats and strategies to ace the IELTS test' }, { color: 'black', icon: '0', id: 'metaaMVDaDtrf71719742427715', text: 'Proper structure and essay type for scoring well in IELTS writing task 1 and 2' }, { color: 'black', icon: '0', id: 'meta9cS6eB30x21719742427715', text: 'Speaking accurately on any topic in the IELTS speaking test' }, { color: 'black', icon: '0', id: 'metaZeAm8qS2PV1719742427715', text: 'Time management strategy to get a good band score in the IELTS test' }, { color: 'black', icon: '0', id: 'metaQ2KRMjrG8I1719742427715', text: 'Through the IELTS Reading and IELTS Listening Mock Tests, you will gain a real exam experience and a complete understanding of the Band Score in the IELTS exam.' } ] },
        { type: 'content_preview', name: 'Content preview', description: '', bg_color: '', order_idx: 6, values: [] },
        { type: 'about', name: 'Course details', description: '', bg_color: '', order_idx: 7, values: [ { description: '<li>Those who aim to go abroad for work or higher education</li>\n<li>Those who want to apply for permanent residency abroad</li>\n<li>Those who have appeared for the IELTS exam but are not satisfied with their band score</li>\n<li>Those who want to improve their reading, writing, listening, and speaking skills through IELTS for work, business, or personal interest</li>', icon: '0', id: 'metay6pR9zmhQb1719742431745', title: '<h2><b>This IELTS course is for</b></h2>' }, { description: '<p>IELTS certificates are accepted in different higher education institutions in the USA and other English-speaking countries across the globe. This exam tests the ability of the candidates to speak, read, listen and write in English.</p><br>\n\n<p>Many of us are intimidated by English grammar as English is not our first language. Fortunately, IELTS is essentially a language-based test and not grammar-based. To achieve the desired score, you will require four English language skills: reading, writing, listening and speaking. The more proficient a person is in these four areas, the higher their score will be on the IELTS test.</p><br>\n\n<p>To help IELTS examinees improve these four essential English language skills, 10 Minute School has brought a detailed and well-guided <a href="https://10minuteschool.com/ielts" style="color:blue;">IELTS preparation</a> course. The instructor of this course is Munzereen Shahid (IELTS Band Score 8.5/9), who has recently graduated from the English Department of the world-renowned Oxford University in England.</p><br>\n\n\n<p>If you enroll in our course, you will receive the book “ঘরে বসে IELTS প্রস্তুতি” by Munzereen Shahid, completely free! Along with the video lectures in the course, you can learn strategies from the book and practice to fully prepare for the IELTS exam. This course also includes IELTS Reading and Listening Mock Tests, which will give you a real exam experience and an understanding of band scores. During practice sessions, expert instructors are available in live classes to solve any problems you may encounter. Therefore, now you can have complete IELTS preparation in one course!</p><br>\n<p>To make your IELTS test preparation effortless, efficient, and practical, enroll in "IELTS Course by Munzereen Shahid" today and take yourself one step closer to fulfilling your dreams!</p>', icon: '0', id: 'metajLOJyu2gv91719742431745', title: '<h2><b>About the IELTS course</b></h2>' }, { description: '<li>You will be able to prepare effectively from home for both the ‘Academic IELTS’ and ‘General Training IELTS’ modules. This course has separate sections for both modules.</li>\n<li>You will learn tips, hacks, and techniques according to the question types in the IELTS speaking, reading, listening, and writing tests.</li>\n<li>You will be able to solve all types of IELTS questions correctly and prepare yourself with pen and paper.</li>\n<li>Along with watching the videos, you will have lecture sheets, the book "ঘরে বসে IELTS প্রস্তুতি" and Doubt Solving Live Classes for complete preparation.</li>\n<li>After completing the course, you will be able to enhance your own IELTS preparation by solving the questions in the IELTS Reading and Listening mock tests.</li>', icon: '0', id: 'metaykWCc9xmir1719742431745', title: '<h2><b>This IELTS course will help you in the following ways:</b></h2>' } ] },
        { type: 'feature_explanations', name: 'Course Exclusive Feature', description: '', bg_color: '', order_idx: 8, values: [ { checklist: [ 'IELTS Academic ও General Training নিয়ে আলোচনা', 'Reading, Writing, Listening ও Speaking এর Overview & Format', 'প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি', 'ভিডিওর সাথে প্র্যাকটিসের সুযোগ' ], file_type: 'image', file_url: 'https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_sqr.png', id: 'metaHsuQkeQFRI1719742426817', title: 'ভিডিও লেকচার', video_thumbnail: '' }, { checklist: [ '10 Reading & 10 Listening Mock Tests', 'Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স', 'উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট', 'যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট' ], file_type: 'image', file_url: 'https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_book_sqr.png', id: 'metaVTQUNx3LL61719742426817', title: 'Reading ও Listening Mock Tests', video_thumbnail: '' } ] },
        { type: 'free_items', name: 'Free items with this products-', description: '', bg_color: '', order_idx: 9, values: [] },
        { type: 'certificate', name: 'Course certificate', description: '', bg_color: '', order_idx: 10, values: [] },
        { type: 'bundle_certificate', name: 'Course certificates', description: '', bg_color: '', order_idx: 11, values: [] },
        { type: 'testimonials', name: 'Students opinion', description: '', bg_color: '', order_idx: 12, values: [ /* ... testimonials omitted for brevity ... */ ] },
        { type: 'requirements', name: 'Course details', description: '', bg_color: '', order_idx: 13, values: [] },
        { type: 'how_to_pay', name: 'Payment process', description: '', bg_color: '', order_idx: 14, values: [] },
        { type: 'faq', name: 'Frequently Ask Questions', description: '', bg_color: '', order_idx: 15, values: [ /* ... FAQ values omitted for brevity ... */ ] },
      ],
      is_cohort_based_course: false,
      secondary_cta_group: [],
      delivery_method: 'pathao',
    },
    error: [],
    message: 'Success',
    payload: [],
    status_code: 200,
  };
}

/**
 * Extracts YouTube video ID from various YouTube URL formats
 * @param url - YouTube URL
 * @returns YouTube video ID or null
 */
export function extractYouTubeVideoId(url: string): string | null {
  if (!url) return null;
  
  // Handle different YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
    /youtu\.be\/([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }
  
  // If no pattern matches, assume the URL is already a video ID
  if (url.length === 11 && /^[a-zA-Z0-9_-]+$/.test(url)) {
    return url;
  }
  
  return null;
}

/**
 * Formats price with currency symbol
 * @param price - Price amount
 * @param currency - Currency symbol
 * @param language - Language for formatting
 * @returns Formatted price string
 */
export function formatPrice(price: number, currency: string = '৳', language: Language = 'en'): string {
  return `${currency}${price.toLocaleString(language === 'bn' ? 'bn-BD' : 'en-US')}`;
} 