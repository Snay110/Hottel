import type { Hotel, SearchParams } from '../../types';

const API_PROVIDER = import.meta.env.VITE_API_PROVIDER || 'mock';
const API_KEY = import.meta.env.VITE_API_KEY || '';

const MOCK_HOTELS: Hotel[] = [
  { id: 1, name: 'Отель Luxury Resort', rating: 5, reviews: 250, description: 'Комфортный отель в центре Софии', price: 99, location: 'София' },
  { id: 2, name: 'Hotel Paradise', rating: 5, reviews: 180, description: 'Идеальное место для отдыха', price: 85, location: 'Варна' },
  { id: 3, name: 'Grand Hotel', rating: 5, reviews: 320, description: 'Премиум обслуживание и комфорт', price: 120, location: 'Пловдив' },
  { id: 4, name: 'Cozy Inn', rating: 5, reviews: 150, description: 'Уютный отель для путешественников', price: 65, location: 'Бургас' }
];

const bookingApi = {
  getPopularHotels: async (): Promise<Hotel[]> => {
    try {
      const response = await fetch('https://api.booking.com/v1/hotels?country=BG&limit=4', {
        headers: { 
          'Booking-Key': API_KEY,
          'Accept': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Booking API error');
      const data = await response.json();
      return data.hotels || MOCK_HOTELS;
    } catch (error) {
      console.warn('Booking API unavailable, using mock data:', error);
      return MOCK_HOTELS;
    }
  },

  searchHotels: async (params: SearchParams): Promise<Hotel[]> => {
    try {
      const searchParams = new URLSearchParams({
        country: 'BG',
        city: params.location || 'Sofia',
        checkin: params.checkIn || '',
        checkout: params.checkOut || ''
      });

      const response = await fetch(`https://api.booking.com/v1/hotels/search?${searchParams}`, {
        headers: { 
          'Booking-Key': API_KEY,
          'Accept': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Booking search error');
      const data = await response.json();
      return data.hotels || MOCK_HOTELS;
    } catch (error) {
      console.warn('Booking search failed, using mock data:', error);
      return MOCK_HOTELS.filter(
        (h) => !params.location || (h.location ?? "").includes(params.location),
      );
    }
  },

  getHotelById: async (id: number): Promise<Hotel> => {
    try {
      const response = await fetch(`https://api.booking.com/v1/hotels/${id}`, {
        headers: { 
          'Booking-Key': API_KEY,
          'Accept': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Hotel not found');
      return response.json();
    } catch (error) {
      const hotel = MOCK_HOTELS.find(h => h.id === id);
      if (!hotel) throw new Error('Hotel not found');
      return hotel;
    }
  }
};

const agodaApi = {
  getPopularHotels: async (): Promise<Hotel[]> => {
    try {
      const response = await fetch('https://api.agoda.com/v2/hotels/popular?countryCode=BG', {
        headers: { 
          'Authorization': `Bearer ${API_KEY}`,
          'Accept': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Agoda API error');
      const data = await response.json();
      return data.hotels || MOCK_HOTELS;
    } catch (error) {
      console.warn('Agoda API unavailable, using mock data:', error);
      return MOCK_HOTELS;
    }
  },

  searchHotels: async (params: SearchParams): Promise<Hotel[]> => {
    try {
      const response = await fetch('https://api.agoda.com/v2/hotels/search', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          location: params.location || 'Sofia',
          checkInDate: params.checkIn,
          checkOutDate: params.checkOut,
          countryCode: 'BG'
        })
      });
      if (!response.ok) throw new Error('Agoda search error');
      const data = await response.json();
      return data.hotels || MOCK_HOTELS;
    } catch (error) {
      console.warn('Agoda search failed, using mock data:', error);
      return MOCK_HOTELS.filter(
        (h) => !params.location || (h.location ?? "").includes(params.location),
      );
    }
  },

  getHotelById: async (id: number): Promise<Hotel> => {
    try {
      const response = await fetch(`https://api.agoda.com/v2/hotels/${id}`, {
        headers: { 
          'Authorization': `Bearer ${API_KEY}`,
          'Accept': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Hotel not found');
      return response.json();
    } catch (error) {
      const hotel = MOCK_HOTELS.find(h => h.id === id);
      if (!hotel) throw new Error('Hotel not found');
      return hotel;
    }
  }
};

const mockApi = {
  getPopularHotels: async (): Promise<Hotel[]> => {
    return MOCK_HOTELS;
  },
  searchHotels: async (params: SearchParams): Promise<Hotel[]> => {
    if (params.location) {
      return MOCK_HOTELS.filter((h) =>
        (h.location ?? "").includes(params.location ?? ""),
      );
    }
    return MOCK_HOTELS;
  },
  getHotelById: async (id: number): Promise<Hotel> => {
    const hotel = MOCK_HOTELS.find(h => h.id === id);
    if (!hotel) throw new Error('Hotel not found');
    return hotel;
  }
};

const getApiProvider = () => {
  switch (API_PROVIDER) {
    case 'agoda':
      return agodaApi;
    case 'booking':
      return bookingApi;
    default:
      return mockApi;
  }
};

export const hotelsApi = getApiProvider();
