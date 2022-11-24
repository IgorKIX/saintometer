import React from 'react';

type Props = {
  intentionId: string | undefined;
};

export default function IntentionEventsListComponent({ intentionId }: Props) {
  return <div>Intention {intentionId}</div>;
}
