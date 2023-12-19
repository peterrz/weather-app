import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import Loading from '../../components/loading';
import Card from '../../components/card';
import Divider from '../../components/divider';
import Item from '../../components/common/item';
import { useAppSelector } from '../../app/hooks';
import { selectForecastWeather } from '../../store/forecastWeatherSlice';
import moment from 'moment-timezone';

//urls icon
const PngUrl = 'https://cdn.weatherbit.io/static/img/icons/';

const Forecasting = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { forecasts, weatherLoading } = useAppSelector(selectForecastWeather);
  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <Container>
      <More onClick={handleToggle}>
        Forecasting <FaChevronDown style={{ marginTop: '5px' }} />
      </More>

      {isExpanded && (
        <Card wrap={'nowrap'}>
          {weatherLoading ? (
            <Loading />
          ) : (
            <>
              {forecasts.map((item, index) => (
                <>
                  <Item
                    key={index}
                    src={`${PngUrl}/${item.icon}.png`}
                    temperature={item.temp}
                    day={moment(item.date).format('ddd')}
                    date={moment(item.date).format('DD MMM')}
                  />
                  {index < forecasts.length - 1 && <Divider />}
                </>
              ))}
            </>
          )}
        </Card>
      )}
    </Container>
  );
};

export default Forecasting;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const More = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  color: #fff;
  margin-left: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #2980b9;
  }
`;
