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
import { useSnackbar } from 'notistack';  // Import notistack hook
import type { UnsplashPhoto } from '../types/unsplashinterface';

interface Props {
  photo: UnsplashPhoto;
}

const ImageCard: React.FC<Props> = ({ photo }) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();
  const { enqueueSnackbar } = useSnackbar();  // Snackbar function

  const handleOpen = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setOpen(true);
  };

  const handleToggleFavorite = (photo: UnsplashPhoto) => {
    toggleFavorite(photo);
    const favorited = isFavorite(photo);
    enqueueSnackbar(
      favorited ? 'Removed from favorites' : 'Added to favorites',
      { variant: favorited ? 'warning' : 'success' }
    );
  };

  return (
    <>
      <Card>
        <CardActionArea
  component="div"  // აქ გაძლევს div-ის გამოყენების საშუალებას button-ის ნაცვლად
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
          {/* Heart Icon */}
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handleToggleFavorite(photo);
            }}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: isFavorite(photo) ? 'red' : 'white',
              backgroundColor: 'rgba(0,0,0,0.3)',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
            }}
            aria-label="toggle favorite"
          >
            {isFavorite(photo) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
