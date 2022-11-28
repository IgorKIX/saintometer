import { Collapse, Divider, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';

import { IEvent } from '../../intentions-list/types';
import IntentionEventsListComponent from '../intention-events-list/intention-events-list.component';

type Props = {
  intentionId?: number;
  score?: number;
  events: IEvent[];
};

export default function IntentionDataComponent({
  intentionId = 0,
  events,
  score = 0,
}: Props) {
  return (
    <List>
      <ListItem key={0}>
        <ListItemText primary="Score" secondary={score} />
      </ListItem>
      <Divider />
      <ListItem key={1}>
        <ListItemText primary="Events" />
      </ListItem>
      <Collapse in unmountOnExit>
        <IntentionEventsListComponent events={events} />
      </Collapse>
    </List>
  );
}
