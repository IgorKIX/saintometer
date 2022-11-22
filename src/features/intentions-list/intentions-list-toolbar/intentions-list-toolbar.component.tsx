import { AppBar, Slide, Toolbar, useScrollTrigger } from '@mui/material';
import React from 'react';

function IntentionsListToolbarComponent() {
  const trigger = useScrollTrigger();

  return (
    <>
      <Slide appear={false} in={!trigger}>
        <AppBar color="inherit">
          <Toolbar />
        </AppBar>
      </Slide>
      <Toolbar />
    </>
  );
}

export default IntentionsListToolbarComponent;
