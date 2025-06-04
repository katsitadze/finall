
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',   
        mb: 2,
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#444444',
          '&:hover': {
            backgroundColor: '#333333',
          },
        }}
        onClick={() => navigate('/')}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default BackButton;
