import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/button';
import Card from '../../components/card';
import Loading from '../../components/loading';
import Divider from '../../components/divider';
import Row from '../../components/common/row';
import Col from '../../components/common/col';
import Item from '../../components/common/item';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectHistoryWeather } from '../../store/historyWeatherSlice';
import moment from 'moment';
import { selectUserLocation } from '../../store/userLocationSlice';
import { fetchHistoryData } from '../../thunks/historyWeatherThunk';

const History = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [startDate, setStartDate] = useState(moment().format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(
    moment().add(7, 'days').format('YYYY-MM-DD')
  );

  const dispatch = useAppDispatch();
  const { history, weatherLoading } = useAppSelector(selectHistoryWeather);
  const { latitude, longitude } = useAppSelector(selectUserLocation);

  const handleButtonClick = () => {
    setExpanded(true);

    if (weatherLoading) return;

    if (!startDate && !endDate) {
      throw new Error(`please set date`);
    }
    if (latitude && longitude) {
      dispatch(fetchHistoryData({ latitude, longitude, startDate, endDate }));
    } else throw new Error(`Error getting location`);
  };

  return (
    <Col>
      <Row>
        <Row>
          <span>Start Date:</span>
          <DateInput
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
        </Row>
        <Row>
          <span>End Date:</span>
          <DateInput
            type="date"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
        </Row>
        <Button onClick={handleButtonClick}>View</Button>
      </Row>
      {isExpanded ? (
        <>
          {weatherLoading ? (
            <Row>
              <Loading />
            </Row>
          ) : (
            <>
              <Card wrap={'wrap'}>
                {history.map((item, index) => (
                  <>
                    <Item
                      temperature={item.temp}
                      day={moment(item.date).format('ddd')}
                      date={moment(item.date).format('DD MMM')}
                    />
                    {index < history.length - 1 && <Divider />}
                  </>
                ))}
              </Card>
            </>
          )}
        </>
      ) : null}
    </Col>
  );
};

export default History;

const DateInput = styled.input`
  padding-inline: 1rem;
  font-size: 1.1rem;
  border-radius: 10px;
  height: 38px;
  border: 1px solid #222831;
  background: #fbffff;
`;
