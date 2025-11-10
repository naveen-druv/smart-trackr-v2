import React, { useEffect } from 'react';
import AuthPage from '../components/auth/AuthPage';
import styled from 'styled-components';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';

export const Landing: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (navigate || location) {
      console.info('Landing/navigate: ', navigate);
      console.info('Landing/navigation: ', location);
    }
  }, [navigate, location]);
  return (
    <AuthContainer>
      <AuthPage />
    </AuthContainer>
  );
};

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* full viewport height */
  background-color: ${({ theme }) => theme.background};
`;
