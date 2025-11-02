import React from 'react';
import { RootLayout } from './components/layout/RootLayout';
import { AppRouter } from './routes/AppRouter';

export default function App() {
  return (
    <RootLayout>
      <AppRouter />
    </RootLayout>
  );
}
