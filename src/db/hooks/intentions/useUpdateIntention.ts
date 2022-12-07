import { useMutation, useQueryClient } from 'react-query';

import { TUpdateIntention } from '../../../features/intentions-list/types';
import { DATABASE_ALL, DATABASE_TABLES_NAMES } from '../../database.types';
import supabase from '../../supabase';

const updateIntention = async (
  intentionId: string,
  colToChange: TUpdateIntention,
) => {
  const { error } = await supabase
    .from(DATABASE_TABLES_NAMES.INTENTIONS)
    .update(colToChange)
    .eq('intention_id', intentionId);

  if (error) {
    throw error;
  }
};

export default function useUpdateIntention(
  intentionId: string,
) {
  const queryClient = useQueryClient();
  return useMutation(
    (colToChange: TUpdateIntention) =>
      updateIntention(intentionId, colToChange),
    {
      onSuccess: () => {
        // TODO: Better error handling
        queryClient
          .refetchQueries([DATABASE_TABLES_NAMES.INTENTIONS, DATABASE_ALL])
          .catch(er => {
            console.error(er);
          });
      },
    },
  );
}
