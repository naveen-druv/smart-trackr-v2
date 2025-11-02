import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleTheme } from '../../features/themes/themeSlice';

const ToggleButton = styled.button`
  background: none;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 20px;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  font-weight: bold;
`;

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const lightMode = useAppSelector((state) => state.theme.lightMode);

  return (
    <ToggleButton onClick={() => dispatch(toggleTheme())}>
      {lightMode ? '🌙 Dark' : '☀️ Light'}
    </ToggleButton>
  );
};
