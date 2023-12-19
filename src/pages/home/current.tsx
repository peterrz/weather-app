/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Card from '../../components/card';
import Button from '../../components/button';
import Divider from '../../components/divider';
import styled from 'styled-components';
import { SlLocationPin } from 'react-icons/sl';
import Row from '../../components/common/row';
import Col from '../../components/common/col';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectUserLocation } from '../../store/userLocationSlice';
import { Clock } from '../../components/common/clock';
import moment from 'moment-timezone';
import { selectWeather } from '../../store/currentWeatherSlice';
import Loading from '../../components/loading';
import { fetchForecastData } from '../../thunks/forecastWeatherThunk';
import { fetchWeatherData } from '../../thunks/currentWeatherThunk';
import { selectForecastWeather } from '../../store/forecastWeatherSlice';
//urls icon
const PngUrl = 'https://cdn.weatherbit.io/static/img/icons/';

const CurrentWeather = () => {
  const { timeZone } = useAppSelector(selectUserLocation);
  const {
    icon,
    description,
    temp,
    windSpeed,
    clouds,
    precipitation,
    weatherLoading,
  } = useAppSelector(selectWeather);
  const { latitude, longitude, loading } =
  useAppSelector(selectUserLocation);
  const { weatherLoading : ForecastLoading } =
  useAppSelector(selectForecastWeather);
  
  const dispatch = useAppDispatch();

  
  const handleButtonClick = () => {
    if (latitude && longitude && !weatherLoading && !ForecastLoading) {
      dispatch(fetchWeatherData({ latitude, longitude }));
      dispatch(fetchForecastData({ latitude, longitude }));
    }
  }
  return (
    <>
      <Card>
        <Box>
          <Row>
            <SlLocationPin />
            Tehran
          </Row>
          <Clock timezone={timeZone} />
          <p>{moment().tz(timeZone).format('DD MMM YYYY')}</p>
          <Button onClick={handleButtonClick}>Refresh</Button>
        </Box>
        <Divider />
        {weatherLoading ? (
            <Loading size={32} />
        ) : (
          <>
            <Box>
              <Img loading="lazy" src={`${PngUrl}/${icon}.png`} />
              <p>{description}</p>
            </Box>
            <Box>
              <h4>{temp} &#8451;</h4>
              <span>Wind speed: {windSpeed} m/s</span>
              <span>Cloud coverage: {clouds}%</span>
              <span>Precipitation rate: {precipitation} mm/hh</span>
            </Box>
          </>
        )}
      </Card>
    </>
  );
};

export default CurrentWeather;

const Box = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  margin: -1rem;
`;

