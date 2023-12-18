/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown  } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";

import Loading from '../../components/loading';
import Card from '../../components/card';
import Button from '../../components/button';
import Divider from '../../components/divider';
import Item from '../../components/common/item';

const Forecasting = () => {
  const [isExpanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  const forecastItems = [
    { src: "https://cdn.weatherbit.io/static/img/icons/c03d.png", 
    temperature: '22', day: 'Wed', date: '7 Jun' },
    { src: "https://cdn.weatherbit.io/static/img/icons/c01d.png", 
    temperature: '22', day: 'Wed', date: '7 Jun' },
    { src: "https://cdn.weatherbit.io/static/img/icons/c01d.png", 
    temperature: '22', day: 'Wed', date: '7 Jun' },
    { src: "https://cdn.weatherbit.io/static/img/icons/c02d.png", 
    temperature: '22', day: 'Wed', date: '7 Jun' },
    { src: "https://cdn.weatherbit.io/static/img/icons/c02d.png", 
    temperature: '22', day: 'Wed', date: '7 Jun' },
    { src: "https://cdn.weatherbit.io/static/img/icons/c02d.png", 
    temperature: '22', day: 'Wed', date: '7 Jun' },
    { src: "https://cdn.weatherbit.io/static/img/icons/c03d.png", 
    temperature: '22', day: 'Wed', date: '7 Jun' },
    { src: "https://cdn.weatherbit.io/static/img/icons/u00d.png", 
    temperature: '22', day: 'Wed', date: '5 Jun' },

  ];

  return (
    <Container>
      <More onClick={handleToggle}>
        Forecasting <FaChevronDown  style={{ marginTop: '5px' }} />
      </More>

      {isExpanded && (
        <Card>
          {forecastItems.map((item, index) => (<>
            <Item src={item.src} temperature={item.temperature} day={item.day} date={item.date} />
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
    color: #2980b9;
  }
`;