import React from 'react';
import styled from 'styled-components';

interface ForecastProps {
  src?: string;
  temperature: string;
  day: string;
  date: string;
}

const ForecastItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Img = styled.img`
  width: 56px;
`;

const Temperature = styled.div`
  color: #fff;
  text-align: center;
  margin-top: 1.3rem;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 500;
`;

const Day = styled.div`
  color: #fff;
  text-align: center;
  margin-top: 1.3rem;
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
   {src ? <Img loading="lazy" src={src} /> : null}
    <Temperature>{temperature} &#8451;</Temperature>
    <Day>{day}</Day>
    <Date>{date}</Date>
  </ForecastItem>
);

export default Item;
