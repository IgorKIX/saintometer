import { Collapse, Divider, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';

import useGetIntention from '../../../db/hooks/intentions/useGetIntention';
import IntentionEventsListComponent from '../intention-events-list/intention-events-list.component';

type Props = {
  intentionId: string;
  handleOpenDialog: () => void;
};

export default function IntentionDataComponent({
  handleOpenDialog,
  intentionId,
}: Props) {
  const { data: intentionData, isSuccess } = useGetIntention(intentionId);

  if (isSuccess) {
    return (
      <List>
        <ListItem key={0}>
          <ListItemText primary="Score" secondary={intentionData.score} />
        </ListItem>
        <Divider />
        <ListItem key={1}>
          <ListItemText primary="Events" />
        </ListItem>
        <Collapse in unmountOnExit>
          <IntentionEventsListComponent
            intentionId={intentionId}
            handleOpenDialog={handleOpenDialog}
          />
        </Collapse>
      </List>
    );
  }

  return <div>Intention info is loading...</div>;
}
