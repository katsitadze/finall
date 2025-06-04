import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardActionArea,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useFavorites } from '../context/FavoritesContext';
import { PhotoModal } from './PhotoModal';
import { useFavoriteSnackbar } from '../hooks/useFavoriteSnackbar'; // ჰუკი, რომელიც snackbar-ის ლოგიკას ინახავს
import type { UnsplashPhoto } from '../types/unsplashinterface';

interface Props {
  photo: UnsplashPhoto;
}

const ImageCard: React.FC<Props> = ({ photo }) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();
  const { notifyFavoriteChange } = useFavoriteSnackbar();

  const handleOpen = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setOpen(true);
  };

  const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleFavorite(photo);
    notifyFavoriteChange(!isFavorite(photo)); // უკვე ტoggled სტატუსი
  };

  const favorited = isFavorite(photo);

  return (
    <>
      <Card>
        <CardActionArea
          component="div"
          onClick={handleOpen}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          sx={{ position: 'relative' }}
        >
          <CardMedia
            component="img"
            height={200}
            image={photo.urls.small}
            alt={photo.alt_description ?? 'Image'}
          />

          <IconButton
            onClick={handleToggleFavorite}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: favorited ? 'red' : 'white',
              backgroundColor: 'rgba(0,0,0,0.3)',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
            }}
            aria-label="toggle favorite"
          >
            {favorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>

          {hovered && (
            <Box
              position="absolute"
              bottom={0}
              width="100%"
              bgcolor="rgba(0, 0, 0, 0.6)"
              color="white"
              px={1}
              py={0.5}
            >
              <Typography variant="body2" noWrap>
                {photo.alt_description ?? 'No description'}
              </Typography>
            </Box>
          )}
        </CardActionArea>
      </Card>

      <PhotoModal open={open} onClose={() => setOpen(false)} photo={photo} />
    </>
  );
};

export default ImageCard;
