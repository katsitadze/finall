import { Box, CircularProgress, Typography, Pagination } from '@mui/material';
import type { UnsplashPhoto } from '../../types/unsplashinterface';
import ImageCard from '../../components/ImageCard';


interface Props {
  data: { results: UnsplashPhoto[]; total_pages: number } | undefined;
  isLoading: boolean;
  page: number;
  onPageChange: (page: number) => void;
}

const ResultsSection = ({ data, isLoading, page, onPageChange }: Props) => {
  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress sx={{ color: '#4caf50' }} />
      </Box>
    );
  }

  if (!data?.results?.length) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography color="white" variant="h6">
          No results found
        </Typography>
      </Box>
    );
  }

  return (
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
          onChange={(_, value) => onPageChange(value)}
          count={Math.min(50, data.total_pages)}
          color="secondary"
          sx={{
            '& .Mui-selected': {
              bgcolor: '#4caf50',
              color: '#fff',
              fontWeight: 'bold',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ResultsSection;
