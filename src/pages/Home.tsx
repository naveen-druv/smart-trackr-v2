import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../app/hooks';
import { Button } from '../components/ui/Button';
import { toggleTheme } from '../features/themes/themeSlice';

const Wrapper = styled.div`
  text-align: center;
  padding: 4rem;
`;

export const Home = () => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <h1>Welcome to the React TS App 🚀</h1>
      <p>
        This app supports dark & light themes with Redux + Styled Components.
      </p>
      <Button onClick={() => dispatch(toggleTheme())}>Toggle Theme</Button>
    </Wrapper>
  );
};
export default Home;
