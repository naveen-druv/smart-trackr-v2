import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/layout/Header';
import { Container } from './components/ui/Container';
import { AppRouter } from './routes/AppRouter';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <>
      <Header />
      <Container>
        <AppRouter />
      </Container>
      <Footer />
    </>
  );
}

export default App;
