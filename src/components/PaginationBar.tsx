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
          color: 'white',
          '&.Mui-selected': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
          },
        },
      }}
    />
  </Box>
);