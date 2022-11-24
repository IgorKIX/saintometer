import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import React from 'react';

import useGetIntentions from '../hooks/useGetIntentions';

function IntentionsListComponent() {
  const { data, isSuccess } = useGetIntentions();
  if (!isSuccess) {
    return <div>un success</div>;
  }
  return (
    <Grid container direction="column" spacing={2}>
      <List>
        {data.map(({ id, name, description }) => (
          <ListItem key={id}>
            <ListItemButton href={`intention/${id}`}>
              <ListItemText primary={name} secondary={description} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}

export default IntentionsListComponent;