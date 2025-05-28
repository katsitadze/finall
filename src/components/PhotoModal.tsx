import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
} from '@mui/material';

export const PhotoModal = ({ open, onClose, photo }: any) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{photo.alt_description || 'Photo Details'}</DialogTitle>
      <DialogContent>
        <Box component="img" src={photo.urls.regular} width="100%" mb={2} />
        <Typography variant="body2">Photographer: {photo.user.name}</Typography>
        <Typography variant="body2">Resolution: {photo.width}x{photo.height}</Typography>
        <Typography variant="body2">Downloads: {photo.downloads || 'N/A'}</Typography>
      </DialogContent>
    </Dialog>
  );
};
