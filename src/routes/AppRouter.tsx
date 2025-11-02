import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Landing } from '../pages/LandingPage';
import { RootLayout } from '../components/layout/RootLayout';
import { NotFound } from '../pages/NotFound';
import Home from '../pages/Home';
import { useAppSelector } from '../app/hooks';
import { selectUser } from '../slice/user/userSlice';

export const AppRouter = () => {
  const user = useAppSelector(selectUser);

  return (
    <Routes>
      {/* Landing page */}
      <Route path='/login' element={<Landing />} />

      {/* Protected routes */}
      <Route
        path='/*'
        element={
          user ? (
            <RootLayout>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </RootLayout>
          ) : (
            <Navigate to='/login' />
          )
        }
      />
    </Routes>
  );
};
