import { useMutation, useQueryClient } from 'react-query';

import { TNewIntention } from '../../../features/intentions-list/types';
import { DATABASE_ALL, DATABASE_TABLES_NAMES } from '../../database.types';
import supabase from '../../supabase';

const addIntention = async (intention: TNewIntention) => {
  const { error } = await supabase
    .from(DATABASE_TABLES_NAMES.INTENTIONS)
    .upsert(intention)
    .single();

  if (error) {
    throw error;
  }
};

export default function useAddIntention() {
  const queryClient = useQueryClient();
  return useMutation(addIntention, {
    onSuccess: () => {
      // TODO: Better error handling
      queryClient
        .refetchQueries([DATABASE_TABLES_NAMES.INTENTIONS, DATABASE_ALL])
        .catch(er => {
          console.error(er);
        });
    },
  });
}
