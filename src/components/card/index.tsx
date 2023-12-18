import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps {
  children: ReactNode;
  wrap?: boolean;
}

const Card: React.FC<CardProps> = ({ children, wrap }) => {
  return <CardWrapper wrap={wrap ?? false}>{children}</CardWrapper>;
};

export default Card;

const CardWrapper = styled.div<{wrap: boolean}>`
  border-radius: 12px;
  background: rgba(39, 46, 55, 0.99);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.8rem;
  justify-content:  ${({wrap}) => wrap ? 'start' : 'space-between'};
  flex-wrap: ${({wrap}) => wrap ? 'wrap' : 'nowrap'};
  gap: 1rem;
  @media (max-width: 1340px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

