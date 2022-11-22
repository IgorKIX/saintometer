import { CssBaseline } from '@mui/material';
import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BottomToolbar } from './components/bottom-toolbar/';
import Intention from './pages/intention';
import IntentionsList from './pages/intentions-list';
import NotFound from './pages/not-found';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <IntentionsList />,
      errorElement: <NotFound />,
    },
    {
      path: 'intention/:intentionId',
      element: <Intention />,
    },
  ]);

  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
      <BottomToolbar />
    </>
  );
}

export default App;
