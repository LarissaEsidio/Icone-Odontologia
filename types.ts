
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details?: string[];
}

export interface Professional {
  name: string;
  cro?: string;
  role: string;
  specialties: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
}
