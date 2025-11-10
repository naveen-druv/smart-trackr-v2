import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  purpose: 'primary' | 'secondary';
  type?: string;
  value: string;
  onClick?: (e: React.FormEvent) => Promise<void>;
}
export const Button: React.FC<ButtonProps> = ({ purpose, value, onClick }) => {
  return (
    <Container purpose={purpose} onClick={onClick}>
      {value}
    </Container>
  );
};

const Container = styled.div<{ purpose: string }>`
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24rem;
  min-width: 18rem;
  border: none;
  background-color: ${({ theme, purpose }) =>
    purpose === 'primary' ? theme.primary : ''};
  color: aliceblue;
  font-size: 1.8rem;
  min-height: 4rem;
  border-radius: 2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
