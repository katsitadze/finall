import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  Button,
  DialogActions,
  IconButton,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import type { PhotoModalProps } from '../types/photomodalInterface';
import { useFavorites } from '../context/FavoritesContext';
import { downloadImage } from '../util/DownloadHelper';

export const PhotoModal: React.FC<PhotoModalProps> = ({ open, onClose, photo }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(photo);

  const handleDownload = () => {
    if (!photo.urls.full) return;
    downloadImage(photo.urls.full, `${photo.id}.jpg`);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background:
            'linear-gradient(145deg, rgb(199, 198, 245), rgb(180, 176, 211), rgb(124, 117, 218))',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
          borderRadius: '16px',
          color: 'black',
        },
      }}
    >
      <DialogTitle
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        {photo.alt_description || 'Photo Details'}
        <IconButton onClick={() => toggleFavorite(photo)} color={favorite ? 'error' : 'default'}>
          {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box
          component="img"
          src={photo.urls.regular}
          width="100%"
          mb={2}
          sx={{ borderRadius: 2 }}
          alt={photo.alt_description || 'Photo'}
        />
        <Typography variant="body2">
          <strong>Photographer:</strong> {photo.user.name}
        </Typography>
        <Typography variant="body2">
          <strong>Resolution:</strong> {photo.width} x {photo.height}
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleDownload} variant="contained" color="primary">
          Download
        </Button>
        <Button onClick={onClose} variant="outlined" color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
