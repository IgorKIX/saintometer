import StarBorder from '@mui/icons-material/StarBorder';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

import { IEvent } from '../../intentions-list/types';

type Props = {
  events: IEvent[];
};

export default function IntentionEventsListComponent({ events }: Props) {
  return (
    <List component="div" disablePadding>
      {events.map(event => {
        return (
          <ListItem key={event.id}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        );
      })}
    </List>
  );
}
