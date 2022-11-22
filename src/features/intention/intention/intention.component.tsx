import React from 'react';

type Props = {
  intentionId: string | undefined;
};

export default function IntentionComponent({ intentionId }: Props) {
  return <div>Intention {intentionId}</div>;
}
