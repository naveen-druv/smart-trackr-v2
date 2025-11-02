import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  text-align: center;
  padding: 1rem;
  margin-top: 3rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Footer = () => (
  <Foot>© {new Date().getFullYear()} My React TS App</Foot>
);
