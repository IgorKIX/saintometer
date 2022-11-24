import { CssBaseline } from '@mui/material';
import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Intention from './pages/intention';
import IntentionsList from './pages/intentions-list';
import NotFound from './pages/not-found';

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <IntentionsList />,
      errorElement: <NotFound />,
    },
    {
      path: 'intention-events-list/:intentionId',
      element: <Intention />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
