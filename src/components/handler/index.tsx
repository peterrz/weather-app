import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface ErrorFallbackProps {
  error: Error;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  const navigate = useNavigate();

  const handleTryAgain = () => {
    // Navigate to the home route or any other route you desire
    navigate('/');
  };

  return (
    <ErrorContainer>
      <div>
        <h3>Something went wrong:</h3>
        <h5>{error.message}</h5>
      </div>
      <Button onClick={handleTryAgain}>Try again</Button>
    </ErrorContainer>
  );
};

export default ErrorFallback;

const ErrorContainer = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  padding: 1rem;
  margin: 10px 0;
  border-radius: 10px;
  width: 360px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  color: #721c24;
  width: 120px;
  height: 38px; 
  border-radius: 10px; 
  border: 1px solid #721c24;
  margin-top: 1rem;
  align-self: end;
  cursor: pointer;

  &:hover {
    background: #f5c6cb;
  }
`;
