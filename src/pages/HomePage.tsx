import { useState } from 'react';
import Container from '@mui/material/Container';
import { Box, Typography, CircularProgress, Pagination, Button } from '@mui/material';
import { SearchInput } from '../components/SearchInput';
import { useSearchPhotos } from '../hooks/useSearchPhotos';
import { useDebounce } from '../hooks/useDebounce';
import ImageCard from '../components/ImageCard';
import type { UnsplashPhoto } from '../types/unsplashinterface';
import {  useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();
  const debouncedQuery = useDebounce(query || 'nature', 500);
  const { data, isLoading } = useSearchPhotos(debouncedQuery, page);

  const handleSearch = (val: string) => {
    setQuery(val);
    setPage(1);
  };

  return (
    <Box sx={{ backgroundColor: 'rgb(94, 68, 94)', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">

       {!showInput && (
  <Box display="flex" justifyContent="flex-start" gap={2} mb={2}>
    <Button
      variant="contained"
      color="secondary"
      onClick={() => setShowInput(true)}
    >
      Show Search
    </Button>

    <Button
      variant="contained"
      color="secondary"
      onClick={() => navigate('/favorites')}
    >
      Favorites
    </Button>
  </Box>
)}
        {/* Search input appears when showInput is true */}
        <SearchInput
          value={query}
          onChange={handleSearch}
          visible={showInput}
          onClose={() => setShowInput(false)}
        />

        {/* Gallery / loading / no results */}
        {isLoading ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <CircularProgress />
          </Box>
        ) : !data?.results?.length ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <Typography color="white">No results found</Typography>
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
                count={Math.min(50, data.total_pages)}
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
