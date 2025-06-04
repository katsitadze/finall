import { Box, Container, Typography, Pagination } from '@mui/material';
import { useFavorites } from '../context/FavoritesContext';
import BackButton from './favoritpage/BackButton';
import { FavoritesList } from './favoritpage/FavoritesList';
import { useState } from 'react';

const ITEMS_PER_PAGE = 20;

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(favorites.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedPhotos = favorites.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ backgroundColor: 'rgb(86, 110, 79)', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" color="white" gutterBottom>
          My Favorites
        </Typography>

        <BackButton />

        {favorites.length === 0 ? (
          <Typography color="white">No favorite photos yet.</Typography>
        ) : (
          <>
            <FavoritesList photos={paginatedPhotos} />

            <Box mt={4} display="flex" justifyContent="center">
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                siblingCount={1}
                boundaryCount={1}
                showFirstButton
                showLastButton
                sx={{
                  '& .MuiPaginationItem-root': {
                    color: 'white',
                    '&.Mui-selected': {
                      backgroundColor: '#ffffff55',
                      color: 'black',
                    },
                  },
                }}
              />
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
};

export default FavoritesPage;
