import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import AppRoutes from './route/Routes';
import { SnackbarProvider } from 'notistack';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './api/queryClient';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <FavoritesProvider>
      <BrowserRouter>
        <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
          <AppRoutes />
        </SnackbarProvider>
      </BrowserRouter>
    </FavoritesProvider>
  </QueryClientProvider>
);

export default App;
