
import { useSnackbar } from 'notistack';

export function useFavoriteSnackbar() {
  const { enqueueSnackbar } = useSnackbar();

  const notifyFavoriteChange = (isFavorited: boolean) => {
    enqueueSnackbar(
      isFavorited ? 'Added to favorites' : 'Removed from favorites',
      { variant: isFavorited ? 'success' : 'warning' }
    );
  };

  return { notifyFavoriteChange };
}
