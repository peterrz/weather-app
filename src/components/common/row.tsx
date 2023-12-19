import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const Row: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Row;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  color: #fff;
  font-size: 1.3rem;
  @media screen and (max-width: 1340px) {
    flex-direction: column;
  }
`;
