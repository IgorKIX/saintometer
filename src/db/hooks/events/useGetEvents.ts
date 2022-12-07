import { useQuery } from 'react-query';

import { DATABASE_TABLES_NAMES } from '../../database.types';
import supabase from '../../supabase';

const fetchEvents = async (intentionId: string) => {
  const { data, error } = await supabase
    .from(DATABASE_TABLES_NAMES.EVENTS)
    .select('id,name,score')
    .eq('intention_id', intentionId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default function useGetEvents(intentionId: string) {
  return useQuery(
    [DATABASE_TABLES_NAMES.EVENTS, intentionId],
    () => fetchEvents(intentionId),
    {
      enabled: Boolean(intentionId),
    },
  );
}
