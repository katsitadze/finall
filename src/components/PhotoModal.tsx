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

  const handleDownload = async () => {
    if (!photo.urls.full) return;

    await downloadImage(photo.urls.full, `${photo.id}.jpg`);
    onClose(); 
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            background:
              'linear-gradient(145deg, rgb(95, 126, 97), rgb(125, 155, 132), rgb(117, 218, 147))',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
            borderRadius: '16px',
            color: 'black',
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: 'rgba(255, 255, 255, 0.35)',  
          borderRadius: 2,                        
          padding: '8px 16px',
          fontWeight: 'bold',
          color: 'black',
        }}
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
        <Typography variant="body2" sx={{ color: 'white' }}>
          <strong>Photographer:</strong> {photo.user.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'white' }}>
          <strong>Resolution:</strong> {photo.width} x {photo.height}
        </Typography>
      </DialogContent>

      <DialogActions>
  <Button
    onClick={handleDownload}
    variant="contained"
    sx={{
      mb: 2,
      backgroundColor: '#444444',
      color: 'white',
      '&:hover': {
        backgroundColor: '#333333',
      },
    }}
  >
    Download
  </Button>
  <Button
    onClick={onClose}
    variant="outlined"
    sx={{
      mb: 2,
      borderColor: '#444444',
      color: '#444444',
      '&:hover': {
        borderColor: '#333333',
        backgroundColor: 'rgba(68, 68, 68, 0.1)',
        color: '#333333',
      },
    }}
  >
    Close
  </Button>
</DialogActions>
    </Dialog>
  );
};
