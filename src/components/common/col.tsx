import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const Col: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Col;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
gap: 2rem;
`;

