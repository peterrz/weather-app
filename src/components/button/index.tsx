import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  width: 140px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(
    91deg,
    rgba(144, 217, 224, 0.9) 0.2%,
    rgba(84, 96, 230, 0.9) 100%
  );
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
  margin: 5px;
  font-size: 1.1rem;
  &:hover {
    background-color: #2980b9;
  }
`;
