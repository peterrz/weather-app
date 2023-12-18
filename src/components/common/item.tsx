import React from 'react';
import styled from 'styled-components';

interface ForecastProps {
  src: string;
  temperature: string;
  day: string;
  date: string;
}

const ForecastItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const Img = styled.img`
  aspect-ratio: 1.05;
  object-fit: contain;
  object-position: center;
  width: 56px;
  overflow: hidden;
`;

const Temperature = styled.div`
  color: #fff;
  text-align: center;
  margin-top: 1.5rem;
  width: 100%;
  font-size: 1.3rem;
  font-weight: 700;
`;

const Day = styled.div`
  color: #fff;
  text-align: center;
  margin-top: 1.5rem;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
`;

const Date = styled.div`
  color: #fff;
  text-align: center;
  margin-top: 5px;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
`;

const Item: React.FC<ForecastProps> = ({ src, temperature, day, date }) => (
  <ForecastItem>
    <Img loading="lazy" src={src} />
    <Temperature>{temperature} &#8451;</Temperature>
    <Day>{day}</Day>
    <Date>{date}</Date>
  </ForecastItem>
);

export default Item;