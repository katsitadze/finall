import { Card, CardMedia, CardActionArea } from '@mui/material';
import { useState } from 'react';
import { PhotoModal } from './PhotoModal';

export const ImageCard = ({ photo }: { photo: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card>
        <CardActionArea onClick={() => setOpen(true)}>
          <CardMedia
            component="img"
            height="200"
            image={photo.urls.small}
            alt={photo.alt_description}
          />
        </CardActionArea>
      </Card>
      <PhotoModal open={open} onClose={() => setOpen(false)} photo={photo} />
    </>
  );
};