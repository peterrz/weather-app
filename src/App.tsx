import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeScreen from './pages/home';
import History from './pages/history';
import Sidebar from './components/sidebar';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/handler';
import { selectUserLocation } from './store/userLocationSlice';
import Loading from './components/loading';
import { fetchUserLocation } from './thunks/userLocationThunk';
import { fetchWeatherData } from './thunks/currentWeatherThunk';
import { fetchForecastData } from './thunks/forecastWeatherThunk';
import { useAppSelector, useAppDispatch } from './app/hooks';

function App() {
  const dispatch = useAppDispatch();
  const { latitude, longitude, loading } = useAppSelector(selectUserLocation);

  useEffect(() => {
    if (loading) {
      dispatch(fetchUserLocation());
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(fetchWeatherData({ latitude, longitude }));
      dispatch(fetchForecastData({ latitude, longitude }));
    }
  }, [latitude, longitude]);

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* <ComponentWithError /> */}
        <Sidebar />
        <div className="main-container">
          {loading ? (
            <Loading size={44} />
          ) : (
            <Routes>
              <Route path="/history" element={<History />} />
              <Route path="/" element={<HomeScreen />}>
                <Route path="*" element={<Navigate to="/" />} />
              </Route>
            </Routes>
          )}
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
