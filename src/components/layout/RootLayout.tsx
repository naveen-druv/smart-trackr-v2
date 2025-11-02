import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { useWindowWidth } from '../../hooks/useWindowWidth';

interface RootLayoutProps {
  children?: React.ReactNode;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const width = useWindowWidth();
  const showSidebar = width > 950;

  return (
    <GridContainer>
      <Header />
      <MainContent $showSidebar={showSidebar}>
        {showSidebar && <Sidebar />}
        <Content>{children}</Content>
      </MainContent>
    </GridContainer>
  );
};

/* ===================== STYLES ===================== */

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr;
  height: 100vh;
  width: 100vw;
`;

const MainContent = styled.div<{ $showSidebar: boolean }>`
  display: grid;
  grid-template-columns: ${({ $showSidebar }) =>
    $showSidebar ? '15rem 1fr' : '1fr'};
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: grid-template-columns 0.3s ease;
`;

const Content = styled.main`
  padding: 1.5rem;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;
