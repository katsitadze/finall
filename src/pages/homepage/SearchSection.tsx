import { Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { SearchInput } from '../../components/SearchInput';

interface Props {
  query: string;
  onSearch: (val: string) => void;
  showInput: boolean;
  toggleInput: () => void;
}

const SearchSection = ({ query, onSearch, showInput, toggleInput }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      {!showInput && (
        <Box
          display="flex"
          justifyContent="center"  // აქ არის ცენტრში გასწორება
          gap={2}                  // Button-ებს შორის დისტანცია
          mb={2}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={toggleInput}
            startIcon={<SearchIcon />}
            sx={{
              bgcolor: '#444444',
              '&:hover': { bgcolor: '#388e3c' },
              textTransform: 'none',
              fontWeight: 'bold',
              boxShadow: 'none',
            }}
          >
            Search
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/favorites')}
            sx={{
              bgcolor: '#444444',
              '&:hover': { bgcolor: '#388e3c' },
              textTransform: 'none',
              fontWeight: 'bold',
              boxShadow: 'none',
            }}
          >
            Favorites
          </Button>
        </Box>
      )}

      <SearchInput
        value={query}
        onChange={onSearch}
        visible={showInput}
        onClose={toggleInput}
      />
    </>
  );
};

export default SearchSection;
