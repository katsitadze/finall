import React from 'react';
import { TextField } from '@mui/material';

interface Props {
  value: string;
  onChange: (val: string) => void;
  visible?: boolean;
  onClose?: () => void;
}

export const SearchInput: React.FC<Props> = ({
  value,
  onChange,
  visible = true,
  onClose,
}) => {
  if (!visible) return null;

  return (
    <TextField
      autoFocus
      label="Search Unsplash"
      variant="outlined"
      fullWidth
      margin="normal"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      onBlur={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && onClose) {
          onClose();
        }
      }}
      InputLabelProps={{ style: { color: '#ffffff' } }} // Label color
      InputProps={{
        style: {
          color: '#ffffff',                // Input text color
          backgroundColor: '#2c2f4a',      // Input background
        },
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#888',
          },
          '&:hover fieldset': {
            borderColor: '#aaa',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#ffffff',
          },
        },
      }}
    />
  );
};
