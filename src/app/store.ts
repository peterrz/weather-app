import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userLocationReducer from '../store/userLocationSlice';
import currentWeatherReducer from '../store/currentWeatherSlice';
import forecastWeatherReducer from '../store/forecastWeatherSlice';
import historyWeatherReducer from '../store/historyWeatherSlice';
const store = configureStore({
  reducer: {
    userLocation: userLocationReducer,
    currentWeather: currentWeatherReducer,
    forecastWeather: forecastWeatherReducer,
    historyWeather: historyWeatherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
