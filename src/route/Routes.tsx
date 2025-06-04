import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import FavoritesPage from '../pages/FavoritesPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/favorites" element={<FavoritesPage />} />
  </Routes>
);

export default AppRoutes;
