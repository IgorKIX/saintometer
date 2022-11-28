import { useQuery } from 'react-query';

import { DATABASE_TABLES_NAMES } from '../../../utils/database.types';
import supabase from '../../../utils/supabase';

const fetchIntention = async (intentionId: string) => {
  const { data, error } = await supabase
    .from(DATABASE_TABLES_NAMES.INTENTIONS)
    .select('name,description,score')
    .eq('id', intentionId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default function useGetIntention(intentionId: string) {
  return useQuery(DATABASE_TABLES_NAMES.INTENTIONS, () =>
    fetchIntention(intentionId),
  );
}
