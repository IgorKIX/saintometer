import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { mockData } from '../data';
import {
  IntentionsToolbarComponent,
  IntentionsListComponent,
  IntentionsDialogComponent,
} from '../features/intentions-list';
import {
  IIntention,
  IIntentionFormInputs,
} from '../features/intentions-list/types';

function IntentionsList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [intentionsList, setIntentionsList] = useState<IIntention[]>(
    [] as IIntention[],
  );

  useEffect(() => {
    setIntentionsList(mockData);
  }, []);

  const handleClickOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

  const addIntention = ({ name }: IIntentionFormInputs) => {
    setIntentionsList(prevState => {
      return [
        ...prevState,
        {
          id: (prevState.length + 1).toString(),
          name,
        },
      ];
    });
  };

  return (
    <>
      <IntentionsToolbarComponent onClick={handleClickOpenDialog} />
      <Container>
        <IntentionsListComponent intentionsList={intentionsList} />
      </Container>
      <IntentionsDialogComponent
        addIntention={addIntention}
        isDialogOpen={isDialogOpen}
        handleCloseDialog={handleCloseDialog}
      />
    </>
  );
}

export default IntentionsList;
