import React from 'react';
import { useParams } from 'react-router-dom';

import { IntentionEventsListComponent } from '../features/intention';

export default function Intention() {
  const { intentionId } = useParams();

  return <IntentionEventsListComponent intentionId={intentionId} />;
}
