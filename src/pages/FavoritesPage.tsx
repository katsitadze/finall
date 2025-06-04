import { Box, Container, Typography, Button } from '@mui/material';
import { useFavorites } from '../context/FavoritesContext';
import ImageCard from '../components/ImageCard';
import { useNavigate } from 'react-router-dom';

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: 'rgb(80, 58, 80)', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" color="white" gutterBottom>
          My Favorites
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          sx={{ mb: 2 }}
          onClick={() => navigate('/')}
        >
          Back to Home
        </Button>

        {favorites.length === 0 ? (
          <Typography color="white">No favorite photos yet.</Typography>
        ) : (
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
            {favorites.map((photo) => (
              <Box key={photo.id} width={{ xs: '100%', sm: '48%', md: '30%' }}>
                <ImageCard photo={photo} />
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default FavoritesPage;
