import React, { useEffect, useState } from 'react';
import SignIn from './SignIn';
import styled from 'styled-components';
import SignUp from './SignUp';
import { useLocation } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  // const location = useLocation();
  // useEffect(() => {
  //   if (location.pathname === '/login' && isSignIn !== true) setIsSignIn(true);
  // }, [isSignIn, location.pathname]);
  return (
    <Container>
      <Card>
        <ToggleContainer>
          <ToggleLink
            onClick={() => setIsSignIn(!isSignIn)}
            active={isSignIn}
            disabled={isSignIn}>
            Sign In
          </ToggleLink>
          <ToggleLink
            onClick={() => setIsSignIn(!isSignIn)}
            active={!isSignIn}
            disabled={!isSignIn}>
            Sign Up
          </ToggleLink>
        </ToggleContainer>
        <SectionContainer>
          {isSignIn ? <SignIn /> : <SignUp />}
        </SectionContainer>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: calc(100vh - 5rem); */
  height: 85%;
  width: 90%;
  /* background-color: ${({ theme }) => theme.background}; */
  /* background-color: lightblue; */
  border-radius: 1rem;
`;

const Card = styled.div`
  /* background-color: ${({ theme }) => theme.primary}; */
  padding: 1.6rem;
  border-radius: 1rem;
  height: 100%;
  width: 70%;
  min-width: 70%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ToggleContainer = styled.p`
  height: 4rem;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionContainer = styled.div`
  height: calc(100% - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleLink = styled.span<{ active: boolean; disabled?: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 600;
  min-height: 4rem;
  color: ${({ active }) => (active ? 'white' : 'black')};
  background-color: ${({ active, theme }) => (active ? theme.primary : '')};
  transition: all 0.5s ease-in-out;
  /* opacity: ${({ disabled }) => (disabled ? 0.7 : 1)}; */
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: pointer;

  &:hover {
    background-color: ${({ active, disabled, theme }) =>
      disabled ? (active ? theme.primary : '') : active ? '#222' : '#f0f0f0'};
  }
`;

export default AuthPage;
