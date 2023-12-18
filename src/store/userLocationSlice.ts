// src/store/userLocationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserLocationState {
  latitude: number | null;
  longitude: number | null;
  loading: boolean;
  error: Error | null;
}

const initialState: UserLocationState = {
  latitude: null,
  longitude: null,
  loading: false,
  error: null,
};

const userLocationSlice = createSlice({
  name: 'userLocation',
  initialState,
  reducers: {
    setUserLocation: (state, action: PayloadAction<{ latitude: number; longitude: number }>) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setUserLocation, setLoading, setError } = userLocationSlice.actions;
export const selectUserLocation = (state: { userLocation: UserLocationState }) => state.userLocation;
export default userLocationSlice.reducer;
