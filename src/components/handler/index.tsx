import React from 'react';
import styled from 'styled-components';

interface ErrorFallbackProps {
  error: Error;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => (
  <ErrorContainer>
    <div>
    <h4>Something went wrong:</h4>
    <p>{error.message}</p>
    </div>
    <Button onClick={()=> console.log('rest')}>Try again</Button>
  </ErrorContainer>
);

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
  margin-top: 1.5rem;
  align-self: end;
`;
