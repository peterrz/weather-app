import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserLocation } from '../thunks/userLocationThunk';

interface UserLocationState {
  latitude: number | null;
  longitude: number | null;
  loading: boolean;
  timeZone: string;
  error: Error | null;
}

const initialState: UserLocationState = {
  latitude: null,
  longitude: null,
  loading: true,
  timeZone: 'Asia/Tehran',
  error: null,
};

const userLocationSlice = createSlice({
  name: 'userLocation',
  initialState,
  reducers: {
    setUserLocation: (
      state,
      action: PayloadAction<{
        latitude: number;
        longitude: number;
        timeZone: string;
      }>
    ) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.timeZone = action.payload.timeZone;
      state.loading = false;
      state.error = null;
    },
    setLoading: state => {
      state.loading = true;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  // Add extra reducers to handle the asynchronous logic
  extraReducers: builder => {
    builder.addCase(fetchUserLocation.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUserLocation.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.timeZone = action.payload.timeZone;
    });
    builder.addCase(fetchUserLocation.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error as Error;
    });
  },
});

export const { setUserLocation, setLoading, setError } =
  userLocationSlice.actions;
export const selectUserLocation = (state: {
  userLocation: UserLocationState;
}) => state.userLocation;
export default userLocationSlice.reducer;
