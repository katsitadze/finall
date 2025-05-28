import {
  Box,
  CircularProgress,
  Pagination,
  Typography,
} from '@mui/material';
import { useSearchPhotos } from '../hooks/useSearchPhotos';
import { useDebounce } from '../hooks/useDebounce';
import { useState } from 'react';
import { ImageCard } from './ImageCard';

export const PhotoGrid = ({ query }: { query: string }) => {
  const [page, setPage] = useState(1);
  const debouncedQuery = useDebounce(query, 500);
  const { data, isLoading } = useSearchPhotos(debouncedQuery, page);

  if (!debouncedQuery) return null;
  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  if (!data?.results?.length)
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography>No results found</Typography>
      </Box>
    );

  return (
    <Box mt={4}>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
      >
        {data.results.map((photo: any) => (
          <Box
            key={photo.id}
            width={{ xs: '100%', sm: '48%', md: '30%' }}
          >
            <ImageCard photo={photo} />
          </Box>
        ))}
      </Box>
      <Box mt={4} display="flex" justifyContent="center">
        <Pagination
          count={Math.min(10, data.total_pages)}
          page={page}
          onChange={(_, val) => setPage(val)}
          color="primary"
        />
      </Box>
    </Box>
  );
};
