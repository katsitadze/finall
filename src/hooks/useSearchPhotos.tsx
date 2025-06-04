import { useQuery } from '@tanstack/react-query';
import { unsplashApi } from '../api/unsplash';
import type { UnsplashSearchResponse } from '../types/unsplashinterface';

const cache = new Map<string, UnsplashSearchResponse>();

export const useSearchPhotos = (query: string, page: number) => {
  const key = `${query}-${page}`;

  return useQuery<UnsplashSearchResponse>({
    queryKey: ['search', key],
    queryFn: async () => {
      if (cache.has(key)) return cache.get(key)!;
      const res = await unsplashApi.get<UnsplashSearchResponse>('/search/photos', {
        params: { query, per_page: 20, page },
      });
      cache.set(key, res.data);
      return res.data;
    },
    enabled: !!query,
    staleTime: 1000 * 60 * 5,
  });
};
