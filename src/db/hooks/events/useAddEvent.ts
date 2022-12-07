import { useMutation, useQueryClient } from 'react-query';

import { TNewEvent } from '../../../features/intention/types';
import { DATABASE_TABLES_NAMES } from '../../database.types';
import supabase from '../../supabase';
import useUpdateIntention from '../intentions/useUpdateIntention';

const addEvent = async (event: TNewEvent) => {
  const { error } = await supabase
    .from(DATABASE_TABLES_NAMES.EVENTS)
    .upsert(event)
    .single();

  if (error) {
    throw error;
  }
};

export default function useAddEvent(intentionId: string) {
  const queryClient = useQueryClient();
  return useMutation(addEvent, {
    onSuccess: () => {
      // TODO: Better error handling
      queryClient
        .refetchQueries([DATABASE_TABLES_NAMES.EVENTS, intentionId])
        .catch(er => {
          console.error(er);
        });
    },
  });
}
