export interface Property {
  id: string;
  title: string;
  price: string;
  numericPrice: number;
  location: string;
  district: string;
  dealType: 'Купить' | 'Арендовать';
  bedrooms: number;
  bathrooms?: number;
  area?: string;
  badge?: 'EXCLUSIVE' | 'NEW' | 'ELITE';
  image: string;
  description: string;
  features: string[];
}

export interface Broker {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FilterState {
  dealType: string;
  district: string;
  priceRange: string;
}
