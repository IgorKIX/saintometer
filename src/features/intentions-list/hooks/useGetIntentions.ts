import { useQuery } from 'react-query';

import { DATABASE_TABLES_NAMES } from '../../../utils/database.types';
import supabase from '../../../utils/supabase';

const fetchIntentions = async () => {
  const { data, error } = await supabase
    .from(DATABASE_TABLES_NAMES.INTENTIONS)
    .select('id,name,description,score');

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default function useGetIntentions() {
  return useQuery('intentions', () => fetchIntentions());
}
