import React from 'react';
import AuthPage from '../components/auth/AuthPage';
import styled from 'styled-components';

export const Landing: React.FC = () => {
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
