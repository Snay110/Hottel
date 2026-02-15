import { useQuery } from '@tanstack/react-query';
import type { Hotel, SearchParams } from './types';
import { hotelsApi } from './api';

export const usePopularHotels = () => {
  return useQuery<Hotel[], Error>({
    queryKey: ['hotels', 'popular'],
    queryFn: hotelsApi.getPopularHotels,
    staleTime: 5 * 60 * 1000,
  });
};

export const useSearchHotels = (params: SearchParams) => {
  return useQuery<Hotel[], Error>({
    queryKey: ['hotels', 'search', params],
    queryFn: () => hotelsApi.searchHotels(params),
    staleTime: 5 * 60 * 1000,
    enabled: Boolean(params.location || params.checkIn),
  });
};

export const useHotelById = (id: number) => {
  return useQuery<Hotel, Error>({
    queryKey: ['hotels', id],
    queryFn: () => hotelsApi.getHotelById(id),
    staleTime: 10 * 60 * 1000,
  });
};
