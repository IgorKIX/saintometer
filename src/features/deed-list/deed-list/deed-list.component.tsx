import { Grid, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';

import { TDeed } from '../types';

type Props = {
  goodDeeds: TDeed[];
  sins: TDeed[];
};

function DeedListComponent({ goodDeeds, sins }: Props) {
  return (
    <Grid container direction="column" spacing={2}>
      <List>
        {goodDeeds.map(({ id, name, weight }) => (
          <ListItem key={id}>
            <ListItemText primary={name} secondary={weight} />
          </ListItem>
        ))}
        {sins.map(({ id, name, weight }) => (
          <ListItem key={id}>
            <ListItemText primary={name} secondary={weight} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}

export default DeedListComponent;
