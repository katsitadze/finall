
import React from 'react';
import { Box } from '@mui/material';
import type { UnsplashPhoto } from '../../types/unsplashinterface';
import ImageCard from '../../components/ImageCard';


interface FavoritesListProps {
  photos: UnsplashPhoto[];
}

export const FavoritesList: React.FC<FavoritesListProps> = ({ photos }) => (
  <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
    {photos.map(photo => (
      <Box key={photo.id} width={{ xs: '100%', sm: '48%', md: '30%' }}>
        <ImageCard photo={photo} />
      </Box>
    ))}
  </Box>
);