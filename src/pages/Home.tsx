import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Button } from '../components/ui/Button';
import { toggleTheme } from '../slice/theme/themeSlice';
import { selectUser } from '../slice/user/userSlice';

const Wrapper = styled.div`
  text-align: center;
  padding: 4rem;
`;

export const Home = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  console.info('user: ', user);
  return (
    <Wrapper>
      <h1>Hello {user?.username}</h1>, <h2>Welcome to the React TS App 🚀</h2>
      <p>
        This app supports dark & light themes with Redux + Styled Components.
      </p>
      <Button onClick={() => dispatch(toggleTheme())}>Toggle Theme</Button>
    </Wrapper>
  );
};
export default Home;
