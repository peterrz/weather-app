import { createAsyncThunk } from '@reduxjs/toolkit';

// Define the thunk using createAsyncThunk
export const fetchUserLocation = createAsyncThunk(
  'userLocation/fetchUserLocation',
  async () => {
    try {
      return new Promise<{
        latitude: number;
        longitude: number;
        timeZone: string;
      }>((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
              const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
              resolve({ latitude, longitude, timeZone });
            },
            async error => {
              console.error('Error getting location:', error);
              try {
                const response = await fetch(
                  `https://api.ipdata.co?api-key=${process.env.REACT_APP_API_KEY_ipdata}`
                );
                const data = await response.json();
                const { latitude, longitude, time_zone } = data;
                resolve({ latitude, longitude, timeZone: time_zone.name });
              } catch (fallbackError) {
                console.error(
                  'Error getting fallback location:',
                  fallbackError
                );
                reject(fallbackError as Error);
              }
            },
            { enableHighAccuracy: true }
          );
        } else {
          console.error('Error navigator.geolocation does not provide ');
          async () => {
            try {
              const response = await fetch(
                `https://api.ipdata.co?api-key=${process.env.REACT_APP_API_KEY_ipdata}`
              );
              const data = await response.json();
              const { latitude, longitude, time_zone } = data;
              resolve({ latitude, longitude, timeZone: time_zone.name });
            } catch (fallbackError) {
              console.error('Error getting fallback location:', fallbackError);
              reject(fallbackError as Error);
            }
          };
        }
      });
    } catch (error) {
      console.error('Error getting location:', error);
      throw error;
    }
  }
);
