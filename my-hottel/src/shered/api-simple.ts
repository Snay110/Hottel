import type { Hotel, SearchParams } from './types';

const MOCK_HOTELS: Hotel[] = [
  { 
    id: 1, 
    name: 'Отель Sofia Luxury', 
    rating: 5, 
    reviews: 250, 
    description: 'Лучший отель в центре Софии', 
    price: 99, 
    location: 'София' 
  },
  { 
    id: 2, 
    name: 'Varna Beach Hotel', 
    rating: 4, 
    reviews: 180, 
    description: 'Пляжный отель на Чёрном море', 
    price: 85, 
    location: 'Варна' 
  },
  { 
    id: 3, 
    name: 'Plovdiv Grand Hotel', 
    rating: 5, 
    reviews: 320, 
    description: 'Премиум отель в исторической части', 
    price: 120, 
    location: 'Пловдив' 
  },
  { 
    id: 4, 
    name: 'Burgas Inn', 
    rating: 4, 
    reviews: 150, 
    description: 'Уютный отель для путешественников', 
    price: 65, 
    location: 'Бургас' 
  }
];

export const hotelsApi = {
  getPopularHotels: async (): Promise<Hotel[]> => {
    return MOCK_HOTELS;
  },

  searchHotels: async (params: SearchParams): Promise<Hotel[]> => {
    if (params.location) {
      return MOCK_HOTELS.filter(h => 
        h.location?.toLowerCase().includes(params.location.toLowerCase())
      );
    }
    return MOCK_HOTELS;
  },

  getHotelById: async (id: number): Promise<Hotel> => {
    const hotel = MOCK_HOTELS.find(h => h.id === id);
    if (!hotel) throw new Error('Отель не найден');
    return hotel;
  }
};
