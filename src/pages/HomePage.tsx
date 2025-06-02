// pages/HomePage.tsx
import { useState } from 'react';
import Container from '@mui/material/Container';
import { Box, Typography, CircularProgress, Pagination } from '@mui/material';
import { SearchInput } from '../components/SearchInput';
import { useSearchPhotos } from '../hooks/useSearchPhotos';
import { useDebounce } from '../hooks/useDebounce';
import type { UnsplashPhoto } from '../types/unsplashinterface';
import ImageCard from '../components/ImageCard';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const debouncedQuery = useDebounce(query || 'nature', 500);

  const { data, isLoading } = useSearchPhotos(debouncedQuery, page);

  const handleSearch = (val: string) => {
    setQuery(val);
    setPage(1);
  };

  return (
    <Box sx={{ backgroundColor: 'rgb(18, 8, 39)', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <SearchInput value={query} onChange={handleSearch} />

        {isLoading ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <CircularProgress />
          </Box>
        ) : !data?.results?.length ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <Typography>No results found</Typography>
          </Box>
        ) : (
          <Box mt={4}>
            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
              {data.results.map((photo: UnsplashPhoto) => (
                <Box key={photo.id} width={{ xs: '100%', sm: '48%', md: '30%' }}>
                  <ImageCard photo={photo} />
                </Box>
              ))}
            </Box>

            <Box mt={4} display="flex" justifyContent="center">
              <Pagination
                page={page}
                onChange={(_, value) => setPage(value)}
                count={Math.min(10, data.total_pages)}
                color="secondary"
              />
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default HomePage;