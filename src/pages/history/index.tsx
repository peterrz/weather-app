/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/button';
import Card from '../../components/card';
import Loading from '../../components/loading';
import Divider from '../../components/divider';
// import { FaEdit, FaPrint, FaAddressCard } from 'react-icons/fa';
interface ForecastItem {
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
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },
    { temperature: '22', day: 'Wed', date: '7 Jun' },

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
            <ForecastItem key={index}>
              <Img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dab3b778ab2e96f807da45b3115a790e1419940d1ea731ac1160a006cb8099cd?"
              />
              <Temperature>{item.temperature} &#8451;</Temperature>
              <Day>{item.day}</Day>
              <Date>{item.date}</Date>
              
            </ForecastItem>
            {index < data.length - 1 && <Divider />}
            </>
          ))}
        </Card>
      )}
  </Col>;
};

export default History;

const Col = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
gap: 2rem;
`;

const Row = styled.div`
display: flex;
flex-direction:row;
align-items: center;
justify-content: space-evenly;
gap: 1rem;
color: #fff;
font-size: 1.3rem;
@media screen and (max-width: 1340px) {
  flex-direction: column;
}
`;

const DateInput = styled.input`
  padding-inline: 1rem;
  font-size: 1rem;
  border-radius: 10px;
  height: 42px;
border: 1px solid #222831;
background: #FBFFFF; 
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
