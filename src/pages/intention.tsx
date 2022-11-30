import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  IntentionDataComponent,
  IntentionEventDialogComponent,
  IntentionHeaderComponent,
} from '../features/intention';
import useGetEvents from '../features/intention/hooks/useGetEvents';
import useGetIntention from '../features/intention/hooks/useGetIntention';
import { IIntention } from '../features/intentions-list/types';
import useDialog from '../hooks/useDialog';

export default function Intention() {
  const { intentionId = '' } = useParams();
  const { data: intentionData, isSuccess: isSuccessIntention } =
    useGetIntention(intentionId);
  const { data: eventList, isSuccess: isSuccessEventList } =
    useGetEvents(intentionId);
  const { isDialogOpen, handleOpenDialog, handleCloseDialog } =
    useDialog(false);
  const [intention, setIntention] = useState({} as IIntention);

  useEffect(() => {
    if (intentionData) {
      setIntention(intentionData[0]);
    }
  }, [intentionData]);

  if (isSuccessIntention && isSuccessEventList && intention) {
    return (
      <>
        <IntentionHeaderComponent name={intention.name} />
        <IntentionDataComponent
          events={eventList}
          score={intention.score}
          handleOpenDialog={handleOpenDialog}
        />
        <IntentionEventDialogComponent
          intentionId={Number(intentionId) || 0}
          isDialogOpen={isDialogOpen}
          handleCloseDialog={handleCloseDialog}
        />
      </>
    );
  }
  return <div>unSuccess</div>;
}
