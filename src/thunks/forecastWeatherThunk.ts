/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';

interface FetchWeatherDataArgs {
  latitude: number | string;
  longitude: number | string;
}

export const fetchForecastData = createAsyncThunk(
  'forecastWeather/fetchForecastData',
  async ({ latitude, longitude }: FetchWeatherDataArgs) => {
    const response = await fetch(
      `http://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=${process.env.REACT_APP_API_KEY_WeatherBit}&days=7`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();

    // Map the data here and return the relevant forecast items
    const forecasts = responseData.data.map((forecastItem: any) => ({
      icon: forecastItem.weather.icon,
      temp: forecastItem.temp,
      date: forecastItem.datetime, 
    }));

    return forecasts;
  }
);
