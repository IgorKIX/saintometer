import { useQuery, useQueryClient } from 'react-query';

import { TIntention } from '../../../features/intentions-list/types';
import { DATABASE_ALL, DATABASE_TABLES_NAMES } from '../../database.types';
import supabase from '../../supabase';

const fetchIntention = async (intentionId: string) => {
  const { data, error } = await supabase
    .from(DATABASE_TABLES_NAMES.INTENTIONS)
    .select('name,description,score')
    .eq('id', intentionId)
    .limit(1)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default function useGetIntention(intentionId: string) {
  const queryClient = useQueryClient();
  return useQuery(
    [DATABASE_TABLES_NAMES.INTENTIONS, intentionId],
    () => fetchIntention(intentionId),
    {
      enabled: Boolean(intentionId),
      initialData: () => {
        const allIntentions = queryClient.getQueryData<TIntention[]>([
          DATABASE_TABLES_NAMES.INTENTIONS,
          DATABASE_ALL,
        ]);

        const filteredIntention = allIntentions?.find(
          intention => intention.id.toString() === intentionId,
        );
        return filteredIntention ? filteredIntention : undefined;
      },
    },
  );
}
