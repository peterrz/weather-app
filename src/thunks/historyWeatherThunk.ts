/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';

interface FetchWeatherDataArgs {
  latitude: number | string;
  longitude: number | string;
  startDate: string;
  endDate: string;
}

export const fetchHistoryData = createAsyncThunk(
  'historyWeather/fetchHistoryData',
  async ({ latitude, longitude, startDate, endDate }: FetchWeatherDataArgs) => {
    const response = await fetch(
      `http://api.weatherbit.io/v2.0/history/daily?lat=${latitude}&lon=${longitude}&start_date=${startDate}&end_date=${endDate}&key=${process.env.REACT_APP_API_KEY_WeatherBit}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();

    // Map the data here and return the relevant history items
    const history = responseData.data.map((item: any) => ({
      temp: item.temp,
      date: item.datetime,
    }));

    return history;
  }
);
