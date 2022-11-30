import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import StarBorder from '@mui/icons-material/StarBorder';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

import { IEvent } from '../../intentions-list/types';

type Props = {
  events: IEvent[];
  handleOpenDialog: () => void;
};

export default function IntentionEventsListComponent({
  events,
  handleOpenDialog,
}: Props) {
  return (
    <List component="div" disablePadding>
      {events.map(event => {
        return (
          <ListItem key={event.id}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={event.name} />
          </ListItem>
        );
      })}
      <ListItem sx={{ justifyContent: 'center' }}>
        <AddCircleOutlineIcon onClick={handleOpenDialog} />
      </ListItem>
    </List>
  );
}
