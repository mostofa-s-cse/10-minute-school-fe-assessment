export interface ApiResponse {
  code: number;
  data: Data;
  error: unknown[];
  message: string;
  payload: unknown[];
  status_code: number;
}

// Main Data Structure
export interface Data {
  slug: string;
  id: number;
  title: string;
  description: string; // HTML string
  platform: string;
  type: string;
  modality: string;
  old_info?: {
    cat_id: number;
    course_id: number;
    platform: string;
    skills_cat_id: number;
    slug: string;
  };
  start_at: string;
  media: Media[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: unknown[];
  delivery_method: string;
}

export interface Media {
  name: string;
  resource_type: 'video' | 'image';
  resource_value: string;
  thumbnail_url?: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface Seo {
  defaultMeta: SeoMeta[];
  description: string;
  keywords: string[];
  schema: SeoSchema[];
  title: string;
}

export interface SeoMeta {
  content: string;
  type: string;
  value: string;
}

export interface SeoSchema {
  meta_name: string;
  meta_value: string;
  type: string;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: SectionValue[];
}

export interface SectionValue {
  id?: string;
  title?: string;
  description?: string;
  icon?: string;
  image?: string;
  text?: string;
  subtitle?: string;
  name?: string;
  short_description?: string;
  slug?: string;
  has_instructor_page?: boolean;
  background_color?: string;
  background_img?: string;
  checklist_text_color?: string;
  end_at?: string;
  start_at?: string;
  template?: string;
  file_type?: string;
  file_url?: string;
  video_thumbnail?: string;
  checklist?: string[];
  question?: string;
  answer?: string;
  color?: string;
  profile_image?: string;
  testimonial?: string;
  thumb?: string;
  video_type?: string;
  video_url?: string;
  background?: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta?: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description_color?: string;
  thumbnail?: string;
  title_color?: string;
  top_left_icon_img?: string;
}

// Language types for localization
export type Language = 'en' | 'bn';

// Component Props Types
export interface ProductPageProps {
  data: Data;
  language: Language;
}

export interface SectionProps {
  section: Section;
  language: Language;
}

export interface ChecklistProps {
  items: Checklist[];
  language: Language;
}

export interface VideoPlayerProps {
  videoUrl: string;
  title?: string;
  thumbnail?: string;
}

export interface PriceDisplayProps {
  price: number;
  currency?: string;
  language: Language;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  width?: 'auto' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
} 