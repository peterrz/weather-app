/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Loading from '../../components/loading';
import Card from '../../components/card';
import Button from '../../components/button';
import Divider from '../../components/divider';
import styled from 'styled-components';
import { SlLocationPin } from "react-icons/sl";
import CurrentWeather from './current';
import Forecasting from './forecasting';


const Home = () => {
  return <>
  <CurrentWeather />
  <Forecasting />
 </>;
};

export default Home;

