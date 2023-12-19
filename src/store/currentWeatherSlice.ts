import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchWeatherData } from '../thunks/currentWeatherThunk';

interface WeatherState {
  icon: string;
  description: string;
  temp: string;
  windSpeed: string;
  clouds: string;
  precipitation: string;
  error: Error | null;
  weatherLoading: boolean;
}

const initialState: WeatherState = {
  icon: '',
  description: '',
  temp: '',
  windSpeed: '',
  clouds: '',
  precipitation: '',
  error: null,
  weatherLoading: true,
};

const weatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {
    setWeatherData: (
      state,
      action: PayloadAction<{
        icon: string;
        description: string;
        temp: string;
        windSpeed: string;
        clouds: string;
        precipitation: string;
      }>
    ) => {
      state.icon = action.payload.icon;
      state.description = action.payload.description;
      state.temp = action.payload.temp;
      state.windSpeed = action.payload.windSpeed;
      state.clouds = action.payload.clouds;
      state.precipitation = action.payload.precipitation;
      state.weatherLoading = false;
      state.error = null;
    },
    setWeatherLoading: state => {
      state.weatherLoading = true;
    },
    setWeatherError: (state, action: PayloadAction<Error>) => {
      state.weatherLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchWeatherData.pending, state => {
      state.weatherLoading = true;
      state.error = null;
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.weatherLoading = false;
      state.error = null;
      state.icon = action.payload.icon;
      state.description = action.payload.description;
      state.temp = action.payload.temp;
      state.windSpeed = action.payload.windSpeed;
      state.clouds = action.payload.clouds;
      state.precipitation = action.payload.precipitation;
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.weatherLoading = false;
      state.error = action.error as Error;
    });
  },
});

export const { setWeatherData, setWeatherLoading, setWeatherError } =
  weatherSlice.actions;
export const selectWeather = (state: { currentWeather: WeatherState }) =>
  state.currentWeather;
export default weatherSlice.reducer;
