import { CssBaseline, Container } from '@mui/material';
import React from 'react';

import './App.css';
import { BottomToolbar } from './components/bottom-toolbar/';
import DeedList from './pages/deed-list';

function App() {
  return (
    <>
      <CssBaseline />
      <Container
        sx={{ height: '100vh', display: 'grid', gridTemplateRows: '1fr 56px' }}
      >
        <DeedList />
        <BottomToolbar />
      </Container>
    </>
  );
}

export default App;
