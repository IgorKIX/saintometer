import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import { AppBar, Grid, Slide, Toolbar, useScrollTrigger } from '@mui/material';
import React from 'react';

interface Props {
  onClick: () => void;
}

function IntentionsToolbarComponent({ onClick }: Props) {
  const trigger = useScrollTrigger();

  return (
    <>
      <Slide appear={false} in={!trigger}>
        <AppBar color="inherit">
          <Toolbar>
            <Grid container justifyContent="end" spacing={2}>
              <Grid item>
                <AddCircleOutlineSharpIcon
                  onClick={onClick}
                  fontSize="large"
                  aria-label="Add"
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </>
  );
}

export default IntentionsToolbarComponent;
