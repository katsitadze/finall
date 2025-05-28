import { useQuery } from '@tanstack/react-query';
import { unsplashApi } from '../api/unsplash';

type UnsplashPhoto = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    full: string;
    regular: string;
  };
};

type UnsplashResponse = {
  results: UnsplashPhoto[];
  total_pages: number;
};

const cache = new Map<string, UnsplashResponse>();

export const useSearchPhotos = (query: string, page: number) => {
  const key = `${query}-${page}`;

  return useQuery<UnsplashResponse>({
    queryKey: ['search', key],
    queryFn: async () => {
      if (cache.has(key)) return cache.get(key)!;
      const res = await unsplashApi.get<UnsplashResponse>('/search/photos', {
        params: { query, per_page: 20, page },
      });
      cache.set(key, res.data);
      return res.data;
    },
    enabled: !!query,
    staleTime: 1000 * 60 * 5,
  });
};
