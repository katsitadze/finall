import { TextField } from '@mui/material';

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const SearchInput = ({ value, onChange }: Props) => (
  <TextField
    label="Search Unsplash"
    variant="outlined"
    fullWidth
    margin="normal"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);
