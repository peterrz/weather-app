/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown  } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";

import Loading from '../../components/loading';
import Card from '../../components/card';
import Button from '../../components/button';
import Divider from '../../components/divider';

const Forecasting = () => {
  const [isExpanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  const forecastItems = [
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },

    // Add more forecast items as needed
  ];

  return (
    <Container>
      <More onClick={handleToggle}>
        Forecasting <FaChevronDown  style={{ marginTop: '5px' }} />
      </More>

      {isExpanded && (
        <Card>
          {forecastItems.map((item, index) => (<>
            <ForecastItem key={index}>
              <Img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dab3b778ab2e96f807da45b3115a790e1419940d1ea731ac1160a006cb8099cd?"
              />
              <Temperature>{item.temperature} &#8451;</Temperature>
              <Day>{item.day}</Day>
              <Date>{item.date}</Date>
              
            </ForecastItem>
            {index < forecastItems.length - 1 && <Divider />}
            </>
          ))}
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
    color: #ffd700;
  }
`;

const ForecastItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const Img = styled.img`
  aspect-ratio: 1.05;
  object-fit: contain;
  object-position: center;
  width: 100%;
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
