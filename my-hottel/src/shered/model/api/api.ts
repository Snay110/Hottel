

import type { Hotel, SearchParams } from "../../types";

const MOCK_HOTELS: Hotel[] = [
  {
    id: 1,
    name: "Sofia Grand Palace",
    rating: 5,
    reviews: 321,
    description: "City-center hotel with spa and breakfast included.",
    price: 129,
    location: "Sofia",
    amenities: ["WiFi", "Spa", "Breakfast"],
  },
  {
    id: 2,
    name: "Varna Sea View",
    rating: 4,
    reviews: 188,
    description: "Cozy rooms near the beach and old town.",
    price: 94,
    location: "Varna",
    amenities: ["WiFi", "Pool", "Parking"],
  },
  {
    id: 3,
    name: "Plovdiv Art Hotel",
    rating: 4,
    reviews: 147,
    description: "Modern interior and quiet neighborhood.",
    price: 82,
    location: "Plovdiv",
    amenities: ["WiFi", "Pet friendly"],
  },
  {
    id: 4,
    name: "Burgas Comfort Inn",
    rating: 3,
    reviews: 96,
    description: "Budget option with clean rooms and fast check-in.",
    price: 59,
    location: "Burgas",
    amenities: ["WiFi", "Breakfast"],
  },
];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const byLocation = (hotel: Hotel, query?: string) => {
  if (!query) return true;
  return (hotel.location || "").toLowerCase().includes(query.toLowerCase().trim());
};

export const hotelsApi = {
  getPopularHotels: async (): Promise<Hotel[]> => {
    await wait(250);
    return MOCK_HOTELS;
  },

  searchHotels: async (params: SearchParams): Promise<Hotel[]> => {
    await wait(300);
    return MOCK_HOTELS.filter((hotel) => byLocation(hotel, params.location));
  },

  getHotelById: async (id: number): Promise<Hotel> => {
    await wait(200);
    return MOCK_HOTELS.find((hotel) => hotel.id === id) || MOCK_HOTELS[0];
  },
};
