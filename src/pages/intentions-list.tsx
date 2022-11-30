import { Container } from '@mui/material';
import React, { useState } from 'react';

import {
  IntentionsListBottomToolbarComponent,
  IntentionsListToolbarComponent,
  IntentionsListComponent,
  IntentionsListDialogComponent,
} from '../features/intentions-list';
import useDialog from '../hooks/useDialog';

function IntentionsList() {
  const { isDialogOpen, handleOpenDialog, handleCloseDialog } =
    useDialog(false);

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
        handleClickOpenDialog={handleOpenDialog}
      />
    </>
  );
}

export default IntentionsList;
