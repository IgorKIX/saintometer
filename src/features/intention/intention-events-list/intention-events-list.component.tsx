import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import StarBorder from '@mui/icons-material/StarBorder';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

import useGetEvents from '../../../db/hooks/events/useGetEvents';

type Props = {
  intentionId: string;
  handleOpenDialog: () => void;
};

export default function IntentionEventsListComponent({
  intentionId,
  handleOpenDialog,
}: Props) {
  const { data: eventsList, isSuccess } = useGetEvents(intentionId);

  if (isSuccess) {
    return (
      <List component="div" disablePadding>
        {eventsList.map(event => {
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
  return <div>Loading Events...</div>;
}
