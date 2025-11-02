import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <SidebarContainer>
      <NavList>
        <NavItem to='/' $active={location.pathname === '/'}>
          🏠 Home
        </NavItem>
        <NavItem to='/about' $active={location.pathname === '/about'}>
          📄 About
        </NavItem>
        <NavItem to='/settings' $active={location.pathname === '/settings'}>
          ⚙️ Settings
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  width: 15rem;
  height: 100%;
  padding-top: 2rem;
  transition: transform 0.3s ease;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled(Link)<{ $active?: boolean }>`
  display: block;
  padding: 1rem 1.5rem;
  color: ${({ $active, theme }) => ($active ? theme.primary : theme.text)};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;
