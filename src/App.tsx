/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeScreen from './pages/home';
import History from './pages/history';
import Sidebar from './components/sidebar';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/handler';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLocation, setLoading, setError, selectUserLocation } from './store/userLocationSlice';
import Loading from './components/loading';
import Row from './components/common/row';
import { fetchUserLocation } from './thunks/userLocationThunk';
import { useAppSelector, useAppDispatch } from "./app/hooks";


function App() {

  const dispatch = useAppDispatch();
  const { latitude, longitude, loading, error } = useAppSelector(selectUserLocation);

  useEffect(() => {
    dispatch(fetchUserLocation());
  }, [dispatch]);
  // useEffect(() => {
  //   // Get user's location
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         console.log(position);
  //         const { latitude, longitude } = position.coords;
  //         console.log(`User's location: Latitude ${latitude}, Longitude ${longitude}`);
  //       },
  //       (error) => {
  //         console.error('Error getting location:', error);
  //         // Fallback to IP-based location
  //         fetch('https://ipapi.co/8.8.8.8/json/ ')
  //           .then((response) => response.json())
  //           .then((data) => {
  //             const { latitude, longitude } = data;
  //             console.log(`Fallback location (IP-based): Latitude ${latitude}, Longitude ${longitude}`);
  //           })
  //           .catch((fallbackError) => {
  //             console.error('Error getting fallback location:', fallbackError);
  //           });
  //       },
  //       { enableHighAccuracy: true }
  //     );
  //   } else {
  //     console.error('Geolocation is not supported by this browser.');
  //   }
  // }, []); // Empty dependency array to run the effect only once when the component mounts

  // const ComponentWithError = () => {
  //   throw new Error('This is a test error');
  // };


  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      {/* <ComponentWithError /> */}
      <Sidebar />
      <div className="main-container">
        {loading ?  ( <Row><Loading size={44}/></Row>) : 
          <Routes>
              <Route path="/history" element={<History />} />
              <Route path="/" element={<HomeScreen />}>
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
          }
        </div>
        </ErrorBoundary>
    </div>
  );
}

export default App;
