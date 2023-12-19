import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchHistoryData } from '../thunks/historyWeatherThunk';

interface historyWeatherState {
  history: Array<{
    temp: string;
    date: string;
  }>;
  error: Error | null;
  weatherLoading: boolean;
}

const initialState: historyWeatherState = {
  history: [],
  error: null,
  weatherLoading: false,
};

const historyWeatherSlice = createSlice({
  name: 'historyWeather',
  initialState,
  reducers: {
    setHistoryWeatherLoading: state => {
      state.weatherLoading = true;
    },
    setHistoryWeatherError: (state, action: PayloadAction<Error>) => {
      state.weatherLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchHistoryData.pending, state => {
      state.weatherLoading = true;
      state.error = null;
    });
    builder.addCase(fetchHistoryData.fulfilled, (state, action) => {
      state.weatherLoading = false;
      state.error = null;

      // Update the forecasts array in the state with the mapped data
      state.history = action.payload;
    });
    builder.addCase(fetchHistoryData.rejected, (state, action) => {
      state.weatherLoading = false;
      state.error = action.error as Error;
    });
  },
});

export const {
  setHistoryWeatherError,
  setHistoryWeatherLoading,
} = historyWeatherSlice.actions;

export const selectHistoryWeather = (state: {
  historyWeather: historyWeatherState;
}) => state.historyWeather;

export default historyWeatherSlice.reducer;
