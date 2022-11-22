import React from 'react';
import { useParams } from 'react-router-dom';

import { IntentionComponent } from '../features/intention';

export default function Intention() {
  const { intentionId } = useParams();

  return <IntentionComponent intentionId={intentionId} />;
}
