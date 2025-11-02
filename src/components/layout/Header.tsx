import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
`;

const StyledLink = styled(Link)`
  color: #fff;
  margin: 0 1rem;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = () => (
  <Nav>
    <div>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/about'>About</StyledLink>
    </div>
    <ThemeToggle />
  </Nav>
);
