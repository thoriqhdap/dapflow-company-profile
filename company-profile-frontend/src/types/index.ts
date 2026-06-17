export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Portfolio {
  id: number;
  title: string;
  category: string;
  description: string;
  image_url: string;
  client: string;
  year: number;
  is_featured: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar_url: string | null;
  rating: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  thumbnail: string;
  category: string;
  published_at: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface CompanySetting {
  id: number;
  key: string;
  value: string;
}
