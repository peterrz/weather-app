import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userLocationReducer from '../store/userLocationSlice';

const store = configureStore({
  reducer: {
    userLocation: userLocationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;