// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './Global.css';
import './Fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from './contexts/ThemeContext'; // Assurez-vous d'importer le ThemeProvider correctement
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/register',
      element: <RegisterPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '*',
      element: <HomePage />
    }
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
