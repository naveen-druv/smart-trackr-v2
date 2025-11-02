import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface RootLayoutProps {
  children?: React.ReactNode;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <GridContainer>
      <Header />
      <MainContent>
        <Sidebar />
        <Content>{children}</Content>
      </MainContent>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: hidden;
`;

const Content = styled.main`
  padding: 1.5rem;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;
