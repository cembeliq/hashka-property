export type PropertyType = "rumah" | "apartemen" | "ruko";
export type PropertyStatus = "tersedia" | "promo" | "terjual";

export interface Property {
  id: string;
  slug: string;
  name: string;
  type: PropertyType;
  status: PropertyStatus;
  location: string;
  city: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  landArea: number;
  buildingArea: number;
  images: string[];
  description: string;
  facilities: string[];
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
