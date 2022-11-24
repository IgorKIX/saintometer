import { Container } from '@mui/material';
import React, { useState } from 'react';

import {
  IntentionsListBottomToolbarComponent,
  IntentionsListToolbarComponent,
  IntentionsListComponent,
  IntentionsListDialogComponent,
} from '../features/intentions-list';

function IntentionsList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClickOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

  return (
    <>
      <IntentionsListToolbarComponent />
      <Container>
        <IntentionsListComponent />
      </Container>
      <IntentionsListDialogComponent
        isDialogOpen={isDialogOpen}
        handleCloseDialog={handleCloseDialog}
      />
      <IntentionsListBottomToolbarComponent
        handleClickOpenDialog={handleClickOpenDialog}
      />
    </>
  );
}

export default IntentionsList;
