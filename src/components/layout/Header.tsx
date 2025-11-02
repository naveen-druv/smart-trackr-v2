import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const width = useWindowWidth();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const showInlineNav = width <= 900 && width > 650;
  const showMobileMenu = width <= 650;

  return (
    <HeaderContainer>
      <Logo to='/'>Smart Trackr</Logo>

      {/* Inline nav for tablet */}
      {showInlineNav && (
        <NavLinks>
          <NavItem to='/' $active={location.pathname === '/'}>
            Home
          </NavItem>
          <NavItem to='/about' $active={location.pathname === '/about'}>
            About
          </NavItem>
          <NavItem to='/settings' $active={location.pathname === '/settings'}>
            Settings
          </NavItem>
        </NavLinks>
      )}

      <RightSection>
        <ThemeToggle />
        {/* Hamburger for mobile */}
        {showMobileMenu && (
          <MenuButton onClick={toggleMenu}>
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </MenuButton>
        )}
      </RightSection>

      {/* Mobile Drawer */}
      {showMobileMenu && (
        <>
          <Overlay $open={isMenuOpen} onClick={toggleMenu} />
          <MobileDrawer $open={isMenuOpen}>
            <NavItem
              to='/'
              $active={location.pathname === '/'}
              onClick={toggleMenu}>
              Home
            </NavItem>
            <NavItem
              to='/about'
              $active={location.pathname === '/about'}
              onClick={toggleMenu}>
              About
            </NavItem>
            <NavItem
              to='/settings'
              $active={location.pathname === '/settings'}
              onClick={toggleMenu}>
              Settings
            </NavItem>
          </MobileDrawer>
        </>
      )}
    </HeaderContainer>
  );
};

/* ===================== STYLES ===================== */

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  height: 5rem;
  width: 100%;
  padding: 0 2rem;
  position: relative;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const Logo = styled(Link)`
  color: #fff;
  font-weight: 700;
  font-size: 2.4rem;
  text-decoration: none;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled(Link)<{ $active?: boolean }>`
  color: ${({ $active }) => ($active ? '#ffea00' : '#fff')};
  font-size: 1.4rem;
  text-decoration: none;
  transition: color 0.2s ease;
  &:hover {
    color: #ffea00;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  @media (max-width: 650px) {
    display: block;
  }
`;

const MobileDrawer = styled.div<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: ${({ $open }) => ($open ? '0' : '-100%')};
  width: 60%;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
  padding: 5rem 2rem;
  transition: right 0.3s ease;
  z-index: 1001;
`;

const Overlay = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'block' : 'none')};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;
