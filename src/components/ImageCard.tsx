import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardActionArea,
  Box,
  Typography,
} from '@mui/material';
import { PhotoModal } from './PhotoModal';
import type { UnsplashPhoto } from '../types/unsplashinterface';

interface Props {
  photo: UnsplashPhoto;
}

const ImageCard: React.FC<Props> = ({ photo }) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Card>
        <CardActionArea
          onClick={() => setOpen(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Box position="relative">
            <CardMedia
              component="img"
              height={200}
              image={photo.urls.small}
              alt={photo.alt_description ?? 'Image'}
            />
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
          </Box>
        </CardActionArea>
      </Card>

      <PhotoModal open={open} onClose={() => setOpen(false)} photo={photo} />
    </>
  );
};

export default ImageCard;
