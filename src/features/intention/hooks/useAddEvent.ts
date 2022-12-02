import { useMutation, useQueryClient } from 'react-query';

import { DATABASE_TABLES_NAMES } from '../../../utils/database.types';
import supabase from '../../../utils/supabase';
import { TNewEvent } from '../types';

const addEvent = async (event: TNewEvent) => {
  const { error } = await supabase
    .from(DATABASE_TABLES_NAMES.EVENTS)
    .upsert(event)
    .single();

  if (error) {
    throw error;
  }
};

export default function useAddEvent() {
  const queryClient = useQueryClient();
  return useMutation(addEvent, {
    onSuccess: () => {
      // TODO: Better error handling
      queryClient.refetchQueries(DATABASE_TABLES_NAMES.EVENTS).catch(er => {
        console.error(er);
      });
    },
  });
}
