import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import { AppBar, Grid, Toolbar } from '@mui/material';
import React from 'react';

interface Props {
  onClick: () => void;
}

function IntentionsToolbarComponent({ onClick }: Props) {
  return (
    <>
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
      <Toolbar />
    </>
  );
}

export default IntentionsToolbarComponent;
