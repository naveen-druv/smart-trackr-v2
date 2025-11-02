import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeToggle } from './ThemeToggle';
import { RootState } from '../../app/store';
import { Avatar } from '../ui/Avatar';
import { setLoggedOutUser } from '../../slice/user/userSlice';

export const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.userdata);
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(setLoggedOutUser());
    localStorage.removeItem('user');
  };

  return (
    <HeaderContainer>
      <Logo to='/'>Smart Trackr</Logo>
      {user && (
        <AvatarContainer ref={dropdownRef}>
          <Avatar
            photo={user.profilePhoto}
            size={40}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <Dropdown isMobile={window.innerWidth <= 650} open={dropdownOpen}>
              <DropdownItem>
                <ThemeToggle />
              </DropdownItem>
              <DropdownItem>
                <strong>{user.username || user.email}</strong>
                <br />
                <small>{user.email}</small>
              </DropdownItem>
              <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
            </Dropdown>
          )}
        </AvatarContainer>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  position: relative;
`;

const Logo = styled(Link)`
  color: #fff;
  font-weight: 600;
  font-size: 2.5rem;
`;

const AvatarContainer = styled.div`
  position: relative;
`;

const Dropdown = styled.div<{ isMobile?: boolean; open?: boolean }>`
  position: absolute;
  right: 0;
  top: 50px;
  background-color: ${({ theme }) =>
    theme.dropdownBackground || theme.background};
  color: ${({ theme }) => theme.dropdownText || theme.text};
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  min-width: 180px;
  padding: 0.5rem 0;
  z-index: 1000;
  transition: transform 0.3s ease, opacity 0.3s ease;

  @media (max-width: 650px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    opacity: ${({ open }) => (open ? 1 : 0)};
    border-radius: 0;
    padding-top: 5rem;
  }
`;

const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.dropdownHover || '#eee'};
  }

  small {
    color: ${({ theme }) => theme.dropdownSmallText || '#888'};
  }
`;
