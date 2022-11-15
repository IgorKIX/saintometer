import { CssBaseline, Container, Box } from '@mui/material';
import React from 'react';

import './App.css';
import { BottomToolbar } from './components/bottom-toolbar/';
import IntentionsList from './pages/intentions-list';

function App() {
  return (
    <>
      <CssBaseline />
      <IntentionsList />
      <BottomToolbar />
    </>
  );
}

export default App;
