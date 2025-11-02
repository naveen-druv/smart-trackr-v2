import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface ThemeState {
  lightMode: boolean;
}

const initialState: ThemeState = {
  lightMode:
    (localStorage.getItem('theme') as 'light' | 'dark') === 'light'
      ? true
      : false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.lightMode = !state.lightMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectLightMode = (state: RootState) => state.theme.lightMode;
export default themeSlice.reducer;
