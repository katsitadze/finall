import React from 'react';
import { TextField } from '@mui/material';

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const SearchInput: React.FC<Props> = ({ value, onChange }) => (
  <TextField
    label="Search Unsplash"
    variant="outlined"
    fullWidth
    margin="normal"
    value={value}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    sx={{
      '& .MuiInputBase-input': {
        color: 'black',
        backgroundColor: 'rgb(191, 191, 243)',
      },
      '& .MuiInputLabel-root': {
        color: 'black',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'black',
        },
        '&:hover fieldset': {
          borderColor: 'gray',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'black',
        },
      },
    }}
  />
);
