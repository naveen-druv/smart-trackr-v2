import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { useAppSelector } from './app/hooks';
import { selectLightMode } from './features/themes/themeSlice';
import { darkTheme, lightTheme } from './features/themes/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './features/themes/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';

const ThemedApp = () => {
  const theme = useAppSelector(selectLightMode) ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemedApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
