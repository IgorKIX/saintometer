import { Grid, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';

import { IIntention } from '../types';

type Props = {
  intentionsList: IIntention[];
};

function IntentionsListComponent({ intentionsList }: Props) {
  return (
    <Grid container direction="column" spacing={2}>
      <List>
        {intentionsList.map(({ id, name }) => (
          <ListItem key={id}>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}

export default IntentionsListComponent;
