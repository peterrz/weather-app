import { setUserLocation, setLoading, setError } from '../store/userLocationSlice';
import  {AppThunk}  from '../app/store';

export const fetchUserLocation: AppThunk = () => async (dispatch: (arg0: { payload: { latitude: number; longitude: number; } | Error | undefined; type: "userLocation/setLoading" | "userLocation/setError" | "userLocation/setUserLocation"; }) => void) => {
  dispatch(setLoading());
  try {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(setUserLocation({ latitude, longitude }));
        },
        async (error) => {
          console.error('Error getting location:', error);
          try {
            const response = await fetch('https://ipapi.co/8.8.8.8/json/');
            const data = await response.json();
            const { latitude, longitude } = data;
            dispatch(setUserLocation({ latitude, longitude }));
          } catch (fallbackError) {
            console.error('Error getting fallback location:', fallbackError);
            dispatch(setError(fallbackError as Error));
          }
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      dispatch(setError(new Error('Geolocation is not supported by this browser.')));
    }
  } catch (error) {
    console.error('Error getting location:', error);
    dispatch(setError(error as Error));
  }
};