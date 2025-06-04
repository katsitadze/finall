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
      label=""
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
  
    slotProps={{
      input: {
       sx: {
      color: 'black',
      backgroundColor: 'rgba(205, 221, 214, 0.91)',
      },
     },
  inputLabel: {
    sx: {
      color: 'black',
    },
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
