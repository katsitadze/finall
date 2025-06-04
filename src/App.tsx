import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import AppRoutes from './route/Routes';
import { SnackbarProvider } from 'notistack';

const App = () => (
  <FavoritesProvider>
    <BrowserRouter>
      <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
        <AppRoutes />
      </SnackbarProvider>
    </BrowserRouter>
  </FavoritesProvider>
);

export default App;
