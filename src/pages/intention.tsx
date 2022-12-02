import React from 'react';
import { Link, useParams } from 'react-router-dom';

import {
  IntentionDataComponent,
  IntentionEventDialogComponent,
  IntentionHeaderComponent,
} from '../features/intention';
import useGetIntention from '../features/intention/hooks/useGetIntention';
import useDialog from '../hooks/useDialog';

export default function Intention() {
  const { intentionId = '' } = useParams();
  const { data: intentionData, isSuccess: isSuccessIntention } =
    useGetIntention(intentionId);
  const { isDialogOpen, handleOpenDialog, handleCloseDialog } =
    useDialog(false);

  if (isSuccessIntention) {
    return (
      <>
        <IntentionHeaderComponent name={intentionData.name} />
        <IntentionDataComponent
          intentionId={intentionId}
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
