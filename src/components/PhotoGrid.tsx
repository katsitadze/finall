import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
} from '@mui/material';
import type { UnsplashPhoto } from '../types/unsplashinterface';

interface Props {
  open: boolean;
  onClose: () => void;
  photo: UnsplashPhoto;
}

export const PhotoModal: React.FC<Props> = ({ open, onClose, photo }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background:
            'linear-gradient(145deg, rgb(77, 116, 101), rgb(73, 94, 75), rgb(70, 92, 74))',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
          borderRadius: '16px',
          color: 'black',
        },
      }}
    >
      <DialogTitle>{photo.alt_description || 'Photo Details'}</DialogTitle>
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
        <Typography variant="body2">
          <strong>Downloads:</strong> {photo.downloads ?? 'N/A'}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};
