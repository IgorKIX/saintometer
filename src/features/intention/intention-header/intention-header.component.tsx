import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

type Props = {
  name: string;
};

export default function IntentionHeaderComponent({ name }: Props) {
  return (
    <>
      <AppBar color="inherit">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
