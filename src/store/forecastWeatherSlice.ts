import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchForecastData } from '../thunks/forecastWeatherThunk';

interface ForecastWeatherState {
  forecasts: Array<{
    icon: string;
    temp: string;
    date: string;
  }>;
  error: Error | null;
  weatherLoading: boolean;
}

const initialState: ForecastWeatherState = {
  forecasts: [],
  error: null,
  weatherLoading: true,
};

const forecastWeatherSlice = createSlice({
  name: 'forecastWeather',
  initialState,
  reducers: {
    setForecastWeatherData: (
      state,
      action: PayloadAction<
        Array<{
          icon: string;
          temp: string;
          date: string;
        }>
      >
    ) => {
      state.forecasts = action.payload;
      state.weatherLoading = false;
      state.error = null;
    },
    setForecastWeatherLoading: state => {
      state.weatherLoading = true;
    },
    setForecastWeatherError: (state, action: PayloadAction<Error>) => {
      state.weatherLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchForecastData.pending, state => {
      state.weatherLoading = true;
      state.error = null;
    });
    builder.addCase(fetchForecastData.fulfilled, (state, action) => {
      state.weatherLoading = false;
      state.error = null;

      // Update the forecasts array in the state with the mapped data
      state.forecasts = action.payload;
    });
    builder.addCase(fetchForecastData.rejected, (state, action) => {
      state.weatherLoading = false;
      state.error = action.error as Error;
    });
  },
});

export const {
  setForecastWeatherData,
  setForecastWeatherLoading,
  setForecastWeatherError,
} = forecastWeatherSlice.actions;

export const selectForecastWeather = (state: {
  forecastWeather: ForecastWeatherState;
}) => state.forecastWeather;

export default forecastWeatherSlice.reducer;
