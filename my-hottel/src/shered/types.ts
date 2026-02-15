export interface Hotel {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  description: string;
  price: number;
  image?: string;
  location?: string;
  amenities?: string[];
}

export interface SearchParams {
  location?: string;
  checkIn?: string;
  checkOut?: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
}
