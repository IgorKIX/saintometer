import { useMutation, useQueryClient } from 'react-query';

import { DATABASE_TABLES_NAMES } from '../../../utils/database.types';
import supabase from '../../../utils/supabase';
import { IIntention } from '../types';

const addIntention = async (intention: IIntention) => {
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
      queryClient.refetchQueries(DATABASE_TABLES_NAMES.INTENTIONS).catch(er => {
        console.error(er);
      });
    },
  });
}
