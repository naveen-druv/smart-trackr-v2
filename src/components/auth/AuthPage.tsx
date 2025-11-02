import React, { useState } from 'react';
import SignIn from './SignIn';
import styled from 'styled-components';
import SignUp from './SignUp';

const AuthPage: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  return (
    <Container>
      <Card>
        {isSignIn ? <SignIn /> : <SignUp />}
        <ToggleText>
          {isSignIn ? "Don't have an account?" : 'Already have an account?'}
          <ToggleLink onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? ' Sign Up' : ' Sign In'}
          </ToggleLink>
        </ToggleText>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 5rem);
  background-color: ${({ theme }) => theme.background};
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: 3rem 2rem;
  border-radius: 12px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
`;
const ToggleText = styled.p`
  margin-top: 1.5rem;
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
`;

const ToggleLink = styled.span`
  color: #ffea00;
  font-weight: 600;
  cursor: pointer;
  margin-left: 0.3rem;
`;

export default AuthPage;
