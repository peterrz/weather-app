/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Loading from '../../components/loading';
import Card from '../../components/card';
import Button from '../../components/button';
import Divider from '../../components/divider';
import styled from 'styled-components';
import { SlLocationPin } from 'react-icons/sl';
import CurrentWeather from './current';
import Forecasting from './forecasting';

const Home = () => {
  // Check WeatherBit API key
  if (
    !process.env.REACT_APP_API_KEY_WeatherBit ||
    process.env.REACT_APP_API_KEY_WeatherBit === ''
  ) {
    throw new Error(
      'WeatherBit API key is missing or empty. Please provide a valid API key.'
    );
  }

  // Check ipdata API key
  if (
    !process.env.REACT_APP_API_KEY_ipdata ||
    process.env.REACT_APP_API_KEY_ipdata === ''
  ) {
    throw new Error(
      'ipdata API key is missing or empty. Please provide a valid API key.'
    );
  }

  return (
    <>
      <CurrentWeather />
      <Forecasting />
    </>
  );
};

export default Home;
