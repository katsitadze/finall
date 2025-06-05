import { useQuery } from '@tanstack/react-query';
import { unsplashApi } from '../api/unsplash';
import type { UnsplashSearchResponse } from '../types/unsplashinterface';

export const useSearchPhotos = (query: string, page: number) => {
  return useQuery<UnsplashSearchResponse>({
    queryKey: ['search', query, page],
    queryFn: async () => {
      const res = await unsplashApi.get<UnsplashSearchResponse>('/search/photos', {
        params: { query, per_page: 20, page },
      });
      return res.data;
    },
    enabled: !!query,
    staleTime: 1000 * 60 * 5, 
  });
};
