import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import useGetIntentions from '../../../db/hooks/intentions/useGetIntentions';

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
            <ListItemButton component={Link} to={`intention/${id}`}>
              <ListItemText primary={name} secondary={description} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}

export default IntentionsListComponent;
