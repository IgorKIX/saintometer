import { CssBaseline, Container, Box } from '@mui/material';
import React from 'react';

import './App.css';
import { BottomToolbar } from './components/bottom-toolbar/';
import IntentionsList from './pages/intentions-list';

function App() {
  return (
    <>
      <CssBaseline />
      <Container
        sx={{ height: '100vh', display: 'grid', gridTemplateRows: '1fr 56px' }}
      >
        <Box sx={{ gridRow: '1 / 2' }}>
          <IntentionsList />
        </Box>
        <Box sx={{ gridRow: '2 / 3' }}>
          <BottomToolbar />
        </Box>
      </Container>
    </>
  );
}

export default App;
