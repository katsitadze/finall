import { Pagination, Box } from '@mui/material';

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationBar = ({ page, totalPages, onPageChange }: Props) => (
  <Box mt={4} display="flex" justifyContent="center">
    <Pagination
      count={totalPages}
      page={page}
      onChange={(_, val) => onPageChange(val)}
      siblingCount={1}
      boundaryCount={1}
      showFirstButton
      showLastButton
     sx={{
  '& .MuiPaginationItem-root': {
    color: '#555',  
    fontWeight: 500,
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: 'rgba(100, 181, 246, 0.2)', 
    },
    '&.Mui-selected': {
      backgroundColor: '#1976d2',  
      color: 'white',           
      fontWeight: 700,
    },
  },
  '& .MuiPagination-ul': {
    gap: '8px', 
  },
}}

    />
  </Box>
);
