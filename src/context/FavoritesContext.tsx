import React, { createContext, useContext, useEffect, useState } from 'react';
import type { UnsplashPhoto } from '../types/unsplashinterface';

interface FavoritesContextType {
  favorites: UnsplashPhoto[];
  toggleFavorite: (photo: UnsplashPhoto) => void;
  isFavorite: (photo: UnsplashPhoto) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<UnsplashPhoto[]>(() => {
    // 초기 მდგომარეობის მისაღებად პირდაპირ თუ localStorage-შია
    try {
      const stored = localStorage.getItem('favorites');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (photo: UnsplashPhoto) => {
    setFavorites((prev) =>
      prev.some((p) => p.id === photo.id)
        ? prev.filter((p) => p.id !== photo.id)
        : [...prev, photo]
    );
  };

  const isFavorite = (photo: UnsplashPhoto) => favorites.some((p) => p.id === photo.id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error('useFavorites must be used within FavoritesProvider');
  return context;
};
