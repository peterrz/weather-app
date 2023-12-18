import React from 'react';
import Card from '../../components/card';
import Button from '../../components/button';
import Divider from '../../components/divider';
import styled from 'styled-components';
import { SlLocationPin } from "react-icons/sl";


const CurrentWeather = () => {
  return <>
  <Card>
    <Box>
      <Row><SlLocationPin />Tehran</Row>
      <h4>10:20 pm</h4>
      <p>20 jun 2023</p>
      <Button onClick={()=> console.log('click')}>Refresh</Button>
    </Box>
    <Divider/>
    <Box><Img  loading="lazy" src='https://cdn.weatherbit.io/static/img/icons/c02d.png'/>
    <p>Rain</p>
    </Box>
    <Box>
      <h4>23 &#8451;</h4>
      <span>Wind speed: 53 m/s</span>
      <span>Cloud coverage: 5%</span>
      <span>Precipitation rate: 5 mm/hh</span>
    </Box>
    </Card>
  </>;
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

const Row = styled.div`
display: flex;
flex-direction:row;
align-items: center;
justify-content: center;
gap: 0.5rem;
color: #fff;
font-size: 1.3rem;`;


const Img = styled.img`
  width: 150px; 
  height: 150px;
  margin: -1rem;
`;
