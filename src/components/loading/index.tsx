import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoadingProps {
  size?: number;
}

const Loading: React.FC<LoadingProps> = ({ size }) => {
  return (
    <LoadingWrapper>
      <StyledLoader size={size ?? 24} />{' '}
    </LoadingWrapper>
  );
};

export default Loading;

const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div<{ size: number }>`
  border: 4px solid #6383d2;
  border-top: 4px solid #586cd3;
  border-radius: 50%;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  animation: ${rotate} 1.3s linear infinite;
`;
