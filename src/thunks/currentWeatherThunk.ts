import { createAsyncThunk } from '@reduxjs/toolkit';

interface WeatherData {
  icon: string;
  description: string;
  temp: string;
  windSpeed: string;
  clouds: string;
  precipitation: string;
}

interface FetchWeatherDataArgs {
  latitude: number | string;
  longitude: number | string;
}

export const fetchWeatherData = createAsyncThunk(
  'currentWeather/fetchCurrentWeatherData',
  async ({ latitude, longitude }: FetchWeatherDataArgs) => {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${process.env.REACT_APP_API_KEY_WeatherBit}&include=minutely`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    const { weather, temp, wind_spd, clouds, precip } = responseData.data[0];

    const weatherData: WeatherData = {
      icon: weather.icon.toString(),
      description: weather.description.toString(),
      temp: temp.toString(),
      windSpeed: wind_spd.toString(),
      clouds: clouds.toString(),
      precipitation: precip.toString(),
    };

    return weatherData;
  }
);
