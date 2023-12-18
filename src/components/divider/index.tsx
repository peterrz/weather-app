import React from 'react';
import styled from 'styled-components';

const Divider: React.FC = () => {
  return <StyledDivider />;
};

export default Divider;

const StyledDivider = styled.div`
  border-radius: 8px;
  border: none;
  background: #D9D9D9;
  width: 2px;
  height: 170px;
  flex-shrink: 0;

  @media (max-width: 1340px) {
    width: 264px;
    height: 2px;
  }
`;