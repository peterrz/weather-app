/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/button';
import Card from '../../components/card';
import Loading from '../../components/loading';
import Divider from '../../components/divider';
import Row from '../../components/common/row';
import Col from '../../components/common/col';
import Item from '../../components/common/item';
interface ForecastItem {
    src: string;
    temperature: string;
    day: string;
    date: string;
}

const History = () => {

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ForecastItem[]>([]);

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
    { src: "https://cdn.weatherbit.io/static/img/icons/u00d.png", 
    temperature: '22', day: 'Wed', date: '5 Jun' },
    { src: "https://cdn.weatherbit.io/static/img/icons/u00d.png", 
    temperature: '22', day: 'Wed', date: '5 Jun' },
    { src: "https://cdn.weatherbit.io/static/img/icons/u00d.png", 
    temperature: '22', day: 'Wed', date: '5 Jun' },
    { src: "https://cdn.weatherbit.io/static/img/icons/u00d.png", 
    temperature: '22', day: 'Wed', date: '5 Jun' },

  ];

  const handleButtonClick = () => {
    // Handle the button click event here
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    setLoading(!loading);
    setData(forecastItems);
  };

  return <Col>
    <Row>
    <Row>
      <span>Start Date:</span>
    <DateInput
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      </Row>
      <Row>
      <span>End Date:</span>
      <DateInput
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      </Row>
      <Button onClick={handleButtonClick}>View</Button>
    </Row>
    {loading && <Row>
      <Loading />
    </Row>}
    
    {data.length && (
        <Card wrap={true}>
          {data.map((item, index) => (<>
            <Item src={item.src} temperature={item.temperature} day={item.day} date={item.date} />
            {index < data.length - 1 && <Divider />}
            </>
          ))}
        </Card>
      )}
  </Col>;
};

export default History;

const DateInput = styled.input`
  padding-inline: 1rem;
  font-size: 1.1rem;
  border-radius: 10px;
  height: 38px;
border: 1px solid #222831;
background: #FBFFFF; 
`;
